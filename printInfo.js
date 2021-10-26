const cliente = {
    nome: "Nathalia Borges Silva",
    idade: 28,
    cpf: "78050791856",
    email: "debora@gmail.com"
}

console.log("=== Confirmacao de Dados ===\n");
console.log(`NOME: ${cliente.nome.toUpperCase()}`);
console.log(`CPF: ${cliente.cpf.substring(0, 3)} *** *** **`);
console.log(`EMAIL: ${cliente.email}`);