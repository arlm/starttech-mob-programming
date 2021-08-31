import { cadastro, generos, signos, contaSignos, contaGeneros, filtraGeneros, filtraSignos } from "./cadastro";

describe('cadastro', () => {
    test('comprimento do cadastro', () => {
        expect(cadastro.pessoas.length).toEqual(19);
    });

    test('adiocinar e remover NULL', () => {
        expect(cadastro.pessoas.length).toEqual(19);
        cadastro.adicionar(null);
        expect(cadastro.pessoas.length).toEqual(19);
        cadastro.remover(null);
        expect(cadastro.pessoas.length).toEqual(19);
    });

    test('adiocinar e remover UNDEFINED', () => {
        expect(cadastro.pessoas.length).toEqual(19);
        cadastro.adicionar(undefined);
        expect(cadastro.pessoas.length).toEqual(19);
        cadastro.remover(undefined);
        expect(cadastro.pessoas.length).toEqual(19);
    });

    test('adiocinar e remover #1', () => {
        expect(cadastro.pessoas.length).toEqual(19);
        cadastro.adicionar({ });
        expect(cadastro.pessoas.length).toEqual(20);
        cadastro.remover({ });
        expect(cadastro.pessoas.length).toEqual(19);
    });

    test('adiocinar e remover #2', () => {
        expect(cadastro.pessoas.length).toEqual(19);
        cadastro.adicionar({ nome: "A" });
        expect(cadastro.pessoas.length).toEqual(20);
        cadastro.remover({ });
        expect(cadastro.pessoas.length).toEqual(20);
        cadastro.remover(null);
        expect(cadastro.pessoas.length).toEqual(20);
        cadastro.remover(undefined);
        expect(cadastro.pessoas.length).toEqual(20);
        cadastro.remover({ nome: "A" });
        expect(cadastro.pessoas.length).toEqual(19);
    });

    test('adiocinar e remover #3', () => {
        expect(cadastro.pessoas.length).toEqual(19);
        cadastro.adicionar({ nome: "A" });
        expect(cadastro.pessoas.length).toEqual(20);
        cadastro.remover({ nome: "A" });
        expect(cadastro.pessoas.length).toEqual(19);
    });

    test('adiocinar e remover #4', () => {
        expect(cadastro.pessoas.length).toEqual(19);
        cadastro.adicionar({ nome: "A", cidade: "Curitiba"});
        expect(cadastro.pessoas.length).toEqual(20);
        cadastro.adicionar({ nome: "A", cidade: "Blumenau"});
        expect(cadastro.pessoas.length).toEqual(21);
        cadastro.remover({ nome: "A" });
        expect(cadastro.pessoas.length).toEqual(20);
        var pessoaA = cadastro.pessoas.find(p=>p.nome == "A");
        expect(pessoaA.cidade).toEqual("Blumenau")
        cadastro.remover({ nome: "A" });
        expect(cadastro.pessoas.length).toEqual(19);
    });

    test('buscar NULL', () => {
        var pessoa = cadastro.buscar(null);
        expect(pessoa).toBeUndefined();
    });

    test('bucar UNDEFINED', () => {
        var pessoa = cadastro.buscar(undefined);
        expect(pessoa).toBeUndefined();
    });

    test('bucar #1', () => {
        var pessoa = cadastro.buscar({ });
        expect(pessoa).toBeUndefined();
    });

    test('bucar #2', () => {
        var pessoa = cadastro.buscar({ nome: "Laila Cardoso" });
        expect(pessoa.nome).toEqual("Laila Cardoso" );
        expect(pessoa.cidade).toEqual("Salvador" );
    });

    test('bucar #3', () => {
        var pessoa = cadastro.buscar({ cidade: "Laila Cardoso", cidade: "Rio de Janeiro"});
        expect(pessoa).toBeUndefined();
    });

    test('bucar #4', () => {
        var pessoas = cadastro.buscar({ nome: "Rio de Janeiro" });
        expect(pessoas.length).toEqual(3);
        expect(pessoas[0].nome).toEqual("Cyro Renato" );
        expect(pessoas[1].nome).toEqual("Clara Vasques" );
        expect(pessoas[2].nome).toEqual("Paloma Calado" );
    });
});

describe('signos', () => {
    test('comprimento dos signos', () => {
        expect(Object.keys(signos).length).toEqual(12);
    });

    test('Virgem', () => {
        expect(signos.virgem).toEqual("Virgem");
    });

    test('Leão', () => {
        expect(signos.leao).toEqual("Leão");
    });

});

describe('generos', () => {
    test('comprimento dos generos', () => {
        expect(Object.keys(generos).length).toEqual(3);
    });

    test('Contagem de Signos #1', () => {
        expect(generos.feminino).toEqual("Feminino");
    });

    test('Contagem de Signos #2', () => {
        expect(generos.masculino).toEqual("Masculino");
    });

    test('Contagem de Signos #2', () => {
        expect(generos.transgenero).toEqual("Transgênero");
    });
});

describe('contagem', () => {
    test('Contagem de Signos #1', () => {
        expect(contaSignos(signos.virgem)).toEqual(4);
    });

    test('Contagem de Signos #2', () => {
        expect(contaSignos(signos.leao)).toEqual(2);
    });

    test('Contagem de Signos #3', () => {
        expect(contaSignos('trololo')).toEqual(0);
    });

    test('Contagem de Signos NULL', () => {
        expect(contaSignos(null)).toEqual(0);
    });

    test('Contagem de Signos UNDEFINED', () => {
        expect(contaSignos(undefined)).toEqual(0);
    });

    test('Contagem de Gênero #1', () => {
        expect(contaGeneros(generos.feminino)).toEqual(16);
    });

    test('Contagem de Gênero #2', () => {
        expect(contaGeneros(generos.masculino)).toEqual(2);
    });

    test('Contagem de Gênero #3', () => {
        expect(contaGeneros(generos.transgenero)).toEqual(1);
    });

    test('Contagem de Gênero #4', () => {
        expect(contaGeneros('Escolha seu campeão')).toEqual(0);
    });

    test('Contagem de Gênero NULL', () => {
        expect(contaGeneros(null)).toEqual(0);
    });

    test('Contagem de Gênero UNDEFINED', () => {
        expect(contaGeneros(undefined)).toEqual(0);
    });
});

describe('filtros', () => {
    test('Filtro de Gênero #1', () => {
        const genero = generos.feminino;
        const resultado = filtraGeneros(genero);
        const esperado = contaGeneros(genero);
        expect(resultado.length).toEqual(esperado);
        expect(resultado.map(p => p.nome)).toEqual(expect.arrayContaining(['Laura Ribeiro', 'Paloma Calado']));
        expect(resultado.map(p => p.nome)).not.toEqual(expect.arrayContaining(['Eudes', 'Cyro Renato']));
    });

    test('Filtro de Signo #1', () => {
        const signo = signos.virgem;
        const resultado = filtraSignos(signo);
        const esperado = contaSignos(signo);
        expect(resultado.length).toEqual(esperado);
        expect(resultado.map(p => p.nome)).toEqual(expect.arrayContaining(['Laila Cardoso', 'Cyro Renato', 'Rafaela Bittencourt']));
        expect(resultado.map(p => p.nome)).not.toEqual(expect.arrayContaining(['Jislane Santana', 'Emilly Roberta']));
    });
});
