const mongoose = require("mongoose");
const PhoneNASchema = new mongoose.Schema({
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
},{
collection: 'PhoneNA'
});
module.exports = mongoose.model('PhoneNA',PhoneNASchema)