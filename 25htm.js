
    const form = document.getElementById('form');
    const link = 'https://crudcrud.com/api/4c71827c5c2c460c94a5cadf113d4f1b/StudentDetails';

    // Event listener for form
    form.addEventListener('submit', addStudent);

    // Event delegation for Edit and Delete buttons
    document.getElementById('details').addEventListener('click', function (e) {
        if (e.target.classList.contains('edit-btn')) {
            const listItem = e.target.closest('li');
            const studentId = listItem.dataset.id;
            editStudent(studentId);
        } else if (e.target.classList.contains('delete-btn')) {
            const listItem = e.target.closest('li');
            const studentId = listItem.dataset.id;
            deleteStudent(studentId);
        }
    });

    // Function to add a new student
// Function to add a new student
function addStudent(e) {
    e.preventDefault();

    // Take input value details
    const name = document.getElementById('name').value;
    const number = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;

    let data = { name, number, address };

    axios.post(link, data)
        .then((res) => {
            console.log(res.data);

            // Create list item with Edit and Delete buttons
            let li = document.createElement('li');
            const studentId = res.data._id; // Assuming the server returns an '_id'
            li.dataset.id = studentId;
            li.innerHTML = `${name} - ${number} - ${address} 
                            <button class='bg-primary edit-btn' onclick='editStudent("${studentId}")'>Edit</button>
                            <button class='bg-danger delete-btn' onclick='deleteStudent("${studentId}")'>Delete</button>`;

            // Append the list item to the studentDetails list
            let list = document.getElementById('studentDetails');
            list.appendChild(li);

            // Save to localStorage
            let items = JSON.parse(localStorage.getItem('students')) || [];
            items.push({ id: studentId, name, number, address });
            localStorage.setItem('students', JSON.stringify(items));

            // Update student count
            let countElement = document.getElementById('studentCount');
            countElement.textContent = `Student Count: ${items.length}`;
        })
        .catch((err) => {
            console.log(err);
        });
}

    function editStudent(studentId) {
        const editLink = `https://crudcrud.com/api/4c71827c5c2c460c94a5cadf113d4f1b/StudentDetails/${studentId}`;
        const listItem = document.querySelector(`li[data-id='${studentId}']`);
    
        // Assuming you have input fields with IDs 'editName', 'editMobile', 'editAddress'
        const newName = prompt("Enter new name:");
        const newMobile = prompt("Enter new mobile:");
        const newAddress = prompt("Enter new address:");
    
        // Update UI
        if (listItem) {
            listItem.innerHTML = `${newName} - ${newMobile} - ${newAddress} 
                                 <button onclick="editStudent('${studentId}')" class='bg-primary edit-btn'>Edit</button>
                                 <button onclick="deleteStudent('${studentId}')" class='bg-danger delete-btn'>Delete</button>`;
        } else {
            console.error(`Error: listItem 'student-${studentId}' not found`);
            return; // Exit the function if listItem is not found
        }
    
        axios.put(editLink, { name: newName, number: newMobile, address: newAddress })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function deleteStudent(studentId) {
        const deletelink = `https://crudcrud.com/api/4c71827c5c2c460c94a5cadf113d4f1b/StudentDetails/${studentId}`;
        const listItem = document.getElementById(`student-${studentId}`);
    
        axios.delete(deletelink)
            .then(() => {
                console.log(`Item with ID ${studentId} deleted successfully.`);
                if (listItem) {
                    listItem.parentNode.removeChild(listItem);
                } else {
                    console.error(`Error: listItem 'student-${studentId}' not found`);
                }
    
                // Update student count (if needed)
                let countElement = document.getElementById('studentCount');
                if (countElement) {
                    let items = JSON.parse(localStorage.getItem('students')) || [];
                    countElement.textContent = `Student Count: ${items.length}`;
                }
            })
            .catch((err) => {
                console.error(`Error deleting item with ID ${studentId}:`, err);
            });
    }
    
    