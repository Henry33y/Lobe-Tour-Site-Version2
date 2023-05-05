const hamburgerMenu=document.querySelector('.hamburger-menu');
const mobileNav=document.querySelector('.mobile-nav');
let open=false;
hamburgerMenu.addEventListener('click', ()=>{
    if(!open){
        hamburgerMenu.classList.add('open');
        mobileNav.classList.add('open');
        open=true;
    }
    else{
        hamburgerMenu.classList.remove('open');
        mobileNav.classList.remove('open');
        open=false;
    }
})
