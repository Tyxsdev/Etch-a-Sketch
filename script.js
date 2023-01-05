let container = document.createElement('div');
const row1 = document.createElement('div');
const col1 = document.createElement('div');
const button = document.createElement('button')

row1.classList.add('rows');
container.classList.add('container');
col1.classList.add('col')
button.textContent = `Create a New Grid!!`

let col2 = col1.cloneNode(true);
let col3 = col1.cloneNode(true);
let col4 = col1.cloneNode(true);
let col5 = col1.cloneNode(true);
let col6 = col1.cloneNode(true);
let col7 = col1.cloneNode(true);
let col8 = col1.cloneNode(true);
let col9 = col1.cloneNode(true);
let col10 = col1.cloneNode(true);
let col11 = col1.cloneNode(true);
let col12 = col1.cloneNode(true);
let col13 = col1.cloneNode(true);
let col14 = col1.cloneNode(true);
let col15 = col1.cloneNode(true);
let col16 = col1.cloneNode(true);

row1.appendChild(col1);
row1.appendChild(col2);
row1.appendChild(col3);
row1.appendChild(col4);
row1.appendChild(col5);
row1.appendChild(col6);
row1.appendChild(col7);
row1.appendChild(col8);
row1.appendChild(col9);
row1.appendChild(col10);
row1.appendChild(col11);
row1.appendChild(col12);
row1.appendChild(col13);
row1.appendChild(col14);
row1.appendChild(col15);
row1.appendChild(col16); 

let row2 = row1.cloneNode(true);
let row3 = row1.cloneNode(true);
let row4 = row1.cloneNode(true);
let row5 = row1.cloneNode(true);
let row6 = row1.cloneNode(true);
let row7 = row1.cloneNode(true);
let row8 = row1.cloneNode(true);
let row9 = row1.cloneNode(true);
let row10 = row1.cloneNode(true);
let row11 = row1.cloneNode(true);
let row12 = row1.cloneNode(true);
let row13 = row1.cloneNode(true);
let row14 = row1.cloneNode(true);
let row15 = row1.cloneNode(true);
let row16 = row1.cloneNode(true);

document.body.appendChild(button);
container.appendChild(row1);
container.appendChild(row2);
container.appendChild(row3);
container.appendChild(row4);
container.appendChild(row5);
container.appendChild(row6);
container.appendChild(row7);
container.appendChild(row8);
container.appendChild(row9);
container.appendChild(row10);
container.appendChild(row11);
container.appendChild(row12);
container.appendChild(row13);
container.appendChild(row14);
container.appendChild(row15);
container.appendChild(row16); 
document.body.appendChild(container);

const divs = document.querySelectorAll('div.col');
function hover(e){
    e.target.classList.add('grey');
}
divs.forEach((div) => {
    div.addEventListener('mouseenter', hover)
})


function popout(){
    let size = window.prompt('Enter a new grid size: ');
    while(isNaN(size) === true){
        size = window.prompt('Not a valid number: ')
    }
    while(size > 100){
        size = window.prompt('The size is too big, try again: ');
    }

    document.body.removeChild(container);
    let newContainer = document.createElement('div');
    newContainer.classList.add('container');
    container = newContainer;
    for (let i = 0; i < size; i++){
        const newRow = document.createElement('div');        
        newRow.classList.add('rows');
        for (let a = 0; a < size; a++){
            const newCol = document.createElement('div');
            newCol.classList.add('col');
            newRow.appendChild(newCol);
        }
        newContainer.appendChild(newRow); 
    }
    document.body.appendChild(container);
    const newDivs = document.querySelectorAll('div.col');
    newDivs.forEach((div) => {
        div.addEventListener('mouseenter', hover)
    })  
    
}
button.addEventListener('click', popout);


