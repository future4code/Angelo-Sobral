import { validateEmptyProperties, ValidateEmptyPropertiesOutput } from "../src/validateEmptyProperties"

describe("Testando validateEmptyProperties", () => {
    

    test("Erro quando uma chave é válida e várias inválidas", () => {
        const result: ValidateEmptyPropertiesOutput = validateEmptyProperties({
            name: "",
            age: 0,
            email: undefined,
            password: null,
            id: "123-456"
        })
        expect(result.isValid).toBe(false)
        expect(result.errors).toHaveLength(4)
        expect(result.errors).toBe(4)
    })

    test("Objeto válido", () => {
        const result: ValidateEmptyPropertiesOutput = validateEmptyProperties({
            name: "Angelo",
            age: 34,
            email: "angelo@gmail.com",
            password: "lkjasd98423l",
            id: "123-456"
        })
        expect(result.isValid).toBe(true)
        expect(result.errors).toHaveLength(0)
        expect(result.errors.length).toBe(0)
    })

})