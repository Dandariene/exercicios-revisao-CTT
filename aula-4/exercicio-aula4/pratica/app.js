// instancio a classe de noticias e crio o objeto de noticias
const objetoNoticia = new Noticias()
// instancio a classe Card e crio o objeto dos Cards
const objetoCard = new Card()

// aqui rola a ~mágica~ 
// uso meu objetoNoticia e chamo o método buscaNoticia que 
// existe dentro de noticas para dar o fetch
objetoNoticia.buscaNoticias()
  // fetch realizado, uso o then para pegar a resposta 
  .then(function (resposta) {
    // converto a resposta em json
    resposta.json()
      // pego os dados convertidos em json  
      .then(function (dados) {
        // envio para o método mostraNoticia dentro do meu objetoCard
        objetoCard.mostraNoticia(dados)
      })
  })
