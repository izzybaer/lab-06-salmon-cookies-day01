'use strict';

// <!--I'm going to create one JS object literal for each store location -->
// Each object literal has methods, properties, and values
// <!--Each object literal must store the min/max hourly customers (in object properties) -->
// <!--Each object literal must store the average cookies per customer (in object properties)-->
// <!--Calculate AND store the simulated amounts of cookies per hour at each location USING 1. average cookies purchased
//    2. random number of customers generated-->
// <!--Store the results for each location in a separate array AS A property of the object representing that location-->
// <!--Display the values of each array as unordered lists in the browser-->
// <!--Calculate the sum of these hourly totals from 6am-8pm per location-->
// <!--Display the lists on sales.html-->

var firstAndPikeUl = document.getElementById('firstandpike');
var capitolHillUl = document.getElementById('capitolhill');
var seattleCenterUl = document.getElementById('seattlecenter');
var alkiUl = document.getElementById('alki');
var seatacAirportUl = document.getElementById('seatacairport');



// pike location
var firstAndPike = {
  title: '1st and Pike',
  cookieBasket: 0,
  hoursOpen: 15,
  minHourlyCust: 23,
  maxHourlyCust: 65,
  locationResults: [],
  avgCookiesPurch: 6.3,
  randomCustNum: function(){
    return Math.floor(Math.random()* (65 - 23 + 1)) + 23;
  },
  cookiesPerHour: function(){
    var firstAndPikeLi;
    for (var i = 0; i < 15; i++) {
      var totalCookiesPerHour = Math.floor(this.avgCookiesPurch * this.randomCustNum());
      this.locationResults.push(storeHours[i] + ' = ' + totalCookiesPerHour);
      this.cookieBasket = totalCookiesPerHour + this.cookieBasket;
      firstAndPikeLi = document.createElement('li');
      firstAndPikeLi.textContent = firstAndPike.locationResults[i];
      firstAndPikeUl.appendChild(firstAndPikeLi);
    }

  },




};

firstAndPike.cookiesPerHour();

// second location
var seattleCenter = {
  title: 'Seattle Center',
  cookieBasket: 0,
  hoursOpen: 15,
  minHourlyCust: 11,
  maxHourlyCust: 38,
  locationResults: [],
  avgCookiesPurch: 3.7,
  randomCustNum: function(){
    return Math.round(Math.random()* (38 - 11)) + 11;
  },
  cookiesPerHour: function(){
    var seattleCenterLi;
    for (var i = 0; i < 15; i++) {
      var totalCookiesPerHour = Math.round(this.avgCookiesPurch * this.randomCustNum());
      this.locationResults.push(storeHours[i] + ' = ' + totalCookiesPerHour);
      this.cookieBasket = totalCookiesPerHour + this.cookieBasket;
      seattleCenterLi = document.createElement('li');
      seattleCenterLi.textContent = seattleCenter.locationResults[i];
      seattleCenterUl.appendChild(seattleCenterLi);
    }

  },




};

seattleCenter.cookiesPerHour();

// third location
var capitolHill = {
  title: 'Capitol Hill',
  cookieBasket: 0,
  hoursOpen: 15,
  minHourlyCust: 20,
  maxHourlyCust: 38,
  locationResults: [],
  avgCookiesPurch: 2.3,
  randomCustNum: function(){
    return Math.round(Math.random()* (38 - 20)) + 20;
  },
  cookiesPerHour: function(){
    var capitolHillLi;
    for (var i = 0; i < 15; i++) {
      var totalCookiesPerHour = Math.round(this.avgCookiesPurch * this.randomCustNum());
      this.locationResults.push(storeHours[i] + ' = ' + totalCookiesPerHour);
      this.cookieBasket = totalCookiesPerHour + this.cookieBasket;
      capitolHillLi = document.createElement('li');
      capitolHillLi.textContent = capitolHill.locationResults[i];
      capitolHillUl.appendChild(capitolHillLi);
    }

  },




};

capitolHill.cookiesPerHour();


// fourth location
var alki = {
  title: 'Alki',
  cookieBasket: 0,
  hoursOpen: 15,
  minHourlyCust: 2,
  maxHourlyCust: 16,
  locationResults: [],
  avgCookiesPurch: 4.6,
  randomCustNum: function(){
    return Math.round(Math.random()* (16 - 2)) + 2;
  },
  cookiesPerHour: function(){
    var alkiLi;
    for (var i = 0; i < 15; i++) {
      var totalCookiesPerHour = Math.round(this.avgCookiesPurch * this.randomCustNum());
      this.locationResults.push(storeHours[i] + ' = ' + totalCookiesPerHour);
      this.cookieBasket = totalCookiesPerHour + this.cookieBasket;
      alkiLi = document.createElement('li');
      alkiLi.textContent = alki.locationResults[i];
      alkiUl.appendChild(alkiLi);
    }

  },




};

alki.cookiesPerHour();


// fifth location
var seatacAirport = {
  title: 'Seatac Airport',
  cookieBasket: 0,
  hoursOpen: 15,
  minHourlyCust: 3,
  maxHourlyCust: 24,
  locationResults: [],
  avgCookiesPurch: 1.2,
  randomCustNum: function(){
    return Math.round(Math.random()* (24 - 3)) + 3;
  },
  cookiesPerHour: function(){
    var seatacAirportLi;
    for (var i = 0; i < 15; i++) {
      var totalCookiesPerHour = Math.round(this.avgCookiesPurch * this.randomCustNum());
      this.locationResults.push(storeHours[i] + ' = ' + totalCookiesPerHour);
      this.cookieBasket = totalCookiesPerHour + this.cookieBasket;
      seatacAirportLi = document.createElement('li');
      seatacAirportLi.textContent = seatacAirport.locationResults[i];
      seatacAirportUl.appendChild(seatacAirportLi);
    }

  },




};

seatacAirport.cookiesPerHour();


// To calculate and store the simulated amount of cookies purchased for each hour at each location use average cookies purchased and the random number of customers generated
