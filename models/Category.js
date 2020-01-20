const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    title:String,
    subCategory:[{title:String}]
});

module.exports = mongoose.model('Category',CategorySchema);

