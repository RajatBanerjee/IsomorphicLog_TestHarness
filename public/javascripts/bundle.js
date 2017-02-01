/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var log;

function logger(applicationName) {
    if (true) {
        log = __webpack_require__(1)({ application: applicationName })
    } else {
        log = require('./loggers/serverlogger.js')(applicationName);
    }

    //log= require('./loggers/test')()
    return log;
}


module.exports = logger;



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";




/** Private  variables*/
var message = "";
var application = "";
var sessionId = "";
var levels = {
    info: 'info',
    warn: 'warn',
    error: 'error'
}

module.exports = function logger(options) {

    
    /** Public variable */
    var log = {
        init: function (options) {
            application = typeof (options.application) != "undefined" ? options.application : "Test-Application";
            sessionId = typeof (options.sessionId) != "undefined" ? options.sessionId : "123456";
            console.log("init log");
        },
        info: function (message) {
            console.log("log");
            fireLog(message, levels.info);
        },
        warn: function (message) {
            console.warn("warning");
            fireLog(message, levels.warn);
        },
        error: function (message) {
            console.error("error");
            fireLog(message, levels.error);
        }
    }

    /**listener on the window for any unhandled exception */
    window.onerror = function (message, file, line, col, error) {
        fireLog(error, levels.error);
    };

    return log;
}

function fireLog(message, level) {
         $.post('http://localhost:3001/logger', {
             message: message,
             application: application,
             sessionId: sessionId,
             level: level
         }).then(function (response) {
             console.log(response);
         })
 
     }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

 var log = __webpack_require__(0)('testharness-application');
     log.info("ola")
// log.info('we are the champions')

/***/ })
/******/ ]);