document.addEventListener('DOMContentLoaded', function () {
    let studentCount = parseInt(localStorage.getItem('studentCount')) || 0;
    let studentDetails = JSON.parse(localStorage.getItem('studentDetails')) || [];

    document.getElementById('studentCount').textContent = `Total Students: ${studentCount}`;
    displayStudentDetails();

    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const address = document.getElementById('address').value;

        if (name && mobile && address) {
            const studentIndex = editModeIndex !== null ? editModeIndex : studentCount;

            if (editModeIndex !== null) {
                // Editing existing student
                editStudentOnServer(studentIndex, { name, mobile, address });
                studentDetails[editModeIndex] = { name, mobile, address };
                editModeIndex = null; // Reset edit mode
            } else {
                // Adding a new student
                addStudentOnServer({ name, mobile, address });
                studentDetails.push({ name, mobile, address });
                studentCount++;
            }

            localStorage.setItem('studentCount', studentCount);
            localStorage.setItem('studentDetails', JSON.stringify(studentDetails));

            document.getElementById('name').value = '';
            document.getElementById('mobile').value = '';
            document.getElementById('address').value = '';

            document.getElementById('studentCount').textContent = `Total Students: ${studentCount}`;
            displayStudentDetails();
        } else {
            alert('Please fill in all fields.');
        }
    });

    function displayStudentDetails() {
        const detailsList = document.getElementById('studentDetails');
        detailsList.innerHTML = '';

        studentDetails.forEach((student, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Name:</strong> ${student.name}, 
                <strong>Mobile:</strong> ${student.mobile}, 
                <strong>Address:</strong> ${student.address}
                <button onclick="editStudent(${index})" class="btn btn-primary btn-sm">Edit</button>
                <button onclick="deleteStudent(${index})" class="btn btn-danger btn-sm">Delete</button>
            `;
            detailsList.appendChild(listItem);
        });
    }

    let editModeIndex = null;

    window.editStudent = function (index) {
        // Set form values for editing
        const { name, mobile, address } = studentDetails[index];
        document.getElementById('name').value = name;
        document.getElementById('mobile').value = mobile;
        document.getElementById('address').value = address;

        // Set edit mode index
        editModeIndex = index;
    };

    window.deleteStudent = function (index) {
        // Remove the student at the specified index
        deleteStudentOnServer(index);
        studentDetails.splice(index, 1);
        studentCount--;

        // Update localStorage and display
        localStorage.setItem('studentCount', studentCount);
        localStorage.setItem('studentDetails', JSON.stringify(studentDetails));
        document.getElementById('studentCount').textContent = `Total Students: ${studentCount}`;
        displayStudentDetails();
    };

    function addStudentOnServer(studentData) {
        // Send a POST request to the server to add a new student
        const serverEndpoint = 'YOUR_ADD_STUDENT_ENDPOINT'; // Replace with your actual server endpoint
        axios.post(serverEndpoint, studentData)
            .then(response => {
                console.log('Student added on the server:', response.data);
            })
            .catch(error => {
                console.error('Error adding student on the server:', error);
            });
    }

    function editStudentOnServer(index, studentData) {
        // Send a PUT request to the server to edit an existing student
        const serverEndpoint = `YOUR_EDIT_STUDENT_ENDPOINT/${index}`; // Replace with your actual server endpoint
        axios.put(serverEndpoint, studentData)
            .then(response => {
                console.log('Student edited on the server:', response.data);
            })
            .catch(error => {
                console.error('Error editing student on the server:', error);
            });
    }

    function deleteStudentOnServer(index) {
        // Send a DELETE request to the server to delete an existing student
        const serverEndpoint = `YOUR_DELETE_STUDENT_ENDPOINT/${index}`; // Replace with your actual server endpoint
        axios.delete(serverEndpoint)
            .then(response => {
                console.log('Student deleted on the server:', response.data);
            })
            .catch(error => {
                console.error('Error deleting student on the server:', error);
            });
    }
});