'use strict';

var firstAndPikeRow = document.getElementById('firstandpike');
var capitolHillRow = document.getElementById('capitolhill');
var seattleCenterRow = document.getElementById('seattlecenter');
var alkiRow = document.getElementById('alki');
var seatacAirportRow = document.getElementById('seatacairport');

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Store(title, minHourlyCust, maxHourlyCust, avgCookiesPurch, tableElement){
  this.title = title;
  this.tableElement = tableElement;
  this.cookieBasket = 0;
  this.locationResults = [];
  this.hoursOpen = storeHours;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookiesPurch = avgCookiesPurch;
}

Store.prototype.randomCustNum = function(){
  return Math.floor(Math.random()* (this.maxHourlyCust - this.minHourlyCust + 1)) + this.minHourlyCust;
};

Store.prototype.cookiesPerHour = function(){
  for (var i = 0; i < this.hoursOpen.length; i++) {
    var totalCookiesPerHour = Math.floor(this.avgCookiesPurch * this.randomCustNum());
    this.locationResults.push(totalCookiesPerHour);
    this.cookieBasket = totalCookiesPerHour + this.cookieBasket;
  }
};

Store.prototype.render = function(){
  var storeCell;
  var addRow = document.createElement('tr');
  this.tableElement = addRow;
  var locationHeader = document.createElement('td');
  locationHeader.textContent = this.title;
  this.tableElement.appendChild(locationHeader);
  for (var i = 0; i < 15; i++) {
    storeCell = document.createElement('td');
    storeCell.textContent = this.locationResults[i];
    this.tableElement.appendChild(storeCell);
  }
  var newTable = document.getElementById('sales-report');
  newTable.appendChild(this.tableElement);
};

function tableHeaderAdd(){
  var hoursCell;
  var addRow = document.createElement('tr');
  var addHead = document.createElement('th');
  addRow.appendChild(addHead);
  for(var i = 0; i < 15; i++){

    hoursCell = document.createElement('th');
    hoursCell.textContent = storeHours[i];
    addRow.appendChild(hoursCell);
  }
  var newTable = document.getElementById('sales-report');
  newTable.appendChild(addRow);
}

tableHeaderAdd();

var firstAndPike = new Store('1st and Pike',firstAndPikeRow, 23, 65, 6.3);
firstAndPike.cookiesPerHour();
firstAndPike.render();

var seattleCenter = new Store('Seattle Center',seattleCenterRow, 11, 38, 3.7);
seattleCenter.cookiesPerHour();
seattleCenter.render();

var capitolHill = new Store('Capitol Hill',capitolHillRow, 20, 38, 2.3);
capitolHill.cookiesPerHour();
capitolHill.render();

var alki = new Store('Alki',alkiRow, 2, 16, 4.6);
alki.cookiesPerHour();
alki.render();

var seatacAirport = new Store('Seatac Airport',seatacAirportRow, 3, 24, 1.2);
seatacAirport.cookiesPerHour();
seatacAirport.render();

function buttonSubmitLocation() {
  event.preventDefault();

  var form = event.target;
  var addNewStore = form.addNewStore.value;
  var minimumCust = form.minimumCust.value;
  var maximumCust = form.maximumCust.value;
  var cookiesPurch = form.cookiesPurch.value;

  form.addNewStore.value = '';
  form.minimumCust.value = '';
  form.maximumCust.value = '';
  form.cookiesPurch.value = '';

  var brandNewStore = new Store(addNewStore, minimumCust, maximumCust, cookiesPurch);
  brandNewStore.cookiesPerHour();
  brandNewStore.render();
}

var storeCreateForm = document.getElementById('add-store');
storeCreateForm.addEventListener('submit', buttonSubmitLocation);
