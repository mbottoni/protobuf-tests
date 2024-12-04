
const Schema = require('./employees_pb')

const hussein = new Schema.Employee()

hussein.setId(123)
hussein.setName("Hussein")
hussein.setSalary(10000)

console.log(hussein.toObject())

const rick = new Schema.Employee()
rick.setId(124)
rick.setName("Rick")
rick.setSalary(10000)

console.log(rick.toObject())

const john = new Schema.Employee()
john.setId(125)
john.setName("John")
john.setSalary(10000)

console.log(john.toObject())

const employees = new Schema.Employees()
employees.addEmployees(hussein)
employees.addEmployees(rick)
employees.addEmployees(john)

console.log(employees.toObject())

// Serialize to binary
const fs = require('fs')
fs.writeFileSync("employees.bin", employees.serializeBinary())

// Deserialize from binary
const employees2 = Schema.Employees.deserializeBinary(fs.readFileSync("employees.bin"))
console.log(employees2.toObject())