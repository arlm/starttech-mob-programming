import {cadastro, generos, signos, contaSignos, contaGeneros, filtraGeneros, filtraSignos} from "./cadastro";

describe('constantes', () => {
    test('comprimento do cadastro', () => {
        expect(cadastro.length).toEqual(19);
    });

    test('comprimento dos signos', () => {
        expect(signos.length).toEqual(12);
      });

    test('comprimento dos generos', () => {
        expect(generos.length).toEqual(3);
    });
});

describe('contagem', () => {
    test('Contagem de Signos #1', () => {
        expect(contaSignos('Virgem')).toEqual(4);
    });

    test('Contagem de Signos #2', () => {
        expect(contaSignos('Leão')).toEqual(2);
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
        expect(contaGeneros('Feminino')).toEqual(16);
    });

    test('Contagem de Gênero #2', () => {
        expect(contaGeneros('Masculino')).toEqual(2);
    });

    test('Contagem de Gênero #3', () => {
        expect(contaGeneros('Transgênero')).toEqual(1);
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
        const genero = 'Feminino';
        const resultado = filtraGeneros(genero);
        const esperado = contaGeneros(genero);
        expect(resultado.length).toEqual(esperado);
        expect(resultado.map(p=>p.nome)).toEqual(expect.arrayContaining(['Laura Ribeiro','Paloma Calado']));
        expect(resultado.map(p=>p.nome)).not.toEqual(expect.arrayContaining(['Eudes', 'Cyro Renato']));
    });

    test('Filtro de Signo #1', () => {
        const signo = 'Virgem';
        const resultado = filtraSignos(signo);
        const esperado = contaSignos(signo);
        expect(resultado.length).toEqual(esperado);
        expect(resultado.map(p=>p.nome)).toEqual(expect.arrayContaining(['Laila Cardoso', 'Cyro Renato','Rafaela Bittencourt']));
        expect(resultado.map(p=>p.nome)).not.toEqual(expect.arrayContaining(['Jislane Santana', 'Emilly Roberta']));
    });
});