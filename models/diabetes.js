const mongoose = require("mongoose");
const diabetesSchema = new mongoose.Schema({
Pregnancies:{
type: String,
},
Glucose:{
type: String,
},
BloodPressure:{
type: String,
},
SkinThickness:{
type: String,
},
Insulin:{
type: String,
},
BMI:{
type: String,
},
DiabetesPedigreeFunction:{
type: String,
},
Age:{
type: String,
},
Outcome:{
type: String,
},
},{
collection: 'diabetes'
});
module.exports = mongoose.model('diabetes',diabetesSchema)