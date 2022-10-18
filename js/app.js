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









