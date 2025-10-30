(function(){
  const defaultLang = localStorage.getItem('site-lang')||'en';
  function setLang(lang){
    document.querySelectorAll('[data-lang]').forEach(el=>el.style.display = el.dataset.lang===lang ? '' : 'none');
    document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
    localStorage.setItem('site-lang', lang);
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    setLang(defaultLang);
    document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click', ()=>setLang(b.dataset.lang)));
  });
})();