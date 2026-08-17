const curso = {
    id: 1234,
    nome: "Lógica de Programação",
    aulas: []
        /* Da forma comentada, caso se insira os dados das aulas já no início. 
        Da forma não comentada se preferir inserir os dados depois, através do push
        {
        identificador: 1,
        nome_da_aula: "Introdução a Programação"
    },
    {
        identificador: 2,
        nome_da_aula: "Variáveis"
    },
    {
        identificador: 3,
        nome_da_aula: "Condicionais"
    },
    {
        identificador: 4,
        nome_da_aula: "Arrays"
    }*/
    
};
curso.aulas.push(
    {
        identificador: 1,
        nome_da_aula: "Introdução a Programação",
    },
    {
        identificador: 2,
        nome_da_aula: "Variáveis",
    },
    {
        identificador: 3,
        nome_da_aula: "Condicionais",
    },
    {
        identificador: 4,
        nome_da_aula: "Arrays",
     },
);

console.log(curso);





