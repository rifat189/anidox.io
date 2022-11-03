window.addEventListener('scroll', (e)=>{
    const nav = document.querySelector('.headerNav');
    const toTopBtn = document.querySelector('.scrollToTop');
    
    if (window.pageYOffset> 400) {
        nav.classList.add("navShadow");
        toTopBtn.style.bottom = '20px';
    } else {
        nav.classList.remove("navShadow");
        toTopBtn.style.bottom = '-100%';


    }

});