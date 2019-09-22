function checkAll(){
  var century = parseInt(document.getElementById("century1").value);
  var year = parseInt(document.getElementById("year1")).value);
  var month = parseInt(document.getElemetById("month1")).value);
  var dateOfBirth = parseint(document.getEementById("date1")).value);
if (century == 0) {
    alert("Input correct century");
    flag =false;
} else if (year <= 0) {
    alert("input correct year");
    flag =false;
} else if (month <= 0 || month > 12) {
    alert("incorrect month format")
    flag =false;
} else if (dateOfBirth <= 0 || month > 31) {
    alert("incorrect date format");
    flag = false;
}

   var  dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek);
    return (Math.floor(dayOfWeek));
}
function outputAkanname(){ 
  var gender=document.getElementById("gender1").checked;
}

  var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var akanMales = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var akanFemales = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var option = document.getElementsByName('name').value;
  var femaleGender = document.getElementById("femaleGender").value;


  

  if (option == 'option1') {
    document.getElementById("akanOutput").innerHTML = "You were born on " + dayOfTheWeek[day] + " and your Akan name would be " + akanMales[day];
    console.log(dayOfTheWeek[day](akanMales[day]));
  }else {
    document.getElementById("akanOutput").innerHTML = "You were born on " + dayOfTheWeek[day] + " and your Akan name would be " + akanFemales[day];
    console.log(dayOfTheWeek[day](akanFemales[day]);
  
  }
