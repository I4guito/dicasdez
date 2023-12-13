function mostrarInfo(nome, informacoes) {
    var modal = document.getElementById("infoModal");
    var conteudo = document.getElementById("infoConteudo");
    
    conteudo.innerHTML = "<h1>" + nome + "</h1><p1>" + informacoes + "</p1>";
    
    modal.style.display = "block";
}

function fecharInfoModal() {
    var modal = document.getElementById("infoModal");
    modal.style.display = "none";
}

const isOpera = navigator.userAgent.indexOf("OPR") > -1;
  

if (isOpera) {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("body").style.backgroundColor = "#005c4b"; 
    document.querySelector(".container").style.color = "#333";
  });
}