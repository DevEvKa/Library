/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 591:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(8)["default"]);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(591)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 123:
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}("undefined"!=typeof self?self:this,(function(){return function(){"use strict";var t={407:function(t,n,e){e.d(n,{default:function(){return N}});var o=/([:*])(\w+)/g,r=/\*/g,i=/\/\?/g;function a(t){return void 0===t&&(t="/"),v()?location.pathname+location.search+location.hash:t}function s(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function c(t){return"string"==typeof t}function u(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function h(t){var n=s(t).split(/\?(.*)?$/);return[s(n[0]),n.slice(1).join("")]}function f(t){for(var n={},e=t.split("&"),o=0;o<e.length;o++){var r=e[o].split("=");if(""!==r[0]){var i=decodeURIComponent(r[0]);n[i]?(Array.isArray(n[i])||(n[i]=[n[i]]),n[i].push(decodeURIComponent(r[1]||""))):n[i]=decodeURIComponent(r[1]||"")}}return n}function l(t,n){var e,a=h(s(t.currentLocationPath)),l=a[0],p=a[1],d=""===p?null:f(p),v=[];if(c(n.path)){if(e="(?:/^|^)"+s(n.path).replace(o,(function(t,n,e){return v.push(e),"([^/]+)"})).replace(r,"?(?:.*)").replace(i,"/?([^/]+|)")+"$",""===s(n.path)&&""===s(l))return{url:l,queryString:p,hashString:u(t.to),route:n,data:null,params:d}}else e=n.path;var g=new RegExp(e,""),m=l.match(g);if(m){var y=c(n.path)?function(t,n){return 0===n.length?null:t?t.slice(1,t.length).reduce((function(t,e,o){return null===t&&(t={}),t[n[o]]=decodeURIComponent(e),t}),null):null}(m,v):m.groups?m.groups:m.slice(1);return{url:s(l.replace(new RegExp("^"+t.instance.root),"")),queryString:p,hashString:u(t.to),route:n,data:y,params:d}}return!1}function p(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function d(t,n){return void 0===t[n]||!0===t[n]}function v(){return"undefined"!=typeof window}function g(t,n){return void 0===t&&(t=[]),void 0===n&&(n={}),t.filter((function(t){return t})).forEach((function(t){["before","after","already","leave"].forEach((function(e){t[e]&&(n[e]||(n[e]=[]),n[e].push(t[e]))}))})),n}function m(t,n,e){var o=n||{},r=0;!function n(){t[r]?Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](o)?t[r][1]:t[r][2])),n()):t[r](o,(function(t){void 0===t||!0===t?(r+=1,n()):e&&e(o)})):e&&e(o)}()}function y(t,n){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=a(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),n()}function _(t,n){for(var e=0;e<t.instance.routes.length;e++){var o=l(t,t.instance.routes[e]);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),"ONE"===t.resolveOptions.strategy))return void n()}n()}function k(t,n){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),n()}function O(t,n){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),n(!1)):n()}m.if=function(t,n,e){return Array.isArray(n)||(n=[n]),Array.isArray(e)||(e=[e]),[t,n,e]};var w=v(),L=p();function b(t,n){if(d(t.navigateOptions,"updateBrowserURL")){var e=("/"+t.to).replace(/\/\//g,"/"),o=w&&t.resolveOptions&&!0===t.resolveOptions.hash;L?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",o?"#"+e:e),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout((function(){if(!o){var n=location.hash;location.hash="",location.hash=n}t.instance.__freezeListening=!1}),1))):w&&(window.location.href=t.to)}n()}function A(t,n){var e=t.instance;e.lastResolved()?m(e.lastResolved().map((function(n){return function(e,o){if(n.route.hooks&&n.route.hooks.leave){var r=!1,i=t.instance.matchLocation(n.route.path,t.currentLocationPath,!1);r="*"!==n.route.path?!i:!(t.matches&&t.matches.find((function(t){return n.route.path===t.route.path}))),d(t.navigateOptions,"callHooks")&&r?m(n.route.hooks.leave.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}})).concat([function(){return o()}])):o()}else o()}})),{},(function(){return n()})):n()}function P(t,n){d(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),n()}var R=[function(t,n){var e=t.instance.lastResolved();if(e&&e[0]&&e[0].route===t.match.route&&e[0].url===t.match.url&&e[0].queryString===t.match.queryString)return e.forEach((function(n){n.route.hooks&&n.route.hooks.already&&d(t.navigateOptions,"callHooks")&&n.route.hooks.already.forEach((function(n){return n(t.match)}))})),void n(!1);n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.before&&d(t.navigateOptions,"callHooks")?m(t.match.route.hooks.before.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.match)}})).concat([function(){return n()}])):n()},function(t,n){d(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.after&&d(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach((function(n){return n(t.match)})),n()}],S=[A,function(t,n){var e=t.instance._notFoundRoute;if(e){t.notFoundHandled=!0;var o=h(t.currentLocationPath),r=o[0],i=o[1],a=u(t.to);e.path=s(r);var c={url:e.path,queryString:i,hashString:a,data:null,route:e,params:""!==i?f(i):null};t.matches=[c],t.match=c}n()},m.if((function(t){return t.notFoundHandled}),R.concat([P]),[function(t,n){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),n()},function(t,n){t.instance._setCurrent(null),n()}])];function E(){return(E=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}function x(t,n){var e=0;A(t,(function o(){e!==t.matches.length?m(R,E({},t,{match:t.matches[e]}),(function(){e+=1,o()})):P(t,n)}))}function H(t){t.instance.__markAsClean(t)}function j(){return(j=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var C="[data-navigo]";function N(t,n){var e,o=n||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:C},r=this,i="/",d=null,w=[],L=!1,A=p(),P=v();function R(t){return t.indexOf("#")>=0&&(t=!0===o.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function E(t){return s(i+"/"+s(t))}function N(t,n,e,o){return t=c(t)?E(t):t,{name:o||s(String(t)),path:t,handler:n,hooks:g(e)}}function U(t,n){if(!r.__dirty){r.__dirty=!0,t=t?s(i)+"/"+s(t):void 0;var e={instance:r,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:j({},o,n)};return m([y,_,m.if((function(t){var n=t.matches;return n&&n.length>0}),x,S)],e,H),!!e.matches&&e.matches}r.__waiting.push((function(){return r.resolve(t,n)}))}function q(t,n){if(r.__dirty)r.__waiting.push((function(){return r.navigate(t,n)}));else{r.__dirty=!0,t=s(i)+"/"+s(t);var e={instance:r,to:t,navigateOptions:n||{},resolveOptions:n&&n.resolveOptions?n.resolveOptions:o,currentLocationPath:R(t)};m([k,O,_,m.if((function(t){var n=t.matches;return n&&n.length>0}),x,S),b,H],e,H)}}function F(){if(P)return(P?[].slice.call(document.querySelectorAll(o.linksSelector||C)):[]).forEach((function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(n){if((n.ctrlKey||n.metaKey)&&"a"===n.target.tagName.toLowerCase())return!1;var e=t.getAttribute("href");if(null==e)return!1;if(e.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var o=new URL(e);e=o.pathname+o.search}catch(t){}var i=function(t){if(!t)return{};var n,e=t.split(","),o={};return e.forEach((function(t){var e=t.split(":").map((function(t){return t.replace(/(^ +| +$)/g,"")}));switch(e[0]){case"historyAPIMethod":o.historyAPIMethod=e[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=e[1];break;case"resolveOptionsHash":n||(n={}),n.hash="true"===e[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":o[e[0]]="true"===e[1]}})),n&&(o.resolveOptions=n),o}(t.getAttribute("data-navigo-options"));L||(n.preventDefault(),n.stopPropagation(),r.navigate(s(e),i))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)})),r}function I(t,n,e){var o=w.find((function(n){return n.name===t})),r=null;if(o){if(r=o.path,n)for(var a in n)r=r.replace(":"+a,n[a]);r=r.match(/^\//)?r:"/"+r}return r&&e&&!e.includeRoot&&(r=r.replace(new RegExp("^/"+i),"")),r}function M(t){var n=h(s(t)),o=n[0],r=n[1],i=""===r?null:f(r);return{url:o,queryString:r,hashString:u(t),route:N(o,(function(){}),[e],o),data:null,params:i}}function T(t,n,e){return"string"==typeof n&&(n=z(n)),n?(n.hooks[t]||(n.hooks[t]=[]),n.hooks[t].push(e),function(){n.hooks[t]=n.hooks[t].filter((function(t){return t!==e}))}):(console.warn("Route doesn't exists: "+n),function(){})}function z(t){return"string"==typeof t?w.find((function(n){return n.name===E(t)})):w.find((function(n){return n.handler===t}))}t?i=s(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=i,this.routes=w,this.destroyed=L,this.current=d,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,n,o){var r=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(o=n,n=t,t=i),w.push(N(t,n,[e,o])),this):(Object.keys(t).forEach((function(n){if("function"==typeof t[n])r.on(n,t[n]);else{var o=t[n],i=o.uses,a=o.as,s=o.hooks;w.push(N(n,i,[e,s],a))}})),this)},this.off=function(t){return this.routes=w=w.filter((function(n){return c(t)?s(n.path)!==s(t):"function"==typeof t?t!==n.handler:String(n.path)!==String(t)})),this},this.resolve=U,this.navigate=q,this.navigateByName=function(t,n,e){var o=I(t,n);return null!==o&&(q(o.replace(new RegExp("^/?"+i),""),e),!0)},this.destroy=function(){this.routes=w=[],A&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=L=!0},this.notFound=function(t,n){return r._notFoundRoute=N("*",t,[e,n],"__NOT_FOUND__"),this},this.updatePageLinks=F,this.link=function(t){return"/"+i+"/"+s(t)},this.hooks=function(t){return e=t,this},this.extractGETParameters=function(t){return h(R(t))},this.lastResolved=function(){return d},this.generate=I,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var n={instance:r,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:o};return _(n,(function(){})),!!n.matches&&n.matches},this.matchLocation=function(t,n,e){void 0===n||void 0!==e&&!e||(n=E(n));var o={instance:r,to:n,currentLocationPath:n};return y(o,(function(){})),"string"==typeof t&&(t=void 0===e||e?E(t):t),l(o,{name:String(t),path:t,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return M(s(a(i)).replace(new RegExp("^"+i),""))},this.addBeforeHook=T.bind(this,"before"),this.addAfterHook=T.bind(this,"after"),this.addAlreadyHook=T.bind(this,"already"),this.addLeaveHook=T.bind(this,"leave"),this.getRoute=z,this._pathToMatchObject=M,this._clean=s,this._checkForAHash=R,this._setCurrent=function(t){return d=r.current=t},function(){A&&(this.__popstateListener=function(){r.__freezeListening||U()},window.addEventListener("popstate",this.__popstateListener))}.call(this),F.call(this)}}},n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{}};return t[o](r,r.exports,e),r.exports}return e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e(407)}().default}));
//# sourceMappingURL=navigo.min.js.map

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/navigo/lib/navigo.min.js
var navigo_min = __webpack_require__(123);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(757);
;// CONCATENATED MODULE: ./src/js/modules/serviceBook.js


var API_URI = 'https://mysterious-earth-97472.herokuapp.com/';
var getBooks = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(id) {
    var response;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(API_URI, "api/books/").concat(id || ''));

          case 2:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", response.json());

          case 5:
            throw new Error(response.statusText);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getBooks(_x) {
    return _ref.apply(this, arguments);
  };
}();
var searchBooks = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(search) {
    var response;
    return regenerator.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("".concat(API_URI, "api/books/?search=").concat(search));

          case 2:
            response = _context2.sent;

            if (!response.ok) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", response.json());

          case 5:
            throw new Error(response.statusText);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function searchBooks(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var addBooks = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(data) {
    var response;
    return regenerator.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("".concat(API_URI, "api/books/"), {
              method: 'POST',
              body: JSON.stringify(data)
            });

          case 2:
            response = _context3.sent;

            if (!response.ok) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", response.json());

          case 5:
            throw new Error(response.statusText);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function addBooks(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getLabels = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4() {
    var response;
    return regenerator.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch("".concat(API_URI, "api/label/"));

          case 2:
            response = _context4.sent;

            if (!response.ok) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", response.json());

          case 5:
            throw new Error(response.statusText);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getLabels() {
    return _ref4.apply(this, arguments);
  };
}();
var deleteBooks = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(id) {
    var response;
    return regenerator.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetch("".concat(API_URI, "api/books/").concat(id), {
              method: 'DELETE'
            });

          case 2:
            response = _context5.sent;

            if (!response.ok) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", response.json());

          case 5:
            throw new Error(response.statusText);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteBooks(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
var editBook = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6(id, data) {
    var response;
    return regenerator.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return fetch("".concat(API_URI, "api/books/").concat(id), {
              method: 'PATCH',
              body: JSON.stringify(data)
            });

          case 2:
            response = _context6.sent;

            if (!response.ok) {
              _context6.next = 5;
              break;
            }

            return _context6.abrupt("return", response.json());

          case 5:
            throw new Error(response.statusText);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function editBook(_x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./src/js/modules/declOfNum.js
var declOfNum = function declOfNum(n, titles) {
  return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
};
;// CONCATENATED MODULE: ./src/js/modules/renderListBooks.js






var data = {
  books: [],
  labels: [],
  sortBook: function sortBook(sort) {
    return this.books.sort(function (a, b) {
      if (sort === 'up') return a.rating > b.rating ? 1 : -1;
      if (sort === 'down') return a.rating < b.rating ? 1 : -1;
    });
  },
  filterBook: function filterBook(value) {
    return this.books.filter(function (book) {
      return book.label === value;
    });
  }
};
var libraryList = document.querySelector('.library__list');
var fieldsList = document.querySelector('.fields__list_filter');
var libraryCount = document.querySelector('.library__count');

var getStars = function getStars(rating) {
  var stars = [];

  for (var i = 0; i < 5; i++) {
    if (i === 0) {
      stars.push("<img class=\"cart__rating-star\" src=\"img/star_rating_filled.svg\" alt=\"\u0420\u0435\u0439\u0442\u0438\u043D\u0433 ".concat(rating, " \u0438\u0437 5\">"));
    } else if (i < rating) {
      stars.push("<img class=\"cart__rating-star\" src=\"img/star_rating_filled.svg\" alt=\"\">");
    } else {
      stars.push("<img class=\"cart__rating-star\" src=\"img/star_rating_empty.svg\" alt=\"\">");
    }
  }

  return stars;
};

var renderList = function renderList() {
  var books = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : data.books;
  libraryList.textContent = '';
  libraryCount.textContent = declOfNum(books.length, ['??????????', '??????????', '????????']);
  var items = books.map(function (_ref) {
    var author = _ref.author,
        description = _ref.description,
        id = _ref.id,
        image = _ref.image,
        label = _ref.label,
        rating = _ref.rating,
        title = _ref.title;
    var item = document.createElement('li');
    item.classList.add('library__item');
    item.innerHTML = "\n      <a href=\"/#/book?id=".concat(id, "\">\n        <article class=\"cart\">\n          <div class=\"cart__wrapper\">\n            <img src=\"").concat(API_URI).concat(image, "\" alt=\"\u041E\u0431\u043B\u043E\u0436\u043A\u0430 \u043A\u043D\u0438\u0433\u0438 ").concat(title, "\" class=\"cart__image\">\n            <p class=\"cart__label\">").concat(data.labels[label], "</p>\n          </div>\n          <div class=\"cart__content\">\n            <h3 class=\"cart__title\">").concat(title, "</h3>\n            <p class=\"cart__author\">").concat(author, "</p>\n            <p class=\"cart__description\">").concat(description.substring(0, 80), "...</p>\n            <div class=\"cart__rating\">\n              ").concat(getStars(rating).join(''), "\n            </div>\n          </div>\n        </article>\n      </a>\n    ");
    return item;
  });
  libraryList.append.apply(libraryList, _toConsumableArray(items));
};

var renderFields = function renderFields(labels) {
  fieldsList.textContent = '';

  for (var key in labels) {
    var item = document.createElement('li');
    item.className = 'fields__item';
    var button = document.createElement('button');
    button.className = 'fields__button';
    button.dataset.filter = key;
    button.textContent = labels[key];
    item.append(button);
    fieldsList.append(item);
  }
};

var renderListBooks = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    var _yield$Promise$all, _yield$Promise$all2, books, labels;

    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([getBooks(), getLabels()]);

          case 2:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            books = _yield$Promise$all2[0];
            labels = _yield$Promise$all2[1];
            data.books = books;
            data.labels = labels;
            renderList(books);
            renderFields(labels);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderListBooks() {
    return _ref2.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./src/js/modules/renderBook.js





var container = document.querySelector('.book__container');
var btnDelete = document.querySelector('.header__btn_delete');
var bookLabel = document.querySelector('.footer__btn.book__label');
btnDelete.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
  return regenerator.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return deleteBooks(btnDelete.dataset.id);

        case 2:
          router.navigate('/');

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var timerId;

var changeLabel = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(_ref2) {
    var target, labels, labelKeys, labelCurrent, index, indexNext, labelNext;
    return regenerator.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            target = _ref2.target;
            _context2.next = 3;
            return getLabels();

          case 3:
            labels = _context2.sent;
            labelKeys = Object.keys(labels);
            labelCurrent = target.dataset.label;
            index = labelKeys.indexOf(labelCurrent);
            indexNext = (index + 1) % labelKeys.length;
            labelNext = labelKeys[indexNext];
            document.querySelectorAll('.book__label').forEach(function (btn) {
              btn.dataset.label = labelNext;
              btn.textContent = labels[labelNext];
            });
            clearInterval(timerId);
            timerId = setTimeout(function () {
              editBook(target.dataset.id, {
                label: labelNext
              });
            }, 1500);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function changeLabel(_x) {
    return _ref3.apply(this, arguments);
  };
}();

bookLabel.addEventListener('click', changeLabel);

var renderBook_getStars = function getStars(rating) {
  var stars = [];

  for (var i = 0; i < 5; i++) {
    if (i === 0) {
      stars.push("<img class=\"book__rating-star\" src=\"img/star_rating_filled.svg\" alt=\"\u0420\u0435\u0439\u0442\u0438\u043D\u0433 ".concat(rating, " \u0438\u0437 5\">"));
    } else if (i < rating) {
      stars.push("<img class=\"book__rating-star\" src=\"img/star_rating_filled.svg\" alt=\"\">");
    } else {
      stars.push("<img class=\"book__rating-star\" src=\"img/star_rating_empty.svg\" alt=\"\">");
    }
  }

  return stars;
};

var renderBook = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(id) {
    var _yield$Promise$all, _yield$Promise$all2, books, labels, author, title, description, label, image, rating, btnLabel;

    return regenerator.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Promise.all([getBooks(id), getLabels()]);

          case 2:
            _yield$Promise$all = _context3.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            books = _yield$Promise$all2[0];
            labels = _yield$Promise$all2[1];
            container.textContent = '';
            author = books.author, title = books.title, description = books.description, label = books.label, image = books.image, rating = books.rating;
            console.log(books.image); //const btnLabel = document.createElement('button');

            container.innerHTML = "\n    <div class=\"book__wrapper\">\n      <img class=\"book__image\" src=\"".concat(API_URI).concat(image, "\" alt=\"\u043E\u0431\u043B\u043E\u0436\u043A\u0430 ").concat(title, "\">\n\t\t\t<button class=\"book__label book__label_img\" data-label=\"@{label}\" data-id=\"@{id}\">").concat(labels[label], "</button>\t    \n    </div>\n    <div class=\"book__content\">\n      <h2 class=\"book__title\">").concat(title, "</h2>\n      <p class=\"book__author\">").concat(author, "</p>\n      <div class=\"book__rating\">\n        ").concat(renderBook_getStars(rating).join(''), "\n      </div>\n      <h3 class=\"book__subtitle\">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</h3>\n      <p class=\"book__description\">").concat(description, "</p>\n    </div>\n  ");
            btnLabel = document.querySelector('.book__label_img');
            btnLabel.className = 'book__label book__label_img';
            btnLabel.textContent = labels[label];
            btnLabel.dataset.label = label;
            btnLabel.dataset.id = id;
            btnLabel.addEventListener('click', changeLabel);
            btnDelete.dataset.id = id;
            bookLabel.dataset.id = id;
            bookLabel.dataset.label = label;
            bookLabel.textContent = labels[label];

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function renderBook(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./src/js/modules/router.js




var library = document.querySelector('.library');
var book = document.querySelector('.book');
var add = document.querySelector('.add');
var addBtns = document.querySelectorAll('.header__btn-add, .library__add-btn');
var backBtn = document.querySelector('.book__btn_back');
var router = new navigo_min(location.pathname, {
  hash: true
});

var closeAllPage = function closeAllPage() {
  library.classList.add('hidden');
  book.classList.add('hidden');
  add.classList.add('hidden');
};

var initRouter = function initRouter() {
  var _router$on;

  router.on((_router$on = {}, _defineProperty(_router$on, location.pathname, function () {
    closeAllPage();
    library.classList.remove('hidden');
    document.body.classList.remove('body_gradient');
    renderListBooks();
  }), _defineProperty(_router$on, location.pathname + 'book', function (_ref) {
    var id = _ref.params.id;
    closeAllPage();
    book.classList.remove('hidden');
    document.body.classList.add('body_gradient');
    renderBook(id);
  }), _defineProperty(_router$on, location.pathname + 'add', function () {
    closeAllPage();
    add.classList.remove('hidden');
    document.body.classList.add('body_gradient');
  }), _router$on)).resolve();
  addBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      router.navigate('add');
    });
  });
  backBtn.addEventListener('click', function () {
    router.navigate('/');
  });
};
;// CONCATENATED MODULE: ./src/js/modules/search.js




var btnSearch = document.querySelectorAll('.header__btn_search');
var search = document.querySelector('.search');
var searchForm = document.querySelector('.search__form');

var closeSearch = function closeSearch(_ref, flag) {
  var target = _ref.target;

  if (target.closest('.search, .header__btn_search') && !flag) {
    return;
  }

  search.classList.remove('search_active');
  document.body.removeEventListener('click', closeSearch);
};

btnSearch.forEach(function (btn) {
  btn.addEventListener('click', function () {
    search.classList.add('search_active');
    document.body.addEventListener('click', closeSearch, true);
  });
});
searchForm.addEventListener('submit', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(e) {
    var books;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            _context.next = 3;
            return searchBooks(searchForm.input.value);

          case 3:
            books = _context.sent;
            renderList(books);
            e.target.reset();
            closeSearch(e, true);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
;// CONCATENATED MODULE: ./src/js/modules/toBase64.js
var toBase64 = function toBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.addEventListener('loadend', function () {
      resolve(reader.result);
    });
    reader.addEventListener('error', function (err) {
      reject(err);
    });
    reader.readAsDataURL(file);
  });
};

/* harmony default export */ var modules_toBase64 = (toBase64);
;// CONCATENATED MODULE: ./src/js/modules/upload.js



var label = document.querySelector('.upload__label');
var preview = document.querySelector('.upload__preview');
var file = document.querySelector('.upload__file');
var previewSrc = preview.src;
file.addEventListener('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
  var base64;
  return regenerator.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(file.files.length > 0)) {
            _context.next = 7;
            break;
          }

          _context.next = 3;
          return modules_toBase64(file.files[0]);

        case 3:
          base64 = _context.sent;
          preview.style.display = 'block';
          label.classList.add('upload__label_active');
          preview.src = base64;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var clearPreview = function clearPreview() {
  preview.style.display = '';
  label.classList.remove('upload__label_active');
  preview.src = previewSrc;
};
;// CONCATENATED MODULE: ./src/js/modules/changeFieldset.js


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = changeFieldset_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function changeFieldset_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return changeFieldset_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return changeFieldset_arrayLikeToArray(o, minLen); }

function changeFieldset_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var fieldsets = document.querySelectorAll('.add__fieldset');
var addBtn = document.querySelector('.add__btn');
var changeFieldset_form = document.querySelector('.add__form');
var btnBack = document.querySelector('.add__btn_back');
var count = 0;

var sendBook = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    var formData, data, book;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            formData = new FormData(changeFieldset_form);
            data = Object.fromEntries(formData);
            _context.next = 4;
            return modules_toBase64(data.image);

          case 4:
            data.image = _context.sent;
            _context.next = 7;
            return addBooks(data);

          case 7:
            book = _context.sent;

            if (book) {
              changeFieldset_form.reset();
              clearPreview();
              router.navigate('/');
              addBtn.textContent = '??????????';
            }

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendBook() {
    return _ref.apply(this, arguments);
  };
}();

var changeFieldset = function changeFieldset() {
  if (count === fieldsets.length - 1) {
    addBtn.textContent = '???????????????? ??????????';
  } else {
    addBtn.textContent = '??????????';
  }

  fieldsets[count].classList.remove('hidden');
};

var initFieldset = function initFieldset() {
  addBtn.addEventListener('click', function () {
    var fieldset = fieldsets[count];
    var valid = true;

    var _iterator = _createForOfIteratorHelper(fieldset.elements),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;

        if (!elem.checkValidity()) {
          elem.classList.add('no-valid');
          valid = false;
        } else {
          elem.classList.remove('no-valid');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (!valid) return;
    fieldset.classList.add('hidden');
    count += 1;

    if (count === fieldsets.length) {
      count = 0;
      sendBook();
    }

    changeFieldset();
  });
  btnBack.addEventListener('click', function () {
    if (count === 0) {
      changeFieldset_form.reset();
      clearPreview();
      router.navigate('/');
      return;
    }

    fieldsets[count].classList.add('hidden');
    count--;
    changeFieldset();
  });
};

/* harmony default export */ var modules_changeFieldset = (initFieldset);
;// CONCATENATED MODULE: ./src/js/modules/controlField.js

var controlField = function controlField(btn, list, offList) {
  btn.addEventListener('click', function () {
    list.classList.toggle('fields__list_active');
    offList.classList.remove('fields__list_active');
  });
  list.addEventListener('click', function (_ref) {
    var target = _ref.target;

    if (target.classList.contains('fields__button')) {
      list.classList.remove('fields__list_active');

      if (target.dataset.sort) {
        data.sortBook(target.dataset.sort);
        renderList();
      }

      if (target.dataset.filter) {
        var filteredData = data.filterBook(target.dataset.filter);
        renderList(filteredData);
      }
    }
  });
};
;// CONCATENATED MODULE: ./src/js/index.js





var fieldsBtnSort = document.querySelector('.fields__btn_sort');
var fieldsListSort = document.querySelector('.fields__list_sort');
var fieldsBtnFilter = document.querySelector('.fields__btn_filter');
var fieldsListFilter = document.querySelector('.fields__list_filter');

var init = function init() {
  initRouter();
  controlField(fieldsBtnSort, fieldsListSort, fieldsListFilter);
  controlField(fieldsBtnFilter, fieldsListFilter, fieldsListSort);
  modules_changeFieldset();
};

init();
}();
/******/ })()
;