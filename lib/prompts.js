const inquirer = require('inquirer');

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Choices = require('inquirer/lib/objects/choices');

// use to collect all employee data
const employeeRoster = [];

const promptEmployee = (role) => {
  const employeeData = {
    role: role,
  };
  inquirer
    .prompt({
      type: 'input',
      name: 'name',
      message: `What is the ${role}'s name?`,
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log(`Please enter a name for the ${role}`);
          return false;
        }
      },
    })
    .then(({ name }) => {
      // store in employeeData
      employeeData.name = name;

      // store for easier referencing
      name = employeeData.name;
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'id',
            message: `What is ${name}'s employee ID?`,
            validate: (id) => {
              if (id) {
                return true;
              } else {
                console.log(`Please enter an ID for ${name}`);
                return false;
              }
            },
          },
          {
            type: 'input',
            name: 'email',
            message: `What is ${name}'s email?`,
            validate: (email) => {
              if (email) {
                return true;
              } else {
                console.log(`Please enter an email for ${name}`);
                return false;
              }
            },
          },
        ])
        .then(({ id, email }) => {
          employeeData.id = id;
          employeeData.email = email;
          switch (role) {
            case 'Manager':
              promptManager(employeeData);
              break;
            case 'Engineer':
              promptEngineer(employeeData);
              break;
            case 'Intern':
              promptIntern(employeeData);
              break;
          }
        });
    });
};

const promptManager = (employeeData) => {
  const name = employeeData.name;

  inquirer
    .prompt({
      type: 'input',
      name: 'office',
      message: `What is ${name}'s office number?`,
      validate: (officeNumber) => {
        if (officeNumber) {
          return true;
        } else {
          console.log(`Please enter an office number for ${name}`);
          return false;
        }
      },
    })
    .then(({ office }) => {
      employeeData.officeNumber = office;
      employeeRoster.push(employeeData);
      console.log(employeeRoster);

      promptMoreEmployees();
    });
};

const promptEngineer = (employeeData) => {
  const name = employeeData.name;

  inquirer
    .prompt({
      type: 'input',
      name: 'github',
      message: `What is ${name}'s GitHub username?`,
      validate: (github) => {
        if (github) {
          return true;
        } else {
          console.log(`Please enter a GitHub username for ${name}`);
          return false;
        }
      },
    })
    .then(({ github }) => {
      employeeData.github = github;
      employeeRoster.push(employeeData);
      console.log(employeeRoster);

      promptMoreEmployees();
    });
};

const promptIntern = (employeeData) => {
  const name = employeeData.name;

  inquirer
    .prompt({
      type: 'input',
      name: 'school',
      message: `What school does ${name} go to?`,
      validate: (school) => {
        if (school) {
          return true;
        } else {
          console.log(`Please enter a school for ${name}`);
          return false;
        }
      },
    })
    .then(({ school }) => {
      employeeData.school = school;
      employeeRoster.push(employeeData);
      console.log(employeeRoster);

      promptMoreEmployees();
    });
};

const promptMoreEmployees = () => {
  inquirer
    .prompt({
      type: 'list',
      name: 'newTeamMember',
      message: 'Would you like to add a team member?',
      choices: ['Engineer', 'Intern', 'All done, build the webpage'],
    })
    .then((data) => {
      if (data.newTeamMember === 'Engineer') {
        promptEmployee('Engineer');
      }
      if (data.newTeamMember === 'Intern') {
        promptEmployee('Intern');
      }
      if (data.newTeamMember === 'All done, build the webpage') {
        // send data to node.fs
      }

      return;
    });
};

promptEmployee('Manager');
module.exports = promptEmployee;
