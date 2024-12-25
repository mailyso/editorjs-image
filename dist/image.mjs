(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb;position:relative}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:before:focus:before{display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button{display:none}^ .image-tool--withBorder__image{border:1px solid var(--border-color)}^ .image-tool--withBackground__image{padding:15px;background:var(--bg-color)}^ .image-tool--withBackground__image-picture{max-width:60%;margin:0 auto}^ .image-tool--stretched__image-picture{width:100%}.image-tool__link-area{outline:none;font-size:13px;padding:10px;width:100%;height:40px;font-weight:500;border:1px solid rgba(180,180,180,.48);margin-bottom:10px}.image-tool__link-error{text-decoration:dotted red;text-decoration-line:underline;border-color:#f8b4b4;color:#771d1d}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
function O(S, i = null, n = {}) {
  const s = document.createElement(S);
  Array.isArray(i) ? s.classList.add(...i) : i && s.classList.add(i);
  for (const a in n)
    s[a] = n[a];
  return s;
}
class T {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   * @param {string} ui.loadedLink
   * @param {Function} ui.getOutOfLink
   */
  constructor({ api: i, config: n, onSelectFile: s, readOnly: a, loadedLink: o, getOutOfLink: r }) {
    this.createInputArea = this.createInputArea.bind(this), this.api = i, this.config = n, this.onSelectFile = s, this.readOnly = a, this.getOutofLink = r, this.linkState = {
      open: !1,
      focused: !1,
      data: o || "",
      stored: o || "",
      linkError: !1
    }, this.toggleAddLink = this.toggleAddLink.bind(this), this.nodes = {
      wrapper: O("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: O("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: O("div", this.CSS.imagePreloader),
      caption: O("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      }),
      addLinkArea: this.createInputArea()
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton), o !== "" && o !== void 0 && this.toggleAddLink();
  }
  /**
   * Link state
   *
   * @returns {{data: string, focused: boolean, open: boolean}}
   * @class
   */
  get LinkState() {
    return this.linkState;
  }
  /**
   * set link validity
   * @param bool {boolean}
   * @constructor
   */
  set LinkError(i) {
    this.linkState.linkError = i, this.nodes.addLinkArea !== void 0 && (i ? this.nodes.addLinkArea.classList.add(this.CSS.linkError) : this.nodes.addLinkArea.classList.remove(this.CSS.linkError));
  }
  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption",
      addLinkArea: "image-tool__link-area",
      linkError: "image-tool__link-error"
    };
  }
  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: "empty",
      UPLOADING: "loading",
      FILLED: "filled"
    };
  }
  /**
   * Renders tool UI
   *
   * @param {ImageToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(i) {
    return !i.file || Object.keys(i.file).length === 0 ? this.toggleStatus(T.status.EMPTY) : this.toggleStatus(T.status.UPLOADING), this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const i = O("div", [this.CSS.button]);
    return i.innerHTML = this.config.buttonContent || `${I} ${this.api.i18n.t("Select an Image")}`, i.addEventListener("click", () => {
      this.onSelectFile();
    }), i;
  }
  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(i) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${i})`, this.toggleStatus(T.status.UPLOADING);
  }
  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(T.status.EMPTY);
  }
  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(i) {
    const n = /\.mp4$/.test(i) ? "VIDEO" : "IMG", s = {
      src: i
    };
    let a = "load";
    n === "VIDEO" && (s.autoplay = !0, s.loop = !0, s.muted = !0, s.playsinline = !0, a = "loadeddata"), this.nodes.imageEl = O(n, this.CSS.imageEl, s), this.nodes.imageEl.addEventListener(a, () => {
      this.toggleStatus(T.status.FILLED), this.nodes.imagePreloader && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(i) {
    this.nodes.caption && (this.nodes.caption.innerHTML = i);
  }
  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(i) {
    for (const n in T.status)
      Object.prototype.hasOwnProperty.call(T.status, n) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${T.status[n]}`, i === T.status[n]);
  }
  /**
   * changes display link input status
   */
  toggleAddLink() {
    this.linkState.open = !this.linkState.open;
    const i = () => {
      const n = this.nodes.wrapper.childNodes;
      for (let s = 0; s < n.length; s++)
        n[s].classList.contains(this.CSS.addLinkArea) && (n[s].value = "", this.nodes.wrapper.removeChild(n[s]));
    };
    this.linkState.open ? (this.nodes.addLinkArea === void 0 && this.linkState.stored !== "" && (this.LinkError = !j(this.linkState.stored)), this.nodes.wrapper.prepend(this.nodes.addLinkArea)) : (i(), this.linkState.stored = "", this.LinkError = !1);
  }
  /**
   * creates inputArea
   * @returns {Element}
   */
  createInputArea() {
    const i = (s) => {
      (s.keyCode || s.which) === 13 && (this.linkState.open = !1, this.linkState.stored = this.linkState.data, this.LinkError = !j(this.linkState.stored), this.getOutofLink(s));
    }, n = O("input", [this.CSS.addLinkArea, this.CSS.input], {
      placeholder: "이미지에 연결 할 링크를 입력하세요",
      defaultValue: this.linkState.data
    });
    return n.addEventListener("focus", () => {
      this.linkState.focused = !0, this.LinkError = !1;
    }), n.addEventListener("blur", () => {
      this.linkState.focused = !1, this.linkState.stored = this.linkState.data, this.linkState.stored !== "" && (this.LinkError = !j(this.linkState.stored));
    }), n.addEventListener("input", (s) => {
      this.linkState.data = s.target.value, s.target.value === "" && (this.linkState.stored = "", this.LinkError = !1);
    }), n.addEventListener("keydown", i), n;
  }
  // /**
  //  * applies link to node
  //  *
  //  * @param {string} link - link to apply
  //  * @returns {void}
  //  */
  // applyLink(link) {
  //   const aTag = document.createElement('a');
  //
  //   aTag.href = link;
  //   aTag.innerHTML = this.nodes.wrapper.innerHTML;
  //   this.nodes.wrapper.parentNode.replaceChild(this.nodes.wrapper, aTag);
  // }
  // /**
  //  * a tag to div
  //  *
  //  * @returns {void}
  //  */
  // removeLink() {
  //   const divTag = document.createElement('div');
  //
  //   divTag.innerHTML = this.nodes.wrapper.innerHTML;
  //   this.nodes.wrapper.parentNode.replaceChild(this.nodes.wrapper, divTag);
  // }
  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {any} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(i, n) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${i}`, n);
  }
}
const j = (S) => /(https:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(S);
function x(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var A = { exports: {} };
(function(S, i) {
  (function(n, s) {
    S.exports = s();
  })(window, function() {
    return function(n) {
      var s = {};
      function a(o) {
        if (s[o])
          return s[o].exports;
        var r = s[o] = { i: o, l: !1, exports: {} };
        return n[o].call(r.exports, r, r.exports, a), r.l = !0, r.exports;
      }
      return a.m = n, a.c = s, a.d = function(o, r, c) {
        a.o(o, r) || Object.defineProperty(o, r, { enumerable: !0, get: c });
      }, a.r = function(o) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
      }, a.t = function(o, r) {
        if (1 & r && (o = a(o)), 8 & r || 4 & r && typeof o == "object" && o && o.__esModule)
          return o;
        var c = /* @__PURE__ */ Object.create(null);
        if (a.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: o }), 2 & r && typeof o != "string")
          for (var v in o)
            a.d(c, v, (function(d) {
              return o[d];
            }).bind(null, v));
        return c;
      }, a.n = function(o) {
        var r = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return a.d(r, "a", r), r;
      }, a.o = function(o, r) {
        return Object.prototype.hasOwnProperty.call(o, r);
      }, a.p = "", a(a.s = 3);
    }([function(n, s) {
      var a;
      a = function() {
        return this;
      }();
      try {
        a = a || new Function("return this")();
      } catch {
        typeof window == "object" && (a = window);
      }
      n.exports = a;
    }, function(n, s, a) {
      (function(o) {
        var r = a(2), c = setTimeout;
        function v() {
        }
        function d(e) {
          if (!(this instanceof d))
            throw new TypeError("Promises must be constructed via new");
          if (typeof e != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(e, this);
        }
        function f(e, u) {
          for (; e._state === 3; )
            e = e._value;
          e._state !== 0 ? (e._handled = !0, d._immediateFn(function() {
            var l = e._state === 1 ? u.onFulfilled : u.onRejected;
            if (l !== null) {
              var g;
              try {
                g = l(e._value);
              } catch (m) {
                return void y(u.promise, m);
              }
              h(u.promise, g);
            } else
              (e._state === 1 ? h : y)(u.promise, e._value);
          })) : e._deferreds.push(u);
        }
        function h(e, u) {
          try {
            if (u === e)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (u && (typeof u == "object" || typeof u == "function")) {
              var l = u.then;
              if (u instanceof d)
                return e._state = 3, e._value = u, void k(e);
              if (typeof l == "function")
                return void t((g = l, m = u, function() {
                  g.apply(m, arguments);
                }), e);
            }
            e._state = 1, e._value = u, k(e);
          } catch (p) {
            y(e, p);
          }
          var g, m;
        }
        function y(e, u) {
          e._state = 2, e._value = u, k(e);
        }
        function k(e) {
          e._state === 2 && e._deferreds.length === 0 && d._immediateFn(function() {
            e._handled || d._unhandledRejectionFn(e._value);
          });
          for (var u = 0, l = e._deferreds.length; u < l; u++)
            f(e, e._deferreds[u]);
          e._deferreds = null;
        }
        function w(e, u, l) {
          this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof u == "function" ? u : null, this.promise = l;
        }
        function t(e, u) {
          var l = !1;
          try {
            e(function(g) {
              l || (l = !0, h(u, g));
            }, function(g) {
              l || (l = !0, y(u, g));
            });
          } catch (g) {
            if (l)
              return;
            l = !0, y(u, g);
          }
        }
        d.prototype.catch = function(e) {
          return this.then(null, e);
        }, d.prototype.then = function(e, u) {
          var l = new this.constructor(v);
          return f(this, new w(e, u, l)), l;
        }, d.prototype.finally = r.a, d.all = function(e) {
          return new d(function(u, l) {
            if (!e || e.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(e);
            if (g.length === 0)
              return u([]);
            var m = g.length;
            function p(E, C) {
              try {
                if (C && (typeof C == "object" || typeof C == "function")) {
                  var L = C.then;
                  if (typeof L == "function")
                    return void L.call(C, function(F) {
                      p(E, F);
                    }, l);
                }
                g[E] = C, --m == 0 && u(g);
              } catch (F) {
                l(F);
              }
            }
            for (var b = 0; b < g.length; b++)
              p(b, g[b]);
          });
        }, d.resolve = function(e) {
          return e && typeof e == "object" && e.constructor === d ? e : new d(function(u) {
            u(e);
          });
        }, d.reject = function(e) {
          return new d(function(u, l) {
            l(e);
          });
        }, d.race = function(e) {
          return new d(function(u, l) {
            for (var g = 0, m = e.length; g < m; g++)
              e[g].then(u, l);
          });
        }, d._immediateFn = typeof o == "function" && function(e) {
          o(e);
        } || function(e) {
          c(e, 0);
        }, d._unhandledRejectionFn = function(e) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", e);
        }, s.a = d;
      }).call(this, a(5).setImmediate);
    }, function(n, s, a) {
      s.a = function(o) {
        var r = this.constructor;
        return this.then(function(c) {
          return r.resolve(o()).then(function() {
            return c;
          });
        }, function(c) {
          return r.resolve(o()).then(function() {
            return r.reject(c);
          });
        });
      };
    }, function(n, s, a) {
      function o(t) {
        return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
      }
      a(4);
      var r, c, v, d, f, h, y, k = a(8), w = (c = function(t) {
        return new Promise(function(e, u) {
          t = d(t), (t = f(t)).beforeSend && t.beforeSend();
          var l = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          l.open(t.method, t.url), l.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var p = t.headers[m];
            l.setRequestHeader(m, p);
          });
          var g = t.ratio;
          l.upload.addEventListener("progress", function(m) {
            var p = Math.round(m.loaded / m.total * 100), b = Math.ceil(p * g / 100);
            t.progress(Math.min(b, 100));
          }, !1), l.addEventListener("progress", function(m) {
            var p = Math.round(m.loaded / m.total * 100), b = Math.ceil(p * (100 - g) / 100) + g;
            t.progress(Math.min(b, 100));
          }, !1), l.onreadystatechange = function() {
            if (l.readyState === 4) {
              var m = l.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var p = k.parseHeaders(l.getAllResponseHeaders()), b = { body: m, code: l.status, headers: p };
              y(l.status) ? e(b) : u(b);
            }
          }, l.send(t.data);
        });
      }, v = function(t) {
        return t.method = "POST", c(t);
      }, d = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string")
          throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string")
          throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && o(t.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(r).includes(t.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(e) {
        }, t.beforeSend = t.beforeSend || function(e) {
        }, t.ratio && typeof t.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, f = function(t) {
        switch (t.method) {
          case "GET":
            var e = h(t.data, r.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var u = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || r.JSON;
            }(t);
            (k.isFormData(t.data) || k.isFormElement(t.data)) && (u = r.FORM), t.data = h(t.data, u), u !== w.contentType.FORM && (t.headers["content-type"] = u);
        }
        return t;
      }, h = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case r.URLENCODED:
            return k.urlEncode(t);
          case r.JSON:
            return k.jsonEncode(t);
          case r.FORM:
            return k.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: r = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: c, get: function(t) {
        return t.method = "GET", c(t);
      }, post: v, transport: function(t) {
        return t = d(t), k.selectFiles(t).then(function(e) {
          for (var u = new FormData(), l = 0; l < e.length; l++)
            u.append(t.fieldName, e[l], e[l].name);
          k.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var p = t.data[m];
            u.append(m, p);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(e);
          }, t.data = u, v(t);
        });
      }, selectFiles: function(t) {
        return delete (t = d(t)).beforeSend, k.selectFiles(t);
      } });
      n.exports = w;
    }, function(n, s, a) {
      a.r(s);
      var o = a(1);
      window.Promise = window.Promise || o.a;
    }, function(n, s, a) {
      (function(o) {
        var r = o !== void 0 && o || typeof self < "u" && self || window, c = Function.prototype.apply;
        function v(d, f) {
          this._id = d, this._clearFn = f;
        }
        s.setTimeout = function() {
          return new v(c.call(setTimeout, r, arguments), clearTimeout);
        }, s.setInterval = function() {
          return new v(c.call(setInterval, r, arguments), clearInterval);
        }, s.clearTimeout = s.clearInterval = function(d) {
          d && d.close();
        }, v.prototype.unref = v.prototype.ref = function() {
        }, v.prototype.close = function() {
          this._clearFn.call(r, this._id);
        }, s.enroll = function(d, f) {
          clearTimeout(d._idleTimeoutId), d._idleTimeout = f;
        }, s.unenroll = function(d) {
          clearTimeout(d._idleTimeoutId), d._idleTimeout = -1;
        }, s._unrefActive = s.active = function(d) {
          clearTimeout(d._idleTimeoutId);
          var f = d._idleTimeout;
          f >= 0 && (d._idleTimeoutId = setTimeout(function() {
            d._onTimeout && d._onTimeout();
          }, f));
        }, a(6), s.setImmediate = typeof self < "u" && self.setImmediate || o !== void 0 && o.setImmediate || this && this.setImmediate, s.clearImmediate = typeof self < "u" && self.clearImmediate || o !== void 0 && o.clearImmediate || this && this.clearImmediate;
      }).call(this, a(0));
    }, function(n, s, a) {
      (function(o, r) {
        (function(c, v) {
          if (!c.setImmediate) {
            var d, f, h, y, k, w = 1, t = {}, e = !1, u = c.document, l = Object.getPrototypeOf && Object.getPrototypeOf(c);
            l = l && l.setTimeout ? l : c, {}.toString.call(c.process) === "[object process]" ? d = function(p) {
              r.nextTick(function() {
                m(p);
              });
            } : function() {
              if (c.postMessage && !c.importScripts) {
                var p = !0, b = c.onmessage;
                return c.onmessage = function() {
                  p = !1;
                }, c.postMessage("", "*"), c.onmessage = b, p;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", k = function(p) {
              p.source === c && typeof p.data == "string" && p.data.indexOf(y) === 0 && m(+p.data.slice(y.length));
            }, c.addEventListener ? c.addEventListener("message", k, !1) : c.attachEvent("onmessage", k), d = function(p) {
              c.postMessage(y + p, "*");
            }) : c.MessageChannel ? ((h = new MessageChannel()).port1.onmessage = function(p) {
              m(p.data);
            }, d = function(p) {
              h.port2.postMessage(p);
            }) : u && "onreadystatechange" in u.createElement("script") ? (f = u.documentElement, d = function(p) {
              var b = u.createElement("script");
              b.onreadystatechange = function() {
                m(p), b.onreadystatechange = null, f.removeChild(b), b = null;
              }, f.appendChild(b);
            }) : d = function(p) {
              setTimeout(m, 0, p);
            }, l.setImmediate = function(p) {
              typeof p != "function" && (p = new Function("" + p));
              for (var b = new Array(arguments.length - 1), E = 0; E < b.length; E++)
                b[E] = arguments[E + 1];
              var C = { callback: p, args: b };
              return t[w] = C, d(w), w++;
            }, l.clearImmediate = g;
          }
          function g(p) {
            delete t[p];
          }
          function m(p) {
            if (e)
              setTimeout(m, 0, p);
            else {
              var b = t[p];
              if (b) {
                e = !0;
                try {
                  (function(E) {
                    var C = E.callback, L = E.args;
                    switch (L.length) {
                      case 0:
                        C();
                        break;
                      case 1:
                        C(L[0]);
                        break;
                      case 2:
                        C(L[0], L[1]);
                        break;
                      case 3:
                        C(L[0], L[1], L[2]);
                        break;
                      default:
                        C.apply(v, L);
                    }
                  })(b);
                } finally {
                  g(p), e = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? o === void 0 ? this : o : self);
      }).call(this, a(0), a(7));
    }, function(n, s) {
      var a, o, r = n.exports = {};
      function c() {
        throw new Error("setTimeout has not been defined");
      }
      function v() {
        throw new Error("clearTimeout has not been defined");
      }
      function d(l) {
        if (a === setTimeout)
          return setTimeout(l, 0);
        if ((a === c || !a) && setTimeout)
          return a = setTimeout, setTimeout(l, 0);
        try {
          return a(l, 0);
        } catch {
          try {
            return a.call(null, l, 0);
          } catch {
            return a.call(this, l, 0);
          }
        }
      }
      (function() {
        try {
          a = typeof setTimeout == "function" ? setTimeout : c;
        } catch {
          a = c;
        }
        try {
          o = typeof clearTimeout == "function" ? clearTimeout : v;
        } catch {
          o = v;
        }
      })();
      var f, h = [], y = !1, k = -1;
      function w() {
        y && f && (y = !1, f.length ? h = f.concat(h) : k = -1, h.length && t());
      }
      function t() {
        if (!y) {
          var l = d(w);
          y = !0;
          for (var g = h.length; g; ) {
            for (f = h, h = []; ++k < g; )
              f && f[k].run();
            k = -1, g = h.length;
          }
          f = null, y = !1, function(m) {
            if (o === clearTimeout)
              return clearTimeout(m);
            if ((o === v || !o) && clearTimeout)
              return o = clearTimeout, clearTimeout(m);
            try {
              o(m);
            } catch {
              try {
                return o.call(null, m);
              } catch {
                return o.call(this, m);
              }
            }
          }(l);
        }
      }
      function e(l, g) {
        this.fun = l, this.array = g;
      }
      function u() {
      }
      r.nextTick = function(l) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var m = 1; m < arguments.length; m++)
            g[m - 1] = arguments[m];
        h.push(new e(l, g)), h.length !== 1 || y || d(t);
      }, e.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = u, r.addListener = u, r.once = u, r.off = u, r.removeListener = u, r.removeAllListeners = u, r.emit = u, r.prependListener = u, r.prependOnceListener = u, r.listeners = function(l) {
        return [];
      }, r.binding = function(l) {
        throw new Error("process.binding is not supported");
      }, r.cwd = function() {
        return "/";
      }, r.chdir = function(l) {
        throw new Error("process.chdir is not supported");
      }, r.umask = function() {
        return 0;
      };
    }, function(n, s, a) {
      function o(c, v) {
        for (var d = 0; d < v.length; d++) {
          var f = v[d];
          f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(c, f.key, f);
        }
      }
      var r = a(9);
      n.exports = function() {
        function c() {
          (function(h, y) {
            if (!(h instanceof y))
              throw new TypeError("Cannot call a class as a function");
          })(this, c);
        }
        var v, d, f;
        return v = c, f = [{ key: "urlEncode", value: function(h) {
          return r(h);
        } }, { key: "jsonEncode", value: function(h) {
          return JSON.stringify(h);
        } }, { key: "formEncode", value: function(h) {
          if (this.isFormData(h))
            return h;
          if (this.isFormElement(h))
            return new FormData(h);
          if (this.isObject(h)) {
            var y = new FormData();
            return Object.keys(h).forEach(function(k) {
              var w = h[k];
              y.append(k, w);
            }), y;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(h) {
          return Object.prototype.toString.call(h) === "[object Object]";
        } }, { key: "isFormData", value: function(h) {
          return h instanceof FormData;
        } }, { key: "isFormElement", value: function(h) {
          return h instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(y, k) {
            var w = document.createElement("INPUT");
            w.type = "file", h.multiple && w.setAttribute("multiple", "multiple"), h.accept && w.setAttribute("accept", h.accept), w.style.display = "none", document.body.appendChild(w), w.addEventListener("change", function(t) {
              var e = t.target.files;
              y(e), document.body.removeChild(w);
            }, !1), w.click();
          });
        } }, { key: "parseHeaders", value: function(h) {
          var y = h.trim().split(/[\r\n]+/), k = {};
          return y.forEach(function(w) {
            var t = w.split(": "), e = t.shift(), u = t.join(": ");
            e && (k[e] = u);
          }), k;
        } }], (d = null) && o(v.prototype, d), f && o(v, f), c;
      }();
    }, function(n, s) {
      var a = function(r) {
        return encodeURIComponent(r).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, o = function(r, c, v, d) {
        return c = c || null, v = v || "&", d = d || null, r ? function(f) {
          for (var h = new Array(), y = 0; y < f.length; y++)
            f[y] && h.push(f[y]);
          return h;
        }(Object.keys(r).map(function(f) {
          var h, y, k = f;
          if (d && (k = d + "[" + k + "]"), typeof r[f] == "object" && r[f] !== null)
            h = o(r[f], null, v, k);
          else {
            c && (y = k, k = !isNaN(parseFloat(y)) && isFinite(y) ? c + Number(k) : k);
            var w = r[f];
            w = (w = (w = (w = w === !0 ? "1" : w) === !1 ? "0" : w) === 0 ? "0" : w) || "", h = a(k) + "=" + a(w);
          }
          return h;
        })).join(v).replace(/[!'()*]/g, "") : "";
      };
      n.exports = o;
    }]);
  });
})(A);
var B = A.exports;
const _ = /* @__PURE__ */ x(B);
function M(S) {
  return S && typeof S.then == "function";
}
class U {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: i, onUpload: n, onError: s }) {
    this.config = i, this.onUpload = n, this.onError = s;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: i }) {
    const n = function(a) {
      const o = new FileReader();
      o.readAsDataURL(a), o.onload = (r) => {
        i(r.target.result);
      };
    };
    let s;
    this.config.uploader && typeof this.config.uploader.uploadByFile == "function" ? s = _.selectFiles({ accept: this.config.types }).then((a) => {
      n(a[0]);
      const o = this.config.uploader.uploadByFile(a[0]);
      return M(o) || console.warn("Custom uploader method uploadByFile should return a Promise"), o;
    }) : s = _.transport({
      url: this.config.endpoints.byFile,
      data: this.config.additionalRequestData,
      accept: this.config.types,
      headers: this.config.additionalRequestHeaders,
      beforeSend: (a) => {
        n(a[0]);
      },
      fieldName: this.config.field
    }).then((a) => a.body), s.then((a) => {
      this.onUpload(a);
    }).catch((a) => {
      this.onError(a);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - image source url
   */
  uploadByUrl(i) {
    let n;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (n = this.config.uploader.uploadByUrl(i), M(n) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : n = _.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: i
      }, this.config.additionalRequestData),
      type: _.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((s) => s.body), n.then((s) => {
      this.onUpload(s);
    }).catch((s) => {
      this.onError(s);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  uploadByFile(i, { onPreview: n }) {
    const s = new FileReader();
    s.readAsDataURL(i), s.onload = (o) => {
      n(o.target.result);
    };
    let a;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      a = this.config.uploader.uploadByFile(i), M(a) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const o = new FormData();
      o.append(this.config.field, i), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([r, c]) => {
        o.append(r, c);
      }), a = _.post({
        url: this.config.endpoints.byFile,
        data: o,
        type: _.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((r) => r.body);
    }
    a.then((o) => {
      this.onUpload(o);
    }).catch((o) => {
      this.onError(o);
    });
  }
}
/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class P {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: I,
      title: "Image"
    };
  }
  /**
   * Available image tools
   *
   * @returns {Array}
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: H,
        title: "With border",
        toggle: !0
      },
      {
        name: "withLink",
        icon: D,
        title: "Add link"
      },
      {
        name: "withBackground",
        icon: R,
        title: "With background",
        toggle: !0
      }
    ];
  }
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageToolData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   * @param {BlockAPI|{}} tool.block - current Block API
   */
  constructor({ data: i, config: n, api: s, readOnly: a, block: o }) {
    this.api = s, this.readOnly = a, this.block = o, this.config = {
      endpoints: n.endpoints || "",
      additionalRequestData: n.additionalRequestData || {},
      additionalRequestHeaders: n.additionalRequestHeaders || {},
      field: n.field || "image",
      types: n.types || "image/*",
      captionPlaceholder: this.api.i18n.t(n.captionPlaceholder || "Caption"),
      buttonContent: n.buttonContent || "",
      uploader: n.uploader || void 0,
      actions: n.actions || []
    }, this.uploader = new U({
      config: this.config,
      onUpload: (r) => this.onUpload(r),
      onError: (r) => this.uploadingFailed(r)
    }), this.getOutOfLink = this.getOutOfLink.bind(this), this.ui = new T({
      api: s,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (r) => {
            this.ui.showPreloader(r);
          }
        });
      },
      readOnly: a,
      loadedLink: i.link || "",
      getOutOfLink: this.getOutOfLink
    }), this._data = {}, this.data = i;
  }
  // /**
  //  * link custom logic
  //  *
  //  * @public
  //  *
  //  * @returns {void}
  //  */
  // linkCustomEffect() {
  //   this.ui.toggleAddLink();
  //   // if (this._data.withLink === false) {
  //   //   this._data.withLink = 'www.youtube.com';
  //   //   this.ui.applyLink('www.youtube.com');
  //   // } else {
  //   //   this._data.withLink = false;
  //   //   this.ui.removeLink();
  //   // }
  // }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }
  /**
   * Validate data: check if Image exists
   *
   * @param {ImageToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(i) {
    return i.file && i.file.url;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageToolData}
   */
  save() {
    const i = this.ui.nodes.caption;
    return this._data.caption = i.innerHTML, this._data.link = this.ui.linkState.stored, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   *
   * @public
   *
   * @returns {Array}
   */
  renderSettings() {
    return P.tunes.concat(this.config.actions).map((n) => ({
      icon: n.icon,
      label: this.api.i18n.t(n.title),
      name: n.name,
      toggle: n.toggle,
      isActive: this.data[n.name],
      onActivate: () => {
        if (typeof n.action == "function") {
          n.action(n.name);
          return;
        }
        n.name === "withLink" && this.ui.toggleAddLink(), this.tuneToggled(n.name);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   *
   * @public
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param {CustomEvent} event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   * @returns {void}
   */
  async onPaste(i) {
    switch (i.type) {
      case "tag": {
        const n = i.detail.data;
        if (/^blob:/.test(n.src)) {
          const a = await (await fetch(n.src)).blob();
          this.uploadFile(a);
          break;
        }
        this.uploadUrl(n.src);
        break;
      }
      case "pattern": {
        const n = i.detail.data;
        this.uploadUrl(n);
        break;
      }
      case "file": {
        const n = i.detail.file;
        this.uploadFile(n);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {ImageToolData} data - data in Image Tool format
   */
  set data(i) {
    this.image = i.file, this._data.caption = i.caption || "", this._data.link = this.ui.linkState.stored, this.ui.fillCaption(this._data.caption), P.tunes.forEach(({ name: n }) => {
      const s = typeof i[n] < "u" ? i[n] === !0 || i[n] === "true" : !1;
      this.setTune(n, s);
    });
  }
  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {ImageToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set image(i) {
    this._data.file = i || {}, i && i.url && this.ui.fillImage(i.url);
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(i) {
    i.success && i.file ? this.image = i.file : this.uploadingFailed("incorrect response: " + JSON.stringify(i));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(i) {
    console.log("Image Tool: uploading failed because of", i), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */
  tuneToggled(i) {
    this.setTune(i, !this._data[i]);
  }
  /**
   * Generate new block and escape
   * @param event
   */
  getOutOfLink(i) {
    const n = this.api.blocks.getBlocksCount(), s = this.api.blocks.getCurrentBlockIndex();
    n === s + 1 ? (this.api.blocks.insert(void 0, void 0, void 0, void 0, !0), this.api.caret.setToLastBlock("start", 0)) : this.api.caret.setToNextBlock("start", 0), i.preventDefault(), i.stopPropagation();
  }
  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} any - tune state
   * @returns {void}
   */
  setTune(i, n) {
    if (i === "withLink") {
      const s = this.ui.linkState.open === !0;
      this._data[i] = s, this.ui.applyTune(i, s);
    } else
      this._data[i] = n, this.ui.applyTune(i, n);
  }
  /**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(i) {
    this.uploader.uploadByFile(i, {
      onPreview: (n) => {
        this.ui.showPreloader(n);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */
  uploadUrl(i) {
    this.ui.showPreloader(i), this.uploader.uploadByUrl(i);
  }
}
export {
  P as default
};
