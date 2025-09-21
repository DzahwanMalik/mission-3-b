function swiperTR() {
  const slider = document.getElementById("TR-slider");
  fetch("../data-film/v-film.json")
    .then((res) => res.json())
    .then((data) => {
      // Acak Array
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
      }

      const randomMovies = shuffleArray(data);

      randomMovies.forEach((movie) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide"; // max width biar film utama lebih fokus

        slide.innerHTML = `
        <div class="relative rounded-xl h-56 lg:h-96 overflow-hidden shadow-md bg-[var(--bg-secondary)] animate-pulse">
          <img src="${movie.img || "https://via.placeholder.com/600x340"}" 
               alt="${movie.title}" 
               class="w-full h-full object-cover blur-2xl"
               loading="lazy">
        </div>
      `;

        slider.appendChild(slide);

        // Hapus Overlay Img Saat Ter-Load
        const img = slide.querySelector("img");
        img.addEventListener("load", () => {
          const overlay = img.parentElement;
          overlay.classList.remove("animate-pulse");
          overlay.classList.remove("bg-[var(--bg-secondary)]");
          img.classList.remove("blur-2xl");
        });
      });

      // Inisialisasi Swiper
      new Swiper(".swiper-2", {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        // breakpoint responsive
        breakpoints: {
          640: {
            // >= 640px (sm)
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            // >= 768px (md)
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1024: {
            // >= 1024px (lg)
            slidesPerView: 5,
            spaceBetween: 18,
          },
          1280: {
            // >= 1280px (xl)
            slidesPerView: 6,
            spaceBetween: 20,
          },
        },
      });
    })
    .catch((err) => console.error("Gagal load film:", err));
}

export default swiperTR;
