function swiperCW() {
  fetch("../data-film/h-film.json")
    .then((res) => res.json())
    .then((data) => {
      const slider = document.getElementById("CW-slider");

     data.forEach((movie) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide max-w-[90%]"; // max width biar film utama lebih fokus

        slide.innerHTML = `
        <div class="relative rounded-xl overflow-hidden shadow-md">
          <img src="${movie.img || "https://via.placeholder.com/600x340"}" 
               alt="${movie.title}" 
               class="aspect-video w-full object-cover">
            <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            ></div>
            <span class="text-white absolute bottom-0 p-5">
                <h2 class="font-medium text-xl">${movie.title}</h2>
            <span>
        </div>
      `;

        slider.appendChild(slide);
      });

      // Inisialisasi Swiper
      new Swiper('.swiper-1', {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 15,
        loop: true,
      });
    })
    .catch((err) => console.error("Gagal load film:", err));
}

export default swiperCW;
