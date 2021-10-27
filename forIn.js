const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)));
    },

    nomeCompleto:function(){
      console.log(this.nome);
    }
}

let dados = "";

for (let x in paciente) {
if (typeof paciente[x] === 'object' || typeof paciente[x] === 'function') {
    continue
} else {
    dados += `\n${x}: ${paciente[x]}`;
}
};

console.log(dados);