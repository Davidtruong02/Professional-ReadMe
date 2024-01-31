// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeOptionsObj = {
    'Apache License 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'GNU General Public License v3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'MIT License': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'BSN 3-Clause "New" or "Revised"': '![License: BSN](https://img.shields.io/badge/License-BSN%203--Clause-blue.svg)',
  };

  return badgeOptionsObj[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinksObj = {
    'Apache License 2.0': '(https://opensource.org/licenses/Apache-2.0)',
    'GNU General Public License v3.0': '(https://www.gnu.org/licenses/gpl-3.0.html)',
    'MIT License': '(https://opensource.org/licenses/MIT)',
    'BSN 3-Clause "New" or "Revised"': '(https://opensource.org/licenses/BSD-3-Clause)',
  };

  return licenseLinksObj[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  if (!licenseBadge && !licenseLink) {
    return '';
  }

  return `

  ${licenseBadge} ${licenseLink}`;
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = (userInput) => {
  const { title, description,installation, usage, contributing, license, tests, githubusername, email,} = userInput;
  const licenseSection = renderLicenseSection(license);
  const outputMarkdown = `# ${title}

  ## Description
  ${description}
  

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation
  ${installation}
  

  ## Usage
  ${usage}
   
  
  ## Credits
  ${contributing}
  

  ## License
  ${licenseSection}

  
  ## Tests
  ${tests}


  ## Questions
  - If you have any questions, please contact me at my github profile at  ('https://github.com/${githubusername}')
  - You can also email me at: ${email} for any additional questions or concerns you may have regarding this project. Thank you!

  
  `
  return outputMarkdown;
}

module.exports = generateMarkdown; // This is the export of the generateMarkdown function
