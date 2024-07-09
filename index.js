// Importing the module
const readline = require('readline-sync');

const userOptions = [
  'Enter 1 to book tickets',
  'Enter 2 to check available tickets',
  'Enter 3 to cancel tickets',
  'Enter 4 to print tickets',
  'Enter 0 to exit',
];

let exitKey = true;
let option = 0;
while (exitKey) {
  userOptions.forEach((ele) => console.log(ele));
  option = Number(readline.question(`Enter option: `));
  if (option === 0) {
    exitKey = false;
  }
}

let ticketDetails = {
  UB: 10,
  MB: 10,
  LB: 10,
  RAC: 10,
};

const bookings = [];

const passenger = {
  name: '',
  age: 0,
  birthPrefrence: '',
  PNR: '',
};
const functions = {
  1: bookTickets(),
  2: checkAvailableTickets(),
  3: cancelTickets(),
  4: printTickets(),
};
