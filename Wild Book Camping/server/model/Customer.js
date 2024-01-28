const mongoose=require('mongoose');

const CustomerModel=mongoose.Schema(
    {
        "name": {
            require:true,
            type:String
        },
        "userName": {
            require:true,
            type:String
        },
        "email": {
            require:true,
            type:String,
            unique:true
        },
        "password": {
            require:true,
            type:String
        }
    },
    {versionKey:false}
);

const Customer = mongoose.model('Customer',CustomerModel);

module.exports=Customer;
