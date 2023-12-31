const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const {generateSVG} = require('./lib/shapes') 

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three(3) characters.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color for your text (ex. 'blue' or '#0000FF')",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape do you want your logo?",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color for your shape (ex. 'blue' or '#0000FF')",
    },
  ]);
};

function init() {
  promptUser()
    .then((answers) => writeFile("examples/sample.svg", generateSVG(answers)))
    .then(() => console.log("Generated logo.svg"))
    .catch((err) => console.log(err));
}

init()