const mongoose = require("mongoose");
const AllHospitalListSchema = new mongoose.Schema({
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
collection: 'AllHospitalList'
});
module.exports = mongoose.model('AllHospitalList',AllHospitalListSchema)