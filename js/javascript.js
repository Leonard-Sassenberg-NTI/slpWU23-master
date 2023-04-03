let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

var splashScreen = document.querySelector('#splash-placement');
var splashBtn = document.querySelector('.Enter');

splashBtn.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },20)
});

var timelineOptions = { repeat: -1, paused: true };
var tl = new TimelineMax(timelineOptions);
tl.fromTo(".Enter", 0.3, {
    x: -1, y: 1
  }, {
    x: 1, y: -1,
    ease: RoughEase.ease.config({
      strength: 8,
      points: 20,
      template: Linear.easeNone,
      randomize: true
    })
  });
tl.fromTo(".Enter", 0.3, {
    x: 1, y: -1
  }, {
    x: 1, y: 1,
    ease: RoughEase.ease.config({
      strength: 8,
      points: 20,
      template: Linear.easeNone,
      randomize: true
    })
  });
tl.fromTo(".Enter", 0.3, {
    x: 1, y: 1
  }, {
    x: -1, y: -1,
    ease: RoughEase.ease.config({
      strength: 8,
      points: 20,
      template: Linear.easeNone,
      randomize: true
    })
  });
tl.fromTo(".Enter", 0.3, {
    x: -1, y: -1
  }, {
    x: -1, y: 1,
    ease: RoughEase.ease.config({
      strength: 8,
      points: 20,
      template: Linear.easeNone,
      randomize: true
    })
  });

$('.Enter').hover(function () {
  tl.resume();
}, function () {
  tl.pause();
});

$('.Enter').click(function () {
  tl.pause();
});