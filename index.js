var mongoose = require('mongoose');
var cons = require("consolidate");
var neatCsv = require('neat-csv');
var express = require('express');
var multer = require('multer');
var path = require("path");
var xlsx = require('xlsx');
const fs = require('fs');

var app = express();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage }).any();
//var upload = multer({ dest: 'uploads/' })
var port = 3000;

app.engine("html", cons.swig);

app.set("port", port);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

mongoose.connect("mongodb://localhost/testapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;

app.get('/', async function (req, res) {
  res.render("index");
});

app.post('/', upload, (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.end("Error uploading file.");
    }
    res.redirect('/');
  });
});

app.get('/readfiles', function (req, res) {
  fs.readdir(__dirname + '/uploads', function (error, files) {
    var totalFiles = files.length;
    console.log(totalFiles);
    files.forEach(element => {
      console.log(element);
      chooseFileType(element);
    });
  });
  res.redirect('/');
});

app.get('/testCSV', function (req, res) {
  var filename = "diabetes.csv";
  chooseFileType(filename);
  res.redirect('/');
});

app.get('/testXlsx', function (req, res) {
  var filename = "COVID 19 Detail,UIT.xlsx";
  chooseFileType(filename);
  res.redirect('/');
});

async function chooseFileType(filename) {
  var Data;
  var csv = ".csv";
  var xlsx = ".xlsx";
  if (filename.includes(csv)) {
    console.log("CSV");
    Data = await CSVreader(filename);
  }
  else if (filename.includes(xlsx)) {
    console.log("Xlsx");
    Data = await Xlsxreader(filename);
  }
}

async function CSVreader(filename) {
  var Data;
  fs.readFile(__dirname + "/uploads/" + filename, async (err, data) => {
    if (err) {
      console.error(err);
      return
    }
    Data = await neatCsv(data);
    var result = [];
    var type = [];
    var obj = Data[0];
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        type.push(jsUcfirst(typeof (obj[p])));
        result.push(p);
      }
    }
    filename = filename.slice(0,-4);
    CreatingModelJs(filename,result,type);
  });
}

async function Xlsxreader(filename) {
  var Data;
  var workbook = xlsx.readFile(__dirname + "/uploads/" + filename)
  var sheet_name_list = workbook.SheetNames;
  Data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  console.log(Data[0]);
  
  return Data;
}

function CreatingModelJs(filename, params, paramsType) {
  var writeStream = fs.createWriteStream("./models/"+filename + ".js");
  writeStream.write("const mongoose = require(\"mongoose\");\n");
  writeStream.write("const " + filename + "Schema = new mongoose.Schema({\n");
  for (let i = 0; i < params.length; i++) 
  {
    writeStream.write(params[i]+":{\n");
    writeStream.write("type:"+paramsType[i]+",\n");
    writeStream.write("},\n");
  }
  writeStream.write("},{\n");
  writeStream.write("collection: \'"+filename+"\'\n");
  writeStream.write("});\n");
  writeStream.write("module.exports = mongoose.model(\'"+filename+"\',"+filename+"Schema)");
  writeStream.end();
}

function showObject(obj) {
  var result = "";
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      result += p + " , " + obj[p] + "\n";
    }
  }
  return result;
}

function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

app.listen(port);

db.on("error", error => console.error(error));
db.once("open", () => console.log("Database connection successful..."));