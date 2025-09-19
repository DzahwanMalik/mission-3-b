function renderHeroBanner() {
  fetch("../data-film/h-film.json")
    .then((res) => res.json())
    .then((data) => {
      // Ambil movie random
      const movie = data[Math.floor(Math.random() * data.length)];

      // Ambil Element Hero
      const container = document.getElementById("movie-trailer");
      const heroContent = document.getElementById("hero-content");

      function render(movie) {
        container.innerHTML = `
          <video
            src="${movie.link}"
            autoplay
            muted
            loop
            playsinline
            class="absolute z-10 top-0 left-0 w-full h-full object-cover"
            id='trailer'
          ></video>
      `;

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
          <span class="relative size-6 outline-2 outline-[var(--text-secondary)] rounded-full cursor-pointer" id="volume-button">
            <span class='absolute top-1/2 left-1/2 -translate-1/2 text-xs'>
              <i class="fa-solid fa-volume-xmark" id='volume-icon'></i>
            </span>
          </span>
        </div>
      `;

      // Set Volume Trailer
      const volumeBtn = document.getElementById('volume-button');
      const volumeIcon = document.getElementById('volume-icon');
      const trailer = document.getElementById('trailer');
      let sound = false;

      volumeBtn.addEventListener('click', () => {
        if(!sound) {
          volumeIcon.classList.remove('fa-volume-xmark');
          volumeIcon.classList.add('fa-volume-high');

          trailer.muted = false;

          sound = true;
        } else {  
          volumeIcon.classList.remove('fa-volume-high');
          volumeIcon.classList.add('fa-volume-xmark');

          trailer.muted = true;

          sound = false;
        }
      });

        // Refresh AOS
        AOS.refreshHard();
      }

      function cycleBanner() {
        const movieRandom = data[Math.floor(Math.random() * data.length)];
        render(movieRandom);

        // Pakai Durasi Dari JSON
        setTimeout(cycleBanner, movieRandom.trailerDuration * 1000);
      }

      // Start Pertama Kali
      cycleBanner();
    })
    .catch((error) => {
      throw error;
    });
}

export default renderHeroBanner;
