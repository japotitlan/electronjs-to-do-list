const addButton = document.getElementById('addButton');
const inputField = document.getElementById('inputField');
const container = document.getElementById('container');

addButton.addEventListener('click', () => {

    if (inputField.value == '') return;

    let listItem = document.createElement('li');

    listItem.classList.add('list-group-item')

    listItem.innerText = inputField.value;

    container.appendChild(listItem);

    inputField.value = '';
    
    listItem.addEventListener('click', () => {
        listItem.style.textDecoration = 'line-through';
    });

    listItem.addEventListener('dblclick', () => {
        container.removeChild(listItem);
    });
});
