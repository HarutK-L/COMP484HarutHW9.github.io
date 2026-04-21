// ==========================
// Part 1: Date Display
// ==========================

// 1. Create a Date object
const today = new Date();

// 2. Get the current month, day, and year
let month = today.getMonth() + 1; // 3. Adjust month because months are 0-based
let day = today.getDate();
const year = today.getFullYear();

// 4. Add leading zeros to month/day if needed
month = String(month).padStart(2, "0");
day = String(day).padStart(2, "0");

// 5. Create a string in the format: "Today is MM/DD/YYYY"
const dateMessage = `Today is ${month}/${day}/${year}`;

// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// 1. Create at least 4 separate variables
const value1 = "42";
const value2 = "100";
const value3 = "19.75";
const value4 = "hello";

// Helper function to build result lines
function describeConversion(originalValue) {
  const convertedValue = Number(originalValue);
  const isNanValue = Number.isNaN(convertedValue);
  const isIntegerValue = Number.isInteger(convertedValue);

  return `Original: '${originalValue}' -> Converted: ${convertedValue} -> isNaN: ${isNanValue} -> isInteger: ${isIntegerValue}`;
}

// 2 and 3. Convert each value and create result sentences
const result1 = describeConversion(value1);
const result2 = describeConversion(value2);
const result3 = describeConversion(value3);
const result4 = describeConversion(value4);

// 4. Combine all results into ONE string
const numberResults =
  result1 + "<br>" +
  result2 + "<br>" +
  result3 + "<br>" +
  result4;

// 5. Display the final result
document.getElementById("numberConversionOutput").innerHTML = numberResults;

// ==========================
// Part 3: Math & Formatting
// ==========================

// 1. Create at least 2-3 numeric variables
const num1 = 25;
const num2 = 7.5;
const num3 = 3;

// 2. Perform calculations
const additionResult = num1 + num2;
const multiplicationResult = num2 * num3;
const divisionResult = num1 / num3;

// 3. Use formatting methods
const fixedResult = additionResult.toFixed(2);
const localizedResult = multiplicationResult.toLocaleString();
const parsedFloat = Number.parseFloat("45.678");

// 4. Build a string showing results
const mathResults =
  `Addition: ${num1} + ${num2} = ${additionResult}<br>` +
  `Multiplication: ${num2} × ${num3} = ${multiplicationResult}<br>` +
  `Division: ${num1} ÷ ${num3} = ${divisionResult}<br>` +
  `Addition formatted with toFixed(2): ${fixedResult}<br>` +
  `Multiplication formatted with toLocaleString(): ${localizedResult}<br>` +
  `Parsed float from "45.678": ${parsedFloat}`;

// 5. Display the results
document.getElementById("mathOutput").innerHTML = mathResults;

// ==========================
// Part 4: Conditionals
// ==========================

// Create a place to show conditional messages
const conditionalOutput = document.getElementById("conditionalOutput");

let conditionalMessages = "";

// 1. First if/else statement: check if value4 becomes NaN
if (Number.isNaN(Number(value4))) {
  conditionalMessages += `'${value4}' is not a valid number.<br>`;
} else {
  conditionalMessages += `'${value4}' is a valid number.<br>`;
}

// 2. Second if/else statement: check if additionResult is greater than 30
if (additionResult > 30) {
  conditionalMessages += `The addition result (${additionResult}) is greater than 30.<br>`;
} else {
  conditionalMessages += `The addition result (${additionResult}) is not greater than 30.<br>`;
}

// Optional extra conditional
if (Number.isInteger(Number(value3))) {
  conditionalMessages += `'${value3}' converts to an integer.`;
} else {
  conditionalMessages += `'${value3}' does not convert to an integer.`;
}

// Display conditional messages
conditionalOutput.innerHTML = conditionalMessages;