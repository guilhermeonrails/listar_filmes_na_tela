var cartas = [
  {
    nome:"Pichu",
    imagem:"https://cdn.bulbagarden.net/upload/b/bb/Spiky-eared_Pichu_DP_1.png",
    atributos:{
      ataque:6,
      defesa:4,
      magia:8
    }
  },
  {
    nome:"Darth Vader",
    imagem:"https://a-static.mlcdn.com.br/618x463/darth-vader-star-wars-desenho-retro-vintage-quadro-conspecto/conspecto/135057/4373745dc9ab38b94fc87f73205af9c8.jpg",
    atributos:{
      ataque:10,
      defesa:7,
      magia:5
    }
  },
  {
    nome:"Caitlyn",
    imagem:"http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos:{
      ataque:10,
      defesa:2,
      magia:0
    }
  }
]

var cartaMaquina
var cartaJogador

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina){
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
    
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
  // inicio aula 8
  
  exibirCarta()
}

function obtemAtributoSelecionado() {
  // seleciona todos os input radio com name="atributo".
  var radiosAtributos = document.getElementsByName('atributo');

  // procura o radio selecionado e obtem o valor dele.
  for (var i = 0; i < radiosAtributos.length; i++) {
    if (radiosAtributos[i].checked) {
      return radiosAtributos[i].value;
    }
  }
}

function jogar() {
  var divResultado = document.getElementById('resultado');
  var atributoSelecionado = obtemAtributoSelecionado();

  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = '<p>venceu</p>';
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = '<p>perdeu</p>';
  } else {
    htmlResultado = '<p>empate</p>';
  }
  divResultado.innerHTML = htmlResultado
  exibirCartaMaquina()
  document.getElementById('btnJogar').disabled = true
}

// inicio aula 8
function exibirCarta() {
  var divCartaJogador = document.getElementById('carta-jogador');
  var html = '<div class="carta-nome">'+ cartaJogador.nome+ '</div><div id="imagem-carta-jogador" class="carta-imagem"><img src="'+cartaJogador.imagem+'"></div><div id="opcoes" class="carta-status">';

  var opcoesString = '';
  
  for (var atributo in cartaJogador.atributos) {
    opcoesString += "<input type='radio' name='atributo' value='"+atributo+"'>"+atributo+" " + cartaJogador.atributos[atributo] + "<br>";
  }
  divCartaJogador.innerHTML = html+opcoesString+'</div>';
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById('carta-maquina');
  var html = '<div class="carta-nome">'+ cartaMaquina.nome+ '</div><div id="imagem-carta-maquina" class="carta-imagem"><img src="'+cartaMaquina.imagem+'"></div><div id="opcoes" class="carta-status">';

  var opcoesString = '';
  
  for (var atributo in cartaMaquina.atributos) {
    opcoesString += "<p type='text' name='atributo' value='"+atributo+"'>"+atributo+" " + cartaMaquina.atributos[atributo] + "<br>";
  }
  divCartaMaquina.innerHTML = html+opcoesString+'</div>';
}