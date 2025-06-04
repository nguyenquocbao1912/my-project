const navIconMenu = document.querySelectorAll('.btn-icon-mobile');

navIconMenu.forEach(btn => {
    btn.addEventListener('click', () => {
        navIconMenu.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

const navIconHeader = document.querySelectorAll('.nav-item');

navIconHeader.forEach(btn => {
    btn.addEventListener('click', () => {
        navIconHeader.forEach(b => {
            const icon = b.querySelector('i');
            icon.classList.add('fa-light');
            icon.classList.remove('fa-solid');
            b.classList.remove('active');
        });
        btn.classList.add('active');
        const icon = btn.querySelector('i');
        icon.classList.remove('fa-light');
        icon.classList.add('fa-solid');
    });
});