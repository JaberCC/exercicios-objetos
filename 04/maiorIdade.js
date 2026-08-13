const usuarios = [{
    nome: "João",
    idade: 25,
},
{
    nome: "Ana",
    idade: 18,
},
{
    nome: "Beatriz",
    idade: 15,
},
{
    nome: "Carlos",
    idade: 16,
},
{
    nome: "Antônio",
    idade: 10,
},
]

usuarios.push (
    {
    nome: "Pedro",
    idade: 20,
},
    {
    nome: "Van",
    idade: 51,
});

usuarios[3].idade = 37,

usuarios.forEach((usuario) => {
    usuario.maior_idade = usuario.idade > 17;
});

console.log (usuarios);
