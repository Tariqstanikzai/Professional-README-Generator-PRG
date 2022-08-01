// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');  
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        pe: 'input',
        message: 'Description of your project:',
        name: 'description',
    },
 
    {
        pe: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
    },
    {
        pe: 'input',
        name: 'usage',
        message: 'What will this project be used for?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Are there any contribution guidelines?',
    },
    {
        type: 'input',
        message: 'Please enter any testing protocols you used for this project?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Please select the license you used for this project:',
        name: 'license',
        choices: ['Apache 2.0', 'MIT', 'Mozilla', 'Boost', 'Apache', 'None' ]
    },
    {
        type: 'input',
        message: 'Are there any questions that need to be addressed?',
        name: 'questions',
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
      },

    {
        type: 'input',
        name: 'clone',
        message: 'What is the link to clone the repo?',
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'author',
        message: 'What is your name?',
    }

];



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            console.log(data);
            const filename = `${data.title.toLowerCase().split(' ').join('')}.json`;

            writeToFile(filename, data);
        });

};

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(`${filename}.md`, generateMarkdown(data), err =>
        err ? console.log(err) : console.log('Success!')
    );
}

// Function call to initialize app
init();