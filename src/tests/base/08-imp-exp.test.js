import "@testing-library/jest-dom";
import { getHeroeById, getHeroeByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Heroes", function () {
  test("debe retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("debe retornar undefined si heroe no existe ", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  //tareas
  //debe de retornar un arreglo con los heroes de DC
  //owner
  //toEqual al arreglo filtrado

  //debe de retornar un arreglo con los heroes de Marvel
  //length = 2 -- toBe

  test("debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroe = getHeroeByOwner(owner);
    const heroeData = heroes.filter((h) => h.owner === owner);

    expect(heroe).toEqual(heroeData);
  });

  test("debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroe = getHeroeByOwner(owner);

    expect(heroe.length).toBe(2);
  });
});
