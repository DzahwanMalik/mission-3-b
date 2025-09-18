function renderHeroBanner() {
  fetch("../data-film/h-film.json")
    .then((res) => res.json())
    .then((data) => {
      // Ambil movie random
      const movie = data[Math.floor(Math.random() * data.length)];

      // Ambil Element Hero
      const hero = document.getElementById("hero");
      const heroContent = document.getElementById("hero-content");

      function render(movie) {
        // Set Background Image
        hero.style.backgroundImage = `url(${movie.img})`;

        // Set Isi Content
        heroContent.innerHTML = `
        <div class="flex flex-col gap-1" data-aos='fade-right' data-aos-duration='3000'>
          <h1 class='text-xl font-bold'>${movie.title}</h1>
          <p class='text-xs font-medium mb-5'>${movie.description}</p>
        </div>
        <div class="flex justify-between items-center text-sm" data-aos='fade-right' data-aos-duration='3000'>
          <span class="flex gap-2">
            <button class="py-1 px-3 font-medium rounded-4xl bg-[var(--bg-primary)]">Mulai</button>
            <button class="py-1 px-3 font-medium rounded-4xl bg-[var(--bg-secondary)] flex gap-1 items-center"><i class="fa-solid fa-circle-info"></i>Selengkapnya</button>
          </span>
          <span class="relative size-6 outline-2 outline-[var(--text-secondary)] rounded-full">
            <span class='absolute top-1/2 left-1/2 -translate-1/2 text-xs'>
              <i class="fa-solid fa-volume-high"></i>
            </span>
          </span>
        </div>
      `;

        // Refresh AOS
        AOS.refreshHard();
      }

      render(movie);

      setInterval(() => {
        const repeatRandom = data[Math.floor(Math.random() * data.length)];
        render(repeatRandom);
      }, 10000);
    })
    .catch((error) => {
      throw error;
    });
}

export default renderHeroBanner;
