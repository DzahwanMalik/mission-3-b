function swiperNR() {
  fetch("../data-film/v-film.json")
    .then((res) => res.json())
    .then((data) => {
      const slider = document.getElementById("NR-slider");

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
        <div class="relative rounded-xl overflow-hidden shadow-md">
          <img src="${movie.img || "https://via.placeholder.com/600x340"}" 
               alt="${movie.title}" 
               class="w-full min-h-56 max-h-96 object-cover">
        </div>
      `;

        slider.appendChild(slide);

        // Inisialisasi Swiper
        new Swiper(".swiper-4", {
          slidesPerView: 3,
          spaceBetween: 15,
          loop: true,
          autoplay: {
            delay: 5000,
          },
        });
      });
    })
    .catch((err) => console.error("Gagal load film:", err));
}

export default swiperNR;
