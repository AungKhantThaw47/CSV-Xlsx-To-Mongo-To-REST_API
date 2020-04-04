const mongoose = require("mongoose");
const PhoneNASchema = new mongoose.Schema({
Region:{
type:String,
},
Township:{
type:String,
},
HospitalName:{
type:String,
},
Bed:{
type:Number,
},
Latitude:{
type:Number,
},
Longitude:{
type:Number,
},
Coordinates:{
type:String,
},
},{
collection: 'PhoneNA'
});
module.exports = mongoose.model('PhoneNA',PhoneNASchema)