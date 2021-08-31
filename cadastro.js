
export const signos = ['Leão','Virgem','Gêmeos','Capricórnio', 'Escorpião', 'Câncer', 'Áries', 'Sagitário', 'Touro', 'Libra', 'Peixes', 'Aquário'];

export const generos = {
    feminino: "Feminino",
    masculino: "Masculino",
    transgenero: "Transgênero"
}

export const cadastro = [
    {
        nome: "Laila Cardoso",
        cidade: "Salvador",
        idade: 19,
        bebidaFavorita: "Budweiser", 
        genero: generos[0],
        signo: signos[1]
    },
    {
        nome: "Mariana Rufino",
        cidade: "São Paulo",
        idade: 26,
        bebidaFavorita: "Stella", 
        genero: generos[0],
        signo: signos[2]
    },
    {
        nome: "Izabela Gonzaga",
        cidade: "Palmas-TO",
        idade: 24,
        bebidaFavorita: "Guaraná", 
        genero: generos[0],
        signo: signos[3]
    },
    {
        nome: "Giu Zambot",
        cidade: "Marília",
        idade: 41,
        bebidaFavorita: "Bohemia", 
        genero: generos[0],
        signo: signos[7]
    },
    {
        nome: "Cyro Renato",
        cidade: "Rio de janeiro",
        idade: 24,
        bebidaFavorita: "Guaraná antártica", 
        genero: generos[1],
        signo: signos[1]
    },
    {
        nome: "Laurão Ribeiro",
        cidade: "Belo Horizonte",
        idade: 26,
        bebidaFavorita: "Original", 
        genero: generos[0],
        signo: signos[4]
    },
    {
        nome: "Mayhhara Morais",
        cidade: "Carpina/PE",
        idade: 20,
        bebidaFavorita: "Vinho",
        genero: generos[0],
        signo: signos[2]
    },
    {
        nome: "Clara Vasques",
        cidade: "Rio de Janeiro",
        idade: 25,
        bebidaFavorita: "Brahma", 
        genero: generos[0],
        signo: signos[3]
    },
    {
        nome: "Paloma Calado",
        cidade: "Rio de Janeiro",
        idade: 26,
        bebidaFavorita: "Guaraná Antartica", 
        genero: generos[0],
        signo: signos[11]
    },
    {
        nome: "Rafaela Bittencourt",
        cidade: "Maringá",
        idade: 23,
        bebidaFavorita: "Cerveja", 
        genero: generos[0],
        signo: signos[1]
    },
    {
        nome: "Laura Ribeiro",
        cidade: "São Paulo",
        idade: 32,
        bebidaFavorita: "colorado", 
        genero: generos[0],
        signo: signos[8]
    },
    {
        nome: "Gabriela Pandini",
        cidade: "Blumenau",
        idade: 20,
        bebidaFavorita: "Patagonia Weisse", 
        genero: generos[0],
        signo: signos[10]
    },
    {
        nome: "Gabriela Moro",
        cidade: "Foz do Iguacu",
        idade: 24,
        bebidaFavorita: "Refri", 
        genero: generos[0],
        signo: signos[1]
    },
    {
        nome: "Eudes",
        cidade: "Mariana",
        idade: 24,
        bebidaFavorita: "Skol Beats", 
        genero: generos[1],
        signo: signos[8]
    },
    {
        nome: "Jislane Santana",
        cidade: "Campina Grande - PB",
        idade: 26,
        bebidaFavorita: "Cerveja", 
        genero: generos[0],
        signo: signos [2]
    },
    {
        nome: "Emilly Roberta",
        cidade: "São Paulo ",
        idade: 21,
        bebidaFavorita: "leite com *****", 
        genero: generos[0],
        signo: signos[0]
    },
    {
        nome: "Úrsula Ariel",
        cidade: "Macapá",
        idade: 33,
        bebidaFavorita: "Água", 
        genero: generos[2],
        signo: signos[11]
        
    },
    {
        nome: "Luana Kuster",
        cidade: "Colatina",
        idade: 23,
        bebidaFavorita: "Cerveja", 
        genero: generos[0],
        signo: signos[3]
    },
    {
        nome: "Paloma Souza",
        cidade: "Salvador",
        idade: 28,
        bebidaFavorita: "doBem de coco com chocolate", 
        genero: generos[0],
        signo: signos[0]
    },  
];

export const contaSignos = (signo) => {
    let contador = 0;
    for (let i = 0; i < cadastro.length; i++){ // length retorna o número de unidades de código presentes na string.
        if (signo === cadastro[i].signo) contador++;
    }
    
    return contador;
};

export const contaGeneros = (genero) => {
    let contador = 0;
    for (let i = 0; i < cadastro.length; i++){
        if (genero === cadastro[i].genero) contador++;
    }
   
    return contador;
};

export const filtraSignos = (signo) => {
    let pessoasSigno = [];
    for (let i = 0; i < cadastro.length; i++){
        if (signo === cadastro[i].signo){
            pessoasSigno.push(cadastro[i]); //pega a ficha das pessoas do signo x e coloca numa nova array
        }
    }
    
    return pessoasSigno;
};

export const filtraGeneros = (genero) => {
    let pessoasGenero = [];
    for (let i = 0; i < cadastro.length; i++){
        if (genero === cadastro[i].genero) {
            pessoasGenero.push(cadastro[i]);
        }
    }
   
    return pessoasGenero;
};