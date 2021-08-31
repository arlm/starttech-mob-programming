 
export const signos = {
    leao: 'Leão',
    virgem: 'Virgem',
    gemeos: 'Gêmeos',
    capricornio: 'Capricórnio',
    escorpiao: 'Escorpiao',
    cancer: 'Câncer',
    aries: 'Áries',
    sagitario: 'Sagitário',
    touro: 'Touro',
    libra: 'Libra',
    peixes: 'Peixes',
    aquario: 'Aquário'
};

export const generos = {
    feminino: "Feminino",
    masculino: "Masculino",
    transgenero: "Transgênero"
};
    
export const cadastro = {
    adicionar: function (dados) {
        this.pessoas.push(dados);
    },
    remover: function (dados) {
        var indiceProcurado = this.pessoas.findIndex(p => dados.nome === p.nome);
        if (indiceProcurado > -1) {
            this.pessoas.splice(indiceProcurado, 1);
        }
    },
    pessoas: [
        {
            nome: "Laila Cardoso",
            cidade: "Salvador",
            idade: 19,
            bebidaFavorita: "Budweiser",
            genero: generos.feminino,
            signo: signos.virgem
        },
        {
            nome: "Mariana Rufino",
            cidade: "São Paulo",
            idade: 26,
            bebidaFavorita: "Stella",
            genero: generos.feminino,
            signo: signos.gemeos
        },
        {
            nome: "Izabela Gonzaga",
            cidade: "Palmas-TO",
            idade: 24,
            bebidaFavorita: "Guaraná",
            genero: generos.feminino,
            signo: signos.capricornio
        },
        {
            nome: "Giu Zambot",
            cidade: "Marília",
            idade: 41,
            bebidaFavorita: "Bohemia",
            genero: generos.feminino,
            signo: signos.sagitario
        },
        {
            nome: "Cyro Renato",
            cidade: "Rio de janeiro",
            idade: 24,
            bebidaFavorita: "Guaraná antártica",
            genero: generos.masculino,
            signo: signos.virgem
        },
        {
            nome: "Laurão Ribeiro",
            cidade: "Belo Horizonte",
            idade: 26,
            bebidaFavorita: "Original",
            genero: generos.feminino,
            signo: signos.escorpiao
        },
        {
            nome: "Mayhhara Morais",
            cidade: "Carpina/PE",
            idade: 20,
            bebidaFavorita: "Vinho",
            genero: generos.feminino,
            signo: signos.gemeos
        },
        {
            nome: "Clara Vasques",
            cidade: "Rio de Janeiro",
            idade: 25,
            bebidaFavorita: "Brahma",
            genero: generos.feminino,
            signo: signos.capricornio
        },
        {
            nome: "Paloma Calado",
            cidade: "Rio de Janeiro",
            idade: 26,
            bebidaFavorita: "Guaraná Antartica",
            genero: generos.feminino,
            signo: signos.aquario
        },
        {
            nome: "Rafaela Bittencourt",
            cidade: "Maringá",
            idade: 23,
            bebidaFavorita: "Cerveja",
            genero: generos.feminino,
            signo: signos.virgem
        },
        {
            nome: "Laura Ribeiro",
            cidade: "São Paulo",
            idade: 32,
            bebidaFavorita: "colorado",
            genero: generos.feminino,
            signo: signos.touro
        },
        {
            nome: "Gabriela Pandini",
            cidade: "Blumenau",
            idade: 20,
            bebidaFavorita: "Patagonia Weisse",
            genero: generos.feminino,
            signo: signos.peixes
        },
        {
            nome: "Gabriela Moro",
            cidade: "Foz do Iguacu",
            idade: 24,
            bebidaFavorita: "Refri",
            genero: generos.feminino,
            signo: signos.virgem
        },
        {
            nome: "Eudes",
            cidade: "Mariana",
            idade: 24,
            bebidaFavorita: "Skol Beats",
            genero: generos.masculino,
            signo: signos.touro
        },
        {
            nome: "Jislane Santana",
            cidade: "Campina Grande - PB",
            idade: 26,
            bebidaFavorita: "Cerveja",
            genero: generos.feminino,
            signo: signos.gemeos
        },
        {
            nome: "Emilly Roberta",
            cidade: "São Paulo ",
            idade: 21,
            bebidaFavorita: "leite com *****",
            genero: generos.feminino,
            signo: signos.leao
        },
        {
            nome: "Úrsula Ariel",
            cidade: "Macapá",
            idade: 33,
            bebidaFavorita: "Água",
            genero: generos.transgenero,
            signo: signos.aquario

        },
        {
            nome: "Luana Kuster",
            cidade: "Colatina",
            idade: 23,
            bebidaFavorita: "Cerveja",
            genero: generos.feminino,
            signo: signos.capricornio
        },
        {
            nome: "Paloma Souza",
            cidade: "Salvador",
            idade: 28,
            bebidaFavorita: "doBem de coco com chocolate",
            genero: generos.feminino,
            signo: signos.leao
        }
    ]
};

export const contaSignos = (signo) => {
    let contador = 0;
    for (let i = 0; i < cadastro.pessoas.length; i++){ // length retorna o número de unidades de código presentes na string.
        if (signo === cadastro.pessoas[i].signo) contador++;
    }
    
    return contador;
};

export const contaGeneros = (genero) => {
    let contador = 0;
    for (let i = 0; i < cadastro.pessoas.length; i++){
        if (genero === cadastro.pessoas[i].genero) contador++;
    }
   
    return contador;
};

export const filtraSignos = (signo) => {
    let pessoasSigno = [];
    for (let i = 0; i < cadastro.pessoas.length; i++){
        if (signo === cadastro.pessoas[i].signo){
            pessoasSigno.push(cadastro.pessoas[i]); //pega a ficha das pessoas do signo x e coloca numa nova array
        }
    }
    
    return pessoasSigno;
};

export const filtraGeneros = (genero) => {
    let pessoasGenero = [];
    for (let i = 0; i < cadastro.pessoas.length; i++){
        if (genero === cadastro.pessoas[i].genero) {
            pessoasGenero.push(cadastro.pessoas[i]);
        }
    }
   
    return pessoasGenero;
};