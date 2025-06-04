document.addEventListener('DOMContentLoaded', () => {
    const themeIcon = document.getElementById('theme-icon');
    
    const searchBtn = document.querySelector('.search');
    const navBar = document.querySelector('.nav-bar');
    const navBarMobile = document.getElementById('nav-bar-mobile');
    const btnBack = document.getElementById('btn-back');
    const screenOverlay = document.querySelector('.screen-overlay');
    btnBack.addEventListener('click', setEnableSection);

    searchBtn.addEventListener('click', setDisableSection);

    function setDisableSection(){
        navBar.classList.add('d-none');
        navBarMobile.classList.remove('d-none');
    }

    function setEnableSection(){
        navBar.classList.remove('d-none');
        navBarMobile.classList.add('d-none');
    }

    const menuBtn = document.querySelectorAll('.menu-list');
    const slideBar = document.querySelector('.slider-bar');
    menuBtn.forEach(btn => {
        btn.addEventListener('click', menuList);
    });
    
    function menuList(){
        slideBar.classList.toggle('d-none');
        screenOverlay.classList.toggle('d-none');
    }

    const toggleBtn = document.getElementById('theme-toggle');
    toggleBtn.addEventListener('click', themeBackground);

    if(localStorage.getItem('dark-mode') === 'active')
        enableDarkMode();
    else
        disableDarkMode();

    function themeBackground(){
        let darkMode = localStorage.getItem('dark-mode');
        if(darkMode !== 'active')
            enableDarkMode();
        else
            disableDarkMode();
    }

    function enableDarkMode(){
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'active');
        themeIcon.classList.add('bi-moon');
        themeIcon.classList.remove('bi-sun');
    }
        
    function disableDarkMode(){
        document.body.classList.remove('dark-mode');
        localStorage.removeItem('dark-mode');
        themeIcon.classList.add('bi-sun');
        themeIcon.classList.remove('bi-moon');
    }
});