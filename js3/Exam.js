const form = document.getElementById('form');
const link = 'https://crudcrud.com/api/bed212af6b0541e68e3572949e3c645f/vdmad';

// Initialize the data array by retrieving it from local storage
let data = JSON.parse(localStorage.getItem('crudData')) || { option1: [], option2: [], option3: [] };

form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    const item = document.getElementById('item').value;
    const price = document.getElementById('price').value;
    const option = document.getElementById('option').value;

    let list;
    switch (option) {
        case 'option1':
            list = document.getElementById('option1order');
            break;
        case 'option2':
            list = document.getElementById('option2order');
            break;
        case 'option3':
            list = document.getElementById('option3order');
            break;
    }

    const listItem = document.createElement('li');
    listItem.textContent = `${item} - $${price}`;

    const editButton = createEditButton(listItem, item, price, option);
    const deleteButton = createDeleteButton(listItem);

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);

    // Save the data to local storage
    data[option].push({ item, price });
    localStorage.setItem('crudData', JSON.stringify(data));

    const postData = { item, price, option };
    axios.post(link, postData)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
}

async function editItem(item, newItem) {
    // Implement the edit logic here, update local storage if needed
    console.log(`Editing item ${item} to ${newItem}`);
}

async function deleteItem(item) {
    // Implement the delete logic here, update local storage if needed
    console.log(`Deleting item ${item}`);
}

function createEditButton(listItem, item, price, option) {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', async () => {
        const newItem = prompt('Enter the new item:');
        const newPrice=prompt('Enter the new Price');
        const newOption=prompt('enter the new option');
        if (newItem && newPrice && newOption !== null) {
            await editItem(item, newItem);
            // Update the UI
            listItem.textContent = `${newItem} - $${price}`;
        }
    });
    return editButton;
}

function createDeleteButton(listItem) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', async () => {
        await deleteItem(item);
        // Update the UI
        listItem.remove();
    });
    return deleteButton;
}
