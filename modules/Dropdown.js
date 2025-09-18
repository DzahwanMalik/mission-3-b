function showDropdown() {
  const profile = document.getElementById("profile");
  const dropdown = document.getElementById("dropdown");

  let showed = false;

  profile.addEventListener("click", () => {
    if (!showed) {
      dropdown.classList.remove("-z-10");
      dropdown.classList.remove("-translate-y-5");
      dropdown.classList.remove("opacity-0");

      dropdown.classList.add("z-20");
      dropdown.classList.add("translate-y-0");
      dropdown.classList.add("opacity-100");

      showed = true;
    } else {
      dropdown.classList.remove("z-20");
      dropdown.classList.remove("translate-y-0");
      dropdown.classList.remove("opacity-100");

      dropdown.classList.add("-z-10");
      dropdown.classList.add("-translate-y-5");
      dropdown.classList.add("opacity-0");

      showed = false;
    }
  });
}

export default showDropdown;
