// ---- ambient starfield ----

const bgStars = document.getElementById('bgStars');

const STAR_COUNT = 60;

for (let i = 0; i < STAR_COUNT; i++) {
  const s = document.createElement('div');

  s.className = 'star';

  const size = Math.random() * 2 + 1;

  s.style.width = size + 'px';
  s.style.height = size + 'px';

  s.style.left = Math.random() * 100 + 'vw';
  s.style.top = Math.random() * 60 + 'vh';

  s.style.animationDuration =
    (1.5 + Math.random() * 3) + 's';

  s.style.animationDelay =
    (Math.random() * 3) + 's';

  bgStars.appendChild(s);
}


// ---- rising embers for fire ambience ----

const EMBER_COUNT = 22;

for (let i = 0; i < EMBER_COUNT; i++) {
  const e = document.createElement('div');

  e.className = 'ember';

  const size = 2 + Math.random() * 4;

  e.style.width = size + 'px';
  e.style.height = size + 'px';

  e.style.left =
    (35 + Math.random() * 30) + 'vw';

  e.style.bottom =
    (5 + Math.random() * 10) + 'vh';

  e.style.setProperty(
    '--drift',
    (Math.random() * 60 - 30) + 'px'
  );

  e.style.animationDuration =
    (4 + Math.random() * 5) + 's';

  e.style.animationDelay =
    (Math.random() * 6) + 's';

  document.body.appendChild(e);
}


// ---- candles ----

const candlesEl =
  document.getElementById('candles');

const NUM_CANDLES = 1;

const colors = [
  '#ff6b6b',
  '#ffd93d',
  '#6bcB77',
  '#4dabf7',
  '#c084fc'
];

const candleColors = [
  '#ff9f5a'
];


// build candle(s)

for (let i = 0; i < NUM_CANDLES; i++) {

  const c = document.createElement('div');

  c.className = 'candle';

  c.style.background =
    `repeating-linear-gradient(
      180deg,
      ${candleColors[i % candleColors.length]},
      ${candleColors[i % candleColors.length]} 7px,
      #ffffff 7px,
      #ffffff 14px
    )`;


  const flameWrap =
    document.createElement('div');

  flameWrap.className = 'flame-wrap';

  flameWrap.style.animationDelay =
    (Math.random() * 0.4) + 's';


  const glow =
    document.createElement('div');

  glow.className = 'glow';

  glow.style.animationDelay =
    (Math.random() * 0.4) + 's';


  const flame =
    document.createElement('div');

  flame.className = 'flame';

  flame.style.animationDelay =
    (Math.random() * 0.4) + 's';


  flameWrap.appendChild(glow);
  flameWrap.appendChild(flame);

  c.appendChild(flameWrap);


  c.addEventListener('click', () => {
    c.classList.toggle('out');
  });


  candlesEl.appendChild(c);
}


// ---- name banner ----

const bannerEl =
  document.getElementById('banner');

const NAME = "MARIA";

bannerEl.innerHTML =
  '<div class="string"></div>';


const lettersRow =
  document.createElement('div');

lettersRow.className =
  'banner-letters';


for (let i = 0; i < NAME.length; i++) {

  const flag =
    document.createElement('div');

  flag.className = 'flag';

  flag.style.background =
    colors[i % colors.length];

  bannerEl.appendChild(flag);


  const letter =
    document.createElement('span');

  letter.textContent =
    NAME[i];

  lettersRow.appendChild(letter);
}


bannerEl.appendChild(lettersRow);


// ---- pearls ----

const pearlColors = [
  '#f7e3ab',
  '#e8c27a',
  '#fff8ec',
  '#d9a45a'
];

document
  .querySelectorAll('.tier')
  .forEach(tier => {

    const count =
      tier.classList.contains('bottom')
        ? 14
        : tier.classList.contains('mid')
          ? 10
          : 7;


    for (let i = 0; i < count; i++) {

      const p =
        document.createElement('div');

      p.className = 'pearl';


      const size =
        5 + Math.random() * 3;

      p.style.width =
        size + 'px';

      p.style.height =
        size + 'px';


      p.style.left =
        (Math.random() * 88 + 6) + '%';

      p.style.top =
        (Math.random() * 40 + 30) + '%';


      const col =
        pearlColors[
          Math.floor(
            Math.random() *
            pearlColors.length
          )
        ];


      p.style.background =
        `radial-gradient(
          circle at 35% 30%,
          #fff,
          ${col} 55%,
          ${col} 100%
        )`;


      p.style.boxShadow =
        '0 1px 2px rgba(0,0,0,0.25)';


      tier.appendChild(p);
    }
  });


// ---- frosting drips ----

document
  .querySelectorAll('.frosting')
  .forEach(frosting => {

    const dripCount =
      5 + Math.floor(
        Math.random() * 3
      );


    for (let i = 0; i < dripCount; i++) {

      const d =
        document.createElement('div');

      d.className = 'drip';


      d.style.left =
        (Math.random() * 85 + 3) + '%';


      d.style.height =
        (14 + Math.random() * 16) + 'px';


      frosting.appendChild(d);
    }
  });


// ---- button and message ----

const message =
  document.getElementById('message');

const btn =
  document.getElementById('blowBtn');

const loveCard =
  document.getElementById('loveCard');


btn.addEventListener('click', () => {

  const candles =
    document.querySelectorAll('.candle');


  const allOut =
    [...candles].every(
      c => c.classList.contains('out')
    );


  if (!allOut) {

    candles.forEach(c => {
      c.classList.add('out');
    });


    message.textContent =
      "The candle is out — your wish is on its way! 🌟";


    launchConfetti();


    loveCard.classList.add('show');


    setTimeout(() => {

      loveCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });

    }, 300);

  } else {

    candles.forEach(c => {
      c.classList.remove('out');
    });


    message.textContent =
      "Relit! Give it another go. 🔥";


    loveCard.classList.remove('show');
  }
});


// ---- confetti ----

function launchConfetti() {

  for (let i = 0; i < 80; i++) {

    const piece =
      document.createElement('div');

    piece.className = 'confetti';


    piece.style.left =
      Math.random() * 100 + 'vw';


    piece.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];


    piece.style.animationDuration =
      (2 + Math.random() * 2) + 's';


    piece.style.borderRadius =
      Math.random() > 0.5
        ? '50%'
        : '2px';


    document.body.appendChild(piece);


    setTimeout(() => {
      piece.remove();
    }, 4200);
  }
}