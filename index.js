const inquirer = require('inquirer')
const {writeFile} = require('fs').promises
const shapes = require('./lib/shapes')

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three(3) characters.'
        },
        {
            type: 'input',
            name: 'text-color',
            message: "Enter a color for your text (ex. 'blue' or '0000FF')"
        },
        {
            type: 'list',
            name: 'shape',
            message: "What shape do you want your logo?",
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shape-color',
            message: "Enter a color for your shape (ex. 'blue' or '0000FF')"
        }
    ])
}

function init() {
    promptUser()
}