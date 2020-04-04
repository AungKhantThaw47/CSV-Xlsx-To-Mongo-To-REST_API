const mongoose = require("mongoose");
const COVID19Schema = new mongoose.Schema({
__EMPTY:{
type: String,
},
SR:{
type: String,
},
Township:{
type: String,
},
Hospital:{
type: String,
},
HosPt:{
type: String,
},
PUI:{
type: String,
},
Suspected:{
type: String,
},
M:{
type: String,
},
F:{
type: String,
},
Child:{
type: String,
},
Adult:{
type: String,
},
Lab_Neg:{
type: String,
},
Confirmed:{
type: String,
},
Pending:{
type: String,
},
DC:{
type: String,
},
Latitude:{
type: String,
},
Longitude:{
type: String,
},
},{
collection: 'COVID19'
});
module.exports = mongoose.model('COVID19',COVID19Schema)