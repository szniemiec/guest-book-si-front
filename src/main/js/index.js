const form = document.querySelector("#box_frame");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = `name=${this.name.value}&message=${this.message.value}`;
    post(data)
})

function post(data) {
    fetch("http://localhost:8000/index",
        {
            method: "POST",
            body: data
        })
        .then(function (response) {
            if (response.ok) {
                alert("Done!")
                return response.json();
            }
            alert("Something went wrong. Try again.")
        })
        .then(function () {
            window.location.href = "index.html";
        });
}