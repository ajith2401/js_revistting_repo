// Certainly! Here are 30 coding questions and answers that use the `switch` case statement in JavaScript:

// **1. Write a program to check if a number is even or odd using a switch case statement.**

function checkEvenOrOdd(num) {
  switch (num % 2) {
    case 0:
      return "Even";
    case 1:
      return "Odd";
    default:
      return "Invalid Input";
  }
}
 

// **2. Create a program that converts a numeric grade into a letter grade using a switch case statement.**

function convertToLetterGrade(grade) {
  switch (true) {
    case grade >= 90:
      return "A";
    case grade >= 80:
      return "B";
    case grade >= 70:
      return "C";
    case grade >= 60:
      return "D";
    default:
      return "F";
  }
}
 

// **3. Implement a calculator program that performs basic arithmetic operations using a switch case statement.**

function calculator(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return "Invalid Operator";
  }
}
 

// **4. Write a program that returns the day of the week based on a given number using a switch case statement (1 for Monday, 2 for Tuesday, etc.).**

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid Day Number";
  }
}
 

// **5. Create a program that determines if a year is a leap year using a switch case statement.**

function isLeapYear(year) {
  switch (true) {
    case year % 400 === 0:
      return true;
    case year % 100 === 0:
      return false;
    case year % 4 === 0:
      return true;
    default:
      return false;
  }
}
 

// **6. Implement a program that returns the name of a month based on its number using a switch case statement (1 for January, 2 for February, etc.).**

function getMonthName(monthNumber) {
  switch (monthNumber) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid Month Number";
  }
}
 

// **7. Write a program that determines if a character is a vowel or consonant using a switch case statement.**

function isVowelOrConsonant(char) {
  switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return "Vowel";
    default:
      return "Consonant";
  }
}
 

// **8. Create a program that returns the name of a shape based on the number of sides using a switch case statement (3 for triangle, 4 for square, etc.).**

function getShapeName(numSides) {
  switch (numSides) {
    case 3:
      return "Triangle";
    case 4:
      return "Square";
    case 5:
      return "Pentagon";
    case 6:
      return "Hexagon";
    default:
      return "Invalid Number of Sides";
  }
}
 

// **9. Implement a program that calculates the factorial of a number using a switch case statement.**

function factorial(num) {
  switch (num) {
    case 0:
    case 1:
      return 1;
    default:
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
  }
}
 

// **10. Write a program that determines if a number is positive, negative, or zero using a switch case statement.**

function checkNumberType(num) {
  switch (true) {
    case num > 0:
      return "Positive";
    case num < 0:
      return "Negative";
    default:
      return "Zero";
  }
}
 

// **11. Create a program that checks if a character is uppercase, lowercase, or neither using a switch case statement.**
 
function checkCharacterCase(char) {
  switch (true) {
    case char >= 'A' && char <= 'Z':
      return "Uppercase";
    case char >= 'a' && char <= 'z':
      return "Lowercase";
    default:
      return "Neither";
  }
}
 

// **12. Implement a program that returns the day of the week for a given date (e.g., "Monday, Tuesday, etc.") using a switch case statement.**
 
function getDayOfWeekFromDate(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = date.getDay();
  
  switch (dayIndex) {
    case 0:
      return daysOfWeek[0];
    case 1:
      return daysOfWeek[1];
    case 2:
      return daysOfWeek[2];
    case 3:
      return daysOfWeek[3];
    case 4:
      return daysOfWeek[4];
    case 5:
      return daysOfWeek[5];
    case 6:
      return daysOfWeek[6];
    default:
      return "Invalid Date";
  }
}
 

// **13. Write a program that calculates the area of various geometric shapes (circle, rectangle, triangle) using a switch case statement.**
 
function calculateArea(shape, ...params) {
  switch (shape.toLowerCase()) {
    case 'circle':
      const [radius] = params;
      return Math.PI * radius * radius;
    case 'rectangle':
      const [length, width] = params;
      return length * width;
    case 'triangle':
      const [base, height] = params;
      return (base * height) / 2;
    default:
      return "Invalid Shape";
  }
}
 

// **14. Create a program that checks if a given year is in the past, present, or future using a switch case statement.**
 


function checkYearStatus(year) {
  const currentYear = new Date().getFullYear();

  switch (true) {
    case year < currentYear:
      return "Past";
    case year === currentYear:
      return "Present";
    case year > currentYear:
      return "Future";
    default:
      return "Invalid Year";
  }
}
 

// **15. Implement a program that determines the type of a triangle (equilateral, isosceles, or scalene) using a switch case statement.**
 
function getTriangleType(side1, side2, side3) {
  switch (true) {
    case side1 === side2 && side2 === side3:
      return "Equilateral";
    case side1 === side2 || side2 === side3 || side1 === side3:
      return "Isosceles";
    default:
      return "Scalene";
  }
}
 

// **16. Write a program that calculates the number of days in a given month and year using a switch case statement.**
 
function getDaysInMonth(month, year) {
  switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
      return 31;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
      return 30;
    case 2: // February
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 29; // Leap year
      } else {
        return 28;
      }
    default:
      return "Invalid Month";
  }
}
 

// **17. Create a program that calculates the discount amount based on the purchase amount using a switch case statement.**
 
function calculateDiscount(purchaseAmount) {
  switch (true) {
    case purchaseAmount >= 1000:
      return purchaseAmount * 0.2; // 20% discount
    case purchaseAmount >= 500:
      return purchaseAmount * 0.1; // 10% discount
    default:
      return 0; // No discount
  }
}
 

// **18. Implement a program that converts a currency code to its corresponding symbol using a switch case statement (USD to '$', EUR to '€', etc.).**
 
function getCurrencySymbol(currencyCode) {
  switch (currencyCode.toUpperCase()) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'GBP':
      return '£';
    default:
      return "Invalid Currency Code";
  }
}
 

// **19. Write a program that checks if a year is a common year or a leap year using a switch case statement.**
 
function isLeapYear(year) {
  switch (true) {
    case year % 4 !== 0:
      return "Common Year";
    case year % 100 !== 0:
      return "Leap Year";
    case year % 400 !== 0:
      return "Common Year";
    default:
      return "Leap Year";
  }
}
 

// **20. Create a program that calculates the sum of digits in a given number using a switch case statement.**
 
function sumOfDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}
 

// **21. Implement a program that determines the type of a quadrilateral (square, rectangle, rhombus, or trapezoid) using a switch case statement.**
 
function getQuadrilateralType(side1, side2, side3, side4) {
  switch (true) {
    case side1 === side2 && side2 === side3 && side3 === side4:
      return "Square";
    case (side1 === side3 && side2 === side4) || (side1 === side2 && side3 === side4):
      return "Rectangle";
    case side1 === side2 && side2 === side3 && side3 !== side4:
      return "Rhombus";
    case side1 !== side2 && side2 !== side3 && side3 !== side4:
      return "Trapezoid";
    default:
      return "Invalid Quadrilateral";
  }
}
 

// **22. Write a program that determines if a given number is prime or not using a switch case statement.**
 
function isPrimeNumber(num) {
  switch (true) {
    case num <= 1:
      return false;
    case num <= 3:
      return true;
    case num % 2 === 0 || num % 3 === 0:
      return false;
    default:
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
          return false;
        }
      }
      return true;
  }
}
 

// **23. Create a program that converts a day of the week abbreviation (e.g., "Mon", "Tue", etc.) to the full day name using a switch case statement.**
 
function getFullDayName(dayAbbreviation) {
  switch (dayAbbreviation.toLowerCase()) {
    case 'mon':
      return "Monday";
    case 'tue':
      return "Tuesday";
    case 'wed':
      return "Wednesday";
    case 'thu':
      return "Thursday";
    case 'fri':
      return "Friday";
    case 'sat':
      return "Saturday";
    case 'sun':
      return "Sunday";
    default:
      return "Invalid Day Abbreviation";
  }
}
 

// **24. Implement a program that calculates the total cost of a shopping cart with discounts using a switch case statement.**
 
function calculateTotalCost(cartTotal, discountType) {
  switch (discountType.toLowerCase()) {
    case 'none':
      return cartTotal;
    case '10off':
      return cartTotal * 0.9; // 10% off
    case '20off':
      return cartTotal * 0.8; // 20% off
    default:
      return "Invalid Discount Type";
  }
}
 

// **25. Write a program that determines the day of the week for a given date using a switch case statement.**
 
function getDayOfWeekFromDate(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = date.getDay();
  
  switch (dayIndex) {
    case 0:
      return daysOfWeek[0];
    case 1:
      return daysOfWeek[1];
    case 2:
      return daysOfWeek[2];
    case 3:
      return daysOfWeek[3];
    case 4:
      return daysOfWeek[4];
    case 5:


      return daysOfWeek[5];
    case 6:
      return daysOfWeek[6];
    default:
      return "Invalid Date";
  }
}
 

// **26. Create a program that determines the type of a vehicle (car, motorcycle, bicycle) based on the number of wheels using a switch case statement.**
 
function getVehicleType(numWheels) {
  switch (numWheels) {
    case 2:
      return "Motorcycle";
    case 4:
      return "Car";
    case 0:
      return "Bicycle";
    default:
      return "Unknown Vehicle";
  }
}
 

// **27. Implement a program that calculates the cost of shipping based on the weight of a package using a switch case statement.**
 
function calculateShippingCost(weight) {
  switch (true) {
    case weight <= 1:
      return "$5.00";
    case weight <= 5:
      return "$10.00";
    case weight <= 10:
      return "$15.00";
    default:
      return "Contact Customer Support";
  }
}
 

// **28. Write a program that determines the type of a day (weekday or weekend) based on the day number using a switch case statement (1 for Monday, 2 for Tuesday, etc.).**
 
function getDayType(dayNumber) {
  switch (dayNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Weekday";
    case 6:
    case 7:
      return "Weekend";
    default:
      return "Invalid Day Number";
  }
}
 

// **29. Create a program that calculates the cost of a meal with tax and tip using a switch case statement.**
 
function calculateMealCost(baseCost, taxRate, tipPercentage) {
  const taxAmount = baseCost * (taxRate / 100);
  const tipAmount = baseCost * (tipPercentage / 100);
  return baseCost + taxAmount + tipAmount;
}
 

// **30. Implement a program that determines the type of a card suit (hearts, diamonds, clubs, or spades) based on the card's code using a switch case statement (H for hearts, D for diamonds, etc.).**
 
function getCardSuit(cardCode) {
  switch (cardCode.toUpperCase()) {
    case 'H':
      return "Hearts";
    case 'D':
      return "Diamonds";
    case 'C':
      return "Clubs";
    case 'S':
      return "Spades";
    default:
      return "Invalid Card Suit";
  }
}
