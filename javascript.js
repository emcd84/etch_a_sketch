//Creating grid
const rows = document.querySelectorAll('.row');
let arr = [...rows];

for(let i=0; i<16; i++) {
    for(let j=0; j<7; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseenter', () => {
            square.classList.add('enter');
            console.log('hover');
        });
        arr[i].appendChild(square);
    }
}

//Hover effect

