/* 
Here are some resources for learning more about Javascript:
https://medium.freecodecamp.org/want-to-learn-javascript-heres-a-free-24-part-course-to-get-you-started-e7777baf86fb
https://medium.com/@petehouston/top-5-resources-to-learn-javascript-today-a611883542cc

And a little bit about JavaScript developer interviews
https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d
https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95

And if you're curious about what jobs are available then the search phrases you would want to search for are: Front end developer, web developer or Javascript developer.
*/

const nameChanged = () => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  let elfFirstNames = [
    "Tinsel",
    "Snowball",
    "Candy",
    "Pine",
    "Pinky",
    "Jingle",
    "Twinkle",
    "Cupcake",
    "Floof"
  ];

  let elfLastNames = [
    "Sprout",
    "McStuffing",
    "Sleighbell",
    "Discoball",
    "Cell O'Tape",
    "Sparkles",
    "Reindeer",
    "Grinch",
    "Carrot",
    "Baulbles"
  ];

  // Get the users input
  let enteredName = document.getElementById("enteredName").value;

  // Split up the input by spaces - ['firstName', 'lastName', 'other..']
  let seperatedEnteredName = enteredName.split(" ");

  let firstName = "";
  let lastName = "";

  // Check input is not empty
  if (enteredName) {
    // Select & store the firstName
    firstName = seperatedEnteredName[0];

    // Check if there is a lastName in the array - ['firstName', 'lastName', 'other..']
    if (seperatedEnteredName.length > 1) {
      // Select & store the lastName
      lastName = seperatedEnteredName[1];
    }
  }

  let elfName = "";

  // Store first & last name lengths
  let firstNameLength = firstName.length;
  let lastNameLength = lastName.length;

  // Check first name exists
  if (firstNameLength) {
    // Find the elf first name & store it in elfName
    elfName += elfFirstNames[firstNameLength - 1];
  }

  // Check last name exists
  if (lastNameLength) {
    // Find the elf last name & add it to the end of elfName with a space
    elfName += " " + elfLastNames[lastNameLength - 1];
  }

  // Find the HTML div with id 'elfName' & put the elfName text inside
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
  document.getElementById("elfName").innerHTML = "Elf name: " + elfName;
};
