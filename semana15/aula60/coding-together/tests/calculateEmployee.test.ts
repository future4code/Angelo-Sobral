import { calculateEmployeeSalary } from "../src/calculateEmployeeSalary"
import { employee } from "./mock/employee"

test("Input válido", () => {
    const salary = calculateEmployeeSalary(
        employee
    )

    expect(salary).toBeGreaterThan(10)
})