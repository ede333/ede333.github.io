// Transições suaves entre páginas
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.href.includes(window.location.href)) return;
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => window.location.href = link.href, 200);
  });
});
