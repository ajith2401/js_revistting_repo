function getDayOfWeek(dayNumber) {
    let day;
    switch (dayNumber) {
      case 1:
        day = "Sunday";
        break;
      case 2:
        day = "Monday";
        break;
      // Add cases for the rest of the days...
      default:
        day = "Invalid day number";
    }
    return day;
  }
  

//   console.log(getDayOfWeek(1))


  function getDayOfWeek1(dayNumber) {
    switch (dayNumber) {
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      // Add cases for the rest of the days...
      default:
        return "Invalid day number";
    }
    
  }

//   console.log(getDayOfWeek1(1))


  function getDayOfWeek2(dayNumber) {
    switch (dayNumber) {
      case 1:
      case 2: 
      default:
        return "Invalid day number";
    }
    
  }

  console.log(getDayOfWeek2(1))


  function convertToLetterGrade(grade) {
    let letterGrade;
    switch (true) {
      case grade >= 90:
        letterGrade = "A";
        break;
      case grade >= 80:
        letterGrade = "B";
        break;
      case grade >= 70:
        letterGrade = "C";
        break;
      case grade >= 60:
        letterGrade = "D";
        break;
      default:
        letterGrade = "F";
    }
    return letterGrade;
  }

  console.log("convertToLetterGrade(grade)",convertToLetterGrade(95))


  function isLeapYear(year) {
    let isLeap;
    switch (true) {
      case (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0):
        isLeap = true;
        break;
      default:
        isLeap = false;
    }
    return isLeap;
  }
  
  