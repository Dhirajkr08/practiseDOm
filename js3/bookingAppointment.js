const form = document.getElementById('addform');
const userList = document.getElementById('items');
const Api_URL = 'https://crudcrud.com/api/a72d8f7db7f748ecbcaa821cb056628b';

form.addEventListener('submit', addItems);

function addItems(e) {
    e.preventDefault();
    const name = document.getElementById('username').value;
    const email = document.getElementById('emailId').value;
    const phone = document.getElementById('phone').value;
    const dateTime = document.getElementById('date').value;

    if (name && email && phone && dateTime) {
        const data = { name, email, phone, dateTime };

        axios.post(Api_URL, data)
            .then((response) => {
                
                const newItem = response.data;
                addUserList(newItem);
                alert('Data successfully stored via API');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to store data');
            });
    } else {
        alert('Kindly fill in all details');
    }
}

function addUserList(item) {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} (${item.email}) (${item.phone}) (${item.dateTime})<button class="btn btn-danger delete">Delete</button><button class="btn btn-black edit">Edit</button>`;
    userList.appendChild(li);

    const del = li.querySelector('.delete');
    del.addEventListener('click', () => {
        deleteItem(item._id, li);
    });

    const edit = li.querySelector('.edit');
    edit.addEventListener('click', () => {
        editItem(item._id, li);
    });
}

function editItem(itemId, li) {
    const newName = prompt('Enter the new name:');
    const newEmail = prompt('Enter the new email:');
    const newPhone = prompt('Enter the new phone:');
    const newDateTime = prompt('Enter the new date & time:');

    if (newName && newEmail && newPhone && newDateTime) {
        const newData = { name: newName, email: newEmail, phone: newPhone, dateTime: newDateTime };

        axios.put(`${Api_URL}/${itemId}`, newData)
            .then((response) => {
                const updatedItem = response.data;
                li.innerHTML = `${updatedItem.name} (${updatedItem.email}) (${updatedItem.phone}) (${updatedItem.dateTime})<button class="btn btn-danger delete">Delete</button><button class="btn btn-black edit">Edit</button>`;
                alert('Item updated successfully via API');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to update item via API');
            });
    } else {
        alert('Kindly fill in all details');
    }
}

function deleteItem(itemId, li) {
    axios.delete(`${Api_URL}/${itemId}`)
        .then(() => {
            li.remove();
            alert('Item deleted successfully via API');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to delete item via API');
        });
}
