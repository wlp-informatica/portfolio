// Recursos interativos do portfólio
document.addEventListener("DOMContentLoaded", () => {
  // Atualiza automaticamente o ano do rodapé.
  document.getElementById("year").textContent = new Date().getFullYear();

  // Anima os elementos quando entram na área visível da tela.
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

  // Preenche as barras de habilidades quando a seção aparece.
  const skillsSection = document.querySelector("#habilidades");
  const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".progress-bar[data-progress]").forEach(bar => {
          bar.style.width = `${bar.dataset.progress}%`;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });
  skillsObserver.observe(skillsSection);

  // Exibe o botão "voltar ao topo" após a rolagem.
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 450);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Fecha o menu móvel após selecionar uma seção.
  document.querySelectorAll("#menuPortfolio .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("menuPortfolio");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
