const mongoose = require("mongoose");
const HospitalwithphonenumberSchema = new mongoose.Schema({
Region:{
type: String,
},
Township:{
type: String,
},
HospitalName:{
type: String,
},
Bed:{
type: String,
},
Latitude:{
type: String,
},
Longitude:{
type: String,
},
Coordinates:{
type: String,
},
PhoneNumber:{
type: String,
},
},{
collection: 'Hospitalwithphonenumber'
});
module.exports = mongoose.model('Hospitalwithphonenumber',HospitalwithphonenumberSchema)