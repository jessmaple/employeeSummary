const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const allEmployee = [];
let id = 1;
function menu() {
  inquirer
    .prompt({
      type: "list",
      message: "What do you want to do?",
      choices: ["add manager", "add engineer", "add intern"],
      name: "addEmployee"
    })
    .then(function(input) {
      if (input.addEmployee === "add manager") {
        addManager();
      }
    });
}
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "employeeName"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "employeeEmail"
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "employeeOfficeNumber"
      }
    ])
    .then(function(input) {
      let manager = new Manager(
        input.employeeNameid++,
        input.employeeEmail,
        input.employeeOfficeNumber
      );

      allEmployee.push(manager)
      console.log(allEmployee)
      menu()
    });

  // let manager = new Manager()
}
