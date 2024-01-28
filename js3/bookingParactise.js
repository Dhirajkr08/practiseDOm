const form = document.getElementById("addform");
const itemsList = document.getElementById("items");

// Define handleSubmit outside the event listener
function handleSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const emailId = document.getElementById("emailId").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;

    const addUrl = "https://crudcrud.com/api/f19180852f744647a78785bbacd9c7f6/bookingDetails";

    axios.post(addUrl, { username, emailId, phone, date })
        .then(response => {
            const addedUser = response.data;

            const listItem = createUserListItem(addedUser);
            itemsList.appendChild(listItem);

            form.reset();
        })
        .catch(error => {
            console.error("Error adding user details:", error);
        });
}

form.addEventListener("submit", handleSubmit);

function createUserListItem(user) {
    const listItem = document.createElement("li");
    listItem.id = `user-${user._id}`;
    listItem.innerHTML = `
        Username: ${user.username}, Email: ${user.emailId}, Phone: ${user.phone}, Date: ${user.date}
        <button class="btn btn-info btn-sm mx-2" onclick="editUser('${user._id}')">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteUser('${user._id}')">Delete</button>
    `;
    return listItem;
}

function editUser(userId) {
    if (!userId) {
        console.error("Invalid userId:", userId);
        return;
    }

    const getUserUrl = `https://crudcrud.com/api/f19180852f744647a78785bbacd9c7f6/bookingDetails/${userId}`;

    axios.get(getUserUrl)
        .then(response => {
            const user = response.data;

            document.getElementById("username").value = user.username;
            document.getElementById("emailId").value = user.emailId;
            document.getElementById("phone").value = user.phone;
            document.getElementById("date").value = user.date;

            // Remove the initial form submission event listener
            form.removeEventListener("submit", handleSubmit);

            // Add a new event listener for editing the form
            function editSubmit(event) {
                event.preventDefault();

                const editedUsername = document.getElementById("username").value;
                const editedEmailId = document.getElementById("emailId").value;
                const editedPhone = document.getElementById("phone").value;
                const editedDate = document.getElementById("date").value;

                const editUrl = `https://crudcrud.com/api/f19180852f744647a78785bbacd9c7f6/bookingDetails/${userId}`;

                axios.put(editUrl, { username: editedUsername, emailId: editedEmailId, phone: editedPhone, date: editedDate })
                    .then(() => {
                        const editedUser = {
                            id: userId,
                            username: editedUsername,
                            emailId: editedEmailId,
                            phone: editedPhone,
                            date: editedDate
                        };
                        const editedListItem = createUserListItem(editedUser);
                        itemsList.replaceChild(editedListItem, document.getElementById(`user-${userId}`));

                        form.reset();

                        // Restore the original form submission event listener
                        form.removeEventListener("submit", editSubmit);
                        form.addEventListener("submit", handleSubmit);
                    })
                    .catch(error => {
                        console.error("Error editing user details:", error);
                    });
            }

            // Add the new editing form event listener
            form.addEventListener("submit", editSubmit);
        })
        .catch(error => {
            console.error("Error fetching user details for editing:", error);
        });
}

function deleteUser(userId) {
    const deleteUrl = `https://crudcrud.com/api/f19180852f744647a78785bbacd9c7f6/bookingDetails/${userId}`;

    axios.delete(deleteUrl)
        .then(() => {
            itemsList.removeChild(document.getElementById(`user-${userId}`));
        })
        .catch(error => {
            console.error("Error deleting user:", error);
        });
}
