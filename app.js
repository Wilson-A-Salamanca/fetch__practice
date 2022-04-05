const cards = 'https://jsonplaceholder.typicode.com/posts'
const collection = document.getElementById("cards")

fetch(cards)
.then(data => data.json())
.then(json => json.forEach(element => {
    const card = document.createElement("section")
    const title = document.createElement("h2")
    const content = document.createElement("p")

    card.classList.add("card")
    title.classList.add("card__title")
    content.classList.add("card__content")

    title.textContent = element.title
    content.textContent = element.body

    card.appendChild(title)
    card.appendChild(content)

    collection.appendChild(card)
}))