class Cardnewspro extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({mode: "open"})
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }
  build() {
    const componentRoot = document.createElement("div")
    componentRoot.setAttribute("class", "card")

    const cardLeft = document.createElement("div")
    cardLeft.setAttribute("class","card-left")

    const autor = document.createElement("span")
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

    const linkTitle = document.createElement("a")
    linkTitle.textContent = this.getAttribute("title")
    linkTitle.href = this.getAttribute("link-url")

    const newContent = document.createElement("p")
    newContent.textContent = this.getAttribute("contet")

    cardLeft.appendChild(autor)
    cardLeft.appendChild(linkTitle)
    cardLeft.appendChild(newContent)
    
    const cardRight = document.createElement("div")
    cardRight.setAttribute("class","card-right")
    const newsImage = document.createElement("img")
    newsImage.src = this.getAttribute("photo") || "https://www.invoicera.com/wp-content/uploads/2023/11/default-image.jpg"
    newsImage.width = 250
    newsImage.alt = "Foto da Noticia"
    cardRight.appendChild(newsImage)

    componentRoot.appendChild(cardLeft)
    componentRoot.appendChild(cardRight)

    return componentRoot
  }

  styles() {
    const style = document.createElement("style")
    style.textContent = `
    
.card {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: -3px -2px 14px 0px rgba(0,0,0,0.32);
-webkit-box-shadow: -3px -2px 14px 0px rgba(0,0,0,0.32);
-moz-box-shadow: -3px -2px 14px 0px rgba(0,0,0,0.32);
}

.card-left, .card-right {
}

.card-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
}
.card-left > span {
  font-weight: 600;
}

.card-left > a {
  margin-top: 15px;
  font-size: 25px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  padding-bottom: 0.5rem;
}
.card-left > p, span{
  color: rgba(70,70,70);
}  
    ` 
    return style
  }
}
customElements.define("card-news-pro", Cardnewspro)