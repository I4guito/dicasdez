function filterItems() {
    var searchBar = document.getElementById('searchBar');
    var filter = searchBar.value.toUpperCase();

    var columns = document.getElementsByClassName('column');
    for (var i = 0; i < columns.length; i++) {
        var boxes = columns[i].getElementsByClassName('box');
        for (var j = 0; j < boxes.length; j++) {
            var item = boxes[j];
            var textValue = item.textContent || item.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        }
    }
}

function openPage(pageName) {
    // Assuming all pages are in the same directory, you can modify the path as needed
    window.location.href = pageName + '.html';
}


    const isOpera = navigator.userAgent.indexOf("OPR") > -1;
  
   
    if (isOpera) {
      document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".container").style.backgroundColor = "#005c4b";
        
        document.querySelector(".container").style.color = "#333";
      });
    }
