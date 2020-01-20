const {gql} = require('apollo-server-express');


const typeDefs = gql`
    
   
    type UserAdmin{
        id:ID!
        name:String!
        pic:String!
        mobile:String!
        password:String!
        createAt:String!
        token:String!
    }
    input RegisterInput{
        name:String!
        mobile:String!
        password:String!
     
        confirmPassword:String!
    }
   
    type Query{
       getAllUserAdmin:[UserAdmin]!
       getUserAdminByID:UserAdmin!
       getUserAdminByMobile:UserAdmin!
     
   
     
    }

    type Mutation{
        register(registerInput:RegisterInput):UserAdmin!
        login(mobile:String!,password:String!):UserAdmin!
        singleUpload(file: Upload!):Boolean
        multipleUpload(files: [Upload]!): Boolean
       
       
    }

`;

module.exports = typeDefs;