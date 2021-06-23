import { calculateEmployeeSalary } from "./calculateEmployeeSalary";

const result = calculateEmployeeSalary({
  employeeName: "Angelo",
  baseSalary: 1000,
  benefits: [10,100],
  extraHours: 200
})

console.log({result})