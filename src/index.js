const addButton = document.getElementById('addButton');
const inputField = document.getElementById('inputField');
const container = document.getElementById('container');

addButton.addEventListener('click', () => {

    if (inputField.value == '') return;

    let paragraph = document.createElement('p');

    paragraph.classList.add('paragraph')

    paragraph.innerText = inputField.value;

    container.appendChild(paragraph);

    inputField.value = '';
    
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', () => {
        container.removeChild(paragraph);
    });
});
