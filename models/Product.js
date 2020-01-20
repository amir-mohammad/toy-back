const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

    title:String,
    reviews:[{
        rate:Number,
        body:String,
        createAt:String,
        name:String
    }],
    originalPrice:Number,
    offerPrice:Number,
     customerPoint:Number,
     available:Boolean,
     productCode:String,
     category:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"categories" 
        },

    sold:Number,
    defienOption:[
        {
            optionTitle:String,
            optionValues:[{
                name:String
            }]
        }
    ] ,
    images:[{
        src:String,
        alt:String,
    }]   ,
    createAt:String,
    description:String,
    tags:[{
        tagName:String
    }],
    featrus:[{
        featureTitle:String,
        FeatureValue:[{
            value:String
        }]
    }],

    videos:String,
    shipping:String,
    showInOffes:Boolean,
    showInFeaturedProducr:Boolean
})

module.exports = mongoose.model('Product',ProductSchema);