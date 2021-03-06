const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = (context) =>{
    const authHeader = context.req.headers.authorization;
    if(authHeader){
        const token = authHeader.split('Bearer')[1];
        if(token){
            try {
                const useradmin = jwt.verify(token,config.get(SecretKey));
                return useradmin
            } catch (error) {
                throw new Error("token is not Valid")
            }
        }
    }else{
        throw new Error('token is not exist');
    }
}

