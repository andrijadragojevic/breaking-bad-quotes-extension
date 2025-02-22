const links = [
    "https://amzn.to/3EOOhS2",
    "https://amzn.to/3D635LA",
    "https://amzn.to/4hReQEE",
    "https://amzn.to/3ERVW1U",
    "https://amzn.to/41tiG1g",
    "https://amzn.to/4gXCgHc",
    "https://amzn.to/4bbPnU6",
    "https://amzn.to/4i88IHY",
    "https://amzn.to/3EL3uDy",
    "https://amzn.to/4ibkS2N",
    "https://amzn.to/3EToEzx",
    "https://amzn.to/4k9XdS2",
    "https://amzn.to/4k3RtcN",
    "https://amzn.to/4398ex1",
    "https://amzn.to/437M7XC",
    "https://amzn.to/3D4UCYW",
    "https://amzn.to/3QvdbJ6",
    "https://amzn.to/3QtFCqy",
    "https://amzn.to/4hJG3Js",
    "https://amzn.to/4hUm6zW",
    "https://amzn.to/41qVWi5",
    "https://amzn.to/4hM2ii7",
    "https://amzn.to/4gTXiXn",
    "https://amzn.to/4gNFBbS",
    "https://amzn.to/3D0FLyQ",
    "https://amzn.to/4bhKgl9",
    "https://amzn.to/4bbM6Ea",
    "https://amzn.to/4bkog9l",
    "https://amzn.to/4be5IYn",
    "https://amzn.to/4bfbmJz",
    "https://amzn.to/4bfvDib",
    "https://amzn.to/4bbRasi",
    "https://amzn.to/3D0XRRk",
    "https://amzn.to/4bklYqU",
    "https://amzn.to/4bfvGKT",
    "https://amzn.to/4beE3Xg",
    "https://amzn.to/43ajsBy",
    "https://amzn.to/437NC8c",
    "https://amzn.to/4k7TwfN"
]

document.addEventListener("DOMContentLoaded", getQuote);
document.getElementById("new-quote").addEventListener("click", () => openRandomLink(links));

function openRandomLink(links) {
    const randomLink = links[Math.floor(Math.random() * links.length)]; 
    window.open(randomLink, "_blank");
}

function getQuote() {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").textContent = `"${data[0].quote}"`;
            document.getElementById("author").textContent = `- ${data[0].author}`;
        })
        .catch(error => console.error("Error fetching quote:", error));
}
