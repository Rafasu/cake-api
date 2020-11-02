const mongoose = require("mongoose");
const Float = require("mongoose-float").loadType(mongoose, 4);

const CakeSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true,
        unique: true
    }, 
    price:{
        type: Float, 
        required: true 
    }, 
    flavors: [{
        type: String
    }]
});

module.exports = mongoose.model("Cakes", CakeSchema);