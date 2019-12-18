TODO:
- set up firebase account with a database specifically for that end point to hold prices 

- Write a script button that you can press that will curl medicaltourism.com/compare-prices, parse out the average prices from there, and save them into data object and then insert that object into Firebase with a date 
    -   script to parse through html
    -   call to curl the site
    -   insert into firebase


<!-- - I don't think we need this because that's what firebase is duh
build a script /API that will serve up the data from the most recent curl from that page  -->
- document that makes it easy to see the data structure of the returned object when the app hits firebase

- if theres some max number of records in firebase, configure it to delete the oldest record when that is met OR delete all but one per week for oldest 50% of records

TODO IN THE FUTURE

- assemble a more complete data souring method via webscraping somehow

- assemble a way to pull up all the price records from firebase and view them to view price trends per countries over time