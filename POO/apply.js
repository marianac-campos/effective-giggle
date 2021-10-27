function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`== ${tipoCliente} da agencia ${agencia} ==\nNOME: ${this.nome} | EMAIL: ${this.email}\n`);
}
   
const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}
   
const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}

const clienteEspecial = ["Cliente Especial", "Rio de Janeiro"];
const clienteEstudante = ["Cliente Estudante", "Fortaleza"];

imprimeNomeEmail.apply(cliente1, clienteEspecial);
imprimeNomeEmail.apply(cliente2, clienteEstudante);