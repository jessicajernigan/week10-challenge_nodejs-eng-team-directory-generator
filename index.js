const formatPage = require('./src/format-page.js');
const generatePage = require('./utils/generate-page.js');
const inquirer = require('inquirer');

// const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const teamArr = [];


const managerPrompt = () => {
  console.log(`
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • 
  |                                                                         |
  |      L E T ' S   B U I L D   Y O U R   T E A M   D I R E C T O R Y      |  
  |                                                                         |
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • 
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
      message: 'What is manager\'s employee ID number?'
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
    .then((answers) => {
      const { name, id, email, officeNum } = answers;
      const manager = new Manager(name, id, email, officeNum);
      const managerInput = {
        role: manager.getRole(),
        name: manager.getName(),
        id: manager.getId(),
        email: manager.getEmail(),
        officeNum: manager.getOfficeNum(),
      };
      teamArr.push(managerInput)
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
      default: createPage(teamArr);
    }
  });
}

const createPage = (teamArr) => {
  let htmlPage = formatPage(teamArr); // Creating HTML
  console.log(`
  • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = •
  |                                                                        |
  |     Y O U R   D I R E C T O R Y   I S   R E A D Y   T O   V I E W      |  
  |                                                                        |
  • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • 
  `)
  generatePage(htmlPage); // Grabbing the HTML & writing it to the file
};


const internPrompt = () => {
  console.log(`
  • = • = • = • = • = • = • = • = • = • = • = • = • = •
  |                                                    |
  |      L E T ' S   A D D   A N   I N T E R N         |  
  |                                                    |
  • = • = • = • = • = • = • = • = • = • = • = • = • = • 
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
    .then((answers) => {
      const { name, id, email, school } = answers;
      const intern = new Intern(name, id, email, school);
      const internInput = {
        role: intern.getRole(),
        name: intern.getName(),
        id: intern.getId(),
        email: intern.getEmail(),
        school: intern.getSchool(),
      };
      teamArr.push(internInput)
    })
    .then(nextEntryPrompt);
};

const engineerPrompt = () => {

  console.log(`
 • = • = • = • = • = • = • = • = • = • = • = • = • = •
|                                                     |
|      L E T ' S   A D D   A N   E N G I N E E R      |  
|                                                     |
 • = • = • = • = • = • = • = • = • = • = • = • = • = • 
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
    .then((answers) => {
      const { name, id, email, github } = answers;
      const engineer = new Engineer(name, id, email, github);
      const engInput = {
        role: engineer.getRole(),
        name: engineer.getName(),
        id: engineer.getId(),
        email: engineer.getEmail(),
        github: engineer.getGithub(),
      };
      teamArr.push(engInput)
    })
    .then(nextEntryPrompt);
};



managerPrompt()
  .then(nextEntryPrompt)