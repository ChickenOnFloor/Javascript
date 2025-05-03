const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable").querySelector("tbody");
const modal = document.getElementById("modalOverlay");
const editForm = document.getElementById("editForm");

let editRow = null;

studentForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const grade = parseInt(document.getElementById("grade").value);

    if (age < 3 || age > 18 || grade < 1 || grade > 10) {
    alert("Please enter valid age (3-18) and grade (1-10).");
    return;
    }

    const row = studentTable.insertRow();
    row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${grade}</td>
    <td class="actions">
        <button onclick="editStudent(this)">✏️</button>
        <button onclick="deleteStudent(this)">🗑️</button>
    </td>
    `;

    studentForm.reset();
});

function deleteStudent(btn) {
    var td = btn.parentNode;
    var tr = td.parentNode;
    tr.remove()
}

function editStudent(btn) {
    var td = btn.parentNode;
    var tr = td.parentNode;
    editRow = tr;
    const cells = editRow.querySelectorAll("td");
    document.getElementById("editName").value = cells[0].textContent;
    document.getElementById("editAge").value = cells[1].textContent;
    document.getElementById("editGrade").value = cells[2].textContent;

    modal.classList.add("active");
}

editForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("editName").value.trim();
    const age = parseInt(document.getElementById("editAge").value);
    const grade = parseInt(document.getElementById("editGrade").value);

    if (age < 3 || age > 18 || grade < 1 || grade > 10) {
    alert("Please enter valid age (3-18) and grade (1-10).");
    return;
    }

    editRow.cells[0].textContent = name;
    editRow.cells[1].textContent = age;
    editRow.cells[2].textContent = grade;

    modal.classList.remove("active");
    editForm.reset();
    editRow = null;
});

function cancelEdit() {
    modal.classList.remove("active");
    editForm.reset();
    editRow = null;
}