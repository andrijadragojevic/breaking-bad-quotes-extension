document.addEventListener("DOMContentLoaded", getQuote);
document.getElementById("new-quote").addEventListener("click", getQuote);

function getQuote() {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").textContent = `"${data[0].quote}"`;
            document.getElementById("author").textContent = `- ${data[0].author}`;
        })
        .catch(error => console.error("Error fetching quote:", error));
}