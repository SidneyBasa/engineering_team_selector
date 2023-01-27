// Thursday January 26, 2023 SB
// const Engineer = require("./Engineer")
// const Intern = require("./Intern")
// const Manager = require("./Manager")

// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name=name;
        this.id=id;
        this.email=email;
    }

    getName() {
        // console.log(`Test at name employee.js ${this.name}`)
        // return '${this.name}'
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
    
}

module.exports = Employee