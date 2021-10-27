function imprimeNomeEmail(tipoCliente){
    console.log(`=== ${tipoCliente} === \nNOME: ${this.nome}, EMAIL: ${this.email}\n`);
}
   
const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}
   
const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}

imprimeNomeEmail.call(cliente1, "Cliente Especial");
imprimeNomeEmail.call(cliente2, "Cliente Estudante");