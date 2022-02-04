var car1 = {brand: "Ford", year: "2020", model: "Raptor", mileage: 28, condition: "new", price: 720000};
var car2 = {brand: "Toyota", year: "2020", model: "legend50", mileage: 16, condition: "new", price: 690000};
var car3 = {brand: "Nissan", year: "2020", model: "Np300 Hardbody", mileage: 19, condition: "new", price: 550000};

var cars = [car1, car2, car3]




document.getElementById("yearmodel1").innerHTML = cars[0].year;
document.getElementById("brand1").innerHTML = cars[0].brand;
document.getElementById("model1").innerHTML = cars[0].model;
document.getElementById("mileage1").innerHTML = cars[0].mileage;
document.getElementById("pricetag1").innerHTML = cars[0].price;

document.getElementById("yearmodel2").innerHTML = cars[1].year;
document.getElementById("brand2").innerHTML = cars[1].brand;
document.getElementById("model2").innerHTML = cars[1].model;
document.getElementById("mileage2").innerHTML = cars[1].mileage;
document.getElementById("pricetag2").innerHTML = cars[1].price;

document.getElementById("yearmodel3").innerHTML = cars[2].year;
document.getElementById("brand3").innerHTML = cars[2].brand;
document.getElementById("model3").innerHTML = cars[2].model;
document.getElementById("mileage3").innerHTML = cars[2].mileage;
document.getElementById("pricetag3").innerHTML = cars[2].price;