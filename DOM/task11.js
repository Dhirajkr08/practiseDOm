const form = document.getElementById('addForm');
const userList = document.getElementById('items');

// create function
form.addEventListener('submit', addItems);

function addItems(e) {
    e.preventDefault();
    // taking values from input
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // store data on local storage
    if (name && email) {
        localStorage.setItem(email, JSON.stringify({ name, email }));

        // create li for the UI
        const li = document.createElement('li');
        // creating li with delete button
        li.innerHTML = `${name} (${email})<button class="delete">Delete</button> <button class="edit">EDIT</button>`;
        // append li in userlist
        userList.appendChild(li);

        alert('Data successfully stored in local storage');

        // add eventListeners for delete and edit
        var del = li.querySelector('.delete');
        del.addEventListener('click', function () {
            deleteItem(li, email);
        });

        var edit = li.querySelector('.edit');
        edit.addEventListener('click', function () {
            editItems(li, email);
        });
    } else {
        alert('Kindly enter both name and email');
    }
}
function editItems(li, email) {
    const newName = prompt('Enter the new name:');
    const newEmail = prompt('Enter the new email:');

    if (newName && newEmail) {
        // Remove the old data from local storage
        localStorage.removeItem(email);

        // Update the data in local storage with the new values
        localStorage.setItem(newEmail, JSON.stringify({ name: newName, email: newEmail }));

        // Update the UI by modifying the existing li content
        li.innerHTML = `${newName} (${newEmail})<button class="delete">Delete</button> <button class="edit">EDIT</button>`;

        // Re-add event listeners for delete and edit
        var del = li.querySelector('.delete');
        del.addEventListener('click', function () {
            deleteItem(li, newEmail);
        });

        var edit = li.querySelector('.edit');
        edit.addEventListener('click', function () {
            editItems(li, newEmail);
        });

        alert('Data successfully updated');
    } else {
        alert('Kindly enter both name and email');
    }
}



function deleteItem(li, email) {
    li.remove();
    localStorage.removeItem(email);
}


