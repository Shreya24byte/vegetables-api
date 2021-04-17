const http = require("http");
const url = require("url");
const fs = require('fs');
const vegDataFile = require("./data/vegetablesData.json");

http
  .createServer(function (req, res) {
    // path variables
    const path = req.url;
    console.log("path:", path);
    // query params from path
    const queryParamsObject = url.parse(path, true).query;
    // creating routes
     if (path.includes("vegetables")) {
       // address of JSON file
      const pathString = `${__dirname}/data/vegetablesData.json`;
      console.log(pathString);
      fs.readFile(pathString, function(err,data){
        console.log(err,data);
        const dataFromFile = JSON.parse(data);
        res.setHeader("Content-Type","application/json");
        res.write(JSON.stringify(dataFromFile));
        res.end();
    })
   } else {
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Hello World<h1>");
      res.write("<h2>Site description</h2>");
      res.end();
    }
  })
  .listen(8080);
