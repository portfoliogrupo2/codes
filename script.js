
//Loading gif
window.onload = function(){
  document.getElementById('col-md-8').style.display = "none";
  setTimeout(function() {
    document.getElementById('loader').style.display = "none";
    document.getElementById('col-md-8').style.display = "block"
  }, 1200);
}


//Botão Menu
function myFunction(y) {
    var x = document.getElementById("col-md-4");
    if (x.style.display === "block") {
    	y.classList.toggle("change");
        x.style.display = "none";
    } else {
    	y.classList.toggle("change");
        x.style.display = "block";
    }
}

document.addEventListener('DOMContentLoaded', function() {

  let db = connect('https://codes-grupo2-p1.firebaseio.com/')
  let params = extract()
  let path = '/' + params['category'] + '/projetos/' + params['projeto']

 db.download(path, function(data) {
    replace('body', {
        'name': data['name'],
        'descricao': data['items']['Descrição do Projeto'],
        'habilidades': data['items']['Habilidades Desenvolvidas'],
        'imagem': data['items']['Imagens'],
    })
    replace('title', {
        'name': data['name'],
    })
  })
})


document.addEventListener('DOMContentLoaded', function() {
//Carrossel
  var slideIndex = 1;
  var timer = null;
  showSlides(slideIndex);

  function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n==undefined){n = ++slideIndex}
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    timer = setTimeout(showSlides, 3000);
  } 
})
=======
//Loading gif
window.onload = function(){
  document.getElementById('col-md-8').style.display = "none";
  setTimeout(function() {
    document.getElementById('loader').style.display = "none";
    document.getElementById('col-md-8').style.display = "block"
  }, 1200);
}


//Botão Menu
function myFunction(y) {
    var x = document.getElementById("col-md-4");
    if (x.style.display === "block") {
    	y.classList.toggle("change");
        x.style.display = "none";
    } else {
    	y.classList.toggle("change");
        x.style.display = "block";
    }
}

document.addEventListener('DOMContentLoaded', function() {

  let db = connect('https://codes-grupo2-p1.firebaseio.com/')
  let params = extract()
  let path = '/' + params['category'] + '/projetos/' + params['projeto']
  
 db.download(path, function(data) {
   console.log(data['items']['Habilidades Desenvolvidas'])
    replace('body', {
        'name': data['name'],
        'descricao': data['items']['Descrição do Projeto'],
        'habilidades': data['items']['Habilidades Desenvolvidas'],
        'imagem': data['items']['Imagens'],
    })
    replace('title', {
        'name': data['name'],
    })
  })
})


document.addEventListener('DOMContentLoaded', function() {
//Carrossel
  var slideIndex = 1;
  var timer = null;
  showSlides(slideIndex);

  function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n==undefined){n = ++slideIndex}
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    timer = setTimeout(showSlides, 3000);
  } 
})

