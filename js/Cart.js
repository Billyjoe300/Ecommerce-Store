// Add to cart
var clicks = 0;
function background() {
var cart = "Added to cart!"; document.getElementById('btn-carts').innerHTML = cart;
document.getElementById("home-background").style.display = ("block");
var B = "Gost Recon"; document.getElementById('Y').innerHTML = B;
var C = "$100.00"; document.getElementById("x").innerHTML = C;
document.getElementById('B').style.display = ("block");
var x = document.getElementById("B");
x.setAttribute("src", "Images/modal_beeufiful-e35b81b0ab19a228bfad3192e7ef208d.jpg" );
document.getElementById('btn-carts').style.display = ("block");
document.getElementsByClassName("Times2")[0].style.display = "block";
document.getElementById('All').style.display = ("block");	
clicks = 1;
document.getElementsByClassName("clicks")[0].innerHTML = clicks;
};

// close
function cross(){
document.getElementById('btn-carts').style.display = ("none");
document.getElementById("home-background").style.display = ("none");
document.getElementsByClassName("Times2")[0].style.display = "none";
document.getElementById('All').style.display = ("none");
}




 



