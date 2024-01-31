const dataModel = require("./model");
const fs = require("fs");

const jsnonFileData = JSON.parse(fs.readFileSync("./jsondata.json", "utf-8"));
// console.log(jsnonFileData);

module.exports = jsnonFileData;
