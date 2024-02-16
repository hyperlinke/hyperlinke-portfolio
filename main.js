let lenis;

const text = document.querySelector('.hero-text');
const headerImg = document.querySelector('.header-img');

const init = () => {

  const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
  });

  lenis.on('scroll', ({ scroll }) => {
    text.style.transform = `translate3D(${(-scroll*5)}px, 0, 0)`;
    headerImg.style.transform = `translate3D(0, ${(-scroll*4)}px, 0)`;
  });

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
};
init();
