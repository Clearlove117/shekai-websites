
// language toggle and mobile menu + simple lightbox
(function(){
  const defaultLang = localStorage.getItem('site-lang') || 'en';
  function setLang(lang){
    document.querySelectorAll('[data-lang]').forEach(el=>{
      if(el.dataset.lang === lang) el.style.display = '';
      else el.style.display = 'none';
    });
    document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
    localStorage.setItem('site-lang', lang);
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    setLang(defaultLang);
    document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click', ()=>setLang(b.dataset.lang)));
    // mobile menu
    const hb = document.getElementById('hamburger');
    const mnav = document.getElementById('mobile-nav');
    if(hb) hb.addEventListener('click', ()=> { mnav.style.display = mnav.style.display === 'flex' ? 'none' : 'flex'; });
    // lightbox
    document.querySelectorAll('.gallery img').forEach(img=>{
      img.addEventListener('click', ()=>{
        const lb = document.getElementById('lightbox');
        lb.querySelector('img').src = img.src;
        lb.style.display = 'flex';
      });
    });
    const lb = document.getElementById('lightbox');
    if(lb) lb.addEventListener('click', ()=> lb.style.display = 'none');
    // contact form mailto
    const form = document.getElementById('contact-form');
    if(form){
      form.addEventListener('submit', e=>{
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const msg = form.message.value.trim();
        const subject = encodeURIComponent('Inquiry from website');
        const body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+msg);
        window.location.href = 'mailto:1216761177@qq.com?subject='+subject+'&body='+body;
      });
    }
  });
})();
