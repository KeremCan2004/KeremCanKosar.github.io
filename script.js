document.getElementById("newData").addEventListener("click", () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("content").innerHTML = `<p>${data.value}</p>`;
        })
        .catch(error => console.error("Hata oluştu:", error));
});
