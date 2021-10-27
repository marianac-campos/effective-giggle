const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `A personagem é ${this.nome}\n`
    }
}

const personagemGenerico = personagem.apresentar;
console.log(personagemGenerico()); //undefined

const personagemDefinido = personagemGenerico.bind(personagem);
console.log(personagemDefinido());