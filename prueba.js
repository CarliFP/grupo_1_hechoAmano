const express = require ("express");
const path = require ("path");
const fs = require('fs'); 
const { parse } = require("path");
const { loadavg } = require("os");

let countries = [
    "Uruguay",
    "Argentina",
    "Peru",
    "Bolivia"
]

const usersFilePath = path.join(__dirname, '../grupo_1_hechoAmano/data/usuariosJason.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const productsFilePath = path.join(__dirname, '../grupo_1_hechoAmano/data/jasonProductos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

console.log(products);

users.forEach(element => {

    let buyerTipe = element.profile == 'sell' ? "1" : "2";

    let insert = "INSERT INTO `tableUsuarios` VALUES (" + element.id + ", " + element.email +  ");"
    console.log(insert);
});

function getNumberMax (max){
    return Math.floor(Math.random() * (max+1)   )
}

var counterId = 0;
countries.forEach(element => {

    let statement = "INSERT INTO TABLECOUNTRIES VALUES (" + counterId + ", " + element +");";
    counterId++;
    console.log(statement);
});

function getCountryCode (countryName){
    if (countryName == undefined) return "null";

    for (let i = 0; i < countries.length; i++){
        console.log(countries[i]);
        console.log(typeof countries[i]);
        console.log(countryName);
        console.log(typeof countryName);
        console.log(countries[i].toString() == 'Colombia');
        var con = String(countryName)
        console.log(con == 'Colombia');
        console.log("---" + con);
        console.log(countries[i].toString() == con);

        if (countries[i].toString() == countryName.toString()){
            console.log("------ACA-----");

            return i;
        }
    }
}

products.forEach(element => {
    let insert = "INSERT INTO Products VALUES (" + (element.id-1) + ", `" + element.name + "`, `" + element.seller + "`, `" + element.price + "`, `" + element.stock + "`, `" + element.payment + "`, `" + element.image +
    "`, `" + element.description + "`, `" + element.shipping + "`, `" + element.discount + "`, `" + getNumberMax(6) + "`, `"+ getNumberMax(4) + "`, `" + getNumberMax(6) + "`);"
    console.log(insert);
});
