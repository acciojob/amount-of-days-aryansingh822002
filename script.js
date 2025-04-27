//your JS code here. If required.
function daysOfAYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;
  } else {
    return 365;
  } 
}

let year = prompt("Enter a year between 1 and 9999:");
year = parseInt(year);

alert(daysOfAYear(year));