
   var century, year, month, dateOfBirth
   //getInfo
    century = parseInt(document.getElementById("century1").value);
    year = parseInt(document.getElementById("year1")).value);
    month = parseInt(document.getElemetById("month1")).value);
    dateOfBirth = parseint(document.getEementById("date1")).value);
if (century == 0) {
    alert("Input correct century");
    return false;
} else if (year <= 0) {
    alert("input correct year");
    return false;
} else if (month <= 0 || month > 12) {
    alert("incorrect month format")
    return false;
} else if (dateOfBirth <= 0 || month > 31) {
    alert("incorrect date format");
    return false;
}
function calculateDay(){
    getInfo();
    day = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dateOfBirth) % 7);
     return (Math.floor(day));
}
var akanName= document.getElementsByName('female').value;
var femaleGender = document.getElementById("male").value;
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


                                                          
if (option == 'option1') {
    document.getElementById("akanOutput").innerHTML = "You were born on " + daysOfTheWeek[day] + " and your Akan name would be " + akanMales[day];
    console.log(daysOfTheWeek[day]);
    console.log(akanMales[day]);
 } else {
        document.getElementById("akanOutput").innerHTML = "You were born on " + daysOfTheWeek[day] + " and your Akan name would be " + akanFemales[day];
        console.log(daysOfTheWeek[day]);
        console.log(akanFemales[day]);
}
