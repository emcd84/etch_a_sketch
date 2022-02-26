function empty(element) {
    element.replaceChildren();
}

//Button
let gridSize = 0;
const btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', () => {
    
    gridSize = prompt("Enter the number of squares per side of your grid:");
    if(gridSize > 100) {
        gridSize = 100;
    }
    const container = document.querySelector('#container');
    empty(container);

    //Add rows
    for(let i=0; i<gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }

    //Get array of row elements
    const rows = document.querySelectorAll('.row');
    let arr = [...rows];

    //Add squares
    for(let i=0; i<gridSize; i++) {
    for(let j=0; j<gridSize; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseenter', () => {
            square.classList.add('enter');
            console.log('hover');
        });
        arr[i].appendChild(square);
    }
}
})
console.log(gridSize);

//Creating grid



