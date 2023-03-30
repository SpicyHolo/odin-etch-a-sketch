

// Get grid container
const gridContainer = document.querySelector('.grid-container');

// Generate grid
let divPixels = [];

function colorPixel(e)
{
    const pressedButton = e.buttons;

    // Primary mouse Button was pressed
    if (pressedButton === 1)
    {
        e.currentTarget.style.backgroundColor = "black";
    }

}

function getPixelSize(n)
{
    return pixelSize = 500 / n;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function deleteGrid()
{
    removeAllChildNodes(gridContainer);
}

function createGrid(n)
{
    const pixelSize = getPixelSize(n);
    divPixels = []
    for (let i = 0; i < n**2; i++)
    {
        const divTemp = document.createElement('div');
        divTemp.classList.add("grid-item");
        divTemp.style.width = `${pixelSize}px`;
        divTemp.style.height = `${pixelSize}px`;
        gridContainer.appendChild(divTemp);
    
        divPixels.push(divTemp);
    }
    divPixels.forEach(pixel => pixel.addEventListener('mouseover', colorPixel));
}

createGrid(16);