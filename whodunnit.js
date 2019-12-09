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
This code will throw an error, because the murderer variable has been assigned
as a constant and cannot be changed.
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


/*
Episode 4
The output will be 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.'
then 'Suspect three is Mrs. Peacock.', because the suspectThree variable is only
changed inside the declareAllSuspects() function scope. The suspectThree declared
at the start of the program remains unchanged.
*/
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);


/*
Episode 5
The output will be 'The weapon is the Revolver.', because even though the scenario
object was declared as a constant, the values of the keys can still be changed so
when the changeWeapon() function is called, the weapon property of the scenario
is changed to 'Revolver'.
*/
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);


/*
Episode 6
The output will be 'The murderer is Mrs. White.', because the murderer variables
inside the changeMurderer() and plotTwist() functions have been declared without
'let' so their scope is the entire program
*/
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


/*
Episode 7
The output will be 'The murderer is 'Mr Green.', because the changeMurderer()
function will change the first murderer variable from 'Professor Plum' to 'Miss Scarlet',
while the plotTwist() function will not have any effect outside the scope of the
function.
*/
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


/*
Episode 8
The output will be 'The weapon is 'Candle Stick.'. The second line of the
changeScenario() function will change the room property to 'Dining Room'. This
will make the if statement of the plotTwist() function true, so the murderer
property will be changed to 'Colonel Mustard.' This will make the if statement
of the unexpectedOutcome() function true, so the weapon property will be changed
to 'Candle Stick.'
*/
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
