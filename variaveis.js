//Declarada variáveis nome_completo
/*
declarando mais de uma variavel
*/

//--------------------
/*
declarando variaveis com var, let e const
*/
var nome_completo = "josé de brito"; //variável pode ser alterada
let idade = 46; //variável pode ser alterada
const rg = "102023"; //variável não pode ser alterada

// console.log serve para "printar/mostrar" o valor no console do navegador
console.log(nome_completo, idade, rg)

// alterar valor da variaveis
nome_completo = "paty flor";
idade = 32;

console.log(nome_completo, idade, rg)


//==============================

// Formas de declara variaveis do tipo string
var nome = "josé";
var nome = 'maria';
var nome = `joão`;

// Formas de declarar variaveis do tipo number
let numero =20; //inteiro
let numeroDecimal = 15.5; //decimal

// Declaração de variaveis tipo boolean (true / false)
let bolean = false;

// Declaração de arrays (listaa)
let frutas = ["maçã" , "uva" , "manga"];
let numerosDaQuina =["05, 07, 19. 23"];
let lista = ["teste" , 05, true, 19.9];

// Declaração de objeto
let casa = {
    "endereco"; "Pernambuco - Brasil",
    'quantidade _ banheiros': 1,
    cor: "braca",
    aluado: false
};

let experienciaProfissional = {
    cargo: "Estudando inf-basica",
    nome_empresa: "Serasa",
    data_inicio: "10/2021",
    data_fim: null
    descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing",
    atividades: ["atividade 1", "atividade 2"]
}

// Declaração de um arrey objetos
let experiencias = [
    {
        cargo: "Estudando inf-basica",
        nome_empresa: "Serasa",
        data_inicio: "10/2021",
        data_fim: null
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing",
        atividades: ["atividade 1", "atividade 2"],
    },
    {
        cargo: "Estudando inf-basica",
    nome_empresa: "Serasa",
    data_inicio: "10/2021",
    data_fim: null
    descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing",
    atividades: ["atividade 1", "atividade 2"]
    }
];


//typeof função do jascript para saber o tipo da variavel;
console.log(typeof experiencias)