const usuario = {
    nome: "Jáber",
    idade: "57",
    profissao: "Programador",
    cor_preferida: "verde",
};

/*const mensagem = `Olá... Eu sou ${usuario.nome} e tenho ${usuario.idade} anos de idade. Sou ${usuario.profissao} e minha cor favorita é o ${usuario.cor_preferida}.`

console.log(mensagem);*/

// Da forma anterior ou desta, o resultado é o mesmo.
usuario.nome = "Pedro"; //Mudando o valor da propriedade.

const { nome, idade, profissao, cor_preferida } = usuario;

const mensagem = `Olá... Eu sou ${nome} e tenho ${idade} anos de idade. Sou ${profissao} e minha cor preferida é ${cor_preferida}!`;

console.log(mensagem);

//Mas não entendi o que muda efetivamente entre eles.