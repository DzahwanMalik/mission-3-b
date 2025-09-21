function fixedNavbar() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.replace("bg-transparent", "bg-[var(--bg-body-primary)]");
      navbar.classList.replace("shadow-none", "shadow");
    } else {
      navbar.classList.replace("bg-[var(--bg-body-primary)]", "bg-transparent");
      navbar.classList.replace("shadow", "shadow-none");
    }
  });
}

export default fixedNavbar;
