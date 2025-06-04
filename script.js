const items = document.querySelectorAll('.navList li');
const btnCloseTheme = document.getElementById('btnCloseTheme');
const btnCloseNotice = document.getElementById('btnCloseNotice');
const btnTheme = document.querySelectorAll('.btnTheme');
const theme = document.getElementById('theme');
const notice = document.getElementById('notification');
const btnNotice = document.querySelectorAll('.btnNotice');
const btnNoticeAll = document.getElementById('noticeAll');
const noticeAll = document.getElementById('all');
const btnNoticeMention = document.getElementById('noticeMention');
const noticeMention = document.getElementById('mention');

// Trail Cursor Effect
const cursor = document.getElementById('cursor');
const sprites = [
    'https://cdn.custom-cursor-trails.com//uploads/silver_sparkle_0df6c56a0c.svg',
    'https://cdn.custom-cursor-trails.com//uploads/silver_star_f8a91e8c18.svg',
    'https://cdn.custom-cursor-trails.com//uploads/gold_moon_9fb31c56de.svg',
    'https://cdn.custom-cursor-trails.com//uploads/gold_moon_9fb31c56de.svg',
    'https://cdn.custom-cursor-trails.com//uploads/gold_sparkle_d0719ef46c.svg',
    'https://cdn.custom-cursor-trails.com//uploads/color_star_19669173df.svg',
    'https://cdn.custom-cursor-trails.com//uploads/blue_moon_8e7e27ca87.svg',
    'https://cdn.custom-cursor-trails.com//uploads/blue_star_79c3cfd035.svg',
    'https://cdn.custom-cursor-trails.com//uploads/color_sparkle_24d9090ed7.svg',
    'https://cdn.custom-cursor-trails.com//uploads/blue_sparkle_a0995e3c89.svg'
];
let xPos = 0, yPos = 0, last = 0;
let followerX; let followerY;
let trails = [];

document.addEventListener('mousemove', (event) => {
    const now = performance.now();
    xPos = event.clientX;
    yPos = event.clientY;
    if(now - last > 55){
        createTrail(xPos, yPos);
        last = now;
    }
});

function createTrail(x, y){
    const trail = document.createElement('img');
    const img = sprites[Math.floor(Math.random() * sprites.length)];
    trail.className = 'trail fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30';
    trail.src = img;
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';

    // randomize
    const scale = 0.6 + Math.random()*0.8;
    const vx = (Math.random() - 0.5) * 2;  // -1 → +1 px per frame
    const vy = (Math.random() - 0.5) * 2;
    const life = 600 + Math.random()*800; // ms

    trail.style.setProperty('--scale', scale);
    trail.style.setProperty('--vx', vx + 'px');
    trail.style.setProperty('--vy', vy + 'px');
    trail.style.setProperty('--life', life + 'ms');
  
    cursor.append(trail);

    trails.push({
        element: trail,
        createAt: performance.now()
    });

    // setTimeout(() => {
    //     trail.style.opacity = '0';
    //     setTimeout(() => {
    //         trail.parentNode.removeChild(trail);
    //         trails = trails.filter(t => t.element !== trail);
    //     }, 500);
    // }, 250);
    setTimeout(() => trail.remove(), life);
}

function updatePos(){
    followerX =+ (xPos - followerX) * 0.5;
    followerY =+ (yPos - followerY) * 0.5;

    cursor.style.left = followerX + 'px';
    cursor.style.top = followerY + 'px';

    requestAnimationFrame(updatePos);
}

updatePos();

// Text Animation Effect

const textEffect = document.querySelector('.text-effect');
let career = 'Twitter';
let careerIndex = 0;
let lastTime = 0;
let lastInterval = 400;
let increasing = true;

function updateText(now){
    if(now - lastTime >= lastInterval){
        lastTime = now;
        textEffect.innerHTML = career.slice(0, careerIndex);
        if(increasing){
            careerIndex++;
            if(careerIndex > career.length){
                increasing = false;
                careerIndex = career.length - 1;
            }
        }
        else {
            careerIndex--;
            if(careerIndex < 0){
                increasing = true;
                careerIndex = 1;
            }
        }
    }
    requestAnimationFrame(updateText);
}

updateText();

items.forEach(btn => {
    btn.addEventListener('click', () => {
        items.forEach(i => {
            i.classList.remove('text-blue-400');

            const ic = i.querySelector('i');
            const current = [...ic.classList].find(c => c.startsWith('fi-sr-'));
            if(current)
                ic.classList.replace(current, current.replace('fi-sr-', 'fi-rr-'));
        });

    btn.classList.add('text-blue-400');

    const icon = btn.querySelector('i');
    const oldCls = [...icon.classList].find(c => c.startsWith('fi-rr-'));
    if(oldCls)
        icon.classList.replace(oldCls, oldCls.replace('fi-rr-', 'fi-sr-'));
    });
});

btnTheme.forEach(btn => {
    btn.addEventListener('click', () => {
        theme.classList.remove('hidden')
    });
});

btnCloseTheme.addEventListener('click', () => {
    theme.classList.add('hidden');
});

btnCloseNotice.addEventListener('click', () => {
    notice.classList.add('hidden');
});

btnNotice.forEach(n => {
    n.addEventListener('click', () => {
        notice.classList.remove('hidden');
    });
});

btnNoticeAll.addEventListener('click', () => {
    noticeAll.classList.remove('hidden');
    noticeMention.classList.add('hidden');
    btnNoticeAll.classList.add('border-b-2', 'border-blue-400', 'text-blue-400', 'font-bold');
    btnNoticeMention.classList.remove('border-b-2', 'border-blue-400', 'text-blue-400', 'font-bold');
}
);

btnNoticeMention.addEventListener('click', () => {
    noticeAll.classList.add('hidden');
    noticeMention.classList.remove('hidden');
    btnNoticeAll.classList.remove('border-b-2', 'border-blue-400', 'text-blue-400', 'font-bold');
    btnNoticeMention.classList.add('border-b-2', 'border-blue-400', 'text-blue-400', 'font-bold');
});