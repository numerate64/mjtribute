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


// Expanded from Wikipedia's recorded-song lists for Michael Jackson and the Jackson 5 / The Jacksons.
const yearRoundSongs = [
  { title: "2 Bad", artist: "Michael Jackson", album: "HIStory: Past, Present and Future, Book I", year: "1995" },
  { title: "2000 Watts", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "2300 Jackson Street", artist: "Michael Jackson", album: "2300 Jackson Street", year: "1989" },
  { title: "A Brand New Day", artist: "Michael Jackson", album: "The Wiz", year: "1978" },
  { title: "A Place with No Name", artist: "Michael Jackson", album: "Xscape", year: "2014" },
  { title: "Ain't No Sunshine", artist: "Michael Jackson", album: "Got to Be There", year: "1972" },
  { title: "Al Capone", artist: "Michael Jackson", album: "Bad 25", year: "2012" },
  { title: "All in Your Name", artist: "Michael Jackson", album: "Non-album single", year: "2011" },
  { title: "All the Things You Are", artist: "Michael Jackson", album: "Music & Me", year: "1973" },
  { title: "Baby Be Mine", artist: "Michael Jackson", album: "Thriller", year: "1982" },
  { title: "Be a Lion", artist: "Michael Jackson", album: "The Wiz", year: "1978" },
  { title: "Beautiful Girl", artist: "Michael Jackson", album: "The Ultimate Collection", year: "2004" },
  { title: "Behind the Mask", artist: "Michael Jackson", album: "Michael", year: "2010" },
  { title: "Ben", artist: "Michael Jackson", album: "Ben", year: "1972" },
  { title: "Best of Joy", artist: "Michael Jackson", album: "Michael", year: "2010" },
  { title: "Blue Gangsta", artist: "Michael Jackson", album: "Xscape", year: "2014" },
  { title: "Break of Dawn", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "Burn This Disco Out", artist: "Michael Jackson", album: "Off the Wall", year: "1979" },
  { title: "Butterflies", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "Call on Me", artist: "Michael Jackson", album: "Farewell My Summer Love", year: "1984" },
  { title: "Can't Get Outta the Rain", artist: "Michael Jackson", album: "B-side of The Girl Is Mine", year: "1982" },
  { title: "Can't Let Her Get Away", artist: "Michael Jackson", album: "Dangerous", year: "1991" },
  { title: "Carousel", artist: "Michael Jackson", album: "Thriller (Special Edition)", year: "2001" },
  { title: "Centipede", artist: "Michael Jackson", album: "Centipede", year: "1984" },
  { title: "Cheater", artist: "Michael Jackson", album: "The Ultimate Collection", year: "2004" },
  { title: "Chicago", artist: "Michael Jackson", album: "Xscape", year: "2014" },
  { title: "Childhood", artist: "Michael Jackson", album: "HIStory: Past, Present and Future, Book I", year: "1995" },
  { title: "Cinderella Stay Awhile", artist: "Michael Jackson", album: "Forever, Michael", year: "1975" },
  { title: "Come Together", artist: "Michael Jackson", album: "HIStory: Past, Present and Future, Book I", year: "1995" },
  { title: "Cry", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "D.S.", artist: "Michael Jackson", album: "HIStory: Past, Present and Future, Book I", year: "1995" },
  { title: "Dangerous", artist: "Michael Jackson", album: "Dangerous", year: "1991" },
  { title: "Dapper-Dan", artist: "Michael Jackson", album: "Forever, Michael", year: "1975" },
  { title: "Dear Michael", artist: "Michael Jackson", album: "Forever, Michael", year: "1975" },
  { title: "Do You Know Where Your Children Are", artist: "Michael Jackson", album: "Xscape", year: "2014" },
  { title: "Doggin' Around", artist: "Michael Jackson", album: "Music & Me", year: "1973" },
  { title: "Don't Be Messin' 'Round", artist: "Michael Jackson", album: "Bad 25", year: "2012" },
  { title: "Don't Let It Get You Down", artist: "Michael Jackson", album: "Farewell My Summer Love", year: "1984" },
  { title: "Don't Matter to Me", artist: "Michael Jackson", album: "Scorpion", year: "2018" },
  { title: "Don't Walk Away", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "Ease On down the Road", artist: "Michael Jackson", album: "The Wiz", year: "1978" },
  { title: "Eaten Alive", artist: "Michael Jackson", album: "Eaten Alive", year: "1985" },
  { title: "Euphoria", artist: "Michael Jackson", album: "Music & Me", year: "1973" },
  { title: "Everybody's Somebody's Fool", artist: "Michael Jackson", album: "Ben", year: "1972" },
  { title: "Fall Again", artist: "Michael Jackson", album: "The Ultimate Collection", year: "2004" },
  { title: "Farewell My Summer Love", artist: "Michael Jackson", album: "Farewell My Summer Love", year: "1984" },
  { title: "Fly Away", artist: "Michael Jackson", album: "Bad (Special Edition)", year: "2001" },
  { title: "For All Time", artist: "Michael Jackson", album: "Thriller 25", year: "2008" },
  { title: "Free", artist: "Michael Jackson", album: "Bad 25", year: "2012" },
  { title: "Get It", artist: "Michael Jackson", album: "Characters", year: "1987" },
  { title: "Get on the Floor", artist: "Michael Jackson", album: "Off the Wall", year: "1979" },
  { title: "Ghosts", artist: "Michael Jackson", album: "Blood on the Dance Floor: HIStory in the Mix", year: "1997" },
  { title: "Girl Don't Take Your Love from Me", artist: "Michael Jackson", album: "Got to Be There", year: "1972" },
  { title: "Girl You're So Together", artist: "Michael Jackson", album: "Farewell My Summer Love", year: "1984" },
  { title: "Girlfriend", artist: "Michael Jackson", album: "Off the Wall", year: "1979" },
  { title: "Give In to Me", artist: "Michael Jackson", album: "Dangerous", year: "1991" },
  { title: "Gone Too Soon", artist: "Michael Jackson", album: "Dangerous", year: "1991" },
  { title: "Got the Hots", artist: "Michael Jackson", album: "Thriller 25 (Japanese Edition)", year: "2008" },
  { title: "Got to Be There", artist: "Michael Jackson", album: "Got to Be There", year: "1972" },
  { title: "Greatest Show on Earth", artist: "Michael Jackson", album: "Ben", year: "1972" },
  { title: "Happy", artist: "Michael Jackson", album: "Music & Me", year: "1973" },
  { title: "Heartbreaker", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "Heaven Can Wait", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "Here I Am (Come and Take Me)", artist: "Michael Jackson", album: "Farewell My Summer Love", year: "1984" },
  { title: "HIStory", artist: "Michael Jackson", album: "HIStory: Past, Present and Future, Book I", year: "1995" },
  { title: "Hold My Hand", artist: "Michael Jackson", album: "Michael", year: "2010" },
  { title: "Hollywood Tonight", artist: "Michael Jackson", album: "Michael", year: "2010" },
  { title: "I Can't Help It", artist: "Michael Jackson", album: "Off the Wall", year: "1979" },
  { title: "(I Can't Make It) Another Day", artist: "Michael Jackson", album: "Michael", year: "2010" },
  { title: "I Just Can't Stop Loving You", artist: "Michael Jackson", album: "Bad", year: "1987" },
  { title: "(I Like) The Way You Love Me", artist: "Michael Jackson", album: "Michael", year: "2010" },
  { title: "I Wanna Be Where You Are", artist: "Michael Jackson", album: "Got to Be There", year: "1972" },
  { title: "If'n I Was God", artist: "Michael Jackson", album: "Looking Back to Yesterday", year: "1986" },
  { title: "I'll Come Home to You", artist: "Michael Jackson", album: "Forever, Michael", year: "1975" },
  { title: "I'm in Love Again", artist: "Michael Jackson", album: "Love Lives Forever", year: "1980" },
  { title: "I'm So Blue", artist: "Michael Jackson", album: "Bad 25", year: "2012" },
  { title: "In Our Small Way", artist: "Michael Jackson", album: "Got to Be There", year: "1972" },
  { title: "In the Back", artist: "Michael Jackson", album: "The Ultimate Collection", year: "2004" },
  { title: "Invincible", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "Is It Scary", artist: "Michael Jackson", album: "Blood on the Dance Floor: HIStory in the Mix", year: "1997" },
  { title: "It's the Falling in Love", artist: "Michael Jackson", album: "Off the Wall", year: "1979" },
  { title: "Je Ne Veux Pas la Fin de Nous", artist: "Michael Jackson", album: "Bad 25", year: "2012" },
  { title: "Johnny Raven", artist: "Michael Jackson", album: "Music & Me", year: "1973" },
  { title: "Just a Little Bit of You", artist: "Michael Jackson", album: "Forever, Michael", year: "1975" },
  { title: "Just Good Friends", artist: "Michael Jackson", album: "Bad", year: "1987" },
  { title: "Keep the Faith", artist: "Michael Jackson", album: "Dangerous", year: "1991" },
  { title: "Liberian Girl", artist: "Michael Jackson", album: "Bad", year: "1987" },
  { title: "Little Christmas Tree", artist: "Michael Jackson", album: "A Motown Christmas", year: "1973" },
  { title: "Little Susie", artist: "Michael Jackson", album: "HIStory: Past, Present and Future, Book I", year: "1995" },
  { title: "Lonely Teardrops", artist: "Michael Jackson", album: "Looking Back to Yesterday", year: "1986" },
  { title: "Love Is Here and Now You're Gone", artist: "Michael Jackson", album: "Got to Be There", year: "1972" },
  { title: "Love Never Felt So Good", artist: "Michael Jackson", album: "Xscape", year: "2014" },
  { title: "Love's Gone Bad", artist: "Michael Jackson", album: "Looking Back to Yesterday", year: "1986" },
  { title: "Loving You", artist: "Michael Jackson", album: "Xscape", year: "2014" },
  { title: "Maria (You Were the Only One)", artist: "Michael Jackson", album: "Got to Be There", year: "1972" },
  { title: "Melodie", artist: "Michael Jackson", album: "Farewell My Summer Love", year: "1984" },
  { title: "Mind Is the Magic", artist: "Michael Jackson", album: "Dreams & Illusions", year: "1995" },
  { title: "Money", artist: "Michael Jackson", album: "HIStory: Past, Present and Future, Book I", year: "1995" },
  { title: "Monkey Business", artist: "Michael Jackson", album: "The Ultimate Collection", year: "2004" },
  { title: "Morning Glow", artist: "Michael Jackson", album: "Music & Me", year: "1973" },
  { title: "Morphine", artist: "Michael Jackson", album: "Blood on the Dance Floor: HIStory in the Mix", year: "1997" },
  { title: "Much Too Soon", artist: "Michael Jackson", album: "Michael", year: "2010" },
  { title: "Music and Me", artist: "Michael Jackson", album: "Music & Me", year: "1973" },
  { title: "My Girl", artist: "Michael Jackson", album: "Ben", year: "1972" },
  { title: "Night Time Lover", artist: "Michael Jackson", album: "La Toya Jackson", year: "1980" },
  { title: "On the Line", artist: "Michael Jackson", album: "The Ultimate Collection", year: "1997" },
  { title: "One Day in Your Life", artist: "Michael Jackson", album: "Forever, Michael", year: "1975" },
  { title: "One More Chance", artist: "Michael Jackson", album: "Number Ones", year: "2003" },
  { title: "People Make the World Go 'Round", artist: "Michael Jackson", album: "Ben", year: "1972" },
  { title: "Planet Earth", artist: "Michael Jackson", album: "This Is It", year: "2009" },
  { title: "Price of Fame", artist: "Michael Jackson", album: "Bad 25", year: "2012" },
  { title: "Privacy", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "Rockin' Robin", artist: "Michael Jackson", album: "Got to Be There", year: "1972" },
  { title: "Save Me", artist: "Michael Jackson", album: "Old Crest on a New Wave", year: "1980" },
  { title: "Say Say Say", artist: "Michael Jackson", album: "Pipes of Peace", year: "1983" },
  { title: "Scared of the Moon", artist: "Michael Jackson", album: "The Ultimate Collection", year: "2004" },
  { title: "She Drives Me Wild", artist: "Michael Jackson", album: "Dangerous", year: "1991" },
  { title: "She's Trouble", artist: "Michael Jackson", album: "Thriller 40", year: "2022" },
  { title: "Shoo-Be-Doo-Be-Doo-Da-Day", artist: "Michael Jackson", album: "Ben", year: "1972" },
  { title: "Shout", artist: "Michael Jackson", album: "B-side of Cry", year: "2001" },
  { title: "Slave to the Rhythm", artist: "Michael Jackson", album: "Xscape", year: "2014" },
  { title: "Smile", artist: "Michael Jackson", album: "HIStory: Past, Present and Future, Book I", year: "1995" },
  { title: "Somebody's Watching Me", artist: "Michael Jackson", album: "Somebody's Watching Me", year: "1984" },
  { title: "Someone in the Dark", artist: "Michael Jackson", album: "E.T. the Extra-Terrestrial", year: "1982" },
  { title: "Someone Put Your Hand Out", artist: "Michael Jackson", album: "The Ultimate Collection", year: "2004" },
  { title: "Song Groove (a.k.a. Abortion Papers)", artist: "Michael Jackson", album: "Bad 25", year: "2012" },
  { title: "Speechless", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "Speed Demon", artist: "Michael Jackson", album: "Bad", year: "1987" },
  { title: "Stranger in Moscow", artist: "Michael Jackson", album: "HIStory: Past, Present and Future, Book I", year: "1995" },
  { title: "Starlight", artist: "Michael Jackson", album: "Thriller 40", year: "2022" },
  { title: "Streetwalker", artist: "Michael Jackson", album: "Bad (Special Edition)", year: "2001" },
  { title: "Sunset Driver", artist: "Michael Jackson", album: "The Ultimate Collection", year: "2004" },
  { title: "Superfly Sister", artist: "Michael Jackson", album: "Blood on the Dance Floor: HIStory in the Mix", year: "1997" },
  { title: "Tabloid Junkie", artist: "Michael Jackson", album: "HIStory: Past, Present and Future, Book I", year: "1995" },
  { title: "Take Me Back", artist: "Michael Jackson", album: "Forever, Michael", year: "1975" },
  { title: "Tell Me I'm Not Dreamin' (Too Good to Be True)", artist: "Michael Jackson", album: "Dynamite", year: "1984" },
  { title: "That's What Love Is Made Of", artist: "Michael Jackson", album: "Looking Back to Yesterday", year: "1986" },
  { title: "The Lady in My Life", artist: "Michael Jackson", album: "Thriller", year: "1982" },
  { title: "The Lost Children", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "The Man", artist: "Michael Jackson", album: "Pipes of Peace", year: "1983" },
  { title: "The Toy", artist: "Michael Jackson", album: "Thriller 40", year: "2022" },
  { title: "There Must Be More to Life Than This", artist: "Michael Jackson", album: "Queen Forever", year: "2014" },
  { title: "This Is It", artist: "Michael Jackson", album: "This Is It", year: "2009" },
  { title: "This Time Around", artist: "Michael Jackson", album: "HIStory: Past, Present and Future, Book I", year: "1995" },
  { title: "Threatened", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "To Make My Father Proud", artist: "Michael Jackson", album: "Farewell My Summer Love", year: "1984" },
  { title: "Todo Mi Amor Eres T\u00fa", artist: "Michael Jackson", album: "Bad (Special Edition)", year: "2001" },
  { title: "Todo Para Ti", artist: "Michael Jackson", album: "Non-album single", year: "2001" },
  { title: "Too Young", artist: "Michael Jackson", album: "Music & Me", year: "1973" },
  { title: "Touch the One You Love", artist: "Michael Jackson", album: "Farewell My Summer Love", year: "1984" },
  { title: "Twenty-Five Miles", artist: "Michael Jackson", album: "The Original Soul of Michael Jackson", year: "1987" },
  { title: "Unbreakable", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "Up Again", artist: "Michael Jackson", album: "Music & Me", year: "1973" },
  { title: "We Are Here to Change the World", artist: "Michael Jackson", album: "The Ultimate Collection", year: "2004" },
  { title: "We Are the World", artist: "Michael Jackson", album: "We Are the World", year: "1985" },
  { title: "We're Almost There", artist: "Michael Jackson", album: "Forever, Michael", year: "1975" },
  { title: "We've Got a Good Thing Going", artist: "Michael Jackson", album: "Ben", year: "1972" },
  { title: "We've Got Forever", artist: "Michael Jackson", album: "Forever, Michael", year: "1975" },
  { title: "We've Had Enough", artist: "Michael Jackson", album: "The Ultimate Collection", year: "2004" },
  { title: "What a Lovely Way to Go", artist: "Michael Jackson", album: "Thriller 40", year: "2022" },
  { title: "What Goes Around Comes Around", artist: "Michael Jackson", album: "Ben", year: "1972" },
  { title: "What More Can I Give", artist: "Michael Jackson", album: "Non-album single", year: "2001" },
  { title: "Whatever Happens", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "Whatzupwitu", artist: "Michael Jackson", album: "Love's Alright", year: "1993" },
  { title: "When I Come of Age", artist: "Michael Jackson", album: "Looking Back to Yesterday", year: "1986" },
  { title: "Who Do You Know", artist: "Michael Jackson", album: "Thriller 40", year: "2022" },
  { title: "Who's Lookin' for a Lover", artist: "Michael Jackson", album: "Looking Back to Yesterday", year: "1986" },
  { title: "Why", artist: "Michael Jackson", album: "Brotherhood", year: "1995" },
  { title: "Why You Wanna Trip on Me", artist: "Michael Jackson", album: "Dangerous", year: "1991" },
  { title: "Wings of My Love", artist: "Michael Jackson", album: "Got to Be There", year: "1972" },
  { title: "With a Child's Heart", artist: "Michael Jackson", album: "Music & Me", year: "1973" },
  { title: "Workin' Day and Night", artist: "Michael Jackson", album: "Off the Wall", year: "1979" },
  { title: "Xscape", artist: "Michael Jackson", album: "Xscape", year: "2014" },
  { title: "You Are My Life", artist: "Michael Jackson", album: "Invincible", year: "2001" },
  { title: "You Are There", artist: "Michael Jackson", album: "Forever, Michael", year: "1975" },
  { title: "You Can Cry on My Shoulder", artist: "Michael Jackson", album: "Ben", year: "1972" },
  { title: "You Can't Win", artist: "Michael Jackson", album: "The Wiz", year: "1978" },
  { title: "You've Got a Friend", artist: "Michael Jackson", album: "Got to Be There", year: "1972" },
  { title: "You've Really Got a Hold on Me", artist: "Michael Jackson", album: "Farewell My Summer Love", year: "1984" },
  { title: "All Eyez on Me", artist: "Michael Jackson", album: "All Eyez on Me", year: "2002" },
  { title: "All I Do", artist: "Michael Jackson", album: "Hotter than July", year: "1980" },
  { title: "Alright Now", artist: "Michael Jackson", album: "Ralph Tresvant", year: "1990" },
  { title: "Children's Holiday", artist: "Michael Jackson", album: "Non-album single", year: "1998" },
  { title: "Do the Bartman", artist: "Michael Jackson", album: "The Simpsons Sing the Blues", year: "1990" },
  { title: "Don't Let a Woman (Make a Fool Out of You)", artist: "Michael Jackson", album: "Synapse Gap (Mundo Total)", year: "1982" },
  { title: "Don't Stand Another Chance", artist: "Michael Jackson", album: "Dream Street", year: "1984" },
  { title: "Girls, Girls, Girls, Pt. 2", artist: "Michael Jackson", album: "The Blueprint", year: "2001" },
  { title: "Goin' Back to Alabama", artist: "Michael Jackson", album: "Share Your Love", year: "1981" },
  { title: "I Need You", artist: "Michael Jackson", album: "Brotherhood", year: "1995" },
  { title: "It's Not Worth It", artist: "Michael Jackson", album: "Full Moon", year: "2002" },
  { title: "Joy", artist: "Michael Jackson", album: "Blackstreet", year: "1994" },
  { title: "Just Friends", artist: "Michael Jackson", album: "Sometimes Late at Night", year: "1981" },
  { title: "Low", artist: "Michael Jackson", album: "Raise Vibration", year: "2018" },
  { title: "Muscles", artist: "Michael Jackson", album: "Silk Electric", year: "1982" },
  { title: "Papa Was a Rollin' Stone", artist: "Michael Jackson", album: "Wolf", year: "1982" },
  { title: "People of the World", artist: "Michael Jackson", album: "Non-album single", year: "1999" },
  { title: "So Why", artist: "Michael Jackson", album: "Wolf", year: "1982" },
  { title: "State of Independence", artist: "Michael Jackson", album: "Donna Summer", year: "1982" },
  { title: "The Dude", artist: "Michael Jackson", album: "The Dude", year: "1981" },
  { title: "This Had to Be", artist: "Michael Jackson", album: "Light Up the Night", year: "1980" },
  { title: "To Satisfy You", artist: "Michael Jackson", album: "Music for the New World", year: "1992" },
  { title: "What's Your Game?", artist: "Michael Jackson", album: "Non-album single", year: "1974" },
  { title: "Who's Right, Who's Wrong", artist: "Michael Jackson", album: "Keep the Fire", year: "1979" },
  { title: "Yeah", artist: "Michael Jackson", album: "Love's Alright", year: "1993" },
  { title: "You're the One", artist: "Michael Jackson", album: "Say You Love Me", year: "1985" },
  { title: "2-4-6-8", artist: "Jackson 5 / The Jacksons", album: "ABC" },
  { title: "16 Candles", artist: "Jackson 5 / The Jacksons", album: "Maybe Tomorrow" },
  { title: "A Change Is Gonna Come", artist: "Jackson 5 / The Jacksons", album: "Single / archival release" },
  { title: "A Fool for You", artist: "Jackson 5 / The Jacksons", album: "Soulsation!" },
  { title: "ABC", artist: "Jackson 5 / The Jacksons", album: "ABC" },
  { title: "After You Leave Girl", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "Ain't Nothing Like the Real Thing", artist: "Jackson 5 / The Jacksons", album: "Lookin' Through the Windows" },
  { title: "Ain't That Peculiar", artist: "Jackson 5 / The Jacksons", album: "In Japan!" },
  { title: "All I Do Is Think of You", artist: "Jackson 5 / The Jacksons", album: "Moving Violation" },
  { title: "All Night Dancin'", artist: "Jackson 5 / The Jacksons", album: "Destiny" },
  { title: "Ask the Lonely", artist: "Jackson 5 / The Jacksons", album: "Soulsation!" },
  { title: "Baby, You Don't Have to Go", artist: "Jackson 5 / The Jacksons", album: "Single / archival release" },
  { title: "Be Not Always", artist: "Jackson 5 / The Jacksons", album: "Victory" },
  { title: "Big Boy", artist: "Jackson 5 / The Jacksons", album: "Single / archival release" },
  { title: "Blame It on the Boogie", artist: "Jackson 5 / The Jacksons", album: "Destiny" },
  { title: "Bless His Soul", artist: "Jackson 5 / The Jacksons", album: "Destiny" },
  { title: "Blues Away", artist: "Jackson 5 / The Jacksons", album: "The Jacksons" },
  { title: "Body", artist: "Jackson 5 / The Jacksons", album: "Victory" },
  { title: "Body Language (Do the Love Dance)", artist: "Jackson 5 / The Jacksons", album: "Moving Violation" },
  { title: "Born to Love You", artist: "Jackson 5 / The Jacksons", album: "Diana Ross Presents The Jackson 5" },
  { title: "Boys and Girls, We Are The Jackson Five", artist: "Jackson 5 / The Jacksons", album: "Single / archival release" },
  { title: "Brand New Thing", artist: "Jackson 5 / The Jacksons", album: "Live at the Forum" },
  { title: "Breezy", artist: "Jackson 5 / The Jacksons", album: "Moving Violation" },
  { title: "Bridge over Troubled Water", artist: "Jackson 5 / The Jacksons", album: "Third Album" },
  { title: "Buttercup", artist: "Jackson 5 / The Jacksons", album: "I Want You Back! Unreleased Masters" },
  { title: "Call of the Wild", artist: "Jackson 5 / The Jacksons", album: "Moving Violation" },
  { title: "Can I See You in the Morning", artist: "Jackson 5 / The Jacksons", album: "Third Album" },
  { title: "Can You Feel It", artist: "Jackson 5 / The Jacksons", album: "Triumph" },
  { title: "Can You Remember", artist: "Jackson 5 / The Jacksons", album: "Diana Ross Presents The Jackson 5" },
  { title: "Can't Get Ready for Losing You", artist: "Jackson 5 / The Jacksons", album: "Soulsation!" },
  { title: "Chained", artist: "Jackson 5 / The Jacksons", album: "Diana Ross Presents The Jackson 5" },
  { title: "Children of the Light", artist: "Jackson 5 / The Jacksons", album: "Lookin' Through the Windows" },
  { title: "Christmas Won't Be the Same This Year", artist: "Jackson 5 / The Jacksons", album: "The Jackson 5 Christmas Album" },
  { title: "Come And Get It (Love's On The Fire)", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "(Come 'Round Here) I'm the One You Need", artist: "Jackson 5 / The Jacksons", album: "ABC" },
  { title: "Coming Home", artist: "Jackson 5 / The Jacksons", album: "Soulsation!" },
  { title: "Corner of the Sky", artist: "Jackson 5 / The Jacksons", album: "Skywriter" },
  { title: "Cupid", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "Dancing Machine", artist: "Jackson 5 / The Jacksons", album: "G.I.T.: Get It Together" },
  { title: "Darling Dear", artist: "Jackson 5 / The Jacksons", album: "Third Album" },
  { title: "Destiny", artist: "Jackson 5 / The Jacksons", album: "Destiny" },
  { title: "Different Kind of Lady", artist: "Jackson 5 / The Jacksons", album: "Goin' Places" },
  { title: "Do What You Wanna", artist: "Jackson 5 / The Jacksons", album: "Goin' Places" },
  { title: "Doctor My Eyes", artist: "Jackson 5 / The Jacksons", album: "Lookin' Through the Windows" },
  { title: "Don't Know Why I Love You", artist: "Jackson 5 / The Jacksons", album: "ABC" },
  { title: "Don't Let Your Baby Catch You", artist: "Jackson 5 / The Jacksons", album: "Lookin' Through the Windows" },
  { title: "Don't Say Goodbye Again", artist: "Jackson 5 / The Jacksons", album: "G.I.T.: Get It Together" },
  { title: "Don't Want to See You Tomorrow", artist: "Jackson 5 / The Jacksons", album: "Lookin' Through the Windows" },
  { title: "Dreamer", artist: "Jackson 5 / The Jacksons", album: "The Jacksons" },
  { title: "E-Ne-Me-Ne-Mi-Ne-Moe (The Choice is Yours to Pull)", artist: "Jackson 5 / The Jacksons", album: "Lookin' Through the Windows" },
  { title: "Enjoy Yourself", artist: "Jackson 5 / The Jacksons", album: "The Jacksons" },
  { title: "Even Though You're Gone", artist: "Jackson 5 / The Jacksons", album: "Goin' Places" },
  { title: "Everybody", artist: "Jackson 5 / The Jacksons", album: "Triumph" },
  { title: "Everybody Is a Star", artist: "Jackson 5 / The Jacksons", album: "Soulsation!" },
  { title: "Feelin' Alright", artist: "Jackson 5 / The Jacksons", album: "Goin' Back to Indiana" },
  { title: "Find Me A Girl", artist: "Jackson 5 / The Jacksons", album: "Goin' Places" },
  { title: "Forever Came Today", artist: "Jackson 5 / The Jacksons", album: "Moving Violation" },
  { title: "Frosty the Snowman", artist: "Jackson 5 / The Jacksons", album: "The Jackson 5 Christmas Album" },
  { title: "Get It Together", artist: "Jackson 5 / The Jacksons", album: "G.I.T.: Get It Together" },
  { title: "Give It Up", artist: "Jackson 5 / The Jacksons", album: "Triumph" },
  { title: "Give Love on Christmas Day", artist: "Jackson 5 / The Jacksons", album: "The Jackson 5 Christmas Album" },
  { title: "Give Me Half a Chance", artist: "Jackson 5 / The Jacksons", album: "Looking Back to Yesterday" },
  { title: "Goin' Back to Indiana", artist: "Jackson 5 / The Jacksons", album: "Third Album" },
  { title: "Goin' Places", artist: "Jackson 5 / The Jacksons", album: "Goin' Places" },
  { title: "Going My Way", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "Good Times", artist: "Jackson 5 / The Jacksons", album: "The Jacksons" },
  { title: "Guess Who's Making Whoopee", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "Hallelujah Day", artist: "Jackson 5 / The Jacksons", album: "Skywriter" },
  { title: "Have Yourself a Merry Little Christmas", artist: "Jackson 5 / The Jacksons", album: "The Jackson 5 Christmas Album" },
  { title: "Heartbreak Hotel", artist: "Jackson 5 / The Jacksons", album: "Triumph" },
  { title: "Heaven Knows I Love You, Girl", artist: "Jackson 5 / The Jacksons", album: "Goin' Places" },
  { title: "Honey Chile", artist: "Jackson 5 / The Jacksons", album: "Maybe Tomorrow" },
  { title: "Honey Love", artist: "Jackson 5 / The Jacksons", album: "Moving Violation" },
  { title: "How Funky Is Your Chicken", artist: "Jackson 5 / The Jacksons", album: "Third Album" },
  { title: "Hum Along and Dance", artist: "Jackson 5 / The Jacksons", album: "G.I.T.: Get It Together" },
  { title: "I Ain't Gonna Eat My Heart Out Anymore", artist: "Jackson 5 / The Jacksons", album: "Boogie" },
  { title: "I Am Love", artist: "Jackson 5 / The Jacksons", album: "Dancing Machine" },
  { title: "I Can Only Give You Love", artist: "Jackson 5 / The Jacksons", album: "Lookin' Through the Windows" },
  { title: "I Can't Get Enough Of You", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "I Can't Quit Your Love", artist: "Jackson 5 / The Jacksons", album: "Skywriter" },
  { title: "I Found a Love", artist: "Jackson 5 / The Jacksons", album: "Single / archival release" },
  { title: "I Found That Girl", artist: "Jackson 5 / The Jacksons", album: "ABC" },
  { title: "I Got A Sure Thing", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "I Got The Feelin'", artist: "Jackson 5 / The Jacksons", album: "Immortal" },
  { title: "I Hear a Symphony", artist: "Jackson 5 / The Jacksons", album: "Looking Back to Yesterday" },
  { title: "(I Know) I'm Losing You", artist: "Jackson 5 / The Jacksons", album: "Diana Ross Presents The Jackson 5" },
  { title: "I Like You the Way You Are (Don't Change Your Love On Me)", artist: "Jackson 5 / The Jacksons", album: "Looking Back to Yesterday" },
  { title: "I Saw Mommy Kissing Santa Claus", artist: "Jackson 5 / The Jacksons", album: "The Jackson 5 Christmas Album" },
  { title: "I Want to Take You Higher", artist: "Jackson 5 / The Jacksons", album: "Goin' Back to Indiana" },
  { title: "I Want You Back", artist: "Jackson 5 / The Jacksons", album: "Diana Ross Presents The Jackson 5" },
  { title: "I Was Made to Love Her", artist: "Jackson 5 / The Jacksons", album: "Boogie" },
  { title: "I Will Find a Way", artist: "Jackson 5 / The Jacksons", album: "Maybe Tomorrow" },
  { title: "Iddint", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "If I Can't Nobody Can", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "If I Don't Love You This Way", artist: "Jackson 5 / The Jacksons", album: "Dancing Machine" },
  { title: "If I Have to Move a Mountain", artist: "Jackson 5 / The Jacksons", album: "Lookin' Through the Windows" },
  { title: "If The Shoe Don't Fit", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "If You Want Heaven", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "I'll Be There", artist: "Jackson 5 / The Jacksons", album: "Third Album" },
  { title: "I'll Bet You", artist: "Jackson 5 / The Jacksons", album: "ABC" },
  { title: "I'll Try You'll Try (Maybe We'll All Get By)", artist: "Jackson 5 / The Jacksons", album: "I Want You Back! Unreleased Masters" },
  { title: "I'm Glad It Rained", artist: "Jackson 5 / The Jacksons", album: "Soulsation!" },
  { title: "I'm So Happy", artist: "Jackson 5 / The Jacksons", album: "Single / archival release" },
  { title: "I'm Your Sunny One (He's My Sunny Boy)", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "It All Begins and Ends With Love", artist: "Jackson 5 / The Jacksons", album: "Dancing Machine" },
  { title: "It's Great to Be Here", artist: "Jackson 5 / The Jacksons", album: "Maybe Tomorrow" },
  { title: "It's Too Late to Change the Time", artist: "Jackson 5 / The Jacksons", album: "G.I.T.: Get It Together" },
  { title: "It's Your Thing", artist: "Jackson 5 / The Jacksons", album: "Soulsation!" },
  { title: "Jam Session", artist: "Jackson 5 / The Jacksons", album: "Single / archival release" },
  { title: "Jamie", artist: "Jackson 5 / The Jacksons", album: "Soulsation!" },
  { title: "Joyful Jukebox Music", artist: "Jackson 5 / The Jacksons", album: "Joyful Jukebox Music" },
  { title: "Jumbo Sam", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "Jump for Joy", artist: "Jackson 5 / The Jacksons", album: "Goin' Places" },
  { title: "Just a Little Misunderstanding", artist: "Jackson 5 / The Jacksons", album: "Soulsation!" },
  { title: "Just Because I Love You", artist: "Jackson 5 / The Jacksons", album: "Boogie" },
  { title: "Keep An Eye", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "Keep Off The Grass", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "Keep on Dancing", artist: "Jackson 5 / The Jacksons", album: "The Jacksons" },
  { title: "Label Me Love", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "La-La (Means I Love You)", artist: "Jackson 5 / The Jacksons", album: "ABC" },
  { title: "Let's Go Back To Day One", artist: "Jackson 5 / The Jacksons", album: "Come and Get It: The Rare Pearls" },
  { title: "Let's Have a Party", artist: "Jackson 5 / The Jacksons", album: "Soulsation!" },
  { title: "Listen I'll Tell You How", artist: "Jackson 5 / The Jacksons", album: "I Want You Back! Unreleased Masters" },
  { title: "Little Bitty Pretty One", artist: "Jackson 5 / The Jacksons", album: "Lookin' Through the Windows" },
  { title: "Living Together", artist: "Jackson 5 / The Jacksons", album: "The Jacksons" },
  { title: "Lonely Heart", artist: "Jackson 5 / The Jacksons", album: "Single / archival release" },
  { title: "Lookin' Through the Windows", artist: "Jackson 5 / The Jacksons", album: "Lookin' Through the Windows" },
  { title: "Love Call", artist: "Jackson 5 / The Jacksons", album: "I Want You Back! Unreleased Masters" },
  { title: "Love Comes in Different Flavors", artist: "Jackson 5 / The Jacksons", album: "I Want You Back! Unreleased Masters" },
  { title: "Love is the Thing You Need", artist: "Jackson 5 / The Jacksons", album: "Joyful Jukebox Music" },
];
const elements = {
  dateLabel: document.querySelector("#dateLabel"),
  birthdayBanner: document.querySelector("#birthdayBanner"),
  title: document.querySelector("#songTitle"),
  album: document.querySelector("#albumLine"),
  tribute: document.querySelector("#tributeLine"),
  youtubeMusicLink: document.querySelector("#youtubeMusicLink"),
  spotifyLink: document.querySelector("#spotifyLink"),
  appleMusicLink: document.querySelector("#appleMusicLink"),
  art: document.querySelector("#songArt"),
  caption: document.querySelector("#artCaption"),
  grid: document.querySelector("#calendarGrid"),
  todayButton: document.querySelector("#todayButton"),
  themeToggle: document.querySelector("#themeToggle"),
  localTime: document.querySelector("#localTime"),
};

const now = new Date();
const todayDay = Math.min(Math.max(now.getDate(), 1), 31);
const isAugust = now.getMonth() === 7;
let selectedDay = isAugust ? todayDay : null;
const birthdayDay = 29;
const augustMonth = 7;
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const albumArtwork = {
  "Off the Wall": "assets/off-the-wall.jpg",
  Thriller: "assets/thriller.jpg",
  Bad: "assets/bad.jpg",
  Dangerous: "assets/black-or-white.jpg",
  "HIStory: Past, Present and Future, Book I": "assets/you-are-not-alone.jpg",
  "Blood on the Dance Floor: HIStory in the Mix": "assets/blood-on-the-dance-floor.jpg",
  "Blood on the Dance Floor": "assets/blood-on-the-dance-floor.jpg",
  Invincible: "assets/you-rock-my-world.jpg",
  Xscape: "assets/you-are-not-alone.jpg",
  Michael: "assets/you-are-not-alone.jpg",
  "Got to Be There": "assets/don-t-stop-til-you-get-enough.jpg",
  Ben: "assets/she-s-out-of-my-life.jpg",
  "Music & Me": "assets/human-nature.jpg",
  "Forever, Michael": "assets/rock-with-you.jpg",
  "Jackson 5 / The Jacksons": "assets/don-t-stop-til-you-get-enough.jpg",
};

function augustDayAvailable(day) {
  return !isAugust || day <= todayDay;
}

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function nonAugustDayIndex(date) {
  let index = 0;

  for (let month = 0; month < date.getMonth(); month += 1) {
    if (month !== augustMonth) {
      index += daysInMonth(date.getFullYear(), month);
    }
  }

  if (date.getMonth() !== augustMonth) {
    index += date.getDate() - 1;
  }

  return index;
}

function songForDate(date) {
  if (date.getMonth() === augustMonth) {
    return songs[Math.min(Math.max(date.getDate(), 1), songs.length) - 1] || songs[0];
  }

  return yearRoundSongs[nonAugustDayIndex(date)] || yearRoundSongs[0];
}

function tributeText(song, birthdayMode) {
  if (song.tribute) {
    return song.tribute;
  }

  if (!birthdayMode && song.day === birthdayDay) {
    return "A tender late-era ballad that became one of his signature global moments.";
  }

  return `A daily spotlight from ${song.artist || "Michael Jackson"}${song.album ? `, from ${song.album}` : ""}.`;
}

function albumLine(song) {
  return [song.artist || "Michael Jackson", song.album, song.year].filter(Boolean).join(" | ");
}

function artworkForSong(song) {
  return song.image || albumArtwork[song.album] || albumArtwork[song.artist] || "assets/billie-jean.jpg";
}

function artworkCaption(song, usingOwnArtwork) {
  if (usingOwnArtwork) {
    return `${song.album} era artwork`;
  }

  return `${song.artist || "Michael Jackson"} daily spotlight`;
}

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

function renderSong(song, options = {}) {
  selectedDay = options.selectedAugustDay ?? null;
  const isBirthday = Boolean(options.birthdayMode && song.day === birthdayDay);

  elements.dateLabel.textContent = options.dateLabel || `August ${song.day}`;
  elements.birthdayBanner.hidden = !isBirthday;
  elements.title.textContent = song.title;
  elements.album.textContent = albumLine(song);
  elements.tribute.textContent = tributeText(song, isBirthday);
  document.body.classList.toggle("is-birthday-mode", isBirthday);
  const songArtist = song.artist || "Michael Jackson";
  const songQuery = `${songArtist} ${song.title}`;
  elements.youtubeMusicLink.href = `https://music.youtube.com/search?q=${encodeURIComponent(`${songQuery} official video`)}`;
  elements.spotifyLink.href = `https://open.spotify.com/search/${encodeURIComponent(songQuery)}`;
  elements.appleMusicLink.href = `https://music.apple.com/us/search?term=${encodeURIComponent(songQuery)}`;
  elements.youtubeMusicLink.setAttribute("aria-label", `Open YouTube Music search for ${song.title} official video`);
  elements.spotifyLink.setAttribute("aria-label", `Open Spotify search for ${song.title}`);
  elements.appleMusicLink.setAttribute("aria-label", `Open Apple Music search for ${song.title}`);
  const artwork = artworkForSong(song);
  elements.art.src = artwork;
  elements.art.alt = `${song.album} artwork for ${song.title}`;
  elements.caption.textContent = artworkCaption(song, Boolean(song.image));

  document.querySelectorAll(".day-button").forEach((button) => {
    const buttonDay = Number(button.dataset.day);
    button.classList.toggle("is-selected", buttonDay === selectedDay);
    button.classList.toggle("is-birthday-selected", isBirthday && buttonDay === birthdayDay);
    button.setAttribute("aria-pressed", String(buttonDay === selectedDay));
  });
}

function renderAugustDay(day) {
  if (!augustDayAvailable(day)) return;

  const song = songs[day - 1] || songs[0];
  renderSong(song, {
    birthdayMode: true,
    dateLabel: `August ${song.day}`,
    selectedAugustDay: song.day,
  });
}

function renderTodaySong() {
  if (isAugust) {
    renderAugustDay(todayDay);
    return;
  }

  renderSong(songForDate(now), {
    dateLabel: `${monthNames[now.getMonth()]} ${todayDay} | Song of the Day`,
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
    const available = augustDayAvailable(song.day);
    button.disabled = !available;
    button.setAttribute(
      "aria-label",
      available
        ? `Show August ${song.day} tribute: ${song.title}`
        : `August ${song.day} unlocks when the day arrives`,
    );
    if (!available) {
      button.title = `Unlocks August ${song.day}`;
    }
    button.classList.toggle("is-today", isAugust && song.day === todayDay);
    button.classList.toggle("is-birthday", song.day === birthdayDay);
    if (available) {
      button.addEventListener("click", () => renderAugustDay(song.day));
    }
    fragment.appendChild(button);
  });

  elements.grid.appendChild(fragment);
}

elements.todayButton.addEventListener("click", renderTodaySong);
elements.themeToggle.addEventListener("click", () => {
  applyTheme(currentTheme() === "light" ? "dark" : "light");
});

buildCalendar();
applyTheme(currentTheme());
renderTodaySong();
updateLocalTime();
setInterval(updateLocalTime, 1000);
