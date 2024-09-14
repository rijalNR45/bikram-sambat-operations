
console.log("Thank you")
// NepaliDate (year,month,date)
let date1 = new NepaliDate(2054, 5, 24)

// formatting
var date2 = date1.format('ddd, DD MMMM YYYY') // 'Monday, 24 Aswin 2051'

const datediv = document.getElementById("date")
datediv.textContent = date2;
