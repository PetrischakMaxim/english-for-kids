/** *** */ (function(modules) {
  // webpackBootstrap
  /** *** */ // The module cache
  /** *** */ const installedModules = {}; // The require function
  /** *** */
  /** *** */ /** *** */ function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ // Check if module is in cache
    /** *** */ if (installedModules[moduleId]) {
      /** *** */ return installedModules[moduleId].exports;
      /** *** */
    } // Create a new module (and put it into the cache)
    /** *** */ /** *** */ const module = (installedModules[moduleId] = {
      /** *** */ i: moduleId,
      /** *** */ l: false,
      /** *** */ exports: {},
      /** *** */
    }); // Execute the module function
    /** *** */
    /** *** */ /** *** */ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /** *** */
    /** *** */ /** *** */ module.l = true; // Return the exports of the module
    /** *** */
    /** *** */ /** *** */ return module.exports;
    /** *** */
  } // expose the modules object (__webpack_modules__)
  /** *** */
  /** *** */
  /** *** */ /** *** */ __webpack_require__.m = modules; // expose the module cache
  /** *** */
  /** *** */ /** *** */ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /** *** */
  /** *** */ /** *** */ __webpack_require__.d = function(
    exports,
    name,
    getter
  ) {
    /** *** */ if (!__webpack_require__.o(exports, name)) {
      /** *** */ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /** *** */
    }
    /** *** */
  }; // define __esModule on exports
  /** *** */
  /** *** */ /** *** */ __webpack_require__.r = function(exports) {
    /** *** */ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** *** */ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /** *** */
    }
    /** *** */ Object.defineProperty(exports, '__esModule', { value: true });
    /** *** */
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /** *** */
  /** *** */ /** *** */ /** *** */ /** *** */ /** *** */ /** *** */ __webpack_require__.t = function(
    value,
    mode
  ) {
    /** *** */ if (mode & 1) value = __webpack_require__(value);
    /** *** */ if (mode & 8) return value;
    /** *** */ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /** *** */ const ns = Object.create(null);
    /** *** */ __webpack_require__.r(ns);
    /** *** */ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value,
    });
    /** *** */ if (mode & 2 && typeof value !== 'string')
      for (const key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /** *** */ return ns;
    /** *** */
  }; // getDefaultExport function for compatibility with non-harmony modules
  /** *** */
  /** *** */ /** *** */ __webpack_require__.n = function(module) {
    /** *** */ const getter =
      module && module.__esModule
        ? /** *** */ function getDefault() {
            return module.default;
          }
        : /** *** */ function getModuleExports() {
            return module;
          };
    /** *** */ __webpack_require__.d(getter, 'a', getter);
    /** *** */ return getter;
    /** *** */
  }; // Object.prototype.hasOwnProperty.call
  /** *** */
  /** *** */ /** *** */ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /** *** */
  /** *** */ /** *** */ __webpack_require__.p = ''; // Load entry module and return exports
  /** *** */
  /** *** */
  /** *** */ /** *** */ return __webpack_require__(
    (__webpack_require__.s = './src/index.js')
  );
  /** *** */
})(
  /** ********************************************************************* */
  /** *** */ {
    /** */ './src/index.js':
      /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
      /*! no exports provided */
      /** */ function(module, __webpack_exports__, __webpack_require__) {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cardsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cardsData */ \"./src/modules/cardsData.js\");\n/* harmony import */ var _modules_createCategoryTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createCategoryTemplate */ \"./src/modules/createCategoryTemplate.js\");\n/* harmony import */ var _modules_createCardsTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createCardsTemplate */ \"./src/modules/createCardsTemplate.js\");\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar _cardsData = _toArray(_modules_cardsData__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    categories = _cardsData[0],\n    cards = _cardsData.slice(1);\n\nvar root = document.querySelector('#root');\nvar loader = document.querySelector('.loader');\n\nfunction toggleLoader() {\n  loader.classList.toggle('hidden');\n}\n\nfunction renderCategories() {\n  var categoryTemplate = Object(_modules_createCategoryTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(categories, cards);\n  root.append(categoryTemplate);\n  setTimeout(toggleLoader, 1500);\n}\n\nfunction createNavigation() {\n  var navigation = new DocumentFragment();\n  var nav = document.createElement('nav');\n  nav.classList.add('app__navigation');\n  document.querySelectorAll('.card--category').forEach(function (card) {\n    var link = document.createElement('a');\n    link.dataset.category = card.dataset.category;\n    link.textContent = card.querySelector('.card__name').textContent;\n    nav.append(link);\n  });\n  navigation.append(nav);\n  document.querySelector('#nav').append(navigation);\n}\n/* Run */\n\n\nrenderCategories();\ncreateNavigation();\n/* Toggle navbar */\n\nvar navToggler = document.querySelector('.navbar-toggler');\nvar headerNav = document.querySelector('#navbarHeader');\nnavToggler.addEventListener('click', function () {\n  return headerNav.classList.toggle('show');\n});\ndocument.body.addEventListener('click', function (evt) {\n  var currentTarget = evt.target;\n  /* Toggle state cards */\n\n  if (currentTarget.dataset.category) {\n    var stateClass = 'disabled';\n    toggleLoader();\n    currentTarget.classList.add(stateClass);\n    Array.from(root.children).forEach(function (el) {\n      return el.remove();\n    });\n    setTimeout(function () {\n      root.append(Object(_modules_createCardsTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cards[currentTarget.dataset.category]));\n    }, 100);\n    currentTarget.classList.remove(stateClass);\n    headerNav.classList.remove('show');\n    setTimeout(toggleLoader, 750);\n  }\n  /* Flip cards */\n\n\n  if (currentTarget.classList.contains('card__toggler')) {\n    var _stateClass = 'is-clicked';\n    var cardSelector = '.card';\n    currentTarget.closest(cardSelector).classList.add(_stateClass);\n    setTimeout(function () {\n      return currentTarget.closest(cardSelector).classList.remove(_stateClass);\n    }, 1500);\n  }\n  /* Play track */\n\n\n  if (currentTarget.classList.contains('card--item')) {\n    currentTarget.querySelector('audio').play();\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?"
        );

        /** */
      },

    /** */ './src/modules/cardsData.js':
      /*! **********************************!*\
  !*** ./src/modules/cardsData.js ***!
  \********************************* */
      /*! exports provided: default */
      /** */ function(module, __webpack_exports__, __webpack_require__) {
        eval(
          "__webpack_require__.r(__webpack_exports__);\nvar cardsData = [['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'], [{\n  word: 'cry',\n  translation: 'плакать',\n  image: './img/cards/cry.jpg',\n  audioSrc: 'audio/cry.mp3'\n}, {\n  word: 'dance',\n  translation: 'танцевать',\n  image: './img/cards/dance.jpg',\n  audioSrc: 'audio/dance.mp3'\n}, {\n  word: 'dive',\n  translation: 'нырять',\n  image: './img/cards/dive.jpg',\n  audioSrc: 'audio/dive.mp3'\n}, {\n  word: 'draw',\n  translation: 'рисовать',\n  image: './img/cards/draw.jpg',\n  audioSrc: 'audio/draw.mp3'\n}, {\n  word: 'fish',\n  translation: 'ловить рыбу',\n  image: './img/cards/fish.jpg',\n  audioSrc: 'audio/fish.mp3'\n}, {\n  word: 'fly',\n  translation: 'летать',\n  image: './img/cards/fly.jpg',\n  audioSrc: 'audio/fly.mp3'\n}, {\n  word: 'hug',\n  translation: 'обнимать',\n  image: './img/cards/hug.jpg',\n  audioSrc: 'audio/hug.mp3'\n}, {\n  word: 'jump',\n  translation: 'прыгать',\n  image: './img/cards/jump.jpg',\n  audioSrc: 'audio/jump.mp3'\n}], [{\n  word: 'open',\n  translation: 'открывать',\n  image: './img/cards/open.jpg',\n  audioSrc: 'audio/open.mp3'\n}, {\n  word: 'play',\n  translation: 'играть',\n  image: './img/cards/play.jpg',\n  audioSrc: 'audio/play.mp3'\n}, {\n  word: 'point',\n  translation: 'указывать',\n  image: './img/cards/point.jpg',\n  audioSrc: 'audio/point.mp3'\n}, {\n  word: 'ride',\n  translation: 'ездить',\n  image: './img/cards/ride.jpg',\n  audioSrc: 'audio/ride.mp3'\n}, {\n  word: 'run',\n  translation: 'бегать',\n  image: './img/cards/run.jpg',\n  audioSrc: 'audio/run.mp3'\n}, {\n  word: 'sing',\n  translation: 'петь',\n  image: './img/cards/sing.jpg',\n  audioSrc: 'audio/sing.mp3'\n}, {\n  word: 'skip',\n  translation: 'пропускать, прыгать',\n  image: './img/cards/skip.jpg',\n  audioSrc: 'audio/skip.mp3'\n}, {\n  word: 'swim',\n  translation: 'плавать',\n  image: './img/cards/swim.jpg',\n  audioSrc: 'audio/swim.mp3'\n}], [{\n  word: 'cat',\n  translation: 'кот',\n  image: './img/cards/cat.jpg',\n  audioSrc: 'audio/cat.mp3'\n}, {\n  word: 'chick',\n  translation: 'цыплёнок',\n  image: './img/cards/chick.jpg',\n  audioSrc: 'audio/chick.mp3'\n}, {\n  word: 'chicken',\n  translation: 'курица',\n  image: './img/cards/chicken.jpg',\n  audioSrc: 'audio/chicken.mp3'\n}, {\n  word: 'dog',\n  translation: 'собака',\n  image: './img/cards/dog.jpg',\n  audioSrc: 'audio/dog.mp3'\n}, {\n  word: 'horse',\n  translation: 'лошадь',\n  image: './img/cards/horse.jpg',\n  audioSrc: 'audio/horse.mp3'\n}, {\n  word: 'pig',\n  translation: 'свинья',\n  image: './img/cards/pig.jpg',\n  audioSrc: 'audio/pig.mp3'\n}, {\n  word: 'rabbit',\n  translation: 'кролик',\n  image: './img/cards/rabbit.jpg',\n  audioSrc: 'audio/rabbit.mp3'\n}, {\n  word: 'sheep',\n  translation: 'овца',\n  image: './img/cards/sheep.jpg',\n  audioSrc: 'audio/sheep.mp3'\n}], [{\n  word: 'bird',\n  translation: 'птица',\n  image: './img/cards/bird.jpg',\n  audioSrc: 'audio/bird.mp3'\n}, {\n  word: 'fish',\n  translation: 'рыба',\n  image: './img/cards/fish1.jpg',\n  audioSrc: 'audio/fish.mp3'\n}, {\n  word: 'frog',\n  translation: 'жаба',\n  image: './img/cards/frog.jpg',\n  audioSrc: 'audio/frog.mp3'\n}, {\n  word: 'giraffe',\n  translation: 'жирафа',\n  image: './img/cards/giraffe.jpg',\n  audioSrc: 'audio/giraffe.mp3'\n}, {\n  word: 'lion',\n  translation: 'лев',\n  image: './img/cards/lion.jpg',\n  audioSrc: 'audio/lion.mp3'\n}, {\n  word: 'mouse',\n  translation: 'мышь',\n  image: './img/cards/mouse.jpg',\n  audioSrc: 'audio/mouse.mp3'\n}, {\n  word: 'turtle',\n  translation: 'черепаха',\n  image: './img/cards/turtle.jpg',\n  audioSrc: 'audio/turtle.mp3'\n}, {\n  word: 'dolphin',\n  translation: 'дельфин',\n  image: './img/cards/dolphin.jpg',\n  audioSrc: 'audio/dolphin.mp3'\n}], [{\n  word: 'skirt',\n  translation: 'юбка',\n  image: './img/cards/skirt.jpg',\n  audioSrc: 'audio/skirt.mp3'\n}, {\n  word: 'pants',\n  translation: 'брюки',\n  image: './img/cards/pants.jpg',\n  audioSrc: 'audio/pants.mp3'\n}, {\n  word: 'blouse',\n  translation: 'блузка',\n  image: './img/cards/blouse.jpg',\n  audioSrc: 'audio/blouse.mp3'\n}, {\n  word: 'dress',\n  translation: 'платье',\n  image: './img/cards/dress.jpg',\n  audioSrc: 'audio/dress.mp3'\n}, {\n  word: 'boot',\n  translation: 'ботинок',\n  image: './img/cards/boot.jpg',\n  audioSrc: 'audio/boot.mp3'\n}, {\n  word: 'shirt',\n  translation: 'рубашка',\n  image: './img/cards/shirt.jpg',\n  audioSrc: 'audio/shirt.mp3'\n}, {\n  word: 'coat',\n  translation: 'пальто',\n  image: './img/cards/coat.jpg',\n  audioSrc: 'audio/coat.mp3'\n}, {\n  word: 'shoe',\n  translation: 'туфли',\n  image: './img/cards/shoe.jpg',\n  audioSrc: 'audio/shoe.mp3'\n}], [{\n  word: 'sad',\n  translation: 'грустный',\n  image: './img/cards/sad.jpg',\n  audioSrc: 'audio/sad.mp3'\n}, {\n  word: 'angry',\n  translation: 'сердитый',\n  image: './img/cards/angry.jpg',\n  audioSrc: 'audio/angry.mp3'\n}, {\n  word: 'happy',\n  translation: 'счастливый',\n  image: './img/cards/happy.jpg',\n  audioSrc: 'audio/happy.mp3'\n}, {\n  word: 'tired',\n  translation: 'уставший',\n  image: './img/cards/tired.jpg',\n  audioSrc: 'audio/tired.mp3'\n}, {\n  word: 'surprised',\n  translation: 'удивлённый',\n  image: './img/cards/surprised.jpg',\n  audioSrc: 'audio/surprised.mp3'\n}, {\n  word: 'scared',\n  translation: 'испуганный',\n  image: './img/cards/scared.jpg',\n  audioSrc: 'audio/scared.mp3'\n}, {\n  word: 'smile',\n  translation: 'улыбка',\n  image: './img/cards/smile.jpg',\n  audioSrc: 'audio/smile.mp3'\n}, {\n  word: 'laugh',\n  translation: 'смех',\n  image: './img/cards/laugh.jpg',\n  audioSrc: 'audio/laugh.mp3'\n}]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (cardsData);\n\n//# sourceURL=webpack:///./src/modules/cardsData.js?"
        );

        /** */
      },

    /** */ './src/modules/createCardsTemplate.js':
      /*! ********************************************!*\
  !*** ./src/modules/createCardsTemplate.js ***!
  \******************************************* */
      /*! exports provided: default */
      /** */ function(module, __webpack_exports__, __webpack_require__) {
        eval(
          "__webpack_require__.r(__webpack_exports__);\nfunction createCardsTemplate(data) {\n  var template = document.querySelector('#card-template');\n  var container = new DocumentFragment();\n  data.map(function (card) {\n    var cardWrapper = template.content.cloneNode(true);\n    var word = card.word,\n        translation = card.translation,\n        image = card.image,\n        audioSrc = card.audioSrc;\n    cardWrapper.querySelector('.card__image').src = image;\n    cardWrapper.querySelector('audio').src = audioSrc;\n    cardWrapper.querySelector('.card__name--eng').textContent = word;\n    cardWrapper.querySelector('.card__name--rus').textContent = translation;\n    container.append(cardWrapper);\n    return cardWrapper;\n  });\n  return container;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createCardsTemplate);\n\n//# sourceURL=webpack:///./src/modules/createCardsTemplate.js?"
        );

        /** */
      },

    /** */ './src/modules/createCategoryTemplate.js':
      /*! ***********************************************!*\
  !*** ./src/modules/createCategoryTemplate.js ***!
  \********************************************** */
      /*! exports provided: default */
      /** */ function(module, __webpack_exports__, __webpack_require__) {
        eval(
          "__webpack_require__.r(__webpack_exports__);\nfunction createCategoryTemplate(titles, arrContent) {\n  var template = document.querySelector('#card-category-template');\n  var container = new DocumentFragment();\n  titles.map(function (title, index) {\n    var category = template.content.cloneNode(true);\n    category.querySelector('.card__image').src = arrContent[index][index].image;\n    category.querySelector('.card').dataset.category = index;\n    category.querySelector('.card__name').textContent = title;\n    container.append(category);\n    return category;\n  });\n  return container;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createCategoryTemplate);\n\n//# sourceURL=webpack:///./src/modules/createCategoryTemplate.js?"
        );

        /** */
      },

    /** *** */
  }
);
