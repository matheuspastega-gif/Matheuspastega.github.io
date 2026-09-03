const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.desktop-nav');
if(menu){menu.addEventListener('click',()=>{nav.classList.toggle('open');});}

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.closest('figure')?.remove();}));
