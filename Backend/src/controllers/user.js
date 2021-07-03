const User = require('../models/user')

exports.signup = (request,response)=>{
    User.findOne({email: request.body.email})
    .exec((error,user)=>{
        if(user) return response.status(400).json({
            message: 'User already registered'
        });
        const {
            firstName,
            lastName,
            email,
            password
        }= request.body;
        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            username : Math.random().toString()
         });

         _user.save((error,data)=>{
            if(error){
                return response.status(400).json({
                    message:'Something went wrong'
                });
            }

            if(data){
                return response.status(201).json({
                    user: data,
                    message: 'User created Successfully'
                });
            }
         });
    });
}