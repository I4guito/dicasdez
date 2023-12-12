
const isOpera = navigator.userAgent.indexOf("OPR") > -1;
  

if (isOpera) {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("body").style.backgroundColor = "#005c4b"; 
    document.querySelector(".container").style.color = "#333";
    document.querySelector("container").backgroundColor = "#333";
  });
}