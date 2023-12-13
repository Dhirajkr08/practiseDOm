// JavaScript code (booking.js)
//document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('addform');
    const list = document.getElementById('items');
    const link = 'https://crudcrud.com/api/1366ed0c5b694d74b98afbd96b216125/VDmadness';

    // Add eventListener
    form.addEventListener('submit', addItems);

    // Add event delegation for the "Delete" button clicks to the list
    list.addEventListener('click', function (e) {
        e.preventDefault();
        const target = e.target;
        if (target.tagName === 'BUTTON' && target.classList.contains('delete-button')) {
            const userId = target.dataset.userId;
            if (userId) {
                deleteUser(userId);
            }
        }
    });

    // Create function to add items
    function addItems(e) {
        e.preventDefault();

        const name = document.getElementById('username').value;
        const email = document.getElementById('emailId').value;
        const phone = document.getElementById('phone').value;
        const dateTime = document.getElementById('date').value;

        if (name && email && phone && dateTime) {
            const data = { name, email, phone, dateTime };

            // Posting on axios
            axios.post(link, data)
                .then((response) => {
                    showUserOnScreen(response.data);
                    console.log(response);
                })
                .catch((err) => {
                    console.error('Error:', err);
                });
        }
    }

    // Function to show user details on the screen
    function showUserOnScreen(userdata) {
        let userDetails = document.getElementById('items');

        if (!userDetails) {
            userDetails = document.createElement('ul');
            userDetails.id = 'items';
            document.body.appendChild(userDetails);
        }

        const userDetailsString = `
            <li id="user-${userdata._id}">
                Name: ${userdata.name}<br>
                Email: ${userdata.email}<br>
                Phone: ${userdata.phone}<br>
                dateTime: ${userdata.dateTime}
                <button class="btn btn-danger delete-button" data-user-id="${userdata._id}">Delete</button>
            </li>
            <hr>
        `;

        if (userDetails) {
            userDetails.innerHTML += userDetailsString;
        } else {
            console.log('Error: Kindly check the details');
        }
    }

    // Function to delete a user
    function deleteUser(userId) {
        axios.delete(`${link}/${userId}`)
            .then((response) => {
                removeUserFromScreen(userId);
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // Function to remove user from the screen
    function removeUserFromScreen(userId) {
        const userEle = document.getElementById(`user-${userId}`);
        if (userEle) {
            userEle.remove();
        }
    }
//});
