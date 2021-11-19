const inquirer = require('inquirer');

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// use to collect all employee data
const employeeRoster = [];

const promptEmployee = (role) => {
  return inquirer
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
      // start to store the data
      const employeeData = {
        role: role,
        name: name,
      };

      // store for easier referencing
      name = employeeData.name;

      return inquirer
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
              return promptManager(employeeData);
            case 'Engineer':
              return promptEngineer(employeeData);
            case 'Intern':
              return promptIntern(employeeData);
          }
        })
        .then(() => {
          return promptMoreEmployees();
        });
    });
};

const promptManager = (employeeData) => {
  const name = employeeData.name;

  return inquirer
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

      return;
    });
};

const promptEngineer = (employeeData) => {
  const name = employeeData.name;

  return inquirer
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

      return;
    });
};

const promptIntern = (employeeData) => {
  const name = employeeData.name;

  return inquirer
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

      return;
    });
};

const promptMoreEmployees = () => {
  return inquirer
    .prompt({
      type: 'list',
      name: 'newTeamMember',
      message: 'Would you like to add a team member?',
      choices: ['Engineer', 'Intern', 'All done, build the webpage'],
    })
    .then((data) => {
      if (data.newTeamMember === 'Engineer') {
        return promptEmployee('Engineer');
      }
      if (data.newTeamMember === 'Intern') {
        return promptEmployee('Intern');
      }

      return employeeRoster;
    });
};

module.exports = promptEmployee;
