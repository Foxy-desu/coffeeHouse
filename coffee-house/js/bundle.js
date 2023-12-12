/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./coffee-house/js/handlers/burger-menu-handler.js":
/*!*********************************************************!*\
  !*** ./coffee-house/js/handlers/burger-menu-handler.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction burgerMenuHandler() {\n  //burger handler variables\n  var body = document.body;\n  var buttonOpen = document.querySelector('.burger');\n  var menu = document.querySelector('.header-block__nav');\n  var menuItems = menu.querySelectorAll('.navigation-item');\n\n  //event with buttons (close/open)\n  buttonOpen.addEventListener('click', function (event) {\n    buttonOpen.classList.toggle('js-burger-button_become-close');\n    menu.classList.toggle('js-menu_active');\n    body.classList.toggle('js-body_no-scroll');\n  });\n\n  //event with menu items\n  menuItems.forEach(function (element) {\n    element.addEventListener('click', function (event) {\n      menu.classList.remove('js-menu_active');\n      buttonOpen.classList.remove('js-burger-button_become-close');\n      body.classList.remove('js-body_no-scroll');\n    });\n  });\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenuHandler);\n\n//# sourceURL=webpack://coffee-house/./coffee-house/js/handlers/burger-menu-handler.js?");

/***/ }),

/***/ "./coffee-house/js/handlers/menu-handler.js":
/*!**************************************************!*\
  !*** ./coffee-house/js/handlers/menu-handler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _products_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products/products */ \"./coffee-house/js/products/products.js\");\n\nfunction menuHandler() {\n  var coffeeList = _products_products__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menuPage.coffee;\n  var teaList = _products_products__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menuPage.tea;\n  var dessertList = _products_products__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menuPage.dessert;\n  console.log(teaList);\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuHandler);\n\n//# sourceURL=webpack://coffee-house/./coffee-house/js/handlers/menu-handler.js?");

/***/ }),

/***/ "./coffee-house/js/handlers/slider-handler.js":
/*!****************************************************!*\
  !*** ./coffee-house/js/handlers/slider-handler.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sliderHandler() {\n  if (document.querySelector('.favorites-coffee-section')) {\n    //slider move \n    var rollSlider = function rollSlider() {\n      sliderLine.style.transform = 'translateX(-' + count * width + 'px)';\n    }; //adaptive slider size -xyeta-\n    var resize = function resize() {\n      width = document.querySelector('.slider__content-wrap').offsetWidth;\n      console.log(width);\n      sliderLine.style.width = \"\".concat(width * articlesArray.length, \"px\");\n      articlesArray.forEach(function (elem) {\n        elem.style.width = \"\".concat(width);\n        elem.style.height = \"auto\";\n      });\n      rollSlider();\n    };\n    //button-switch \n    var buttonClick = function buttonClick() {\n      sliderBtnPrev.addEventListener('click', function (event) {\n        count--;\n        if (count < 0) {\n          count = articlesArray.length - 1;\n        }\n        currentSlide(count);\n        rollSlider();\n        clearInterval(timerId);\n        timerId = setInterval(automatic, 6000);\n        setInterval(timerId);\n      });\n      sliderBtnNext.addEventListener('click', function (event) {\n        count++;\n        if (count >= articlesArray.length) {\n          count = 0;\n        }\n        currentSlide(count);\n        rollSlider();\n        clearInterval(timerId);\n        timerId = setInterval(automatic, 6000);\n        setInterval(timerId);\n      });\n    };\n    //make pagination button colored\n    var currentSlide = function currentSlide(index) {\n      // console.log(`pagination works! now index is at ${index} point`)\n      sliderPaginationPoints.forEach(function (elem) {\n        return elem.classList.remove('js-coloring');\n      });\n      sliderPaginationPoints[index].classList.add('js-coloring');\n    };\n    // nobody controls that, it's totally automatic\n    var automatic = function automatic() {\n      count++;\n      if (count >= articlesArray.length) {\n        count = 0;\n      }\n      currentSlide(count);\n      rollSlider();\n      setInterval(timerId, 0);\n    };\n    //mobile devices swiping \n    var mobileSwipe = function mobileSwipe() {\n      //some usefull variables\n      var posX1 = 0,\n        posInt = 0,\n        posX2 = 0;\n      function getEvent() {\n        return event.type.search('touch') !== -1 ? event.touches[0] : event;\n      }\n      swipeArea.addEventListener('touchstart', swipeStart);\n      swipeArea.addEventListener('touchmove', swipeAction);\n      swipeArea.addEventListener('touchend', swipeEnd);\n\n      //function on touchStart\n      function swipeStart(event) {\n        event.preventDefault();\n        var evt = getEvent();\n        posInt = posX1 = evt.clientX; //initial position of the cursor \n      }\n\n      //function on touchChange\n      function swipeAction(event) {\n        var evt = getEvent();\n        // event.preventDefault();\n\n        posX2 = posX1 - evt.clientX; // difference between touch start point and current finger location\n        posX1 = evt.clientX;\n      }\n\n      //function on touchEnd\n      function swipeEnd(event) {\n        // event.preventDefault();\n\n        if (posX1 !== posInt) {\n          if (posX2 < 0) {\n            count--;\n            if (count < 0) {\n              count = articlesArray.length - 1;\n            }\n            currentSlide(count);\n            rollSlider();\n            clearInterval(timerId);\n            timerId = setInterval(automatic, 6000);\n            setInterval(timerId);\n            console.log(posX1, posInt);\n          }\n          if (posX2 > 0) {\n            count++;\n            if (count >= articlesArray.length) {\n              count = 0;\n            }\n            currentSlide(count);\n            rollSlider();\n            clearInterval(timerId);\n            timerId = setInterval(automatic, 6000);\n            setInterval(timerId);\n            console.log(posX1, posInt);\n          }\n        } else return;\n      }\n    };\n    //slider consts\n    var articlesArray = document.querySelectorAll('.slider__article'),\n      //slides\n      sliderLine = document.querySelector('.slider__articles'),\n      //slider track\n      sliderPaginationPoints = document.querySelectorAll('.pagination-fill'),\n      sliderBtnNext = document.querySelector('.button-right'),\n      //btn next\n      sliderBtnPrev = document.querySelector('.button-left'),\n      //btn prev\n      swipeArea = document.querySelector('.slider__content'),\n      //slider\n      slider = document.querySelector('.slider__content-wrap'); //slider-list\n\n    //timer\n    var timerId = setInterval(automatic, 6000);\n\n    //slider variables\n    var count = 0,\n      width;\n\n    //make slider change with the window resizing\n    window.addEventListener('resize', resize);\n    window.addEventListener('resize', currentSlide(count));\n    resize();\n    buttonClick();\n    currentSlide(count);\n    ;\n    automatic();\n    mobileSwipe();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderHandler);\n\n//# sourceURL=webpack://coffee-house/./coffee-house/js/handlers/slider-handler.js?");

/***/ }),

/***/ "./coffee-house/js/index.js":
/*!**********************************!*\
  !*** ./coffee-house/js/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handlers_burger_menu_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/burger-menu-handler */ \"./coffee-house/js/handlers/burger-menu-handler.js\");\n/* harmony import */ var _handlers_slider_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/slider-handler */ \"./coffee-house/js/handlers/slider-handler.js\");\n/* harmony import */ var _handlers_menu_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/menu-handler */ \"./coffee-house/js/handlers/menu-handler.js\");\n\n\n\n(0,_handlers_burger_menu_handler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_handlers_slider_handler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_handlers_menu_handler__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://coffee-house/./coffee-house/js/index.js?");

/***/ }),

/***/ "./coffee-house/js/products/products.js":
/*!**********************************************!*\
  !*** ./coffee-house/js/products/products.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar store = {\n  menuPage: {\n    coffee: [{\n      name: \"Irish coffee\",\n      description: \"Fragrant black coffee with Jameson Irish whiskey and whipped milk\",\n      price: \"7.00\",\n      category: \"coffee\",\n      thumbnail: '../../images/png/coffee-1.png',\n      sizes: {\n        s: {\n          size: \"200 ml\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"300 ml\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"400 ml\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Sugar\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Cinnamon\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Syrup\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Kahlua coffee\",\n      description: \"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk\",\n      price: \"7.00\",\n      category: \"coffee\",\n      thumbnail: '../../images/png/coffee-2.png',\n      sizes: {\n        s: {\n          size: \"200 ml\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"300 ml\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"400 ml\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Sugar\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Cinnamon\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Syrup\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Honey raf\",\n      description: \"Espresso with frothed milk, cream and aromatic honey\",\n      price: \"5.50\",\n      category: \"coffee\",\n      thumbnail: '../../images/png/coffee-3.png',\n      sizes: {\n        s: {\n          size: \"200 ml\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"300 ml\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"400 ml\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Sugar\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Cinnamon\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Syrup\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Ice cappuccino\",\n      description: \"Cappuccino with soft thick foam in summer version with ice\",\n      price: \"5.00\",\n      category: \"coffee\",\n      thumbnail: '../../images/png/coffee-4.png',\n      sizes: {\n        s: {\n          size: \"200 ml\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"300 ml\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"400 ml\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Sugar\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Cinnamon\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Syrup\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Espresso\",\n      description: \"Classic black coffee\",\n      price: \"4.50\",\n      category: \"coffee\",\n      thumbnail: '../../images/png/coffee-5.png',\n      sizes: {\n        s: {\n          size: \"200 ml\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"300 ml\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"400 ml\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Sugar\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Cinnamon\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Syrup\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Latte\",\n      description: \"Espresso coffee with the addition of steamed milk and dense milk foam\",\n      price: \"5.50\",\n      category: \"coffee\",\n      thumbnail: '../../images/png/coffee-6.png',\n      sizes: {\n        s: {\n          size: \"200 ml\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"300 ml\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"400 ml\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Sugar\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Cinnamon\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Syrup\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Latte macchiato\",\n      description: \"Espresso with frothed milk and chocolate\",\n      price: \"5.50\",\n      category: \"coffee\",\n      thumbnail: '../../images/png/coffee-7.png',\n      sizes: {\n        s: {\n          size: \"200 ml\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"300 ml\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"400 ml\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Sugar\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Cinnamon\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Syrup\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Coffee with cognac\",\n      description: \"Fragrant black coffee with cognac and whipped cream\",\n      price: \"6.50\",\n      category: \"coffee\",\n      thumbnail: '../../images/png/coffee-8.png',\n      sizes: {\n        s: {\n          size: \"200 ml\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"300 ml\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"400 ml\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Sugar\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Cinnamon\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Syrup\",\n        addPrice: \"0.50\"\n      }]\n    }],\n    tea: [{\n      name: \"Moroccan\",\n      description: \"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint\",\n      price: \"4.50\",\n      category: \"tea\",\n      thumbnail: '../../images/png/tea-1.png',\n      sizes: {\n        s: {\n          size: \"200 ml\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"300 ml\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"400 ml\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Sugar\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Lemon\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Syrup\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Ginger\",\n      description: \"Original black tea with fresh ginger, lemon and honey\",\n      price: \"5.00\",\n      category: \"tea\",\n      thumbnail: '../../images/png/tea-2.png',\n      sizes: {\n        s: {\n          size: \"200 ml\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"300 ml\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"400 ml\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Sugar\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Lemon\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Syrup\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Cranberry\",\n      description: \"Invigorating black tea with cranberry and honey\",\n      price: \"5.00\",\n      category: \"tea\",\n      thumbnail: '../../images/png/tea-3.png',\n      sizes: {\n        s: {\n          size: \"200 ml\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"300 ml\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"400 ml\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Sugar\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Lemon\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Syrup\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Sea buckthorn\",\n      description: \"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon\",\n      price: \"5.50\",\n      category: \"tea\",\n      thumbnail: '../../images/png/tea-4.png',\n      sizes: {\n        s: {\n          size: \"200 ml\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"300 ml\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"400 ml\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Sugar\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Lemon\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Syrup\",\n        addPrice: \"0.50\"\n      }]\n    }],\n    dessert: [{\n      name: \"Marble cheesecake\",\n      description: \"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam\",\n      price: \"3.50\",\n      category: \"dessert\",\n      thumbnail: '../../images/png/dessert-1.png',\n      sizes: {\n        s: {\n          size: \"50 g\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"100 g\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"200 g\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Berries\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Nuts\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Jam\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Red velvet\",\n      description: \"Layer cake with cream cheese frosting\",\n      price: \"4.00\",\n      category: \"dessert\",\n      thumbnail: '../../images/png/dessert-2.png',\n      sizes: {\n        s: {\n          size: \"50 g\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"100 g\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"200 g\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Berries\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Nuts\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Jam\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Cheesecakes\",\n      description: \"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar\",\n      price: \"4.50\",\n      category: \"dessert\",\n      thumbnail: '../../images/png/dessert-3.png',\n      sizes: {\n        s: {\n          \"size\": \"50 g\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          \"size\": \"100 g\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          \"size\": \"200 g\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Berries\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Nuts\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Jam\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Creme brulee\",\n      description: \"Delicate creamy dessert in a caramel basket with wild berries\",\n      price: \"4.00\",\n      category: \"dessert\",\n      thumbnail: '../../images/png/dessert-4.png',\n      sizes: {\n        s: {\n          size: \"50 g\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"100 g\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"200 g\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Berries\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Nuts\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Jam\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Pancakes\",\n      description: \"Tender pancakes with strawberry jam and fresh strawberries\",\n      price: \"4.50\",\n      category: \"dessert\",\n      thumbnail: '../../images/png/dessert-5.png',\n      sizes: {\n        s: {\n          \"size\": \"50 g\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          \"size\": \"100 g\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          \"size\": \"200 g\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Berries\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Nuts\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Jam\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Honey cake\",\n      description: \"Classic honey cake with delicate custard\",\n      price: \"4.50\",\n      category: \"dessert\",\n      thumbnail: '../../images/png/dessert-6.png',\n      sizes: {\n        s: {\n          size: \"50 g\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"100 g\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"200 g\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Berries\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Nuts\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Jam\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Chocolate cake\",\n      description: \"Cake with hot chocolate filling and nuts with dried apricots\",\n      price: \"5.50\",\n      category: \"dessert\",\n      thumbnail: '../../images/png/dessert-7.png',\n      sizes: {\n        s: {\n          size: \"50 g\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"100 g\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"200 g\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Berries\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Nuts\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Jam\",\n        addPrice: \"0.50\"\n      }]\n    }, {\n      name: \"Black forest\",\n      description: \"A combination of thin sponge cake with cherry jam and light chocolate mousse\",\n      price: \"6.50\",\n      category: \"dessert\",\n      thumbnail: '../../images/png/dessert-8.png',\n      sizes: {\n        s: {\n          size: \"50 g\",\n          addPrice: \"0.00\"\n        },\n        m: {\n          size: \"100 g\",\n          addPrice: \"0.50\"\n        },\n        l: {\n          size: \"200 g\",\n          addPrice: \"1.00\"\n        }\n      },\n      additives: [{\n        name: \"Berries\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Nuts\",\n        addPrice: \"0.50\"\n      }, {\n        name: \"Jam\",\n        addPrice: \"0.50\"\n      }]\n    }]\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack://coffee-house/./coffee-house/js/products/products.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./coffee-house/js/index.js");
/******/ 	
/******/ })()
;