var CURRENT_SECTION_INDEX = 0;
let SCROLL_DEBOUNCE = true;

window.addEventListener("wheel", (event) => {

  if (SCROLL_DEBOUNCE) {
    SCROLL_DEBOUNCE = false;
    //debugger
    let hero = document.querySelector('.bred-hero')
    let skills = document.querySelector('.bred-skills')
    let about = document.querySelector('.bred-about')
    let scarlatte = document.querySelector('.bred-scarlatte')
    const allSections = new Array(hero, skills, about, scarlatte)
    console.log(allSections)
    // hero.innerHTML = skills.innerHTML

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
