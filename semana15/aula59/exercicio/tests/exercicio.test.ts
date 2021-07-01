import { performPurchase } from "../src"

describe("Testando a função performPurchase", () => {
  test("Teste saldo maior que o valor de compra", () => {
    const user:USER = {
      name: "Angelo",
      balance: 400
    }

    const result = performPurchase(user, 300)

    expect(result).toEqual({
      name: "Angelo",
      balance: 100
    })
  })

  test("Teste saldo igual ao valor de compra", () => {
    const user:USER = {
      name: "Angelo",
      balance: 400
    }

    const result = performPurchase(user, 400)

    expect(result).toEqual({
      name: "Angelo",
      balance: 0
    })
  })

  test("Teste saldo menor que o valor de compra", () => {
    const user:USER = {
      name: "Angelo",
      balance: 400
    }

    const result = performPurchase(user, 500)

    expect(result).not.toBeDefined()
  })

})