/* 
  Here are some resources for learning more about Javascript:
  https://medium.freecodecamp.org/want-to-learn-javascript-heres-a-free-24-part-course-to-get-you-started-e7777baf86fb
  https://medium.com/@petehouston/top-5-resources-to-learn-javascript-today-a611883542cc

  And a little bit about JavaScript developer interviews
  https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d
  https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95

  And if you're curious about what jobs are available then the search phrases you would want to search for are: Front end developer, web developer or Javascript developer.
*/

function nameChanged() {
  /* 
    This is an Array - An Array is a list of things that are seperated by commas. You can reconise an Array by the [] that 
    surrounds the list of things. Each thing in this array is a name, each name is made up of text and therefore it is 
    classed as a String. You can tell they are strings because each name is surrounded by "" This array is an array of all 
    of the possible elf names our app can return. We have stored it in a variable called 'elfFirstNames' ready for us to use 
    later.
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  */
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

  /*
    This code will find the text input on the page and get the current value of it. ie. Whatever has been typed into it. 
    It then stores it in a variable called 'enteredName' ready for us to use later.
  */
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

  // Create the elfName variable, ready to use later
  let elfName = "";

  /* 
    Here we store the length of the name the user typed into the input. The length is referring to how many letters are 
    in the name
  */
  let firstNameLength = firstName.length;
  let lastNameLength = lastName.length;

  /* 
    'if' is a keyword, keywords are words that are reserved by the coding language and assigned a specific task. 
    'if' has the task of checking the value that is provided in the () is true or not. If the value is true then it will 
    run any code inside of the next {}
    
    In this case we're checking to see if the first name has one or more letter in it
    If we didn't do this check and just assumed that the user had typed something into the text input, what would happen?
  */
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
