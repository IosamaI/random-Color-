# Rondem COLOR: A Random Background Color Generator

## Overview
**Rondem COLOR** is a simple web application that dynamically changes the background color of the webpage to a random color when a button is clicked. Each generated color is displayed as an `RGB` value on the page, giving users a visually engaging way to explore color variations.

This project combines HTML, CSS, and JavaScript to create an interactive user experience. It's lightweight, visually appealing, and easy to use, making it perfect for beginners learning about DOM manipulation and event handling in JavaScript.

---

## Features
- **Random Color Generation**: Generates a random RGB color on each button click.
- **Dynamic Background Update**: Updates the background color of the webpage to the newly generated color.
- **Color Display**: Displays the current background color in RGB format at the top of the page.
- **Responsive Design**: Works seamlessly across different screen sizes and devices.

---

## Project Structure
### Files Included:
1. **`index.html`**:
    - Contains the basic structure of the webpage.
    - Includes a button to trigger the color change functionality.
2. **`app.js`**:
    - Handles the core functionality of generating random colors and updating the UI dynamically.
    - Demonstrates the use of DOM manipulation and event listeners in JavaScript.
3. **`app.css`**:
    - Provides styling for the webpage, including font size and overall layout.

---

## Code Details

### `index.html`
- A simple HTML structure containing a button and a script reference for JavaScript.
- Includes a `<h2>` element dynamically created using JavaScript to display the RGB color.

### `app.js`
- Generates random RGB color values using `Math.random()` and `Math.floor()`.
- Changes the background color of the `<body>` and updates the text of the `<h2>` element with the new color.

Example snippet:
```javascript
but.addEventListener("click", function () {
    let num1 = Math.floor(Math.random() * 255) + 1;
    let num2 = Math.floor(Math.random() * 255) + 1;
    let num3 = Math.floor(Math.random() * 255) + 1;
    const newColor = `rgb(${num1},${num2},${num3})`;
    h2.innerText = newColor;
    body.style.backgroundColor = newColor;
});
