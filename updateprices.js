//node firebase
var firebase = require("firebase");
// var app = firebase.initializeApp({ .. });

var HTMLParser = require("node-html-parser");

var request = require("request");
//when it's live actually query the site but for now just use the saved local data for dev
var options = {
  url: "https://www.medicaltourism.com/compare-prices"
};

// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body);
//     //parse through and handle each tab and assign the children a variable

//     //<--------------------------------FREE ME

//     //<---------------------------------------PUT THE root=HTMLParser.parse(body) Logic here
//     //<-------------------------------parse the dom into data objects here!!!
//     var root = HTMLParser.parse(body);

//     var tabTitles = root.querySelector(".procedure-tab");
//     console.log("tabTitles\n");
//     console.log(tabTitles);
//     //save all that data in a JSON object built from it
//   }
// }
// request(options, callback);
var path = 'curlmedicaltourismcompareprices.html';
var fs = require('fs');

var body = fs.readFileSync(path, "utf8");
// console.log(body);
// var body = '';

var root = HTMLParser.parse(body);

var tabTitles = root.querySelector(".tabs-menu");
console.log("tabTitles\n");
// console.log(tabTitles);
// var tables = tabTitles.childNodes[0].childNodes;
var tables = tabTitles
var tables1 = tabTitles.childNodes
var tables2 = tabTitles.childNodes[0]
var tables3 = tabTitles.childNodes[0].children
var tables4 = tabTitles


// console.log(tables)
console.log(tables1)
console.log(tables2.toString())
// console.log(tables3)
// console.log(tables4)

