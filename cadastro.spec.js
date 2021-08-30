import {cadastro, generos, signos, contaSignos, contaGeneros, filtraGeneros, filtraSignos} from "./cadastro";

describe('cadastro', () => {
    test('comprimento do cadastro', () => {
        expect(cadastro.length).toEqual(19);
    });

    test('adicinar e remover #1', () => {
        cadastro.adicionar({});
        expect(cadastro.length).toEqual(20);
        cadastro.remover({});
        expect(cadastro.remover({})).toEqual(19);
    });

    test('adicinar e remover #2', () => {
        cadastro.adicionar({ nome: "A"});
        expect(cadastro.length).toEqual(20);
        cadastro.remover({});
        expect(cadastro.remover({})).toEqual(20);
    });

    test('adicinar e remover #2', () => {
        cadastro.adicionar({ nome: "A"});
        expect(cadastro.length).toEqual(20);
        cadastro.remover({"A"});
        expect(cadastro.remover({})).toEqual(19);
    });
});

describe('signos', () => {
    test('comprimento dos signos', () => {
        expect(signos.keys.length).toEqual(12);
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
        expect(generos.keys.length).toEqual(3);
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
        expect(contaGeneros(genero.feminino)).toEqual(16);
    });

    test('Contagem de Gênero #2', () => {
        expect(contaGeneros(genero.masculino)).toEqual(2);
    });

    test('Contagem de Gênero #3', () => {
        expect(contaGeneros(genero.transgenero)).toEqual(1);
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
        const genero = genero.feminino;
        const resultado = filtraGeneros(genero);
        const esperado = contaGeneros(genero);
        expect(resultado.length).toEqual(esperado);
        expect(resultado.map(p=>p.nome)).toEqual(expect.arrayContaining(['Laura Ribeiro','Paloma Calado']));
        expect(resultado.map(p=>p.nome)).not.toEqual(expect.arrayContaining(['Eudes', 'Cyro Renato']));
    });

    test('Filtro de Signo #1', () => {
        const signo = signos.virgem;
        const resultado = filtraSignos(signo);
        const esperado = contaSignos(signo);
        expect(resultado.length).toEqual(esperado);
        expect(resultado.map(p=>p.nome)).toEqual(expect.arrayContaining(['Laila Cardoso', 'Cyro Renato','Rafaela Bittencourt']));
        expect(resultado.map(p=>p.nome)).not.toEqual(expect.arrayContaining(['Jislane Santana', 'Emilly Roberta']));
    });
});