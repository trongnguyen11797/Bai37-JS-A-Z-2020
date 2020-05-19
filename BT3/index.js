var readLineSync = require('readline-sync');
var pass = 'trongdeptrai';
var userPass;
function enterPass() {
    console.log('Please enter password: ')
    userPass = readLineSync.question(': ');
}
enterPass();
while(true) {
    if(userPass === pass) {
        console.log('Welcome...');
        break;
    }
    if(userPass === 'exit') {
        console.log('Exit!');
        break;
 
    }
    console.log('Wrong password!, enter: exit if you want exit.');
    enterPass();
}