
function enterRows() { //Get user input for number of rows and updates grid
    var input = document.getElementById("userInput").value;
    generateGrid(input);
}

function clearGrid() {
    const container = document.querySelector('#gridContainer');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function generateGrid(numRows) {
    if (numRows > 100 || numRows < 1) {
        alert("Enter a value between 1 and 100");
        return;
    }

    clearGrid(); //Clears old grid, if it exists

    var root = document.querySelector(':root');
    root.style.setProperty('--numRows', numRows); //Access and set numRows variable in stylesheet

    const container = document.querySelector('#gridContainer');
    var totalBoxes = numRows * numRows;
    for (let i = 0; i < totalBoxes; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        container.appendChild(gridBox);
    }
    fillBlack(); //Set default drawing option to black
}

function fillBlack() { //Sets drawing color to black
    gridBox = document.querySelectorAll('.gridBox');
    for (let box of gridBox) {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'black';
        })
    }
}

function fillWhite() { //Sets drawing color to white
    gridBox = document.querySelectorAll('.gridBox');
    for (let box of gridBox) {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'white';
        })
    }
}

function fillRandom() { //Sets drawing color to a random color
    gridBox = document.querySelectorAll('.gridBox');
    for (let box of gridBox) {
        box.addEventListener('mouseenter', () => {
            let randR = Math.floor(Math.random() * 256);
            let randG = Math.floor(Math.random() * 256);
            let randB = Math.floor(Math.random() * 256);
            let randRGB = "rgb(" + randR + ", " + randG + ", " + randB + ")";
            box.style.backgroundColor = randRGB;
        })
    }
}

generateGrid(16); //Initial generation of 16x16 grid

let drawingColor;
const buttons = document.querySelectorAll('.drawingColor'); //Change drawing color upon user selecting button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        drawingColor = button.id;
        if (drawingColor == 'black') {
            fillBlack();
        }
        if (drawingColor == 'white') {
            fillWhite();
        }
        if (drawingColor == 'random') {
            fillRandom();
        }
    });
});


