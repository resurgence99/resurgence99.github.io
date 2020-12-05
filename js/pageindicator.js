var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var page1 = document.querySelector('.page-one');
var page2 = document.querySelector('.page-two');
var page3 = document.querySelector('.page-three');
var dot1 = document.querySelector('.dot-1');
var dot2 = document.querySelector('.dot-2');
var dot3 = document.querySelector('.dot-3');

  
  if (isInViewport(page1)) {
    dot1.classList.add('dots-active');
  }

document.addEventListener('scroll', function() {
  
  if (isInViewport(page1)) {
    dot1.classList.add('dots-active');
  } else {
    dot1.classList.remove('dots-active');
  }
  
  if (isInViewport(page2)) {
    dot2.classList.add('dots-active');
  } else {
    dot2.classList.remove('dots-active');
  }
  
  if (isInViewport(page3)) {
    dot3.classList.add('dots-active');
  } else {
    dot3.classList.remove('dots-active');
  }
  
});