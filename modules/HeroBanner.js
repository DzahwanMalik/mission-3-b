const heroContent = document.getElementById("hero-content");
const ytOverlay = document.getElementById("yt-overlay");
let player;
let sound = false;

function renderHeroBanner() {
  fetch("../data-film/h-film.json")
    .then((res) => res.json())
    .then((data) => {
      function render(movie) {
        const url = movie.link;
        const parts = url.split("/");
        const videoID = parts[parts.length - 1];

        // Set Sound nya Jadi False
        sound = false;
        if(player && player.mute) {
          player.mute();
          player.loadVideoById(videoID)
        }

        // Set Isi Content
        heroContent.innerHTML = `
        <div class="flex flex-col gap-1 lg:gap-4 lg:w-1/2" data-aos='fade-right' data-aos-duration='3000'>
          <h1 class='text-xl lg:text-5xl font-bold'>${movie.title}</h1>
          <p class='text-xs lg:text-xl font-light mb-5'>${movie.description}</p>
        </div>
        <div class="flex justify-between items-center text-sm w-full lg:text-xl" data-aos='fade-right' data-aos-duration='3000'>
          <span class="flex gap-2">
            <button class="py-1 px-3 font-medium rounded-4xl bg-[var(--bg-primary)] lg:px-5 lg:py-2">Mulai</button>
            <button class="py-1 px-3 font-medium rounded-4xl bg-[var(--bg-secondary)] flex gap-1 items-center lg:px-5 lg:py-2"><i class="fa-solid fa-circle-info"></i>Selengkapnya</button>
          </span>
          <span class="relative size-6 outline-2 outline-[var(--text-secondary)] rounded-full cursor-pointer" id="volume-button">
            <span class='absolute top-1/2 left-1/2 -translate-1/2 text-xs'>
              <i class="fa-solid fa-volume-xmark" id='volume-icon'></i>
            </span>
          </span>
        </div>
      `;

        // Set Banner Loading Overlay
        ytOverlay.style.backgroundImage = `url(${movie.img})`;

        if (!player) {
          player = new YT.Player("yt-player", {
            videoId: videoID,
            playerVars: {
              autoplay: 1,
              mute: 1,
              controls: 0,
              loop: 1,
              playlist: videoID,
              modestbranding: 1,
            },
            events: {
              onReady: (event) => {
                event.target.playVideo();
              },
              onStateChange: (event) => {
                if (event.data === YT.PlayerState.PLAYING) {
                  ytOverlay.classList.add("hidden");
                }
              },
            },
          });
        } else {
          player.loadVideoById(videoID);
          player.mute();
        }

        // Set Volume Trailer
        const volumeBtn = document.getElementById("volume-button");
        const volumeIcon = document.getElementById("volume-icon");

        if (volumeBtn) {
          volumeBtn.onclick = () => {
            sound = !sound;
            if (sound) {
              volumeIcon.classList.replace("fa-volume-xmark", "fa-volume-high");

              player.unMute();
            } else {
              volumeIcon.classList.replace("fa-volume-high", "fa-volume-xmark");

              player.mute();
            }
          };
        }

        // Refresh AOS
        AOS.refreshHard();
      }

      function cycleBanner() {
        const movieRandom = data[Math.floor(Math.random() * data.length)];
        render(movieRandom);

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
