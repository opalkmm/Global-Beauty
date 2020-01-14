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
const dataobject = {};
dataobject.procedures;
dataobject.countries;
dataobject.const;
//decide the data shape and then append all the data into the object to return to the firebase json datastore

// SAMPLE DATA OBJECT
// procedures['IVF Treatment']["Columbia"]: "USD $7100",

// {"USA":"USD $14,800",
// "Vietnam":"USD $14,800",
// "Colombia":"USD $14,800",
// "Costa Rica":"USD $14,800",
// "India":"USD $14,800",
// "Israel":"USD $14,800",
// "Jordan":"USD $14,800",
// "Malaysia":"USD $14,800",
// "Mexico":"USD $14,800",
// "Poland":"USD $14,800",
// "Singapore":"USD $14,800",
// "S. Korea":"USD $14,800",
// "Thailand":"USD $14,800",
// "Turkey":"USD $14,800"}

// USA:14000,
// Vietnam:14000,
// Colombia:14000,
// Costa_Rica:14000,
// India:14000,
// Israel:14000,
// Jordan:14000,
// Malaysia:14000,
// Mexico:14000,
// Poland:14000,
// Singapore:14000,
// S_Korea:14000,
// Thailand:14000,
// Turkey:14000

const sampledataobject = {
  Procedures: {
    Angioplasty: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Heart_Bypass: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Heart_Valve_Replacement: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Hip_Replacement: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Hip_Resurfacing: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Knee_Replacement: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Spinal_Fusion: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Dental_Implant: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Lap_Band: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Gastric_Sleeve: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Gastric_Bypass: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Hysterectomy: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Breast_Implants: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Rhinoplasty: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Face_Lift: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Liposuction: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Tummy_Tuck: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Lasik_both_eyes: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Cornea_per_eye: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    Cataract_surgery_per_eye: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    },
    IVF_Treatment: {
      USA: 14000,
      Vietnam: 14000,
      Colombia: 14000,
      Costa_Rica: 14000,
      India: 14000,
      Israel: 14000,
      Jordan: 14000,
      Malaysia: 14000,
      Mexico: 14000,
      Poland: 14000,
      Singapore: 14000,
      S_Korea: 14000,
      Thailand: 14000,
      Turkey: 14000
    }
  }
};

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

console.log("bigDATAobj FIRST")
console.log(bigDATAobj)




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
  bigDATAobj.Procedures[key] = holder[idx]
 
});
console.log("bigDATAobj")
console.log(bigDATAobj);


//actually we need to go 3rd child deep .childNodes.childNodes.childNodes

// var tabs = root.querySelector(".tabs-content").childNodes;
// // console.log('querySelector tabs-content');
// // console.log(tabs);//why is this 43

// for (let i = 0; i < 4; i++) {
//   var tab = tabs[i];
//   console.log("tab");
//   // console.log(tab)//[]
//   // var tab.childNodes[]
//   if (tab.nodeType == 1) {
//     var children = tab.childNodes;
//     for (let j = 0; j < children.length; j++) {
//       console.log(
//         "\nchildren<-------------------------------------------------\n"
//       );
//       if (children[j].nodeType == 1) {
//         // console.log(children[j]);
//         var child = children[j].childNodes;
//         for (let k = 0; k < child.length; k++) {
//           console.log("childk nodetype" + child[k].nodeType);
//           if (child[k].nodeType==1) {
//             console.log("\GREATGRANDCHILD<-------------------------------------------------\n")
//             var grandchild = child[k].childNodes;
//         for (let l= 0; l < child.length; l++) {
//           console.log(grandchild[l]);
            
//             console.log("\GREAT GREAT GRANDCHILD<-------------------------------------------------\n")
//             if(grandchild[l] != undefined){
//               var greatgrandchild = grandchild[l].childNodes;
//               for (let m= 0; m < grandchild.length; m++) {
//                 console.log(greatgrandchild[m]);
//               }
//             }
            
            
//           }
//             console.log("\ GREAT 3X GRANDCHILD<-------------------------------------------------\n")

//             // var country = child[k].childNodes[1].innerHTML;
//             // var price = child[k].childNodes[2].innerHTML
//             // // price = price.replace(/\D/g,'');

//             // console.log("country");
//             // console.log(country);
//             // console.log("price");
//             // console.log(price);
//             // console.log(child[k])

//           }
//         }
//       }
//     }
//   }
// }
//maybe
// var parsedhtml =html2json(root);
// console.log("parsedhtml");
// console.log(parsedhtml)

//body or root
  // var tab = tabs[0];
  // console.log("tabs zero index / the first of the above tabs");

  // console.log(tab)//TextNode { childNodes: [], nodeType: 3, rawText: '\n                ' }

  // var subtab = tab.childNodes;
  // console.log("tab.childNodes");

  // console.log(subtab)//[]

  // var subtab = subtab[0];//undefined
  // console.log("tab.childNodes index Zero");//undefined

  // console.log(subtab)
  // console.log("sampledataobject");
  // console.log(sampledataobject)

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

// var tab1 = tabs.childNodes[0]
// var averages = tabTitles.childNodes;
// for (let i=0; i<averages.length; i++){
//   let country=averages[i].
// }

// var tableTitles = tabTitles.childNodes[1].text;

// console.log(tables3)
// console.log(tables4)

// TODO:
// 1 - assemble data object from HTML page data
// 2 - Upload to firebase
// 3 - add sort function to the object before upload to firebase to make it easier to search results
// 4 - write description of how its sorted to ease data sorting
// 5 - access cheapest surgery places in order of cheapest to most expensive by
//   - -  sorted on the price so that if you call Angioplasty[0] you get the cheapest nose job country etc.
