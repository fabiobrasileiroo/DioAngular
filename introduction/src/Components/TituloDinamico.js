class TituloDinamico extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({mode: "open"});
    //base do component
    const componentRoot = document.createElement("h1")
    componentRoot.textContent = 'fabio'

    //estilizar o component
    const style = document.createElement('style')
    style.textContent =  document.createElement("style")
    style.textContent =
    //enviar para a shadow
  }

}
customElements.define('titulo-dinamico', TituloDinamico)