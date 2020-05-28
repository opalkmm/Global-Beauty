 
 //style slider
 var slider = document.getElementById("myRange");
 var output = document.getElementById("value");

 output.innerHTML = slider.value;
 

 slider.oninput = function(){
   output.innerHTML = this.value;
 }
 
 slider.addEventListener("mousemove", function(){
   var x = slider.value;
   var percent = x/10;
   var color = 'linear-gradient(90deg, rgb(0,0,0)' + percent + '%,' + 'rgb(214,214,214)' + percent + '%)';
  slider.style.background = color;

  console.log(percent)
  console.log(color)

  })
 
 
 //initialize firebase
 const firebaseConfig = {
  apiKey: "AIzaSyC1tZPmoOueA0xSyULNNt4fgxoh7FFTzLs",
  authDomain: "root-pixel-243301.firebaseapp.com",
  databaseURL: "https://root-pixel-243301.firebaseio.com",
  projectId: "root-pixel-243301",
  storageBucket: "root-pixel-243301.appspot.com",
  messagingSenderId: "249162058472",
  appId: "1:249162058472:web:694374383d459ae7b5975d",
  measurementId: "G-KQB6PQSP57"
};

firebase.initializeApp(firebaseConfig);

//Get a reference to the database service
var database = firebase.database();


$(document).ready(function() {
 

  //add event listener to the click for the ajax call
  $("#submit").on("click", function(e) {
    e.preventDefault();
    console.log("button works");

    
//get users' chosen procedure

let procedure = document.getElementByName('optionsRadios');

for(i = 0; i < procedure.length; i++){
  if(procedure[i].checked){
    // document.getElementById('cost').innerHTML= "chosen: " + procedure[i].value
    console.log(procedure.value)
  }

}







    
    //get destination input radio button (capital city airport code)

    var flightCountry = $("input[name='country']:checked").val();
    if (flightCountry) {
      console.log("country chosen : " + flightCountry);
    }

    //get users' 'currentdate' to filter price
    //TODO
    // 1 date format getting

    // 2 city airport code to submit I think already correct in html
    // var startDate = new Date(...);
    // var endDateMoment = moment(startDate); // moment(...) can also be used to parse dates in string format
    // endDateMoment.add(1, 'months');

    var today = new Date();
    var startDate = moment().format("YYYY-MM-DD");
    var endDate = moment(startDate)
      .add(1, "months")
      .format("YYYY-MM-DD");

    console.log(startDate);
    console.log(endDate);


    var flights = {
      async: true,
      crossDomain: true,
      url:
        "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" +
        //set newyork as the origin default
        "JFK-sky/" +
        flightCountry +
        "-sky/" +
        endDate +
        "?inboundpartialdate=" +
        startDate,

      //full link: "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-12-31?inboundpartialdate=2019-12-01",

      method: "GET",
      headers: {
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "00c20503d7msh161c0e74fba392bp1beb43jsnde04f70eea46"
      }
    };
    console.log(flights);

    $.ajax(flights).done(function(response) {
      //get the minimum price of the flight from the selected country
      console.log(response.Quotes[0].MinPrice);

      //*******DON'T FORGET TO LOOP THROUGH INDEX******************************************

      let minPrice = response.Quotes[0].MinPrice;
    //surgery type and cost
      let surCost = 1;
      let hotelCost = 2;
      //*******DON'T FORGET TO LOOP THROUGH WHEN MULTIPLE COUNTRIES ARE SELECTED***********

      //create function to append prices dynamically

      function addRow(tableID){
      var total = surCost + minPrice + hotelCost
      //append cost table
        $('#table > tbody:last-child').append('<tr>' + '<td>' + surCost + '</td>' + '<td>' + minPrice + '</td>'+ '<td>' + hotelCost + '</td>' + '<td>' + total + '</td>' +  '</tr>')

        

      }
      // Call addRow() with the table's ID
        addRow('table');
      console.log("MINPRICE : " + minPrice);
    });

//pulling data for the hotel in the selected countries

// let hotels = {
//   async: true,
//   crossDomain: true,
//   url: "https://www.googleapis.com/travelpartner/v2.0/4200042/prices/1066",
//   method: "GET"
// }

// //key:249162058472-4d7hcb6dqt4tp0emmok4rqrnu1isfdo2.apps.googleusercontent.com

// console.log(hotels);

// $.ajax(hotels).done(function(response) {
  
//   var hotelPrices = hotels.response.Prices
//   console.log(hotels.hotelPrices);

// });








  });
});
