/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["Un", "Algún"];
  let subject = [
    "abuelo",
    "perro",
    "tarado",
    "policía",
    "profesor",
    "banquero",
    "presidente del Real Madrid",
    "Pedro Sánchez salvaje"
  ];
  let action = [
    "se comió",
    "orinó",
    "defecó",
    "rompió",
    "volatilizó",
    "escupió",
    "robó"
  ];
  let possetion = [
    "mi portátil",
    "el coche de mi madre",
    "mis ganas de vivir",
    "una pizza de jamón y piña",
    "los ahorros de toda mi vida"
  ];
  let where = [
    "en la calle",
    "en la puerta de un after",
    "en una comisaría",
    "en una pasarela de moda",
    "en la presentación de Dani Alves",
    "en un bootcamp de programación para programar programas que programen programadores",
    "en la casa de Joaquín Sabina"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  document.querySelector("#theexcuse").innerHTML =
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex];
};
