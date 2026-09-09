(function () {
  "use strict";

  var list = document.querySelector(".works");
  var filters = Array.prototype.slice.call(document.querySelectorAll(".filter"));
  var works = Array.prototype.slice.call(document.querySelectorAll(".work"));
  var counter = document.querySelector(".result-count");
  var emptyState = document.querySelector(".empty-state");

  if (!list || !filters.length || !works.length) return;

  var singular = {
    escritorio: "app de escritorio",
    todos: "proyecto",
    webapp: "aplicación web",
    android: "app Android",
    datos: "proyecto de datos",
    sitio: "sitio web"
  };

  var plural = {
    escritorio: "apps de escritorio",
    todos: "proyectos",
    webapp: "aplicaciones web",
    android: "apps Android",
    datos: "proyectos de datos",
    sitio: "sitios web"
  };

  function apply(category) {
    var shown = 0;

    works.forEach(function (work) {
      var match = category === "todos" || work.dataset.category === category;
      work.hidden = !match;
      if (match) shown++;
    });

    filters.forEach(function (button) {
      var active = button.dataset.filter === category;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    list.classList.toggle("is-filtered", category !== "todos");

    counter.textContent = shown === 1
      ? "1 " + singular[category]
      : shown + " " + plural[category];

    emptyState.hidden = shown !== 0;

    if (history.replaceState) {
      history.replaceState(
        null,
        "",
        category === "todos" ? location.pathname : location.pathname + "#" + category
      );
    }
  }

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      apply(button.dataset.filter);
    });
  });

  var initial = location.hash.replace("#", "");
  apply(Object.prototype.hasOwnProperty.call(singular, initial) ? initial : "todos");
})();
