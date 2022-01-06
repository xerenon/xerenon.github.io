function skill() {
    $('body,html').animate({scrollTop: 910}, 800); 
}

function port() {
    $('body,html').animate({scrollTop: 2000}, 800); 
}

function other() {
    $('body,html').animate({scrollTop: 3700}, 800); 
}

function job() {
    $('body,html').animate({scrollTop: 4500}, 800); 
}

const text = baffle(".text__glitch");
text.set({
    characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
    speed: 30
});

text.start();
text.reveal(4000);

window.onscroll = function() {
    scrollanimaionP1(),
    scrollanimaionP2(),
    scrollanimaionP3(),
    scrollanimaionP4(),
    scrollanimaionP5(),
    scrollanimaionP6(),
    scrollanimaionP7(),
    scrollanimaionP8(),
    scrollanimaionP9(),
    scrollanimaionP10(),
    scrollanimaion11(),
    scrollanimaion12(),
    scrollanimaion13() 
};



function scrollanimaionP1() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
       document.querySelector('.Experiences').style.animation = 'movein 0.5s';
       document.querySelector('.Experiences').style.opacity = '1';
    };
}



function scrollanimaionP2() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
       document.querySelector('.titleport').style.animation = 'movein 0.5s';
       document.querySelector('.titleport').style.opacity = '1';
    };
}


function scrollanimaionP3() {
    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
       var x, i;
       x = document.querySelectorAll(".pos1");
       for (i = 0; i < x.length; i++) {
         x[i].style.animation = 'movein 0.5s';
         x[i].style.opacity = '1';
       }
    };
}

function scrollanimaionP4() {
    if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
       var x, i;
       x = document.querySelectorAll(".pos2");
       for (i = 0; i < x.length; i++) {
         x[i].style.animation = 'movein 0.5s';
         x[i].style.opacity = '1';
       }
    };
}

function scrollanimaionP5() {
    if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
       var x, i;
       x = document.querySelectorAll(".pos3");
       for (i = 0; i < x.length; i++) {
         x[i].style.animation = 'movein 0.5s';
         x[i].style.opacity = '1';
       }
    };
}



function scrollanimaionP6() {
    if (document.body.scrollTop > 3300 || document.documentElement.scrollTop > 3300) {
       document.querySelector('.ohter-skill').style.animation = 'movein 0.5s';
       document.querySelector('.ohter-skill').style.opacity = '1';
    };
}



function scrollanimaionP7() {
    if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
       var x, i;
       x = document.querySelectorAll(".job1");
       for (i = 0; i < x.length; i++) {
         x[i].style.animation = 'movein 0.5s';
         x[i].style.opacity = '1';
       }
    };
}


function scrollanimaionP8() {
    if (document.body.scrollTop > 4300 || document.documentElement.scrollTop > 4300) {
       var x, i;
       x = document.querySelectorAll(".job2");
       for (i = 0; i < x.length; i++) {
         x[i].style.animation = 'movein 0.5s';
         x[i].style.opacity = '1';
       }
    };
}


function scrollanimaionP9() {
    if (document.body.scrollTop > 4600 || document.documentElement.scrollTop > 4600) {
       var x, i;
       x = document.querySelectorAll(".job3");
       for (i = 0; i < x.length; i++) {
         x[i].style.animation = 'movein 0.5s';
         x[i].style.opacity = '1';
       }
    };
}

function scrollanimaionP10() {
    if (document.body.scrollTop > 3900 || document.documentElement.scrollTop > 3900) {
       document.querySelector('.titlejob').style.animation = 'movein 0.5s';
       document.querySelector('.titlejob').style.opacity = '1';
    };
}

function scrollanimaion11() {
    if (document.body.scrollTop > 4800 || document.documentElement.scrollTop > 4800) {
       var x, i;
       x = document.querySelectorAll(".job4");
       for (i = 0; i < x.length; i++) {
         x[i].style.animation = 'movein 0.5s';
         x[i].style.opacity = '1';
       }
    };
}

function scrollanimaion12() {
    if (document.body.scrollTop > 5000 || document.documentElement.scrollTop > 5000) {
       var x, i;
       x = document.querySelectorAll(".job5");
       for (i = 0; i < x.length; i++) {
         x[i].style.animation = 'movein 0.5s';
         x[i].style.opacity = '1';
       }
    };
}

function scrollanimaion13() {
    if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
       var x, i;
       x = document.querySelectorAll(".pos4");
       for (i = 0; i < x.length; i++) {
         x[i].style.animation = 'movein 0.5s';
         x[i].style.opacity = '1';
       }
    };
}

$(document).ready(function(){
    const SELECTOR = {
        DEMO: document.querySelector('.js-demo'),
      }
      
      const CLASSES = {
        ANIMATED: `is-animated`
      }
      
    SELECTOR.DEMO.classList.add(CLASSES.ANIMATED);
    
    const timer = setInterval(() => {
        SELECTOR.DEMO.classList.remove(CLASSES.ANIMATED);
        clearInterval(timer)
    }, 700)
});
