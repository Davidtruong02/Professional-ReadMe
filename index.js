// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How can someone install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How can someone use your project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How can someone test your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSN 3-Clause "New" or "Revised",'],
    },
    {
      type: 'input',
      name: 'githubusername',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address for contact?',
    },
  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFileSync(fileName, data);
  console.log("README.md file created successfully!");
}



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
          .then((answers) => {
            // write the output
            const fileContents = generateMarkdown(answers);
            const { title } = answers;
            
        
            const fileName = title.toLowerCase().replace(" ", "-");
            fs.writeFile(`README.md`, fileContents, (err) => {
              if (err) {
                console.error("Error writing file:", err);
              } else {
                console.log("Success!");
              }
            });
          });
        };

// Function call to initialize app
init();
