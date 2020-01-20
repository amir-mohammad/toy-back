module.exports.validatorUserRegister = (name,mobile,password,confirmPassword) => {
    const errors ={}
    if(name.trim() === ''){
        errors.name = "name is required"
    }
    if(mobile.trim() === ''){
        errors.mobile = "Mobile is required"
    }
    if(password.trim() === ''){
        errors.passowrd = "Password is required"
    }else if (password !== confirmPassword){
        errors.confirmPassword = "Password must be match"
    }

    return{
        errors,
        valid:Object.keys(errors).length < 1
    }
}

module.exports.validateLogin = (mobile,password)=>{
    const errors = {}
    if(mobile.trim() === ""){
        errors.mobile = "Mobile is required"
    }
    if(password.trim() === ""){
        errors.password = "Password is requierd";
    }

    return{
        errors,
        valid:Object.keys(errors).length < 1
    }
}