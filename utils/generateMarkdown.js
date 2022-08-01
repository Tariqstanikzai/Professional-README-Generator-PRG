
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Mozilla') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
  } else if (license === 'Boost') {
    return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
  } else if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'None') {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(badge, license) {
  if (license === 'Apache 2.0') {
    return `[${badge}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'MIT') {
    return `[${badge}](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Mozilla') {
    return `[${badge}](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'Boost') {
    return `[${badge}](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === 'Apache') {
    return `[${badge}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'None') {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function getLicenseSection(licenseStr) {
  if (licenseStr !== 'None') {
    return `
## License

License used for this project - ${licenseStr}
* For more information on license types, please reference this website
for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).

---

    `
  } else {
    return ''
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

${data.description}
${renderLicenseLink(renderLicenseBadge(data.license), data.license)}



---
## Table of Contents
1. [About](#about)
2. [Installation](#installation)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
7. [Authors and Acknowledgment](#authors%20and%20acknowledgment)
---
## About
${data.about}

---
## Visuals:
![]()
---
## Installation:

${data.installation}
To clone the repo:

    git clone ${data.clone}

---

${getLicenseSection(data.license)}


## Contributing:

To contribute to this application, create a pull request.
Here are the steps needed for doing that:
- Fork the repo
- Create a feature branch (git checkout -b YOUR-NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request
Following a code review, your feature will be merged.
---
## Questions:

${data.questions}
---
## Tests:

${data.test}
---
## Authors and Acknowledgments

${data.author}
---
## Contact Information:

* GitHub Username: (https://github.com/${data.userName})
* GitHub Email: (mailto:${data.userEmail})


`;
}

module.exports = generateMarkdown;