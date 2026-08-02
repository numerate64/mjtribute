const fs = require('fs');
const path = require('path');
const https = require('https');
const PptxGenJS = require('pptxgenjs');

const outDir = __dirname;
const assetDir = path.join(outDir, 'assets');
fs.mkdirSync(assetDir, { recursive: true });

const slides = [
  ['August 1', "Don't Stop 'Til You Get Enough", 'Off the Wall', '1979'],
  ['August 2', 'Rock with You', 'Off the Wall', '1979'],
  ['August 3', 'Off the Wall', 'Off the Wall', '1979'],
  ['August 4', "She's Out of My Life", 'Off the Wall', '1979'],
  ['August 5', "Wanna Be Startin' Somethin'", 'Thriller', '1982'],
  ['August 6', 'Thriller', 'Thriller', '1982'],
  ['August 7', 'Beat It', 'Thriller', '1982'],
  ['August 8', 'Billie Jean', 'Thriller', '1982'],
  ['August 9', 'Human Nature', 'Thriller', '1982'],
  ['August 10', 'P.Y.T. (Pretty Young Thing)', 'Thriller', '1982'],
  ['August 11', 'The Girl Is Mine', 'Thriller', '1982'],
  ['August 12', 'Bad', 'Bad', '1987'],
  ['August 13', 'The Way You Make Me Feel', 'Bad', '1987'],
  ['August 14', 'Man in the Mirror', 'Bad', '1987'],
  ['August 15', 'Smooth Criminal', 'Bad', '1987'],
  ['August 16', 'Dirty Diana', 'Bad', '1987'],
  ['August 17', 'Another Part of Me', 'Bad', '1987'],
  ['August 18', 'Leave Me Alone', 'Bad', '1987'],
  ['August 19', 'Black or White', 'Dangerous', '1991'],
  ['August 20', 'Remember the Time', 'Dangerous', '1991'],
  ['August 21', 'In the Closet', 'Dangerous', '1991'],
  ['August 22', 'Jam', 'Dangerous', '1991'],
  ['August 23', 'Heal the World', 'Dangerous', '1991'],
  ['August 24', 'Who Is It', 'Dangerous', '1991'],
  ['August 25', 'Will You Be There', 'Dangerous', '1991'],
  ['August 26', 'Scream', 'HIStory', '1995'],
  ['August 27', "They Don't Care About Us", 'HIStory', '1995'],
  ['August 28', 'Earth Song', 'HIStory', '1995'],
  ['August 29', 'You Are Not Alone', 'HIStory', '1995'],
  ['August 30', 'Blood on the Dance Floor', 'Blood on the Dance Floor', '1997'],
  ['August 31', 'You Rock My World', 'Invincible', '2001'],
];

const palettes = [
  { bg: '0C0C0F', accent: 'D9B45F', text: 'FFFFFF', muted: 'C9C9C9', line: 'A51E23' },
  { bg: '111318', accent: 'F2F2F2', text: 'FFFFFF', muted: 'BFC5CE', line: 'D9B45F' },
  { bg: '1A1114', accent: 'E7D4A7', text: 'FFFFFF', muted: 'D5C8B8', line: '5AA6B1' },
  { bg: '081319', accent: '9DD4C6', text: 'FFFFFF', muted: 'C6D5D8', line: 'D9B45F' },
];

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'OpenClaw deck generator' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          resolve(get(res.headers.location));
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode}: ${url}`));
          return;
        }
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      })
      .on('error', reject);
  });
}

function cleanName(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function artworkFor(song, album) {
  const file = path.join(assetDir, `${cleanName(song)}.jpg`);
  if (fs.existsSync(file)) return file;

  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(`Michael Jackson ${song}`)}&entity=song&limit=10`;
  const json = JSON.parse((await get(url)).toString('utf8'));
  const exact = json.results.find((r) => r.artistName === 'Michael Jackson' && r.trackName.toLowerCase() === song.toLowerCase());
  const albumMatch = json.results.find((r) => r.artistName === 'Michael Jackson' && r.collectionName.toLowerCase().includes(album.toLowerCase().split(' ')[0]));
  const anyMj = json.results.find((r) => r.artistName === 'Michael Jackson');
  const hit = exact || albumMatch || anyMj || json.results[0];
  if (!hit || !hit.artworkUrl100) return null;

  const artUrl = hit.artworkUrl100.replace(/100x100bb\.jpg$/, '1200x1200bb.jpg');
  fs.writeFileSync(file, await get(artUrl));
  return file;
}

function addText(slide, text, opts) {
  slide.addText(text, {
    margin: 0,
    breakLine: false,
    fit: 'shrink',
    ...opts,
  });
}

function addDiagonalBand(slide, color, transparency, offset) {
  slide.addShape(pptx.ShapeType.parallelogram, {
    x: -1.2 + offset,
    y: 0,
    w: 2.0,
    h: 7.5,
    fill: { color, transparency },
    line: { color, transparency: 100 },
    rotate: 18,
  });
}

const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenClaw';
pptx.subject = 'Michael Jackson August tribute';
pptx.title = 'Michael Jackson August Tribute';
pptx.company = 'OpenClaw';
pptx.lang = 'en-US';
pptx.theme = {
  headFontFace: 'Aptos Display',
  bodyFontFace: 'Aptos',
  lang: 'en-US',
};
pptx.defineLayout({ name: 'LAYOUT_WIDE', width: 13.333, height: 7.5 });

(async () => {
  const sourceLines = ['# Artwork Sources', '', 'Album artwork was retrieved from Apple iTunes Search API preview artwork URLs for personal tribute/deck-building use.', ''];

  for (let i = 0; i < slides.length; i++) {
    const [date, song, album, year] = slides[i];
    const pal = palettes[i % palettes.length];
    const slide = pptx.addSlide();
    const imgPath = await artworkFor(song, album);

    slide.background = { color: pal.bg };
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: pal.bg }, line: { transparency: 100 } });
    addDiagonalBand(slide, pal.line, 12, 8.1);
    addDiagonalBand(slide, pal.accent, 62, 9.05);
    slide.addShape(pptx.ShapeType.line, { x: 0.72, y: 1.02, w: 0.9, h: 0, line: { color: pal.accent, width: 4 } });

    addText(slide, date.toUpperCase(), {
      x: 0.72, y: 0.7, w: 4.2, h: 0.34,
      fontFace: 'Aptos', fontSize: 15, bold: true,
      color: pal.accent, charSpace: 1.2,
    });

    addText(slide, song, {
      x: 0.72, y: 1.55, w: 5.8, h: 1.85,
      fontFace: 'Aptos Display', fontSize: song.length > 24 ? 33 : 42,
      bold: true, color: pal.text, valign: 'mid',
      breakLine: false,
    });

    addText(slide, `${album}  |  ${year}`, {
      x: 0.78, y: 3.58, w: 5.3, h: 0.32,
      fontFace: 'Aptos', fontSize: 14.5, color: pal.muted,
    });

    const shortNote = date === 'August 29'
      ? 'Born this day in 1958, Michael Jackson reshaped pop performance, sound, and visual storytelling.'
      : `A signature ${album} era moment in Michael Jackson's catalog.`;
    addText(slide, shortNote, {
      x: 0.78, y: 4.38, w: 4.95, h: 0.76,
      fontFace: 'Aptos', fontSize: 16, color: pal.text,
      valign: 'mid',
    });

    slide.addShape(pptx.ShapeType.line, { x: 0.78, y: 6.35, w: 4.2, h: 0, line: { color: pal.accent, width: 1, transparency: 20 } });
    addText(slide, 'MICHAEL JACKSON AUGUST TRIBUTE', {
      x: 0.78, y: 6.56, w: 4.9, h: 0.24,
      fontFace: 'Aptos', fontSize: 8.8, color: pal.muted, charSpace: 1.5,
    });

    if (imgPath) {
      slide.addShape(pptx.ShapeType.rect, {
        x: 7.15, y: 0.68, w: 4.9, h: 4.9,
        fill: { color: '000000', transparency: 42 },
        line: { color: pal.accent, transparency: 30, width: 1.2 },
        shadow: { type: 'outer', color: '000000', opacity: 0.45, blur: 2, angle: 45, distance: 3 },
      });
      slide.addImage({ path: imgPath, x: 7.32, y: 0.85, w: 4.56, h: 4.56 });
      sourceLines.push(`- ${date}: "${song}" / ${album} (${year}) - ${path.relative(outDir, imgPath)}`);
    } else {
      slide.addShape(pptx.ShapeType.rect, {
        x: 7.32, y: 0.85, w: 4.56, h: 4.56,
        fill: { color: pal.line, transparency: 0 },
        line: { color: pal.accent, width: 1.2 },
      });
      addText(slide, album, {
        x: 7.7, y: 2.72, w: 3.8, h: 0.5,
        fontFace: 'Aptos Display', fontSize: 24, bold: true,
        align: 'center', color: pal.text,
      });
    }

    addText(slide, String(i + 1).padStart(2, '0'), {
      x: 11.95, y: 6.45, w: 0.55, h: 0.34,
      fontFace: 'Aptos', fontSize: 12, color: pal.accent, bold: true,
      align: 'right',
    });
  }

  fs.writeFileSync(path.join(outDir, 'ARTWORK-SOURCES.md'), sourceLines.join('\n'));
  await pptx.writeFile({ fileName: path.join(outDir, 'Michael-Jackson-August-Tribute.pptx') });
  console.log(path.join(outDir, 'Michael-Jackson-August-Tribute.pptx'));
})();
