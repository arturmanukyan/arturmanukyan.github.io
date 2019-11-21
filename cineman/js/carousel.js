

var carousel = document.querySelector('.carousel');
var cellCount = 9;
var selectedIndex = 0;
var variableDeg = 0;

var el1 = document.getElementById('el1');
var el2 = document.getElementById('el2');
var el3 = document.getElementById('el3');
var el4 = document.getElementById('el4');
var el5 = document.getElementById('el5');
var el6 = document.getElementById('el6');
var el7 = document.getElementById('el7');
var el8 = document.getElementById('el8');
var el9 = document.getElementById('el9');

function toggleDeg(){
    if (variableDeg > 9) {
        variableDeg = variableDeg - 9;
    }else if (variableDeg < -8) {
        variableDeg = variableDeg + 9;
    }
}

function toggleStyle() {
    if (variableDeg == 9 || variableDeg == 0) {
        el1.style.opacity = "1";
        el2.style.opacity = "0.5";
        el3.style.opacity = "0.5";
        el4.style.opacity = "0.5";
        el5.style.opacity = "0.5";
        el6.style.opacity = "0.5";
        el7.style.opacity = "0.5";
        el8.style.opacity = "0.5";
        el9.style.opacity = "0.5";
    }else if (variableDeg == 1 || variableDeg == -8) {
        el1.style.opacity = "0.5";
        el2.style.opacity = "1";
        el3.style.opacity = "0.5";
        el4.style.opacity = "0.5";
        el5.style.opacity = "0.5";
        el6.style.opacity = "0.5";
        el7.style.opacity = "0.5";
        el8.style.opacity = "0.5";
        el9.style.opacity = "0.5";
    }else if (variableDeg == 2 || variableDeg == -7) {
        el1.style.opacity = "0.5";
        el2.style.opacity = "0.5";
        el3.style.opacity = "1";
        el4.style.opacity = "0.5";
        el5.style.opacity = "0.5";
        el6.style.opacity = "0.5";
        el7.style.opacity = "0.5";
        el8.style.opacity = "0.5";
        el9.style.opacity = "0.5";
    }else if (variableDeg == 3 || variableDeg == -6) {
        el1.style.opacity = "0.5";
        el2.style.opacity = "0.5";
        el3.style.opacity = "0.5";
        el4.style.opacity = "1";
        el5.style.opacity = "0.5";
        el6.style.opacity = "0.5";
        el7.style.opacity = "0.5";
        el8.style.opacity = "0.5";
        el9.style.opacity = "0.5";
    }else if (variableDeg == 4 || variableDeg == -5) {
        el1.style.opacity = "0.5";
        el2.style.opacity = "0.5";
        el3.style.opacity = "0.5";
        el4.style.opacity = "0.5";
        el5.style.opacity = "1";
        el6.style.opacity = "0.5";
        el7.style.opacity = "0.5";
        el8.style.opacity = "0.5";
        el9.style.opacity = "0.5";
    }else if (variableDeg == 5 || variableDeg == -4) {
        el1.style.opacity = "0.5";
        el2.style.opacity = "0.5";
        el3.style.opacity = "0.5";
        el4.style.opacity = "0.5";
        el5.style.opacity = "0.5";
        el6.style.opacity = "1";
        el7.style.opacity = "0.5";
        el8.style.opacity = "0.5";
        el9.style.opacity = "0.5";
    }else if (variableDeg == 6 || variableDeg == -3) {
        el1.style.opacity = "0.5";
        el2.style.opacity = "0.5";
        el3.style.opacity = "0.5";
        el4.style.opacity = "0.5";
        el5.style.opacity = "0.5";
        el6.style.opacity = "0.5";
        el7.style.opacity = "1";
        el8.style.opacity = "0.5";
        el9.style.opacity = "0.5";
    }else if (variableDeg == 7 || variableDeg == -2) {
        el1.style.opacity = "0.5";
        el2.style.opacity = "0.5";
        el3.style.opacity = "0.5";
        el4.style.opacity = "0.5";
        el5.style.opacity = "0.5";
        el6.style.opacity = "0.5";
        el7.style.opacity = "0.5";
        el8.style.opacity = "1";
        el9.style.opacity = "0.5";
    }else if (variableDeg == 8 || variableDeg == -1) {
        el1.style.opacity = "0.5";
        el2.style.opacity = "0.5";
        el3.style.opacity = "0.5";
        el4.style.opacity = "0.5";
        el5.style.opacity = "0.5";
        el6.style.opacity = "0.5";
        el7.style.opacity = "0.5";
        el8.style.opacity = "0.5";
        el9.style.opacity = "1";
    }
}

function rotateCarousel() {
  toggleDeg();
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
  toggleStyle();
}

function nextSlide() {
  selectedIndex++;
  variableDeg++;
  rotateCarousel();
}

function slider() {
    nextSlide();
}
nextSlide();
var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  variableDeg--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', nextSlide);

setInterval(slider, 6000);
