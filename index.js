// Thursday January 26, 2023 SB

const inquirer = require("inquirer");
const employee = require("./lib/Employee")

function startQuestions() {
    return inquirer.prompt([
        {
            name: "question",
            type: "list",
            choices: ["Add a new team member", "quit"],
        }
    ]).then(response => {
        switch (response.question) {
            case "Add a new team member":
                addTeamMember();
                break;

            case "quit":
                console.log("Total team members:")
                break;
        }
    })
}

function addTeamMember() {
    inquirer.prompt(
        {
            type: "checkbox",
            name: "EmployeeType",
            message: "Employee type?",
            choices: ["Engineer", "Intern", "Manager"]
        },
    )
}

startQuestions()