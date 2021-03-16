
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementsByClassName("fa-bars")[0].style.display = "block";
    document.getElementsByClassName("Times")[0].style.display = "none";
  } else {
    x.style.display = "block";
    document.getElementsByClassName("fa-bars")[0].style.display = "none";
    document.getElementsByClassName("Times")[0].style.display = "block";
  }
}


var slideIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 3000); 
}


var clicks = 0 ;
    function onClick() {	
        clicks += 1;
        document.getElementsByClassName("clicks")[0].innerHTML = clicks;
    };

