const employees = []

employees.push({
    "name": "John Doe",
    "salary": 10000,
    "id": 123,
})

const ahmed = {
    "name": "Ahmed",
    "salary": 10000,
    "id": 124,
}
employees.push(ahmed)

employees.push({
    "name": "John Doe",
    "salary": 10000,
    "id": 123,
})

//console.log(JSON.stringify(employees))
require('fs').writeFileSync("jsondata.json", JSON.stringify(employees))
