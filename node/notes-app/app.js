const validator = require('validator');
const getNotes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');
// console.log(getNotes())
// console.log(validator.isURL('www..com')) 
// console.log(chalk.red.bold('SUCCESS!'));
// yargs.version('1.1.0');
// console.log(process.argv[2]);
// const command = process.argv[2];
// if(command === 'add') {
//     console.log('ADDING NOTE!');
// } else if(command === 'remove'){
//     console.log('REMOVING')
// }

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding new note!');
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing  note!');
    }
})
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('Adding new note!');
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a  note!');
    }
})

console.log(yargs.argv);