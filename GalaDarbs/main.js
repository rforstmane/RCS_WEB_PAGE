var slideIndex = 1; /* sākotnējā vērtība*/
showSlides(slideIndex);

setInterval(autoPlay,5000)

function autoPlay(){
    plusSlides(1);
}

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slaids"); /*atgriezīs visus elementu, kam ir myslides klase */
    var dots = document.getElementsByClassName("punkts");
    if(n > slides.length) { slideIndex = 1}
    if(n < 1){slideIndex = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slides);
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex-1].className += " active";
}





var modal = document.getElementById('myModal');
var a = document.getElementsByClassName("myBtn");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < a.length; i++) {
    a[i].onclick = function(){
        modal.style.display = "block";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

var modalis = document.getElementById('Modalis');
var b = document.getElementsByClassName("Button");
var spanis = document.getElementsByClassName("close2")[0];

for (var i = 0; i < b.length; i++) {
    b[i].onclick = function(){
        modalis.style.display = "block";
    }
}

spanis.onclick = function() {
    modalis.style.display = "none";
}

window.onclick = function(events) {
    if(events.target == modalis) {
        modalis.style.display = "none";
    }
    else if(event.target == modal) {
        modal.style.display = "none";
    }
}



$(document).ready(function () {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=riga&appid=401d4a106dc1f5b828e39749dcf69e27&units=metric&lang=la", success: function (result) {
            var weather = result.weather[0];
        $("#ajax-result ").html("<p>RĪGĀ ŠOBRĪD IR " + weather.description +"</p> <p>TEMPERATŪRA "+ result.main.temp +"°C</p>");
            
            

            
        }
    });
});
