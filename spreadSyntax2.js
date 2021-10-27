const clientes = [ 
    {
      nome: "Anthonio Barbosa",
      cpf: "12312312312",
      
      dependentes: [{
        nome: "Thomas",
        parentesco: "filho",
        dataNasc: "20/03/2011"
       },
       {
        nome: "Samia",
        parentesco: "filha",
        dataNasc: "04/01/2014"
       }],
    },

    {
      nome: "Juliana Andrade Silveira",
      cpf: "56767867867",
      dependentes: [{
        nome: "Aurora",
        parentesco: "filha",
        dataNasc: "30/08/2019"
       }],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.table(listaDependentes);