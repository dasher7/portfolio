window.addEventListener('scroll', (event) => {
    console.log('i did scroll')
    const width = document.body.Width
    const heroSection = document.querySelector('.bred-hero')
    const bredSlogan = document.querySelector('.bred-slogan')
    heroSection.classList.add('slide-right')
    //heroSection[0].style.display = 'none'
})