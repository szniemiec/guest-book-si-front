const tableContainer = document.querySelector(".students")

function getMessages() {
    fetch('http://localhost:8000/index')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (students) {
            innerMessages(students);
        })
}

function innerMessages(messages) {
    const table = document.querySelector(".tbody");
    messages.forEach(message => {
        let row = document.createElement("tr");
        row.innerHTML =
            `<td>${message.name}</td>` +
            '<br>' +
            `<td>${message.message}</td>` +
            '<br><br>';
        table.appendChild(row);
    });
}

getMessages();