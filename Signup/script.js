function submitForm() {
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value;

if (!name || !email || !password) {
    alert("Please fill in all fields!");
    return;
}

const card = document.createElement("div");
card.className = "card";
card.innerHTML = `
    <h4>Submitted Info</h4>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
`;

document.getElementById("cardsContainer").appendChild(card);

// Clear inputs
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("password").value = "";
}