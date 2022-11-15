const helperInput = document.querySelector('#helper-input')
const item = document.querySelectorAll('.card-box')
console.log('массив', item)
const slidesCount = item.length;
let slideCounter = 0;
let bool = 0
const qr = gsap.timeline()

function test() {
  document.querySelector('footer').scrollIntoView({block: "end"})
}


const init = () => {
  window.onload = function() {
    // console.log('размер', window.innerHeight)
    if(window.innerWidth >= 1280) {
      document.querySelector('.hero__img').classList.remove('d-none')
      qr.from('.img-js', 1, {scale: 4, opacity:0, duration: 2, y: "0", x: "0"})
    }
    qr.from('.hero__title', {opacity: 0, y: "-50", duration: 0.7, stagger: .5 })
    qr.from('.hero__el', {opacity: 0, y: 25, duration: 0.7})
    qr.from('.hero__el--arrow', {height: 0, y: 25, duration: 1 ,ease: "bounce.out"})

    window.addEventListener('scroll', function() {
      if(pageYOffset > 2000) {
        qr.to('.elem-a10', {y: -50, duration: 0.7 })
        qr.to('.elem-a9', {y: -80, duration: 0.7 })
        qr.to('.elem-a8', {y: -50, duration: 0.7 })  
      }
      if(pageYOffset > 2400) {
        qr.from('.elem-a10', {y: 0 })
        qr.from('.elem-a9', {y: 0 })
        qr.from('.elem-a8', {y: 0})   
      }
    });
  };

  const showNextSlide = () => {
    console.log('размер', window.innerHeight)
  };
  
  const showPrevSlide = () => {

  };



  if(window.innerWidth >= 1280) {
    window.addEventListener('wheel', (e) => {

        let delta = -e.deltaY;

        if(delta > 0) {
            if(helperInput.value == '1') {
                helperInput.value = 0;
                showPrevSlide();
                
                setTimeout(() => {
                    helperInput.value = 1;
                }, 2500);
            }
        } else {
            if(helperInput.value == '1') {
                helperInput.value = 0;
                showNextSlide();
                setTimeout(() => {
                    helperInput.value = 1;
                }, 2500);
            }
        }
    });
  }


}

init()

