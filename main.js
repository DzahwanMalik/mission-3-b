import fixedNavbar from "./modules/fixedNavbar.js";
import renderHeroBanner from "./modules/HeroBanner.js";
import showDropdown from "./modules/Dropdown.js";
import swiperCW from "./modules/ContinueWathcing.js";
import swiperTR from "./modules/TopRating.js";
import swiperTF from "./modules/TrendingFilm.js";
import swiperNR from "./modules/NewRelease.js";
import AOSinit from "./modules/AOS.js";



window.addEventListener("DOMContentLoaded", () => {
  // AOS
  AOSinit();

  // Fixed Navbar
  fixedNavbar();
  
  // Rendering Hero Banner
  renderHeroBanner();

  // Dropdown
  showDropdown();

  // Swiper
  swiperCW();
  swiperTR();
  swiperTF();
  swiperNR();
});
