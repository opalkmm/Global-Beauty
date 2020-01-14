//node firebase
var firebase = require("firebase");
// var app = firebase.initializeApp({ .. });

var HTMLParser = require("node-html-parser");
var html2json = require('html2json').html2json;

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
var path = "curlmedicaltourismcompareprices.html";
var fs = require("fs");

//decide the data shape and then append all the data into the object to return to the firebase json datastore

// SAMPLE DATA OBJECT
// procedures['IVF Treatment']["Columbia"]: "USD $7100",


var body = fs.readFileSync(path, "utf8");
// console.log(body);
// var body = '';

var root = HTMLParser.parse(body);

var tabTitles = root.querySelector(".tabs-menu");
// console.log("tabTitles\n");
var tables = tabTitles.childNodes;
var bigDATAobj = {};
var holder = {};
bigDATAobj.Procedures = {};
for (let i = 0; i < tables.length; i++) {
  var tableTitles = tables[i].text;
  if (!tableTitles.includes("\n")){
    bigDATAobj.Procedures[tableTitles]={};
  // console.log(tableTitles);
  }
  
}
var countryCostArr = root.querySelectorAll(".tab-pane-container");//only grabs the first

for (let j = 0; j < countryCostArr.length; j++) {
    var priceObject = {};
  var children = countryCostArr[j].childNodes;
    for (let k = 0; k < children.length; k++) {
      if (children[k] != undefined){
        var thisone = children[k].childNodes;        
        for (let m = 0; m < thisone.length; m++) {
          var currPriceMatch = {};
          var nameNow;
          var priceNow;
          if (thisone[m] != undefined){
            var thisoneNOW = thisone[m];
           if (thisoneNOW.nodeType == 1){
              if ((!thisoneNOW.text.includes("$")) &&(!thisoneNOW.text.includes("\n"))){
                nameNow = thisoneNOW.text;
                priceObject[nameNow] = 0;
              }else if (thisoneNOW.text.includes("$")){
                priceNow = thisoneNOW.text;
                priceObject[nameNow] = priceNow;
              };
            }
          }
      }
      }
  }

  holder[j] = priceObject; // creating bigDataobj.['0'].Colombia for example wtf
  // console.log("priceObject")
  // console.log(priceObject);
}


Object.keys(bigDATAobj.Procedures).forEach(function(key, idx){
  bigDATAobj.Procedures[key] = holder[idx];
});
console.log("bigDATAobj")
console.log(bigDATAobj);



// TODO:
// 1 - assemble data object from HTML page data
// 2 - Upload to firebase
// 3 - add sort function to the object before upload to firebase to make it easier to search results
// 4 - write description of how its sorted to ease data sorting
// 5 - access cheapest surgery places in order of cheapest to most expensive by
//   - -  sorted on the price so that if you call Angioplasty[0] you get the cheapest nose job country etc.
