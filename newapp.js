'use strict';

var firstAndPikeUl = document.getElementById('firstandpike');
var capitolHillUl = document.getElementById('capitolhill');
var seattleCenterUl = document.getElementById('seattlecenter');
var alkiUl = document.getElementById('alki');
var seatacAirportUl = document.getElementById('seatacairport');

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


function Store(title){
  this.title = title;
  this.cookieBasket = 0;
  this.locationResults = [];
  this.hoursOpen = 15;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookiesPurch = avgCookiesPurch;
}

Store.prototype.randomCustNum = function(){
  return Math.floor(Math.random()* (65 - 23 + 1)) + 23;
};

Store.prototype.cookiesPerHour = function(){
  var locationLi;
  for (var i = 0; i < 15; i++) {
    var totalCookiesPerHour = Math.floor(this.avgCookiesPurch * this.randomCustNum());
    this.locationResults.push(storeHours[i] + ' = ' + totalCookiesPerHour);
    this.cookieBasket = totalCookiesPerHour + this.cookieBasket;
};
