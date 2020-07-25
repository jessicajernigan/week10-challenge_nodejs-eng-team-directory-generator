// const formatPage = require('./src/format-page.js');
// const generatePage = require('./utils/generate-page.js');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const teamArr = [];


const managerPrompt = () => {
  console.log(`
 • = • = • = • = • = • = • = •
|   Let's build your team!    |
 • = • = • = • = • = • = • = • 
  `);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the manager\'s name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the manager\'s employee ID number?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the manager\'s email address?'
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'What is the manager\'s office number?'
    }
  ])
    .then(answers => {
      let mgr = new Manager(answers)
      teamArr.push(mgr)
    })
};


const nextEntryPrompt = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selectType',
      message: 'What role would you like to add next?',
      choices: ['Engineer', 'Intern', 'I am finished building my team']
    }
  ]).then(answers => {
    switch (answers.selectType) {
      case "Engineer": engineerPrompt();
        break;
      case "Intern": internPrompt();
        break;
      default: console.log('teamArr now consists of:', teamArr);
    }
  });
}

const internPrompt = () => {
  console.log(`
 • = • = • = • = • = • = •
 |  Let's add an intern  |
 • = • = • = • = • = • = •
  `);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the intern\'s name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the intern\'s employee ID number?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the intern\'s email address?'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Where does the intern go to school?'
    }
  ])
    .then(answers => {
      let mgr = new Intern(answers)
      teamArr.push(mgr)
    })
    .then(nextEntryPrompt);
};

const engineerPrompt = () => {

  console.log(`
 • = • = • = • = • = • = •
|  Let's add an engineer  |
 • = • = • = • = • = • = •
  `);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the engineer\'s name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the engineer\'s employee ID number?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the engineer\'s email address?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineer\'s github username?'
    }
  ])
    .then(answers => {
      let mgr = new Engineer(answers)
      teamArr.push(mgr)
    })
    .then(nextEntryPrompt);
};




managerPrompt()
  .then(nextEntryPrompt)