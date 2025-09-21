function swiperCW() {
  const slider = document.getElementById("CW-slider");
  fetch("../data-film/h-film.json")
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
        slide.className = "swiper-slide max-w-[90%]"; // max width biar film utama lebih fokus

        slide.innerHTML = `
        <div class="relative rounded-xl overflow-hidden shadow-md bg-[var(--bg-secondary)] animate-pulse">
          <img src="${movie.img || "https://via.placeholder.com/600x340"}" 
               alt="${movie.title}" 
               class="aspect-video w-full object-cover blur-2xl"
               loading="lazy">
            <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            ></div>
            <div class="text-white absolute bottom-0 px-6 py-4 w-full flex justify-between items-center>
                <span class="font-medium text-xl w-full">${movie.title}</span>
                <span class="flex gap-1 items-center">
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 11.5133L12.1197 13.9999L11.0263 9.31325L14.6663 6.15992L9.87301 5.74659L7.99967 1.33325L6.12634 5.74659L1.33301 6.15992L4.96634 9.31325L3.87967 13.9999L7.99967 11.5133Z" fill="white"/>
                    </svg>
                  </span>
                  <span>
                    ${movie.rating}
                  </span>
                </span>
            </div>
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
      new Swiper(".swiper-1", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 15,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        // breakpoint responsive
        breakpoints: {
          640: {
            // >= 640px (sm)
            slidesPerView: "auto",
            spaceBetween: 15,
          },
          768: {
            // >= 768px (md)
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            // >= 1024px (lg)
            slidesPerView: 3,
            spaceBetween: 18,
          },
          1280: {
            // >= 1280px (xl)
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });
    })
    .catch((err) => console.error("Gagal load film:", err));
}

export default swiperCW;
