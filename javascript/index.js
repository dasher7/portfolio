let LAST_SCROLL_Y = 0;
let CURRENT_SECTION_INDEX = 0;
let SCROLL_DEBOUNCE = true;

window.addEventListener("scroll", (event) => {
  if (SCROLL_DEBOUNCE) {
    SCROLL_DEBOUNCE = false;

    console.log("triggered", LAST_SCROLL_Y);

    const allSections = document.getElementsByTagName("section"); // get all the section in index.html page
    const userInteraction = event.currentTarget; // get to know if the scroll event is up or down

    if (LAST_SCROLL_Y > userInteraction.pageYOffset) { // i am scrolling up
        console.log('i am scrolling up')
        allSections[CURRENT_SECTION_INDEX].style.display = "none";
        allSections[CURRENT_SECTION_INDEX - 1].scrollIntoView();
        CURRENT_SECTION_INDEX = CURRENT_SECTION_INDEX - 1;
    } else if (LAST_SCROLL_Y < userInteraction.pageYOffset) { // im am scrolling down
        console.log('i am scrolling down')
        allSections[CURRENT_SECTION_INDEX].style.display = "none";
        allSections[CURRENT_SECTION_INDEX + 1].scrollIntoView();
        CURRENT_SECTION_INDEX = CURRENT_SECTION_INDEX + 1;
    } else { // i am doing nothing
        console.log('i am scrolling none')
        LAST_SCROLL_Y = 0;
    }

    // set the lAST_SCROLL_Y value
    LAST_SCROLL_Y = userInteraction.pageYOffset;

    // change debounce value
    setTimeout(() => {
      SCROLL_DEBOUNCE = true;
    }, 200);

  }
});
