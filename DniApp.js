const letters = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

function calculateLetter(dniNumber) {
  if (isNaN(dniNumber) || dniNumber < 0 || dniNumber > 99999999) {
    throw new Error("The provided data is incorrect");
  }
  const letterIndex = dniNumber % 23;
  return letters[letterIndex];
}

function promptForDNI() {
  if (typeof prompt !== "function") {
    throw new Error("prompt is not available in this environment");
  }

  while (true) {
    const userInput = prompt(
      "Enter your DNI number (or press Cancel to exit):"
    );
    if (userInput === null) break;

    try {
      const dniNumber = parseInt(userInput, 10);
      if (isNaN(dniNumber)) {
        alert("The provided data is incorrect");
        continue;
      }
      const dniLetter = calculateLetter(dniNumber);
      alert(`The letter corresponding to DNI ${dniNumber} is: ${dniLetter}`);
    } catch (error) {
      alert(error.message);
    }
  }
}

export { calculateLetter, promptForDNI };
