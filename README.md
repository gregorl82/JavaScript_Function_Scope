<h1>JavaScript Function Scope</h1>
<h2>Objectives</h2>
<ul>
<li>Understand function scope</li>
<li>Know the difference in between the let and const keywords</li>
</ul>
<h2>Brief</h2>
<p>Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.</p>
<h3>Episode 1</h3>
  <pre><code>
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
  </code></pre>
<h3>Episode 2</h3>
  <pre><code>
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
  </code></pre>
<h3>Episode 3</h3>
  <pre><code>
  let murderer = 'Professor Plum';
  const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
  }
  const firstVerdict = declareMurderer();
  console.log('First Verdict: ', firstVerdict);
  const secondVerdict = `The murderer is ${murderer}.`;
  console.log('Second Verdict: ', secondVerdict);
  </code></pre>
<h3>Episode 4</h3>
  <pre><code>
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
  </code></pre>
<h3>Episode 5</h3>
  <pre><code>
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
  </code></pre>
<h3>Episode 6</h3>
  <pre><code>
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
  </code></pre>
<h3>Episode 7</h3>
  <pre><code>
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
  </code></pre>
<h3>Episode 8</h3>
  <pre><code>
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
  </code></pre>
<h3>Episode 9</h3>
  <pre><code>
  let murderer = 'Professor Plum';
  if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
  }
  const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
  }
  const verdict = declareMurderer();
  console.log(verdict);
  </code></pre>
