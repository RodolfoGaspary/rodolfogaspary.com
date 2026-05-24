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
})();
