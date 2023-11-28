"use strict"

function plus() {
    const num1 = Number(document.getElementById("n1").value);
    const num2 = Number(document.getElementById("n2").value);
    const result = num1 + num2;
    document.getElementById("out").innerHTML = result
}

function min() {
    const num1 = Number(document.getElementById("n1").value);
    const num2 = Number(document.getElementById("n2").value);
    const result = num1 - num2;
    document.getElementById("out").innerHTML = result
}

function mult() {
    const num1 = Number(document.getElementById("n1").value);
    const num2 = Number(document.getElementById("n2").value);
    const result = num1 * num2;
    document.getElementById("out").innerHTML = result
}

function div() {
    const num1 = Number(document.getElementById("n1").value);
    const num2 = Number(document.getElementById("n2").value);
    const result = num1 / num2;
    document.getElementById("out").innerHTML = result
}
