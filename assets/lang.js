(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "en").toLowerCase().indexOf("de") === 0 ? "de" : "en");

  function apply(l) {
    root.setAttribute("data-lang", l);
    root.setAttribute("lang", l);
    var buttons = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", buttons[i].getAttribute("data-set-lang") === l ? "true" : "false");
    }
  }

  apply(lang);

  document.addEventListener("DOMContentLoaded", function () {
    apply(lang);
    document.addEventListener("click", function (ev) {
      var btn = ev.target.closest && ev.target.closest("[data-set-lang]");
      if (!btn) return;
      lang = btn.getAttribute("data-set-lang");
      try { localStorage.setItem("lang", lang); } catch (e) {}
      apply(lang);
    });
  });
})();
