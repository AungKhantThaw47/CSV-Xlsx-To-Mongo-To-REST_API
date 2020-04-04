var mongoose = require('mongoose');
var cons = require("consolidate");
var neatCsv = require('neat-csv');
var express = require('express');
var multer = require('multer');
var path = require("path");
var xlsx = require('xlsx');
const fs = require('fs');
var modules = [];
var moudlesName = [];

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

app.get('/loadModule',function(req,res)
{
  fs.readdir(__dirname + '/models', function (error, files) {
    var totalFiles = files.length;
    console.log(totalFiles);
    for (let i = 0; i < totalFiles; i++) {
      const element = files[i];
      var name = element.slice(0, -3);
      console.log(element);
      moudlesName.push(name);
      modules.push(require(__dirname+"/models/"+element));
    }
    console.log("Module Name");
    console.log(moudlesName);
    console.log("Module");
    console.log(modules);
    
  });
  res.redirect('/');
});

app.get('/loadData',function(req,res)
{
  fs.readdir(__dirname + '/uploads', function (error, files) {
    var totalFiles = files.length;
    console.log(totalFiles);
    files.forEach(element => {
      console.log(element);
      chooseFileTypeData(element);
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

app.get('/testCSVData', function (req, res) {
  var filename = "diabetes.csv";
  chooseFileTypeData(filename);
  res.redirect('/');
});

app.get('/testXlsxData', function (req, res) {
  var filename = "COVID 19 Detail,UIT.xlsx";
  chooseFileTypeData(filename);
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

async function chooseFileTypeData(filename) {
  var Data;
  var csv = ".csv";
  var xlsx = ".xlsx";
  if (filename.includes(csv)) {
    console.log("CSV");
    Data = await CSVDatareader(filename);
  }
  else if (filename.includes(xlsx)) {
    console.log("Xlsx");
    Data = await XlsxDatareader(filename);
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
        var P = p.split(" ").join("");
        result.push(P);
      }
    }
    filename = filename.slice(0, -4);
    //CreatingModelJs(filename, result, type);
    CreatingModelJsNoParamType(filename,result);
  });
}

async function Xlsxreader(filename) {
  var Data;
  var workbook = xlsx.readFile(__dirname + "/uploads/" + filename)
  var sheet_name_list = workbook.SheetNames;
  sheet_name_list.forEach(element => {
    console.log(element);
    Data = xlsx.utils.sheet_to_json(workbook.Sheets[element]);
    console.log(Data[0]);
    var result = [];
    var type = [];
    var obj = Data[0];
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        type.push(jsUcfirst(typeof (obj[p])));
        var P = p.split(" ").join("");
        result.push(P);
      }
    }
    filename = filename.slice(0, -5);
    //CreatingModelJs(element, result, type);
    CreatingModelJsNoParamType(element,result);
  });
}

function CreatingModelJs(filename, params, paramsType) {
  filename = filename.split(" ").join("");
  var writeStream = fs.createWriteStream("./models/" + filename + ".js");
  writeStream.write("const mongoose = require(\"mongoose\");\n");
  writeStream.write("const " + filename + "Schema = new mongoose.Schema({\n");
  for (let i = 0; i < params.length; i++) {
    writeStream.write(params[i] + ":{\n");
    writeStream.write("type:" + paramsType[i] + ",\n");
    writeStream.write("},\n");
  }
  writeStream.write("},{\n");
  writeStream.write("collection: \'" + filename + "\'\n");
  writeStream.write("});\n");
  writeStream.write("module.exports = mongoose.model(\'" + filename + "\'," + filename + "Schema)");
  writeStream.end();
}

function CreatingModelJsNoParamType(filename, params) {
  filename = filename.split(" ").join("");
  var writeStream = fs.createWriteStream("./models/" + filename + ".js");
  writeStream.write("const mongoose = require(\"mongoose\");\n");
  writeStream.write("const " + filename + "Schema = new mongoose.Schema({\n");
  for (let i = 0; i < params.length; i++) {
    writeStream.write(params[i] + ":{\n");
    writeStream.write("type: String,\n");
    writeStream.write("},\n");
  }
  writeStream.write("},{\n");
  writeStream.write("collection: \'" + filename + "\'\n");
  writeStream.write("});\n");
  writeStream.write("module.exports = mongoose.model(\'" + filename + "\'," + filename + "Schema)");
  writeStream.end();
}

async function CSVDatareader(filename) {
  var Data;
  fs.readFile(__dirname + "/uploads/" + filename, async (err, data) => {
    if (err) {
      console.error(err);
      return
    }
    filename = filename.split(" ").join("");
    filename = filename.slice(0,-4);
    Data = await neatCsv(data);
    Data.forEach(async element => {
      var index = moudlesName.indexOf(filename);
      var Uploadmodule = modules[index];
      var Uploadvariable = new Uploadmodule(
        element
      );
      try {
        await Uploadvariable.save();
      } catch (err) {
        console.log(err);
      }
    });
  });
}

async function XlsxDatareader(filename) {
  var Data;
  var workbook = xlsx.readFile(__dirname + "/uploads/" + filename)
  var sheet_name_list = workbook.SheetNames;
  sheet_name_list.forEach(element => {
    Data = xlsx.utils.sheet_to_json(workbook.Sheets[element]);
    element = element.split(" ").join("");
    Data.forEach(async ele => {
      var index = moudlesName.indexOf(element);
      var Uploadmodule = modules[index];
      var Uploadvariable = new Uploadmodule(
        ele
      );
      try {
        await Uploadvariable.save();
      } catch (err) {
        console.log(err);
      }
    });
  });
}

function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

app.listen(port);

db.on("error", error => console.error(error));
db.once("open", () => console.log("Database connection successful..."));