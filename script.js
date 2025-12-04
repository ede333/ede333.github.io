// Carregar header e footer comuns em todas as páginas
async function loadHeaderAndFooter() {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");

  if (headerEl) {
    try {
      const res = await fetch("partials/header.html");
      headerEl.innerHTML = await res.text();
      initNav(); // só depois de o header existir
    } catch (err) {
      console.error("Erro a carregar header:", err);
    }
  }

  if (footerEl) {
    try {
      const res = await fetch("partials/footer.html");
      footerEl.innerHTML = await res.text();
    } catch (err) {
      console.error("Erro a carregar footer:", err);
    }
  }
}

// Ativar link atual + transição suave entre páginas
function initNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    // Marca o link ativo
    if (href === currentPage) {
      link.classList.add("active");
    }

    // Transição suave (fade-out) ao mudar de página
    link.addEventListener("click", e => {
      if (href === currentPage) return; // se já estás na mesma página, não faz nada
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 200);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHeaderAndFooter();
});


