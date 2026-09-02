/* ============================================================
   Corrente Labs — Homepage
   Traduções PT/EN + pequenos efeitos de interface.
   Sem dependências externas, tal como os restantes projetos.
============================================================ */
(function(){
  "use strict";

  var STORAGE_KEY = "correnteLabsHomepageLang";

  function getInitialLang(){
    try{
      var saved = localStorage.getItem(STORAGE_KEY);
      if(saved === "pt" || saved === "en") return saved;
    }catch(e){}
    var nav = (navigator.language || "pt").toLowerCase();
    return nav.indexOf("pt") === 0 ? "pt" : "en";
  }

  function applyLang(lang){
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-pt]").forEach(function(el){
      var text = el.getAttribute(lang === "pt" ? "data-pt" : "data-en");
      if(text !== null) el.innerHTML = text;
    });
    document.querySelectorAll(".lang-toggle button").forEach(function(btn){
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(e){}
  }

  document.addEventListener("DOMContentLoaded", function(){
    var lang = getInitialLang();
    applyLang(lang);

    document.querySelectorAll(".lang-toggle button").forEach(function(btn){
      btn.addEventListener("click", function(){
        applyLang(btn.getAttribute("data-lang"));
      });
    });

    // reveal-on-scroll, discreto — respeita prefers-reduced-motion via CSS (duração ~0)
    var revealEls = document.querySelectorAll(".reveal");
    if("IntersectionObserver" in window && revealEls.length){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      }, {threshold:0.12});
      revealEls.forEach(function(el){ io.observe(el); });
    }else{
      revealEls.forEach(function(el){ el.classList.add("in"); });
    }
  });
})();
