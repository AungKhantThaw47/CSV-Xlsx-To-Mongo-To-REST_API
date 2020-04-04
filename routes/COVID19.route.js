var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var COVID19 = require("../models/COVID19.js");
module.exports = router;
router.get("/", async (req, res) => {
try {
var upload = await COVID19.find({});
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/__EMPTY/:value/", async (req, res) => {
let __EMPTY = req.params.value;
try {
var upload = await COVID19.find({ __EMPTY : __EMPTY });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/SR/:value/", async (req, res) => {
let SR = req.params.value;
try {
var upload = await COVID19.find({ SR : SR });
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
var upload = await COVID19.find({ Township : Township });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Hospital/:value/", async (req, res) => {
let Hospital = req.params.value;
try {
var upload = await COVID19.find({ Hospital : Hospital });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/HosPt/:value/", async (req, res) => {
let HosPt = req.params.value;
try {
var upload = await COVID19.find({ HosPt : HosPt });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/PUI/:value/", async (req, res) => {
let PUI = req.params.value;
try {
var upload = await COVID19.find({ PUI : PUI });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Suspected/:value/", async (req, res) => {
let Suspected = req.params.value;
try {
var upload = await COVID19.find({ Suspected : Suspected });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/M/:value/", async (req, res) => {
let M = req.params.value;
try {
var upload = await COVID19.find({ M : M });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/F/:value/", async (req, res) => {
let F = req.params.value;
try {
var upload = await COVID19.find({ F : F });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Child/:value/", async (req, res) => {
let Child = req.params.value;
try {
var upload = await COVID19.find({ Child : Child });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Adult/:value/", async (req, res) => {
let Adult = req.params.value;
try {
var upload = await COVID19.find({ Adult : Adult });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Lab_Neg/:value/", async (req, res) => {
let Lab_Neg = req.params.value;
try {
var upload = await COVID19.find({ Lab_Neg : Lab_Neg });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Confirmed/:value/", async (req, res) => {
let Confirmed = req.params.value;
try {
var upload = await COVID19.find({ Confirmed : Confirmed });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/Pending/:value/", async (req, res) => {
let Pending = req.params.value;
try {
var upload = await COVID19.find({ Pending : Pending });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
router.get("/DC/:value/", async (req, res) => {
let DC = req.params.value;
try {
var upload = await COVID19.find({ DC : DC });
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
var upload = await COVID19.find({ Latitude : Latitude });
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
var upload = await COVID19.find({ Longitude : Longitude });
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(upload);
} catch (err) {
res.status(500).json({
message: err.message
});
}
});
