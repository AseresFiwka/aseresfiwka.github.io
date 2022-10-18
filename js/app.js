window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

function opacity_none() {
  document.getElementById('loading-mask').style.opacity='0';
}
function display_none() {
  document.getElementById('loading-mask').style.display='none';
}

window.onload=function() {
  setTimeout(opacity_none, 1700);
  setTimeout(display_none, 2700);

}

function keyPress(e) {
  let keyNum;
  if (window.event) {
      keyNum = window.event.keyCode;
  }
  else if (e) {
      keyNum = e.which;
  }
  console.log(keyNum);
}
document.onkeydown = keyPress;
document.onkeydown = function (e) {
  switch (e.keyCode) {
      case 70:
        location.reload()

      default:
          console.log(e.keyCode);
  }
}





