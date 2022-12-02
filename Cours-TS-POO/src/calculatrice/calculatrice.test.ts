import Calculatrice from "./calculatrice";

describe("La méthode eval()", () =>{
    test("1 +1 = 2", () => {
        expect(eval("1 + 1")).toBe(2);
    })
    test("3 * 6", () => {
        expect(eval("3 * 6")).toBe(18)
    })
})

let calculatrice: Calculatrice
beforeAll(()=> {
    console.log("Avant tout les tests");
    const calculatrice = new Calculatrice();
});

describe("Calculatrice", () => {
    describe("Additions", () => {
        interface("1 + 1", () => {
            expect(calculatrice.calculer("1 + 1")).toBe(2)
        });
    });
});
