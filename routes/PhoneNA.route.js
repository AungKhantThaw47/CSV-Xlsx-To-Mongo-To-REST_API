var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var PhoneNA = require("../models/PhoneNA.js");
module.exports = router;
router.get("/", async (req, res) => {
try {
var upload = await PhoneNA.find({});
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Region/:value/", async (req, res) => {
let Region = req.params.value;
try {
var upload = await PhoneNA.find({ Region : Region });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Township/:value/", async (req, res) => {
let Township = req.params.value;
try {
var upload = await PhoneNA.find({ Township : Township });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/HospitalName/:value/", async (req, res) => {
let HospitalName = req.params.value;
try {
var upload = await PhoneNA.find({ HospitalName : HospitalName });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Bed/:value/", async (req, res) => {
let Bed = req.params.value;
try {
var upload = await PhoneNA.find({ Bed : Bed });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Latitude/:value/", async (req, res) => {
let Latitude = req.params.value;
try {
var upload = await PhoneNA.find({ Latitude : Latitude });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Longitude/:value/", async (req, res) => {
let Longitude = req.params.value;
try {
var upload = await PhoneNA.find({ Longitude : Longitude });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Coordinates/:value/", async (req, res) => {
let Coordinates = req.params.value;
try {
var upload = await PhoneNA.find({ Coordinates : Coordinates });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
