/* Tiny site JS — keep it minimal.
   FAQ uses native <details>, no JS needed. */

(function () {
  // Mobile nav toggle
  var nav = document.querySelector(".gd-nav");
  var toggle = document.querySelector(".gd-nav__toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a link inside it is clicked
    nav.querySelectorAll(".gd-nav__items a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); });
    });
  }

  // Active nav item is marked server-side via data-page on <body> +
  // a matching data-target on each nav <li>. Light JS to sync.
  var page = document.body.getAttribute("data-page");
  if (page) {
    document.querySelectorAll(".gd-nav__items li[data-target]").forEach(function (li) {
      if (li.getAttribute("data-target") === page) li.classList.add("is-active");
    });
  }

  // Cookie consent bar
  var COOKIE_KEY = "gd_cookie_ok";
  if (!localStorage.getItem(COOKIE_KEY)) {
    // Resolve privacy policy URL — check if we're inside blog/ subfolder
    var inBlog = window.location.pathname.indexOf("/blog/") > -1;
    var policyUrl = inBlog ? "../politica-de-privacidad.html" : "politica-de-privacidad.html";

    var bar = document.createElement("div");
    bar.className = "gd-cookie";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Aviso de cookies");

    var text = document.createElement("span");
    text.textContent = "Este sitio usa cookies de Google Analytics para medir el tráfico de forma anónima. ";
    var link = document.createElement("a");
    link.href = policyUrl;
    link.textContent = "Ver política de privacidad";
    text.appendChild(link);
    text.appendChild(document.createTextNode("."));

    var btn = document.createElement("button");
    btn.className = "gd-cookie__btn";
    btn.type = "button";
    btn.textContent = "Entendido";

    bar.appendChild(text);
    bar.appendChild(btn);
    document.body.appendChild(bar);

    btn.addEventListener("click", function () {
      localStorage.setItem(COOKIE_KEY, "1");
      bar.setAttribute("hidden", "");
    });
  }
})();
