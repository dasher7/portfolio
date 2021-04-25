var CURRENT_SECTION_INDEX = 0;
let SCROLL_DEBOUNCE = true;
let INITIAL_TOUCH_Y = 0

/**
 * START section for scroll/wheel event on desktop
 */
window.addEventListener("wheel", (event) => {

  if (SCROLL_DEBOUNCE) {

    SCROLL_DEBOUNCE = false;

    let hero = document.querySelector('.bred-hero')
    let skills = document.querySelector('.bred-skills')
    let about = document.querySelector('.bred-about')
    let scarlatte = document.querySelector('.bred-scarlatte')
    const allSections = new Array(hero, skills, about, scarlatte)

    if (event.deltaY < 0) { // scrolling up

      if ( CURRENT_SECTION_INDEX === 0 ) return
      if (CURRENT_SECTION_INDEX - 1 <= allSections.length) {
        hero.innerHTML = allSections[CURRENT_SECTION_INDEX - 1].innerHTML;
      }
      CURRENT_SECTION_INDEX !== 0 && (CURRENT_SECTION_INDEX--)

    } else if (event.deltaY > 0) { // scrolling down
      
      if ( CURRENT_SECTION_INDEX === allSections.length ) return
      if (CURRENT_SECTION_INDEX + 1 !== allSections.length) {
        hero.innerHTML = allSections[CURRENT_SECTION_INDEX + 1].innerHTML;
      }
      CURRENT_SECTION_INDEX !== allSections.length && (CURRENT_SECTION_INDEX++)
      
    }
    
    // change debounce value
    setTimeout(() => {
      SCROLL_DEBOUNCE = true;
    }, 500);

 }
});

/**
 * START section to scroll (touch) on mobile
 */
window.addEventListener("touchstart", (event) => {
  INITIAL_TOUCH_Y = event.changedTouches[0].screenY
})

window.addEventListener("touchmove", (event) => {

  let hero = document.querySelector('.bred-hero')
  let skills = document.querySelector('.bred-skills')
  let about = document.querySelector('.bred-about')
  let scarlatte = document.querySelector('.bred-scarlatte')
  const allSections = new Array(hero, skills, about, scarlatte)
  const actualTouch = event.changedTouches[0].screenY

  if (SCROLL_DEBOUNCE) {

    SCROLL_DEBOUNCE = false;

    if (actualTouch - INITIAL_TOUCH_Y < 0) { // scrolling up


      if ( CURRENT_SECTION_INDEX === allSections.length ) return
      if (CURRENT_SECTION_INDEX + 1 !== allSections.length) {
        hero.innerHTML = allSections[CURRENT_SECTION_INDEX + 1].innerHTML;
      }
      CURRENT_SECTION_INDEX !== allSections.length && (CURRENT_SECTION_INDEX++)

    } else { // scrolling down
      
      if ( CURRENT_SECTION_INDEX === 0 ) return
      if (CURRENT_SECTION_INDEX - 1 <= allSections.length) {
        hero.innerHTML = allSections[CURRENT_SECTION_INDEX - 1].innerHTML;
      }
      CURRENT_SECTION_INDEX !== 0 && (CURRENT_SECTION_INDEX--)

    }

    // change debounce value
    setTimeout(() => {
      SCROLL_DEBOUNCE = true;
    }, 500);

  }
})
