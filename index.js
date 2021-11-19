const promptEmployee = require('./lib/prompts');

const mockData = [
  {
    role: 'Manager',
    name: 'Daniel',
    id: '1',
    email: '1',
    officeNumber: '1',
  },
  { role: 'Engineer', name: 'Rick', id: '1', email: '1', github: '1' },
  {
    role: 'Engineer',
    name: 'Rick 2',
    id: '4',
    email: '5',
    github: '6',
  },
  { role: 'Intern', name: 'Bill', id: '1', email: '2', school: '3' },
];

function startApp() {
  promptEmployee('Manager').then((data) => {
    console.log(data);
  });
}

startApp();
