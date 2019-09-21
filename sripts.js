var century, year, month, dateOfBirth,
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
function calculator{}

}



