(function(){
  function setLang(lang){
    document.documentElement.lang = (lang === 'en') ? 'en' : 'de';
    localStorage.setItem('vc_lang', lang);
    document.querySelectorAll('[data-de]').forEach(function(el){
      var de = el.getAttribute('data-de') || '';
      var en = el.getAttribute('data-en') || de;
      el.textContent = (lang === 'en') ? en : de;
    });
    var deBtn=document.getElementById('langDE'), enBtn=document.getElementById('langEN');
    if(deBtn&&enBtn){
      deBtn.classList.toggle('active', lang !== 'en');
      enBtn.classList.toggle('active', lang === 'en');
    }
  }
  var saved = localStorage.getItem('vc_lang') || 'de';
  var deBtn=document.getElementById('langDE'), enBtn=document.getElementById('langEN');
  if(deBtn) deBtn.addEventListener('click', function(){ setLang('de'); });
  if(enBtn) enBtn.addEventListener('click', function(){ setLang('en'); });
  setLang(saved);
})();