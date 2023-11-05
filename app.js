import { disablePageScroll, clearQueueScrollLocks } from 'scroll-lock';

disablePageScroll();
disablePageScroll();
disablePageScroll();
disablePageScroll();

enablePageScroll();
console.log(getScrollState()); //false

clearQueueScrollLocks();
enablePageScroll();
console.log(getScrollState()); //true
var imgBlock = document.querySelector(".imgBlock");

var dot1 = document.querySelector(".dot1");
var dot2 = document.querySelector(".dot2");
var dot3 = document.querySelector(".dot3");

dot1.onclick = function(){
    imgBlock.src = "assests/plate1.png"
}

dot2.onclick = function(){
    imgBlock.src = "assests/plate2.png"
}

dot3.onclick = function(){
    imgBlock.src = "assests/plate3.png"
}

const menuIcon = document.querySelector(".toggle");

const mobileMenu = document.querySelector(".navMenu");

menuIcon.onclick = function(){
    if(mobileMenu.style.display != "block"){
        mobileMenu.style.display = "block"
    }
    else{
        mobileMenu.style.display = "none"
    }
}
function disableScroll() {
    // Get the current page scroll position in the vertical direction
   scrollTop =
       window.pageYOffset || document.documentElement.scrollTop;}
       const scrollContainer = document.querySelector('main');

scrollContainer.addEventListener('wheel', (evt) => {
  // The magic happens here.
});

function disable(){
    document.querySelector('.scrollable').classList.add('disable-scroll');
  }
  
  function enable(){
    document.querySelector('.scrollable').classList.remove('disable-scroll');
  }
  
  document.querySelector('#prevent').addEventListener('click', disable);
  document.querySelector('#allow').addEventListener('click', enable);