function filterItems() {
    var searchBar = document.getElementById('searchBar');
    var filter = searchBar.value.toUpperCase();

    var programas = document.getElementsByClassName('programa');
    for (var i = 0; i < programas.length; i++) {
        var programa = programas[i];
        var h2 = programa.getElementsByTagName('h2')[0]; // Obtém o elemento h2 dentro do programa
        var textValue = h2.textContent || h2.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            programa.style.display = ""; // Exibe o programa correspondente à pesquisa
        } else {
            programa.style.display = "none"; // Oculta os programas que não correspondem à pesquisa
        }
    }
}

const isOpera = navigator.userAgent.indexOf("OPR") > -1;
  

if (isOpera) {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".container").style.backgroundColor = "#005c4b"; 
    document.querySelector(".body").style.color = "#333";
  });
}

function openPage(pageName) {
    // Assuming all pages are in the same directory, you can modify the path as needed
    window.location.href = pageName + '.html';
}

