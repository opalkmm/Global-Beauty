$(document).ready(function() {
  //call real time flight - browse price quotes (got error 201 when using 'create session')
  //add event listener to the click for the ajax call
  $("#submit").on("click", function(e) {
    e.preventDefault();
    console.log("button works");

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
    var endDate = moment(startDate).add(1, 'months').format("YYYY-MM-DD");

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
        endDate + "?inboundpartialdate=" + startDate,

      //full link: "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-12-31?inboundpartialdate=2019-12-01",

      method: "GET",
      headers: {
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "00c20503d7msh161c0e74fba392bp1beb43jsnde04f70eea46"
      } 
    };
    console.log(flights)

    $.ajax(flights).done(function(response) {
      console.log(response);
    });
  });
});
