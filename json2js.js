
let fs = require("fs");
let jsondata= require("./data.json");

let output="var data =" + JSON.stringify( jsondata );

fs.writeFileSync("./data.js",output);




