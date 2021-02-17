// cria classe noticias
class Noticias {
  // cria método para buscar noticias no json
  buscaNoticias() {
    // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
    return fetch("./news.json")
  }
}