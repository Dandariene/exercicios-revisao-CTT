class Card {
  // cria a propriedade lista que contem a tag com ID Lista do HTML
  constructor() {
    this.noticias = document.querySelector("#lista")
  }

  // monta o HTML do card com os dados do JSON
  mostraNoticia(dados) {
    console.log(dados)
    // cria uma variavel que ira armazenar todo esse HTML
    let card = ''
    dados.noticias.map(function(relato){

      card += `
      <div class="card">
        <h2>${relato.titulo}</h2>
        <p>${relato.chamada}</p>
        
        <p>
          <a href="${relato.link}">Link para a Notícia</a>
        </p>
      </div>
      `
    })

    this.noticias.innerHTML=card

  }
}

