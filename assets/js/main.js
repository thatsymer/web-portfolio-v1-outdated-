/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle')
    closeMenu = document.getElementById('nav-close')
//show
    toggleMenu.addEventListener('click', ()=> {
        navMenu.classList.toggle('show')
    })
// Hide 
closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')


function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(c => c.addEventListener('click', linkAction))
/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive) 

function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}

// ========================Dark and Light Theme=============================//
const themeButton = document.getElementById('theme-button')
const darkTheme= ('dark-theme')
const iconTheme= ('bx-sun')

//user previous select
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//get current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

//validate user choice

if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon ==='bx-moon' ? 'add' : 'remove'] (iconTheme)
}

themeButton.addEventListener('click', () => {
    // add or remove the dark icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //Save current user choice
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentTheme())
})