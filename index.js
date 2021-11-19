const promptEmployee = require('./lib/prompts');
const generateHtml = require('./src/html-template');
const { writeFile, copyFile } = require('./lib/generate-site');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function createManager(manager) {
  const { name, id, email, officeNumber } = manager;
  return new Manager(name, id, email, officeNumber);
}

function createEngineer(engineer) {
  const { name, id, email, github } = engineer;
  return new Engineer(name, id, email, github);
}

function createIntern(intern) {
  const { name, id, email, school } = intern;
  return new Intern(name, id, email, school);
}

function startApp() {
  promptEmployee('Manager')
    .then((employeeRoster) => {
      const classRoster = {};

      // organize employee roster by role
      const manager = employeeRoster.find((obj) => obj.role === 'Manager');
      const engineerArr = employeeRoster.filter(
        (obj) => obj.role === 'Engineer'
      );
      const internArr = employeeRoster.filter((obj) => obj.role === 'Intern');

      // convert to class object and add to classRoster
      classRoster.manager = createManager(manager);
      classRoster.engineers = engineerArr.map((engineer) =>
        createEngineer(engineer)
      );
      classRoster.interns = internArr.map((intern) => createIntern(intern));

      return generateHtml(classRoster);
    })
    .then((html) => {
      return writeFile(html);
    })
    .then((writeFileResponse) => {
      console.log(writeFileResponse.message);
      return copyFile();
    })
    .then((copyFileResponse) => {
      console.log(copyFileResponse.message);
      console.log('Success. Your webpage was generated to the "dist" folder.');
    })
    .catch((err) => {
      console.error(err);
    });
}

startApp();
