var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("trans");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}


function showMenu(){
  var x = document.getElementById("myMenu");

  if(x.style.display != "flex"){
  x.style.display = "flex";
  x.style.right = "0";
  }
  else{
    x.style.display = "none";
  }
}

var y = document.getElementById("myMenu");
function hideContent(){
  if(window.innerWidth<=750){
  y.style.display = "none";
  }
}

function sendMail(){
  var params = {
    from_name : document.getElementById("name").value,
    email_id :  document.getElementById("email").value,
    message : document.getElementById("subject").value
  }
  emailjs.send("service_9pgjwcm", "template_o23t8sm", params).then( function (res) {
    alert("Success !" + res.status);
  })
}
