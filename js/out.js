/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(6)




$(function() {
  $(document).on("scroll resize", (function() {
    let sectionAboutElem = $("#about");
    let sectionAboutElemDistanceTop = parseInt(sectionAboutElem.offset().top);
    let sectionArchitecture = $("#architecture");
    let sectionArchitectureElemDistanceTop = parseInt(sectionArchitecture.offset().top);
    let sectionLandscape = $("#landscape");
    let sectionLandscapeElemDistanceTop = parseInt(sectionLandscape.offset().top);
    let scrollingStartDistance = $("#header").offset().top;
    let scrollTop = $(document).scrollTop();
    if (scrollTop > scrollingStartDistance) {
      $(".menu").slideDown(1);
      $(".menu").css("display", "flex");
    }

    //Border bottom for anchor About Me
    if (scrollTop >= sectionAboutElemDistanceTop - 1 && scrollTop <= sectionAboutElemDistanceTop + 700) {
      $(".menu").find("li").first().css({borderBottom: "4px solid #c19e7e"})
    } else if (scrollTop < sectionAboutElemDistanceTop) {
      $(".menu").find("li").first().css("border-bottom", "");
    } else if (scrollTop >= sectionAboutElemDistanceTop + 700) {
      $(".menu").find("li").first().css("border-bottom", "");
    }
    //Border bottom for anchor Architecture
    if (scrollTop >= sectionArchitectureElemDistanceTop - 1 && scrollTop <= sectionArchitectureElemDistanceTop + parseInt($("#architecture").css("height"))-60) {
      $(".menu").find("li").eq(1).css({borderBottom: "4px solid #c19e7e"})
    } else if (scrollTop < sectionArchitectureElemDistanceTop) {
      $(".menu").find("li").eq(1).css("border-bottom", "");
    } else if (scrollTop >= sectionArchitectureElemDistanceTop + 660) {
      $(".menu").find("li").eq(1).css("border-bottom", "");
    }
    //Border bottom for anchor Landscape
    if (scrollTop >= sectionLandscapeElemDistanceTop - 1 && scrollTop <= sectionLandscapeElemDistanceTop + parseInt($("#architecture").css("height"))) {
      $(".menu").find("li").eq(2).css({borderBottom: "4px solid #c19e7e"})
    } else if (scrollTop < sectionLandscapeElemDistanceTop) {
      $(".menu").find("li").eq(2).css("border-bottom", "");
    } else if (scrollTop >= sectionLandscapeElemDistanceTop + 660) {
      $(".menu").find("li").eq(2).css("border-bottom", "");
    }

  }));
  $('a').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });

  let $animation_elements = $('.info').children();
  let $window = $(window);
  $window.on('scroll resize', check_if_in_view);
  $window.on('scroll resize', check_if_in_view2);
  function check_if_in_view() {
    let window_height = $window.height();
    let window_top_position = $window.scrollTop();
    let window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      }
    });
  }
  var aboutMeElem = $(".aboutMe");
  function check_if_in_view2() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each(aboutMeElem, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view2');
      }
    })
  }
  //Pop up gallery
  let visibleImgArchitecture = $(".architecturePics").find("img");
  $.each(visibleImgArchitecture, function() {
    $(this).on("click", event => {
      let currentImg = $(event.target);
      let architecturePics = document.querySelector(".architecturePics");
      let srcImg = $(event.target).attr("src");
      let newDiv = document.createElement("div");
      let prevSpan = document.createElement("span");
      let nextSpan = document.createElement("span");
      let crossElem = document.createElement("span");
      newDiv.classList.add("big");
      prevSpan.classList.add("prev");
      nextSpan.classList.add("next");
      prevSpan.classList.add("fa-caret-left");
      nextSpan.classList.add("fa-caret-right");
      prevSpan.classList.add("fa");
      nextSpan.classList.add("fa");
      crossElem.classList.add("cross");
      crossElem.classList.add("fa");
      crossElem.classList.add("fa-times");
      let newImg = document.createElement("img");
      newImg.setAttribute("src", srcImg);
      newDiv.appendChild(prevSpan);
      newDiv.appendChild(nextSpan);
      newDiv.appendChild(newImg);
      newDiv.appendChild(crossElem);
      architecturePics.appendChild(newDiv);
      nextSpan.addEventListener("click", () => {
        if (currentImg.parent().next().children().attr("src") == null) {
          architecturePics.removeChild(newDiv)
        } else {
          currentImg = currentImg.parent().next().children();
          srcImg = currentImg.attr("src");
          newImg.setAttribute("src", srcImg);
        }
      })
      prevSpan.addEventListener("click", () => {

        if (currentImg.parent().prev().children().attr("src") == null) {
          architecturePics.removeChild(newDiv)
        } else {
          currentImg = currentImg.parent().prev().children();
          srcImg = currentImg.attr("src");
          newImg.setAttribute("src", srcImg);
        }
      })
      crossElem.addEventListener("click", function() {
        architecturePics.removeChild(newDiv)
      })
    //   if($(".big").length > 0){
    //   $.each($(".menuList").find("a"),function(){
    //     $(this).on("click",function(){
    //       architecturePics.removeChild(newDiv)
    //     })
    //   })
    // }
    // else{
    //   $.each($(".menuList").find("a"),function(){
    //   $(this).removeAttr('onclick')
    // })

    // }
    })
  })

    $('.architecturePics li:lt(9)').show();
    $('.less').hide();
    var items =  27;
    var shown =  9;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.architecturePics li:visible').length+9;
        if(shown < items) {$('.architecturePics li:lt('+shown+')').show(300);
         let heightOfSection = $("#architecture").css("height");
         heightOfSection= parseInt(heightOfSection)+650
         $("#architecture").css("height",heightOfSection+"px")
      }
        else {$('.architecturePics li:lt('+items+')').show(300);
             $('.more').hide();
             let heightOfSection = $("#architecture").css("height");
             heightOfSection= parseInt(heightOfSection)+650
             $("#architecture").css("height",heightOfSection+"px")
             }
    });
    $('.less').click(function () {
        $('.architecturePics li').not(':lt(9)').hide(10);
        let heightOfSection = $("#architecture").css("height");
        heightOfSection = "900px";
        $("#architecture").css("height",heightOfSection)
        $('.more').show();
        $('.less').hide();
    });




//landscape section

let visibleImgLandscape = $(".landscapePics").find("img");
$.each(visibleImgLandscape, function() {
  $(this).on("click", event => {
    let currentImg = $(event.target);
    let landscapePics = document.querySelector(".landscapePics");
    let srcImg = $(event.target).attr("src");
    let newDiv = document.createElement("div");
    let prevSpan = document.createElement("span");
    let nextSpan = document.createElement("span");
    let crossElem = document.createElement("span");
    newDiv.classList.add("big");
    prevSpan.classList.add("prev");
    nextSpan.classList.add("next");
    prevSpan.classList.add("fa-caret-left");
    nextSpan.classList.add("fa-caret-right");
    prevSpan.classList.add("fa");
    nextSpan.classList.add("fa");
    crossElem.classList.add("cross");
    crossElem.classList.add("fa");
    crossElem.classList.add("fa-times");
    let newImg = document.createElement("img");
    newImg.setAttribute("src", srcImg);
    newDiv.appendChild(prevSpan);
    newDiv.appendChild(nextSpan);
    newDiv.appendChild(newImg);
    newDiv.appendChild(crossElem);
    landscapePics.appendChild(newDiv);
    nextSpan.addEventListener("click", () => {
      if (currentImg.parent().next().children().attr("src") == null) {
        landscapePics.removeChild(newDiv)
      } else {
        currentImg = currentImg.parent().next().children();
        srcImg = currentImg.attr("src");
        newImg.setAttribute("src", srcImg);
      }
    })
    prevSpan.addEventListener("click", () => {

      if (currentImg.parent().prev().children().attr("src") == null) {
        landscapePics.removeChild(newDiv)
      } else {
        currentImg = currentImg.parent().prev().children();
        srcImg = currentImg.attr("src");
        newImg.setAttribute("src", srcImg);
      }
    })
    crossElem.addEventListener("click", function() {
      landscapePics.removeChild(newDiv)
    })
  //   if($(".big").length > 0){
  //   $.each($(".menuList").find("a"),function(){
  //     $(this).on("click",function(){
  //       architecturePics.removeChild(newDiv)
  //     })
  //   })
  // }
  // else{
  //   $.each($(".menuList").find("a"),function(){
  //   $(this).removeAttr('onclick')
  // })

  // }
  })
})

     $('.landscapePics li:lt(9)').show();
        $('.less2').hide();
        var items =  27;
        var shown =  9;
        $('.more2').click(function () {
            $('.less2').show();
            shown = $('.landscapePics li:visible').length+9;
            if(shown< items) {$('.landscapePics li:lt('+shown+')').show(300);
             let heightOfSection = $("#landscape").css("height");
             heightOfSection= parseInt(heightOfSection)+700
             $("#landscape").css("height",heightOfSection+"px")
          }
          else if(shown = items) {$('.landscapePics li:lt('+shown+')').show(300);
           $('.more2').hide();
           let heightOfSection = $("#landscape").css("height");
           heightOfSection= parseInt(heightOfSection)+700
           $("#landscape").css("height",heightOfSection+"px")
        }
            else {$('.landscapePics li:lt('+items+')').show(300);
                 $('.more2').hide();
                 let heightOfSection = $("#landscape").css("height");
                 heightOfSection= parseInt(heightOfSection)+300
                 $("#landscape").css("height",heightOfSection+"px")
                 }
        });
        $('.less2').click(function () {
            $('.architecturePics li').not(':lt(9)').hide(10);
            let heightOfSection = $("#architecture").css("height");
            heightOfSection = "900px";
            $("#architecture").css("height",heightOfSection)
            $('.more2').show();
            $('.less2').hide();
        });


})


/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cf74e3fa0421c3f78c0428634ca4f94e.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  background-color: white;\n  font-family: 'Satisfy', cursive; }\n\n.container {\n  margin: 0 auto;\n  min-height: 1px;\n  max-width: 1100px;\n  width: 100%; }\n\n.parallax {\n  margin: 0 auto;\n  background-image: url(" + __webpack_require__(9) + ");\n  max-width: 1920px;\n  width: 100%;\n  height: 100vh;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden; }\n\n#header {\n  width: 100%; }\n  #header .menu {\n    position: fixed;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    backface-visibility: hidden;\n    width: 100%;\n    display: none;\n    flex-wrap: nowrap;\n    background-color: white;\n    justify-content: space-around;\n    height: 60px; }\n  #header .menuList ul {\n    list-style: none;\n    margin-right: 10px;\n    text-align: center; }\n  #header .menuList li {\n    font-weight: 100;\n    display: inline-block;\n    font-size: 25px;\n    padding: 13px 20px 8px;\n    margin: 0 3rem; }\n    #header .menuList li:hover {\n      border-bottom: 4px solid #c19e7e; }\n    #header .menuList li a {\n      text-decoration: none;\n      color: #4a3821; }\n\n#about {\n  position: relative;\n  height: 700px;\n  margin-top: -60px;\n  padding-top: 60px;\n  display: block; }\n  #about .info {\n    margin-top: 60px;\n    height: 500px;\n    display: flex;\n    justify-content: space-between; }\n    #about .info .img {\n      background-image: url(" + __webpack_require__(3) + ");\n      background-position: center;\n      background-size: cover;\n      height: 500px;\n      width: 45%;\n      opacity: 0;\n      position: relative;\n      border-radius: 50%;\n      box-shadow: 0 6px 7px grey; }\n    #about .info .aboutMe {\n      margin-top: 170px;\n      width: 45%;\n      height: 200px;\n      position: relative;\n      opacity: 0;\n      text-align: justify;\n      margin-right: 50px; }\n    #about .info .in-view {\n      animation: pokaz 3s forwards;\n      z-index: 1; }\n    #about .info .in-view2 {\n      animation: pokaz2 2s 1s forwards;\n      z-index: 1; }\n\n@keyframes pokaz {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes pokaz2 {\n  0% {\n    opacity: 0;\n    right: -100px; }\n  100% {\n    opacity: 1;\n    right: 0; } }\n\n.parallax2 {\n  margin: 0 auto;\n  background-image: url(" + __webpack_require__(10) + ");\n  max-width: 1920px;\n  width: 100%;\n  height: 400px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.5; }\n\n#architecture {\n  height: 900px; }\n  #architecture .architecturePics {\n    text-decoration: none;\n    padding-left: 30px; }\n    #architecture .architecturePics li {\n      float: left;\n      width: 31%;\n      height: 200px;\n      margin: 10px;\n      display: none;\n      list-style: none;\n      text-decoration: none; }\n    #architecture .architecturePics img {\n      width: 100%;\n      height: 200px; }\n    #architecture .architecturePics .big {\n      margin: 0 auto;\n      position: fixed;\n      margin-top: 60px;\n      max-width: 1920px;\n      width: 100%;\n      height: 100%;\n      left: 50%;\n      top: 0;\n      z-index: 2;\n      transform: translateX(-50%);\n      background: rgba(255, 255, 255, 0.9); }\n      #architecture .architecturePics .big .prev {\n        font-size: 134px;\n        z-index: 2;\n        position: absolute;\n        top: 310px;\n        transform: translate(-514px, -50%);\n        left: 50%;\n        color: #c19e7e;\n        cursor: pointer;\n        width: 60px; }\n      #architecture .architecturePics .big .next {\n        width: 60px;\n        font-size: 134px;\n        z-index: 2;\n        position: absolute;\n        top: 310px;\n        right: 50%;\n        transform: translate(527px, -50%);\n        color: #c19e7e;\n        cursor: pointer; }\n      #architecture .architecturePics .big .cross {\n        width: 60px;\n        font-size: 55px;\n        z-index: 5;\n        position: absolute;\n        top: 37px;\n        right: 50%;\n        transform: translate(460px, -50%);\n        color: #c19e7e;\n        cursor: pointer; }\n      #architecture .architecturePics .big img {\n        position: relative;\n        display: block;\n        margin: 0 auto;\n        margin-top: 10px;\n        width: 900px;\n        height: 600px; }\n  #architecture .less,\n  #architecture .more {\n    cursor: pointer;\n    color: #c19e7e; }\n  #architecture .less:after,\n  #architecture .more:after {\n    clear: both;\n    content: \"\";\n    display: block; }\n  #architecture .more {\n    animation: bumpDown 1.5s infinite;\n    float: left;\n    margin-left: 60px;\n    width: 0;\n    height: 0;\n    border-left: 145px solid transparent;\n    border-right: 145px solid transparent;\n    border-top: 27px solid #c19e7e; }\n    #architecture .more:hover {\n      border-top: 27px solid rgba(193, 158, 126, 0.8);\n      animation-play-state: paused; }\n    #architecture .more:active {\n      border-top: 27px solid rgba(193, 158, 126, 0.4); }\n\n@keyframes bumpDown {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(1.1);\n    border-top: 27px solid #936b46; } }\n  #architecture .less {\n    animation: bumpUp 0.8s infinite;\n    float: right;\n    margin-right: 40px;\n    width: 0;\n    height: 0;\n    border-left: 165px solid transparent;\n    border-right: 165px solid transparent;\n    border-bottom: 27px solid #c19e7e; }\n    #architecture .less:hover {\n      border-top: 27px solid rgba(193, 158, 126, 0.8);\n      animation-play-state: paused; }\n    #architecture .less:active {\n      border-top: 27px solid rgba(193, 158, 126, 0.4); }\n\n@keyframes bumpUp {\n  0% {\n    transform: translateY(10px); }\n  100% {\n    transform: translateY(0px); } }\n\n.parallax3 {\n  margin: 0 auto;\n  background-image: url(" + __webpack_require__(11) + ");\n  max-width: 1920px;\n  width: 100%;\n  height: 400px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.5; }\n\n#landscape {\n  height: 900px; }\n  #landscape .landscapePics {\n    text-decoration: none;\n    padding-left: 30px; }\n    #landscape .landscapePics li {\n      float: left;\n      width: 31%;\n      height: 200px;\n      margin: 10px;\n      display: none;\n      list-style: none;\n      text-decoration: none; }\n    #landscape .landscapePics img {\n      width: 100%;\n      height: 200px; }\n    #landscape .landscapePics .big {\n      margin: 0 auto;\n      position: fixed;\n      margin-top: 60px;\n      max-width: 1920px;\n      width: 100%;\n      height: 100%;\n      left: 50%;\n      top: 0;\n      z-index: 2;\n      transform: translateX(-50%);\n      background: rgba(255, 255, 255, 0.9); }\n      #landscape .landscapePics .big .prev {\n        font-size: 134px;\n        z-index: 2;\n        position: absolute;\n        top: 310px;\n        transform: translate(-514px, -50%);\n        left: 50%;\n        color: #c19e7e;\n        cursor: pointer;\n        width: 60px; }\n      #landscape .landscapePics .big .next {\n        width: 60px;\n        font-size: 134px;\n        z-index: 2;\n        position: absolute;\n        top: 310px;\n        right: 50%;\n        transform: translate(527px, -50%);\n        color: #c19e7e;\n        cursor: pointer; }\n      #landscape .landscapePics .big .cross {\n        width: 60px;\n        font-size: 55px;\n        z-index: 5;\n        position: absolute;\n        top: 37px;\n        right: 50%;\n        transform: translate(460px, -50%);\n        color: #c19e7e;\n        cursor: pointer; }\n      #landscape .landscapePics .big img {\n        position: relative;\n        display: block;\n        margin: 0 auto;\n        margin-top: 10px;\n        width: 900px;\n        height: 600px; }\n  #landscape .less,\n  #landscape .more {\n    cursor: pointer;\n    text-align: center;\n    font-size: 70px;\n    width: 50px;\n    color: #c19e7e; }\n  #landscape .less:after,\n  #landscape .more:after {\n    clear: both;\n    content: \"\";\n    display: block; }\n  #landscape .more {\n    float: left;\n    margin-left: 165px; }\n  #landscape .less {\n    float: right;\n    margin-right: 165px;\n    transform: rotate(180deg); }\n\n@media only screen and (max-width: 950px) {\n  #header {\n    width: 100%; }\n    #header .menu {\n      position: fixed;\n      z-index: 2;\n      top: 0;\n      left: 0;\n      backface-visibility: hidden;\n      width: 100%;\n      display: none;\n      flex-wrap: nowrap;\n      background-color: white;\n      justify-content: space-around;\n      height: 60px; }\n    #header .menuList ul {\n      list-style: none;\n      margin-right: 10px;\n      text-align: center; }\n    #header .menuList li {\n      font-weight: 100;\n      display: inline-block;\n      font-size: 20px;\n      padding: 13px 20px 8px;\n      margin: 0 1rem; }\n      #header .menuList li:hover {\n        border-bottom: 4px solid #c19e7e; }\n      #header .menuList li a {\n        text-decoration: none;\n        color: #4a3821; } }\n\n@media only screen and (max-width: 800px) {\n  #about {\n    position: relative;\n    height: 1000px;\n    margin-top: -60px;\n    padding-top: 60px;\n    display: block; }\n    #about .info {\n      margin-top: 60px;\n      height: 500px;\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap; }\n      #about .info .img {\n        background-image: url(" + __webpack_require__(3) + ");\n        background-position: center;\n        background-size: cover;\n        height: 500px;\n        width: 50%;\n        opacity: 0;\n        position: relative;\n        border-radius: 50%;\n        box-shadow: 0 6px 7px grey;\n        margin: 0 auto; }\n      #about .info .aboutMe {\n        width: 90%;\n        height: 200px;\n        position: relative;\n        opacity: 0;\n        text-align: justify;\n        margin: 0 auto;\n        margin-top: 100px; }\n      #about .info .in-view {\n        animation: pokaz 3s forwards;\n        z-index: 1; }\n      #about .info .in-view2 {\n        animation: pokaz2 2s 1s forwards;\n        z-index: 1; }\n  @keyframes pokaz {\n    0% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  @keyframes pokaz2 {\n    0% {\n      opacity: 0;\n      right: -100px; }\n    100% {\n      opacity: 1;\n      right: 0; } } }\n\n@media only screen and (max-width: 1060px) {\n  #architecture {\n    height: 900px; }\n    #architecture .architecturePics {\n      text-decoration: none;\n      padding-left: 30px; }\n      #architecture .architecturePics li {\n        float: left;\n        width: 31%;\n        height: 200px;\n        margin: 10px;\n        display: none;\n        list-style: none;\n        text-decoration: none; }\n      #architecture .architecturePics img {\n        width: 100%;\n        height: 200px; }\n      #architecture .architecturePics .big {\n        margin: 0 auto;\n        position: fixed;\n        margin-top: 60px;\n        max-width: 1920px;\n        width: 100%;\n        height: 100%;\n        left: 50%;\n        top: 0;\n        z-index: 2;\n        transform: translateX(-50%);\n        background: rgba(255, 255, 255, 0.9); }\n        #architecture .architecturePics .big .prev {\n          font-size: 134px;\n          z-index: 2;\n          position: absolute;\n          top: 250px;\n          transform: translate(-435px, -50%);\n          left: 50%;\n          color: #c19e7e;\n          cursor: pointer;\n          width: 60px; }\n        #architecture .architecturePics .big .next {\n          width: 60px;\n          font-size: 134px;\n          z-index: 2;\n          position: absolute;\n          top: 250px;\n          right: 50%;\n          transform: translate(447px, -50%);\n          color: #c19e7e;\n          cursor: pointer; }\n        #architecture .architecturePics .big .cross {\n          width: 60px;\n          font-size: 55px;\n          z-index: 5;\n          position: absolute;\n          top: 37px;\n          right: 50%;\n          transform: translate(384px, -50%);\n          color: #c19e7e;\n          cursor: pointer; }\n        #architecture .architecturePics .big img {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          margin-top: 10px;\n          width: 750px;\n          height: 500px; }\n      #architecture .architecturePics .less,\n      #architecture .architecturePics .more {\n        cursor: pointer;\n        color: #c19e7e; }\n      #architecture .architecturePics .less:after,\n      #architecture .architecturePics .more:after {\n        clear: both;\n        content: \"\";\n        display: block; }\n      #architecture .architecturePics .more {\n        animation: bumpDown 1.5s infinite;\n        float: left;\n        margin-left: 60px;\n        width: 0;\n        height: 0;\n        border-left: 145px solid transparent;\n        border-right: 145px solid transparent;\n        border-top: 27px solid #c19e7e; }\n        #architecture .architecturePics .more:hover {\n          border-top: 27px solid rgba(193, 158, 126, 0.8);\n          animation-play-state: paused; }\n        #architecture .architecturePics .more:active {\n          border-top: 27px solid rgba(193, 158, 126, 0.4); }\n  @keyframes bumpDown {\n    0% {\n      transform: scale(1); }\n    100% {\n      transform: scale(1.1);\n      border-top: 27px solid #936b46; } }\n      #architecture .architecturePics .less {\n        animation: bumpUp 0.8s infinite;\n        float: right;\n        margin-right: 40px;\n        width: 0;\n        height: 0;\n        border-left: 165px solid transparent;\n        border-right: 165px solid transparent;\n        border-bottom: 27px solid #c19e7e; }\n        #architecture .architecturePics .less:hover {\n          border-top: 27px solid rgba(193, 158, 126, 0.8);\n          animation-play-state: paused; }\n        #architecture .architecturePics .less:active {\n          border-top: 27px solid rgba(193, 158, 126, 0.4); }\n  @keyframes bumpUp {\n    0% {\n      transform: translateY(10px); }\n    100% {\n      transform: translateY(0px); } }\n  #landscape {\n    height: 900px; }\n    #landscape .landscapePics {\n      text-decoration: none;\n      padding-left: 30px; }\n      #landscape .landscapePics li {\n        float: left;\n        width: 31%;\n        height: 200px;\n        margin: 10px;\n        display: none;\n        list-style: none;\n        text-decoration: none; }\n      #landscape .landscapePics img {\n        width: 100%;\n        height: 200px; }\n      #landscape .landscapePics .big {\n        margin: 0 auto;\n        position: fixed;\n        margin-top: 60px;\n        max-width: 1920px;\n        width: 100%;\n        height: 100%;\n        left: 50%;\n        top: 0;\n        z-index: 2;\n        transform: translateX(-50%);\n        background: rgba(255, 255, 255, 0.9); }\n        #landscape .landscapePics .big .prev {\n          font-size: 134px;\n          z-index: 2;\n          position: absolute;\n          top: 250px;\n          transform: translate(-435px, -50%);\n          left: 50%;\n          color: #c19e7e;\n          cursor: pointer;\n          width: 60px; }\n        #landscape .landscapePics .big .next {\n          width: 60px;\n          font-size: 134px;\n          z-index: 2;\n          position: absolute;\n          top: 250px;\n          right: 50%;\n          transform: translate(447px, -50%);\n          color: #c19e7e;\n          cursor: pointer; }\n        #landscape .landscapePics .big .cross {\n          width: 60px;\n          font-size: 55px;\n          z-index: 5;\n          position: absolute;\n          top: 37px;\n          right: 50%;\n          transform: translate(384px, -50%);\n          color: #c19e7e;\n          cursor: pointer; }\n        #landscape .landscapePics .big img {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          margin-top: 10px;\n          width: 750px;\n          height: 500px; }\n    #landscape .less,\n    #landscape .more {\n      cursor: pointer;\n      text-align: center;\n      font-size: 70px;\n      width: 50px;\n      color: #c19e7e; }\n    #landscape .less:after,\n    #landscape .more:after {\n      clear: both;\n      content: \"\";\n      display: block; }\n    #landscape .more {\n      float: left;\n      margin-left: 165px; }\n    #landscape .less {\n      float: right;\n      margin-right: 165px;\n      transform: rotate(180deg); } }\n\n@media only screen and (max-width: 910px) {\n  #architecture {\n    height: 700px !important; }\n    #architecture .architecturePics {\n      text-decoration: none;\n      padding-left: 30px; }\n      #architecture .architecturePics li {\n        float: left;\n        width: 45%;\n        height: 200px;\n        margin: 10px;\n        display: none;\n        list-style: none;\n        text-decoration: none; }\n      #architecture .architecturePics img {\n        width: 100%;\n        height: 200px; }\n      #architecture .architecturePics .big {\n        margin: 0 auto;\n        position: fixed;\n        margin-top: 60px;\n        max-width: 1920px;\n        width: 100%;\n        height: 100%;\n        left: 50%;\n        top: 0;\n        z-index: 2;\n        transform: translateX(-50%);\n        background: rgba(255, 255, 255, 0.9); }\n        #architecture .architecturePics .big .prev {\n          font-size: 134px;\n          z-index: 2;\n          position: absolute;\n          top: 220px;\n          transform: translate(-365px, -50%);\n          left: 50%;\n          color: #c19e7e;\n          cursor: pointer;\n          width: 60px; }\n        #architecture .architecturePics .big .next {\n          width: 60px;\n          font-size: 134px;\n          z-index: 2;\n          position: absolute;\n          top: 220px;\n          right: 50%;\n          transform: translate(375px, -50%);\n          color: #c19e7e;\n          cursor: pointer; }\n        #architecture .architecturePics .big .cross {\n          width: 60px;\n          font-size: 55px;\n          z-index: 5;\n          position: absolute;\n          top: 37px;\n          right: 50%;\n          transform: translate(314px, -50%);\n          color: #c19e7e;\n          cursor: pointer; }\n        #architecture .architecturePics .big img {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          margin-top: 10px;\n          width: 600px;\n          height: 400px; }\n    #architecture .less,\n    #architecture .more {\n      cursor: pointer;\n      color: #c19e7e; }\n    #architecture .less:after,\n    #architecture .more:after {\n      clear: both;\n      content: \"\";\n      display: block; }\n    #architecture .more {\n      animation: bumpDown 1.5s infinite;\n      float: left;\n      margin-left: 23px;\n      width: 0;\n      height: 0;\n      border-left: 145px solid transparent;\n      border-right: 145px solid transparent;\n      border-top: 27px solid #c19e7e; }\n      #architecture .more:hover {\n        border-top: 27px solid rgba(193, 158, 126, 0.8);\n        animation-play-state: paused; }\n      #architecture .more:active {\n        border-top: 27px solid rgba(193, 158, 126, 0.4); }\n  @keyframes bumpDown {\n    0% {\n      transform: scale(1); }\n    100% {\n      transform: scale(1.1);\n      border-top: 27px solid #936b46; } }\n    #architecture .less {\n      animation: bumpUp 0.8s infinite;\n      float: right;\n      margin-right: 40px;\n      width: 0;\n      height: 0;\n      border-left: 165px solid transparent;\n      border-right: 165px solid transparent;\n      border-bottom: 27px solid #c19e7e; }\n      #architecture .less:hover {\n        border-top: 27px solid rgba(193, 158, 126, 0.8);\n        animation-play-state: paused; }\n      #architecture .less:active {\n        border-top: 27px solid rgba(193, 158, 126, 0.4); }\n  @keyframes bumpUp {\n    0% {\n      transform: translateY(10px); }\n    100% {\n      transform: translateY(0px); } }\n  #landscape {\n    height: 900px; }\n    #landscape .landscapePics {\n      text-decoration: none;\n      padding-left: 30px; }\n      #landscape .landscapePics li {\n        float: left;\n        width: 45%;\n        height: 200px;\n        margin: 10px;\n        display: none;\n        list-style: none;\n        text-decoration: none; }\n      #landscape .landscapePics img {\n        width: 100%;\n        height: 200px; }\n      #landscape .landscapePics .big {\n        margin: 0 auto;\n        position: fixed;\n        margin-top: 60px;\n        max-width: 1920px;\n        width: 100%;\n        height: 100%;\n        left: 50%;\n        top: 0;\n        z-index: 2;\n        transform: translateX(-50%);\n        background: rgba(255, 255, 255, 0.9); }\n        #landscape .landscapePics .big .prev {\n          font-size: 134px;\n          z-index: 2;\n          position: absolute;\n          top: 220px;\n          transform: translate(-365px, -50%);\n          left: 50%;\n          color: #c19e7e;\n          cursor: pointer;\n          width: 60px; }\n        #landscape .landscapePics .big .next {\n          width: 60px;\n          font-size: 134px;\n          z-index: 2;\n          position: absolute;\n          top: 220px;\n          right: 50%;\n          transform: translate(375px, -50%);\n          color: #c19e7e;\n          cursor: pointer; }\n        #landscape .landscapePics .big .cross {\n          width: 60px;\n          font-size: 55px;\n          z-index: 5;\n          position: absolute;\n          top: 37px;\n          right: 50%;\n          transform: translate(314px, -50%);\n          color: #c19e7e;\n          cursor: pointer; }\n        #landscape .landscapePics .big img {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          margin-top: 10px;\n          width: 600px;\n          height: 400px; }\n    #landscape .less2,\n    #landscape .more2 {\n      cursor: pointer;\n      text-align: center;\n      font-size: 70px;\n      width: 50px;\n      color: #c19e7e; }\n    #landscape .less2:after,\n    #landscape .more2:after {\n      clear: both;\n      content: \"\";\n      display: block; }\n    #landscape .more2 {\n      float: left;\n      margin-left: 165px; }\n    #landscape .less2 {\n      float: right;\n      margin-right: 165px;\n      transform: rotate(180deg); } }\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ef713637880166547703c24c129a203f.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "229d55414af4ca5166af3526550e92bf.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "41cc0f25bf5102108e058683ce9ee33f.jpg";

/***/ })
/******/ ]);