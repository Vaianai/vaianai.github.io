(function () {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.getElementById("mobile-menu");
  const menuLabel = menuBtn ? menuBtn.querySelector(".menu-label") : null;
  const body = document.body;
  let lastFocus = null;

  function setMenu(open) {
    if (!menu || !menuBtn) return;
    menu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
    body.classList.toggle("menu-open", open);
    if (menuLabel) menuLabel.textContent = open ? "Close" : "Menu";

    if (open) {
      lastFocus = document.activeElement;
      const first = menu.querySelector("a");
      if (first) first.focus();
    } else if (lastFocus) {
      lastFocus.focus();
      lastFocus = null;
    }
  }

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      setMenu(menu.hidden);
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !menu.hidden) setMenu(false);
    });

    const desktop = window.matchMedia("(min-width: 1001px)");
    desktop.addEventListener("change", function (event) {
      if (event.matches) setMenu(false);
    });
  }

  const links = Array.from(document.querySelectorAll(".side-link"));
  const sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  const mobileLinks = Array.from(document.querySelectorAll(".mobile-menu a"));

  function updateActive() {
    if (!sections.length) return;
    const marker = window.innerHeight * 0.4;
    let current = sections[0].id;

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= marker) current = section.id;
    }

    const hash = "#" + current;
    links.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === hash);
    });
    mobileLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === hash);
    });
  }

  let ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateActive();
        ticking = false;
      });
    },
    { passive: true }
  );

  window.addEventListener("resize", updateActive);
  updateActive();
})();
