import bonjour from ".";

describe("bonjour", () => {
    it("should return 'Bonjour'", () => {
        expect(bonjour()).toBe("Bonjour");
    });
});