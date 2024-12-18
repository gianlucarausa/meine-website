'use strict'

const quiz1input = document.getElementById("quizinputid");
const frage = document.getElementById("frage");

const frage2 = null;

function quiz1() {
    if(quiz1input.value !="") {
        if(quiz1input.value == 7) {
            const confirmquiz1 = window.confirm("Die Antwort war richtig!\nMit Klicken auf Ok kommt das nächste Quiz")
            if(confirmquiz1) {
                quiz1input.value = "";
                quiz1input.focus;
            }
        } else {
            window.alert("Die Antwort war falsch!")
        }
    }

        
}