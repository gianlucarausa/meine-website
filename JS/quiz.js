'use strict'

const zahl1 = document.getElementById("zahl1");
const zahl2 = document.getElementById("zahl2");
const rechenart = document.getElementById("rechenart");
const submitbutton = document.getElementById("rechnenbutton");
const resetbutton = document.getElementById("resetbutton");

function calculate() {
    if(zahl1.value !="" && zahl2.value !="") {
        const num1 = parseFloat(zahl1.value); 
        const num2 = parseFloat(zahl2.value);
        if(rechenart.value == "Addieren"){
            const ergebnis = num1 + num2;
            const confirmed = confirm("Das ergebnis ist:\n" + ergebnis);
            if(confirmed) {
                zahl1.value = "";
                zahl2.value = "";
                zahl1.focus();
            }
        } else if(rechenart.value == "Subtrahieren") {
            const ergebnis = num1 - num2;
            const confirmed = confirm("Das ergebnis ist:\n" + ergebnis);
            if(confirmed) {
                zahl1.value = "";
                zahl2.value = "";
                zahl1.focus();
            }
        } else if(rechenart.value == "Multiplizieren") {
            const ergebnis = num1 * num2;
            const confirmed = confirm("Das ergebnis ist:\n" + ergebnis);
            if(confirmed) {
                zahl1.value = "";
                zahl2.value = "";
                zahl1.focus();
            }
        } else if(rechenart.value == "Dividieren") {
            const ergebnis = num1 / num2;
            const confirmed = confirm("Das ergebnis ist:\n" + ergebnis);
            if(confirmed) {
                zahl1.value = "";
                zahl2.value = "";
                zahl1.focus();
            }
        }
    } else if (zahl1.value =="" && zahl2.value =="") {
        window.alert("Bitte geben sie 2 Zahlen ein!");
        zahl1.focus();
    }      
}

function reset() {
    zahl1.value = "";
    zahl2.value = "";
    zahl1.focus();
}