
function enterRows() { //Get user input for number of rows
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
    clearGrid(); //Clears old grid, if it exists

    var root = document.querySelector(':root');
    root.style.setProperty('--numRows', numRows); //Access and set numRows variable in stylesheet

    const container = document.querySelector('#gridContainer'); 
    var totalBoxes = numRows*numRows;
    for (let i = 0; i < totalBoxes; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        container.appendChild(gridBox);
    }
    fillBlack(); //Set default drawing option to black
}

function fillBlack() {
    gridBox = document.querySelectorAll('.gridBox'); 
    for (let box of gridBox) {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'black';
        })
    }
}

function fillWhite() {
    gridBox = document.querySelectorAll('.gridBox'); 
    for (let box of gridBox) {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'white';
        })
    }
}

function fillRandom(randColor) {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    gridBox = document.querySelectorAll('.gridBox'); 
    for (let box of gridBox) {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = colors[randColor];
        })
    }
}

generateGrid(16); //Initial generation of 16x16 grid

let drawingChoice;
const buttons = document.querySelectorAll('.drawingOption'); //Change drawing color upon user selecting button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        drawingChoice = button.id;
        if (drawingChoice == 'black') {
            fillBlack();
        }
        if (drawingChoice == 'white') {
            fillWhite();
        }
        if (drawingChoice == 'random') {
            let rand = Math.random()
            rand = Math.floor(rand * 6);
            fillRandom(rand);
        }
    });
});


