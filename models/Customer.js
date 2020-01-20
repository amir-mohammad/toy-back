const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name:String,
    mobile:String,
    password:String,
    createAt:String,
    shoppingCart:[{
        image:String,
        title:String,
        details:[{
            name:String,
            value:String
        }],
        Price:Number,
        Quantity:Number,

    }],
    address1:String,
    address2:String,
    state:String,
    city:String,
    shipState:[{
        image:String,
        title:String,
        details:[{
            name:String,
            value:String
        }],
        Quantity:Number,
        postCode:String,
        shipState:String
    }],
    factors:[{
        image:String,
        title:String,
        details:[{
            name:String,
            value:String
        }],
        Quantity:Number,
        facotrNumber:String
    }]
});

module.exports = mongoose.model('Customer',CustomerSchema);