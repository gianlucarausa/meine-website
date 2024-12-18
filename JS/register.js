'use strict'

const passwort1 = document.getElementById("passwort1");
const passwort2 = document.getElementById("passwort2");

function check() {
    if(passwort1.value != passwort2.value) {
        const confirmed = window.confirm("Die Passwörter stimmen nicht über ein! \nMit drücken von Ok werden die Felder gelöscht.")
        if(confirmed) {
            passwort1.value = "";
            passwort2.value = ""; 
            passwort1.focus();
        }
    } 
}