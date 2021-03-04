var listaFilmes = document.querySelector('#listaFilmes')

function listarFilmesNaTela(filme) {
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}