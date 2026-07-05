const toggleBtns = document.querySelectorAll(".accordion-trigger");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isActive = btn.getAttribute("aria-expanded") === "true";

    toggleBtns.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        closePanel(otherBtn);
      }
    });

    isActive ? closePanel(btn) : openPanel(btn);
  });
});

function openPanel(btn) {
  const content = document.getElementById(btn.getAttribute("aria-controls"));
  btn.setAttribute("aria-expanded", true);
  content.setAttribute("aria-hidden", false);
}

function closePanel(btn) {
  const content = document.getElementById(btn.getAttribute("aria-controls"));
  btn.setAttribute("aria-expanded", false);
  content.setAttribute("aria-hidden", true);
}
