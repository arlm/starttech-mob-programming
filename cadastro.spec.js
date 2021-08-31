import { cadastro, generos, signos, contaSignos, contaGeneros, filtraGeneros, filtraSignos } from "./cadastro";

describe('cadastro', () => {
    test('comprimento do cadastro', () => {
        expect(cadastro.pessoas.length).toEqual(19);
    });

    xtest('adicinar e remover #1', () => {
        cadastro.adicionar({ });
        expect(cadastro.pessoas.length).toEqual(20);
        cadastro.remover({ });
        expect(cadastro.remover({ })).toEqual(19);
    });

    xtest('adicinar e remover #2', () => {
        cadastro.adicionar({ nome: "A" });
        expect(cadastro.pessoas.length).toEqual(20);
        cadastro.remover({ });
        expect(cadastro.remover({ })).toEqual(20);
    });

    xtest('adicinar e remover #3', () => {
        cadastro.adicionar({ nome: "A" });
        expect(cadastro.pessoas.length).toEqual(20);
        cadastro.remover({ nome: "A" });
        expect(cadastro.remover({ })).toEqual(19);
    });
});

describe('signos', () => {
    xtest('comprimento dos signos', () => {
        expect(Object.keys(signos).length).toEqual(12);
    });

    xtest('Virgem', () => {
        expect(signos.virgem).toEqual("Virgem");
    });

    xtest('Leão', () => {
        expect(signos.leao).toEqual("Leão");
    });

});

describe('generos', () => {
    xtest('comprimento dos generos', () => {
        expect(Object.keys(generos).length).toEqual(3);
    });

    xtest('Contagem de Signos #1', () => {
        expect(generos.feminino).toEqual("Feminino");
    });

    xtest('Contagem de Signos #2', () => {
        expect(generos.masculino).toEqual("Masculino");
    });

    xtest('Contagem de Signos #2', () => {
        expect(generos.transgenero).toEqual("Transgênero");
    });
});

describe('contagem', () => {
    xtest('Contagem de Signos #1', () => {
        expect(contaSignos(signos.virgem)).toEqual(4);
    });

    xtest('Contagem de Signos #2', () => {
        expect(contaSignos(signos.leao)).toEqual(2);
    });

    xtest('Contagem de Signos #3', () => {
        expect(contaSignos('trololo')).toEqual(0);
    });

    xtest('Contagem de Signos NULL', () => {
        expect(contaSignos(null)).toEqual(0);
    });

    xtest('Contagem de Signos UNDEFINED', () => {
        expect(contaSignos(undefined)).toEqual(0);
    });

    xtest('Contagem de Gênero #1', () => {
        expect(contaGeneros(generos.feminino)).toEqual(16);
    });

    xtest('Contagem de Gênero #2', () => {
        expect(contaGeneros(generos.masculino)).toEqual(2);
    });

    xtest('Contagem de Gênero #3', () => {
        expect(contaGeneros(generos.transgenero)).toEqual(1);
    });

    xtest('Contagem de Gênero #4', () => {
        expect(contaGeneros('Escolha seu campeão')).toEqual(0);
    });

    xtest('Contagem de Gênero NULL', () => {
        expect(contaGeneros(null)).toEqual(0);
    });

    xtest('Contagem de Gênero UNDEFINED', () => {
        expect(contaGeneros(undefined)).toEqual(0);
    });
});

describe('filtros', () => {
    xtest('Filtro de Gênero #1', () => {
        const genero = generos.feminino;
        const resultado = filtraGeneros(genero);
        const esperado = contaGeneros(genero);
        expect(resultado.length).toEqual(esperado);
        expect(resultado.map(p => p.nome)).toEqual(expect.arrayContaining(['Laura Ribeiro', 'Paloma Calado']));
        expect(resultado.map(p => p.nome)).not.toEqual(expect.arrayContaining(['Eudes', 'Cyro Renato']));
    });

    xtest('Filtro de Signo #1', () => {
        const signo = signos.virgem;
        const resultado = filtraSignos(signo);
        const esperado = contaSignos(signo);
        expect(resultado.length).toEqual(esperado);
        expect(resultado.map(p => p.nome)).toEqual(expect.arrayContaining(['Laila Cardoso', 'Cyro Renato', 'Rafaela Bittencourt']));
        expect(resultado.map(p => p.nome)).not.toEqual(expect.arrayContaining(['Jislane Santana', 'Emilly Roberta']));
    });
});