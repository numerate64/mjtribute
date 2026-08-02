const songs = [
  {
    day: 1,
    title: "Don't Stop 'Til You Get Enough",
    album: "Off the Wall",
    year: "1979",
    image: "assets/don-t-stop-til-you-get-enough.jpg",
    tribute: "The solo-era spark that opened a new chapter.",
  },
  {
    day: 2,
    title: "Rock with You",
    album: "Off the Wall",
    year: "1979",
    image: "assets/rock-with-you.jpg",
    tribute: "Effortless groove, warmth, and late-disco elegance.",
  },
  {
    day: 3,
    title: "Off the Wall",
    album: "Off the Wall",
    year: "1979",
    image: "assets/off-the-wall.jpg",
    tribute: "A declaration of freedom and style.",
  },
  {
    day: 4,
    title: "She's Out of My Life",
    album: "Off the Wall",
    year: "1979",
    image: "assets/she-s-out-of-my-life.jpg",
    tribute: "A vulnerable ballad moment.",
  },
  {
    day: 5,
    title: "Wanna Be Startin' Somethin'",
    album: "Thriller",
    year: "1982",
    image: "assets/wanna-be-startin-somethin.jpg",
    tribute: "Rhythm, momentum, and pop electricity.",
  },
  {
    day: 6,
    title: "Thriller",
    album: "Thriller",
    year: "1982",
    image: "assets/thriller.jpg",
    tribute: "A song and video that changed music culture.",
  },
  {
    day: 7,
    title: "Beat It",
    album: "Thriller",
    year: "1982",
    image: "assets/beat-it.jpg",
    tribute: "Rock edge meets pop precision.",
  },
  {
    day: 8,
    title: "Billie Jean",
    album: "Thriller",
    year: "1982",
    image: "assets/billie-jean.jpg",
    tribute: "Iconic bassline, silhouette, and performance legend.",
  },
  {
    day: 9,
    title: "Human Nature",
    album: "Thriller",
    year: "1982",
    image: "assets/human-nature.jpg",
    tribute: "Soft city-night beauty.",
  },
  {
    day: 10,
    title: "P.Y.T. (Pretty Young Thing)",
    album: "Thriller",
    year: "1982",
    image: "assets/p-y-t-pretty-young-thing.jpg",
    tribute: "Bright pop joy and dance-floor charm.",
  },
  {
    day: 11,
    title: "The Girl Is Mine",
    album: "Thriller",
    year: "1982",
    image: "assets/the-girl-is-mine.jpg",
    tribute: "A playful duet from a historic album.",
  },
  {
    day: 12,
    title: "Bad",
    album: "Bad",
    year: "1987",
    image: "assets/bad.jpg",
    tribute: "Sharp attitude and a new visual era.",
  },
  {
    day: 13,
    title: "The Way You Make Me Feel",
    album: "Bad",
    year: "1987",
    image: "assets/the-way-you-make-me-feel.jpg",
    tribute: "Swagger, romance, and street-corner energy.",
  },
  {
    day: 14,
    title: "Man in the Mirror",
    album: "Bad",
    year: "1987",
    image: "assets/man-in-the-mirror.jpg",
    tribute: "A call for reflection and change.",
  },
  {
    day: 15,
    title: "Smooth Criminal",
    album: "Bad",
    year: "1987",
    image: "assets/smooth-criminal.jpg",
    tribute: "Precision, mystery, and impossible motion.",
  },
  {
    day: 16,
    title: "Dirty Diana",
    album: "Bad",
    year: "1987",
    image: "assets/dirty-diana.jpg",
    tribute: "A darker rock-theater showcase.",
  },
  {
    day: 17,
    title: "Another Part of Me",
    album: "Bad",
    year: "1987",
    image: "assets/another-part-of-me.jpg",
    tribute: "Global-tour energy and uplift.",
  },
  {
    day: 18,
    title: "Leave Me Alone",
    album: "Bad",
    year: "1987",
    image: "assets/leave-me-alone.jpg",
    tribute: "Defiant, surreal, and visually inventive.",
  },
  {
    day: 19,
    title: "Black or White",
    album: "Dangerous",
    year: "1991",
    image: "assets/black-or-white.jpg",
    tribute: "A global pop statement.",
  },
  {
    day: 20,
    title: "Remember the Time",
    album: "Dangerous",
    year: "1991",
    image: "assets/remember-the-time.jpg",
    tribute: "Ancient-world glamour and new-jack swing.",
  },
  {
    day: 21,
    title: "In the Closet",
    album: "Dangerous",
    year: "1991",
    image: "assets/in-the-closet.jpg",
    tribute: "Minimal, sleek, and rhythmic.",
  },
  {
    day: 22,
    title: "Jam",
    album: "Dangerous",
    year: "1991",
    image: "assets/jam.jpg",
    tribute: "Hard-hitting movement and arena energy.",
  },
  {
    day: 23,
    title: "Heal the World",
    album: "Dangerous",
    year: "1991",
    image: "assets/heal-the-world.jpg",
    tribute: "Hopeful humanitarian pop.",
  },
  {
    day: 24,
    title: "Who Is It",
    album: "Dangerous",
    year: "1991",
    image: "assets/who-is-it.jpg",
    tribute: "Mystery, longing, and cinematic atmosphere.",
  },
  {
    day: 25,
    title: "Will You Be There",
    album: "Dangerous",
    year: "1991",
    image: "assets/will-you-be-there.jpg",
    tribute: "Gospel scale and emotional lift.",
  },
  {
    day: 26,
    title: "Scream",
    album: "HIStory",
    year: "1995",
    image: "assets/scream.jpg",
    tribute: "Futuristic intensity and visual force.",
  },
  {
    day: 27,
    title: "They Don't Care About Us",
    album: "HIStory",
    year: "1995",
    image: "assets/they-don-t-care-about-us.jpg",
    tribute: "Percussion, protest, and urgency.",
  },
  {
    day: 28,
    title: "Earth Song",
    album: "HIStory",
    year: "1995",
    image: "assets/earth-song.jpg",
    tribute: "A sweeping environmental lament.",
  },
  {
    day: 29,
    title: "You Are Not Alone",
    album: "HIStory",
    year: "1995",
    image: "assets/you-are-not-alone.jpg",
    tribute: "Born this day in 1958, Michael Jackson's voice and vision still echo worldwide.",
  },
  {
    day: 30,
    title: "Blood on the Dance Floor",
    album: "Blood on the Dance Floor",
    year: "1997",
    image: "assets/blood-on-the-dance-floor.jpg",
    tribute: "Club pulse and sharp choreography.",
  },
  {
    day: 31,
    title: "You Rock My World",
    album: "Invincible",
    year: "2001",
    image: "assets/you-rock-my-world.jpg",
    tribute: "A late-era groove with classic MJ polish.",
  },
];

const elements = {
  dateLabel: document.querySelector("#dateLabel"),
  title: document.querySelector("#songTitle"),
  album: document.querySelector("#albumLine"),
  tribute: document.querySelector("#tributeLine"),
  art: document.querySelector("#songArt"),
  caption: document.querySelector("#artCaption"),
  grid: document.querySelector("#calendarGrid"),
  todayButton: document.querySelector("#todayButton"),
  themeToggle: document.querySelector("#themeToggle"),
  localTime: document.querySelector("#localTime"),
};

const todayDay = Math.min(Math.max(new Date().getDate(), 1), 31);
let selectedDay = todayDay;

function currentTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function applyTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  try {
    localStorage.setItem("mjtribute-theme", nextTheme);
  } catch {
    // Theme still changes for the current page view when storage is unavailable.
  }

  const light = nextTheme === "light";
  elements.themeToggle.setAttribute("aria-pressed", String(light));
  elements.themeToggle.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
  elements.themeToggle.querySelector(".theme-icon").textContent = light ? "☀" : "☾";
}

function updateLocalTime() {
  const now = new Date();
  elements.localTime.dateTime = now.toISOString();
  elements.localTime.textContent = `Local time ${now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  })}`;
}

function renderDay(day) {
  const song = songs[day - 1] || songs[0];
  selectedDay = song.day;

  elements.dateLabel.textContent = `August ${song.day}`;
  elements.title.textContent = song.title;
  elements.album.textContent = `${song.album} | ${song.year}`;
  elements.tribute.textContent = song.tribute;
  elements.art.src = song.image;
  elements.art.alt = `${song.album} artwork for ${song.title}`;
  elements.caption.textContent = `${song.album} era artwork`;

  document.querySelectorAll(".day-button").forEach((button) => {
    const buttonDay = Number(button.dataset.day);
    button.classList.toggle("is-selected", buttonDay === selectedDay);
    button.setAttribute("aria-pressed", String(buttonDay === selectedDay));
  });
}

function buildCalendar() {
  const fragment = document.createDocumentFragment();

  songs.forEach((song) => {
    const button = document.createElement("button");
    button.className = "day-button";
    button.type = "button";
    button.textContent = String(song.day);
    button.dataset.day = String(song.day);
    button.setAttribute("aria-label", `Show August ${song.day}: ${song.title}`);
    button.classList.toggle("is-today", song.day === todayDay);
    button.addEventListener("click", () => renderDay(song.day));
    fragment.appendChild(button);
  });

  elements.grid.appendChild(fragment);
}

elements.todayButton.addEventListener("click", () => renderDay(todayDay));
elements.themeToggle.addEventListener("click", () => {
  applyTheme(currentTheme() === "light" ? "dark" : "light");
});

buildCalendar();
applyTheme(currentTheme());
renderDay(todayDay);
updateLocalTime();
setInterval(updateLocalTime, 1000);
