let LAST_SCROLL_Y = 0

window.addEventListener('scroll', (event) => {

    // get all the section in index.html page
    const allSections = document.getElementsByTagName('section')
    //console.log('all sections ', allSections)

    // get to know if the scroll event is up or down
    const userInteraction = event.currentTarget

    console.log(LAST_SCROLL_Y, userInteraction.pageYOffset)

    if (LAST_SCROLL_Y > userInteraction.pageYOffset) { // i am scrolling up
        console.log('i am scrolling up')
    }
    else if (LAST_SCROLL_Y < userInteraction.pageYOffset) { // im am scrolling down
        console.log('i am scrolling down')
    } else { // i am doing nothing
        LAST_SCROLL_Y = 0
    }

    // set the lAST_SCROLL_Y value
    LAST_SCROLL_Y = userInteraction.pageYOffset

    // const width = document.body.Width
    // const heroSection = document.querySelector('.bred-hero')
    // const bredSlogan = document.querySelector('.bred-slogan')
    // heroSection.classList.add('slide-right')
    //heroSection[0].style.display = 'none'
})