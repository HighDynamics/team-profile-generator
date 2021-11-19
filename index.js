const promptEmployee = require('./lib/prompts');
const generateHtml = require('./src/html-template');
const { writeFile, copyFile } = require('./lib/generate-site');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const mockData = [
  {
    role: 'Manager',
    name: 'Daniel',
    id: '1',
    email: 'daniel@mail.com',
    officeNumber: '100',
  },
  {
    role: 'Engineer',
    name: 'Rick',
    id: '2',
    email: 'rick@mail.com',
    github: 'rickHub',
  },
  {
    role: 'Engineer',
    name: 'Amber',
    id: '3',
    email: 'amber@mail.com',
    github: 'amberHub',
  },
  {
    role: 'Intern',
    name: 'Ollie',
    id: '4',
    email: 'ollie@mail.com',
    school: 'Quail Run',
  },
];

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

// TODO: replace mock data
function startApp() {
  promptEmployee('Manager')
    .then((employeeRoster) => {
      employeeRoster = mockData;
      const classRoster = {};

      // organize employee roster by role
      const manager = mockData.find((obj) => obj.role === 'Manager');
      const engineerArr = mockData.filter((obj) => obj.role === 'Engineer');
      const internArr = mockData.filter((obj) => obj.role === 'Intern');

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
    })
    .catch((err) => {
      console.error(err);
    });
}

startApp();
