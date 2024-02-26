let lenis;

const text = document.querySelector('.hero-text');
const headerImg = document.querySelector('.header-img');
// const logo = document.querySelector('#nav-logo');
const floatingText = document.querySelector('.floating-box');

const init = () => {

  const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
  });

  lenis.on('scroll', ({ scroll }) => {
    // text.style.transform = `translate3D(${(-scroll*5)}px, 0, 0)`;
    headerImg.style.transform = `translate3D(0, ${(-scroll*4)}px, 0)`;
    // logo.style.transform = `translate3D(${(scroll/5)}px, 0, 0)`;
    floatingText.style.cssText = `transform: translate3D(0, ${(-scroll/3)}px, 0); filter: blur(${(scroll/80)}px);`;
  });

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
};
init();
