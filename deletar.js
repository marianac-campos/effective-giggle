const personagem = {
    nome: "Ganondorf",
    classe: "Mago",
    nivel: "167",
    aliado: {
      nome: "Saruman",
      classe: "Mago"
    },
    status: "Desaparecido"
}

console.log(`===== ${personagem.nome.toUpperCase()} =====`);
console.log(`ALIADO: ${personagem.aliado.nome} | ${personagem.aliado.classe}`);

delete personagem.aliado;

console.log('\n> Link batalha com Saruman no vale do Orvalho e vence a batalha!\n');

console.log(`===== ${personagem.nome.toUpperCase()} =====`);
console.log(`ALIADO: ${personagem.aliado} `);