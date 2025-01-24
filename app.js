const but = document.querySelector("button");
const body = document.querySelector("body");
body.style.backgroundColor = "black";
const h2 = document.createElement("h2"); // Create the h2 element
h2.innerText = "HI!"; // Set the inner text of the h2 element
document.body.prepend(h2); // Append the h2 element to the body
h2.style.color = "white"

but.addEventListener("click", function () {

    let num1 = Math.floor(Math.random() * 255) + 1
    let num2 = Math.floor(Math.random() * 255) + 1
    let num3 = Math.floor(Math.random() * 255) + 1
    const newColor = `rgb(${num1},${num2},${num3})`
    h2.innerText = newColor
    body.style.backgroundColor = newColor

})