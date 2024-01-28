// Function to save user information to local storage
function saveUserInfo() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const village = document.getElementById('village').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;

    const userInfo = {
        firstName,
        lastName,
        phone,
        village,
        city,
        country,
        state
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    updateCard();
}

// Function to update the card with the saved user information
function updateCard() {
    const userCard = document.getElementById('userCard');
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (storedUserInfo) {
        userCard.innerHTML = `
            <h2>User Information</h2>
            <p><strong>Name:</strong> ${storedUserInfo.firstName} ${storedUserInfo.lastName}</p>
            <p><strong>Phone:</strong> ${storedUserInfo.phone}</p>
            <p><strong>Village:</strong> ${storedUserInfo.village}</p>
            <p><strong>City:</strong> ${storedUserInfo.city}</p>
            <p><strong>Country:</strong> ${storedUserInfo.country}</p>
            <p><strong>State:</strong> ${storedUserInfo.state}</p>
            <button onclick="editUserInfo()">Edit</button>
        `;
    }
}

// Function to edit user information
function editUserInfo() {
    const userCard = document.getElementById('userCard');
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

    userCard.innerHTML = `
        <h2>User Information</h2>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" value="${storedUserInfo.firstName}" placeholder="Enter your first name">

        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" value="${storedUserInfo.lastName}" placeholder="Enter your last name">

        <label for="phone">Phone:</label>
        <input type="tel" id="phone" value="${storedUserInfo.phone}" placeholder="Enter your phone number">

        <label for="village">Village:</label>
        <input type="text" id="village" value="${storedUserInfo.village}" placeholder="Enter your village">

        <label for="city">City:</label>
        <input type="text" id="city" value="${storedUserInfo.city}" placeholder="Enter your city">

        <label for="country">Country:</label>
        <input type="text" id="country" value="${storedUserInfo.country}" placeholder="Enter your country">

        <label for="state">State:</label>
        <input type="text" id="state" value="${storedUserInfo.state}" placeholder="Enter your state">

        <button onclick="saveUserInfo()">Save</button>
    `;
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Save the current state of dark mode in local storage
    localStorage.setItem('darkModeEnabled', JSON.stringify(body.classList.contains('dark-theme')));
}

// Check if dark mode is enabled in local storage
const darkModeEnabled = JSON.parse(localStorage.getItem('darkModeEnabled'));
if (darkModeEnabled) {
    document.body.classList.add('dark-theme');
}
