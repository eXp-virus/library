const library = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const book = new Book(bookName.value, authorName.value, pages.value, haveRead.checked);
    library.push(book);
}

let button;
function createButton() { // create a button to remove a entry from display inside table
    button = document.createElement('button');
    button.textContent = 'X';
    button.classList.toggle('delete-btn');
    return button;
}

function createCheckbox() {
    const box = document.createElement('input');
    box.setAttribute('type', 'checkbox');
    if(haveRead.checked) box.checked = true;
    return box;
}

const tdata = document.querySelector('#add');
const modal = document.querySelector('#modal-button');
const dialog = document.querySelector('dialog');
const btn = document.querySelector('#submit');
const form = document.querySelector('form');

let bookName = document.querySelector('#name');
let authorName = document.querySelector('#author');
let bookPages = document.querySelector('#pages');
let haveRead = document.querySelector('#haveRead'); 

modal.addEventListener('click', () => {
    dialog.showModal();
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
    dialog.close(); // close modal
    displayData();
    form.reset();
})


function displayData() {
    // declared empty array to store all the values in each objects in {library} array
    let data = []
    // loop through the key:values in the last object and push values to data[]
    for(let i = library.length; i >= library.length - 1; i--) {
        for(let j in library[i]) {
            data.push(library[i][j]);
        }
    }
    // for every index in library, create a row
    let tr = document.createElement('tr');

    for(let k=0; k < data.length; k++) {
        const td = document.createElement('td');
        if(data[k] === true || data[k] === false) { // to add a checkbox in td instead of text
            td.appendChild(createCheckbox());
            tr.appendChild(td);
        } else {
            td.textContent = data[k];
            tr.appendChild(td);
        }

    }
    if(data.length !== 0) { // add a delete button to the last column of a row
        const td = document.createElement('td');
        td.appendChild(createButton());
        tr.appendChild(td);
    }
    // finally append the row in table and wipe all data 
    tdata.appendChild(tr);
    data = [];
    
}


function deleteFromLibrary(index) {
    index = index - 1;
    library.splice(index, 1);    
}

tdata.addEventListener('click', (e) => {
    if(e.target.matches('.delete-btn')) {

        deleteFromLibrary(e.target.closest('tr').rowIndex);
        e.target.closest('tr').remove();
    } 
  
})