const library = [{title: 'Sample', pages: 100, author: 'sample', read: true}];

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


const tdata = document.querySelector('#add');
const modal = document.querySelector('#modal-button');
const dialog = document.querySelector('dialog');
const btn = document.querySelector('#submit');

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
})

function displayData() {
    // declared empty array to store all the values in each objects in {library} array
    let data = []
    // loop through the key:values in the last object and push values to data[]
    for(let i = library.length; i >= library.length - 1; i--) {
        for(let j in library[i]) {
            data.push(library[i][j]);
        }
        // for every index in library, create a row
       let tr = document.createElement('tr');
    
        for(let k=0; k < data.length; k++) {
            const td = document.createElement('td');
            td.textContent = data[k];
            tr.appendChild(td);
        }
        // finally append the row in table and wipe all data 
        tdata.appendChild(tr);
        data = [];
    }
}