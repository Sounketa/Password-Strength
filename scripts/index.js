"use strict"

const strengthMeter = document.querySelector("#strengthMeter");
const passwordInput = document.querySelector("#passwordInput");
const commentsDiv = document.querySelector("#commentsDiv");

// passwordInput.addEventListener(`input`, () =>(
//     let weaknesses = strengthMeter
//     (passwordInput.value)
//     console.log(weaknesses)
// ))

function passordStrength (password) {
    const weaknesses = []
    weaknesses.push(lengthWeakness(password))
    return weakness
}

function lengthWeakness(password) {
    const length = password.length

    if (length <= 5) {
        return {
            message: "Your password is too short",
            deduction: 40
        }
    }

    if (length <= 10) {
        return {
            message: "Your password could be longer",
            deduction: 15
        }
    }
}