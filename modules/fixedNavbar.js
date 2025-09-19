function fixedNavbar() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-[var(--bg-body-primary)]');
    } else {
        navbar.classList.remove('bg-[var(--bg-body-primary)]');
        navbar.classList.add('bg-transparent');
    }
  });
}

export default fixedNavbar;
