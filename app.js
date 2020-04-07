// importing constructors (stores data) 

const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// fs = file system, this is an object to manipulate the file system, data can be added/manipulated. FS is needed 
const fs = require("fs");

// creating html cards for each employee
let card = require("./card");


let body = require("./body");

const allEmployee = [];
let id = 1;
function menu() {
  inquirer
    .prompt({
      type: "list",
      message: "What do you want to do?",
      choices: ["add manager", "add engineer", "add intern", "Exit"],
      name: "addEmployee",
    })
    .then(function (input) {
      if (input.addEmployee === "add manager") {
        addManager();
      } else if (input.addEmployee === "add engineer") {
        addEngineer();
      } else if (input.addEmployee === "add intern") {
        addIntern();
      } else if (input.addEmployee === "Exit") {
        exit();
      }
    });
}


function exit() {
  var newCard = "";
  for (let index = 0; index < allEmployee.length; index++) {
    if (index % 5 === 0) {
      newCard +=
        "<div class='row mt-5'><div class = 'col-sm-3'>" +
        card(allEmployee[index]) +
        "</div>";
    } else if (index % 5 === 4) {
      newCard += "</div>";
    } else {
      newCard +=
        "<div class = 'col-sm-3'>" + card(allEmployee[index]) + "</div>";
    }
    var newBody = body(newCard);
  }
  fs.writeFile("./index.html", newBody, function (error) {});
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "employeeName",
      },

      {
        type: "input",
        message: "what is your email?",
        name: "employeeEmail",
      },

      {
        type: "input",
        message: "what is your github?",
        name: "github",
      },
    ])
    .then(function (input) {
      let engineer = new Engineer(
        input.employeeName,
        id++,
        input.employeeEmail,
        input.github
      );

      allEmployee.push(engineer);
      console.log(allEmployee);
      menu();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "employeeName",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "employeeEmail",
      },
      {
        type: "input",
        message: "what is your school name?",
        name: "schoolName",
      },
    ])
    .then(function (input) {
      let intern = new Intern(
        input.employeeName,
        id++,
        input.employeeEmail,
        input.schoolName
      );
      allEmployee.push(intern);

      console.log(allEmployee);
      menu();
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "employeeName",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "employeeEmail",
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "employeeOfficeNumber",
      },
    ])
    .then(function (input) {
      let manager = new Manager(
        input.employeeName,
        id++,
        input.employeeEmail,
        input.employeeOfficeNumber
      );

      allEmployee.push(manager);
      console.log(allEmployee);
      menu();
    });

  // let manager = new Manager()
}
menu();
