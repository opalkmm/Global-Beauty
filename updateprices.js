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
var tables = tabTitles.childNodes;

for (let i=0; i<tables.length; i++){
  var tableTitles = tables[i].text;
  console.log(tableTitles);

}

//actually we need to go 3rd child deep .childNodes.childNodes.childNodes
var country;
var costAvg;
var tabs = root.querySelector(".tabs-content").childNodes;
console.log(tabs);//why is this 43

for (let i=0; i<tabs.length; tabs++){
var tab = tabs[i].childNodes;
console.log(tab)

var tab = tabs[0];
console.log(tab)

var subtab = tab.childNodes;
console.log(subtab)

var subtab = subtab[0];
console.log(subtab)

// for (let j=0; j<subtab.length; j++){
//   var subsub = subtab.childNodes;
//   var tabCountry = subsub[0]
//   var tabPrice = subsub[1]
//   console.log(tabCountry)
//   console.log(tabPrice)

// }
  // var thisCountry = tabs[i].firstChild.childNodes[0];
  // var thisPrice = tabs[i].firstChild.childNodes[1];
  // console.log(thisCountry);
  // console.log(thisPrice);

}
// var tab1 = tabs.childNodes[0]
// var averages = tabTitles.childNodes;
// for (let i=0; i<averages.length; i++){
//   let country=averages[i].
// }

// var tableTitles = tabTitles.childNodes[1].text;


// console.log(tables3)
// console.log(tables4)

