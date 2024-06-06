const library = [{title: 'Sample', pages: 100, author: 'sample', read: true},
                {title: 'Sample2', pages: 1001, author: 'sample2', read: false}];

const tdata = document.querySelector('#add');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    displayData();
})

function displayData() {
    // declared empty array to store all the values in each objects in {library} array
    let data = []
    // loop through all the key:values in each object and push values to data[]
    for(let i=0; i < library.length; i++) {
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