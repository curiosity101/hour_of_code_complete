const nameChanged = () => {
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
  document.getElementById("elfName").innerHTML = "Elf name: " + elfName;
};
