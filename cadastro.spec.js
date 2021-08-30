import {cadastro, generos, signos} from "./cadastro";

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