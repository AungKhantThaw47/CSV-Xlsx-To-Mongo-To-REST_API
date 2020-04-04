const mongoose = require("mongoose");
const AllHospitalListSchema = new mongoose.Schema({
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
collection: 'AllHospitalList'
});
module.exports = mongoose.model('AllHospitalList',AllHospitalListSchema)