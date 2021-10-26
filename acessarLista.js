const cliente = {
    nome: "Nathalia Borges Silva",
    idade: 28,
    cpf: "78050791856",
    email: "debora@gmail.com"
}

const chaves = ['nome', 'idade', 'cpf', 'email'];

chaves.forEach(i => console.log(cliente[i]));
console.log(cliente["conta"]);