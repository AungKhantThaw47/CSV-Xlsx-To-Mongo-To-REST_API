# CSV/Xlsx To Mongo

- Both CSV and Xlsx files to mongo database model dynamically by uploading files and upload to mongo according to sheet
- Now can Generate REST API routes too

# Prerequisite

- Need to install mongoDB  (https://www.mongodb.com/download-center/community)
- Need to install mongoCompass to check DB (https://www.mongodb.com/products/compass)
- Need to install node.js  (https://nodejs.org/en/)

# Usuage

- go to project folder
- npm install
- node index.js
- call http://localhost:3000/
- upload file
- call http://localhost:3000/readfiles
- call http://localhost:3000/loadModule
- call http://localhost:3000/loadData
- call http://localhost:3000/CreateRoute
- call http://localhost:3000/loadRoute
- call http://localhost:3000/api/(your uploaded file name)
- open mongo compass
- connection string (mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false)
- go to testapi

# Calling API on one parameter

- use http://localhost:3000/api/(your uploaded file name)/(parameter name)/value

# To Test CSV file type

- call http://localhost:3000/testCSV
- call http://localhost:3000/loadModule
- call http://localhost:3000/testCSVData
- call http://localhost:3000/testCSVRoute
- call http://localhost:3000/loadRoute
- call http://localhost:3000/api/diabetes

# To Test Xlsx file type

- call http://localhost:3000/testXlsx
- call http://localhost:3000/loadModule
- call http://localhost:3000/testXlsxData
- call http://localhost:3000/testXlsxRoute
- call http://localhost:3000/loadRoute
- call http://localhost:3000/api/COVID19
