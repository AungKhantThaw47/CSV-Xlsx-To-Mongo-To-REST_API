# CSV/Xlsx To Mongo

Both CSV and Xlsx files to mongo database model dynamically by uploading files and upload to mongo according to sheet

# Prerequisite

- Need to install mongoDB  (https://www.mongodb.com/download-center/community)
- Need to install mongoCompass to check DB (https://www.mongodb.com/products/compass)
- Need to install node.js  (https://nodejs.org/en/)

# Usuage

- go to project folder
- npm install
- node index.js
- call http://localhost:3000/
- call http://localhost:3000/readfiles
- call http://localhost:3000/loadModule
- call http://localhost:3000/loadData
- open mongo compass
- connection string (mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false)
- go to testapi

# To Test CSV file type

- call http://localhost:3000/testCSV
- call http://localhost:3000/loadModule
- call http://localhost:3000/testCSVData

# To Test Xlsx file type

- call http://localhost:3000/testXlsx
- call http://localhost:3000/loadModule
- call http://localhost:3000/testXlsxData
