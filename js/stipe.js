!(function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function(e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
  function(e, t, n) {
    e.exports = n(1);
  },
  function(e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function a(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function s(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function u(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function c(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function l(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function p(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function f(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function d(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function h(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function m(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function y(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function _(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function v(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function b(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function g(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function w(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function E(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function k(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function S(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function P(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function O(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function A(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function C(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function T(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function j(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function I(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function M(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function R(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function q(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function N(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function D(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function x(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function L(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function F(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function B(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function U(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function z(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function W(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function H(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function Y(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function K(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function V(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function G(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function $(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function J(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function Q(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function X(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Z(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function ee(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function te(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function ne(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function re(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function oe(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function ie(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function ae(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function se(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function ue(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function ce(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function le(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function pe(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function fe(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var de,
      he,
      me,
      ye,
      _e,
      ve,
      be = (function(e) {
        function t(e) {
          r(this, t);
          var n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return (
            window.__stripeElementsController &&
              window.__stripeElementsController.reportIntegrationError(e),
            (n.name = "IntegrationError"),
            Object.defineProperty(n, "message", {
              value: n.message,
              enumerable: !0
            }),
            n
          );
        }
        return i(t, e), t;
      })(Error),
      ge = be,
      we = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "absurd";
        throw new Error(t);
      },
      Ee = n(2),
      ke = n.n(Ee),
      Se = window.Promise ? Promise : ke.a,
      Pe = Se,
      Oe =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Ae =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Ce = function(e, t) {
        for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n];
      },
      Te = function(e, t) {
        for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
        return -1;
      },
      je = function(e) {
        return (
          e &&
          "object" === (void 0 === e ? "undefined" : Ae(e)) &&
          (e.constructor === Array || e.constructor === Object)
        );
      },
      Ie = function(e) {
        return je(e)
          ? Array.isArray(e)
            ? e.slice(0, e.length)
            : Oe({}, e)
          : e;
      },
      Me = function e(t) {
        return function() {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          if (Array.isArray(r[0]) && t) return Ie(r[0]);
          var i = Array.isArray(r[0]) ? [] : {};
          return (
            r.forEach(function(n) {
              n &&
                Object.keys(n).forEach(function(r) {
                  var o = i[r],
                    a = n[r],
                    s = je(o) && !(t && Array.isArray(o));
                  "object" === (void 0 === a ? "undefined" : Ae(a)) && s
                    ? (i[r] = e(t)(o, Ie(a)))
                    : void 0 !== a
                    ? (i[r] = je(a) ? e(t)(a) : Ie(a))
                    : void 0 !== o && (i[r] = o);
                });
            }),
            i
          );
        };
      },
      Re = (Me(!1), Me(!0)),
      qe = function(e, t) {
        for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = !0;
        for (var o = [], i = 0; i < e.length; i++) n[e[i]] && o.push(e[i]);
        return o;
      },
      Ne = function(e, t) {
        var n = 0,
          r = function r(o) {
            for (var i = Date.now() + 50; n < e.length && Date.now() < i; )
              t(e[n]), n++;
            n === e.length
              ? o()
              : setTimeout(function() {
                  return r(o);
                });
          };
        return new Pe(function(e) {
          return r(e);
        });
      },
      De = [
        "aed",
        "afn",
        "all",
        "amd",
        "ang",
        "aoa",
        "ars",
        "aud",
        "awg",
        "azn",
        "bam",
        "bbd",
        "bdt",
        "bgn",
        "bhd",
        "bif",
        "bmd",
        "bnd",
        "bob",
        "brl",
        "bsd",
        "btn",
        "bwp",
        "byr",
        "bzd",
        "cad",
        "cdf",
        "chf",
        "clf",
        "clp",
        "cny",
        "cop",
        "crc",
        "cuc",
        "cup",
        "cve",
        "czk",
        "djf",
        "dkk",
        "dop",
        "dzd",
        "egp",
        "ern",
        "etb",
        "eur",
        "fjd",
        "fkp",
        "gbp",
        "gel",
        "ghs",
        "gip",
        "gmd",
        "gnf",
        "gtq",
        "gyd",
        "hkd",
        "hnl",
        "hrk",
        "htg",
        "huf",
        "idr",
        "ils",
        "inr",
        "iqd",
        "irr",
        "isk",
        "jmd",
        "jod",
        "jpy",
        "kes",
        "kgs",
        "khr",
        "kmf",
        "kpw",
        "krw",
        "kwd",
        "kyd",
        "kzt",
        "lak",
        "lbp",
        "lkr",
        "lrd",
        "lsl",
        "ltl",
        "lvl",
        "lyd",
        "mad",
        "mdl",
        "mga",
        "mkd",
        "mmk",
        "mnt",
        "mop",
        "mro",
        "mur",
        "mvr",
        "mwk",
        "mxn",
        "myr",
        "mzn",
        "nad",
        "ngn",
        "nio",
        "nok",
        "npr",
        "nzd",
        "omr",
        "pab",
        "pen",
        "pgk",
        "php",
        "pkr",
        "pln",
        "pyg",
        "qar",
        "ron",
        "rsd",
        "rub",
        "rwf",
        "sar",
        "sbd",
        "scr",
        "sdg",
        "sek",
        "sgd",
        "shp",
        "skk",
        "sll",
        "sos",
        "srd",
        "ssp",
        "std",
        "svc",
        "syp",
        "szl",
        "thb",
        "tjs",
        "tmt",
        "tnd",
        "top",
        "try",
        "ttd",
        "twd",
        "tzs",
        "uah",
        "ugx",
        "usd",
        "uyu",
        "uzs",
        "vef",
        "vnd",
        "vuv",
        "wst",
        "xaf",
        "xag",
        "xau",
        "xcd",
        "xdr",
        "xof",
        "xpf",
        "yer",
        "zar",
        "zmk",
        "zmw",
        "btc",
        "jep",
        "eek",
        "ghc",
        "mtl",
        "tmm",
        "yen",
        "zwd",
        "zwl",
        "zwn",
        "zwr"
      ],
      xe = De,
      Le = {
        AT: "AT",
        AU: "AU",
        BE: "BE",
        BR: "BR",
        CA: "CA",
        CH: "CH",
        DE: "DE",
        DK: "DK",
        EE: "EE",
        ES: "ES",
        FI: "FI",
        FR: "FR",
        GB: "GB",
        GR: "GR",
        HK: "HK",
        IE: "IE",
        IN: "IN",
        IT: "IT",
        JP: "JP",
        LT: "LT",
        LU: "LU",
        LV: "LV",
        MX: "MX",
        MY: "MY",
        NL: "NL",
        NO: "NO",
        NZ: "NZ",
        PH: "PH",
        PL: "PL",
        PT: "PT",
        RO: "RO",
        SE: "SE",
        SG: "SG",
        SK: "SK",
        US: "US"
      },
      Fe = Object.keys(Le),
      Be = { live: "live", test: "test", unknown: "unknown" },
      Ue = function(e) {
        return /^pk_test_/.test(e)
          ? Be.test
          : /^pk_live_/.test(e)
          ? Be.live
          : Be.unknown;
      },
      ze = function(e) {
        if (e === Be.unknown)
          throw new ge(
            "It looks like you're using an older Stripe key. In order to use this API, you'll need to use a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys"
          );
      },
      We =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      He =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Ye = function(e, t, n) {
        return (
          "Invalid value for " +
          n.label +
          ": " +
          (n.path.join(".") || "value") +
          " should be " +
          e +
          ". You specified: " +
          t +
          "."
        );
      },
      Ke = function(e) {
        return {
          type: "valid",
          value: e,
          warnings:
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
        };
      },
      Ve = function(e) {
        return { error: e, errorType: "full", type: "error" };
      },
      Ge = function(e, t, n) {
        var r = new ge(Ye(e, t, n));
        return Ve(r);
      },
      $e = function(e, t, n) {
        return {
          expected: e,
          actual: String(t),
          options: n,
          errorType: "mismatch",
          type: "error"
        };
      },
      Je = function(e) {
        return function(t, n) {
          return void 0 === t ? Ke(t) : e(t, n);
        };
      },
      Qe = function(e, t) {
        return function(n, r) {
          var o = function(e) {
              var t = e.options.path.join(".") || "value";
              return {
                error: t + " should be " + e.expected,
                actual: t + " as " + e.actual
              };
            },
            i = function(e, t, n) {
              return Ve(
                new ge(
                  "Invalid value for " +
                    e +
                    ": " +
                    t +
                    ". You specified " +
                    n +
                    "."
                )
              );
            },
            a = e(n, r),
            s = t(n, r);
          if ("error" === a.type && "error" === s.type) {
            if ("mismatch" === a.errorType && "mismatch" === s.errorType) {
              var u = o(a),
                c = u.error,
                l = u.actual,
                p = o(s),
                f = p.error,
                d = p.actual;
              return i(
                r.label,
                c === f ? c : c + " or " + f,
                l === d ? l : l + " and " + d
              );
            }
            if ("mismatch" === a.errorType) {
              var h = o(a),
                m = h.error,
                y = h.actual;
              return i(r.label, m, y);
            }
            if ("mismatch" === s.errorType) {
              var _ = o(s),
                v = _.error,
                b = _.actual;
              return i(r.label, v, b);
            }
            return Ve(a.error);
          }
          return "valid" === a.type ? a : s;
        };
      },
      Xe = function(e, t) {
        return function(n, r) {
          return n instanceof e ? Ke(n) : $e("a " + t + " instance", n, r);
        };
      },
      Ze = function(e, t) {
        return function(n, r) {
          var o = Ce(e, function(e) {
            return e === n;
          });
          if (void 0 === o) {
            var i = t
              ? "a recognized string."
              : "one of the following strings: " + e.join(", ");
            return $e(i, n, r);
          }
          return Ke(o);
        };
      },
      et = function(e) {
        return function(t, n) {
          return "string" == typeof t && 0 === t.indexOf(e)
            ? Ke(t)
            : $e("a string starting with " + e, t, n);
        };
      },
      tt = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return Ze(t, !1);
      },
      nt = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return Ze(t, !0);
      },
      rt = tt.apply(void 0, s(Fe)),
      ot = tt.apply(void 0, s(xe)),
      it = (tt.apply(void 0, s(Object.keys(Be))),
      function(e, t) {
        return "string" == typeof e ? Ke(e) : $e("a string", e, t);
      }),
      at = function(e, t) {
        return function(n, r) {
          return void 0 === n ? Ke(t()) : e(n, r);
        };
      },
      st = function(e, t) {
        return "boolean" == typeof e ? Ke(e) : $e("a boolean", e, t);
      },
      ut = function(e) {
        return function(t, n) {
          return "number" == typeof t && t > e
            ? Ke(t)
            : $e("a number greater than " + e, t, n);
        };
      },
      ct = function(e) {
        return function(t, n) {
          return "number" == typeof t && t === parseInt(t, 10) && (!e || t >= 0)
            ? Ke(t)
            : $e(
                e
                  ? "a positive amount in the currency's subunit"
                  : "an amount in the currency's subunit",
                t,
                n
              );
        };
      },
      lt = function(e, t) {
        return ct(!1)(e, t);
      },
      pt = function(e, t) {
        return ct(!0)(e, t);
      },
      ft = function(e, t) {
        return e && "object" === (void 0 === e ? "undefined" : He(e))
          ? Ke(e)
          : $e("an object", e, t);
      },
      dt = function(e) {
        return function(t, n) {
          if (Array.isArray(t)) {
            return t
              .map(function(t, r) {
                return e(
                  t,
                  We({}, n, { path: [].concat(s(n.path), [String(r)]) })
                );
              })
              .reduce(function(e, t) {
                return "error" === e.type
                  ? e
                  : "error" === t.type
                  ? t
                  : Ke(
                      [].concat(s(e.value), [t.value]),
                      [].concat(s(e.warnings), s(t.warnings))
                    );
              }, Ke([]));
          }
          return $e("array", t, n);
        };
      },
      ht = function(e) {
        return function(t) {
          return function(n, r) {
            if (Array.isArray(n)) {
              var o = t(n, r);
              if ("valid" === o.type)
                for (var i = {}, a = 0; a < o.value.length; a += 1) {
                  var s = o.value[a];
                  if (
                    "object" === (void 0 === s ? "undefined" : He(s)) &&
                    s &&
                    "string" == typeof s[e]
                  ) {
                    var u = s[e];
                    if (i[u])
                      return Ve(
                        new ge(
                          "Duplicate value for " +
                            e +
                            ": " +
                            u +
                            ". The property '" +
                            e +
                            "' of '" +
                            r.path.join(".") +
                            "' has to be unique."
                        )
                      );
                    i[u] = !0;
                  }
                }
              return o;
            }
            return $e("array", n, r);
          };
        };
      },
      mt = function(e) {
        return function(t, n) {
          return void 0 === t
            ? Ke(void 0)
            : $e("used in " + e + " instead", t, n);
        };
      },
      yt = function(e) {
        return function(t) {
          return function(n, r) {
            if (
              n &&
              "object" === (void 0 === n ? "undefined" : He(n)) &&
              !Array.isArray(n)
            ) {
              var o = n,
                i = Ce(Object.keys(o), function(e) {
                  return !t[e];
                });
              if (i && e)
                return Ve(
                  new ge(
                    "Invalid " +
                      r.label +
                      " parameter: " +
                      [].concat(s(r.path), [i]).join(".") +
                      " is not an accepted parameter."
                  )
                );
              var u = Ke({});
              return (
                i &&
                  (u = Object.keys(o).reduce(function(e, n) {
                    return t[n]
                      ? e
                      : Ke(
                          e.value,
                          [].concat(s(e.warnings), [
                            "Unrecognized " +
                              r.label +
                              " parameter: " +
                              [].concat(s(r.path), [n]).join(".") +
                              " is not a recognized parameter. This may cause issues with your integration in the future."
                          ])
                        );
                  }, u)),
                Object.keys(t).reduce(function(e, n) {
                  if ("error" === e.type) return e;
                  var i = t[n],
                    u = i(o[n], We({}, r, { path: [].concat(s(r.path), [n]) }));
                  return "valid" === u.type && void 0 !== u.value
                    ? Ke(
                        We({}, e.value, a({}, n, u.value)),
                        [].concat(s(e.warnings), s(u.warnings))
                      )
                    : "valid" === u.type
                    ? Ke(e.value, [].concat(s(e.warnings), s(u.warnings)))
                    : u;
                }, u)
              );
            }
            return $e("an object", n, r);
          };
        };
      },
      _t = yt(!0),
      vt = yt(!1),
      bt = function(e, t, n, r) {
        var o = r || {},
          i = e(t, {
            origin: o.origin || "",
            element: o.element || "",
            label: n,
            path: []
          });
        return "valid" === i.type
          ? i
          : "full" === i.errorType
          ? i
          : {
              type: "error",
              errorType: "full",
              error: new ge(Ye(i.expected, i.actual, i.options))
            };
      },
      gt = function(e, t, n, r) {
        var o = bt(e, t, n, r);
        switch (o.type) {
          case "valid":
            return { value: o.value, warnings: o.warnings };
          case "error":
            throw o.error;
          default:
            return we(o);
        }
      },
      wt = /^(http(s)?):\/\//,
      Et = function(e) {
        return wt.test(e);
      },
      kt = function(e) {
        if (!Et(e)) return null;
        var t = document.createElement("a");
        t.href = e;
        var n = t.protocol,
          r = t.host,
          o = /:80$/,
          i = /:443$/;
        return (
          "http:" === n && o.test(r)
            ? (r = r.replace(o, ""))
            : "https:" === n && i.test(r) && (r = r.replace(i, "")),
          { host: r, protocol: n, origin: n + "//" + r }
        );
      },
      St = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = kt(e);
        return !!n && n.host !== (t || window.location.host);
      },
      Pt = function(e, t) {
        if ("/" === t[0]) {
          var n = kt(e);
          return n ? "" + n.origin + t : t;
        }
        return "" + e.replace(/\/[^\/]*$/, "/") + t;
      },
      Ot = {
        CARD_ELEMENT: "CARD_ELEMENT",
        CONTROLLER: "CONTROLLER",
        METRICS_CONTROLLER: "METRICS_CONTROLLER",
        PAYMENT_REQUEST_ELEMENT: "PAYMENT_REQUEST_ELEMENT",
        PAYMENT_REQUEST: "PAYMENT_REQUEST",
        IBAN_ELEMENT: "IBAN_ELEMENT",
        IDEAL_BANK_ELEMENT: "IDEAL_BANK_ELEMENT",
        AUTHORIZE_WITH_URL: "AUTHORIZE_WITH_URL",
        CARDINAL_3DS2: "CARDINAL_3DS2",
        STRIPE_3DS2: "STRIPE_3DS2"
      },
      At = Ot,
      Ct = function(e) {
        return "https://js.stripe.com/v3/" + (e || "");
      },
      Tt = function(e) {
        switch (e) {
          case "CARD_ELEMENT":
            return Ct(
              "elements-inner-card-bb3993fed438053cff8c34b118746552.html"
            );
          case "CONTROLLER":
            return Ct("controller-f7f3a6f6ceba93a7080646cefc5f2cb7.html");
          case "METRICS_CONTROLLER":
            return "https://js.stripe.com/v2/m/outer.html";
          case "PAYMENT_REQUEST_ELEMENT":
            return Ct(
              "elements-inner-payment-request-5d54e9e5f38bec71994ecb3bf06bacbb.html"
            );
          case "PAYMENT_REQUEST":
            return Ct(
              "payment-request-inner-da707f1be987dcdf7f71c7db219a28f4.html"
            );
          case "IBAN_ELEMENT":
            return Ct(
              "elements-inner-iban-242f96d4b10696eef0a96c26c3d6293b.html"
            );
          case "IDEAL_BANK_ELEMENT":
            return Ct(
              "elements-inner-ideal-bank-b6c2219074abded3c21fdf4a5839bd20.html"
            );
          case "AUTHORIZE_WITH_URL":
            return Ct(
              "authorize-with-url-inner-abec2a1368f105ca12d69f95d3522ce0.html"
            );
          case "CARDINAL_3DS2":
            return Ct("cardinal-inner-faf2f34fdb51374d90bf3336acb58d62.html");
          case "STRIPE_3DS2":
            return Ct("three-ds-2-inner-d11d46afa736477424eea50138e77709.html");
          default:
            return we(e);
        }
      },
      jt = Tt,
      It = {
        card: "card",
        cardNumber: "cardNumber",
        cardExpiry: "cardExpiry",
        cardCvc: "cardCvc",
        postalCode: "postalCode",
        iban: "iban",
        idealBank: "idealBank",
        idealBankSecondary: "idealBankSecondary",
        paymentRequestButton: "paymentRequestButton"
      },
      Mt = It,
      Rt = [Mt.card, Mt.cardNumber, Mt.cardExpiry, Mt.cardCvc, Mt.postalCode],
      qt = Rt,
      Nt = kt("https://js.stripe.com/v3/"),
      Dt = Nt ? Nt.origin : "",
      xt = {
        family: "font-family",
        src: "src",
        unicodeRange: "unicode-range",
        style: "font-style",
        variant: "font-variant",
        stretch: "font-stretch",
        weight: "font-weight",
        display: "font-display"
      },
      Lt = Object.keys(xt).reduce(function(e, t) {
        return (e[xt[t]] = t), e;
      }, {}),
      Ft = [Mt.idealBank, Mt.idealBankSecondary],
      Bt = 0,
      Ut = function(e) {
        return "" + e + Bt++;
      },
      zt = function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return t
          ? (
              parseInt(t, 10) ^
              ((16 * Math.random()) >> (parseInt(t, 10) / 4))
            ).toString(16)
          : "00000000-0000-4000-8000-000000000000".replace(/[08]/g, e);
      },
      Wt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Ht = function e(t, n) {
        var r = [];
        return (
          Object.keys(t).forEach(function(o) {
            var i = t[o],
              a = n ? n + "[" + o + "]" : o;
            if (i && "object" === (void 0 === i ? "undefined" : Wt(i))) {
              var s = e(i, a);
              "" !== s && (r = [].concat(u(r), [s]));
            } else void 0 !== i && null !== i && (r = [].concat(u(r), [a + "=" + encodeURIComponent(String(i))]));
          }),
          r.join("&").replace(/%20/g, "+")
        );
      },
      Yt = Ht,
      Kt = n(6),
      Vt = n.n(Kt),
      Gt = (function() {
        function e(e, t) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, s = e[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              !r && s.return && s.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
        return function(t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      $t = function(e, t) {
        var n = {};
        t.forEach(function(e) {
          var t = Gt(e, 2),
            r = t[0],
            o = t[1];
          r.split(/\s+/).forEach(function(e) {
            e && (n[e] = n[e] || o);
          });
        }),
          (e.className = Vt()(e.className, n));
      },
      Jt = function(e, t) {
        e.style.cssText = Object.keys(t)
          .map(function(e) {
            return e + ": " + t[e] + " !important;";
          })
          .join(" ");
      },
      Qt = function(e) {
        try {
          return window.parent.frames[e];
        } catch (e) {
          return null;
        }
      },
      Xt = function(e) {
        if (!document.body)
          throw new ge(
            "Stripe.js requires that your page has a <body> element."
          );
        return e(document.body);
      },
      Zt =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      en = function(e) {
        var t = e.frameId,
          n = e.controllerId,
          r = e.type,
          o = Dt,
          i = void 0;
        "controller" === r
          ? (i = Qt(t))
          : "group" === r
          ? (i = Qt(n))
          : "outer" === r
          ? (i = window.frames[t])
          : "inner" === r && ((o = "*"), (i = window.parent)),
          i &&
            i.postMessage(JSON.stringify(Zt({}, e, { __stripeJsV3: !0 })), o);
      },
      tn = function(e) {
        try {
          var t = "string" == typeof e ? JSON.parse(e) : e;
          return t.__stripeJsV3 ? t : null;
        } catch (e) {
          return null;
        }
      },
      nn = (n(7),
      function(e, t) {
        var n = e._isUserError || "IntegrationError" === e.name;
        throw (t &&
          !n &&
          t.report("fatal.uncaught_error", {
            iframe: !1,
            name: e.name,
            element: "outer",
            message: e.message || e.description,
            fileName: e.fileName,
            lineNumber: e.lineNumber,
            columnNumber: e.columnNumber,
            stack: e.stack && e.stack.substring(0, 1e3)
          }),
        e);
      }),
      rn = function(e, t) {
        return function(n) {
          try {
            return e.call(this, n);
          } catch (e) {
            return nn(e, t || (this && this._controller));
          }
        };
      },
      on = function(e, t) {
        return function(n, r) {
          try {
            return e.call(this, n, r);
          } catch (e) {
            return nn(e, t || (this && this._controller));
          }
        };
      },
      an = function(e, t) {
        return function(n, r, o) {
          try {
            return e.call(this, n, r, o);
          } catch (e) {
            return nn(e, t || (this && this._controller));
          }
        };
      },
      sn = function(e, t) {
        return function() {
          try {
            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return e.call.apply(e, [this].concat(r));
          } catch (e) {
            return nn(e, t || (this && this._controller));
          }
        };
      },
      un = function e() {
        var t = this;
        c(this, e),
          (this._emit = function(e) {
            for (
              var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            return (
              (t._callbacks[e] || []).forEach(function(e) {
                var t = e.fn;
                if (t._isUserCallback)
                  try {
                    t.apply(void 0, r);
                  } catch (e) {
                    throw ((e._isUserError = !0), e);
                  }
                else t.apply(void 0, r);
              }),
              t
            );
          }),
          (this._once = function(e, n) {
            var r = function r() {
              t._off(e, r), n.apply(void 0, arguments);
            };
            return t._on(e, r, n);
          }),
          (this._removeAllListeners = function() {
            return (t._callbacks = {}), t;
          }),
          (this._on = function(e, n, r) {
            return (
              (t._callbacks[e] = t._callbacks[e] || []),
              t._callbacks[e].push({ original: r, fn: n }),
              t
            );
          }),
          (this._userOn = function(e, n) {
            if ("string" != typeof e)
              throw new ge(
                "When adding an event listener, the first argument should be a string event name."
              );
            if ("function" != typeof n)
              throw new ge(
                "When adding an event listener, the second argument should be a function callback."
              );
            return (n._isUserCallback = !0), t._on(e, n);
          }),
          (this._hasRegisteredListener = function(e) {
            return t._callbacks[e] && t._callbacks[e].length > 0;
          }),
          (this._off = function(e, n) {
            if (n) {
              for (
                var r = t._callbacks[e], o = void 0, i = 0;
                i < r.length;
                i++
              )
                if (((o = r[i]), o.fn === n || o.original === n)) {
                  r.splice(i, 1);
                  break;
                }
            } else delete t._callbacks[e];
            return t;
          }),
          (this._callbacks = {});
        var n = on(this._userOn),
          r = on(this._off),
          o = on(this._once),
          i = rn(this._hasRegisteredListener),
          a = rn(this._removeAllListeners),
          s = sn(this._emit);
        (this.on = this.addListener = this.addEventListener = n),
          (this.off = this.removeListener = this.removeEventListener = r),
          (this.once = o),
          (this.hasRegisteredListener = i),
          (this.removeAllListeners = a),
          (this.emit = s);
      },
      cn = un,
      ln =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      pn = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      fn = (function(e) {
        function t(e, n, r) {
          p(this, t);
          var o = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (o.type = e),
            (o.loaded = !1),
            (o._controllerId = n),
            (o._persistentMessages = []),
            (o._queuedMessages = []),
            (o._requests = {}),
            (o.id = o._generateId()),
            (o._iframe = o._createIFrame(r)),
            o._on("load", function() {
              (o.loaded = !0),
                o._ensureMounted(),
                o.loaded &&
                  (o._persistentMessages.forEach(function(e) {
                    return o._send(e);
                  }),
                  o._queuedMessages.forEach(function(e) {
                    return o._send(e);
                  }),
                  (o._queuedMessages = []));
            }),
            o
          );
        }
        return (
          d(t, e),
          pn(t, [
            {
              key: "_generateId",
              value: function() {
                return Ut("__privateStripeFrame");
              }
            },
            {
              key: "send",
              value: function(e) {
                this._send({
                  message: e,
                  type: "outer",
                  frameId: this.id,
                  controllerId: this._controllerId
                });
              }
            },
            {
              key: "sendPersistent",
              value: function(e) {
                this._ensureMounted();
                var t = {
                  message: e,
                  type: "outer",
                  frameId: this.id,
                  controllerId: this._controllerId
                };
                (this._persistentMessages = [].concat(
                  l(this._persistentMessages),
                  [t]
                )),
                  this.loaded && en(t);
              }
            },
            {
              key: "action",
              value: function(e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = Ut(e);
                return new Pe(function(o, i) {
                  (t._requests[r] = { resolve: o, reject: i }),
                    t._send({
                      message: {
                        action: "stripe-frame-action",
                        payload: { type: e, nonce: r, options: n }
                      },
                      type: "outer",
                      frameId: t.id,
                      controllerId: t._controllerId
                    });
                });
              }
            },
            {
              key: "resolve",
              value: function(e, t) {
                this._requests[e] && this._requests[e].resolve(t);
              }
            },
            {
              key: "_send",
              value: function(e) {
                this._ensureMounted(),
                  this.loaded
                    ? en(e)
                    : (this._queuedMessages = [].concat(
                        l(this._queuedMessages),
                        [e]
                      ));
              }
            },
            {
              key: "appendTo",
              value: function(e) {
                e.appendChild(this._iframe);
              }
            },
            {
              key: "unmount",
              value: function() {
                (this.loaded = !1), this._emit("unload");
              }
            },
            {
              key: "destroy",
              value: function() {
                this.unmount();
                var e = this._iframe.parentElement;
                e && e.removeChild(this._iframe), this._emit("destroy");
              }
            },
            {
              key: "_ensureMounted",
              value: function() {
                this._isMounted() || this.unmount();
              }
            },
            {
              key: "_isMounted",
              value: function() {
                return !!document.body && document.body.contains(this._iframe);
              }
            },
            {
              key: "_createIFrame",
              value: function(e) {
                var t = window.location.href.toString(),
                  n = kt(t),
                  r = n ? n.origin : "",
                  o =
                    e.queryString && "string" == typeof e.queryString
                      ? e.queryString
                      : Yt(
                          ln({}, e, {
                            origin: r,
                            referrer: t,
                            controllerId: this._controllerId
                          })
                        ),
                  i = document.createElement("iframe");
                return (
                  i.setAttribute("frameborder", "0"),
                  i.setAttribute("allowTransparency", "true"),
                  i.setAttribute("scrolling", "no"),
                  i.setAttribute("name", this.id),
                  i.setAttribute("allowpaymentrequest", "true"),
                  (i.src = jt(this.type) + "#" + o),
                  i
                );
              }
            }
          ]),
          t
        );
      })(cn),
      dn = fn,
      hn = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      mn = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      yn = {
        border: "none",
        margin: "0",
        padding: "0",
        width: "1px",
        "min-width": "100%",
        overflow: "hidden",
        display: "block",
        visibility: "hidden",
        position: "fixed",
        height: "1px",
        "pointer-events": "none"
      },
      _n = (function(e) {
        function t(e, n, r) {
          h(this, t);
          var o = m(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r)
          );
          if (
            ((o.autoload = r.autoload || !1),
            "complete" === document.readyState)
          )
            o._ensureMounted();
          else {
            var i = o._ensureMounted.bind(o);
            document.addEventListener("DOMContentLoaded", i),
              window.addEventListener("load", i),
              setTimeout(i, 5e3);
          }
          return o;
        }
        return (
          y(t, e),
          hn(t, [
            {
              key: "_ensureMounted",
              value: function() {
                mn(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  "_ensureMounted",
                  this
                ).call(this),
                  this._isMounted() || this._autoMount();
              }
            },
            {
              key: "_autoMount",
              value: function() {
                if (document.body) this.appendTo(document.body);
                else if (
                  "complete" === document.readyState ||
                  "interactive" === document.readyState
                )
                  throw new ge(
                    "Stripe.js requires that your page has a <body> element."
                  );
                this.autoload && (this.loaded = !0);
              }
            },
            {
              key: "_createIFrame",
              value: function(e) {
                var n = mn(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  "_createIFrame",
                  this
                ).call(this, e);
                return (
                  n.setAttribute("aria-hidden", "true"),
                  n.setAttribute("allowpaymentrequest", "true"),
                  n.setAttribute("tabIndex", "-1"),
                  Jt(n, yn),
                  n
                );
              }
            }
          ]),
          t
        );
      })(dn),
      vn = _n,
      bn = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      gn = (function(e) {
        function t() {
          return (
            _(this, t),
            v(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          b(t, e),
          bn(t, [
            {
              key: "_generateId",
              value: function() {
                return this._controllerId;
              }
            }
          ]),
          t
        );
      })(vn),
      wn = gn,
      En = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      kn = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      Sn = {
        border: "none",
        margin: "0",
        padding: "0",
        width: "1px",
        "min-width": "100%",
        overflow: "hidden",
        display: "block"
      },
      Pn = (function(e) {
        function t() {
          return (
            g(this, t),
            w(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          E(t, e),
          En(t, [
            {
              key: "update",
              value: function(e) {
                this.send({ action: "stripe-user-update", payload: e });
              }
            },
            {
              key: "updateStyle",
              value: function(e) {
                var t = this;
                Object.keys(e).forEach(function(n) {
                  t._iframe.style[n] = e[n];
                });
              }
            },
            {
              key: "focus",
              value: function() {
                this.loaded &&
                  this.send({ action: "stripe-user-focus", payload: {} });
              }
            },
            {
              key: "blur",
              value: function() {
                this.loaded &&
                  (this._iframe.contentWindow.blur(), this._iframe.blur());
              }
            },
            {
              key: "clear",
              value: function() {
                this.send({ action: "stripe-user-clear", payload: {} });
              }
            },
            {
              key: "_createIFrame",
              value: function(e) {
                var n = kn(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  "_createIFrame",
                  this
                ).call(this, e);
                return (
                  n.setAttribute("title", "Secure payment input frame"),
                  Jt(n, Sn),
                  n
                );
              }
            }
          ]),
          t
        );
      })(dn),
      On = Pn,
      An = function(e, t) {
        var n = !1;
        return function() {
          if (n) throw new ge(t);
          n = !0;
          try {
            return e.apply(void 0, arguments).then(
              function(e) {
                return (n = !1), e;
              },
              function(e) {
                throw ((n = !1), e);
              }
            );
          } catch (e) {
            throw ((n = !1), e);
          }
        };
      },
      Cn = function(e) {
        var t = e;
        return function() {
          t && (t.apply(void 0, arguments), (t = null));
        };
      },
      Tn = function() {
        return Xt(function(e) {
          var t = e.style,
            n = t.position,
            r = t.top,
            o = t.left,
            i = t.bottom,
            a = t.right,
            s = t.overflow,
            u = window,
            c = u.pageXOffset,
            l = u.pageYOffset,
            p = document.documentElement
              ? window.innerWidth - document.documentElement.offsetWidth
              : 0,
            f = document.documentElement
              ? window.innerHeight - document.documentElement.offsetHeight
              : 0;
          return (
            (e.style.position = "fixed"),
            (e.style.overflow = "hidden"),
            (e.style.top = -l + "px"),
            (e.style.left = -c + "px"),
            (e.style.right = p + "px"),
            (e.style.bottom = f + "px"),
            Cn(function() {
              (e.style.position = n),
                (e.style.top = r),
                (e.style.left = o),
                (e.style.bottom = i),
                (e.style.right = a),
                (e.style.overflow = s),
                window.scrollTo(c, l);
            })
          );
        });
      },
      jn = function(e, t) {
        var n = Array.prototype.slice
          .call(
            document.querySelectorAll(
              "a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  object, embed, *[tabindex], *[contenteditable]"
            )
          )
          .filter(function(e) {
            var t = e.getAttribute("tabindex"),
              n = !t || parseInt(t, 10) >= 0,
              r = e.getBoundingClientRect(),
              o = r.width > 0 && r.height > 0;
            return n && o;
          });
        return n[
          Te(n, function(t) {
            return t === e || e.contains(t);
          }) + ("previous" === t ? -1 : 1)
        ];
      },
      In = function(e) {
        var t = [],
          n = Ne(document.querySelectorAll("*"), function(n) {
            var r = n.getAttribute("tabindex") || "";
            n !== e && (n.tabIndex = -1), t.push({ element: n, tabIndex: r });
          });
        return Cn(function() {
          n.then(function() {
            return Ne(t, function(e) {
              var t = e.element,
                n = e.tabIndex;
              "" === n
                ? t.removeAttribute("tabindex")
                : t.setAttribute("tabindex", n);
            });
          });
        });
      },
      Mn =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Rn = {
        display: "block",
        position: "fixed",
        "z-index": "2147483647",
        background: "rgba(0,0,0,0)",
        transition: "background 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        "will-change": "background",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0"
      },
      qn = Mn({}, Rn, { background: "rgba(0,0,0,0.5)" }),
      Nn = {
        position: "absolute",
        left: "0",
        top: "0",
        height: "100%",
        width: "100%"
      },
      Dn = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      xn = (function(e) {
        function t(e, n, r) {
          k(this, t);
          var o = S(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r)
          );
          return (
            (o._autoMount = function() {
              Xt(function(e) {
                (o._wrapper.style.display = "none"),
                  e.insertBefore(o._wrapper, e.firstChild),
                  o.appendTo(o._wrapper);
              });
            }),
            (o.show = function() {
              Jt(o._wrapper, Rn),
                Jt(o._iframe, Nn),
                (o.restoreFocus = In(o._iframe)),
                (o.restoreBodyScroll = Tn());
            }),
            (o.fadeInBackdrop = function() {
              Jt(o._wrapper, qn);
            }),
            (o.destroy = function() {
              return new Pe(function(e) {
                Jt(o._wrapper, Rn),
                  setTimeout(e, 500),
                  o._wrapper.addEventListener("transitionend", e);
              }).then(function() {
                Dn(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  "destroy",
                  o
                ).call(o),
                  document.body && document.body.removeChild(o._wrapper),
                  o.restoreBodyScroll(),
                  o.restoreFocus();
              });
            }),
            (o._wrapper = document.createElement("div")),
            (o.restoreBodyScroll = function() {}),
            (o.restoreFocus = function() {}),
            o._autoMount(),
            o
          );
        }
        return P(t, e), t;
      })(dn),
      Ln = xn,
      Fn =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Bn = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Un = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      zn = {
        display: "block",
        position: "absolute",
        "z-index": "1000",
        width: "1px",
        "min-width": "100%",
        margin: "2px 0 0 0",
        padding: "0",
        border: "none",
        overflow: "hidden"
      },
      Wn = (function(e) {
        function t() {
          return (
            O(this, t),
            A(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          C(t, e),
          Bn(t, [
            {
              key: "updateStyle",
              value: function(e) {
                var t = this;
                Object.keys(e).forEach(function(n) {
                  t._iframe.style[n] = e[n];
                });
              }
            },
            {
              key: "update",
              value: function(e) {
                this.send({ action: "stripe-user-update", payload: e });
              }
            },
            {
              key: "_createIFrame",
              value: function(e) {
                var n = Un(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  "_createIFrame",
                  this
                ).call(this, Fn({}, e, { isSecondaryFrame: !0 }));
                return Jt(n, zn), (n.style.height = "0"), n;
              }
            }
          ]),
          t
        );
      })(dn),
      Hn = Wn,
      Yn = function(e) {
        var t = kt(e),
          n = t ? t.host : "";
        return "stripe.com" === n || !!n.match(/\.stripe\.(com|me)$/);
      },
      Kn = function(e, t) {
        var n = kt(e),
          r = kt(t);
        return !(!n || !r) && n.origin === r.origin;
      },
      Vn = function(e) {
        return Kn(e, "https://js.stripe.com/v3/");
      },
      Gn = function(e) {
        return Vn(e) || Yn(e);
      },
      $n = [
        "button",
        "checkbox",
        "file",
        "hidden",
        "image",
        "submit",
        "radio",
        "reset"
      ],
      Jn = function(e) {
        var t = e.tagName;
        if (e.isContentEditable || "TEXTAREA" === t) return !0;
        if ("INPUT" !== t) return !1;
        var n = e.getAttribute("type");
        return -1 === $n.indexOf(n);
      },
      Qn = Jn,
      Xn = function(e) {
        return /(MSIE ([0-9]{1,}[.0-9]{0,})|Trident\/)/i.test(e);
      },
      Zn = function(e) {
        return /SamsungBrowser/.test(e);
      },
      er = function(e) {
        return /iPad|iPhone/i.test(e) && !Xn(e);
      },
      tr = function(e) {
        return /Android/i.test(e) && !Xn(e);
      },
      nr = window.navigator.userAgent,
      rr = (function(e) {
        return /Edge\//i.test(e);
      })(nr),
      or = ((function(e) {
        /Edge\/((1[0-6]\.)|0\.)/i.test(e);
      })(nr),
      Xn(nr)),
      ir = (function(e) {
        return /MSIE 9/i.test(e);
      })(nr),
      ar = ((function(e) {
        /MSIE ([0-9]{1,}[.0-9]{0,})/i.test(e);
      })(nr),
      er(nr)),
      sr = ((function(e) {
        er(e) || tr(e);
      })(nr),
      tr(nr),
      (function(e) {
        /Android 4\./i.test(e) && !/Chrome/i.test(e) && tr(e);
      })(nr),
      (function(e) {
        /^((?!chrome|android).)*safari/i.test(e) && Zn(e);
      })(nr),
      (function(e) {
        /Firefox\//i.test(e);
      })(nr),
      (function(e) {
        /Firefox\/(50|51|[0-4]?\d)([^\d]|$)/i.test(e);
      })(nr),
      Zn(nr)),
      ur = ((function(e) {
        /Chrome\/(6[6-9]|[7-9]\d+|[1-9]\d{2,})/i.test(e);
      })(nr),
      window.ApplePaySession,
      (de = {}),
      T(de, Mt.card, {
        unique: !0,
        conflict: [Mt.cardNumber, Mt.cardExpiry, Mt.cardCvc, Mt.postalCode],
        beta: !1
      }),
      T(de, Mt.cardNumber, { unique: !0, conflict: [Mt.card], beta: !1 }),
      T(de, Mt.cardExpiry, { unique: !0, conflict: [Mt.card], beta: !1 }),
      T(de, Mt.cardCvc, { unique: !0, conflict: [Mt.card], beta: !1 }),
      T(de, Mt.postalCode, { unique: !0, conflict: [Mt.card], beta: !1 }),
      T(de, Mt.paymentRequestButton, { unique: !0, conflict: [], beta: !1 }),
      T(de, Mt.iban, { unique: !0, conflict: [], beta: !1 }),
      T(de, Mt.idealBank, { unique: !0, conflict: [], beta: !1 }),
      de),
      cr = ur,
      lr = ((he = {}),
      j(he, Mt.card, At.CARD_ELEMENT),
      j(he, Mt.cardNumber, At.CARD_ELEMENT),
      j(he, Mt.cardExpiry, At.CARD_ELEMENT),
      j(he, Mt.cardCvc, At.CARD_ELEMENT),
      j(he, Mt.postalCode, At.CARD_ELEMENT),
      j(he, Mt.paymentRequestButton, At.PAYMENT_REQUEST_ELEMENT),
      j(he, Mt.iban, At.IBAN_ELEMENT),
      j(he, Mt.idealBank, At.IDEAL_BANK_ELEMENT),
      he),
      pr = lr,
      fr = ["brand"],
      dr = ["country", "bankName"],
      hr = ((me = {}),
      I(me, Mt.card, fr),
      I(me, Mt.cardNumber, fr),
      I(me, Mt.iban, dr),
      me),
      mr = I({}, Mt.idealBank, { secondary: Mt.idealBankSecondary }),
      yr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      _r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      vr = !1,
      br = function(e, t) {
        return (
          document.activeElement === e._iframe ||
          (e._iframe.parentElement && document.activeElement === t)
        );
      },
      gr = function e(t) {
        R(this, e), wr.call(this);
        var n = t.apiKey,
          r = t.stripeAccount,
          o = t.stripeJsId,
          i = t.locale;
        (this._id = Ut("__privateStripeController")),
          (this._stripeJsId = o),
          (this._apiKey = n),
          (this._stripeAccount = r),
          (this._controllerFrame = new wn(At.CONTROLLER, this._id, _r({}, t))),
          (this._frames = {}),
          (this._requests = {}),
          this._setupPostMessage(),
          (this._handleMessage = rn(this._handleMessage, this)),
          this.action.fetchLocale({ locale: i || "auto" });
      },
      wr = function() {
        var e = this;
        (this._sendCAReq = function(t) {
          var n = Ut(t.tag);
          return new Pe(function(r, o) {
            (e._requests[n] = { resolve: r, reject: o }),
              e._controllerFrame.send({
                action: "stripe-safe-controller-action-request",
                payload: { nonce: n, caReq: t }
              });
          });
        }),
          (this.livemode = function() {
            var t = e._apiKey;
            return /^pk_test_/.test(t)
              ? "testmode"
              : /^pk_live_/.test(t)
              ? "livemode"
              : "unknown";
          }),
          (this.action = {
            retrievePaymentIntent: function(t) {
              return e._sendCAReq({ tag: "RETRIEVE_PAYMENT_INTENT", value: t });
            },
            confirmPaymentIntent: function(t) {
              return e._sendCAReq({ tag: "CONFIRM_PAYMENT_INTENT", value: t });
            },
            fetchLocale: function(t) {
              return e._sendCAReq({ tag: "FETCH_LOCALE", value: t });
            },
            updateCSSFonts: function(t) {
              return e._sendCAReq({ tag: "UPDATE_CSS_FONTS", value: t });
            },
            createApplePaySession: function(t) {
              return e._sendCAReq({
                tag: "CREATE_APPLE_PAY_SESSION",
                value: t
              });
            },
            retrieveSource: function(t) {
              return e._sendCAReq({ tag: "RETRIEVE_SOURCE", value: t });
            },
            tokenizeWithElement: function(t) {
              return e._sendCAReq({ tag: "TOKENIZE_WITH_ELEMENT", value: t });
            },
            tokenizeWithData: function(t) {
              return e._sendCAReq({ tag: "TOKENIZE_WITH_DATA", value: t });
            },
            createSourceWithElement: function(t) {
              return e._sendCAReq({
                tag: "CREATE_SOURCE_WITH_ELEMENT",
                value: t
              });
            },
            createSourceWithData: function(t) {
              return e._sendCAReq({ tag: "CREATE_SOURCE_WITH_DATA", value: t });
            },
            createPaymentMethodWithElement: function(t) {
              return e._sendCAReq({
                tag: "CREATE_PAYMENT_METHOD_WITH_ELEMENT",
                value: t
              });
            },
            createPaymentMethodWithData: function(t) {
              return e._sendCAReq({
                tag: "CREATE_PAYMENT_METHOD_WITH_DATA",
                value: t
              });
            },
            createPaymentPage: function(t) {
              return e._sendCAReq({ tag: "CREATE_PAYMENT_PAGE", value: t });
            },
            createPaymentPageWithSession: function(t) {
              return e._sendCAReq({
                tag: "CREATE_PAYMENT_PAGE_WITH_SESSION",
                value: t
              });
            }
          }),
          (this.createElementFrame = function(t, n) {
            var r = n.groupId,
              o = M(n, ["groupId"]),
              i = new On(t, e._id, _r({}, o, { keyMode: Ue(e._apiKey) }));
            return e._setupFrame(i, t, r);
          }),
          (this.createSecondaryElementFrame = function(t, n) {
            var r = n.groupId,
              o = M(n, ["groupId"]),
              i = new Hn(t, e._id, o);
            return e._setupFrame(i, t, r);
          }),
          (this.createHiddenFrame = function(t, n) {
            var r = new vn(t, e._id, n);
            return e._setupFrame(r, t);
          }),
          (this.createLightboxFrame = function(t, n) {
            var r = new Ln(t, e._id, n);
            return e._setupFrame(r, t);
          }),
          (this._setupFrame = function(t, n, r) {
            return (
              (e._frames[t.id] = t),
              e._controllerFrame.sendPersistent({
                action: "stripe-user-createframe",
                payload: { newFrameId: t.id, frameType: n, groupId: r }
              }),
              t._on("unload", function() {
                e._controllerFrame.sendPersistent({
                  action: "stripe-frame-unload",
                  payload: { unloadedFrameId: t.id }
                });
              }),
              t._on("destroy", function() {
                delete e._frames[t.id],
                  e._controllerFrame.sendPersistent({
                    action: "stripe-frame-destroy",
                    payload: { destroyedFrameId: t.id }
                  });
              }),
              t._on("load", function() {
                e._controllerFrame.sendPersistent({
                  action: "stripe-frame-load",
                  payload: { loadedFrameId: t.id }
                }),
                  e._controllerFrame.loaded &&
                    t.send({ action: "stripe-controller-load", payload: {} });
              }),
              t
            );
          }),
          (this.report = function(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            e._controllerFrame.send({
              action: "stripe-controller-report",
              payload: { event: t, data: n }
            });
          }),
          (this.warn = function() {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            e._controllerFrame.send({
              action: "stripe-controller-warn",
              payload: { args: n }
            });
          }),
          (this.controllerFor = function() {
            return "outer";
          }),
          (this._setupPostMessage = function() {
            window.addEventListener("message", function(t) {
              var n = t.data,
                r = t.origin,
                o = tn(n);
              o && Kn(Dt, r) && e._handleMessage(o);
            });
          }),
          (this._handleMessage = function(t) {
            var n = t.controllerId,
              r = t.frameId,
              o = t.message,
              i = e._frames[r];
            if (n === e._id)
              switch (o.action) {
                case "stripe-frame-event":
                  var a = o.payload,
                    s = a.event,
                    u = a.data;
                  if (i) {
                    if (ar) {
                      var c = i._iframe.parentElement,
                        l =
                          c && c.querySelector(".__PrivateStripeElement-input");
                      if ("focus" === s && !vr && !br(i, l)) {
                        l && l.focus(), (vr = !0);
                        break;
                      }
                      if ("blur" === s && vr) {
                        vr = !1;
                        break;
                      }
                      "blur" === s &&
                        setTimeout(function() {
                          var e = document.activeElement;
                          if (e && !br(i, l) && !Qn(e)) {
                            var t =
                              c &&
                              c.querySelector(
                                ".__PrivateStripeElement-safariInput"
                              );
                            if (t) {
                              var n = t;
                              (n.disabled = !1),
                                n.focus(),
                                n.blur(),
                                (n.disabled = !0);
                            }
                            e.focus();
                          }
                        }, 400);
                    }
                    i._emit(s, u);
                  }
                  break;
                case "stripe-frame-action-complete":
                  i && i.resolve(o.payload.nonce, o.payload.result);
                  break;
                case "stripe-frame-error":
                  throw new ge(o.payload.message);
                case "stripe-integration-error":
                  i &&
                    i._emit("__privateIntegrationError", {
                      message: o.payload.message
                    });
                  break;
                case "stripe-controller-load":
                  e._controllerFrame._emit("load"),
                    Object.keys(e._frames).forEach(function(t) {
                      return e._frames[t].send({
                        action: "stripe-controller-load",
                        payload: {}
                      });
                    });
                  break;
                case "stripe-safe-controller-action-response":
                  e._requests[o.payload.nonce] &&
                    e._requests[o.payload.nonce].resolve(o.payload.caRes);
                  break;
                case "stripe-safe-controller-action-error":
                  if (e._requests[o.payload.nonce]) {
                    var p = o.payload.caErr;
                    "object" === (void 0 === p ? "undefined" : yr(p)) &&
                    null !== p &&
                    "string" == typeof p.name &&
                    "IntegrationError" === p.name
                      ? e._requests[o.payload.nonce].reject(
                          new ge("string" == typeof p.message ? p.message : "")
                        )
                      : e._requests[o.payload.nonce].reject(p);
                  }
              }
          });
      },
      Er = gr,
      kr = function() {
        var e = document.querySelectorAll("meta[name=viewport][content]"),
          t = e[e.length - 1];
        return t && t instanceof HTMLMetaElement ? t.content : "";
      },
      Sr = function(e) {
        kr().match(/width=device-width/) ||
          e(
            'Elements requires "width=device-width" be set in your page\'s viewport meta tag.\n       For more information: https://stripe.com/docs/stripe-js/elements/quickstart#viewport-meta-requirements'
          );
      },
      Pr = (function(e) {
        function t() {
          q(this, t);
          var e = N(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (e.name = "NetworkError"), (e.type = "network_error"), e;
        }
        return D(t, e), t;
      })(Error),
      Or = Pr,
      Ar =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Cr = {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      Tr = function(e) {
        return (
          Object.keys(Cr).forEach(function(t) {
            e.setRequestHeader(t, Cr[t]);
          }),
          e
        );
      },
      jr = function e(t) {
        return new Pe(function(n, r) {
          var o = t.method,
            i = t.url,
            a = t.data,
            s = t.withCredentials,
            u = a ? Yt(a) : "",
            c =
              !window.XMLHttpRequest ||
              (St(i) && void 0 === new XMLHttpRequest().withCredentials),
            l = "GET" === o && u ? i + "?" + u : i,
            p = "GET" === o ? "" : u;
          if (c) {
            var f = new window.XDomainRequest();
            try {
              f.open(o, l);
            } catch (e) {
              r(e);
            }
            (f.onerror = function() {
              n({
                responseText: JSON.stringify({ error: { type: "api_error" } })
              });
            }),
              (f.onload = function() {
                n({ status: 200, responseText: f.responseText });
              }),
              setTimeout(function() {
                f.send(p);
              }, 0);
          } else {
            var d = new XMLHttpRequest();
            s && (d.withCredentials = s),
              d.open(o, l, !0),
              Tr(d),
              (d.onreadystatechange = function() {
                4 === d.readyState &&
                  ((d.onreadystatechange = function() {}),
                  0 === d.status
                    ? s
                      ? r(new Or())
                      : e(Ar({}, t, { withCredentials: !0 })).then(n, r)
                    : n(d));
              });
            try {
              d.send(p);
            } catch (e) {
              r(e);
            }
          }
        });
      },
      Ir = jr,
      Mr =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Rr = function(e, t) {
        var n = /@font-face[ ]?{[^}]*}/g,
          r = e.match(n);
        if (!r) throw new ge("No @font-face rules found in file from " + t);
        return r;
      },
      qr = function(e) {
        var t = e.match(/@font-face[ ]?{([^}]*)}/);
        return t ? t[1] : "";
      },
      Nr = function(e, t) {
        var n = e.replace(/\/\*.*\*\//g, "").trim(),
          r = n.length && /;$/.test(n) ? n : n + ";",
          o = r.match(/((([^;(]*\([^()]*\)[^;)]*)|[^;]+)+)(?=;)/g);
        if (!o)
          throw new ge(
            "Found @font-face rule containing no valid font-properties in file from " +
              t
          );
        return o;
      },
      Dr = function(e, t) {
        var n = e.indexOf(":");
        if (-1 === n)
          throw new ge(
            "Invalid css declaration in file from " + t + ': "' + e + '"'
          );
        var r = e.slice(0, n).trim(),
          o = Lt[r];
        if (!o)
          throw new ge(
            "Unsupported css property in file from " + t + ': "' + r + '"'
          );
        return { property: o, value: e.slice(n + 1).trim() };
      },
      xr = function(e, t) {
        var n = e.reduce(function(e, n) {
          var r = Dr(n, t),
            o = r.property,
            i = r.value;
          return Mr({}, e, x({}, o, i));
        }, {});
        return (
          ["family", "src"].forEach(function(e) {
            if (!n[e])
              throw new ge(
                "Missing css property in file from " + t + ': "' + xt[e] + '"'
              );
          }),
          n
        );
      },
      Lr = function(e) {
        return Ir({ url: e, method: "GET" })
          .then(function(e) {
            return e.responseText;
          })
          .then(function(t) {
            return Rr(t, e).map(function(t) {
              var n = qr(t),
                r = Nr(n, e);
              return xr(r, e);
            });
          });
      },
      Fr = Lr,
      Br = (function() {
        if (!window.PaymentRequest) return null;
        if (/CriOS\/59/.test(navigator.userAgent)) return null;
        if (/.*\(.*; wv\).*Chrome\/(?:53|54)\.\d.*/g.test(navigator.userAgent))
          return null;
        var e = window.PaymentRequest;
        return (
          e.prototype.canMakePayment ||
            (e.prototype.canMakePayment = function() {
              return Pe.resolve(!1);
            }),
          e
        );
      })(),
      Ur = { CAN_MAKE_PAYMENT: "CAN_MAKE_PAYMENT" },
      zr = function() {
        try {
          return window.location.origin === window.top.location.origin;
        } catch (e) {
          return !1;
        }
      },
      Wr = void 0,
      Hr = (function(e) {
        var t = {};
        return function(n) {
          if (void 0 !== t[n]) return t[n];
          var r = e(n);
          return (t[n] = r), r;
        };
      })(function(e) {
        return window.ApplePaySession.canMakePaymentsWithActiveCard(e).then(
          function(e) {
            return (
              Wr &&
                Wr("payreq.can_make_payment_native_response", { available: e }),
              e
            );
          }
        );
      }),
      Yr = function(e, t, n, r) {
        if (((Wr = r), window.ApplePaySession)) {
          if (zr()) {
            if (n && "https:" !== window.location.protocol)
              return (
                window.console &&
                  window.console.warn(
                    "To test Apple Pay, you must serve this page over HTTPS."
                  ),
                Pe.resolve(!1)
              );
            if (window.ApplePaySession.supportsVersion(2)) {
              var o = t ? [e, t] : [e],
                i = "merchant." + o.join(".") + ".stripe";
              return Hr(i).then(function(r) {
                if (n && !r && window.console) {
                  var o = t ? "or stripeAccount parameter (" + t + ") " : "";
                  window.console.warn(
                    "Either you do not have a card saved to your Wallet or the current domain (" +
                      e +
                      ") " +
                      o +
                      "is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain."
                  );
                }
                return r;
              });
            }
            return (
              n &&
                window.console &&
                window.console.warn(
                  "This version of Safari does not support ApplePay JS version 2."
                ),
              Pe.resolve(!1)
            );
          }
          return Pe.resolve(!1);
        }
        return Pe.resolve(!1);
      },
      Kr = null,
      Vr = function(e, t) {
        return null !== Kr
          ? Pe.resolve(Kr)
          : Br
          ? sr
            ? Pe.resolve(!1)
            : t && "https:" !== window.location.protocol
            ? (window.console &&
                window.console.warn(
                  "To test Payment Request, you must serve this page over HTTPS."
                ),
              Pe.resolve(!1))
            : e
            ? e.action(Ur.CAN_MAKE_PAYMENT).then(function(e) {
                var t = e.available;
                return (Kr = "boolean" == typeof t && t);
              })
            : Pe.resolve(!1)
          : Pe.resolve(!1);
      },
      Gr =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      $r = { merchantCapabilities: ["supports3DS"], displayItems: [] },
      Jr = { amount: pt, label: it, pending: Je(st) },
      Qr = { amount: lt, label: it, pending: Je(st) },
      Xr = {
        amount: lt,
        label: it,
        pending: Je(st),
        id: at(it, function() {
          return Ut("shippingOption");
        }),
        detail: at(it, function() {
          return "";
        })
      },
      Zr = {
        displayItems: Je(dt(vt(Qr))),
        shippingOptions: Je(ht("id")(dt(vt(Xr)))),
        total: Je(vt(Jr))
      },
      eo = { shipping: "shipping", delivery: "delivery", pickup: "pickup" },
      to = {
        requestShipping: Je(st),
        requestPayerName: Je(st),
        requestPayerEmail: Je(st),
        requestPayerPhone: Je(st),
        shippingType: Je(tt.apply(void 0, L(Object.keys(eo))))
      },
      no = Gr({}, to, {
        displayItems: Je(dt(vt(Qr))),
        shippingOptions: Je(ht("id")(dt(vt(Xr)))),
        total: vt(Qr),
        currency: ot,
        country: rt,
        jcbEnabled: Je(st),
        __passThroughEmail: Je(it)
      }),
      ro = {
        success: "success",
        fail: "fail",
        invalid_payer_name: "invalid_payer_name",
        invalid_payer_email: "invalid_payer_email",
        invalid_payer_phone: "invalid_payer_phone",
        invalid_shipping_address: "invalid_shipping_address"
      },
      oo = Gr({}, Zr, { status: tt.apply(void 0, L(Object.keys(ro))) }),
      io = Gr({}, Zr, { currency: Je(ot) }),
      ao = vt(oo),
      so = _t(io),
      uo = vt(no),
      co = ["mastercard", "visa"],
      lo = [
        "AT",
        "AU",
        "BE",
        "CA",
        "CH",
        "DE",
        "DK",
        "EE",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "HK",
        "IE",
        "IT",
        "JP",
        "LT",
        "LU",
        "LV",
        "MX",
        "NL",
        "NO",
        "NZ",
        "PL",
        "PT",
        "SE",
        "SG",
        "US"
      ],
      po = function(e, t) {
        var n = "US" === e || t ? ["discover", "diners", "jcb"].concat(co) : co;
        return -1 !== lo.indexOf(e) ? ["amex"].concat(F(n)) : n;
      },
      fo = function(e, t) {
        return po(e, t).reduce(function(e, t) {
          return "mastercard" === t
            ? [].concat(F(e), ["masterCard"])
            : "diners" === t
            ? e
            : [].concat(F(e), [t]);
        }, []);
      },
      ho = {
        bif: 1,
        clp: 1,
        djf: 1,
        gnf: 1,
        jpy: 1,
        kmf: 1,
        krw: 1,
        mga: 1,
        pyg: 1,
        rwf: 1,
        vnd: 1,
        vuv: 1,
        xaf: 1,
        xof: 1,
        xpf: 1
      },
      mo = function(e) {
        var t = ho[e.toLowerCase()] || 100;
        return { unitSize: 1 / t, fractionDigits: Math.log(t) / Math.log(10) };
      },
      yo = function(e, t) {
        var n = mo(t);
        return (e * n.unitSize).toFixed(n.fractionDigits);
      },
      _o =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      vo = function(e, t) {
        return {
          amount: yo(e.amount, t.currency),
          label: e.label,
          type: e.pending ? "pending" : "final"
        };
      },
      bo = function(e, t) {
        return {
          amount: yo(e.amount, t.currency),
          label: e.label,
          detail: e.detail,
          identifier: e.id
        };
      },
      go = function(e) {
        return function(t) {
          return t[e] && "string" == typeof t[e] ? t[e].toUpperCase() : null;
        };
      },
      wo = ((ye = {}),
      B(ye, ro.success, 0),
      B(ye, ro.fail, 1),
      B(ye, ro.invalid_payer_name, 2),
      B(ye, ro.invalid_shipping_address, 3),
      B(ye, ro.invalid_payer_phone, 4),
      B(ye, ro.invalid_payer_email, 4),
      ye),
      Eo = ((_e = {}),
      B(_e, eo.pickup, "storePickup"),
      B(_e, eo.shipping, "shipping"),
      B(_e, eo.delivery, "delivery"),
      _e),
      ko = {
        total: function(e) {
          return vo(e.total, e);
        },
        lineItems: function(e) {
          return e.displayItems
            ? e.displayItems.map(function(t) {
                return vo(t, e);
              })
            : [];
        },
        shippingMethods: function(e) {
          return e.shippingOptions
            ? e.shippingOptions.map(function(t) {
                return bo(t, e);
              })
            : [];
        }
      },
      So = {
        shippingType: function(e) {
          var t = e.shippingType;
          if (!t) return null;
          var n = Eo[t];
          if (void 0 !== n) return n;
          throw new ge("Invalid value for shippingType: " + t);
        },
        requiredBillingContactFields: function(e) {
          return e.requestPayerName ? ["postalAddress"] : null;
        },
        requiredShippingContactFields: function(e) {
          var t = [];
          return (
            e.requestShipping && t.push("postalAddress"),
            e.requestPayerEmail && t.push("email"),
            e.requestPayerPhone && t.push("phone"),
            t.length ? t : null
          );
        },
        countryCode: go("country"),
        currencyCode: go("currency"),
        merchantCapabilities: (function(e) {
          return function(t) {
            return t[e] || null;
          };
        })("merchantCapabilities"),
        supportedNetworks: function(e) {
          return fo(e.country, e.jcbEnabled || !1);
        }
      },
      Po = {
        status: function(e) {
          return wo[e.status] || 0;
        }
      },
      Oo = _o({}, ko, So),
      Ao = _o({}, ko, Po),
      Co = function(e) {
        var t = _o({}, $r, e);
        return Object.keys(Oo).reduce(function(e, n) {
          var r = Oo[n],
            o = r(t);
          return null !== o ? _o({}, e, B({}, n, o)) : e;
        }, {});
      },
      To = function(e) {
        return Object.keys(Ao).reduce(function(t, n) {
          var r = Ao[n],
            o = r(e);
          return null !== o ? _o({}, t, B({}, n, o)) : t;
        }, {});
      },
      jo = function(e) {
        return "string" == typeof e ? e : null;
      },
      Io = function(e) {
        return e ? jo(e.phoneNumber) : null;
      },
      Mo = function(e) {
        return e ? jo(e.emailAddress) : null;
      },
      Ro = function(e) {
        return e
          ? [e.givenName, e.familyName]
              .filter(function(e) {
                return e && "string" == typeof e;
              })
              .join(" ")
          : null;
      },
      qo = function(e) {
        if (e) {
          var t = e.addressLines,
            n = e.countryCode,
            r = e.postalCode,
            o = e.administrativeArea,
            i = e.locality,
            a = e.phoneNumber,
            s = jo(n);
          return {
            addressLine: Array.isArray(t)
              ? t.reduce(function(e, t) {
                  return "string" == typeof t ? [].concat(U(e), [t]) : e;
                }, [])
              : [],
            country: s ? s.toUpperCase() : "",
            postalCode: jo(r) || "",
            recipient: Ro(e) || "",
            region: jo(o) || "",
            city: jo(i) || "",
            phone: jo(a) || "",
            sortingCode: "",
            dependentLocality: "",
            organization: ""
          };
        }
        return null;
      },
      No = function(e, t) {
        if (e && t.shippingOptions) {
          var n = e.identifier,
            r = e.label;
          return (
            t.shippingOptions.filter(function(e) {
              return e.id === n && e.label === r;
            })[0] || null
          );
        }
        return null;
      },
      Do = function(e, t) {
        var n = e.shippingContact,
          r = e.shippingMethod,
          o = e.billingContact;
        return {
          shippingOption: No(r, t),
          shippingAddress: qo(n),
          payerEmail: t.__passThroughEmail ? t.__passThroughEmail : Mo(n),
          payerPhone: Io(n),
          payerName: Ro(o),
          methodName: "apple-pay"
        };
      },
      xo = Do,
      Lo = function(e) {
        if (!e || !e.length)
          throw new ge(
            "When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there."
          );
        return e;
      },
      Fo = Lo,
      Bo =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Uo =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      zo = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Wo = {
        australia: "AU",
        austria: "AT",
        canada: "CA",
        schweiz: "CH",
        deutschland: "DE",
        hongkong: "HK",
        saudiarabia: "SA",
        espaa: "ES",
        singapore: "SG",
        us: "US",
        usa: "US",
        unitedstatesofamerica: "US",
        unitedstates: "US",
        england: "GB",
        gb: "GB",
        uk: "GB",
        unitedkingdom: "GB"
      },
      Ho = (function(e) {
        function t(e) {
          W(this, t);
          var n = H(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          Yo.call(n);
          var r = e.report,
            o = e.warn,
            i = e.createApplePaySession,
            a = e.tokenizeWithData,
            s = e.createSourceWithData,
            u = e.createPaymentMethodWithData,
            c = e.authentication,
            l = e.mids,
            p = e.options;
          (n._controllerReport = r),
            (n._controllerWarn = o),
            (n._createApplePaySession = i),
            (n._tokenizeWithData = a),
            (n._createSourceWithData = s),
            (n._createPaymentMethodWithData = u),
            (n._showCalledByButtonElement = null),
            (n._authentication = c),
            (n._mids = l),
            n._report("payreq.options", { options: p });
          var f = gt(uo, p || {}, "paymentRequest()"),
            d = f.value;
          if (
            (f.warnings.forEach(function(e) {
              return n._controllerWarn(e);
            }),
            d.__passThroughEmail && d.requestPayerEmail)
          )
            throw new ge(
              "When providing `__passThroughEmail`, `requestPayerEmail` has to be `false`"
            );
          return (
            (n._cachedCanMakePayment = null),
            (n._canMakePaymentCalled = !1),
            (n._initialPaymentRequest = d),
            (n._isShowing = !1),
            n._initializeSessionState(),
            n
          );
        }
        return (
          Y(t, e),
          zo(t, [
            {
              key: "_initializeSessionState",
              value: function() {
                (this._paymentRequestOptions = Uo(
                  {},
                  this._initialPaymentRequest,
                  { status: ro.success }
                )),
                  (this._privateSession = null),
                  (this._privateShippingOption = null);
                var e = this._paymentRequestOptions.shippingOptions;
                e && e.length && (this._privateShippingOption = e[0]);
              }
            },
            {
              key: "_setupSession",
              value: function(e, t) {
                var n = this;
                e.addEventListener(
                  "validatemerchant",
                  rn(this._validateMerchant(e, t))
                ),
                  e.addEventListener(
                    "paymentauthorized",
                    rn(this._paymentAuthorized(e))
                  ),
                  e.addEventListener(
                    "cancel",
                    rn(function() {
                      n._report("payreq.show_rejected"),
                        (n._isShowing = !1),
                        n._emit("cancel");
                    })
                  ),
                  e.addEventListener(
                    "shippingcontactselected",
                    rn(this._shippingContactSelected(e))
                  ),
                  e.addEventListener(
                    "shippingmethodselected",
                    rn(this._shippingMethodSelected(e))
                  );
              }
            }
          ]),
          t
        );
      })(cn),
      Yo = function() {
        var e = this;
        (this.canMakePayment = rn(function() {
          return null === e._cachedCanMakePayment
            ? Yr(
                window.location.hostname,
                e._authentication.accountId,
                Ue(e._authentication.apiKey) === Be.test,
                e._report
              ).then(function(t) {
                return (
                  (e._canMakePaymentCalled = !0),
                  (e._cachedCanMakePayment = t),
                  e._report("payreq.can_make_payment_response", {
                    available: e._cachedCanMakePayment
                  }),
                  e._cachedCanMakePayment ? { applePay: !0 } : null
                );
              })
            : Pe.resolve().then(function() {
                return (
                  (e._canMakePaymentCalled = !0),
                  e._report("payreq.can_make_payment_response", {
                    available: e._cachedCanMakePayment,
                    cached: !0
                  }),
                  e._cachedCanMakePayment ? { applePay: !0 } : null
                );
              });
        })),
          (this.update = rn(function(t) {
            if (e._isShowing)
              throw new ge(
                "You cannot update Payment Request options while the payment sheet is showing."
              );
            var n = gt(so, t, "PaymentRequest update()"),
              r = n.value;
            n.warnings.forEach(function(t) {
              return e._controllerWarn(t);
            }),
              (e._initialPaymentRequest = Re(e._paymentRequestOptions, r)),
              e._initializeSessionState(),
              e._report("payreq.update", { updates: t });
          })),
          (this.show = rn(function() {
            null === e._showCalledByButtonElement &&
              (e._showCalledByButtonElement = !1);
            var t = e._showCalledByButtonElement;
            if (
              (e._usedByButtonElement &&
                !e._showCalledByButtonElement &&
                (e._report("payreq.show_called_with_button"),
                e._controllerWarn(
                  "Do not call show() yourself if you are using the paymentRequestButton Element.\nThe Element handles showing the payment sheet."
                )),
              !e._canMakePaymentCalled)
            )
              throw new ge(
                "You must first check the Payment Request API's\navailability using paymentRequest.canMakePayment() before calling show()."
              );
            if (!e._cachedCanMakePayment)
              throw new ge("Payment Request is not available in this browser.");
            e._initializeSessionState();
            var n = void 0;
            try {
              n = new window.ApplePaySession(2, Co(e._paymentRequestOptions));
            } catch (e) {
              throw "Must create a new ApplePaySession from a user gesture handler." ===
              e.message
                ? new ge(
                    "show() must be called from a user gesture handler (such as a click handler, after the user clicks a button)."
                  )
                : e;
            }
            (e._privateSession = n),
              e._setupSession(n, t),
              n.begin(),
              (e._isShowing = !0),
              e._report("payreq.show", {
                listeners: Object.keys(e._callbacks).sort()
              });
          })),
          (this.abort = rn(function() {
            e._privateSession &&
              (e._privateSession.abort(), e._report("payreq.abort"));
          })),
          (this._report = function(t, n) {
            e._controllerReport(
              t,
              Uo(
                {},
                n,
                null !== e._showCalledByButtonElement
                  ? { usesButtonElement: e._showCalledByButtonElement }
                  : {},
                { impl: "applepay" }
              )
            );
          }),
          (this._elementShow = function() {
            (e._showCalledByButtonElement = !0), e.show();
          }),
          (this._registerElement = function() {
            e._usedByButtonElement = !0;
          }),
          (this._validateMerchant = function(t, n) {
            return function(r) {
              e._createApplePaySession({
                data: {
                  validation_url: r.validationURL,
                  domain_name: window.location.hostname,
                  display_name: e._paymentRequestOptions.total.label
                },
                usesButtonElement: n
              }).then(function(n) {
                switch (n.type) {
                  case "object":
                    t.completeMerchantValidation(JSON.parse(n.object.session));
                    break;
                  case "error":
                    e._handleValidationError(t)(n.error);
                    break;
                  default:
                    we(n);
                }
              }, e._handleValidationError(t));
            };
          }),
          (this._handleValidationError = function(t) {
            return function(n) {
              var r = n.message;
              t.abort(),
                "string" == typeof r
                  ? (e._controllerWarn(r),
                    e._report("user_error.apple_pay_session_error", {
                      error: n
                    }))
                  : e._report("fatal.payreq.unexpected_error", { error: n });
            };
          }),
          (this._paymentAuthorized = function(t) {
            return function(n) {
              var r = n.payment;
              e._report("payreq.paymentauthorized");
              var o = e._showCalledByButtonElement
                ? Mt.paymentRequestButton
                : null;
              e._tokenizeWithData({
                type: "apple_pay",
                elementName: o,
                tokenData: Uo({}, r, {
                  billingContact: e._normalizeContact(r.billingContact)
                }),
                mids: e._mids
              }).then(function(n) {
                if ("error" === n.type)
                  t.completePayment(window.ApplePaySession.STATUS_FAILURE),
                    e._report("payreq.api_error.create_token", {
                      error: n.error
                    });
                else {
                  var o = e._normalizeContact(r.shippingContact),
                    i = e._normalizeContact(r.billingContact);
                  o &&
                    e._paymentRequestOptions.requestShipping &&
                    !o.countryCode &&
                    t.completePayment(
                      window.ApplePaySession
                        .STATUS_INVALID_SHIPPING_POSTAL_ADDRESS
                    );
                  var a = xo(
                    { shippingContact: o, billingContact: i },
                    e._paymentRequestOptions
                  );
                  e._onToken(t)(
                    Uo({}, a, {
                      shippingOption: e._privateShippingOption,
                      token: n.object
                    })
                  );
                }
              });
            };
          }),
          (this._normalizeContact = function(t) {
            if (
              t &&
              "object" === (void 0 === t ? "undefined" : Bo(t)) &&
              t.country &&
              "string" == typeof t.country
            ) {
              var n = t.country.toLowerCase().replace(/[^a-z]+/g, ""),
                r = void 0;
              return (
                t.countryCode
                  ? "string" == typeof t.countryCode &&
                    (r = t.countryCode.toUpperCase())
                  : (r = Wo[n]) ||
                    e._report("warn.payreq.missing_country_code", {
                      country: t.country
                    }),
                Uo({}, t, { countryCode: r })
              );
            }
            return "object" === (void 0 === t ? "undefined" : Bo(t)) ? t : null;
          }),
          (this._onToken = function(t) {
            return function(n) {
              e._hasRegisteredListener("token") &&
                e._maybeEmitSourceOrToken(
                  "token",
                  Uo({}, n, { complete: e._completePayment(t) })
                );
              var r = n.token,
                o = z(n, ["token"]),
                i = o.payerPhone,
                a = o.payerEmail,
                s = e._showCalledByButtonElement
                  ? Mt.paymentRequestButton
                  : null;
              e._hasRegisteredListener("source") &&
                e
                  ._createSourceWithData({
                    elementName: s,
                    type: "card",
                    sourceData: { token: r.id, owner: { phone: i, email: a } },
                    mids: e._mids
                  })
                  .then(function(n) {
                    "error" === n.type
                      ? (e._report("fatal.payreq.source_failed", {
                          error: n.error,
                          token: r
                        }),
                        t.completePayment(
                          window.ApplePaySession.STATUS_FAILURE
                        ))
                      : e._maybeEmitSourceOrToken(
                          "source",
                          Uo({}, o, {
                            source: n.object,
                            complete: e._completePayment(t)
                          })
                        );
                  }),
                e._hasRegisteredListener("paymentmethod") &&
                  e
                    ._createPaymentMethodWithData({
                      elementName: s,
                      type: "card",
                      paymentMethodData: {
                        card: { token: r.id },
                        billing_details: { phone: i, email: a }
                      },
                      mids: e._mids
                    })
                    .then(function(n) {
                      "error" === n.type
                        ? (e._report("fatal.payreq.pm_failed", {
                            error: n.error,
                            token: r
                          }),
                          t.completePayment(
                            window.ApplePaySession.STATUS_FAILURE
                          ))
                        : e._maybeEmitSourceOrToken(
                            "paymentmethod",
                            Uo({}, o, {
                              paymentMethod: n.object,
                              complete: e._completePayment(t)
                            })
                          );
                    });
            };
          }),
          (this._maybeEmitSourceOrToken = function(t, n) {
            e._isShowing && e._emit(t, n);
          }),
          (this._completePayment = function(t) {
            return function(n) {
              var r = gt(
                  ao,
                  { status: n },
                  "status for PaymentRequest completion"
                ),
                o = r.value;
              r.warnings.forEach(function(t) {
                return e._controllerWarn(t);
              }),
                (e._paymentRequestOptions = Re(e._paymentRequestOptions, o));
              var i = To(e._paymentRequestOptions),
                a = i.status;
              t.completePayment(a),
                -1 ===
                  [
                    window.ApplePaySession
                      .STATUS_INVALID_BILLING_POSTAL_ADDRESS,
                    window.ApplePaySession
                      .STATUS_INVALID_SHIPPING_POSTAL_ADDRESS,
                    window.ApplePaySession.STATUS_INVALID_SHIPPING_CONTACT
                  ].indexOf(a) && (e._isShowing = !1);
            };
          }),
          (this._shippingContactSelected = function(t) {
            return function(n) {
              var r = xo(
                { shippingContact: e._normalizeContact(n.shippingContact) },
                e._paymentRequestOptions
              ).shippingAddress;
              if (e._hasRegisteredListener("shippingaddresschange")) {
                var o = {
                  shippingAddress: r,
                  updateWith: e._completeShippingContactSelection(t)
                };
                e._emit("shippingaddresschange", o);
              } else {
                Fo(e._paymentRequestOptions.shippingOptions);
                var i = To(e._paymentRequestOptions),
                  a = i.total,
                  s = i.lineItems,
                  u = i.shippingMethods;
                t.completeShippingContactSelection(
                  window.ApplePaySession.STATUS_SUCCESS,
                  u,
                  a,
                  s
                );
              }
            };
          }),
          (this._completeShippingContactSelection = function(t) {
            return function(n) {
              var r = gt(ao, n || {}, "shipping address selection callback"),
                o = r.value;
              if (
                (r.warnings.forEach(function(t) {
                  return e._controllerWarn(t);
                }),
                (e._paymentRequestOptions = Re(e._paymentRequestOptions, o)),
                e._paymentRequestOptions.status === ro.success)
              ) {
                var i = Fo(e._paymentRequestOptions.shippingOptions);
                e._privateShippingOption = i[0];
              }
              var a = To(e._paymentRequestOptions),
                s = a.status,
                u = a.shippingMethods,
                c = a.total,
                l = a.lineItems;
              t.completeShippingContactSelection(s, u, c, l);
            };
          }),
          (this._shippingMethodSelected = function(t) {
            return function(n) {
              if (
                ((e._privateShippingOption = xo(
                  { shippingMethod: n.shippingMethod },
                  e._paymentRequestOptions
                ).shippingOption),
                e._hasRegisteredListener("shippingoptionchange"))
              ) {
                var r = {
                  shippingOption: e._privateShippingOption,
                  updateWith: e._completeShippingMethodSelection(t)
                };
                e._emit("shippingoptionchange", r);
              } else {
                var o = To(e._paymentRequestOptions),
                  i = o.total,
                  a = o.lineItems;
                t.completeShippingMethodSelection(
                  window.ApplePaySession.STATUS_SUCCESS,
                  i,
                  a
                );
              }
            };
          }),
          (this._completeShippingMethodSelection = function(t) {
            return function(n) {
              var r = gt(ao, n || {}, "shipping option selection callback"),
                o = r.value;
              r.warnings.forEach(function(t) {
                return e._controllerWarn(t);
              }),
                (e._paymentRequestOptions = Re(e._paymentRequestOptions, o));
              var i = To(e._paymentRequestOptions),
                a = i.status,
                s = i.total,
                u = i.lineItems;
              t.completeShippingMethodSelection(a, s, u);
            };
          });
      },
      Ko = Ho,
      Vo =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Go = (function(e) {
        function t(e, n, r, o) {
          V(this, t);
          var i = G(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          $o.call(i),
            (i._showCalledByButtonElement = null),
            (i._authentication = n),
            (i._controller = e),
            (i._mids = r),
            i._report("payreq.options", { options: o }),
            (i._cachedCanMakePayment = null),
            (i._canMakePaymentCalled = !1);
          var a = gt(uo, o || {}, "paymentRequest()"),
            s = a.value;
          if (
            (a.warnings.forEach(function(e) {
              return i._controller.warn(e);
            }),
            Br && "https:" === window.location.protocol)
          ) {
            i._controller.action.fetchLocale({ locale: "auto" });
            var u = i._controller.createHiddenFrame(At.PAYMENT_REQUEST, {
              authentication: n,
              mids: i._mids
            });
            i._setupPrFrame(u, s), (i._prFrame = u);
          } else i._prFrame = null;
          return i;
        }
        return $(t, e), t;
      })(cn),
      $o = function() {
        var e = this;
        (this.canMakePayment = rn(function() {
          return null === e._cachedCanMakePayment
            ? Vr(e._prFrame, Ue(e._authentication.apiKey) === Be.test).then(
                function(t) {
                  return (
                    (e._canMakePaymentCalled = !0),
                    (e._cachedCanMakePayment = t),
                    e._report("payreq.can_make_payment_response", {
                      available: e._cachedCanMakePayment
                    }),
                    e._cachedCanMakePayment ? { applePay: !1 } : null
                  );
                }
              )
            : Pe.resolve().then(function() {
                return (
                  (e._canMakePaymentCalled = !0),
                  e._report("payreq.can_make_payment_response", {
                    available: e._cachedCanMakePayment,
                    cached: !0
                  }),
                  e._cachedCanMakePayment ? { applePay: !1 } : null
                );
              });
        })),
          (this.update = rn(function(t) {
            var n = e._prFrame;
            if (n) {
              var r = gt(so, t, "PaymentRequest update()"),
                o = r.value;
              r.warnings.forEach(function(t) {
                return e._controller.warn(t);
              }),
                n.send({ action: "stripe-pr-update", payload: { data: o } });
            }
            e._report("payreq.update", { updates: t });
          })),
          (this.show = rn(function() {
            if (
              (null === e._showCalledByButtonElement &&
                (e._showCalledByButtonElement = !1),
              e._usedByButtonElement &&
                !e._showCalledByButtonElement &&
                (e._report("payreq.show_called_with_button"),
                e._controller.warn(
                  "Do not call show() yourself if you are using the paymentRequestButton Element.\nThe Element handles showing the payment sheet."
                )),
              !e._canMakePaymentCalled)
            )
              throw new ge(
                "You must first check the Payment Request API's\navailability using paymentRequest.canMakePayment() before calling show()."
              );
            if (!e._cachedCanMakePayment || !e._prFrame)
              throw new ge("Payment Request is not available in this browser.");
            e._prFrame.send({
              action: "stripe-pr-show",
              payload: {
                data: { usesButtonElement: e._showCalledByButtonElement }
              }
            }),
              e._report("payreq.show", {
                listeners: Object.keys(e._callbacks).sort()
              });
          })),
          (this.abort = rn(function() {
            e._prFrame &&
              (e._prFrame.send({ action: "stripe-pr-abort", payload: {} }),
              e._report("payreq.abort"));
          })),
          (this._report = function(t, n) {
            e._controller.report(
              t,
              Vo(
                {},
                n,
                null !== e._showCalledByButtonElement
                  ? { usesButtonElement: e._showCalledByButtonElement }
                  : {},
                { impl: "prapi" }
              )
            );
          }),
          (this._elementShow = function() {
            (e._showCalledByButtonElement = !0), e.show();
          }),
          (this._registerElement = function() {
            e._usedByButtonElement = !0;
          }),
          (this._setupPrFrame = function(t, n) {
            t.send({ action: "stripe-pr-initialize", payload: { data: n } }),
              t._on("pr-cancel", function() {
                e._emit("cancel");
              }),
              t._on("pr-error", function(t) {
                e._report("payreq.api_error.create_token", {
                  error:
                    "Would have emitted 'error' event, but 'error' is silenced."
                });
              }),
              t._on("pr-callback", function(r) {
                var o = r.event,
                  i = r.nonce,
                  a = r.options;
                if ("token" === o) {
                  var s = function(n) {
                    var r = gt(
                        ao,
                        { status: n },
                        "status for PaymentRequest completion"
                      ),
                      o = r.value;
                    r.warnings.forEach(function(t) {
                      return e._controller.warn(t);
                    }),
                      t.send({
                        action: "stripe-pr-callback-complete",
                        payload: { data: o, nonce: i }
                      });
                  };
                  e._handleToken(t, a, s);
                } else if (
                  "shippingaddresschange" === o ||
                  "shippingoptionchange" === o
                )
                  if (e._hasRegisteredListener(o)) {
                    var u = a.shippingAddress,
                      c = a.shippingOption,
                      l =
                        "shippingaddresschange" === o
                          ? { shippingAddress: u }
                          : { shippingOption: c };
                    e._emit(
                      o,
                      Vo({}, l, {
                        updateWith: function(r) {
                          var a = gt(ao, r || {}, o + " callback"),
                            s = a.value;
                          a.warnings.forEach(function(t) {
                            return e._controller.warn(t);
                          }),
                            "shippingaddresschange" === o &&
                              s.status === ro.success &&
                              Fo(s.shippingOptions || n.shippingOptions),
                            t.send({
                              action: "stripe-pr-callback-complete",
                              payload: { nonce: i, data: s }
                            });
                        }
                      })
                    );
                  } else
                    "shippingaddresschange" === o && Fo(n.shippingOptions),
                      t.send({
                        action: "stripe-pr-callback-complete",
                        payload: { nonce: i, data: { status: ro.success } }
                      });
                else
                  e._report("error.payreq.unknown_event", {
                    event: o,
                    options: a
                  });
              });
          }),
          (this._handleToken = function(t, n, r) {
            var o = n._privateOwner,
              i = K(n, ["_privateOwner"]);
            e._hasRegisteredListener("token") &&
              e._emit("token", Vo({}, i, { complete: r }));
            var a = i.token,
              s = K(i, ["token"]),
              u = n.payerPhone || null,
              c = n.payerEmail || null,
              l = e._showCalledByButtonElement ? Mt.paymentRequestButton : null;
            e._hasRegisteredListener("source") &&
              e._controller.action
                .createSourceWithData({
                  elementName: l,
                  type: "card",
                  sourceData: {
                    token: a.id,
                    owner: Vo({ phone: u, email: c }, o || {})
                  },
                  mids: null
                })
                .then(function(t) {
                  "error" === t.type
                    ? (e._report("fatal.payreq.source_failed", {
                        error: t.error,
                        token: a
                      }),
                      r(ro.fail))
                    : e._emit(
                        "source",
                        Vo({}, s, { source: t.object, complete: r })
                      );
                }),
              e._hasRegisteredListener("paymentmethod") &&
                e._controller.action
                  .createPaymentMethodWithData({
                    elementName: l,
                    type: "card",
                    paymentMethodData: {
                      card: { token: a.id },
                      billing_details: Vo({ phone: u, email: c }, o || {})
                    },
                    mids: null
                  })
                  .then(function(t) {
                    "error" === t.type
                      ? (e._report("fatal.payreq.pm_failed", {
                          error: t.error,
                          token: a
                        }),
                        r(ro.fail))
                      : e._emit(
                          "paymentmethod",
                          Vo({}, s, { paymentMethod: t.object, complete: r })
                        );
                  });
          });
      },
      Jo = Go,
      Qo = {
        base: Je(ft),
        complete: Je(ft),
        empty: Je(ft),
        invalid: Je(ft),
        paymentRequestButton: Je(ft)
      },
      Xo = {
        classes: Je(
          vt({
            base: Je(it),
            complete: Je(it),
            empty: Je(it),
            focus: Je(it),
            invalid: Je(it),
            webkitAutofill: Je(it)
          })
        ),
        hidePostalCode: Je(st),
        hideIcon: Je(st),
        style: Je(vt(Qo)),
        iconStyle: Je(tt("solid", "default")),
        value: Je(Qe(it, ft)),
        __privateCvcOptional: Je(st),
        __privateValue: Je(Qe(it, ft)),
        __privateEmitIbanValue: Je(st),
        error: Je(
          vt({ type: it, code: Je(it), decline_code: Je(it), param: Je(it) })
        ),
        locale: mt("elements()"),
        fonts: mt("elements()"),
        placeholder: Je(it),
        disabled: Je(st),
        placeholderCountry: Je(it),
        paymentRequest: Je(
          Qe(
            Xe(Ko, "stripe.paymentRequest(...)"),
            Xe(Jo, "stripe.paymentRequest(...)")
          )
        ),
        supportedCountries: Je(dt(it))
      },
      Zo = vt(Xo),
      ei = function(e, t) {
        if (!(e && e in cr))
          throw new ge(
            "A valid Element name must be provided. Valid Elements are:\n" +
              Object.keys(cr)
                .filter(function(e) {
                  return !cr[e].beta;
                })
                .join(", ") +
              "; you passed: " +
              e +
              "."
          );
        if (cr[e].unique && -1 !== t.indexOf(e))
          throw new ge("Can only create one Element of type " + e + ".");
        var n = qe(t, cr[e].conflict);
        if (n.length) {
          var r = n[0];
          throw new ge(
            "Cannot create an Element of type " +
              e +
              " after an Element of type " +
              r +
              " has already been created."
          );
        }
      },
      ti = "14px",
      ni = function(e) {
        var t = e.split(" ").map(function(e) {
          return parseInt(e.trim(), 10);
        });
        return 1 === t.length || 2 === t.length
          ? 2 * t[0]
          : 3 === t.length || 4 === t.length
          ? t[0] + t[2]
          : 0;
      },
      ri = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "1.2em",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ti,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "0",
          r = ni(n);
        if ("string" == typeof e && /^[0-9.]+px$/.test(e)) {
          return parseFloat(e.toString().replace(/[^0-9.]/g, "")) + r + "px";
        }
        var o = parseFloat(e.toString().replace(/[^0-9.]/g, "")),
          i = parseFloat(ti.replace(/[^0-9.]/g, "")),
          a = parseFloat(t.toString().replace(/[^0-9.]/g, "")),
          s = void 0;
        if ("string" == typeof t && /^(\d+|\d*\.\d+)px$/.test(t)) s = a;
        else if ("string" == typeof t && /^(\d+|\d*\.\d+)em$/.test(t))
          s = a * i;
        else if ("string" == typeof t && /^(\d+|\d*\.\d+)%$/.test(t))
          s = (a / 100) * i;
        else {
          if (
            "string" != typeof t ||
            (!/^[\d.]+$/.test(t) && !/^\d*\.(px|em|%)$/.test(t))
          )
            return "100%";
          s = i;
        }
        var u = o * s + r,
          c = u + "px";
        return /^[0-9.]+px$/.test(c) ? c : "100%";
      },
      oi = ri,
      ii = function(e, t) {
        return e ? window.getComputedStyle(e, t) : null;
      },
      ai = ii,
      si =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      ui = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      ci = {
        base: "StripeElement",
        focus: "StripeElement--focus",
        invalid: "StripeElement--invalid",
        complete: "StripeElement--complete",
        empty: "StripeElement--empty",
        webkitAutofill: "StripeElement--webkit-autofill"
      },
      li = {
        margin: "0",
        padding: "0",
        border: "none",
        display: "block",
        background: "transparent",
        position: "relative",
        opacity: "1"
      },
      pi = {
        border: "none",
        display: "block",
        position: "absolute",
        height: "1px",
        top: "0",
        left: "0",
        padding: "0",
        margin: "0",
        width: "100%",
        opacity: "0",
        background: "transparent",
        "pointer-events": "none",
        "font-size": "16px"
      },
      fi = function(e) {
        return parseFloat(e.toFixed(1));
      },
      di = function(e) {
        return /^\d+(\.\d*)?px$/.test(e);
      },
      hi = (function(e) {
        function t(e) {
          X(this, t);
          var n = Z(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          mi.call(n);
          var r = e.controller,
            o = e.componentName,
            i = e.paymentRequest;
          (n._controller = r), (n._componentName = o);
          var a = "paymentRequestButton" === n._componentName;
          if (a) {
            if (!i)
              throw new ge(
                "You must pass in a stripe.paymentRequest object in order to use this Element."
              );
            (n._paymentRequest = i), n._paymentRequest._registerElement();
          }
          return (
            n._createComponent(e, o),
            (n._classes = ci),
            n._changeClasses(e.classes || {}),
            (n._lastBackgroundColor = ""),
            (n._destroyed = !1),
            (n._focused = !1),
            (n._empty = !a),
            (n._invalid = !1),
            (n._complete = !1),
            (n._autofilled = !1),
            (n._lastSubmittedAt = null),
            n
          );
        }
        return (
          ee(t, e),
          ui(t, [
            {
              key: "_checkDestroyed",
              value: function() {
                if (this._destroyed)
                  throw new ge(
                    "This Element has already been destroyed. Please create a new one."
                  );
              }
            },
            {
              key: "_isMounted",
              value: function() {
                return (
                  !!document.body && document.body.contains(this._component)
                );
              }
            },
            {
              key: "_mountToParent",
              value: function(e) {
                var t = this._component.parentElement,
                  n = this._isMounted();
                if (e === t) {
                  if (n) return;
                  this.unmount(), this._mountTo(e);
                } else if (t) {
                  if (n)
                    throw new ge(
                      "This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting."
                    );
                  this.unmount(), this._mountTo(e);
                } else this._mountTo(e);
              }
            },
            {
              key: "_mountTo",
              value: function(e) {
                var t = Date.now(),
                  n = ai(e, null),
                  r = !!n && "rtl" === n.getPropertyValue("direction");
                for (this._parent = e; e.firstChild; )
                  e.removeChild(e.firstChild);
                e.appendChild(this._component),
                  this._frame.send({
                    action: "stripe-user-mount",
                    payload: { mountTime: t, rtl: r }
                  }),
                  this._findPossibleLabel(),
                  this._updateClasses();
              }
            },
            {
              key: "_updateClasses",
              value: function() {
                this._parent &&
                  $t(this._parent, [
                    [this._classes.base, !0],
                    [this._classes.empty, this._empty],
                    [this._classes.focus, this._focused],
                    [this._classes.invalid, this._invalid],
                    [this._classes.complete, this._complete],
                    [this._classes.webkitAutofill, this._autofilled]
                  ]);
              }
            },
            {
              key: "_removeClasses",
              value: function() {
                this._parent &&
                  $t(this._parent, [
                    [this._classes.base, !1],
                    [this._classes.empty, !1],
                    [this._classes.focus, !1],
                    [this._classes.invalid, !1],
                    [this._classes.complete, !1],
                    [this._classes.webkitAutofill, !1]
                  ]);
              }
            },
            {
              key: "_findPossibleLabel",
              value: function() {
                var e = this._parent;
                if (e) {
                  var t = e.getAttribute("id"),
                    n = void 0;
                  if (
                    (t &&
                      (n = document.querySelector("label[for='" + t + "']")),
                    n)
                  )
                    e.addEventListener("click", this.focus);
                  else
                    for (
                      n = n || e.parentElement;
                      n && "LABEL" !== n.nodeName;

                    )
                      n = n.parentElement;
                  n
                    ? ((this._label = n),
                      n.addEventListener("click", this.focus))
                    : e.addEventListener("click", this.focus);
                }
              }
            },
            {
              key: "_changeClasses",
              value: function(e) {
                var t = {};
                return (
                  Object.keys(e).forEach(function(n) {
                    if (!ci[n])
                      throw new ge(
                        n +
                          " is not a customizable class name.\nYou can customize: " +
                          Object.keys(ci).join(", ")
                      );
                    var r = e[n] || ci[n];
                    t[n] = r.replace(/\./g, " ");
                  }),
                  (this._classes = si({}, this._classes, t)),
                  this
                );
              }
            },
            {
              key: "_emitEvent",
              value: function(e, t) {
                return this._emit(
                  e,
                  si({ elementType: this._componentName }, t)
                );
              }
            },
            {
              key: "_setupEvents",
              value: function() {
                var e = this;
                this._frame._on("redirectfocus", function(t) {
                  var n = t.focusDirection,
                    r = jn(e._component, n);
                  r && r.focus();
                }),
                  this._frame._on("focus", function() {
                    (e._focused = !0), e._updateClasses();
                  }),
                  this._frame._on("blur", function() {
                    (e._focused = !1),
                      e._updateClasses(),
                      e._lastSubmittedAt &&
                        "paymentRequestButton" === e._componentName &&
                        (e._controller.report(
                          "payment_request_button.sheet_visible",
                          { latency: new Date() - e._lastSubmittedAt }
                        ),
                        (e._lastSubmittedAt = null));
                  }),
                  this._frame._on("submit", function() {
                    if ("paymentRequestButton" === e._componentName) {
                      e._lastSubmittedAt = new Date();
                      var t = !1,
                        n = !1;
                      e._emitEvent("click", {
                        preventDefault: function() {
                          e._controller.report(
                            "payment_request_button.default_prevented"
                          ),
                            t &&
                              e._controller.warn(
                                "event.preventDefault() was called after the payment sheet was shown. Make sure to call it synchronously when handling the `click` event."
                              ),
                            (n = !0);
                        }
                      }),
                        !n &&
                          e._paymentRequest &&
                          (e._paymentRequest._elementShow(), (t = !0));
                    } else e._emitEvent("submit"), e._formSubmit();
                  }),
                  ["ready", "focus", "blur", "escape"].forEach(function(t) {
                    e._frame._on(t, function() {
                      e._emitEvent(t);
                    });
                  }),
                  this._frame._on("change", function(t) {
                    var n = {};
                    ["error", "value", "empty", "complete"]
                      .concat(Q(hr[e._componentName] || []))
                      .forEach(function(e) {
                        return (n[e] = t[e]);
                      }),
                      e._emitEvent("change", n),
                      (e._empty = n.empty),
                      (e._invalid = !!n.error),
                      (e._complete = n.complete),
                      e._updateClasses();
                  }),
                  this._frame._on("__privateIntegrationError", function(t) {
                    var n = t.message;
                    e._emitEvent("__privateIntegrationError", { message: n });
                  }),
                  this._frame._on("dimensions", function(t) {
                    if (e._parent) {
                      var n = ai(e._parent, null);
                      if (n) {
                        var r = parseFloat(n.getPropertyValue("height")),
                          o = t.height;
                        if ("border-box" === n.getPropertyValue("box-sizing")) {
                          var i = parseFloat(n.getPropertyValue("padding-top")),
                            a = parseFloat(
                              n.getPropertyValue("padding-bottom")
                            );
                          r =
                            r -
                            parseFloat(n.getPropertyValue("border-top")) -
                            parseFloat(n.getPropertyValue("border-bottom")) -
                            i -
                            a;
                        }
                        0 !== r &&
                          fi(r) < fi(o) &&
                          e._controller.report("wrapper_height_mismatch", {
                            height: o,
                            outer_height: r
                          });
                        var s = e._component.getBoundingClientRect().height;
                        0 !== s &&
                          0 !== o &&
                          fi(s) !== fi(o) &&
                          (e._frame.updateStyle({ height: o + "px" }),
                          e._controller.report("iframe_height_update", {
                            height: o,
                            calculated_height: s
                          }));
                      }
                    }
                  }),
                  this._frame._on("autofill", function() {
                    if (e._parent) {
                      var t = e._parent.style.backgroundColor,
                        n = "#faffbd" === t || "rgb(250, 255, 189)" === t;
                      (e._lastBackgroundColor = n ? e._lastBackgroundColor : t),
                        (e._parent.style.backgroundColor = "#faffbd"),
                        (e._autofilled = !0),
                        e._updateClasses();
                    }
                  }),
                  this._frame._on("autofill-cleared", function() {
                    (e._autofilled = !1),
                      e._parent &&
                        (e._parent.style.backgroundColor =
                          e._lastBackgroundColor),
                      e._updateClasses();
                  });
              }
            },
            {
              key: "_handleOutsideClick",
              value: function() {
                this._secondaryFrame &&
                  this._secondaryFrame.send({
                    action: "stripe-outside-click",
                    payload: {}
                  });
              }
            },
            {
              key: "_createSecondFrame",
              value: function(e, t, n) {
                var r = this._controller.createSecondaryElementFrame(
                  e,
                  si({}, n, { componentName: t })
                );
                return (
                  r &&
                    r.on &&
                    r.on("height-change", function(e) {
                      r.updateStyle({ height: e.height + "px" });
                    }),
                  r
                );
              }
            },
            {
              key: "_createComponent",
              value: function(e, t) {
                this._createElement(e, t),
                  this._setupEvents(),
                  this._updateFrameHeight(e, !0);
              }
            },
            {
              key: "_updateFrameHeight",
              value: function(e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                if ("paymentRequestButton" === this._componentName) {
                  var n = (e.style && e.style.paymentRequestButton) || {},
                    r = n.height,
                    o = "string" == typeof r ? r : void 0;
                  (t || o) &&
                    (this._frame.updateStyle({
                      height: o || this._lastHeight || "40px"
                    }),
                    (this._lastHeight = o || this._lastHeight));
                } else {
                  var i = (e.style && e.style.base) || {},
                    a = i.lineHeight,
                    s = i.fontSize,
                    u = i.padding,
                    c =
                      "string" != typeof a || isNaN(parseFloat(a)) ? void 0 : a,
                    l = "string" == typeof s ? s : void 0,
                    p = "string" == typeof u ? u : void 0;
                  if (
                    (l &&
                      !di(l) &&
                      this._controller.warn(
                        "The fontSize style you specified (" +
                          l +
                          ") is not in px. We do not recommend using relative css units, as they will be calculated relative to our iframe's styles rather than your site's."
                      ),
                    t || c || l)
                  ) {
                    var f =
                        -1 === Ft.indexOf(this._componentName)
                          ? void 0
                          : p || this._lastPadding,
                      d = oi(c || this._lastHeight, l || this._lastFontSize, f);
                    this._frame.updateStyle({ height: d }),
                      (this._lastFontSize = l || this._lastFontSize),
                      (this._lastHeight = c || this._lastHeight),
                      (this._lastPadding = f);
                  }
                }
              }
            },
            {
              key: "_createElement",
              value: function(e, t) {
                var n = this,
                  r = (e.classes,
                  e.controller,
                  e.paymentRequest,
                  J(e, ["classes", "controller", "paymentRequest"])),
                  o = document.createElement("div");
                o.className = "__PrivateStripeElement";
                var i = document.createElement("input");
                (i.className = "__PrivateStripeElement-input"),
                  i.setAttribute("aria-hidden", "true"),
                  i.setAttribute("aria-label", " "),
                  i.setAttribute("autocomplete", "false"),
                  (i.maxLength = 1),
                  (i.disabled = !0),
                  Jt(o, li),
                  Jt(i, pi);
                var a = ai(document.body),
                  s = !!a && "rtl" === a.getPropertyValue("direction"),
                  u = pr[t],
                  c = si({}, r, { rtl: s }),
                  l = this._controller.createElementFrame(u, c);
                if (
                  (l._on("load", function() {
                    i.disabled = !1;
                  }),
                  i.addEventListener("focus", function() {
                    l.focus();
                  }),
                  l.appendTo(o),
                  mr[t])
                ) {
                  var p = mr[t].secondary;
                  (this._secondaryFrame = this._createSecondFrame(
                    u,
                    p,
                    si({}, c, { primaryElementType: t })
                  )),
                    this._secondaryFrame.appendTo(o),
                    window.addEventListener("click", function() {
                      return n._handleOutsideClick();
                    });
                }
                if ((o.appendChild(i), ar)) {
                  var f = document.createElement("input");
                  (f.className = "__PrivateStripeElement-safariInput"),
                    f.setAttribute("aria-hidden", "true"),
                    f.setAttribute("tabindex", "-1"),
                    f.setAttribute("autocomplete", "false"),
                    (f.maxLength = 1),
                    (f.disabled = !0),
                    Jt(f, pi),
                    o.appendChild(f);
                }
                (this._component = o), (this._frame = l), (this._fakeInput = i);
              }
            }
          ]),
          t
        );
      })(cn),
      mi = function() {
        var e = this;
        (this.mount = rn(function(t) {
          e._checkDestroyed();
          var n = void 0;
          if (!t)
            throw new ge(
              "Missing argument. Make sure to call mount() with a valid DOM element or selector."
            );
          if ("string" == typeof t) {
            var r = document.querySelectorAll(t);
            if (
              (r.length > 1 &&
                e._controller.warn(
                  "The selector you specified (" +
                    t +
                    ") applies to " +
                    r.length +
                    " DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one."
                ),
              !r.length)
            )
              throw new ge(
                "The selector you specified (" +
                  t +
                  ") applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount()."
              );
            n = r[0];
          } else {
            if (!t.appendChild)
              throw new ge(
                "Invalid DOM element. Make sure to call mount() with a valid DOM element or selector."
              );
            n = t;
          }
          if ("INPUT" === n.nodeName)
            throw new ge(
              "Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` element instead."
            );
          if (
            (n.children.length &&
              e._controller.warn(
                "This Element will be mounted to a DOM element that contains child nodes."
              ),
            e._paymentRequest)
          ) {
            if (!e._paymentRequest._canMakePaymentCalled)
              throw new ge(
                "For paymentRequest Elements, you must first check the Payment Request API's\navailability using paymentRequest.canMakePayment() before mounting the Element."
              );
            if (!e._paymentRequest._cachedCanMakePayment)
              throw new ge(
                "The " +
                  e._componentName +
                  " Element is not available in the current environment."
              );
            e._mountToParent(n);
          } else e._mountToParent(n);
        })),
          (this.update = rn(function(t) {
            e._checkDestroyed();
            var n = gt(Zo, t || {}, "element.update()"),
              r = n.value;
            if (
              (n.warnings.forEach(function(t) {
                return e._controller.warn(t);
              }),
              r)
            ) {
              var o = r.classes,
                i = J(r, ["classes"]);
              e._changeClasses(o || {}),
                e._updateFrameHeight(r),
                Object.keys(i).length &&
                  (e._frame.update(i),
                  e._secondaryFrame && e._secondaryFrame.update(i));
            }
            return e;
          })),
          (this.focus = rn(function(t) {
            return (
              e._checkDestroyed(),
              t && t.preventDefault(),
              document.activeElement &&
                document.activeElement.blur &&
                document.activeElement.blur(),
              e._fakeInput.focus(),
              e
            );
          })),
          (this.blur = rn(function() {
            return e._checkDestroyed(), e._frame.blur(), e._fakeInput.blur(), e;
          })),
          (this.clear = rn(function() {
            return e._checkDestroyed(), e._frame.clear(), e;
          })),
          (this.unmount = rn(function() {
            e._checkDestroyed();
            var t = e._component.parentElement,
              n = e._label;
            return (
              t &&
                (t.removeChild(e._component),
                t.removeEventListener("click", e.focus),
                e._removeClasses()),
              (e._parent = null),
              n && (n.removeEventListener("click", e.focus), (e._label = null)),
              e._secondaryFrame &&
                (e._secondaryFrame.unmount(),
                window.removeEventListener("click", e._handleOutsideClick)),
              (e._fakeInput.disabled = !0),
              e._frame.unmount(),
              e
            );
          })),
          (this.destroy = rn(function() {
            return (
              e._checkDestroyed(),
              e.unmount(),
              (e._destroyed = !0),
              e._emitEvent("destroy"),
              e
            );
          })),
          (this._formSubmit = function() {
            for (
              var t = e._component.parentElement;
              t && "FORM" !== t.nodeName;

            )
              t = t.parentElement;
            if (t) {
              var n = document.createEvent("Event");
              n.initEvent("submit", !0, !0), t.dispatchEvent(n);
            }
          });
      },
      yi = hi,
      _i =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      vi = { locale: Je(it), fonts: Je(dt(ft)) },
      bi = vt(vi),
      gi = function e(t, n) {
        var r = this;
        ne(this, e), wi.call(this);
        var o = gt(bi, n || {}, "elements()"),
          i = o.value;
        o.warnings.forEach(function(e) {
          return t.warn(e);
        }),
          Sr(t.warn),
          t.report("elements", { options: n }),
          (this._elements = []),
          (this._id = Ut("elements")),
          (this._controller = t);
        var a = i.locale,
          s = i.fonts || [];
        this._controller.action.fetchLocale({ locale: a || "auto" });
        var u = s
            .filter(function(e) {
              return !e.cssSrc || "string" != typeof e.cssSrc;
            })
            .map(function(e) {
              return _i({}, e, {
                __resolveFontRelativeTo: window.location.href
              });
            }),
          c = s
            .map(function(e) {
              return e.cssSrc;
            })
            .reduce(function(e, t) {
              return "string" == typeof t ? [].concat(te(e), [t]) : e;
            }, [])
            .map(function(e) {
              return Et(e) ? e : Pt(window.location.href, e);
            });
        return (
          (this._pendingFonts = c.length),
          (this._commonOptions = _i({}, i, { fonts: u })),
          c.forEach(function(e) {
            if ("string" == typeof e) {
              var t = Date.now();
              Fr(e)
                .then(function(n) {
                  r._controller.report("font.loaded", {
                    load_time: Date.now() - t,
                    font_count: n.length,
                    css_src: e
                  });
                  var o = n.map(function(t) {
                    return _i({}, t, { __resolveFontRelativeTo: e });
                  });
                  r._controller.action.updateCSSFonts({
                    fonts: o,
                    groupId: r._id
                  }),
                    (r._commonOptions = _i({}, r._commonOptions, {
                      fonts: [].concat(
                        te(
                          r._commonOptions.fonts ? r._commonOptions.fonts : []
                        ),
                        te(o)
                      )
                    }));
                })
                .catch(function(n) {
                  r._controller.report("error.font.not_loaded", {
                    load_time: Date.now() - t,
                    message: n && n.message && n.message,
                    css_src: e
                  }),
                    r._controller.warn("Failed to load CSS file at " + e + ".");
                });
            }
          }),
          this
        );
      },
      wi = function() {
        var e = this;
        this.create = on(function(t, n) {
          ei(t, e._elements);
          var r = gt(Zo, n || {}, "create()"),
            o = r.value;
          r.warnings.forEach(function(t) {
            return e._controller.warn(t);
          });
          var i = _i({}, o, e._commonOptions, {
              componentName: t,
              groupId: e._id
            }),
            a = (rr || or) && Yt(i).length > 2e3,
            s = !!e._pendingFonts || a,
            u = new yi(
              _i({}, i, {
                fonts: a ? null : e._commonOptions.fonts,
                controller: e._controller,
                wait: s
              })
            );
          return (
            (e._elements = [].concat(te(e._elements), [t])),
            u._on("destroy", function() {
              e._elements = e._elements.filter(function(e) {
                return e !== t;
              });
            }),
            a &&
              u._frame.send({
                action: "stripe-user-update",
                payload: { fonts: e._commonOptions.fonts }
              }),
            u
          );
        });
      },
      Ei = gi,
      ki = function(e, t, n, r) {
        if (window.ApplePaySession) {
          var o = e.report,
            i = e.warn,
            a = e.action,
            s = a.createApplePaySession,
            u = a.tokenizeWithData,
            c = a.createSourceWithData,
            l = a.createPaymentMethodWithData;
          return new Ko({
            report: o,
            warn: i,
            createApplePaySession: s,
            tokenizeWithData: u,
            createSourceWithData: c,
            createPaymentMethodWithData: l,
            authentication: t,
            mids: n,
            options: r
          });
        }
        return new Jo(e, t, n, r);
      },
      Si = ki,
      Pi =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Oi =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Ai = function(e, t) {
        switch (e.type) {
          case "object":
            return { paymentIntent: e.object };
          case "error":
            return { error: Oi({}, t ? { payment_intent: t } : {}, e.error) };
          default:
            return we(e);
        }
      },
      Ci = function(e) {
        var t = e.trim().match(/^(pi_[^_]+)_secret_[^-]+$/);
        return t ? { id: t[1], clientSecret: t[0] } : null;
      },
      Ti = function(e, t) {
        if ("string" != typeof e) return $e("a client_secret string", e, t);
        var n = Ci(e);
        return null === n
          ? $e("a client secret of the form pi_${id}_secret_${secret}", e, t)
          : Ke(n, []);
      },
      ji = function(e, t) {
        if (null == e) return Ke(null);
        var n = e.type,
          r = oe(e, ["type"]),
          o = Oi({}, t, { path: [].concat(re(t.path), ["type"]) }),
          i = at(it, function() {
            return null;
          })(n, o);
        return "error" === i.type ? i : Ke({ type: i.value, data: r });
      },
      Ii = function(e) {
        return "requires_source_action" === e || "requires_action" === e;
      },
      Mi = function(e) {
        return "requires_source_action" === e.status ||
          "requires_action" === e.status
          ? e.next_action
          : null;
      },
      Ri = function(e, t) {
        if (null === e) return Ge("object", "null", t);
        if ("object" !== (void 0 === e ? "undefined" : Pi(e)))
          return Ge("object", void 0 === e ? "undefined" : Pi(e), t);
        var n = e.client_secret,
          r = e.status,
          o = e.next_action,
          i = Oi({}, t, { path: [].concat(re(t.path), ["client_secret"]) }),
          a = Ti(n, i);
        if ("error" === a.type) return a;
        if ("string" != typeof r) {
          var s = Oi({}, t, { path: [].concat(re(t.path), ["status"]) });
          return Ge("string", void 0 === r ? "undefined" : Pi(r), s);
        }
        if (
          ("requires_source_action" === r || "requires_action" === r) &&
          "object" !== (void 0 === o ? "undefined" : Pi(o))
        ) {
          var u = Oi({}, t, { path: [].concat(re(t.path), ["next_action"]) });
          return Ge("object", void 0 === o ? "undefined" : Pi(o), u);
        }
        return Ke(e, []);
      },
      qi = function(e) {
        return function(t, n) {
          if ("object" === (void 0 === t ? "undefined" : Pi(t)) && null !== t) {
            var r = t.source,
              o = t.source_data,
              i = t.payment_method,
              a = t.payment_method_data,
              s = oe(t, [
                "source",
                "source_data",
                "payment_method",
                "payment_method_data"
              ]);
            if (null != r && "string" != typeof r) {
              var u = Oi({}, n, { path: [].concat(re(n.path), ["source"]) });
              return Ge("string", void 0 === r ? "undefined" : Pi(r), u);
            }
            if (null != i && "string" != typeof i) {
              var c = Oi({}, n, {
                path: [].concat(re(n.path), ["payment_method"])
              });
              return Ge("string", void 0 === i ? "undefined" : Pi(i), c);
            }
            if (
              null != o &&
              "object" !== (void 0 === o ? "undefined" : Pi(o))
            ) {
              var l = Oi({}, n, {
                path: [].concat(re(n.path), ["source_data"])
              });
              return Ge("object", void 0 === o ? "undefined" : Pi(o), l);
            }
            if (
              null != a &&
              "object" !== (void 0 === a ? "undefined" : Pi(a))
            ) {
              var p = Oi({}, n, {
                path: [].concat(re(n.path), ["payment_method_data"])
              });
              return Ge("object", void 0 === a ? "undefined" : Pi(a), p);
            }
            var f = Oi({}, n, { path: [].concat(re(n.path), ["source_data"]) }),
              d = ji(o, f);
            if ("error" === d.type) return d;
            var h = d.value,
              m = Oi({}, n, {
                path: [].concat(re(n.path), ["payment_method_data"])
              }),
              y = ji(a, m);
            if ("error" === y.type) return y;
            var _ = y.value;
            return Ke({
              sourceData: h,
              source: null == r ? null : r,
              paymentMethodData: _,
              paymentMethod: null == i ? null : i,
              otherParams: Oi({}, e, s)
            });
          }
          return null === t
            ? Ge("object", "null", n)
            : Ge("object", void 0 === t ? "undefined" : Pi(t), n);
        };
      },
      Ni = function(e) {
        return function(t, n) {
          if (void 0 === t)
            return Ke({
              sourceData: null,
              paymentMethodData: null,
              source: null,
              paymentMethod: null,
              otherParams: {}
            });
          if ("object" !== (void 0 === t ? "undefined" : Pi(t)))
            return Ge("object", void 0 === t ? "undefined" : Pi(t), n);
          if (null === t) return Ge("object", "null", n);
          if (e) {
            if (!t.payment_intent)
              return Ke({
                sourceData: null,
                paymentMethodData: null,
                source: null,
                paymentMethod: null,
                otherParams: t
              });
            var r = t.payment_intent,
              o = oe(t, ["payment_intent"]),
              i = Oi({}, n, {
                path: [].concat(re(n.path), ["payment_intent"])
              });
            return qi(o)(r, i);
          }
          return t.payment_intent
            ? Ve(
                new ge(
                  "The payment_intent parameter has been removed. To fix, move everything nested under the payment_intent parameter to the top-level object."
                )
              )
            : qi({})(t, n);
        };
      },
      Di = {
        checkout_beta_2: "checkout_beta_2",
        checkout_beta_3: "checkout_beta_3",
        checkout_beta_4: "checkout_beta_4",
        payment_intent_beta_1: "payment_intent_beta_1",
        payment_intent_beta_2: "payment_intent_beta_2",
        payment_intent_beta_3: "payment_intent_beta_3",
        card_payment_method_beta_1: "card_payment_method_beta_1",
        acknowledge_ie9_deprecation: "acknowledge_ie9_deprecation"
      },
      xi = Object.keys(Di),
      Li = function(e, t) {
        return e.indexOf(t) >= 0;
      },
      Fi = {
        card: "card",
        ideal: "ideal",
        sepa_debit: "sepa_debit",
        three_d_secure: "three_d_secure"
      },
      Bi = ((ve = {}),
      ie(ve, Mt.card, Fi.card),
      ie(ve, Mt.cardNumber, Fi.card),
      ie(ve, Mt.cardExpiry, Fi.card),
      ie(ve, Mt.cardCvc, Fi.card),
      ie(ve, Mt.postalCode, Fi.card),
      ie(ve, Mt.iban, Fi.sepa_debit),
      ie(ve, Mt.idealBank, Fi.ideal),
      ve),
      Ui = function(e) {
        return -1 === qt.indexOf(e);
      },
      zi = function(e, t) {
        return null != t ? t : Ui(e) ? null : Bi[e] || null;
      },
      Wi = function(e) {
        var t = e.name,
          n = e.value,
          r = e.expiresIn,
          o = e.path,
          i = e.domain,
          a = new Date(),
          s = r || 31536e6;
        a.setTime(a.getTime() + s);
        var u = o || "/",
          c = (n || "").replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent),
          l =
            encodeURIComponent(t) +
            "=" +
            c +
            ";expires=" +
            a.toGMTString() +
            ";path=" +
            u;
        i && (l += ";domain=" + i), (document.cookie = l);
      },
      Hi = function(e) {
        var t = Ce(document.cookie.split("; "), function(t) {
          var n = t.indexOf("=");
          return decodeURIComponent(t.substr(0, n)) === e;
        });
        if (t) {
          var n = t.indexOf("=");
          return decodeURIComponent(t.substr(n + 1));
        }
        return null;
      },
      Yi = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Ki = "__privateStripeMetricsController",
      Vi = { MERCHANT: "merchant", SESSION: "session" },
      Gi = (function() {
        function e() {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          if ((ae(this, e), n.checkoutIds)) {
            var r = n.checkoutIds,
              o = r.muid,
              i = r.sid;
            (this._muid = o), (this._sid = i), (this._doNotPersist = !0);
          } else
            (this._muid = this._getID(Vi.MERCHANT)),
              (this._sid = this._getID(Vi.SESSION)),
              (this._doNotPersist = !1);
          (this._id = Ut(Ki)),
            (this._controllerFrame = new wn(At.METRICS_CONTROLLER, this._id, {
              autoload: !0,
              queryString: this._buildFrameQueryString()
            })),
            (this._guidPromise = new Pe(function(e) {
              t._establishMessageChannel(e);
            })),
            this._startIntervalCheck(),
            setTimeout(this._testLatency.bind(this), 2e3 + 500 * Math.random());
        }
        return (
          Yi(e, [
            {
              key: "ids",
              value: function() {
                return {
                  guid: this._guid || "NA",
                  muid: this._muid || "NA",
                  sid: this._sid || "NA"
                };
              }
            },
            {
              key: "idsPromise",
              value: function() {
                var e = this;
                return this._guidPromise.then(function() {
                  return e.ids();
                });
              }
            },
            {
              key: "_establishMessageChannel",
              value: function(e) {
                var t = this;
                window.addEventListener("message", function(n) {
                  try {
                    var r = JSON.parse(n.data),
                      o = r.originatingScript,
                      i = r.payload;
                    "m" === o && ((t._guid = i), e(i));
                  } catch (e) {}
                });
              }
            },
            {
              key: "_startIntervalCheck",
              value: function() {
                var e = this,
                  t = window.location.href;
                setInterval(function() {
                  var n = window.location.href;
                  n !== t &&
                    (e.send({
                      action: "ping",
                      payload: {
                        sid: e._getID(Vi.SESSION),
                        muid: e._getID(Vi.MERCHANT),
                        title: document.title,
                        referrer: document.referrer,
                        url: document.location.href
                      }
                    }),
                    (t = n));
                }, 5e3);
              }
            },
            {
              key: "report",
              value: function(e, t) {
                try {
                  this.send({
                    action: "track",
                    payload: {
                      sid: this._getID(Vi.SESSION),
                      muid: this._getID(Vi.MERCHANT),
                      url: document.location.href,
                      source: e,
                      data: t
                    }
                  });
                } catch (e) {}
              }
            },
            {
              key: "send",
              value: function(e) {
                var t = jt(At.METRICS_CONTROLLER);
                Vn(t) && this._controllerFrame.send(e);
              }
            },
            {
              key: "_testLatency",
              value: function() {
                var e = this,
                  t = [],
                  n = new Date(),
                  r = function r() {
                    try {
                      var o = new Date();
                      t.push(o - n),
                        t.length >= 10 &&
                          (e.report("mouse-timings-10", t),
                          document.removeEventListener("mousemove", r)),
                        (n = o);
                    } catch (e) {}
                  };
                document.addEventListener("mousemove", r);
              }
            },
            {
              key: "_extractMetaReferrerPolicy",
              value: function() {
                var e = document.querySelector("meta[name=referrer]");
                return null != e && e instanceof HTMLMetaElement
                  ? e.content.toLowerCase()
                  : null;
              }
            },
            {
              key: "_extractUrl",
              value: function(e) {
                var t = document.location.href;
                switch (e) {
                  case "origin":
                  case "strict-origin":
                  case "origin-when-cross-origin":
                  case "strict-origin-when-cross-origin":
                    return document.location.origin;
                  case "unsafe-url":
                    return t.split("#")[0];
                  default:
                    return t;
                }
              }
            },
            {
              key: "_buildFrameQueryString",
              value: function() {
                var e = this._extractMetaReferrerPolicy(),
                  t = this._extractUrl(e),
                  n = {
                    url: t,
                    title: document.title,
                    referrer: document.referrer,
                    muid: this._muid,
                    sid: this._sid,
                    preview: Gn(t)
                  };
                return (
                  null != e && (n.metaReferrerPolicy = e),
                  Object.keys(n)
                    .map(function(e) {
                      return null != n[e]
                        ? e + "=" + encodeURIComponent(n[e].toString())
                        : null;
                    })
                    .join("&")
                );
              }
            },
            {
              key: "_getID",
              value: function(e) {
                switch (e) {
                  case Vi.MERCHANT:
                    if (this._doNotPersist) return this._muid;
                    try {
                      var t = Hi("__stripe_mid") || zt();
                      return (
                        Wi({
                          name: "__stripe_mid",
                          value: t,
                          domain: "." + document.location.hostname
                        }),
                        t
                      );
                    } catch (e) {
                      return "NA";
                    }
                  case Vi.SESSION:
                    if (this._doNotPersist) return this._sid;
                    try {
                      var n = Hi("__stripe_sid") || zt();
                      return (
                        Wi({
                          name: "__stripe_sid",
                          value: n,
                          domain: "." + document.location.hostname,
                          expiresIn: 18e5
                        }),
                        n
                      );
                    } catch (e) {
                      return "NA";
                    }
                  default:
                    throw new Error("Invalid ID type specified: " + e);
                }
              }
            }
          ]),
          e
        );
      })(),
      $i = Gi,
      Ji =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Qi = function(e) {
        if (!e || "object" !== (void 0 === e ? "undefined" : Ji(e)))
          return null;
        var t = e.type,
          n = se(e, ["type"]);
        return { type: "string" == typeof t ? t : null, data: n };
      },
      Xi = function(e) {
        switch (e.type) {
          case "object":
            return { source: e.object };
          case "error":
            return { error: e.error };
          default:
            return we(e);
        }
      },
      Zi = {
        source: vt({ id: et("src_"), client_secret: et("src_client_secret_") })
      },
      ea = vt(Zi),
      ta = function(e) {
        switch (e.type) {
          case "object":
            return { paymentMethod: e.object };
          case "error":
            return { error: e.error };
          default:
            return we(e);
        }
      },
      na = { _frame: vt({ id: it }), _componentName: it },
      ra = vt(na),
      oa = function(e) {
        var t = bt(ra, e, "");
        return "error" === t.type ? null : t.value;
      },
      ia = function(e) {
        return new Pe(function(t, n) {
          var r = setTimeout(function() {
            t({
              type: "error",
              error: {
                code: "redirect_error",
                message: "Failed to redirect to " + e
              },
              locale: "en"
            });
          }, 3e3);
          window.addEventListener("pagehide", function() {
            clearTimeout(r);
          }),
            (window.top.location.href = e);
        });
      },
      aa = function(e, t, n) {
        e.report("redirect_error", { initiator: t, error: n.error });
      },
      sa =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      ua =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      ca = function(e, t, n, r) {
        if (null === e) {
          if (null === t) {
            throw new ge(
              n +
                ": you must additionally specify the type of payment method to create within " +
                (r ? "source_data" : "payment_method_data") +
                "."
            );
          }
          return t;
        }
        if (null === t) return e;
        if (t !== e)
          throw new ge(
            n +
              ": you specified `type: " +
              t +
              "`, but " +
              n +
              " will create a " +
              e +
              " payment method."
          );
        return e;
      },
      la = function(e, t, n, r, o, i) {
        var a = bt(ra, o, r);
        if ("error" === a.type) return null;
        var s = a.value,
          u = gt(Ni(t), i, r),
          c = u.value,
          l = c.sourceData,
          p = c.source,
          f = c.paymentMethodData,
          d = c.paymentMethod,
          h = c.otherParams;
        if (!e && l)
          throw new ge(r + ": Expected payment_method_data, not source_data.");
        if (null != p)
          throw new ge(
            "When calling " +
              r +
              " on an Element, you can't pass in a pre-existing source ID, as a source will be created using the Element."
          );
        if (null != d)
          throw new ge(
            "When calling " +
              r +
              " on an Element, you can't pass in a pre-existing PaymentMethod ID, as a PaymentMethod will be created using the Element."
          );
        var m = s._componentName,
          y = s._frame.id,
          _ = l || f || { type: null, data: {} },
          v = _.type,
          b = _.data,
          g = zi(m, v),
          w = e && !f;
        return {
          confirmMode: {
            tag: "element",
            elementName: m,
            shouldCreateSource: w,
            frameId: y,
            type: ca(n, g, r, w),
            data: b
          },
          otherParams: h
        };
      },
      pa = function(e, t, n, r, o, i) {
        var a = gt(Ni(t), o, r),
          s = a.value,
          u = s.sourceData,
          c = s.source,
          l = s.paymentMethodData,
          p = s.paymentMethod,
          f = s.otherParams;
        if (!e && u)
          throw new ge(
            r +
              ": Expected payment_method, source, or payment_method_data, not source_data."
          );
        if (null !== c && null !== u)
          throw new ge(
            r + ": Expected either source or source_data, but not both."
          );
        if (null !== p && null !== l)
          throw new ge(
            r +
              ": Expected either payment_method or payment_method_data, but not both."
          );
        if (null !== p && null !== c)
          throw new ge(
            r + ": Expected either payment_method or source, but not both."
          );
        if (u || l) {
          var d = u || l || {},
            h = d.type,
            m = d.data,
            y = e && !l;
          return {
            confirmMode: {
              tag: "data",
              shouldCreateSource: y,
              type: ca(n, h, r, y),
              data: m
            },
            otherParams: f
          };
        }
        return null !== c
          ? { confirmMode: { tag: "source", source: c }, otherParams: f }
          : null !== p
          ? {
              confirmMode: { tag: "paymentMethod", paymentMethod: p },
              otherParams: f
            }
          : { confirmMode: { tag: "none" }, otherParams: f };
      },
      fa = function(e, t, n, r) {
        return function(o, i) {
          var a = la(e, t, n, r, o, i);
          if (a) return a;
          var s = pa(e, t, n, r, o);
          if (s) return s;
          throw new ge(
            "Expected: stripe." +
              r +
              "(intentSecret, element[, data]) or stripe." +
              r +
              "(intentSecret[, data]). Please see the docs for more usage examples https://stripe.com/docs/payments/dynamic-authentication"
          );
        };
      },
      da = function(e, t, n) {
        return e.createLightboxFrame(At.AUTHORIZE_WITH_URL, {
          url: t,
          locale: n
        });
      },
      ha = function(e, t, n) {
        return e.createLightboxFrame(At.CARDINAL_3DS2, {
          intentSecret: t,
          locale: n
        });
      },
      ma = function(e, t, n) {
        return e.createLightboxFrame(At.STRIPE_3DS2, {
          intentSecret: t,
          locale: n
        });
      },
      ya = function(e) {
        return function(t) {
          if (t.error || t.paymentIntent) return t;
          throw (e.report("cardinal_3ds2.malformed_frame_action_payload", {
            payload: t
          }),
          new ge("Malformed frame action response"));
        };
      },
      _a = function(e, t, n, r) {
        var o = Date.now(),
          i = ha(n, e, r);
        return (
          i.show(),
          n.report("cardinal_3ds2.frame.loading"),
          new Pe(function(e) {
            i._on("load", function() {
              n.report("cardinal_3ds2.frame.loaded", {
                loadDuration: Date.now() - o
              }),
                i.fadeInBackdrop(),
                i
                  .action("stripe-cardinal-3ds2-init", t)
                  .then(ya(n))
                  .then(function(t) {
                    n.report("cardinal_3ds2.done", {
                      totalDuration: Date.now() - o,
                      success: !("error" in t)
                    }),
                      i.destroy().then(function() {
                        return e(t);
                      });
                  });
            });
          })
        );
      },
      va = function(e) {
        return function(t) {
          if (t.error || t.object) return t;
          throw (e.report("3ds2.malformed_frame_action_payload", {
            payload: t
          }),
          new ge("Malformed frame action response"));
        };
      },
      ba = function(e, t, n, r) {
        var o = Date.now(),
          i = ma(n, e, r);
        return (
          i.show(),
          n.report("3ds2.frame.loading"),
          new Pe(function(e) {
            i._on("load", function() {
              n.report("3ds2.frame.loaded", { loadDuration: Date.now() - o }),
                i.fadeInBackdrop(),
                i
                  .action("3ds2-init", t)
                  .then(va(n))
                  .then(Ai)
                  .then(function(t) {
                    n.report("3ds2.done", {
                      totalDuration: Date.now() - o,
                      success: !("error" in t)
                    }),
                      i.destroy().then(function() {
                        return e(t);
                      });
                  });
            });
          })
        );
      },
      ga = function(e, t, n) {
        var r = kr(),
          o = Date.now(),
          i = da(t, e, n);
        return (
          i.show(),
          t.report("authorize_with_url.loading", { viewport: r }),
          i._on("load", function() {
            t.report("authorize_with_url.loaded", {
              loadDuration: Date.now() - o
            }),
              i.fadeInBackdrop();
          }),
          new Pe(function(e, n) {
            i._once("authorize_with_url_done", function(n) {
              t.report("authorize_with_url.done", {
                shownDuration: Date.now() - o,
                success: !("error" in n)
              }),
                i.destroy().then(function() {
                  return e(n);
                });
            });
          })
        );
      },
      wa = function(e, t, n) {
        var r = function(t) {
          return aa(n, "ideal redirect", t), Ai(t, e);
        };
        return ia(t).then(r);
      },
      Ea = function(e, t) {
        if (e) {
          if (
            "use_stripe_sdk" === e.type &&
            "cardinal_3ds2_fingerprint" === e.use_stripe_sdk.type
          )
            return ua(
              { type: "cardinal-sdk-fingerprint" },
              e.use_stripe_sdk.stripe_js
            );
          if (
            "use_stripe_sdk" === e.type &&
            "stripe_3ds2_fingerprint" === e.use_stripe_sdk.type
          )
            return {
              type: "3ds2-fingerprint",
              threeDS2Source: e.use_stripe_sdk.three_d_secure_2_source,
              transactionId: e.use_stripe_sdk.server_transaction_id,
              methodUrl: e.use_stripe_sdk.three_ds_method_url,
              directoryServerName: e.use_stripe_sdk.directory_server_name
            };
          if (
            ("use_stripe_sdk" !== e.type && "authorize_with_url" !== e.type) ||
            (e.use_stripe_sdk &&
              ("cardinal_3ds2_fingerprint" === e.use_stripe_sdk.type ||
                "cardinal_3ds2_challenge" === e.use_stripe_sdk.type ||
                "stripe_3ds2_fingerprint" === e.use_stripe_sdk.type)) ||
            t !== Fi.card
          ) {
            if (
              ("redirect_to_url" !== e.type &&
                "authorize_with_url" !== e.type) ||
              t !== Fi.ideal
            )
              return;
            return {
              type: "ideal-redirect",
              redirectUrl: e.redirect_to_url
                ? e.redirect_to_url.url
                : e.authorize_with_url.url
            };
          }
          return {
            type: "3ds1-modal",
            url: e.use_stripe_sdk
              ? e.use_stripe_sdk.stripe_js
              : e.authorize_with_url.url
          };
        }
      },
      ka = function(e, t, n, r) {
        var o = Ea(Mi(t), n);
        if (!o) return Pe.resolve({ paymentIntent: t });
        switch (o.type) {
          case "3ds1-modal":
            return ga(o.url, e, r);
          case "3ds2-fingerprint":
            return ba(
              t.client_secret,
              {
                threeDS2Source: o.threeDS2Source,
                directoryServerName: o.directoryServerName,
                transactionId: o.transactionId,
                methodUrl: o.methodUrl
              },
              e,
              r
            );
          case "cardinal-sdk-fingerprint":
            return _a(
              t.client_secret,
              { jwt: o.jwt, bin: o.bin, env: o.env },
              e,
              r
            );
          case "ideal-redirect":
            return wa(t, o.redirectUrl, e);
          default:
            return Pe.resolve({ paymentIntent: t });
        }
      },
      Sa = function(e) {
        switch (e.type) {
          case "error":
            var t = e.error;
            if (
              "payment_intent_unexpected_state" === t.code &&
              "object" === sa(t.payment_intent) &&
              null != t.payment_intent &&
              "string" == typeof t.payment_intent.status &&
              Ii(t.payment_intent.status)
            ) {
              var n = t.payment_intent;
              return { type: "object", locale: e.locale, object: n };
            }
            return e;
          case "object":
            return e;
          default:
            return we(e);
        }
      },
      Pa = function(e, t, n) {
        return function(r) {
          var o = Sa(r);
          switch (o.type) {
            case "error":
              var i = o.error,
                a = i.payment_intent;
              return n &&
                a &&
                "payment_intent_unexpected_state" === i.code &&
                ("succeeded" === a.status || "requires_capture" === a.status)
                ? Pe.resolve({ paymentIntent: a })
                : Pe.resolve(Ai(r));
            case "object":
              var s = o.object;
              return ka(e, s, t, o.locale);
            default:
              return we(o);
          }
        };
      },
      Oa = function(e, t, n, r, o) {
        var i = oa(r);
        if ("string" != typeof n)
          return Pe.reject(
            new ge(
              "Please provide a PaymentMethod type to createPaymentMethod."
            )
          );
        var a = Qi(i ? o : r),
          s = a || { type: null, data: {} },
          u = s.type,
          c = s.data;
        if (u && n !== u)
          return Pe.reject(
            new ge(
              "The type supplied in payment_method_data is not consistent."
            )
          );
        if (i) {
          var l = i._frame.id,
            p = i._componentName;
          return e.action
            .createPaymentMethodWithElement({
              frameId: l,
              elementName: p,
              type: n,
              paymentMethodData: c,
              mids: t
            })
            .then(ta);
        }
        return a
          ? e.action
              .createPaymentMethodWithData({
                elementName: null,
                type: n,
                paymentMethodData: c,
                mids: t
              })
              .then(ta)
          : Pe.reject(
              new ge(
                "Please provide either an Element or PaymentMethod creation parameters to createPaymentMethod."
              )
            );
      },
      Aa = function(e, t) {
        var n = gt(Ti, e, "retrievePaymentIntent"),
          r = n.value;
        return t.action.retrievePaymentIntent(r).then(Ai);
      },
      Ca = function(e, t, n, r, o, i) {
        var a = gt(Ti, r, "stripe.confirmPaymentIntent intent secret"),
          s = a.value,
          u = fa(e, !1, null, "confirmPaymentIntent")(o, i);
        return t.action
          .confirmPaymentIntent(
            ua({}, u, { intentSecret: s, expectedType: null, mids: n })
          )
          .then(Ai);
      },
      Ta = function(e, t) {
        var n = gt(Ti, e, "handleCardAction"),
          r = n.value;
        return t.action.retrievePaymentIntent(r).then(function(e) {
          var n = Sa(e);
          switch (n.type) {
            case "error":
              return Pe.resolve(Ai(e));
            case "object":
              var r = n.object;
              if (Ii(r.status)) {
                if ("manual" !== r.confirmation_method)
                  throw new ge(
                    "handleCardAction: The PaymentIntent supplied does not require manual server-side confirmation. Please use handleCardPayment instead to complete the payment."
                  );
                return ka(t, r, Fi.card, n.locale);
              }
              throw new ge(
                "handleCardAction: The PaymentIntent supplied is not in the requires_action state."
              );
            default:
              return we(n);
          }
        });
      },
      ja = function(e, t, n, r, o, i, a) {
        var s = gt(Ti, o, "stripe.handleCardPayment intent secret"),
          u = s.value,
          c = Fi.card,
          l = fa(e, r, c, "handleCardPayment")(i, a),
          p = !i && !a;
        return t.action
          .confirmPaymentIntent(
            ua({}, l, {
              otherParams: ua({}, l.otherParams, { use_stripe_sdk: !0 }),
              intentSecret: u,
              expectedType: c,
              mids: n
            })
          )
          .then(Pa(t, c, p));
      },
      Ia = function(e, t, n, r, o, i) {
        var a = gt(Ti, r, "stripe.handleSepaDebitPayment intent secret"),
          s = a.value,
          u = Fi.sepa_debit,
          c = fa(!0, n, u, "handleSepaDebitPayment")(o, i),
          l = !o && !i;
        return e.action
          .confirmPaymentIntent(
            ua({}, c, { intentSecret: s, expectedType: u, mids: t })
          )
          .then(Pa(e, u, l));
      },
      Ma = function(e, t, n, r, o, i) {
        var a = gt(Ti, r, "stripe.handleIdealPayment intent secret"),
          s = a.value,
          u = Fi.ideal,
          c = fa(!0, n, u, "handleIdealPayment")(o, i),
          l = !o && !i;
        return e.action
          .confirmPaymentIntent(
            ua({}, c, { intentSecret: s, expectedType: u, mids: t })
          )
          .then(Pa(e, u, l));
      },
      Ra = {
        da: "da",
        de: "de",
        en: "en",
        es: "es",
        fi: "fi",
        fr: "fr",
        it: "it",
        ja: "ja",
        nl: "nl",
        nb: "nb",
        pl: "pl",
        pt: "pt",
        sv: "sv",
        zh: "zh"
      },
      qa = Object.keys(Ra),
      Na =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Da = {
        sku: Je(it),
        plan: Je(it),
        clientReferenceId: Je(it),
        locale: Je(tt.apply(void 0, ["auto"].concat(ce(qa)))),
        customerEmail: Je(it),
        billingAddressCollection: Je(tt("required", "auto"))
      },
      xa = function(e, t, n) {
        if ((e && t) || ((e || t) && n))
          throw new ge(
            "stripe.redirectToCheckout: Expected only one of sku, plan, or items."
          );
        if ("string" == typeof e) return [{ sku: e, quantity: 1 }];
        if ("string" == typeof t) return [{ plan: t, quantity: 1 }];
        if (n)
          return n.map(function(e) {
            return "sku" === e.type
              ? { sku: e.id, quantity: e.quantity }
              : { plan: e.id, quantity: e.quantity };
          });
        throw new ge(
          "stripe.redirectToCheckout: You must provide either sku, plan, or items."
        );
      },
      La = function(e) {
        var t = _t(
            Na({}, Da, {
              items: Je(
                Qe(
                  dt(_t({ type: tt("plan"), quantity: ut(0), id: it })),
                  dt(_t({ type: tt("sku"), quantity: ut(0), id: it }))
                )
              ),
              successUrl: it,
              cancelUrl: it
            })
          ),
          n = gt(t, e, "stripe.redirectToCheckout"),
          r = n.value,
          o = r.sku,
          i = r.plan,
          a = r.items,
          s = ue(r, ["sku", "plan", "items"]),
          u = xa(o, i, a);
        return Na({ tag: "no-session", items: u }, s);
      },
      Fa = function(e, t) {
        var n = _t(
            Na({}, Da, {
              sessionId: Je(it),
              successUrl: Je(it),
              cancelUrl: Je(it),
              items: Je(
                Qe(
                  dt(_t({ quantity: ut(0), plan: it })),
                  dt(_t({ quantity: ut(0), sku: it }))
                )
              )
            })
          ),
          r = gt(n, e, "stripe.redirectToCheckout"),
          o = r.value;
        if (o.sessionId) {
          if (Object.keys(o).length > 1)
            throw new ge(
              "stripe.redirectToCheckout: Do not provide other parameters when providing sessionId. Specify all parameters on your server when creating the CheckoutSession."
            );
          if ("livemode" === t && /^cs_test_/.test(o.sessionId))
            throw new ge(
              "stripe.redirectToCheckout: sessionId is for a test mode Checkout Session, but Stripe.js was provided live mode API key."
            );
          if ("testmode" === t && /^cs_live_/.test(o.sessionId))
            throw new ge(
              "stripe.redirectToCheckout: sessionId is for a live mode Checkout Session, but Stripe.js was provided test mode API key."
            );
          return { tag: "session", sessionId: o.sessionId };
        }
        var i = (o.sessionId, o.sku, o.plan, o.items),
          a = o.successUrl,
          s = o.cancelUrl,
          u = ue(o, [
            "sessionId",
            "sku",
            "plan",
            "items",
            "successUrl",
            "cancelUrl"
          ]);
        if (!i)
          throw new ge(
            "stripe.redirectToCheckout: You must provide one of items or sessionId."
          );
        if (!a || !s)
          throw new ge(
            "stripe.redirectToCheckout: You must provide successUrl and cancelUrl."
          );
        return Na(
          { tag: "no-session", items: i, successUrl: a, cancelUrl: s },
          u
        );
      },
      Ba = function(e, t) {
        var n = Fa(e, t);
        if ("no-session" === n.tag) {
          var r = n.successUrl,
            o = n.cancelUrl;
          if (!Et(r))
            throw new ge(
              "stripe.redirectToCheckout: successUrl must start with either http:// or https://."
            );
          if (!Et(o))
            throw new ge(
              "stripe.redirectToCheckout: cancelUrl must start with either http:// or https://."
            );
          return n;
        }
        return n;
      },
      Ua = function(e, t) {
        return "session" === t.tag ||
          null == e ||
          t.locale ||
          -1 === ["auto"].concat(ce(qa)).indexOf(e)
          ? t
          : Na({}, t, { locale: e });
      },
      za = function(e, t, n) {
        switch (e) {
          case "checkout_beta_2":
            return La(t);
          case "checkout_beta_3":
            return Fa(t, n);
          case "checkout_beta_4":
          default:
            return Ba(t, n);
        }
      },
      Wa = function(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : "unknown";
        return Ua(t, za(e, n, r));
      },
      Ha = Wa,
      Ya =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Ka = function(e, t) {
        var n = function(t) {
          return aa(e, "redirectToCheckout", t), { error: t.error };
        };
        return ia(t).then(n);
      },
      Va = function(e, t, n, r) {
        return function(o) {
          e.report("redirect_to_checkout.options", {
            beta: t,
            options: o,
            globalLocale: r
          });
          var i = Ha(t, r, o, e.livemode());
          if ("session" === i.tag) {
            var a = i,
              s = a.sessionId;
            return e.action
              .createPaymentPageWithSession({ sessionId: s, mids: n() })
              .then(function(t) {
                if ("error" === t.type) return { error: t.error };
                var n = t.object.url;
                return Ka(e, n);
              });
          }
          var u = i,
            c = (u.tag, u.items),
            l = u.successUrl,
            p = u.cancelUrl,
            f = u.clientReferenceId,
            d = u.customerEmail,
            h = u.billingAddressCollection,
            m = le(u, [
              "tag",
              "items",
              "successUrl",
              "cancelUrl",
              "clientReferenceId",
              "customerEmail",
              "billingAddressCollection"
            ]),
            y = c.map(function(e) {
              if (e.sku)
                return { type: "sku", id: e.sku, quantity: e.quantity };
              if (e.plan)
                return { type: "plan", id: e.plan, quantity: e.quantity };
              throw new Error("Unexpected item shape.");
            }),
            _ = null === t ? { use_payment_methods: !0 } : {};
          return e.action
            .createPaymentPage(
              Ya(
                {
                  mids: n(),
                  items: y,
                  success_url: l,
                  cancel_url: p,
                  client_reference_id: f,
                  customer_email: d,
                  billing_address_collection: h
                },
                _,
                m
              )
            )
            .then(function(t) {
              if ("error" === t.type) return { error: t.error };
              var n = t.object.url;
              return Ka(e, n);
            });
        };
      },
      Ga =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      $a = function(e) {
        switch (e.type) {
          case "object":
            return { token: e.object };
          case "error":
            return { error: e.error };
          default:
            return we(e);
        }
      },
      Ja = function(e) {
        return "object" === (void 0 === e ? "undefined" : Ga(e)) && null !== e
          ? e
          : {};
      },
      Qa = function(e, t) {
        return function(n, r) {
          var o = oa(n);
          if (o) {
            var i = o._frame.id,
              a = o._componentName,
              s = Ja(r);
            return e.action
              .tokenizeWithElement({
                frameId: i,
                elementName: a,
                tokenData: s,
                mids: t
              })
              .then($a);
          }
          if ("string" == typeof n) {
            var u = n,
              c = Ja(r);
            return e.action
              .tokenizeWithData({
                elementName: null,
                type: u,
                tokenData: c,
                mids: t
              })
              .then($a);
          }
          throw new ge(
            "You must provide a Stripe Element or a valid token type to create a Token."
          );
        };
      },
      Xa =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Za = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      es = vt({
        apiKey: it,
        stripeAccount: Je(it),
        locale: Je(it),
        __privateApiUrl: Je(it),
        __checkout: Je(vt({ mids: vt({ muid: it, sid: it }) })),
        betas: Je(dt(nt.apply(void 0, fe(xi))))
      }),
      ts = (function() {
        function e(t, n) {
          var r = this;
          pe(this, e), ns.call(this);
          var o = gt(es, t || {}, "Stripe()"),
            i = o.value,
            a = o.warnings,
            s = i.apiKey,
            u = i.stripeAccount,
            c = i.locale,
            l = i.__privateApiUrl,
            p = i.__checkout,
            f = i.betas;
          if ("" === s)
            throw new ge(
              "Please call Stripe() with your publishable key. You used an empty string."
            );
          if (0 === s.indexOf("sk_"))
            throw new ge(
              "You should not use your secret key with Stripe.js.\n        Please pass a publishable key instead."
            );
          p && p.mids && (e._ec = new $i({ checkoutIds: p.mids })),
            (this._apiKey = s),
            (this._keyMode = Ue(s)),
            (this._locale = c || null),
            (this._betas = f || []),
            (this._stripeAccount = u || null),
            (this._isCheckout = !!p),
            (this._controller = new Er(
              Xa(
                {
                  apiKey: s,
                  __privateApiUrl: l,
                  stripeAccount: u,
                  betas: this._betas,
                  stripeJsId: e.stripeJsId
                },
                this._locale ? { locale: this._locale } : {}
              )
            )),
            a.forEach(function(e) {
              return r._controller.warn(e);
            }),
            this._ensureHTTPS(),
            this._ensureStripeHosted(n),
            this._attachPaymentIntentMethods(this._betas),
            this._attachCheckoutMethods(this._betas),
            this._attachPrivateMethodsForCheckout(this._isCheckout),
            this._warnIE9Deprecation();
        }
        return (
          Za(e, [
            {
              key: "_attachPaymentIntentMethods",
              value: function(e) {
                var t = this,
                  n =
                    Li(this._betas, Di.payment_intent_beta_1) ||
                    Li(this._betas, Di.payment_intent_beta_2),
                  r = function() {
                    return t._mids();
                  },
                  o = rn(function(e) {
                    return Aa(e, t._controller);
                  }),
                  i = an(function() {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return Ca.apply(void 0, [!0, t._controller, r()].concat(n));
                  }),
                  a = an(function() {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return Ca.apply(void 0, [!1, t._controller, r()].concat(n));
                  }),
                  s = an(function() {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return Oa.apply(void 0, [t._controller, r()].concat(n));
                  }),
                  u = An(
                    ja,
                    "You have an in-flight handleCardPayment! Please be sure to disable your form submit button when handleCardPayment is called."
                  ),
                  c = an(function() {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return u.apply(
                      void 0,
                      [!0, t._controller, r(), n].concat(o)
                    );
                  }),
                  l = an(function() {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return u.apply(
                      void 0,
                      [!1, t._controller, r(), n].concat(o)
                    );
                  }),
                  p = An(
                    Ta,
                    "You have an in-flight handleCardAction! Please be sure to disable your form submit button when handleCardAction is called."
                  ),
                  f = rn(function(e) {
                    return p(e, t._controller);
                  }),
                  d = an(function() {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return Ia.apply(void 0, [t._controller, r(), n].concat(o));
                  }),
                  h = an(function() {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return Ma.apply(void 0, [t._controller, r(), n].concat(o));
                  });
                (this.createPaymentMethod = s),
                  (this.retrievePaymentIntent = o),
                  (this.handleCardPayment = l),
                  (this.confirmPaymentIntent = a),
                  (this.handleCardAction = f);
                var m = function(e) {
                  return function() {
                    throw new ge(
                      "You cannot call `stripe." +
                        e +
                        "` without supplying a PaymentIntents beta flag when initializing Stripe.js.        You can find more information including code snippets at https://www.stripe.com/docs/payments/payment-intents/quickstart."
                    );
                  };
                };
                (this.fulfillPaymentIntent = m("fulfillPaymentIntent")),
                  (this.handleSepaDebitPayment = m("handleSepaDebitPayment")),
                  (this.handleIdealPayment = m("handleIdealPayment")),
                  Li(this._betas, Di.payment_intent_beta_1)
                    ? (this.fulfillPaymentIntent = c)
                    : (Li(this._betas, Di.payment_intent_beta_3) ||
                        Li(this._betas, Di.payment_intent_beta_2)) &&
                      (this.handleCardPayment = c),
                  Li(this._betas, Di.payment_intent_beta_3) &&
                    ((this.confirmPaymentIntent = i),
                    (this.handleSepaDebitPayment = d),
                    (this.handleIdealPayment = h));
              }
            },
            {
              key: "_attachPrivateMethodsForCheckout",
              value: function(e) {
                var t = this;
                e &&
                  (this.tryNextSourceAction = on(function(e, n) {
                    var r = gt(Ri, e, "Payment Intent"),
                      o = r.value,
                      i = Object.keys(Fi).map(function(e) {
                        return Fi[e];
                      }),
                      a = gt(tt.apply(void 0, fe(i)), n, "Source type"),
                      s = a.value;
                    return ka(t._controller, o, s, "auto");
                  }));
              }
            },
            {
              key: "_attachCheckoutMethods",
              value: function(e) {
                var t = this,
                  n = function() {
                    return t._mids();
                  };
                if (
                  ((this.redirectToCheckout = Va(
                    this._controller,
                    null,
                    n,
                    this._locale
                  )),
                  Li(this._betas, Di.checkout_beta_2))
                ) {
                  var r = Va(
                    this._controller,
                    Di.checkout_beta_2,
                    n,
                    this._locale
                  );
                  this.redirectToCheckout = r;
                }
                if (Li(this._betas, Di.checkout_beta_3)) {
                  var o = Va(
                    this._controller,
                    Di.checkout_beta_3,
                    n,
                    this._locale
                  );
                  this.redirectToCheckout = o;
                }
                if (Li(this._betas, Di.checkout_beta_4)) {
                  var i = Va(
                    this._controller,
                    Di.checkout_beta_4,
                    n,
                    this._locale
                  );
                  this.redirectToCheckout = i;
                }
              }
            },
            {
              key: "_warnIE9Deprecation",
              value: function() {
                var e = this._keyMode === Be.live,
                  t =
                    "Starting in December 2018, stripe.js v3 will no longer support IE9, per Microsoft's lifecycle policy.\n\nThis error is being thrown only in IE9 in testmode so that you have an opportunity to update your integration or your browser testing strategy.\n\nIf you want to suppress this error in testmode until December, initialize stripe.js with the `acknowledge_ie9_deprecation` beta:\nvar stripe = Stripe(key, {betas: ['acknowledge_ie9_deprecation']})";
                if (
                  ir &&
                  !e &&
                  !Li(this._betas, Di.acknowledge_ie9_deprecation)
                )
                  throw (window.console && console.error(t), new ge(t));
              }
            },
            {
              key: "_ensureHTTPS",
              value: function() {
                var e = window.location.protocol,
                  t = -1 !== ["https:", "file:"].indexOf(e),
                  n =
                    -1 !==
                    ["localhost", "127.0.0.1", "0.0.0.0"].indexOf(
                      window.location.hostname
                    ),
                  r = this._keyMode === Be.live,
                  o =
                    "Live Stripe.js integrations must use HTTPS. For more information: https://stripe.com/docs/stripe-js/elements/quickstart#http-requirements";
                if (!t) {
                  if (r && !n)
                    throw (this._controller.report(
                      "user_error.non_https_error",
                      { protocol: e }
                    ),
                    new ge(o));
                  !r || n
                    ? window.console &&
                      console.warn(
                        "You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS."
                      )
                    : window.console && console.warn(o);
                }
              }
            },
            {
              key: "_ensureStripeHosted",
              value: function(e) {
                if (!e)
                  throw (this._controller.report("user_error.self_hosted"),
                  new ge(
                    "Stripe.js must be loaded from js.stripe.com. For more information https://stripe.com/docs/stripe-js/reference#including-stripejs"
                  ));
              }
            },
            {
              key: "_mids",
              value: function() {
                return e._ec ? e._ec.ids() : null;
              }
            }
          ]),
          e
        );
      })();
    (ts.version = 3),
      (ts.stripeJsId = zt()),
      (ts._ec = (function() {
        return "https://checkout.stripe.com/".match(
          new RegExp(document.location.protocol + "//" + document.location.host)
        )
          ? null
          : new $i();
      })());
    var ns = function() {
        var e = this;
        (this.elements = rn(function(t) {
          return new Ei(
            e._controller,
            Xa({}, e._locale ? { locale: e._locale } : {}, t)
          );
        })),
          (this.createToken = on(function(t, n) {
            var r = e._mids();
            return Qa(e._controller, r)(t, n);
          })),
          (this.createSource = on(function(t, n) {
            var r = oa(t),
              o = Qi(r ? n : t),
              i = o || { type: null, data: {} },
              a = i.type,
              s = i.data;
            if (r) {
              var u = r._frame.id,
                c = r._componentName;
              return !o && Ui(c)
                ? Pe.reject(
                    new ge(
                      "Please provide Source creation parameters to createSource."
                    )
                  )
                : e._controller.action
                    .createSourceWithElement({
                      frameId: u,
                      elementName: c,
                      type: a,
                      sourceData: s,
                      mids: e._mids()
                    })
                    .then(Xi);
            }
            return o
              ? a
                ? e._controller.action
                    .createSourceWithData({
                      elementName: null,
                      type: a,
                      sourceData: s,
                      mids: e._mids()
                    })
                    .then(Xi)
                : Pe.reject(
                    new ge("Please provide a source type to createSource.")
                  )
              : Pe.reject(
                  new ge(
                    "Please provide either an Element or Source creation parameters to createSource."
                  )
                );
          })),
          (this.retrieveSource = rn(function(t) {
            var n = gt(ea, { source: t }, "retrieveSource"),
              r = n.value;
            return (
              n.warnings.forEach(function(t) {
                return e._controller.warn(t);
              }),
              e._controller.action.retrieveSource(r).then(Xi)
            );
          })),
          (this.paymentRequest = rn(function(t) {
            return (
              ze(e._keyMode),
              Si(
                e._controller,
                { apiKey: e._apiKey, accountId: e._stripeAccount },
                e._mids(),
                t
              )
            );
          }));
      },
      rs = ts,
      os =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      is =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      as = (function() {
        if (document.currentScript) {
          var e = kt(document.currentScript.src);
          return !e || Gn(e.origin);
        }
        return !0;
      })(),
      ss = function(e, t) {
        return new rs(
          is(
            { apiKey: e },
            t && "object" === (void 0 === t ? "undefined" : os(t)) ? t : {}
          ),
          as
        );
      };
    (ss.version = rs.version),
      window.Stripe && 2 === window.Stripe.version && !window.Stripe.StripeV3
        ? (window.Stripe.StripeV3 = ss)
        : window.Stripe
        ? window.console &&
          console.warn(
            "It looks like Stripe.js was loaded more than one time. Please only load it once per page."
          )
        : (window.Stripe = ss);
    t.default = ss;
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      var t = new o(o._61);
      return (t._81 = 1), (t._65 = e), t;
    }
    var o = n(3);
    e.exports = o;
    var i = r(!0),
      a = r(!1),
      s = r(null),
      u = r(void 0),
      c = r(0),
      l = r("");
    (o.resolve = function(e) {
      if (e instanceof o) return e;
      if (null === e) return s;
      if (void 0 === e) return u;
      if (!0 === e) return i;
      if (!1 === e) return a;
      if (0 === e) return c;
      if ("" === e) return l;
      if ("object" == typeof e || "function" == typeof e)
        try {
          var t = e.then;
          if ("function" == typeof t) return new o(t.bind(e));
        } catch (e) {
          return new o(function(t, n) {
            n(e);
          });
        }
      return r(e);
    }),
      (o.all = function(e) {
        var t = Array.prototype.slice.call(e);
        return new o(function(e, n) {
          function r(a, s) {
            if (s && ("object" == typeof s || "function" == typeof s)) {
              if (s instanceof o && s.then === o.prototype.then) {
                for (; 3 === s._81; ) s = s._65;
                return 1 === s._81
                  ? r(a, s._65)
                  : (2 === s._81 && n(s._65),
                    void s.then(function(e) {
                      r(a, e);
                    }, n));
              }
              var u = s.then;
              if ("function" == typeof u) {
                return void new o(u.bind(s)).then(function(e) {
                  r(a, e);
                }, n);
              }
            }
            (t[a] = s), 0 == --i && e(t);
          }
          if (0 === t.length) return e([]);
          for (var i = t.length, a = 0; a < t.length; a++) r(a, t[a]);
        });
      }),
      (o.reject = function(e) {
        return new o(function(t, n) {
          n(e);
        });
      }),
      (o.race = function(e) {
        return new o(function(t, n) {
          e.forEach(function(e) {
            o.resolve(e).then(t, n);
          });
        });
      }),
      (o.prototype.catch = function(e) {
        return this.then(null, e);
      });
  },
  function(e, t, n) {
    "use strict";
    function r() {}
    function o(e) {
      try {
        return e.then;
      } catch (e) {
        return (_ = e), v;
      }
    }
    function i(e, t) {
      try {
        return e(t);
      } catch (e) {
        return (_ = e), v;
      }
    }
    function a(e, t, n) {
      try {
        e(t, n);
      } catch (e) {
        return (_ = e), v;
      }
    }
    function s(e) {
      if ("object" != typeof this)
        throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof e) throw new TypeError("not a function");
      (this._45 = 0),
        (this._81 = 0),
        (this._65 = null),
        (this._54 = null),
        e !== r && m(e, this);
    }
    function u(e, t, n) {
      return new e.constructor(function(o, i) {
        var a = new s(r);
        a.then(o, i), c(e, new h(t, n, a));
      });
    }
    function c(e, t) {
      for (; 3 === e._81; ) e = e._65;
      if ((s._10 && s._10(e), 0 === e._81))
        return 0 === e._45
          ? ((e._45 = 1), void (e._54 = t))
          : 1 === e._45
          ? ((e._45 = 2), void (e._54 = [e._54, t]))
          : void e._54.push(t);
      l(e, t);
    }
    function l(e, t) {
      y(function() {
        var n = 1 === e._81 ? t.onFulfilled : t.onRejected;
        if (null === n)
          return void (1 === e._81 ? p(t.promise, e._65) : f(t.promise, e._65));
        var r = i(n, e._65);
        r === v ? f(t.promise, _) : p(t.promise, r);
      });
    }
    function p(e, t) {
      if (t === e)
        return f(e, new TypeError("A promise cannot be resolved with itself."));
      if (t && ("object" == typeof t || "function" == typeof t)) {
        var n = o(t);
        if (n === v) return f(e, _);
        if (n === e.then && t instanceof s)
          return (e._81 = 3), (e._65 = t), void d(e);
        if ("function" == typeof n) return void m(n.bind(t), e);
      }
      (e._81 = 1), (e._65 = t), d(e);
    }
    function f(e, t) {
      (e._81 = 2), (e._65 = t), s._97 && s._97(e, t), d(e);
    }
    function d(e) {
      if ((1 === e._45 && (c(e, e._54), (e._54 = null)), 2 === e._45)) {
        for (var t = 0; t < e._54.length; t++) c(e, e._54[t]);
        e._54 = null;
      }
    }
    function h(e, t, n) {
      (this.onFulfilled = "function" == typeof e ? e : null),
        (this.onRejected = "function" == typeof t ? t : null),
        (this.promise = n);
    }
    function m(e, t) {
      var n = !1,
        r = a(
          e,
          function(e) {
            n || ((n = !0), p(t, e));
          },
          function(e) {
            n || ((n = !0), f(t, e));
          }
        );
      n || r !== v || ((n = !0), f(t, _));
    }
    var y = n(4),
      _ = null,
      v = {};
    (e.exports = s),
      (s._10 = null),
      (s._97 = null),
      (s._61 = r),
      (s.prototype.then = function(e, t) {
        if (this.constructor !== s) return u(this, e, t);
        var n = new s(r);
        return c(this, new h(e, t, n)), n;
      });
  },
  function(e, t, n) {
    "use strict";
    (function(t) {
      function n(e) {
        a.length || (i(), (s = !0)), (a[a.length] = e);
      }
      function r() {
        for (; u < a.length; ) {
          var e = u;
          if (((u += 1), a[e].call(), u > c)) {
            for (var t = 0, n = a.length - u; t < n; t++) a[t] = a[t + u];
            (a.length -= u), (u = 0);
          }
        }
        (a.length = 0), (u = 0), (s = !1);
      }
      function o(e) {
        return function() {
          function t() {
            clearTimeout(n), clearInterval(r), e();
          }
          var n = setTimeout(t, 0),
            r = setInterval(t, 50);
        };
      }
      e.exports = n;
      var i,
        a = [],
        s = !1,
        u = 0,
        c = 1024,
        l = void 0 !== t ? t : self,
        p = l.MutationObserver || l.WebKitMutationObserver;
      (i =
        "function" == typeof p
          ? (function(e) {
              var t = 1,
                n = new p(e),
                r = document.createTextNode("");
              return (
                n.observe(r, { characterData: !0 }),
                function() {
                  (t = -t), (r.data = t);
                }
              );
            })(r)
          : o(r)),
        (n.requestFlush = i),
        (n.makeRequestCallFromTimer = o);
    }.call(t, n(5)));
  },
  function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t, n) {
    var r, o;
    !(function() {
      "use strict";
      var n = (function() {
        function e() {}
        function t(e, t) {
          for (var n = t.length, r = 0; r < n; ++r) i(e, t[r]);
        }
        function n(e, t) {
          e[t] = !0;
        }
        function r(e, t) {
          for (var n in t) s.call(t, n) && (e[n] = !!t[n]);
        }
        function o(e, t) {
          for (var n = t.split(u), r = n.length, o = 0; o < r; ++o)
            e[n[o]] = !0;
        }
        function i(e, i) {
          if (i) {
            var a = typeof i;
            "string" === a
              ? o(e, i)
              : Array.isArray(i)
              ? t(e, i)
              : "object" === a
              ? r(e, i)
              : "number" === a && n(e, i);
          }
        }
        function a() {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          var i = new e();
          t(i, r);
          var a = [];
          for (var s in i) i[s] && a.push(s);
          return a.join(" ");
        }
        e.prototype = Object.create(null);
        var s = {}.hasOwnProperty,
          u = /\s+/;
        return a;
      })();
      void 0 !== e && e.exports
        ? (e.exports = n)
        : ((r = []),
          void 0 !==
            (o = function() {
              return n;
            }.apply(t, r)) && (e.exports = o));
    })();
  },
  function(e, t) {}
]);
