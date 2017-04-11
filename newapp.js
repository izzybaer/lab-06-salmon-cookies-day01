'use strict';

var firstAndPikeUl = document.getElementById('firstandpike');
var capitolHillUl = document.getElementById('capitolhill');
var seattleCenterUl = document.getElementById('seattlecenter');
var alkiUl = document.getElementById('alki');
var seatacAirportUl = document.getElementById('seatacairport');


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
  
};
