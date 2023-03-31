// Updates target pixel's bg color (to draw on the canvas)
function colorPixel(e)
{
    const pressedButton = e.buttons;

    // Primary mouse Button was pressed
    if (pressedButton === 1)
    {
        e.currentTarget.style.backgroundColor = color;
    }

}

// Get grid element (pixel) size in px, based on the density of the grid
function getPixelSize(n)
{
    return pixelSize = 500 / n;
}

// Removes all child nodes of a parent (to clear the canvas)
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/* Clears the canvas */
function clearGrid()
{
    removeAllChildNodes(gridContainer);
}

/* Creates the grid of square n x n ad div elements
    - Updates the text displaying current grid size
    - Adds events for every square in the grid
    - clears grid container of any child elements before adding new grid
*/
function createGrid(n)
{
    clearGrid();
    const pixelSize = getPixelSize(n);
    divPixels = []
    for (let i = 0; i < n**2; i++)
    {
        const divTemp = document.createElement('div');
        divTemp.classList.add("grid-item");
        divTemp.classList.add("not-draggable");
        divTemp.style.width = `${pixelSize}px`;
        divTemp.style.height = `${pixelSize}px`;
        gridContainer.appendChild(divTemp);
    
        divPixels.push(divTemp);
    }
    divPixels.forEach(pixel => pixel.addEventListener('mouseover', colorPixel));
    gridSizeText.innerText = `${n} x ${n}`;
}

/* Updates slider background, that changes based on slider's position */
function updateSliderBackground()
{
    const min = gridSizeSlider.min || 0;
    const max = gridSizeSlider.max || 100;
    const value = gridSizeSlider.value;
    const progress = (value - min) / (max - min) * 100;
    gridSizeSlider.style.setProperty('--value', `${progress}`);
}

// Prepare variables
const gridContainer = document.querySelector('.grid-container');
const clearButton = document.querySelector('#clear');
const colorPicker = document.querySelector('#colorPicker');
const gridSizeSlider = document.querySelector('#gridSize');
const gridSizeText = document.querySelector('.grid-size-text');
let divPixels = [];
let color = colorPicker.value;
let n = 16;

// Add Events
clearButton.addEventListener('click', () => createGrid(n));
gridSizeSlider.addEventListener('change', () => 
    {
        n = gridSizeSlider.value;
        createGrid(n);
    });
colorPicker.addEventListener('input', () => color = colorPicker.value);

// Adjust value in CSS for dynamically changing slider background on the left side of the thumb
gridSizeSlider.addEventListener('input', updateSliderBackground);

// Initialising
createGrid(n);


