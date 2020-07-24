var audioCtx = new(window.AudioContext ||
  window.webkitAudioContext ||
  window.audioContext)();

let sound = false;

function beep(
  duration = 50,
  frequency = 100,
  volume,
  type = 'triangle',
  callback
) {
    if (!sound) {
      return;
    }
    
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  if (volume) {
    gainNode.gain.value = volume;
  }
  if (frequency) {
    oscillator.frequency.value = frequency;
  }
  if (type) {
    oscillator.type = type;
  }
  if (callback) {
    oscillator.onended = callback;
  }

  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + duration / 1000);
}

const emojis = [{
    emoji: '😅',
    tokiPona: 'a',
    english: ['ah'],
  },
  {
    emoji: '🐊',
    tokiPona: 'akesi',
    english: ['non-cute animal', 'reptile', 'amphibian'],
  },
  {
    emoji: '🙅',
    tokiPona: 'ala',
    english: ['no', 'not', 'zero'],
  },
  {
    emoji: '🎑',
    tokiPona: 'alasa',
    english: ['gather', 'hunt', 'forage'],
  },
  {
    emoji: '🌏',
    tokiPona: 'ale',
    english: ['all', 'abundant', 'every', 'life', 'universe'],
  },
  {
    emoji: '🍑',
    tokiPona: 'anpa',
    english: ['bottom', 'downward', 'humble'],
  },
  {
    emoji: '💢',
    tokiPona: 'ante',
    english: ['difference', 'changed', 'other'],
  },
  {
    emoji: '⚖️',
    tokiPona: 'anu',
    english: ['or'],
  },
  {
    emoji: '🌅',
    tokiPona: 'awen',
    english: ['stay', 'kept', 'protected', 'waiting', 'safe', 'to continue to'],
  },
  {
    emoji: '🔸',
    tokiPona: 'e',
    english: ['introduce direct object'],
  },
  {
    emoji: '➕',
    tokiPona: 'en',
    english: ['and'],
  },
  {
    emoji: '🛒',
    tokiPona: 'esun',
    english: ['market', 'shop', 'business transaction'],
  },
  {
    emoji: '🎈',
    tokiPona: 'ijo',
    english: ['thing', 'object'],
  },
  {
    emoji: '😱',
    tokiPona: 'ike',
    english:  ['bad', 'negative', 'non-essential', 'irrelevant'],
  },
  {
    emoji: '🔨',
    tokiPona: 'ilo',
    english: ['tool', 'implement', 'machine', 'device'],
  },
  {
    emoji: '📥',
    tokiPona: 'insa',
    english: ['center', 'content', 'inside', 'between', 'stomach'],
  },
  {
    emoji: '💩',
    tokiPona: 'jaki',
    english: ['disgusting', 'obscene', 'sickly', 'toxic', 'unclean', 'unsanitary'],
  },
  {
    emoji: '🕺',
    tokiPona: 'jan',
    english: ['human being', 'person', 'somebody'],
  },
  {
    emoji: '💛',
    tokiPona: 'jelo',
    english: ['yellow', 'light green'],
  },
  {
    emoji: '🧺',
    tokiPona: 'jo',
    english: ['to have', 'carry', 'contain', 'hold'],
  },
  {
    emoji: '🐟',
    tokiPona: 'kala',
    english: ['fish', 'marine animal', 'sea creature'],
  },
  {
    emoji: '🎶',
    tokiPona: 'kalama',
    english: ['make a sound', 'recite', 'utter aloud'],
  },
  {
    emoji: '🧲',
    tokiPona: 'kama',
    english: ['arriving', 'coming', 'future', 'to become'],
  },
  {
    emoji: '🌳',
    tokiPona: 'kasi',
    english: ['plant', 'vegetation', 'herb', 'leaf'],
  },
  {
    emoji: '👌',
    tokiPona: 'ken',
    english: ['to be able to', 'can', 'possible'],
  },
  {
    emoji: '🧩',
    tokiPona: 'kepeken',
    english: ['to use', 'with', 'by means of'],
  },
  {
    emoji: '🥝',
    tokiPona: 'kili',
    english: ['fruit', 'vegetable', 'mushroom'],
  },
  {
    emoji: '➰',
    tokiPona: 'kin',
    english: ['also']
  },
  {
    emoji: '✂️',
    tokiPona: 'kipisi',
    english: ['cut', 'chop', 'divide'],
  },
  {
    emoji: '💎',
    tokiPona: 'kiwen',
    english: ['hard object', 'metal', 'rock', 'stone'],
  },
  {
    emoji: '🍚',
    tokiPona: 'ko',
    english: ['clay', 'dough', 'semi-solid', 'paste', 'powder'],
  },
  {
    emoji: '💨',
    tokiPona: 'kon',
    english: ['air', 'breath', 'essence', 'spirit', 'wind'],
  },
  {
    emoji: '🌈',
    tokiPona: 'kule',
    english: ['color', 'colorful'],
  },
  {
    emoji: '👂',
    tokiPona: 'kute',
    english: ['to hear', 'listen', 'pay attention', 'obey'],
  },
  {
    emoji: '👪',
    tokiPona: 'kulupu',
    english: ['community', 'company', 'group', 'nation', 'society', 'tribe'],
  },
  {
    emoji: '🔹',
    tokiPona: 'la',
    code: ':small_blue_diamond:',
    english: ['sep. (context and sentence)'],
  },
  {
    emoji: '💤',
    tokiPona: 'lape',
    english: ['sleep', 'sleeping', 'rest', 'resting'],
  },
  {
    emoji: '💙💚',
    tokiPona: 'laso',
    english: ['blue', 'green'],
  },
  {
    emoji: '👑',
    tokiPona: 'lawa',
    english: ['head', 'mind', 'control', 'guide', 'plan', 'rule'],
  },
  {
    emoji: '👘',
    tokiPona: 'len',
    english: ['cloth', 'clothing', 'fabric', 'cover'],
  },
  {
    emoji: '❄️',
    tokiPona: 'lete',
    english: ['cold', 'cool', 'uncooked', 'raw'],
  },
  {
    emoji: '🔺',
    tokiPona: 'li',
    english: ['sep. (subject and verb)'],
  },
  {
    emoji: '🐜',
    tokiPona: 'lili',
    english: ['little', 'small', 'short', 'few', 'young'],
  },
  {
    emoji: '〰️',
    tokiPona: 'linja',
    english: ['long floppy thing', 'cord', 'rope', 'thread', 'yarn'],
  },
  {
    emoji: '📁',
    tokiPona: 'lipu',
    english: ['a flat thing', 'book', 'document', 'card', 'paper'], 
  },
  {
    emoji: '❤️🧡',
    tokiPona: 'loje',
    english: ['red', 'orange'],
  },
  {
    emoji: '🙇',
    tokiPona: 'lon',
    english: ['located at', 'real', 'true'],
  },
  {
    emoji: '🖐️',
    tokiPona: 'luka',
    english: ['arm', 'hand'],
  },
  {
    emoji: '👓',
    tokiPona: 'lukin',
    code: ':eyeglasses:',
    english: ['see', 'observe', 'read', 'watch'],
  },
  {
    emoji: '🕳️',
    tokiPona: 'lupa',
    english: ['door', 'hole', 'orifice', 'window'],
  },
  {
    emoji: '🌎',
    tokiPona: 'ma',
    english: ['earth', 'land', 'outdoors', 'world', 'country', 'territory', 'soil'],
  },
  {
    emoji: '🤰',
    tokiPona: 'mama',
    english: ['parent', 'ancestor'],
  },
  {
    emoji: '💰',
    tokiPona: 'mani',
    english: ['money', 'cash', 'savings', 'wealth'],
  },
  {
    emoji: '👧',
    tokiPona: 'meli',
    english: ['woman', 'female', 'wife'],
  },
  {
    emoji: '👈',
    tokiPona: 'mi',
    english: ['I', 'me', 'we', 'us'],
  },
  {
    emoji: '👨',
    tokiPona: 'mije',
    english: ['man', 'male', 'husband'],
  },
  {
    emoji: '🍜',
    tokiPona: 'moku',
    english: ['food', 'to eat', 'drink'],
  },
  {
    emoji: '💀',
    tokiPona: 'moli',
    english: ['death', 'dead', 'dying'],
  },
  {
    emoji: '⬅️',
    tokiPona: 'monsi',
    english: ['back', 'behind', 'rear'],
  },
  {
    emoji: '🐄',
    tokiPona: 'mu',
    english: ['cute animal noise'],
  },
  {
    emoji: '🌙',
    tokiPona: 'mun',
    english: ['moon', 'star'],
  },
  {
    emoji: '🥂',
    tokiPona: 'musi',
    english: ['artistic', 'entertaining', 'frivolous', 'playful', 'fun'],
  },
  {
    emoji: '🧮',
    tokiPona: 'mute',
    english: ['many', 'quantity', 'several', 'very'],
  },
  {
    emoji: '🌶️',
    tokiPona: 'namako',
    english: ['spice', 'pepper', 'hot'],
  },
  {
    emoji: '💯',
    tokiPona: 'nanpa',
    english: ['number'],
  },
  {
    emoji: '😜',
    tokiPona: 'nasa',
    english: ['silly', 'unusual', 'strange', 'foolish', 'crazy', 'drunk', 'intoxicated'],
  },
  {
    emoji: '🛣️',
    tokiPona: 'nasin',
  english: ['way', 'custom', 'method', 'path', 'road'],
  },
  {
    emoji: '👃',
    tokiPona: 'nena',
    english: ['bump', 'button', 'hill', 'mountain', 'nose'],
  },
  {
    emoji: '👇',
    tokiPona: 'ni',
    english: ['this', 'that'],
  },
  {
    emoji: '📖',
    tokiPona: 'nimi',
    english: ['word', 'name'],
  },
  {
    emoji: '🦵',
    tokiPona: 'noka',
    english: ['leg', 'foot'],
  },
  {
    emoji: '👋',
    tokiPona: 'o',
    english: ['hey!'],
  },
  {
    emoji: '👁️',
    tokiPona: 'oko',
    english: ['eye'],
  },
  {
    emoji: '💑',
    tokiPona: 'olin',
    english: ['love', 'affection', 'respect'],
  },
  {
    emoji: '👥',
    tokiPona: 'ona',
    english: ['she', 'he', 'it', 'they'],
  },
  {
    emoji: '🔓',
    tokiPona: 'open',
    english: ['open', 'begin', 'start'],
  },
  {
    emoji: '🤦',
    tokiPona: 'pakala',
    english: ['blunder', 'broken', 'damaged'],
  },
  {
    emoji: '🚴',
    tokiPona: 'pali',
    english: ['activity', 'build', 'make', 'prepare', 'work'],
  },
  {
    emoji: '🏒',
    tokiPona: 'palisa',
    english: ['stick-like object', 'branch', 'rod', 'stick'],
  },
  {
    emoji: '🍞',
    tokiPona: 'pan',
    code: ':bread:',
    english: ['corn', 'oat', 'rice', 'wheat', 'bread', 'pasta'],
  },
  {
    emoji: '🎁',
    tokiPona: 'pana',
    english: ['give', 'send','provide', 'put', 'release'],
  },
  {
    emoji: '🎒',
    tokiPona: 'pi',
    english: ['belonging to', 'of'],
  },
  {
    emoji: '💗',
    tokiPona: 'pilin',
    english: ['feelings', 'emotions'],
  },
  {
    emoji: '⬛',
    tokiPona: 'pimeja',
    english: ['black', 'dark'],
  },
  {
    emoji: '🛑',
    tokiPona: 'pini',
    code: ':corn:',
    english: ['completed', 'finished', 'end', 'done'],
  },
  {
    emoji: '🐞',
    tokiPona: 'pipi',
    english: ['bug', 'insect', 'ant', 'spider'],
  },
  {
    emoji: '👭',
    tokiPona: 'poka',
    english: ['side', 'next to', 'nearby'],
  },
  {
    emoji: '📦',
    tokiPona: 'poki',
    english: ['container', 'bag', 'bowl', 'box', 'cup'],
  },
  {
    emoji: '😀👍',
    tokiPona: 'pona',
    english: ['good', 'positive', 'useful', 'friendly', 'peaceful', 'simple'],
  },
  {
    emoji: '🏆🏆',
    tokiPona: 'sama',
    english: ['same', 'similar', 'sibling'],
  },
  {
    emoji: '🔥',
    tokiPona: 'seli',
    english: ['fire'],
  },
  {
    emoji: '🐚',
    tokiPona: 'selo',
    english: ['outside', 'bark', 'peel', 'shell', 'skin', 'boundary'],
  },
  {
    emoji: '🙋',
    tokiPona: 'seme',
    english: ['what', 'which'],
  },
  {
    emoji: '⛰️',
    tokiPona: 'sewi',
    english: ['high', 'divine', 'sacred', 'elevated'],
  },
  {
    emoji: '🧘',
    tokiPona: 'sijelo',
    english: ['body', 'torso'],
  },
  {
    emoji: '⭕',
    tokiPona: 'sike',
    english: ['ball', 'circle', 'cycle', 'sphere', 'wheel'],
  },
  {
    emoji: '✨',
    tokiPona: 'sin',
    english: ['new', 'fresh', 'additional', 'another', 'extra'],
  },
  {
    emoji: '👉',
    tokiPona: 'sina',
    english: ['you'],
  },
  {
    emoji: '😐',
    tokiPona: 'sinpin',
    english: ['face', 'foremost', 'front', 'wall'],
  },
  {
    emoji: '✍️',
    tokiPona: 'sitelen',
    english: ['image', 'picture', 'mark', 'writing'],
  },
  {
    emoji: '🎓',
    tokiPona: 'sona',
    english: ['knowledge', 'skill', 'wisdom', 'information'],
  },
  {
    emoji: '🐒',
    tokiPona: 'soweli',
    english: ['animal', 'beast'],
  },
  {
    emoji: '🐘',
    tokiPona: 'suli',
    english: ['big', 'heavy', 'large', 'tall', 'important', 'adult'],
  },
  {
    emoji: '☀️',
    tokiPona: 'suno',
    english: ['sun', 'light', 'brightness', 'glow'],
  },
  {
    emoji: '📐',
    tokiPona: 'supa',
    english: ['horizontal surface', 'table', 'desk'],
  },
  {
    emoji: '🍭',
    tokiPona: 'suwi',
    english: ['sweet', 'cute', 'adorable'],
  },
  {
    emoji: '🚢',
    tokiPona: 'tan',
    english: ['from', 'by', 'because'],
  },
  {
    emoji: '🤔',
    tokiPona: 'taso',
    english: ['but', 'only', 'however'],
  },
  {
    emoji: '🏃',
    tokiPona: 'tawa',
    english: ['to', 'toward', 'moving'],
  },
  {
    emoji: '🌊',
    tokiPona: 'telo',
    english: ['water', 'liquid', 'fluid', 'wet', 'beverage'],
  },
  {
    emoji: '⌚',
    tokiPona: 'tenpo',
    english: ['time', 'duration', 'moment', 'occasion'],
  },
  {
    emoji: '💬',
    tokiPona: 'toki',
    english: ['say', 'speak', 'say', 'talk', 'language'],
  },
  {
    emoji: '🏡',
    tokiPona: 'tomo',
    english: ['building', 'home', 'house', 'room'],
  },
  {
    emoji: '✌️',
    tokiPona: 'tu',
    english: ['two'],
  },
  {
    emoji: '🍆',
    tokiPona: 'unpa',
    english: ['sex'],
  },
  {
    emoji: '👄',
    tokiPona: 'uta',
    code: ':lips:',
    english: ['mouth', 'lips'],
  },
  {
    emoji: '⚔️',
    tokiPona: 'utala',
    english: ['conflict', 'battle', 'challenge', 'struggle'],
  },
  {
    emoji: '⬜',
    tokiPona: 'walo',
    english: ['white', 'pale'],
  },
  {
    emoji: '☝️',
    tokiPona: 'wan',
    english: ['one', 'unique'],
  },
  {
    emoji: '🐦',
    tokiPona: 'waso',
    english: ['bird'],
  },
  {
    emoji: '⚡️',
    tokiPona: 'wawa',
    english: ['strong', 'powerful', 'confident', 'energetic', 'intense'],
  },
  {
    emoji: '✈️',
    tokiPona: 'weka',
    english: ['absent', 'away', 'ignored'],
  },
  {
    emoji: '💭',
    tokiPona: 'wile',
    english: ['must', 'need', 'require', 'want', 'wish']
  }
];

let backwards = false;
let stage = 0;
let currentWord = emojis[~~(Math.random() * emojis.length)];;
const card = document.getElementById('card');
let roundStartTime = 4000;
let time = roundStartTime;

const newStage = () => {
  switch (stage) {
    case 0:
      card.innerHTML = currentWord.emoji;
      card.className = 'emoji';
      beep();
      if (!backwards) {
        setTimeout(beep, 300);
      }
      break;
    case 1:
      card.innerHTML = currentWord.tokiPona;
      card.className = 'toki-pona';
      beep(100, 200);
      break;
    case 2:
      card.innerHTML = currentWord.english[~~(Math.random() * currentWord.english.length)];
      card.className = 'english';
      beep();
      if (backwards) {
        setTimeout(beep, 300);
      }
      break;
    default:
      card.className = 'done';
      backwards = !backwards;
      stage = (backwards ? 3 : -1);
      currentWord = emojis[~~(Math.random() * emojis.length)];
      time *= 0.9;
      break;
  }
  stage = stage + (backwards ? -1 : 1);

  setTimeout(newStage, card.className === 'done' ? 1000 : time);

  if (time < 600) {
    time = roundStartTime;
    beep(100, 200);
    setTimeout(() => { beep(100, 200, 0.2); }, 200);
    setTimeout(() => { beep(100, 300, 0.2); }, 450);
    setTimeout(() => { beep(100, 400, 0.2); }, 600);
  }
}

setTimeout(newStage, time);