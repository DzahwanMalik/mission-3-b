function showDropdown() {
  const profile = document.getElementById("profile");
  const dropdown = document.getElementById("dropdown");
  const links = document.querySelectorAll(`#dropdown li a`)

  let showed = false;

  profile.addEventListener("click", () => {
    if (!showed) {
      dropdown.classList.remove("-z-10");
      dropdown.classList.remove("-translate-y-5");
      dropdown.classList.remove("opacity-0");

      dropdown.classList.add("z-20");
      dropdown.classList.add("translate-y-0");
      dropdown.classList.add("opacity-100");

      links.forEach(link => {
        link.classList.replace('hidden', 'flex');
      });

      showed = true;
    } else {
      dropdown.classList.remove("z-20");
      dropdown.classList.remove("translate-y-0");
      dropdown.classList.remove("opacity-100");

      dropdown.classList.add("-z-10");
      dropdown.classList.add("-translate-y-5");
      dropdown.classList.add("opacity-0");

      links.forEach(link => {
        setTimeout(() => {
          link.classList.replace('flex', 'hidden');
        }, 300)
      });

      showed = false;
    }
  });
}

export default showDropdown;
