let lenis;

const text = document.querySelector('.hero-text');

const init = () => {

  const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
  });

  lenis.on('scroll', ({ scroll }) => {
    text.style.transform = `translate3D(${-scroll}px, 0, 0)`;
  });

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
};
init();
