
// ========LEV-1_2-conditional-statements=========//

const iW = document.getElementById("inputWetter")
console.log(iW)

let oW = document.getElementById("outputWetter")
console.log(oW)

function weather() {
    if (inputWetter.value >= 8) {
        outputWetter.innerHTML = "super"
    }
    else if (inputWetter.value >= 6) {
        outputWetter.innerHTML = "gut"
    }
    else if (inputWetter.value >= 3) {
        outputWetter.innerHTML = "okay"
    }
    else if (inputWetter.value >=0) {
        outputWetter.innerHTML = "schlecht"
    }
}
