const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

const newPlayer = { ...fichaGuerreiro, ...equipoGuerreiro };

console.log('======= BEM-VINDO =======');
console.log(`Ola, ${newPlayer.nome}! Segue suas informacoes:\n`);
console.log(newPlayer);