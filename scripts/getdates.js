//Get current year
const currentYear = new Date().getFullYear();
const firstFooterPar = document.querySelector("#currentyear");
firstFooterPar.innerHTML = currentYear;

//Get last modified
document.getElementById("lastModified").innerHTML = document.lastModified;