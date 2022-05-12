class Key {
  value = null;
  specials = [
    'Tab',
    'CapsLock',
    'Backspace',
    'Del',
    'Enter',
    'ShiftLeft',
    'ShiftRight',
    'CtrlLeft',
    'CtrlRight',
    'Win',
    'AltLeft',
    'AltRight',
    'Space',
    '▲',
    '▼',
    '◀',
    '▶',
  ];
  symbols = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '`',
    '-',
    '=',
    '[',
    ']',
    '\\',
    ',',
    "'",
    ',',
    '.',
    '/',
  ];
  symbolsOnShift = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '~',
    '_',
    '+',
    '{',
    '}',
    '|',
    ':',
    '"',
    '<',
    '>',
    '?',
  ];
  symbolsRu = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    '\\',
    '.',
  ];
  symbolsOnShiftRu = [
    '!',
    '"',
    '№',
    ';',
    '%',
    ':',
    '?',
    '*',
    '(',
    ')',
    '_',
    '+',
    '/',
    ',',
  ];
  constructor(value, valueRu = null, width = 40) {
    let key = document.createElement('div');
    key.className = 'keyboard--key';
    if (this.specials.includes(value)) {
      key.classList.add('black');
      let temp = value;
      if (value == 'ShiftLeft' || value == 'ShiftRight') temp = 'Shift';
      else if (value == 'CtrlLeft' || value == 'CtrlRight') temp = 'Ctrl';
      else if (value == 'AltLeft' || value == 'AltRight') temp = 'Alt';
      else if (value == 'Space') temp = '';
      key.textContent = temp;
    } else {
      let lang = localStorage.getItem('display');
      let span1 = this.getLangSpan('eng', false);
      let span2 = this.getLangSpan('ru');
      if (lang == 'ru'){
        span1 = this.getLangSpan('eng');
        span2 = this.getLangSpan('ru', false);
      }
      this.fillKey(value, span1, this.symbols, this.symbolsOnShift);
      this.fillKey(valueRu, span2, this.symbolsRu, this.symbolsOnShiftRu);
      key.append(span1);
      key.append(span2);
    }
    key.style.width = `${width}px`;
    this.value = key;
  }
  getKey() {
    return this.value;
  }
  fillKey(value, span, symbols, symbolsOnShift) {
    let caseDown = span.querySelector('.caseDown');
    let caseUp = span.querySelector('.caseUp');
    let caps = span.querySelector('.caps');
    let shiftCaps = span.querySelector('.shiftCaps');

    caseDown.textContent = value;
    if (symbols.includes(value)) {
      caseUp.textContent = symbolsOnShift[symbols.indexOf(value)];
      caps.textContent = value;
      shiftCaps.textContent = symbolsOnShift[symbols.indexOf(value)];
    } else {
      caseUp.textContent = value.toUpperCase();
      caps.textContent = value.toUpperCase();
      shiftCaps.textContent = value;
    }
  }
  getLangSpan(lang = 'eng', hidden = true) {
    if (!hidden) localStorage.setItem('display', lang);

    let span = document.createElement('span');
    span.className = lang;
    if (hidden) span.classList.add('hidden');
    span.innerHTML =
      '<span class="caseDown"></span>' +
      '<span class="caseUp hidden"></span>' +
      '<span class="caps hidden"></span>' +
      '<span class="shiftCaps hidden"></span>';
    return span;
  }
}

class KeyBoard {
  keyboard = null;
  keyboardIds = [
    [
      'Backquote',
      'Digit1',
      'Digit2',
      'Digit3',
      'Digit4',
      'Digit5',
      'Digit6',
      'Digit7',
      'Digit8',
      'Digit9',
      'Digit0',
      'Minus',
      'Equal',
      'Backspace',
    ],
    [
      'Tab',
      'KeyQ',
      'KeyW',
      'KeyE',
      'KeyR',
      'KeyT',
      'KeyY',
      'KeyU',
      'KeyI',
      'KeyO',
      'KeyP',
      'BracketLeft',
      'BracketRight',
      'Backslash',
      'Delete',
    ],
    [
      'CapsLock',
      'KeyA',
      'KeyS',
      'KeyD',
      'KeyF',
      'KeyG',
      'KeyH',
      'KeyJ',
      'KeyK',
      'KeyL',
      'Semicolon',
      'Quote',
      'Enter',
    ],
    [
      'ShiftLeft',
      'KeyZ',
      'KeyX',
      'KeyC',
      'KeyV',
      'KeyB',
      'KeyN',
      'KeyM',
      'Comma',
      'Period',
      'Slash',
      'ArrowUp',
      'ShiftRight',
    ],
    [
      'ControlLeft',
      'MetaLeft',
      'AltLeft',
      'Space',
      'AltRight',
      'ArrowLeft',
      'ArrowDown',
      'ArrowRight',
      'ControlRight',
    ],
  ];
  EngKeyboard = [
    [
      '`',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'Backspace',
    ],
    [
      'Tab',
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      '[',
      ']',
      '\\',
      'Del',
    ],
    [
      'CapsLock',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      ';',
      "'",
      'Enter',
    ],
    [
      'ShiftLeft',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      ',',
      '.',
      '/',
      '▲',
      'ShiftRight',
    ],
    [
      'CtrlLeft',
      'Win',
      'AltLeft',
      'Space',
      'AltRight',
      '◀',
      '▼',
      '▶',
      'CtrlRight',
    ],
  ];
  RusKeyboard = [
    [
      'ё',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'Backspace',
    ],
    [
      'Tab',
      'й',
      'ц',
      'у',
      'к',
      'е',
      'н',
      'г',
      'ш',
      'щ',
      'з',
      'х',
      'ъ',
      '\\',
      'Del',
    ],
    [
      'CapsLock',
      'ф',
      'ы',
      'в',
      'а',
      'п',
      'р',
      'о',
      'л',
      'д',
      'ж',
      'э',
      'Enter',
    ],
    [
      'ShiftLeft',
      'я',
      'ч',
      'с',
      'м',
      'и',
      'т',
      'ь',
      'б',
      'ю',
      '.',
      '▲',
      'ShiftRight',
    ],
    [
      'CtrlLeft',
      'Win',
      'AltLeft',
      'Space',
      'AltRight',
      '◀',
      '▼',
      '▶',
      'CtrlRight',
    ],
  ];
  constructor() {
    this.keyboard = document.createElement('div');
    this.keyboard.className = 'keyboard';
    for (let i = 0; i < 5; i++) {
      let row = document.createElement('div');
      row.className = 'keyboard--row';
      for (let j = 0; j < this.EngKeyboard[i].length; j++) {
        let obj = new Key(
          this.EngKeyboard[i][j],
          this.RusKeyboard[i][j],
          this.getWidth(this.EngKeyboard[i][j])
        );
        let key = obj.getKey();
        key.id = this.keyboardIds[i][j];
        row.append(key);
      }
      this.keyboard.append(row);
    }
  }
  getKeyboard() {
    return this.keyboard;
  }
  getWidth(key) {
    switch (key) {
      case 'Backspace':
      case 'CapsLock':
      case 'ShiftLeft':
        return 100;
      case 'Tab':
        return 50;
      case 'Del':
        return 44;
      case 'Enter':
      case 'ShiftRight':
        return 86;
      case 'Space':
        return 330;
      default:
        return 40;
    }
  }
}

function CreateKeyboard() {
  let centralizer = document.createElement('div');
  centralizer.className = 'centralizer';

  let title = document.createElement('p');
  title.className = 'title';
  title.textContent = 'Virtual keyboard';
  let textarea = document.createElement('textarea');
  textarea.className = 'textarea';
  textarea.id = 'textarea';
  textarea.cols = 50;
  textarea.rows = 5;
  textarea.spellcheck = false;
  let keyboard = new KeyBoard().getKeyboard();
  let keyboardIds = new KeyBoard().keyboardIds;
  let description = document.createElement('p');
  description.className = 'description';
  description.textContent = 'Keyboard for Windows';
  let language = document.createElement('p');
  language.className = 'language';
  language.innerHTML =
    'Keyboard shortcut for language translation: left <span>shift + alt</span>';

  centralizer.append(title);
  centralizer.append(textarea);
  centralizer.append(keyboard);
  centralizer.append(description);
  centralizer.append(language);

  let body = document.querySelector('body');
  let ru = document.getElementsByClassName('ru');
  let eng = document.getElementsByClassName('eng');
  let caps = document.getElementsByClassName('caps');
  let caseDown = document.getElementsByClassName('caseDown');
  let caseUp = document.getElementsByClassName('caseUp');
  let shiftCaps = document.getElementsByClassName('shiftCaps');
  let specialKeys = [
    'Tab',
    'CapsLock',
    'Backspace',
    'Delete',
    'Enter',
    'ShiftLeft',
    'ShiftRight',
    'ControlLeft',
    'ControlRight',
    'MetaLeft',
    'AltLeft',
    'AltRight',
    'Space',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
  ];

  function addLangChange() {
    for (let i = 0; i < ru.length; i++) {
      ru[i].classList.toggle('hidden');
      eng[i].classList.toggle('hidden');
    }
    if (eng[0].classList.contains('hidden')){
      localStorage.setItem('display', 'ru');
    }
    else{
      localStorage.setItem('display', 'eng');
    }
    if (document.getElementById('CapsLock').classList.contains('active')) {
      for (let i = 0; i < caps.length; i++) {
        caseDown[i].classList.add('hidden');
        caseDown[i + 1].classList.add('hidden');
        caps[i].classList.remove('hidden');
        caps[i + 1].classList.remove('hidden');
        caseUp[i].classList.add('hidden');
        caseUp[i + 1].classList.add('hidden');
        shiftCaps[i].classList.add('hidden');
        shiftCaps[i + 1].classList.add('hidden');
      }
    } else {
      for (let i = 0; i < caps.length; i++) {
        caseDown[i].classList.remove('hidden');
        caseDown[i + 1].classList.remove('hidden');
        caps[i].classList.add('hidden');
        caps[i + 1].classList.add('hidden');
        caseUp[i].classList.add('hidden');
        caseUp[i + 1].classList.add('hidden');
        shiftCaps[i].classList.add('hidden');
        shiftCaps[i + 1].classList.add('hidden');
      }
    }
  }
  function addToTextarea(key, code){
    if (code == 'AltRight' || code == 'AltLeft' || code == 'ControlLeft' || code == 'ControlRight' || code == 'ShiftLeft' || code == 'ShiftRight' || code == 'CapsLock' || code == 'MetaLeft') return;
    if (code == 'Backspace') {
      let caretPos = getCaretPos(textarea);
      if (caretPos == 0){
        return;
      }
      let n = caretPos - 1;
      n = n < 0 ? 0 : n;
      let slice = textarea.textContent.slice(0, n);
      let slice1 = textarea.textContent.slice(caretPos);
      textarea.textContent = slice + slice1;
      if (caretPos == 1) return;
      textarea.selectionStart = slice.length-1;
      textarea.selectionEnd = slice.length-1;
    }
    if (code == 'Delete'){
      let n = getCaretPos(textarea);
      let slice = textarea.textContent.slice(0, n);
      textarea.textContent = slice + textarea.textContent.slice(getCaretPos(textarea) + 1, textarea.textContent.length);
      textarea.selectionStart = n;
    }
    else{
      let caretPos = getCaretPos(textarea);
      let symbol = "";
      if (!specialKeys.includes(code)){
        symbol = key.querySelector('span:not(.hidden)>span:not(.hidden)').textContent;
      }
      if (code == 'ArrowRight') symbol = '▶';
      if (code == 'ArrowUp')    symbol = '▲';
      if (code ==  'ArrowLeft') symbol = '◀';
      if (code == 'ArrowDown')  symbol = '▼'; 
      if (code == 'Space')      symbol = ' ';
      if (code == 'Tab')        symbol = '\t';
      if (code == 'Enter')      symbol = '\n';
      let slice = textarea.textContent.slice(0, caretPos);
      let slice1 = textarea.textContent.slice(caretPos);
      textarea.textContent = slice + symbol + slice1;
      textarea.selectionStart = slice.length+1;
    }
  }

  body.addEventListener('keydown', function (event) {
    let key = document.getElementById(event.code);
    event.preventDefault();
    if (
      event.code == 'Tab' ||
      event.code == 'ArrowRight' ||
      event.code == 'ArrowLeft' ||
      event.code == 'ArrowDown' ||
      event.code == 'ArrowUp' 
    ) {
      event.preventDefault();
      key.classList.add('active');
    } else if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      key.classList.add('active');
      if (document.getElementById('AltLeft').classList.contains('active')) {
        addLangChange();
      } else if (
        document.getElementById('CapsLock').classList.contains('active')
      ) {
        for (let i = 0; i < caps.length; i += 2) {
          shiftCaps[i].classList.remove('hidden');
          shiftCaps[i + 1].classList.remove('hidden');
          caps[i].classList.add('hidden');
          caps[i + 1].classList.add('hidden');
        }
      } else {
        for (let i = 0; i < caps.length; i += 2) {
          caseUp[i].classList.remove('hidden');
          caseUp[i + 1].classList.remove('hidden');
          caseDown[i].classList.add('hidden');
          caseDown[i + 1].classList.add('hidden');
        }
      }
    } else if (event.code == 'AltLeft') {
      key.classList.add('active');
      event.preventDefault();
      if (document.getElementById('ShiftLeft').classList.contains('active')) {
        addLangChange();
      }
    } else if (event.code == 'CapsLock') {
      key.classList.toggle('active');
      for (let i = 0; i < caps.length; i += 2) {
        caseDown[i].classList.toggle('hidden');
        caseDown[i + 1].classList.toggle('hidden');
        caps[i].classList.toggle('hidden');
        caps[i + 1].classList.toggle('hidden');
      }
    } else {
      key.classList.add('active');
    }
    addToTextarea(key, event.code);
  });

  body.addEventListener('keyup', function (event) {
    let key = document.getElementById(event.code);
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      if (document.getElementById('CapsLock').classList.contains('active')) {
        for (let i = 0; i < caps.length; i += 2) {
          shiftCaps[i].classList.add('hidden');
          shiftCaps[i + 1].classList.add('hidden');
          caps[i].classList.remove('hidden');
          caps[i + 1].classList.remove('hidden');
        }
      } else {
        for (let i = 0; i < caps.length; i += 2) {
          caseUp[i].classList.add('hidden');
          caseUp[i + 1].classList.add('hidden');
          caseDown[i].classList.remove('hidden');
          caseDown[i + 1].classList.remove('hidden');
        }
      }
      key.classList.remove('active');
    } else if (event.code != 'CapsLock') key.classList.remove('active');
  });

  body.addEventListener('mousedown', function(event){
    for (let i = 0; i < keyboardIds.length; i++){
      for (let j = 0; j < keyboardIds[i].length; j++) {
        let target = event.target.closest(`#${keyboardIds[i][j]}`);
        if (target){
          if (target.id == 'CapsLock'){
            target.classList.toggle('active');
            for (let i = 0; i < caps.length; i += 2) {
              caseDown[i].classList.toggle('hidden');
              caseDown[i + 1].classList.toggle('hidden');
              caps[i].classList.toggle('hidden');
              caps[i + 1].classList.toggle('hidden');
            }
          }
          if (target.id == 'ShiftLeft' || target.id == 'ShiftRight'){
            if (
              document.getElementById('CapsLock').classList.contains('active')
            ) {
              for (let i = 0; i < caps.length; i += 2) {
                shiftCaps[i].classList.remove('hidden');
                shiftCaps[i + 1].classList.remove('hidden');
                caps[i].classList.add('hidden');
                caps[i + 1].classList.add('hidden');
              }
            }
            else{
              for (let i = 0; i < caps.length; i += 2) {
                caseUp[i].classList.remove('hidden');
                caseUp[i + 1].classList.remove('hidden');
                caseDown[i].classList.add('hidden');
                caseDown[i + 1].classList.add('hidden');
              }
            }
          }
          else addToTextarea(target, target.id);
        }
      }
    }
  });

  body.addEventListener('mouseup', function(event){
    let arr = ['#ShiftLeft', '#ShiftRight'];
    
    for (let i = 0; i < arr.length; i++){
      let target = event.target.closest(arr[i]);
      if (target){
        if (document.getElementById('CapsLock').classList.contains('active')) {
          for (let i = 0; i < caps.length; i += 2) {
            shiftCaps[i].classList.add('hidden');
            shiftCaps[i + 1].classList.add('hidden');
            caps[i].classList.remove('hidden');
            caps[i + 1].classList.remove('hidden');
          }
        } else {
          for (let i = 0; i < caps.length; i += 2) {
            caseUp[i].classList.add('hidden');
            caseUp[i + 1].classList.add('hidden');
            caseDown[i].classList.remove('hidden');
            caseDown[i + 1].classList.remove('hidden');
          }
        }
      }
    }
  });

  function getCaretPos(obj) {
    obj.focus();
    if (obj.selectionStart!==false) return obj.selectionStart;
    else return 0;
  }

  keyboard.addEventListener('mousedown', function(event){
    event.preventDefault();
  });


  textarea.addEventListener('keydown', function(event){
    event.preventDefault();
  });

  body.append(centralizer);
}

CreateKeyboard();
