import '../css/style.scss';
import Lenis from '@studio-freight/lenis'

class Main {
  constructor() {
    this.DOM = {};
    this.DOM.anchors = document.querySelectorAll('.anchor');
    this.DOM.pagetop = document.querySelector('.pagetop');

    this.lenis = new Lenis({
      duration: 2.0,
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // direction: 'vertical', // vertical, horizontal
      // gestureDirection: 'vertical', // vertical, horizontal, both
      // smooth: true,
      // mouseMultiplier: 1,
      // smoothTouch: false,
      // touchMultiplier: 2,
      // infinite: false,
    });

    this._addEvent();
    this._init();
  }

  _update(time) {
    this.lenis.raf(time);
    requestAnimationFrame(this._update.bind(this));
  }

  _addEvent() {

    this.DOM.anchors.forEach((anchor)=>{
      anchor.addEventListener('click', (e)=>{
        const target = anchor.hash;
        // this.lenis.scrollTo(target); 
        this.lenis.scrollTo(target, {
          duration: 2.0,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          // easing: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
        }); 
      });
    });

    this.DOM.pagetop.addEventListener('click', (e)=>{
      e.preventDefault();
      this.lenis.scrollTo(0, {
        duration: 2.0,
        // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }); 
    });
  }

  _init() {
    requestAnimationFrame(this._update.bind(this));
  }
}

new Main();


