describe("Testando nossa função", () => {

    test("ToContain", () => {
        const myArray = [1,{chave: "dois", valor:2},3]

        expect(myArray).toContain(1)
        expect(myArray).toContainEqual({chave: "dois", valor:2})
    })
})

