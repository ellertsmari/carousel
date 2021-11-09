import {useState, useEffect} from 'react';


function App() {
  const [ apartments, setApartments] = useState([]);

  useEffect(()=>{
    const getData = async ()=>{
      const r = await fetch("https://api-rent.myigloo.is/api/2019-10/listings/");
      const json = await r.json();
      console.log(json.items);
      setApartments(json.items);
    }
    getData();
  },[]);
  const hasClass = (el, className) => {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
  }
  const suspendAnimation = (e)=>{
    //start the animation
  }
  const startAnimation = (e)=>{
    //stop the animation
  }

  const focus = (e, toggleAnimation)=>{
    if (!hasClass(e.target, 'slide')) {
      toggleAnimation();
    }
  }
  /*
  need to use this to announce to the screen reader what region is displayed
  if (announceItem) {
    carousel.querySelector('.liveregion').textContent = 'Item ' + (new_current + 1) + ' of ' + slides.length;
  }

  */
  return (
    <div>
      <section 
        class="carousel" 
        aria-labelledby="carouselheading"
        onMouseEnter={suspendAnimation}
        onMouseLeave={startAnimation}
        onFocusIn={e=>{focus(e, suspendAnimation)}}
        onFocusOut={e=>{focus(e, startAnimation)}}
      >
        <h3 id="carouselheading" class="visuallyhidden">Recent news</h3>
        <ul>
          <li class="slide">…</li>
          <li class="slide">…</li>
          <li class="slide">…</li>
          <li>
            <button type="button" class="btn-prev">
              <img src="img/chevron-left.png" alt="Previous Item"/>
            </button>
          </li>
          <li>
            <button type="button" class="btn-next">
              <img src="img/chevron-right.png" alt="Next Item"/>
            </button>
          </li>
         
        </ul>
        <div aria-live='polite' aria-atomic='true' className='liveregion visuallyhidden'></div>
        <ul class="slidenav">
          <li tabIndex={-1}>
            <button data-action="start">
              <span class="visuallyhidden">Start Animation </span>▶️
            </button>
          </li>
          <li tabIndex={-1}>
            <button class="current" data-slide="0">
              <span class="visuallyhidden">News</span> 1
              <span class="visuallyhidden">(Current Slide)</span>
            </button>
          </li>
          <li tabIndex={-1}>
            <button data-slide="1">
              <span class="visuallyhidden">News</span> 2
            </button>
          </li>
          <li tabIndex={-1}>
            <button data-slide="2">
              <span class="visuallyhidden">News</span> 3
            </button>
          </li>
          <li tabIndex={-1}>
          <button data-action="stop">
            <span class="visuallyhidden">Stop Animation </span>⏹️
            </button>
          </li>

        </ul>

      </section>
    </div>
  );
}

export default App;
