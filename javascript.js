const rows = document.querySelectorAll('.row');
console.log(rows);
let arr = [...rows];
console.log(arr);

//arr[1].appendChild(square);

for(let i=0; i<16; i++) {
    for(let j=0; j<7; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        arr[i].appendChild(square);
    }
}