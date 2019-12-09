/*
Episode 1
The output will be 'The murderer is Miss Scarlet' because the scenario variable
is declared in the main program and is available to the declareMurderer() function.
*/
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

/*
Episode 2
This function will give an error, because the murderer variable has been assigned
as a constant and is therefore immutable.
*/
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

/*
Episode 3
The output will be 'First Verdict: The murderer is Mrs. Peacock' then 'Second
Verdict: The murderer is Professor Plum', because 'Professor Plum' is assigned to
the murderer variable that is accessible throughout the program, while 'Mrs.
Peacock' is only assigned to the murderer variable inside the declareMurderer()
function.
*/

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
