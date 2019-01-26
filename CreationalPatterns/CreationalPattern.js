var express = require("express");
var app = express();


var car = {};

Object.defineProperty(car, 'color', {
    value: "blue",
    writable: false
});

car.color = "red";

console.log("This car is " + car.color);