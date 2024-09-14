
console.log("Thank you")
// NepaliDate (year,month,date)
let date1 = new NepaliDate(2060, 0, 23)

// formatting
var date2 = date1.format('ddd, DD MMMM YYYY') // 'Monday, 24 Aswin 2051'
let date3 = date1.toJsDate();
const datediv = document.getElementById("date")
datediv.textContent = date1;
const dateConverted = document.querySelector(".convertedDate");
dateConverted.textContent = date3;
