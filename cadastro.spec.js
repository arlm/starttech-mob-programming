import {cadastro} from "./cadastro";

describe('cadastro', () => {
    test('comprimento', () => {
      expect(cadastro.length).toEqual(19);
    });
});