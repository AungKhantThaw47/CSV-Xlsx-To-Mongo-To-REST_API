const mongoose = require("mongoose");
const HospitalwithphonenumberSchema = new mongoose.Schema({
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
PhoneNumber:{
type:String,
},
},{
collection: 'Hospitalwithphonenumber'
});
module.exports = mongoose.model('Hospitalwithphonenumber',HospitalwithphonenumberSchema)