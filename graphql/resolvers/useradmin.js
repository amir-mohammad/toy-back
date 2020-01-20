const UserAdmin = require('../../models/UserAdmins');
const bcryptJs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {validatorUserRegister,validateLogin} = require('../../util/validator');
const {UserInputError} = require('apollo-server-express');
const auth = require('../../util/auth');
const { createWriteStream, existsSync, mkdirSync } = require('fs');
const path = require('path');




module.exports =  {
 
   Mutation:{
     async register(_,{registerInput:{mobile,name,password,confirmPassword}},context,info){
        const user = auth(context);
      
        const {valid,errors} = validatorUserRegister(name,mobile,password,confirmPassword);

        if(!valid){
            throw new UserInputError('Errors',{errors});
        }

            const salt = await bcryptJs.genSalt(12);
            const hashPassword = await bcryptJs.hash(password,salt);

            let userAdmin = await UserAdmin.findOne({mobile});
            if(userAdmin){
                throw new Error("User Admin already exist");
            }

            const newUserAdmin = new UserAdmin({
                name,
                mobile,
                password:hashPassword,
                createAt: new Date().toISOString()
            });
          userAdmin = await newUserAdmin.save();
          const token =   jwt.sign({
              id:userAdmin.id,
              mobile:userAdmin.mobile,
              name:userAdmin.name
          },config.get('SecretKey'),{
              expiresIn:"1h"
          });

          return{
              ...userAdmin._doc,
              id:userAdmin.id,
              token
          }

       },

       async login(_,{mobile,password},context,info){

        const {valid,errors} = validateLogin(mobile,password);
        if(!valid){
            throw new UserInputError("Errors",{errors})
        }

            let userAdmin = await UserAdmin.findOne({mobile});
            if(!userAdmin){
                errors.mobile = "User does not exist";
                throw new UserInputError("Errors",{errors})
            }

            const match = await bcryptJs.compare(password,userAdmin.password);
            if(!match){
                errors.password = "Password is incorrect";
                throw new UserInputError("Errors",{errors})
            }

            const token =   jwt.sign({
                id:userAdmin.id,
                mobile:userAdmin.mobile,
                name:userAdmin.name
            },config.get('SecretKey'),{
                expiresIn:"1h"
            });

            return{
                ...userAdmin._doc,
                id:userAdmin.id,
                token
            }
       },
       multipleUpload({files:{files}}){
            console.log('hellooooo');
       }
     


   }
}