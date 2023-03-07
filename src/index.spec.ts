import { encontrarCifra } from ".";

describe("Test metodo encontrarCifra", () => {
  it("retornar 0", () => {
    expect(encontrarCifra([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0)).toBe(0);
  });
  it("Ejemplo practico 1", () => {
    expect(encontrarCifra([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1297)).toBe(11);
  });
  it("Ejemplo practico 2", () => {
    expect(encontrarCifra([0, 1, 2, 9, 7, 5, 6, 3, 8, 4], 1297)).toBe(4);
  });
});
