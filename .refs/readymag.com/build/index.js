/*! jQuery v2.0.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.2.min.map
*/
/**! Calculate the md5 hash of a string
 * +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
 * + namespaced by: Michael White (http://crestidg.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
**/
function md5(t) {
    var e, i, n, s, o, r, a, l, c, h = function(t, e) {
        return t << e | t >>> 32 - e;
    }, u = function(t, e) {
        var i, n, s, o, r;
        return s = 2147483648 & t, o = 2147483648 & e, i = 1073741824 & t, n = 1073741824 & e, r = (1073741823 & t) + (1073741823 & e), 
        i & n ? 2147483648 ^ r ^ s ^ o : i | n ? 1073741824 & r ? 3221225472 ^ r ^ s ^ o : 1073741824 ^ r ^ s ^ o : r ^ s ^ o;
    }, p = function(t, e, i) {
        return t & e | ~t & i;
    }, d = function(t, e, i) {
        return t & i | e & ~i;
    }, g = function(t, e, i) {
        return t ^ e ^ i;
    }, f = function(t, e, i) {
        return e ^ (t | ~i);
    }, m = function(t, e, i, n, s, o, r) {
        return t = u(t, u(u(p(e, i, n), s), r)), u(h(t, o), e);
    }, v = function(t, e, i, n, s, o, r) {
        return t = u(t, u(u(d(e, i, n), s), r)), u(h(t, o), e);
    }, y = function(t, e, i, n, s, o, r) {
        return t = u(t, u(u(g(e, i, n), s), r)), u(h(t, o), e);
    }, b = function(t, e, i, n, s, o, r) {
        return t = u(t, u(u(f(e, i, n), s), r)), u(h(t, o), e);
    }, w = function(t) {
        for (var e, i = t.length, n = i + 8, s = (n - n % 64) / 64, o = 16 * (s + 1), r = Array(o - 1), a = 0, l = 0; i > l; ) e = (l - l % 4) / 4, 
        a = 8 * (l % 4), r[e] = r[e] | t.charCodeAt(l) << a, l++;
        return e = (l - l % 4) / 4, a = 8 * (l % 4), r[e] = r[e] | 128 << a, r[o - 2] = i << 3, r[o - 1] = i >>> 29, 
        r;
    }, _ = function(t) {
        var e, i, n = "", s = "";
        for (i = 0; 3 >= i; i++) e = 255 & t >>> 8 * i, s = "0" + e.toString(16), n += s.substr(s.length - 2, 2);
        return n;
    }, x = [], k = 7, $ = 12, C = 17, T = 22, P = 5, S = 9, E = 14, M = 20, I = 4, D = 11, A = 16, N = 23, R = 6, L = 10, O = 15, H = 21;
    for (x = w(t), r = 1732584193, a = 4023233417, l = 2562383102, c = 271733878, e = 0; x.length > e; e += 16) i = r, 
    n = a, s = l, o = c, r = m(r, a, l, c, x[e + 0], k, 3614090360), c = m(c, r, a, l, x[e + 1], $, 3905402710), 
    l = m(l, c, r, a, x[e + 2], C, 606105819), a = m(a, l, c, r, x[e + 3], T, 3250441966), r = m(r, a, l, c, x[e + 4], k, 4118548399), 
    c = m(c, r, a, l, x[e + 5], $, 1200080426), l = m(l, c, r, a, x[e + 6], C, 2821735955), a = m(a, l, c, r, x[e + 7], T, 4249261313), 
    r = m(r, a, l, c, x[e + 8], k, 1770035416), c = m(c, r, a, l, x[e + 9], $, 2336552879), l = m(l, c, r, a, x[e + 10], C, 4294925233), 
    a = m(a, l, c, r, x[e + 11], T, 2304563134), r = m(r, a, l, c, x[e + 12], k, 1804603682), c = m(c, r, a, l, x[e + 13], $, 4254626195), 
    l = m(l, c, r, a, x[e + 14], C, 2792965006), a = m(a, l, c, r, x[e + 15], T, 1236535329), r = v(r, a, l, c, x[e + 1], P, 4129170786), 
    c = v(c, r, a, l, x[e + 6], S, 3225465664), l = v(l, c, r, a, x[e + 11], E, 643717713), a = v(a, l, c, r, x[e + 0], M, 3921069994), 
    r = v(r, a, l, c, x[e + 5], P, 3593408605), c = v(c, r, a, l, x[e + 10], S, 38016083), l = v(l, c, r, a, x[e + 15], E, 3634488961), 
    a = v(a, l, c, r, x[e + 4], M, 3889429448), r = v(r, a, l, c, x[e + 9], P, 568446438), c = v(c, r, a, l, x[e + 14], S, 3275163606), 
    l = v(l, c, r, a, x[e + 3], E, 4107603335), a = v(a, l, c, r, x[e + 8], M, 1163531501), r = v(r, a, l, c, x[e + 13], P, 2850285829), 
    c = v(c, r, a, l, x[e + 2], S, 4243563512), l = v(l, c, r, a, x[e + 7], E, 1735328473), a = v(a, l, c, r, x[e + 12], M, 2368359562), 
    r = y(r, a, l, c, x[e + 5], I, 4294588738), c = y(c, r, a, l, x[e + 8], D, 2272392833), l = y(l, c, r, a, x[e + 11], A, 1839030562), 
    a = y(a, l, c, r, x[e + 14], N, 4259657740), r = y(r, a, l, c, x[e + 1], I, 2763975236), c = y(c, r, a, l, x[e + 4], D, 1272893353), 
    l = y(l, c, r, a, x[e + 7], A, 4139469664), a = y(a, l, c, r, x[e + 10], N, 3200236656), r = y(r, a, l, c, x[e + 13], I, 681279174), 
    c = y(c, r, a, l, x[e + 0], D, 3936430074), l = y(l, c, r, a, x[e + 3], A, 3572445317), a = y(a, l, c, r, x[e + 6], N, 76029189), 
    r = y(r, a, l, c, x[e + 9], I, 3654602809), c = y(c, r, a, l, x[e + 12], D, 3873151461), l = y(l, c, r, a, x[e + 15], A, 530742520), 
    a = y(a, l, c, r, x[e + 2], N, 3299628645), r = b(r, a, l, c, x[e + 0], R, 4096336452), c = b(c, r, a, l, x[e + 7], L, 1126891415), 
    l = b(l, c, r, a, x[e + 14], O, 2878612391), a = b(a, l, c, r, x[e + 5], H, 4237533241), r = b(r, a, l, c, x[e + 12], R, 1700485571), 
    c = b(c, r, a, l, x[e + 3], L, 2399980690), l = b(l, c, r, a, x[e + 10], O, 4293915773), a = b(a, l, c, r, x[e + 1], H, 2240044497), 
    r = b(r, a, l, c, x[e + 8], R, 1873313359), c = b(c, r, a, l, x[e + 15], L, 4264355552), l = b(l, c, r, a, x[e + 6], O, 2734768916), 
    a = b(a, l, c, r, x[e + 13], H, 1309151649), r = b(r, a, l, c, x[e + 4], R, 4149444226), c = b(c, r, a, l, x[e + 11], L, 3174756917), 
    l = b(l, c, r, a, x[e + 2], O, 718787259), a = b(a, l, c, r, x[e + 9], H, 3951481745), r = u(r, i), 
    a = u(a, n), l = u(l, s), c = u(c, o);
    var F = _(r) + _(a) + _(l) + _(c);
    return F.toLowerCase();
}

function preloadDesignImages(t) {
    if (preloadDesignImagesList[t] && !preloadDesignImagesList[t].preloaded) {
        preloadDesignImagesList[t].preloaded = !0;
        for (var e = preloadDesignImagesList[t][Modernizr.retina ? "retina" : "normal"], i = [], n = 0; e.length > n; n++) i[n] = new Image(), 
        i[n].src = e[n];
    }
}

(function(t, e) {
    function i(t) {
        var e = t.length, i = oe.type(t);
        return oe.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }
    function n(t) {
        var e = ge[t] = {};
        return oe.each(t.match(ae) || [], function(t, i) {
            e[i] = !0;
        }), e;
    }
    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = oe.expando + Math.random();
    }
    function o(t, i, n) {
        var s;
        if (n === e && 1 === t.nodeType) if (s = "data-" + i.replace(ye, "-$1").toLowerCase(), n = t.getAttribute(s), 
        "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ve.test(n) ? JSON.parse(n) : n;
            } catch (o) {}
            fe.set(t, i, n);
        } else n = e;
        return n;
    }
    function r() {
        return !0;
    }
    function a() {
        return !1;
    }
    function l() {
        try {
            return q.activeElement;
        } catch (t) {}
    }
    function c(t, e) {
        for (;(t = t[e]) && 1 !== t.nodeType; ) ;
        return t;
    }
    function h(t, e, i) {
        if (oe.isFunction(e)) return oe.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i;
        });
        if (e.nodeType) return oe.grep(t, function(t) {
            return t === e !== i;
        });
        if ("string" == typeof e) {
            if (Se.test(e)) return oe.filter(e, t, i);
            e = oe.filter(e, t);
        }
        return oe.grep(t, function(t) {
            return ee.call(e, t) >= 0 !== i;
        });
    }
    function u(t, e) {
        return oe.nodeName(t, "table") && oe.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
    }
    function p(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
    }
    function d(t) {
        var e = Fe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t;
    }
    function g(t, e) {
        for (var i = t.length, n = 0; i > n; n++) me.set(t[n], "globalEval", !e || me.get(e[n], "globalEval"));
    }
    function f(t, e) {
        var i, n, s, o, r, a, l, c;
        if (1 === e.nodeType) {
            if (me.hasData(t) && (o = me.access(t), r = me.set(e, o), c = o.events)) {
                delete r.handle, r.events = {};
                for (s in c) for (i = 0, n = c[s].length; n > i; i++) oe.event.add(e, s, c[s][i]);
            }
            fe.hasData(t) && (a = fe.access(t), l = oe.extend({}, a), fe.set(e, l));
        }
    }
    function m(t, i) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(i || "*") : t.querySelectorAll ? t.querySelectorAll(i || "*") : [];
        return i === e || i && oe.nodeName(t, i) ? oe.merge([ t ], n) : n;
    }
    function v(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Le.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue);
    }
    function y(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = Ze.length; s--; ) if (e = Ze[s] + i, 
        e in t) return e;
        return n;
    }
    function b(t, e) {
        return t = e || t, "none" === oe.css(t, "display") || !oe.contains(t.ownerDocument, t);
    }
    function w(e) {
        return t.getComputedStyle(e, null);
    }
    function _(t, e) {
        for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (o[r] = me.get(n, "olddisplay"), 
        i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && b(n) && (o[r] = me.access(n, "olddisplay", C(n.nodeName)))) : o[r] || (s = b(n), 
        (i && "none" !== i || !s) && me.set(n, "olddisplay", s ? i : oe.css(n, "display"))));
        for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
        return t;
    }
    function x(t, e, i) {
        var n = Ve.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
    }
    function k(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += oe.css(t, i + Je[o], !0, s)), 
        n ? ("content" === i && (r -= oe.css(t, "padding" + Je[o], !0, s)), "margin" !== i && (r -= oe.css(t, "border" + Je[o] + "Width", !0, s))) : (r += oe.css(t, "padding" + Je[o], !0, s), 
        "padding" !== i && (r += oe.css(t, "border" + Je[o] + "Width", !0, s)));
        return r;
    }
    function $(t, e, i) {
        var n = !0, s = "width" === e ? t.offsetWidth : t.offsetHeight, o = w(t), r = oe.support.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, o);
        if (0 >= s || null == s) {
            if (s = ze(t, e, o), (0 > s || null == s) && (s = t.style[e]), Xe.test(s)) return s;
            n = r && (oe.support.boxSizingReliable || s === t.style[e]), s = parseFloat(s) || 0;
        }
        return s + k(t, e, i || (r ? "border" : "content"), n, o) + "px";
    }
    function C(t) {
        var e = q, i = Ye[t];
        return i || (i = T(t, e), "none" !== i && i || (Ue = (Ue || oe("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), 
        e = (Ue[0].contentWindow || Ue[0].contentDocument).document, e.write("<!doctype html><html><body>"), 
        e.close(), i = T(t, e), Ue.detach()), Ye[t] = i), i;
    }
    function T(t, e) {
        var i = oe(e.createElement(t)).appendTo(e.body), n = oe.css(i[0], "display");
        return i.remove(), n;
    }
    function P(t, e, i, n) {
        var s;
        if (oe.isArray(e)) oe.each(e, function(e, s) {
            i || ei.test(t) ? n(t, s) : P(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n);
        }); else if (i || "object" !== oe.type(e)) n(t, e); else for (s in e) P(t + "[" + s + "]", e[s], i, n);
    }
    function S(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0, o = e.toLowerCase().match(ae) || [];
            if (oe.isFunction(i)) for (;n = o[s++]; ) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
        };
    }
    function E(t, i, n, s) {
        function o(l) {
            var c;
            return r[l] = !0, oe.each(t[l] || [], function(t, l) {
                var h = l(i, n, s);
                return "string" != typeof h || a || r[h] ? a ? !(c = h) : e : (i.dataTypes.unshift(h), o(h), !1);
            }), c;
        }
        var r = {}, a = t === yi;
        return o(i.dataTypes[0]) || !r["*"] && o("*");
    }
    function M(t, i) {
        var n, s, o = oe.ajaxSettings.flatOptions || {};
        for (n in i) i[n] !== e && ((o[n] ? t : s || (s = {}))[n] = i[n]);
        return s && oe.extend(!0, t, s), t;
    }
    function I(t, i, n) {
        for (var s, o, r, a, l = t.contents, c = t.dataTypes; "*" === c[0]; ) c.shift(), s === e && (s = t.mimeType || i.getResponseHeader("Content-Type"));
        if (s) for (o in l) if (l[o] && l[o].test(s)) {
            c.unshift(o);
            break;
        }
        if (c[0] in n) r = c[0]; else {
            for (o in n) {
                if (!c[0] || t.converters[o + " " + c[0]]) {
                    r = o;
                    break;
                }
                a || (a = o);
            }
            r = r || a;
        }
        return r ? (r !== c[0] && c.unshift(r), n[r]) : e;
    }
    function D(t, e, i, n) {
        var s, o, r, a, l, c = {}, h = t.dataTypes.slice();
        if (h[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
        for (o = h.shift(); o; ) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), 
        l = o, o = h.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (r = c[l + " " + o] || c["* " + o], !r) for (s in c) if (a = s.split(" "), a[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                r === !0 ? r = c[s] : c[s] !== !0 && (o = a[0], h.unshift(a[1]));
                break;
            }
            if (r !== !0) if (r && t["throws"]) e = r(e); else try {
                e = r(e);
            } catch (u) {
                return {
                    state: "parsererror",
                    error: r ? u : "No conversion from " + l + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: e
        };
    }
    function A() {
        return setTimeout(function() {
            Pi = e;
        }), Pi = oe.now();
    }
    function N(t, e, i) {
        for (var n, s = (Ai[e] || []).concat(Ai["*"]), o = 0, r = s.length; r > o; o++) if (n = s[o].call(i, e, t)) return n;
    }
    function R(t, e, i) {
        var n, s, o = 0, r = Di.length, a = oe.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (s) return !1;
            for (var e = Pi || A(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(o);
            return a.notifyWith(t, [ c, o, i ]), 1 > o && l ? i : (a.resolveWith(t, [ c ]), !1);
        }, c = a.promise({
            elem: t,
            props: oe.extend({}, e),
            opts: oe.extend(!0, {
                specialEasing: {}
            }, i),
            originalProperties: e,
            originalOptions: i,
            startTime: Pi || A(),
            duration: i.duration,
            tweens: [],
            createTween: function(e, i) {
                var n = oe.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n), n;
            },
            stop: function(e) {
                var i = 0, n = e ? c.tweens.length : 0;
                if (s) return this;
                for (s = !0; n > i; i++) c.tweens[i].run(1);
                return e ? a.resolveWith(t, [ c, e ]) : a.rejectWith(t, [ c, e ]), this;
            }
        }), h = c.props;
        for (L(h, c.opts.specialEasing); r > o; o++) if (n = Di[o].call(c, t, h, c.opts)) return n;
        return oe.map(h, N, c), oe.isFunction(c.opts.start) && c.opts.start.call(t, c), oe.fx.timer(oe.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
    }
    function L(t, e) {
        var i, n, s, o, r;
        for (i in t) if (n = oe.camelCase(i), s = e[n], o = t[i], oe.isArray(o) && (s = o[1], o = t[i] = o[0]), 
        i !== n && (t[n] = o, delete t[i]), r = oe.cssHooks[n], r && "expand" in r) {
            o = r.expand(o), delete t[n];
            for (i in o) i in t || (t[i] = o[i], e[i] = s);
        } else e[n] = s;
    }
    function O(t, i, n) {
        var s, o, r, a, l, c, h = this, u = {}, p = t.style, d = t.nodeType && b(t), g = me.get(t, "fxshow");
        n.queue || (l = oe._queueHooks(t, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c();
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, oe.queue(t, "fx").length || l.empty.fire();
            });
        })), 1 === t.nodeType && ("height" in i || "width" in i) && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
        "inline" === oe.css(t, "display") && "none" === oe.css(t, "float") && (p.display = "inline-block")), 
        n.overflow && (p.overflow = "hidden", h.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        }));
        for (s in i) if (o = i[s], Ei.exec(o)) {
            if (delete i[s], r = r || "toggle" === o, o === (d ? "hide" : "show")) {
                if ("show" !== o || !g || g[s] === e) continue;
                d = !0;
            }
            u[s] = g && g[s] || oe.style(t, s);
        }
        if (!oe.isEmptyObject(u)) {
            g ? "hidden" in g && (d = g.hidden) : g = me.access(t, "fxshow", {}), r && (g.hidden = !d), d ? oe(t).show() : h.done(function() {
                oe(t).hide();
            }), h.done(function() {
                var e;
                me.remove(t, "fxshow");
                for (e in u) oe.style(t, e, u[e]);
            });
            for (s in u) a = N(d ? g[s] : 0, s, h), s in g || (g[s] = a.start, d && (a.end = a.start, a.start = "width" === s || "height" === s ? 1 : 0));
        }
    }
    function H(t, e, i, n, s) {
        return new H.prototype.init(t, e, i, n, s);
    }
    function F(t, e) {
        var i, n = {
            height: t
        }, s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = Je[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n;
    }
    function j(t) {
        return oe.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
    }
    var B, z, U = typeof e, W = t.location, q = t.document, V = q.documentElement, X = t.jQuery, G = t.$, Y = {}, K = [], Q = "2.0.2", J = K.concat, Z = K.push, te = K.slice, ee = K.indexOf, ie = Y.toString, ne = Y.hasOwnProperty, se = Q.trim, oe = function(t, e) {
        return new oe.fn.init(t, e, B);
    }, re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ae = /\S+/g, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ce = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, he = /^-ms-/, ue = /-([\da-z])/gi, pe = function(t, e) {
        return e.toUpperCase();
    }, de = function() {
        q.removeEventListener("DOMContentLoaded", de, !1), t.removeEventListener("load", de, !1), oe.ready();
    };
    oe.fn = oe.prototype = {
        jquery: Q,
        constructor: oe,
        init: function(t, i, n) {
            var s, o;
            if (!t) return this;
            if ("string" == typeof t) {
                if (s = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [ null, t, null ] : le.exec(t), 
                !s || !s[1] && i) return !i || i.jquery ? (i || n).find(t) : this.constructor(i).find(t);
                if (s[1]) {
                    if (i = i instanceof oe ? i[0] : i, oe.merge(this, oe.parseHTML(s[1], i && i.nodeType ? i.ownerDocument || i : q, !0)), 
                    ce.test(s[1]) && oe.isPlainObject(i)) for (s in i) oe.isFunction(this[s]) ? this[s](i[s]) : this.attr(s, i[s]);
                    return this;
                }
                return o = q.getElementById(s[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = q, 
                this.selector = t, this;
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : oe.isFunction(t) ? n.ready(t) : (t.selector !== e && (this.selector = t.selector, 
            this.context = t.context), oe.makeArray(t, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return te.call(this);
        },
        get: function(t) {
            return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t];
        },
        pushStack: function(t) {
            var e = oe.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e;
        },
        each: function(t, e) {
            return oe.each(this, t, e);
        },
        ready: function(t) {
            return oe.ready.promise().done(t), this;
        },
        slice: function() {
            return this.pushStack(te.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(t) {
            var e = this.length, i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [ this[i] ] : []);
        },
        map: function(t) {
            return this.pushStack(oe.map(this, function(e, i) {
                return t.call(e, i, e);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: Z,
        sort: [].sort,
        splice: [].splice
    }, oe.fn.init.prototype = oe.fn, oe.extend = oe.fn.extend = function() {
        var t, i, n, s, o, r, a = arguments[0] || {}, l = 1, c = arguments.length, h = !1;
        for ("boolean" == typeof a && (h = a, a = arguments[1] || {}, l = 2), "object" == typeof a || oe.isFunction(a) || (a = {}), 
        c === l && (a = this, --l); c > l; l++) if (null != (t = arguments[l])) for (i in t) n = a[i], s = t[i], 
        a !== s && (h && s && (oe.isPlainObject(s) || (o = oe.isArray(s))) ? (o ? (o = !1, r = n && oe.isArray(n) ? n : []) : r = n && oe.isPlainObject(n) ? n : {}, 
        a[i] = oe.extend(h, r, s)) : s !== e && (a[i] = s));
        return a;
    }, oe.extend({
        expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
        noConflict: function(e) {
            return t.$ === oe && (t.$ = G), e && t.jQuery === oe && (t.jQuery = X), oe;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? oe.readyWait++ : oe.ready(!0);
        },
        ready: function(t) {
            (t === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, t !== !0 && --oe.readyWait > 0 || (z.resolveWith(q, [ oe ]), 
            oe.fn.trigger && oe(q).trigger("ready").off("ready")));
        },
        isFunction: function(t) {
            return "function" === oe.type(t);
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window;
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[ie.call(t)] || "object" : typeof t;
        },
        isPlainObject: function(t) {
            if ("object" !== oe.type(t) || t.nodeType || oe.isWindow(t)) return !1;
            try {
                if (t.constructor && !ne.call(t.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (e) {
                return !1;
            }
            return !0;
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        },
        error: function(t) {
            throw Error(t);
        },
        parseHTML: function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || q;
            var n = ce.exec(t), s = !i && [];
            return n ? [ e.createElement(n[1]) ] : (n = oe.buildFragment([ t ], e, s), s && oe(s).remove(), oe.merge([], n.childNodes));
        },
        parseJSON: JSON.parse,
        parseXML: function(t) {
            var i, n;
            if (!t || "string" != typeof t) return null;
            try {
                n = new DOMParser(), i = n.parseFromString(t, "text/xml");
            } catch (s) {
                i = e;
            }
            return (!i || i.getElementsByTagName("parsererror").length) && oe.error("Invalid XML: " + t), i;
        },
        noop: function() {},
        globalEval: function(t) {
            var e, i = eval;
            t = oe.trim(t), t && (1 === t.indexOf("use strict") ? (e = q.createElement("script"), e.text = t, q.head.appendChild(e).parentNode.removeChild(e)) : i(t));
        },
        camelCase: function(t) {
            return t.replace(he, "ms-").replace(ue, pe);
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function(t, e, n) {
            var s, o = 0, r = t.length, a = i(t);
            if (n) {
                if (a) for (;r > o && (s = e.apply(t[o], n), s !== !1); o++) ; else for (o in t) if (s = e.apply(t[o], n), 
                s === !1) break;
            } else if (a) for (;r > o && (s = e.call(t[o], o, t[o]), s !== !1); o++) ; else for (o in t) if (s = e.call(t[o], o, t[o]), 
            s === !1) break;
            return t;
        },
        trim: function(t) {
            return null == t ? "" : se.call(t);
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? oe.merge(n, "string" == typeof t ? [ t ] : t) : Z.call(n, t)), n;
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : ee.call(e, t, i);
        },
        merge: function(t, i) {
            var n = i.length, s = t.length, o = 0;
            if ("number" == typeof n) for (;n > o; o++) t[s++] = i[o]; else for (;i[o] !== e; ) t[s++] = i[o++];
            return t.length = s, t;
        },
        grep: function(t, e, i) {
            var n, s = [], o = 0, r = t.length;
            for (i = !!i; r > o; o++) n = !!e(t[o], o), i !== n && s.push(t[o]);
            return s;
        },
        map: function(t, e, n) {
            var s, o = 0, r = t.length, a = i(t), l = [];
            if (a) for (;r > o; o++) s = e(t[o], o, n), null != s && (l[l.length] = s); else for (o in t) s = e(t[o], o, n), 
            null != s && (l[l.length] = s);
            return J.apply([], l);
        },
        guid: 1,
        proxy: function(t, i) {
            var n, s, o;
            return "string" == typeof i && (n = t[i], i = t, t = n), oe.isFunction(t) ? (s = te.call(arguments, 2), 
            o = function() {
                return t.apply(i || this, s.concat(te.call(arguments)));
            }, o.guid = t.guid = t.guid || oe.guid++, o) : e;
        },
        access: function(t, i, n, s, o, r, a) {
            var l = 0, c = t.length, h = null == n;
            if ("object" === oe.type(n)) {
                o = !0;
                for (l in n) oe.access(t, i, l, n[l], !0, r, a);
            } else if (s !== e && (o = !0, oe.isFunction(s) || (a = !0), h && (a ? (i.call(t, s), i = null) : (h = i, 
            i = function(t, e, i) {
                return h.call(oe(t), i);
            })), i)) for (;c > l; l++) i(t[l], n, a ? s : s.call(t[l], l, i(t[l], n)));
            return o ? t : h ? i.call(t) : c ? i(t[0], n) : r;
        },
        now: Date.now,
        swap: function(t, e, i, n) {
            var s, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = r[o];
            return s;
        }
    }), oe.ready.promise = function(e) {
        return z || (z = oe.Deferred(), "complete" === q.readyState ? setTimeout(oe.ready) : (q.addEventListener("DOMContentLoaded", de, !1), 
        t.addEventListener("load", de, !1))), z.promise(e);
    }, oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Y["[object " + e + "]"] = e.toLowerCase();
    }), B = oe(q), function(t, e) {
        function i(t, e, i, n) {
            var s, o, r, a, l, c, h, u, p, d;
            if ((e ? e.ownerDocument || e : W) !== L && R(e), e = e || L, i = i || [], !t || "string" != typeof t) return i;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if (H && !n) {
                if (s = ke.exec(t)) if (r = s[1]) {
                    if (9 === a) {
                        if (o = e.getElementById(r), !o || !o.parentNode) return i;
                        if (o.id === r) return i.push(o), i;
                    } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && z(e, o) && o.id === r) return i.push(o), 
                    i;
                } else {
                    if (s[2]) return se.apply(i, e.getElementsByTagName(t)), i;
                    if ((r = s[3]) && P.getElementsByClassName && e.getElementsByClassName) return se.apply(i, e.getElementsByClassName(r)), 
                    i;
                }
                if (P.qsa && (!F || !F.test(t))) {
                    if (u = h = U, p = e, d = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (c = f(t), (h = e.getAttribute("id")) ? u = h.replace(Te, "\\$&") : e.setAttribute("id", u), u = "[id='" + u + "'] ", 
                        l = c.length; l--; ) c[l] = u + m(c[l]);
                        p = ve.test(t) && e.parentNode || e, d = c.join(",");
                    }
                    if (d) try {
                        return se.apply(i, p.querySelectorAll(d)), i;
                    } catch (g) {} finally {
                        h || e.removeAttribute("id");
                    }
                }
            }
            return $(t.replace(ge, "$1"), e, i, n);
        }
        function n(t) {
            return xe.test(t + "");
        }
        function s() {
            function t(i, n) {
                return e.push(i += " ") > E.cacheLength && delete t[e.shift()], t[i] = n;
            }
            var e = [];
            return t;
        }
        function o(t) {
            return t[U] = !0, t;
        }
        function r(t) {
            var e = L.createElement("div");
            try {
                return !!t(e);
            } catch (i) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null;
            }
        }
        function a(t, e, i) {
            t = t.split("|");
            for (var n, s = t.length, o = i ? null : e; s--; ) (n = E.attrHandle[t[s]]) && n !== e || (E.attrHandle[t[s]] = o);
        }
        function l(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : t[e] === !0 ? e.toLowerCase() : null;
        }
        function c(t, e) {
            return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }
        function h(t) {
            return "input" === t.nodeName.toLowerCase() ? t.defaultValue : e;
        }
        function u(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Z) - (~t.sourceIndex || Z);
            if (n) return n;
            if (i) for (;i = i.nextSibling; ) if (i === e) return -1;
            return t ? 1 : -1;
        }
        function p(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t;
            };
        }
        function d(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t;
            };
        }
        function g(t) {
            return o(function(e) {
                return e = +e, o(function(i, n) {
                    for (var s, o = t([], i.length, e), r = o.length; r--; ) i[s = o[r]] && (i[s] = !(n[s] = i[s]));
                });
            });
        }
        function f(t, e) {
            var n, s, o, r, a, l, c, h = G[t + " "];
            if (h) return e ? 0 : h.slice(0);
            for (a = t, l = [], c = E.preFilter; a; ) {
                (!n || (s = fe.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = me.exec(a)) && (n = s.shift(), 
                o.push({
                    value: n,
                    type: s[0].replace(ge, " ")
                }), a = a.slice(n.length));
                for (r in E.filter) !(s = _e[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({
                    value: n,
                    type: r,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return e ? a.length : a ? i.error(t) : G(t, l).slice(0);
        }
        function m(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n;
        }
        function v(t, e, i) {
            var n = e.dir, s = i && "parentNode" === n, o = V++;
            return e.first ? function(e, i, o) {
                for (;e = e[n]; ) if (1 === e.nodeType || s) return t(e, i, o);
            } : function(e, i, r) {
                var a, l, c, h = q + " " + o;
                if (r) {
                    for (;e = e[n]; ) if ((1 === e.nodeType || s) && t(e, i, r)) return !0;
                } else for (;e = e[n]; ) if (1 === e.nodeType || s) if (c = e[U] || (e[U] = {}), (l = c[n]) && l[0] === h) {
                    if ((a = l[1]) === !0 || a === S) return a === !0;
                } else if (l = c[n] = [ h ], l[1] = t(e, i, r) || S, l[1] === !0) return !0;
            };
        }
        function y(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
                return !0;
            } : t[0];
        }
        function b(t, e, i, n, s) {
            for (var o, r = [], a = 0, l = t.length, c = null != e; l > a; a++) (o = t[a]) && (!i || i(o, n, s)) && (r.push(o), 
            c && e.push(a));
            return r;
        }
        function w(t, e, i, n, s, r) {
            return n && !n[U] && (n = w(n)), s && !s[U] && (s = w(s, r)), o(function(o, r, a, l) {
                var c, h, u, p = [], d = [], g = r.length, f = o || k(e || "*", a.nodeType ? [ a ] : a, []), m = !t || !o && e ? f : b(f, p, t, a, l), v = i ? s || (o ? t : g || n) ? [] : r : m;
                if (i && i(m, v, a, l), n) for (c = b(v, d), n(c, [], a, l), h = c.length; h--; ) (u = c[h]) && (v[d[h]] = !(m[d[h]] = u));
                if (o) {
                    if (s || t) {
                        if (s) {
                            for (c = [], h = v.length; h--; ) (u = v[h]) && c.push(m[h] = u);
                            s(null, v = [], c, l);
                        }
                        for (h = v.length; h--; ) (u = v[h]) && (c = s ? ae.call(o, u) : p[h]) > -1 && (o[c] = !(r[c] = u));
                    }
                } else v = b(v === r ? v.splice(g, v.length) : v), s ? s(null, r, v, l) : se.apply(r, v);
            });
        }
        function _(t) {
            for (var e, i, n, s = t.length, o = E.relative[t[0].type], r = o || E.relative[" "], a = o ? 1 : 0, l = v(function(t) {
                return t === e;
            }, r, !0), c = v(function(t) {
                return ae.call(e, t) > -1;
            }, r, !0), h = [ function(t, i, n) {
                return !o && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
            } ]; s > a; a++) if (i = E.relative[t[a].type]) h = [ v(y(h), i) ]; else {
                if (i = E.filter[t[a].type].apply(null, t[a].matches), i[U]) {
                    for (n = ++a; s > n && !E.relative[t[n].type]; n++) ;
                    return w(a > 1 && y(h), a > 1 && m(t.slice(0, a - 1).concat({
                        value: " " === t[a - 2].type ? "*" : ""
                    })).replace(ge, "$1"), i, n > a && _(t.slice(a, n)), s > n && _(t = t.slice(n)), s > n && m(t));
                }
                h.push(i);
            }
            return y(h);
        }
        function x(t, e) {
            var n = 0, s = e.length > 0, r = t.length > 0, a = function(o, a, l, c, h) {
                var u, p, d, g = [], f = 0, m = "0", v = o && [], y = null != h, w = A, _ = o || r && E.find.TAG("*", h && a.parentNode || a), x = q += null == w ? 1 : Math.random() || .1;
                for (y && (A = a !== L && a, S = n); null != (u = _[m]); m++) {
                    if (r && u) {
                        for (p = 0; d = t[p++]; ) if (d(u, a, l)) {
                            c.push(u);
                            break;
                        }
                        y && (q = x, S = ++n);
                    }
                    s && ((u = !d && u) && f--, o && v.push(u));
                }
                if (f += m, s && m !== f) {
                    for (p = 0; d = e[p++]; ) d(v, g, a, l);
                    if (o) {
                        if (f > 0) for (;m--; ) v[m] || g[m] || (g[m] = ie.call(c));
                        g = b(g);
                    }
                    se.apply(c, g), y && !o && g.length > 0 && f + e.length > 1 && i.uniqueSort(c);
                }
                return y && (q = x, A = w), v;
            };
            return s ? o(a) : a;
        }
        function k(t, e, n) {
            for (var s = 0, o = e.length; o > s; s++) i(t, e[s], n);
            return n;
        }
        function $(t, e, i, n) {
            var s, o, r, a, l, c = f(t);
            if (!n && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && P.getById && 9 === e.nodeType && H && E.relative[o[1].type]) {
                    if (e = (E.find.ID(r.matches[0].replace(Pe, Se), e) || [])[0], !e) return i;
                    t = t.slice(o.shift().value.length);
                }
                for (s = _e.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !E.relative[a = r.type]); ) if ((l = E.find[a]) && (n = l(r.matches[0].replace(Pe, Se), ve.test(o[0].type) && e.parentNode || e))) {
                    if (o.splice(s, 1), t = n.length && m(o), !t) return se.apply(i, n), i;
                    break;
                }
            }
            return D(t, c)(n, e, !H, i, ve.test(t)), i;
        }
        function C() {}
        var T, P, S, E, M, I, D, A, N, R, L, O, H, F, j, B, z, U = "sizzle" + -new Date(), W = t.document, q = 0, V = 0, X = s(), G = s(), Y = s(), K = !1, Q = function() {
            return 0;
        }, J = typeof e, Z = 1 << 31, te = {}.hasOwnProperty, ee = [], ie = ee.pop, ne = ee.push, se = ee.push, re = ee.slice, ae = ee.indexOf || function(t) {
            for (var e = 0, i = this.length; i > e; e++) if (this[e] === t) return e;
            return -1;
        }, le = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ce = "[\\x20\\t\\r\\n\\f]", he = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ue = he.replace("w", "w#"), pe = "\\[" + ce + "*(" + he + ")" + ce + "*(?:([*^$|!~]?=)" + ce + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ue + ")|)|)" + ce + "*\\]", de = ":(" + he + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + pe.replace(3, 8) + ")*)|.*)\\)|)", ge = RegExp("^" + ce + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ce + "+$", "g"), fe = RegExp("^" + ce + "*," + ce + "*"), me = RegExp("^" + ce + "*([>+~]|" + ce + ")" + ce + "*"), ve = RegExp(ce + "*[+~]"), ye = RegExp("=" + ce + "*([^\\]'\"]*)" + ce + "*\\]", "g"), be = RegExp(de), we = RegExp("^" + ue + "$"), _e = {
            ID: RegExp("^#(" + he + ")"),
            CLASS: RegExp("^\\.(" + he + ")"),
            TAG: RegExp("^(" + he.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + pe),
            PSEUDO: RegExp("^" + de),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ce + "*(even|odd|(([+-]|)(\\d*)n|)" + ce + "*(?:([+-]|)" + ce + "*(\\d+)|))" + ce + "*\\)|)", "i"),
            bool: RegExp("^(?:" + le + ")$", "i"),
            needsContext: RegExp("^" + ce + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ce + "*((?:-\\d)?\\d*)" + ce + "*\\)|)(?=[^-]|$)", "i")
        }, xe = /^[^{]+\{\s*\[native \w/, ke = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $e = /^(?:input|select|textarea|button)$/i, Ce = /^h\d$/i, Te = /'|\\/g, Pe = RegExp("\\\\([\\da-f]{1,6}" + ce + "?|(" + ce + ")|.)", "ig"), Se = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n);
        };
        try {
            se.apply(ee = re.call(W.childNodes), W.childNodes), ee[W.childNodes.length].nodeType;
        } catch (Ee) {
            se = {
                apply: ee.length ? function(t, e) {
                    ne.apply(t, re.call(e));
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++]; ) ;
                    t.length = i - 1;
                }
            };
        }
        I = i.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1;
        }, P = i.support = {}, R = i.setDocument = function(t) {
            var i = t ? t.ownerDocument || t : W, s = i.parentWindow;
            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, O = i.documentElement, H = !I(i), 
            s && s.frameElement && s.attachEvent("onbeforeunload", function() {
                R();
            }), P.attributes = r(function(t) {
                return t.innerHTML = "<a href='#'></a>", a("type|href|height|width", c, "#" === t.firstChild.getAttribute("href")), 
                a(le, l, null == t.getAttribute("disabled")), t.className = "i", !t.getAttribute("className");
            }), P.input = r(function(t) {
                return t.innerHTML = "<input>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
            }), a("value", h, P.attributes && P.input), P.getElementsByTagName = r(function(t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length;
            }), P.getElementsByClassName = r(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length;
            }), P.getById = r(function(t) {
                return O.appendChild(t).id = U, !i.getElementsByName || !i.getElementsByName(U).length;
            }), P.getById ? (E.find.ID = function(t, e) {
                if (typeof e.getElementById !== J && H) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [ i ] : [];
                }
            }, E.filter.ID = function(t) {
                var e = t.replace(Pe, Se);
                return function(t) {
                    return t.getAttribute("id") === e;
                };
            }) : (delete E.find.ID, E.filter.ID = function(t) {
                var e = t.replace(Pe, Se);
                return function(t) {
                    var i = typeof t.getAttributeNode !== J && t.getAttributeNode("id");
                    return i && i.value === e;
                };
            }), E.find.TAG = P.getElementsByTagName ? function(t, i) {
                return typeof i.getElementsByTagName !== J ? i.getElementsByTagName(t) : e;
            } : function(t, e) {
                var i, n = [], s = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (;i = o[s++]; ) 1 === i.nodeType && n.push(i);
                    return n;
                }
                return o;
            }, E.find.CLASS = P.getElementsByClassName && function(t, i) {
                return typeof i.getElementsByClassName !== J && H ? i.getElementsByClassName(t) : e;
            }, j = [], F = [], (P.qsa = n(i.querySelectorAll)) && (r(function(t) {
                t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || F.push("\\[" + ce + "*(?:value|" + le + ")"), 
                t.querySelectorAll(":checked").length || F.push(":checked");
            }), r(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && F.push("[*^$]=" + ce + "*(?:''|\"\")"), 
                t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), 
                F.push(",.*:");
            })), (P.matchesSelector = n(B = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function(t) {
                P.disconnectedMatch = B.call(t, "div"), B.call(t, "[s!='']:x"), j.push("!=", de);
            }), F = F.length && RegExp(F.join("|")), j = j.length && RegExp(j.join("|")), z = n(O.contains) || O.compareDocumentPosition ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
            } : function(t, e) {
                if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                return !1;
            }, P.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(i.createElement("div"));
            }), Q = O.compareDocumentPosition ? function(t, e) {
                if (t === e) return K = !0, 0;
                var n = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
                return n ? 1 & n || !P.sortDetached && e.compareDocumentPosition(t) === n ? t === i || z(W, t) ? -1 : e === i || z(W, e) ? 1 : N ? ae.call(N, t) - ae.call(N, e) : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1;
            } : function(t, e) {
                var n, s = 0, o = t.parentNode, r = e.parentNode, a = [ t ], l = [ e ];
                if (t === e) return K = !0, 0;
                if (!o || !r) return t === i ? -1 : e === i ? 1 : o ? -1 : r ? 1 : N ? ae.call(N, t) - ae.call(N, e) : 0;
                if (o === r) return u(t, e);
                for (n = t; n = n.parentNode; ) a.unshift(n);
                for (n = e; n = n.parentNode; ) l.unshift(n);
                for (;a[s] === l[s]; ) s++;
                return s ? u(a[s], l[s]) : a[s] === W ? -1 : l[s] === W ? 1 : 0;
            }, i) : L;
        }, i.matches = function(t, e) {
            return i(t, null, null, e);
        }, i.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== L && R(t), e = e.replace(ye, "='$1']"), !(!P.matchesSelector || !H || j && j.test(e) || F && F.test(e))) try {
                var n = B.call(t, e);
                if (n || P.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n;
            } catch (s) {}
            return i(e, L, null, [ t ]).length > 0;
        }, i.contains = function(t, e) {
            return (t.ownerDocument || t) !== L && R(t), z(t, e);
        }, i.attr = function(t, i) {
            (t.ownerDocument || t) !== L && R(t);
            var n = E.attrHandle[i.toLowerCase()], s = n && te.call(E.attrHandle, i.toLowerCase()) ? n(t, i, !H) : e;
            return s === e ? P.attributes || !H ? t.getAttribute(i) : (s = t.getAttributeNode(i)) && s.specified ? s.value : null : s;
        }, i.error = function(t) {
            throw Error("Syntax error, unrecognized expression: " + t);
        }, i.uniqueSort = function(t) {
            var e, i = [], n = 0, s = 0;
            if (K = !P.detectDuplicates, N = !P.sortStable && t.slice(0), t.sort(Q), K) {
                for (;e = t[s++]; ) e === t[s] && (n = i.push(s));
                for (;n--; ) t.splice(i[n], 1);
            }
            return t;
        }, M = i.getText = function(t) {
            var e, i = "", n = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += M(t);
                } else if (3 === s || 4 === s) return t.nodeValue;
            } else for (;e = t[n]; n++) i += M(e);
            return i;
        }, E = i.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: _e,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(Pe, Se), t[3] = (t[4] || t[5] || "").replace(Pe, Se), "~=" === t[2] && (t[3] = " " + t[3] + " "), 
                    t.slice(0, 4);
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || i.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), 
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && i.error(t[0]), t;
                },
                PSEUDO: function(t) {
                    var i, n = !t[5] && t[2];
                    return _e.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : n && be.test(n) && (i = f(n, !0)) && (i = n.indexOf(")", n.length - i) - n.length) && (t[0] = t[0].slice(0, i), 
                    t[2] = n.slice(0, i)), t.slice(0, 3));
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(Pe, Se).toLowerCase();
                    return "*" === t ? function() {
                        return !0;
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
                },
                CLASS: function(t) {
                    var e = X[t + " "];
                    return e || (e = RegExp("(^|" + ce + ")" + t + "(" + ce + "|$)")) && X(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== J && t.getAttribute("class") || "");
                    });
                },
                ATTR: function(t, e, n) {
                    return function(s) {
                        var o = i.attr(s, t);
                        return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o + " ").indexOf(n) > -1 : "|=" === e ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0;
                    };
                },
                CHILD: function(t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode;
                    } : function(e, i, l) {
                        var c, h, u, p, d, g, f = o !== r ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                        if (m) {
                            if (o) {
                                for (;f; ) {
                                    for (u = e; u = u[f]; ) if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    g = f = "only" === t && !g && "nextSibling";
                                }
                                return !0;
                            }
                            if (g = [ r ? m.firstChild : m.lastChild ], r && y) {
                                for (h = m[U] || (m[U] = {}), c = h[t] || [], d = c[0] === q && c[1], p = c[0] === q && c[2], u = d && m.childNodes[d]; u = ++d && u && u[f] || (p = d = 0) || g.pop(); ) if (1 === u.nodeType && ++p && u === e) {
                                    h[t] = [ q, d, p ];
                                    break;
                                }
                            } else if (y && (c = (e[U] || (e[U] = {}))[t]) && c[0] === q) p = c[1]; else for (;(u = ++d && u && u[f] || (p = d = 0) || g.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++p || (y && ((u[U] || (u[U] = {}))[t] = [ q, p ]), 
                            u !== e)); ) ;
                            return p -= s, p === n || 0 === p % n && p / n >= 0;
                        }
                    };
                },
                PSEUDO: function(t, e) {
                    var n, s = E.pseudos[t] || E.setFilters[t.toLowerCase()] || i.error("unsupported pseudo: " + t);
                    return s[U] ? s(e) : s.length > 1 ? (n = [ t, t, "", e ], E.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function(t, i) {
                        for (var n, o = s(t, e), r = o.length; r--; ) n = ae.call(t, o[r]), t[n] = !(i[n] = o[r]);
                    }) : function(t) {
                        return s(t, 0, n);
                    }) : s;
                }
            },
            pseudos: {
                not: o(function(t) {
                    var e = [], i = [], n = D(t.replace(ge, "$1"));
                    return n[U] ? o(function(t, e, i, s) {
                        for (var o, r = n(t, null, s, []), a = t.length; a--; ) (o = r[a]) && (t[a] = !(e[a] = o));
                    }) : function(t, s, o) {
                        return e[0] = t, n(e, null, o, i), !i.pop();
                    };
                }),
                has: o(function(t) {
                    return function(e) {
                        return i(t, e).length > 0;
                    };
                }),
                contains: o(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || M(e)).indexOf(t) > -1;
                    };
                }),
                lang: o(function(t) {
                    return we.test(t || "") || i.error("unsupported lang: " + t), t = t.replace(Pe, Se).toLowerCase(), function(e) {
                        var i;
                        do if (i = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), 
                        i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id;
                },
                root: function(t) {
                    return t === O;
                },
                focus: function(t) {
                    return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                },
                enabled: function(t) {
                    return t.disabled === !1;
                },
                disabled: function(t) {
                    return t.disabled === !0;
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected;
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0;
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                    return !0;
                },
                parent: function(t) {
                    return !E.pseudos.empty(t);
                },
                header: function(t) {
                    return Ce.test(t.nodeName);
                },
                input: function(t) {
                    return $e.test(t.nodeName);
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e;
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type);
                },
                first: g(function() {
                    return [ 0 ];
                }),
                last: g(function(t, e) {
                    return [ e - 1 ];
                }),
                eq: g(function(t, e, i) {
                    return [ 0 > i ? i + e : i ];
                }),
                even: g(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t;
                }),
                odd: g(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t;
                }),
                lt: g(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
                    return t;
                }),
                gt: g(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; e > ++n; ) t.push(n);
                    return t;
                })
            }
        };
        for (T in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) E.pseudos[T] = p(T);
        for (T in {
            submit: !0,
            reset: !0
        }) E.pseudos[T] = d(T);
        D = i.compile = function(t, e) {
            var i, n = [], s = [], o = Y[t + " "];
            if (!o) {
                for (e || (e = f(t)), i = e.length; i--; ) o = _(e[i]), o[U] ? n.push(o) : s.push(o);
                o = Y(t, x(s, n));
            }
            return o;
        }, E.pseudos.nth = E.pseudos.eq, C.prototype = E.filters = E.pseudos, E.setFilters = new C(), P.sortStable = U.split("").sort(Q).join("") === U, 
        R(), [ 0, 0 ].sort(Q), P.detectDuplicates = K, oe.find = i, oe.expr = i.selectors, oe.expr[":"] = oe.expr.pseudos, 
        oe.unique = i.uniqueSort, oe.text = i.getText, oe.isXMLDoc = i.isXML, oe.contains = i.contains;
    }(t);
    var ge = {};
    oe.Callbacks = function(t) {
        t = "string" == typeof t ? ge[t] || n(t) : oe.extend({}, t);
        var i, s, o, r, a, l, c = [], h = !t.once && [], u = function(e) {
            for (i = t.memory && e, s = !0, l = r || 0, r = 0, a = c.length, o = !0; c && a > l; l++) if (c[l].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                i = !1;
                break;
            }
            o = !1, c && (h ? h.length && u(h.shift()) : i ? c = [] : p.disable());
        }, p = {
            add: function() {
                if (c) {
                    var e = c.length;
                    (function n(e) {
                        oe.each(e, function(e, i) {
                            var s = oe.type(i);
                            "function" === s ? t.unique && p.has(i) || c.push(i) : i && i.length && "string" !== s && n(i);
                        });
                    })(arguments), o ? a = c.length : i && (r = e, u(i));
                }
                return this;
            },
            remove: function() {
                return c && oe.each(arguments, function(t, e) {
                    for (var i; (i = oe.inArray(e, c, i)) > -1; ) c.splice(i, 1), o && (a >= i && a--, l >= i && l--);
                }), this;
            },
            has: function(t) {
                return t ? oe.inArray(t, c) > -1 : !(!c || !c.length);
            },
            empty: function() {
                return c = [], a = 0, this;
            },
            disable: function() {
                return c = h = i = e, this;
            },
            disabled: function() {
                return !c;
            },
            lock: function() {
                return h = e, i || p.disable(), this;
            },
            locked: function() {
                return !h;
            },
            fireWith: function(t, e) {
                return e = e || [], e = [ t, e.slice ? e.slice() : e ], !c || s && !h || (o ? h.push(e) : u(e)), this;
            },
            fire: function() {
                return p.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!s;
            }
        };
        return p;
    }, oe.extend({
        Deferred: function(t) {
            var e = [ [ "resolve", "done", oe.Callbacks("once memory"), "resolved" ], [ "reject", "fail", oe.Callbacks("once memory"), "rejected" ], [ "notify", "progress", oe.Callbacks("memory") ] ], i = "pending", n = {
                state: function() {
                    return i;
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var t = arguments;
                    return oe.Deferred(function(i) {
                        oe.each(e, function(e, o) {
                            var r = o[0], a = oe.isFunction(t[e]) && t[e];
                            s[o[1]](function() {
                                var t = a && a.apply(this, arguments);
                                t && oe.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r + "With"](this === n ? i.promise() : this, a ? [ t ] : arguments);
                            });
                        }), t = null;
                    }).promise();
                },
                promise: function(t) {
                    return null != t ? oe.extend(t, n) : n;
                }
            }, s = {};
            return n.pipe = n.then, oe.each(e, function(t, o) {
                var r = o[2], a = o[3];
                n[o[1]] = r.add, a && r.add(function() {
                    i = a;
                }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                    return s[o[0] + "With"](this === s ? n : this, arguments), this;
                }, s[o[0] + "With"] = r.fireWith;
            }), n.promise(s), t && t.call(s, s), s;
        },
        when: function(t) {
            var e, i, n, s = 0, o = te.call(arguments), r = o.length, a = 1 !== r || t && oe.isFunction(t.promise) ? r : 0, l = 1 === a ? t : oe.Deferred(), c = function(t, i, n) {
                return function(s) {
                    i[t] = this, n[t] = arguments.length > 1 ? te.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n);
                };
            };
            if (r > 1) for (e = Array(r), i = Array(r), n = Array(r); r > s; s++) o[s] && oe.isFunction(o[s].promise) ? o[s].promise().done(c(s, n, o)).fail(l.reject).progress(c(s, i, e)) : --a;
            return a || l.resolveWith(n, o), l.promise();
        }
    }), oe.support = function(e) {
        var i = q.createElement("input"), n = q.createDocumentFragment(), s = q.createElement("div"), o = q.createElement("select"), r = o.appendChild(q.createElement("option"));
        return i.type ? (i.type = "checkbox", e.checkOn = "" !== i.value, e.optSelected = r.selected, e.reliableMarginRight = !0, 
        e.boxSizingReliable = !0, e.pixelPosition = !1, i.checked = !0, e.noCloneChecked = i.cloneNode(!0).checked, 
        o.disabled = !0, e.optDisabled = !r.disabled, i = q.createElement("input"), i.value = "t", i.type = "radio", 
        e.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), n.appendChild(i), 
        e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, e.focusinBubbles = "onfocusin" in t, 
        s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === s.style.backgroundClip, 
        oe(function() {
            var i, n, o = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", r = q.getElementsByTagName("body")[0];
            r && (i = q.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            r.appendChild(i).appendChild(s), s.innerHTML = "", s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", 
            oe.swap(r, null != r.style.zoom ? {
                zoom: 1
            } : {}, function() {
                e.boxSizing = 4 === s.offsetWidth;
            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(s, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(s, null) || {
                width: "4px"
            }).width, n = s.appendChild(q.createElement("div")), n.style.cssText = s.style.cssText = o, n.style.marginRight = n.style.width = "0", 
            s.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(n, null) || {}).marginRight)), 
            r.removeChild(i));
        }), e) : e;
    }({});
    var fe, me, ve = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, ye = /([A-Z])/g;
    s.uid = 1, s.accepts = function(t) {
        return t.nodeType ? 1 === t.nodeType || 9 === t.nodeType : !0;
    }, s.prototype = {
        key: function(t) {
            if (!s.accepts(t)) return 0;
            var e = {}, i = t[this.expando];
            if (!i) {
                i = s.uid++;
                try {
                    e[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, e);
                } catch (n) {
                    e[this.expando] = i, oe.extend(t, e);
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i;
        },
        set: function(t, e, i) {
            var n, s = this.key(t), o = this.cache[s];
            if ("string" == typeof e) o[e] = i; else if (oe.isEmptyObject(o)) oe.extend(this.cache[s], e); else for (n in e) o[n] = e[n];
            return o;
        },
        get: function(t, i) {
            var n = this.cache[this.key(t)];
            return i === e ? n : n[i];
        },
        access: function(t, i, n) {
            return i === e || i && "string" == typeof i && n === e ? this.get(t, i) : (this.set(t, i, n), n !== e ? n : i);
        },
        remove: function(t, i) {
            var n, s, o, r = this.key(t), a = this.cache[r];
            if (i === e) this.cache[r] = {}; else {
                oe.isArray(i) ? s = i.concat(i.map(oe.camelCase)) : (o = oe.camelCase(i), i in a ? s = [ i, o ] : (s = o, 
                s = s in a ? [ s ] : s.match(ae) || [])), n = s.length;
                for (;n--; ) delete a[s[n]];
            }
        },
        hasData: function(t) {
            return !oe.isEmptyObject(this.cache[t[this.expando]] || {});
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]];
        }
    }, fe = new s(), me = new s(), oe.extend({
        acceptData: s.accepts,
        hasData: function(t) {
            return fe.hasData(t) || me.hasData(t);
        },
        data: function(t, e, i) {
            return fe.access(t, e, i);
        },
        removeData: function(t, e) {
            fe.remove(t, e);
        },
        _data: function(t, e, i) {
            return me.access(t, e, i);
        },
        _removeData: function(t, e) {
            me.remove(t, e);
        }
    }), oe.fn.extend({
        data: function(t, i) {
            var n, s, r = this[0], a = 0, l = null;
            if (t === e) {
                if (this.length && (l = fe.get(r), 1 === r.nodeType && !me.get(r, "hasDataAttrs"))) {
                    for (n = r.attributes; n.length > a; a++) s = n[a].name, 0 === s.indexOf("data-") && (s = oe.camelCase(s.slice(5)), 
                    o(r, s, l[s]));
                    me.set(r, "hasDataAttrs", !0);
                }
                return l;
            }
            return "object" == typeof t ? this.each(function() {
                fe.set(this, t);
            }) : oe.access(this, function(i) {
                var n, s = oe.camelCase(t);
                if (r && i === e) {
                    if (n = fe.get(r, t), n !== e) return n;
                    if (n = fe.get(r, s), n !== e) return n;
                    if (n = o(r, s, e), n !== e) return n;
                } else this.each(function() {
                    var n = fe.get(this, s);
                    fe.set(this, s, i), -1 !== t.indexOf("-") && n !== e && fe.set(this, t, i);
                });
            }, null, i, arguments.length > 1, null, !0);
        },
        removeData: function(t) {
            return this.each(function() {
                fe.remove(this, t);
            });
        }
    }), oe.extend({
        queue: function(t, i, n) {
            var s;
            return t ? (i = (i || "fx") + "queue", s = me.get(t, i), n && (!s || oe.isArray(n) ? s = me.access(t, i, oe.makeArray(n)) : s.push(n)), 
            s || []) : e;
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = oe.queue(t, e), n = i.length, s = i.shift(), o = oe._queueHooks(t, e), r = function() {
                oe.dequeue(t, e);
            };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, 
            s.call(t, r, o)), !n && o && o.empty.fire();
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return me.get(t, i) || me.access(t, i, {
                empty: oe.Callbacks("once memory").add(function() {
                    me.remove(t, [ e + "queue", i ]);
                })
            });
        }
    }), oe.fn.extend({
        queue: function(t, i) {
            var n = 2;
            return "string" != typeof t && (i = t, t = "fx", n--), n > arguments.length ? oe.queue(this[0], t) : i === e ? this : this.each(function() {
                var e = oe.queue(this, t, i);
                oe._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && oe.dequeue(this, t);
            });
        },
        dequeue: function(t) {
            return this.each(function() {
                oe.dequeue(this, t);
            });
        },
        delay: function(t, e) {
            return t = oe.fx ? oe.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n);
                };
            });
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", []);
        },
        promise: function(t, i) {
            var n, s = 1, o = oe.Deferred(), r = this, a = this.length, l = function() {
                --s || o.resolveWith(r, [ r ]);
            };
            for ("string" != typeof t && (i = t, t = e), t = t || "fx"; a--; ) n = me.get(r[a], t + "queueHooks"), 
            n && n.empty && (s++, n.empty.add(l));
            return l(), o.promise(i);
        }
    });
    var be, we, _e = /[\t\r\n\f]/g, xe = /\r/g, ke = /^(?:input|select|textarea|button)$/i;
    oe.fn.extend({
        attr: function(t, e) {
            return oe.access(this, oe.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
            return this.each(function() {
                oe.removeAttr(this, t);
            });
        },
        prop: function(t, e) {
            return oe.access(this, oe.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[oe.propFix[t] || t];
            });
        },
        addClass: function(t) {
            var e, i, n, s, o, r = 0, a = this.length, l = "string" == typeof t && t;
            if (oe.isFunction(t)) return this.each(function(e) {
                oe(this).addClass(t.call(this, e, this.className));
            });
            if (l) for (e = (t || "").match(ae) || []; a > r; r++) if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(_e, " ") : " ")) {
                for (o = 0; s = e[o++]; ) 0 > n.indexOf(" " + s + " ") && (n += s + " ");
                i.className = oe.trim(n);
            }
            return this;
        },
        removeClass: function(t) {
            var e, i, n, s, o, r = 0, a = this.length, l = 0 === arguments.length || "string" == typeof t && t;
            if (oe.isFunction(t)) return this.each(function(e) {
                oe(this).removeClass(t.call(this, e, this.className));
            });
            if (l) for (e = (t || "").match(ae) || []; a > r; r++) if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(_e, " ") : "")) {
                for (o = 0; s = e[o++]; ) for (;n.indexOf(" " + s + " ") >= 0; ) n = n.replace(" " + s + " ", " ");
                i.className = t ? oe.trim(n) : "";
            }
            return this;
        },
        toggleClass: function(t, e) {
            var i = typeof t, n = "boolean" == typeof e;
            return oe.isFunction(t) ? this.each(function(i) {
                oe(this).toggleClass(t.call(this, i, this.className, e), e);
            }) : this.each(function() {
                if ("string" === i) for (var s, o = 0, r = oe(this), a = e, l = t.match(ae) || []; s = l[o++]; ) a = n ? a : !r.hasClass(s), 
                r[a ? "addClass" : "removeClass"](s); else (i === U || "boolean" === i) && (this.className && me.set(this, "__className__", this.className), 
                this.className = this.className || t === !1 ? "" : me.get(this, "__className__") || "");
            });
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(_e, " ").indexOf(e) >= 0) return !0;
            return !1;
        },
        val: function(t) {
            var i, n, s, o = this[0];
            return arguments.length ? (s = oe.isFunction(t), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = s ? t.call(this, n, oe(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function(t) {
                    return null == t ? "" : t + "";
                })), i = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== e || (this.value = o));
            })) : o ? (i = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== e ? n : (n = o.value, 
            "string" == typeof n ? n.replace(xe, "") : null == n ? "" : n)) : e;
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text;
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : n.length, l = 0 > s ? a : o ? s : 0; a > l; l++) if (i = n[l], 
                    !(!i.selected && l !== s || (oe.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && oe.nodeName(i.parentNode, "optgroup"))) {
                        if (e = oe(i).val(), o) return e;
                        r.push(e);
                    }
                    return r;
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = oe.makeArray(e), r = s.length; r--; ) n = s[r], (n.selected = oe.inArray(oe(n).val(), o) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1), o;
                }
            }
        },
        attr: function(t, i, n) {
            var s, o, r = t.nodeType;
            return t && 3 !== r && 8 !== r && 2 !== r ? typeof t.getAttribute === U ? oe.prop(t, i, n) : (1 === r && oe.isXMLDoc(t) || (i = i.toLowerCase(), 
            s = oe.attrHooks[i] || (oe.expr.match.bool.test(i) ? we : be)), n === e ? s && "get" in s && null !== (o = s.get(t, i)) ? o : (o = oe.find.attr(t, i), 
            null == o ? e : o) : null !== n ? s && "set" in s && (o = s.set(t, n, i)) !== e ? o : (t.setAttribute(i, n + ""), 
            n) : (oe.removeAttr(t, i), e)) : e;
        },
        removeAttr: function(t, e) {
            var i, n, s = 0, o = e && e.match(ae);
            if (o && 1 === t.nodeType) for (;i = o[s++]; ) n = oe.propFix[i] || i, oe.expr.match.bool.test(i) && (t[n] = !1), 
            t.removeAttribute(i);
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!oe.support.radioValue && "radio" === e && oe.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, i, n) {
            var s, o, r, a = t.nodeType;
            return t && 3 !== a && 8 !== a && 2 !== a ? (r = 1 !== a || !oe.isXMLDoc(t), r && (i = oe.propFix[i] || i, 
            o = oe.propHooks[i]), n !== e ? o && "set" in o && (s = o.set(t, n, i)) !== e ? s : t[i] = n : o && "get" in o && null !== (s = o.get(t, i)) ? s : t[i]) : e;
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || ke.test(t.nodeName) || t.href ? t.tabIndex : -1;
                }
            }
        }
    }), we = {
        set: function(t, e, i) {
            return e === !1 ? oe.removeAttr(t, i) : t.setAttribute(i, i), i;
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(t, i) {
        var n = oe.expr.attrHandle[i] || oe.find.attr;
        oe.expr.attrHandle[i] = function(t, i, s) {
            var o = oe.expr.attrHandle[i], r = s ? e : (oe.expr.attrHandle[i] = e) != n(t, i, s) ? i.toLowerCase() : null;
            return oe.expr.attrHandle[i] = o, r;
        };
    }), oe.support.optSelected || (oe.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
        }
    }), oe.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        oe.propFix[this.toLowerCase()] = this;
    }), oe.each([ "radio", "checkbox" ], function() {
        oe.valHooks[this] = {
            set: function(t, i) {
                return oe.isArray(i) ? t.checked = oe.inArray(oe(t).val(), i) >= 0 : e;
            }
        }, oe.support.checkOn || (oe.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value;
        });
    });
    var $e = /^key/, Ce = /^(?:mouse|contextmenu)|click/, Te = /^(?:focusinfocus|focusoutblur)$/, Pe = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function(t, i, n, s, o) {
            var r, a, l, c, h, u, p, d, g, f, m, v = me.get(t);
            if (v) {
                for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = oe.guid++), (c = v.events) || (c = v.events = {}), 
                (a = v.handle) || (a = v.handle = function(t) {
                    return typeof oe === U || t && oe.event.triggered === t.type ? e : oe.event.dispatch.apply(a.elem, arguments);
                }, a.elem = t), i = (i || "").match(ae) || [ "" ], h = i.length; h--; ) l = Pe.exec(i[h]) || [], g = m = l[1], 
                f = (l[2] || "").split(".").sort(), g && (p = oe.event.special[g] || {}, g = (o ? p.delegateType : p.bindType) || g, 
                p = oe.event.special[g] || {}, u = oe.extend({
                    type: g,
                    origType: m,
                    data: s,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, r), (d = c[g]) || (d = c[g] = [], d.delegateCount = 0, p.setup && p.setup.call(t, s, f, a) !== !1 || t.addEventListener && t.addEventListener(g, a, !1)), 
                p.add && (p.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), 
                oe.event.global[g] = !0);
                t = null;
            }
        },
        remove: function(t, e, i, n, s) {
            var o, r, a, l, c, h, u, p, d, g, f, m = me.hasData(t) && me.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(ae) || [ "" ], c = e.length; c--; ) if (a = Pe.exec(e[c]) || [], d = f = a[1], 
                g = (a[2] || "").split(".").sort(), d) {
                    for (u = oe.event.special[d] || {}, d = (n ? u.delegateType : u.bindType) || d, p = l[d] || [], a = a[2] && RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    r = o = p.length; o--; ) h = p[o], !s && f !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (p.splice(o, 1), 
                    h.selector && p.delegateCount--, u.remove && u.remove.call(t, h));
                    r && !p.length && (u.teardown && u.teardown.call(t, g, m.handle) !== !1 || oe.removeEvent(t, d, m.handle), 
                    delete l[d]);
                } else for (d in l) oe.event.remove(t, d + e[c], i, n, !0);
                oe.isEmptyObject(l) && (delete m.handle, me.remove(t, "events"));
            }
        },
        trigger: function(i, n, s, o) {
            var r, a, l, c, h, u, p, d = [ s || q ], g = ne.call(i, "type") ? i.type : i, f = ne.call(i, "namespace") ? i.namespace.split(".") : [];
            if (a = l = s = s || q, 3 !== s.nodeType && 8 !== s.nodeType && !Te.test(g + oe.event.triggered) && (g.indexOf(".") >= 0 && (f = g.split("."), 
            g = f.shift(), f.sort()), h = 0 > g.indexOf(":") && "on" + g, i = i[oe.expando] ? i : new oe.Event(g, "object" == typeof i && i), 
            i.isTrigger = o ? 2 : 3, i.namespace = f.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            i.result = e, i.target || (i.target = s), n = null == n ? [ i ] : oe.makeArray(n, [ i ]), p = oe.event.special[g] || {}, 
            o || !p.trigger || p.trigger.apply(s, n) !== !1)) {
                if (!o && !p.noBubble && !oe.isWindow(s)) {
                    for (c = p.delegateType || g, Te.test(c + g) || (a = a.parentNode); a; a = a.parentNode) d.push(a), 
                    l = a;
                    l === (s.ownerDocument || q) && d.push(l.defaultView || l.parentWindow || t);
                }
                for (r = 0; (a = d[r++]) && !i.isPropagationStopped(); ) i.type = r > 1 ? c : p.bindType || g, u = (me.get(a, "events") || {})[i.type] && me.get(a, "handle"), 
                u && u.apply(a, n), u = h && a[h], u && oe.acceptData(a) && u.apply && u.apply(a, n) === !1 && i.preventDefault();
                return i.type = g, o || i.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !oe.acceptData(s) || h && oe.isFunction(s[g]) && !oe.isWindow(s) && (l = s[h], 
                l && (s[h] = null), oe.event.triggered = g, s[g](), oe.event.triggered = e, l && (s[h] = l)), i.result;
            }
        },
        dispatch: function(t) {
            t = oe.event.fix(t);
            var i, n, s, o, r, a = [], l = te.call(arguments), c = (me.get(this, "events") || {})[t.type] || [], h = oe.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                for (a = oe.event.handlers.call(this, t, c), i = 0; (o = a[i++]) && !t.isPropagationStopped(); ) for (t.currentTarget = o.elem, 
                n = 0; (r = o.handlers[n++]) && !t.isImmediatePropagationStopped(); ) (!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, 
                t.data = r.data, s = ((oe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), s !== e && (t.result = s) === !1 && (t.preventDefault(), 
                t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function(t, i) {
            var n, s, o, r, a = [], l = i.delegateCount, c = t.target;
            if (l && c.nodeType && (!t.button || "click" !== t.type)) for (;c !== this; c = c.parentNode || this) if (c.disabled !== !0 || "click" !== t.type) {
                for (s = [], n = 0; l > n; n++) r = i[n], o = r.selector + " ", s[o] === e && (s[o] = r.needsContext ? oe(o, this).index(c) >= 0 : oe.find(o, this, null, [ c ]).length), 
                s[o] && s.push(r);
                s.length && a.push({
                    elem: c,
                    handlers: s
                });
            }
            return i.length > l && a.push({
                elem: this,
                handlers: i.slice(l)
            }), a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, i) {
                var n, s, o, r = i.button;
                return null == t.pageX && null != i.clientX && (n = t.target.ownerDocument || q, s = n.documentElement, 
                o = n.body, t.pageX = i.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), 
                t.pageY = i.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), 
                t.which || r === e || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t;
            }
        },
        fix: function(t) {
            if (t[oe.expando]) return t;
            var e, i, n, s = t.type, o = t, r = this.fixHooks[s];
            for (r || (this.fixHooks[s] = r = Ce.test(s) ? this.mouseHooks : $e.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, 
            t = new oe.Event(o), e = n.length; e--; ) i = n[e], t[i] = o[i];
            return t.target || (t.target = q), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, o) : t;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : e;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : e;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : e;
                },
                _default: function(t) {
                    return oe.nodeName(t.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result);
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = oe.extend(new oe.Event(), i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? oe.event.trigger(s, null, e) : oe.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault();
        }
    }, oe.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1);
    }, oe.Event = function(t, i) {
        return this instanceof oe.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.getPreventDefault && t.getPreventDefault() ? r : a) : this.type = t, 
        i && oe.extend(this, i), this.timeStamp = t && t.timeStamp || oe.now(), this[oe.expando] = !0, e) : new oe.Event(t, i);
    }, oe.Event.prototype = {
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = r, t && t.preventDefault && t.preventDefault();
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = r, t && t.stopPropagation && t.stopPropagation();
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = r, this.stopPropagation();
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        oe.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this, s = t.relatedTarget, o = t.handleObj;
                return (!s || s !== n && !oe.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), 
                t.type = e), i;
            }
        };
    }), oe.support.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = 0, n = function(t) {
            oe.event.simulate(e, t.target, oe.event.fix(t), !0);
        };
        oe.event.special[e] = {
            setup: function() {
                0 === i++ && q.addEventListener(t, n, !0);
            },
            teardown: function() {
                0 === --i && q.removeEventListener(t, n, !0);
            }
        };
    }), oe.fn.extend({
        on: function(t, i, n, s, o) {
            var r, l;
            if ("object" == typeof t) {
                "string" != typeof i && (n = n || i, i = e);
                for (l in t) this.on(l, i, n, t[l], o);
                return this;
            }
            if (null == n && null == s ? (s = i, n = i = e) : null == s && ("string" == typeof i ? (s = n, n = e) : (s = n, 
            n = i, i = e)), s === !1) s = a; else if (!s) return this;
            return 1 === o && (r = s, s = function(t) {
                return oe().off(t), r.apply(this, arguments);
            }, s.guid = r.guid || (r.guid = oe.guid++)), this.each(function() {
                oe.event.add(this, t, s, n, i);
            });
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1);
        },
        off: function(t, i, n) {
            var s, o;
            if (t && t.preventDefault && t.handleObj) return s = t.handleObj, oe(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), 
            this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, i, t[o]);
                return this;
            }
            return (i === !1 || "function" == typeof i) && (n = i, i = e), n === !1 && (n = a), this.each(function() {
                oe.event.remove(this, t, n, i);
            });
        },
        trigger: function(t, e) {
            return this.each(function() {
                oe.event.trigger(t, e, this);
            });
        },
        triggerHandler: function(t, i) {
            var n = this[0];
            return n ? oe.event.trigger(t, i, n, !0) : e;
        }
    });
    var Se = /^.[^:#\[\.,]*$/, Ee = /^(?:parents|prev(?:Until|All))/, Me = oe.expr.match.needsContext, Ie = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    oe.fn.extend({
        find: function(t) {
            var e, i = [], n = this, s = n.length;
            if ("string" != typeof t) return this.pushStack(oe(t).filter(function() {
                for (e = 0; s > e; e++) if (oe.contains(n[e], this)) return !0;
            }));
            for (e = 0; s > e; e++) oe.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, 
            i;
        },
        has: function(t) {
            var e = oe(t, this), i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++) if (oe.contains(this, e[t])) return !0;
            });
        },
        not: function(t) {
            return this.pushStack(h(this, t || [], !0));
        },
        filter: function(t) {
            return this.pushStack(h(this, t || [], !1));
        },
        is: function(t) {
            return !!h(this, "string" == typeof t && Me.test(t) ? oe(t) : t || [], !1).length;
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, o = [], r = Me.test(t) || "string" != typeof t ? oe(t, e || this.context) : 0; s > n; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (11 > i.nodeType && (r ? r.index(i) > -1 : 1 === i.nodeType && oe.find.matchesSelector(i, t))) {
                i = o.push(i);
                break;
            }
            return this.pushStack(o.length > 1 ? oe.unique(o) : o);
        },
        index: function(t) {
            return t ? "string" == typeof t ? ee.call(oe(t), this[0]) : ee.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(t, e) {
            var i = "string" == typeof t ? oe(t, e) : oe.makeArray(t && t.nodeType ? [ t ] : t), n = oe.merge(this.get(), i);
            return this.pushStack(oe.unique(n));
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }
    }), oe.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
            return oe.dir(t, "parentNode");
        },
        parentsUntil: function(t, e, i) {
            return oe.dir(t, "parentNode", i);
        },
        next: function(t) {
            return c(t, "nextSibling");
        },
        prev: function(t) {
            return c(t, "previousSibling");
        },
        nextAll: function(t) {
            return oe.dir(t, "nextSibling");
        },
        prevAll: function(t) {
            return oe.dir(t, "previousSibling");
        },
        nextUntil: function(t, e, i) {
            return oe.dir(t, "nextSibling", i);
        },
        prevUntil: function(t, e, i) {
            return oe.dir(t, "previousSibling", i);
        },
        siblings: function(t) {
            return oe.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
            return oe.sibling(t.firstChild);
        },
        contents: function(t) {
            return t.contentDocument || oe.merge([], t.childNodes);
        }
    }, function(t, e) {
        oe.fn[t] = function(i, n) {
            var s = oe.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = oe.filter(n, s)), this.length > 1 && (Ie[t] || oe.unique(s), 
            Ee.test(t) && s.reverse()), this.pushStack(s);
        };
    }), oe.extend({
        filter: function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? oe.find.matchesSelector(n, t) ? [ n ] : [] : oe.find.matches(t, oe.grep(e, function(t) {
                return 1 === t.nodeType;
            }));
        },
        dir: function(t, i, n) {
            for (var s = [], o = n !== e; (t = t[i]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
                if (o && oe(t).is(n)) break;
                s.push(t);
            }
            return s;
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i;
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ae = /<([\w:]+)/, Ne = /<|&#?\w+;/, Re = /<(?:script|style|link)/i, Le = /^(?:checkbox|radio)$/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i, He = /^$|\/(?:java|ecma)script/i, Fe = /^true\/(.*)/, je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Be = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td, oe.fn.extend({
        text: function(t) {
            return oe.access(this, function(t) {
                return t === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(t));
            }, null, t, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = u(this, t);
                    e.appendChild(t);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = u(this, t);
                    e.insertBefore(t, e.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
            });
        },
        remove: function(t, e) {
            for (var i, n = t ? oe.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || oe.cleanData(m(i)), 
            i.parentNode && (e && oe.contains(i.ownerDocument, i) && g(m(i, "script")), i.parentNode.removeChild(i));
            return this;
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (oe.cleanData(m(t, !1)), t.textContent = "");
            return this;
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return oe.clone(this, t, e);
            });
        },
        html: function(t) {
            return oe.access(this, function(t) {
                var i = this[0] || {}, n = 0, s = this.length;
                if (t === e && 1 === i.nodeType) return i.innerHTML;
                if ("string" == typeof t && !Re.test(t) && !Be[(Ae.exec(t) || [ "", "" ])[1].toLowerCase()]) {
                    t = t.replace(De, "<$1></$2>");
                    try {
                        for (;s > n; n++) i = this[n] || {}, 1 === i.nodeType && (oe.cleanData(m(i, !1)), i.innerHTML = t);
                        i = 0;
                    } catch (o) {}
                }
                i && this.empty().append(t);
            }, null, t, arguments.length);
        },
        replaceWith: function() {
            var t = oe.map(this, function(t) {
                return [ t.nextSibling, t.parentNode ];
            }), e = 0;
            return this.domManip(arguments, function(i) {
                var n = t[e++], s = t[e++];
                s && (n && n.parentNode !== s && (n = this.nextSibling), oe(this).remove(), s.insertBefore(i, n));
            }, !0), e ? this : this.remove();
        },
        detach: function(t) {
            return this.remove(t, !0);
        },
        domManip: function(t, e, i) {
            t = J.apply([], t);
            var n, s, o, r, a, l, c = 0, h = this.length, u = this, g = h - 1, f = t[0], v = oe.isFunction(f);
            if (v || !(1 >= h || "string" != typeof f || oe.support.checkClone) && Oe.test(f)) return this.each(function(n) {
                var s = u.eq(n);
                v && (t[0] = f.call(this, n, s.html())), s.domManip(t, e, i);
            });
            if (h && (n = oe.buildFragment(t, this[0].ownerDocument, !1, !i && this), s = n.firstChild, 1 === n.childNodes.length && (n = s), 
            s)) {
                for (o = oe.map(m(n, "script"), p), r = o.length; h > c; c++) a = n, c !== g && (a = oe.clone(a, !0, !0), 
                r && oe.merge(o, m(a, "script"))), e.call(this[c], a, c);
                if (r) for (l = o[o.length - 1].ownerDocument, oe.map(o, d), c = 0; r > c; c++) a = o[c], He.test(a.type || "") && !me.access(a, "globalEval") && oe.contains(l, a) && (a.src ? oe._evalUrl(a.src) : oe.globalEval(a.textContent.replace(je, "")));
            }
            return this;
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        oe.fn[t] = function(t) {
            for (var i, n = [], s = oe(t), o = s.length - 1, r = 0; o >= r; r++) i = r === o ? this : this.clone(!0), 
            oe(s[r])[e](i), Z.apply(n, i.get());
            return this.pushStack(n);
        };
    }), oe.extend({
        clone: function(t, e, i) {
            var n, s, o, r, a = t.cloneNode(!0), l = oe.contains(t.ownerDocument, t);
            if (!(oe.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || oe.isXMLDoc(t))) for (r = m(a), 
            o = m(t), n = 0, s = o.length; s > n; n++) v(o[n], r[n]);
            if (e) if (i) for (o = o || m(t), r = r || m(a), n = 0, s = o.length; s > n; n++) f(o[n], r[n]); else f(t, a);
            return r = m(a, "script"), r.length > 0 && g(r, !l && m(t, "script")), a;
        },
        buildFragment: function(t, e, i, n) {
            for (var s, o, r, a, l, c, h = 0, u = t.length, p = e.createDocumentFragment(), d = []; u > h; h++) if (s = t[h], 
            s || 0 === s) if ("object" === oe.type(s)) oe.merge(d, s.nodeType ? [ s ] : s); else if (Ne.test(s)) {
                for (o = o || p.appendChild(e.createElement("div")), r = (Ae.exec(s) || [ "", "" ])[1].toLowerCase(), 
                a = Be[r] || Be._default, o.innerHTML = a[1] + s.replace(De, "<$1></$2>") + a[2], c = a[0]; c--; ) o = o.firstChild;
                oe.merge(d, o.childNodes), o = p.firstChild, o.textContent = "";
            } else d.push(e.createTextNode(s));
            for (p.textContent = "", h = 0; s = d[h++]; ) if ((!n || -1 === oe.inArray(s, n)) && (l = oe.contains(s.ownerDocument, s), 
            o = m(p.appendChild(s), "script"), l && g(o), i)) for (c = 0; s = o[c++]; ) He.test(s.type || "") && i.push(s);
            return p;
        },
        cleanData: function(t) {
            for (var i, n, o, r, a, l, c = oe.event.special, h = 0; (n = t[h]) !== e; h++) {
                if (s.accepts(n) && (a = n[me.expando], a && (i = me.cache[a]))) {
                    if (o = Object.keys(i.events || {}), o.length) for (l = 0; (r = o[l]) !== e; l++) c[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, i.handle);
                    me.cache[a] && delete me.cache[a];
                }
                delete fe.cache[n[fe.expando]];
            }
        },
        _evalUrl: function(t) {
            return oe.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), oe.fn.extend({
        wrapAll: function(t) {
            var e;
            return oe.isFunction(t) ? this.each(function(e) {
                oe(this).wrapAll(t.call(this, e));
            }) : (this[0] && (e = oe(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), 
            e.map(function() {
                for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                return t;
            }).append(this)), this);
        },
        wrapInner: function(t) {
            return oe.isFunction(t) ? this.each(function(e) {
                oe(this).wrapInner(t.call(this, e));
            }) : this.each(function() {
                var e = oe(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
            });
        },
        wrap: function(t) {
            var e = oe.isFunction(t);
            return this.each(function(i) {
                oe(this).wrapAll(e ? t.call(this, i) : t);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var ze, Ue, We = /^(none|table(?!-c[ea]).+)/, qe = /^margin/, Ve = RegExp("^(" + re + ")(.*)$", "i"), Xe = RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), Ge = RegExp("^([+-])=(" + re + ")", "i"), Ye = {
        BODY: "block"
    }, Ke = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Qe = {
        letterSpacing: 0,
        fontWeight: 400
    }, Je = [ "Top", "Right", "Bottom", "Left" ], Ze = [ "Webkit", "O", "Moz", "ms" ];
    oe.fn.extend({
        css: function(t, i) {
            return oe.access(this, function(t, i, n) {
                var s, o, r = {}, a = 0;
                if (oe.isArray(i)) {
                    for (s = w(t), o = i.length; o > a; a++) r[i[a]] = oe.css(t, i[a], !1, s);
                    return r;
                }
                return n !== e ? oe.style(t, i, n) : oe.css(t, i);
            }, t, i, arguments.length > 1);
        },
        show: function() {
            return _(this, !0);
        },
        hide: function() {
            return _(this);
        },
        toggle: function(t) {
            var e = "boolean" == typeof t;
            return this.each(function() {
                (e ? t : b(this)) ? oe(this).show() : oe(this).hide();
            });
        }
    }), oe.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = ze(t, "opacity");
                        return "" === i ? "1" : i;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, i, n, s) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, a, l = oe.camelCase(i), c = t.style;
                return i = oe.cssProps[l] || (oe.cssProps[l] = y(c, l)), a = oe.cssHooks[i] || oe.cssHooks[l], n === e ? a && "get" in a && (o = a.get(t, !1, s)) !== e ? o : c[i] : (r = typeof n, 
                "string" === r && (o = Ge.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(t, i)), r = "number"), 
                null == n || "number" === r && isNaN(n) || ("number" !== r || oe.cssNumber[l] || (n += "px"), oe.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (c[i] = "inherit"), 
                a && "set" in a && (n = a.set(t, n, s)) === e || (c[i] = n)), e);
            }
        },
        css: function(t, i, n, s) {
            var o, r, a, l = oe.camelCase(i);
            return i = oe.cssProps[l] || (oe.cssProps[l] = y(t.style, l)), a = oe.cssHooks[i] || oe.cssHooks[l], 
            a && "get" in a && (o = a.get(t, !0, n)), o === e && (o = ze(t, i, s)), "normal" === o && i in Qe && (o = Qe[i]), 
            "" === n || n ? (r = parseFloat(o), n === !0 || oe.isNumeric(r) ? r || 0 : o) : o;
        }
    }), ze = function(t, i, n) {
        var s, o, r, a = n || w(t), l = a ? a.getPropertyValue(i) || a[i] : e, c = t.style;
        return a && ("" !== l || oe.contains(t.ownerDocument, t) || (l = oe.style(t, i)), Xe.test(l) && qe.test(i) && (s = c.width, 
        o = c.minWidth, r = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = s, c.minWidth = o, 
        c.maxWidth = r)), l;
    }, oe.each([ "height", "width" ], function(t, i) {
        oe.cssHooks[i] = {
            get: function(t, n, s) {
                return n ? 0 === t.offsetWidth && We.test(oe.css(t, "display")) ? oe.swap(t, Ke, function() {
                    return $(t, i, s);
                }) : $(t, i, s) : e;
            },
            set: function(t, e, n) {
                var s = n && w(t);
                return x(t, e, n ? k(t, i, n, oe.support.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, s), s) : 0);
            }
        };
    }), oe(function() {
        oe.support.reliableMarginRight || (oe.cssHooks.marginRight = {
            get: function(t, i) {
                return i ? oe.swap(t, {
                    display: "inline-block"
                }, ze, [ t, "marginRight" ]) : e;
            }
        }), !oe.support.pixelPosition && oe.fn.position && oe.each([ "top", "left" ], function(t, i) {
            oe.cssHooks[i] = {
                get: function(t, n) {
                    return n ? (n = ze(t, i), Xe.test(n) ? oe(t).position()[i] + "px" : n) : e;
                }
            };
        });
    }), oe.expr && oe.expr.filters && (oe.expr.filters.hidden = function(t) {
        return 0 >= t.offsetWidth && 0 >= t.offsetHeight;
    }, oe.expr.filters.visible = function(t) {
        return !oe.expr.filters.hidden(t);
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        oe.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [ i ]; 4 > n; n++) s[t + Je[n] + e] = o[n] || o[n - 2] || o[0];
                return s;
            }
        }, qe.test(t) || (oe.cssHooks[t + e].set = x);
    });
    var ti = /%20/g, ei = /\[\]$/, ii = /\r?\n/g, ni = /^(?:submit|button|image|reset|file)$/i, si = /^(?:input|select|textarea|keygen)/i;
    oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var t = oe.prop(this, "elements");
                return t ? oe.makeArray(t) : this;
            }).filter(function() {
                var t = this.type;
                return this.name && !oe(this).is(":disabled") && si.test(this.nodeName) && !ni.test(t) && (this.checked || !Le.test(t));
            }).map(function(t, e) {
                var i = oe(this).val();
                return null == i ? null : oe.isArray(i) ? oe.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ii, "\r\n")
                    };
                }) : {
                    name: e.name,
                    value: i.replace(ii, "\r\n")
                };
            }).get();
        }
    }), oe.param = function(t, i) {
        var n, s = [], o = function(t, e) {
            e = oe.isFunction(e) ? e() : null == e ? "" : e, s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e);
        };
        if (i === e && (i = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(t) || t.jquery && !oe.isPlainObject(t)) oe.each(t, function() {
            o(this.name, this.value);
        }); else for (n in t) P(n, t[n], i, o);
        return s.join("&").replace(ti, "+");
    }, oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        oe.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
        };
    }), oe.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i);
        },
        unbind: function(t, e) {
            return this.off(t, null, e);
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n);
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
        }
    });
    var oi, ri, ai = oe.now(), li = /\?/, ci = /#.*$/, hi = /([?&])_=[^&]*/, ui = /^(.*?):[ \t]*([^\r\n]*)$/gm, pi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, di = /^(?:GET|HEAD)$/, gi = /^\/\//, fi = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, mi = oe.fn.load, vi = {}, yi = {}, bi = "*/".concat("*");
    try {
        ri = W.href;
    } catch (wi) {
        ri = q.createElement("a"), ri.href = "", ri = ri.href;
    }
    oi = fi.exec(ri.toLowerCase()) || [], oe.fn.load = function(t, i, n) {
        if ("string" != typeof t && mi) return mi.apply(this, arguments);
        var s, o, r, a = this, l = t.indexOf(" ");
        return l >= 0 && (s = t.slice(l), t = t.slice(0, l)), oe.isFunction(i) ? (n = i, i = e) : i && "object" == typeof i && (o = "POST"), 
        a.length > 0 && oe.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: i
        }).done(function(t) {
            r = arguments, a.html(s ? oe("<div>").append(oe.parseHTML(t)).find(s) : t);
        }).complete(n && function(t, e) {
            a.each(n, r || [ t.responseText, e, t ]);
        }), this;
    }, oe.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
        oe.fn[e] = function(t) {
            return this.on(e, t);
        };
    }), oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ri,
            type: "GET",
            isLocal: pi.test(oi[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? M(M(t, oe.ajaxSettings), e) : M(oe.ajaxSettings, t);
        },
        ajaxPrefilter: S(vi),
        ajaxTransport: S(yi),
        ajax: function(t, i) {
            function n(t, i, n, a) {
                var c, u, y, b, _, k = i;
                2 !== w && (w = 2, l && clearTimeout(l), s = e, r = a || "", x.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, 
                n && (b = I(p, x, n)), b = D(p, b, x, c), c ? (p.ifModified && (_ = x.getResponseHeader("Last-Modified"), 
                _ && (oe.lastModified[o] = _), _ = x.getResponseHeader("etag"), _ && (oe.etag[o] = _)), 204 === t || "HEAD" === p.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, 
                u = b.data, y = b.error, c = !y)) : (y = k, (t || !k) && (k = "error", 0 > t && (t = 0))), x.status = t, 
                x.statusText = (i || k) + "", c ? f.resolveWith(d, [ u, k, x ]) : f.rejectWith(d, [ x, k, y ]), x.statusCode(v), 
                v = e, h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [ x, p, c ? u : y ]), m.fireWith(d, [ x, k ]), 
                h && (g.trigger("ajaxComplete", [ x, p ]), --oe.active || oe.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (i = t, t = e), i = i || {};
            var s, o, r, a, l, c, h, u, p = oe.ajaxSetup({}, i), d = p.context || p, g = p.context && (d.nodeType || d.jquery) ? oe(d) : oe.event, f = oe.Deferred(), m = oe.Callbacks("once memory"), v = p.statusCode || {}, y = {}, b = {}, w = 0, _ = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === w) {
                        if (!a) for (a = {}; e = ui.exec(r); ) a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()];
                    }
                    return null == e ? null : e;
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? r : null;
                },
                setRequestHeader: function(t, e) {
                    var i = t.toLowerCase();
                    return w || (t = b[i] = b[i] || t, y[t] = e), this;
                },
                overrideMimeType: function(t) {
                    return w || (p.mimeType = t), this;
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > w) for (e in t) v[e] = [ v[e], t[e] ]; else x.always(t[x.status]);
                    return this;
                },
                abort: function(t) {
                    var e = t || _;
                    return s && s.abort(e), n(0, e), this;
                }
            };
            if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, p.url = ((t || p.url || ri) + "").replace(ci, "").replace(gi, oi[1] + "//"), 
            p.type = i.method || i.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(ae) || [ "" ], 
            null == p.crossDomain && (c = fi.exec(p.url.toLowerCase()), p.crossDomain = !(!c || c[1] === oi[1] && c[2] === oi[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (oi[3] || ("http:" === oi[1] ? "80" : "443")))), 
            p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), 
            E(vi, p, i, x), 2 === w) return x;
            h = p.global, h && 0 === oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), 
            p.hasContent = !di.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (li.test(o) ? "&" : "?") + p.data, 
            delete p.data), p.cache === !1 && (p.url = hi.test(o) ? o.replace(hi, "$1_=" + ai++) : o + (li.test(o) ? "&" : "?") + "_=" + ai++)), 
            p.ifModified && (oe.lastModified[o] && x.setRequestHeader("If-Modified-Since", oe.lastModified[o]), 
            oe.etag[o] && x.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", p.contentType), 
            x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + bi + "; q=0.01" : "") : p.accepts["*"]);
            for (u in p.headers) x.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (p.beforeSend.call(d, x, p) === !1 || 2 === w)) return x.abort();
            _ = "abort";
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) x[u](p[u]);
            if (s = E(yi, p, i, x)) {
                x.readyState = 1, h && g.trigger("ajaxSend", [ x, p ]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                    x.abort("timeout");
                }, p.timeout));
                try {
                    w = 1, s.send(y, n);
                } catch (k) {
                    if (!(2 > w)) throw k;
                    n(-1, k);
                }
            } else n(-1, "No Transport");
            return x;
        },
        getJSON: function(t, e, i) {
            return oe.get(t, e, i, "json");
        },
        getScript: function(t, i) {
            return oe.get(t, e, i, "script");
        }
    }), oe.each([ "get", "post" ], function(t, i) {
        oe[i] = function(t, n, s, o) {
            return oe.isFunction(n) && (o = o || s, s = n, n = e), oe.ajax({
                url: t,
                type: i,
                dataType: o,
                data: n,
                success: s
            });
        };
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return oe.globalEval(t), t;
            }
        }
    }), oe.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }), oe.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, s) {
                    e = oe("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type);
                    }), q.head.appendChild(e[0]);
                },
                abort: function() {
                    i && i();
                }
            };
        }
    });
    var _i = [], xi = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = _i.pop() || oe.expando + "_" + ai++;
            return this[t] = !0, t;
        }
    }), oe.ajaxPrefilter("json jsonp", function(i, n, s) {
        var o, r, a, l = i.jsonp !== !1 && (xi.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && xi.test(i.data) && "data");
        return l || "jsonp" === i.dataTypes[0] ? (o = i.jsonpCallback = oe.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, 
        l ? i[l] = i[l].replace(xi, "$1" + o) : i.jsonp !== !1 && (i.url += (li.test(i.url) ? "&" : "?") + i.jsonp + "=" + o), 
        i.converters["script json"] = function() {
            return a || oe.error(o + " was not called"), a[0];
        }, i.dataTypes[0] = "json", r = t[o], t[o] = function() {
            a = arguments;
        }, s.always(function() {
            t[o] = r, i[o] && (i.jsonpCallback = n.jsonpCallback, _i.push(o)), a && oe.isFunction(r) && r(a[0]), 
            a = r = e;
        }), "script") : e;
    }), oe.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (t) {}
    };
    var ki = oe.ajaxSettings.xhr(), $i = {
        0: 200,
        1223: 204
    }, Ci = 0, Ti = {};
    t.ActiveXObject && oe(t).on("unload", function() {
        for (var t in Ti) Ti[t]();
        Ti = e;
    }), oe.support.cors = !!ki && "withCredentials" in ki, oe.support.ajax = ki = !!ki, oe.ajaxTransport(function(t) {
        var i;
        return oe.support.cors || ki && !t.crossDomain ? {
            send: function(n, s) {
                var o, r, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) a[o] = t.xhrFields[o];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) a.setRequestHeader(o, n[o]);
                i = function(t) {
                    return function() {
                        i && (delete Ti[r], i = a.onload = a.onerror = null, "abort" === t ? a.abort() : "error" === t ? s(a.status || 404, a.statusText) : s($i[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
                            text: a.responseText
                        } : e, a.getAllResponseHeaders()));
                    };
                }, a.onload = i(), a.onerror = i("error"), i = Ti[r = Ci++] = i("abort"), a.send(t.hasContent && t.data || null);
            },
            abort: function() {
                i && i();
            }
        } : e;
    });
    var Pi, Si, Ei = /^(?:toggle|show|hide)$/, Mi = RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), Ii = /queueHooks$/, Di = [ O ], Ai = {
        "*": [ function(t, e) {
            var i = this.createTween(t, e), n = i.cur(), s = Mi.exec(e), o = s && s[3] || (oe.cssNumber[t] ? "" : "px"), r = (oe.cssNumber[t] || "px" !== o && +n) && Mi.exec(oe.css(i.elem, t)), a = 1, l = 20;
            if (r && r[3] !== o) {
                o = o || r[3], s = s || [], r = +n || 1;
                do a = a || ".5", r /= a, oe.style(i.elem, t, r + o); while (a !== (a = i.cur() / n) && 1 !== a && --l);
            }
            return s && (r = i.start = +r || +n || 0, i.unit = o, i.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), 
            i;
        } ]
    };
    oe.Animation = oe.extend(R, {
        tweener: function(t, e) {
            oe.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.split(" ");
            for (var i, n = 0, s = t.length; s > n; n++) i = t[n], Ai[i] = Ai[i] || [], Ai[i].unshift(e);
        },
        prefilter: function(t, e) {
            e ? Di.unshift(t) : Di.push(t);
        }
    }), oe.Tween = H, H.prototype = {
        constructor: H,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), 
            this.end = n, this.unit = o || (oe.cssNumber[i] ? "" : "px");
        },
        cur: function() {
            var t = H.propHooks[this.prop];
            return t && t.get ? t.get(this) : H.propHooks._default.get(this);
        },
        run: function(t) {
            var e, i = H.propHooks[this.prop];
            return this.pos = e = this.options.duration ? oe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, 
            this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            i && i.set ? i.set(this) : H.propHooks._default.set(this), this;
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = oe.css(t.elem, t.prop, ""), 
                e && "auto" !== e ? e : 0) : t.elem[t.prop];
            },
            set: function(t) {
                oe.fx.step[t.prop] ? oe.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[oe.cssProps[t.prop]] || oe.cssHooks[t.prop]) ? oe.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now;
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
    }, oe.each([ "toggle", "show", "hide" ], function(t, e) {
        var i = oe.fn[e];
        oe.fn[e] = function(t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(F(e, !0), t, n, s);
        };
    }), oe.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(b).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n);
        },
        animate: function(t, e, i, n) {
            var s = oe.isEmptyObject(t), o = oe.speed(e, i, n), r = function() {
                var e = R(this, oe.extend({}, t), o);
                (s || me.get(this, "finish")) && e.stop(!0);
            };
            return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r);
        },
        stop: function(t, i, n) {
            var s = function(t) {
                var e = t.stop;
                delete t.stop, e(n);
            };
            return "string" != typeof t && (n = i, i = t, t = e), i && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0, i = null != t && t + "queueHooks", o = oe.timers, r = me.get(this);
                if (i) r[i] && r[i].stop && s(r[i]); else for (i in r) r[i] && r[i].stop && Ii.test(i) && s(r[i]);
                for (i = o.length; i--; ) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), 
                e = !1, o.splice(i, 1));
                (e || !n) && oe.dequeue(this, t);
            });
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, i = me.get(this), n = i[t + "queue"], s = i[t + "queueHooks"], o = oe.timers, r = n ? n.length : 0;
                for (i.finish = !0, oe.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), 
                o.splice(e, 1));
                for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish;
            });
        }
    }), oe.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        oe.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n);
        };
    }), oe.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? oe.extend({}, t) : {
            complete: i || !i && e || oe.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !oe.isFunction(e) && e
        };
        return n.duration = oe.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in oe.fx.speeds ? oe.fx.speeds[n.duration] : oe.fx.speeds._default, 
        (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            oe.isFunction(n.old) && n.old.call(this), n.queue && oe.dequeue(this, n.queue);
        }, n;
    }, oe.easing = {
        linear: function(t) {
            return t;
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2;
        }
    }, oe.timers = [], oe.fx = H.prototype.init, oe.fx.tick = function() {
        var t, i = oe.timers, n = 0;
        for (Pi = oe.now(); i.length > n; n++) t = i[n], t() || i[n] !== t || i.splice(n--, 1);
        i.length || oe.fx.stop(), Pi = e;
    }, oe.fx.timer = function(t) {
        t() && oe.timers.push(t) && oe.fx.start();
    }, oe.fx.interval = 13, oe.fx.start = function() {
        Si || (Si = setInterval(oe.fx.tick, oe.fx.interval));
    }, oe.fx.stop = function() {
        clearInterval(Si), Si = null;
    }, oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, oe.fx.step = {}, oe.expr && oe.expr.filters && (oe.expr.filters.animated = function(t) {
        return oe.grep(oe.timers, function(e) {
            return t === e.elem;
        }).length;
    }), oe.fn.offset = function(t) {
        if (arguments.length) return t === e ? this : this.each(function(e) {
            oe.offset.setOffset(this, t, e);
        });
        var i, n, s = this[0], o = {
            top: 0,
            left: 0
        }, r = s && s.ownerDocument;
        return r ? (i = r.documentElement, oe.contains(i, s) ? (typeof s.getBoundingClientRect !== U && (o = s.getBoundingClientRect()), 
        n = j(r), {
            top: o.top + n.pageYOffset - i.clientTop,
            left: o.left + n.pageXOffset - i.clientLeft
        }) : o) : e;
    }, oe.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, r, a, l, c, h = oe.css(t, "position"), u = oe(t), p = {};
            "static" === h && (t.style.position = "relative"), a = u.offset(), o = oe.css(t, "top"), l = oe.css(t, "left"), 
            c = ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1, c ? (n = u.position(), r = n.top, 
            s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), oe.isFunction(e) && (e = e.call(t, i, a)), 
            null != e.top && (p.top = e.top - a.top + r), null != e.left && (p.left = e.left - a.left + s), "using" in e ? e.using.call(t, p) : u.css(p);
        }
    }, oe.fn.extend({
        position: function() {
            if (this[0]) {
                var t, e, i = this[0], n = {
                    top: 0,
                    left: 0
                };
                return "fixed" === oe.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), 
                e = this.offset(), oe.nodeName(t[0], "html") || (n = t.offset()), n.top += oe.css(t[0], "borderTopWidth", !0), 
                n.left += oe.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - oe.css(i, "marginTop", !0),
                    left: e.left - n.left - oe.css(i, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || V; t && !oe.nodeName(t, "html") && "static" === oe.css(t, "position"); ) t = t.offsetParent;
                return t || V;
            });
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(i, n) {
        var s = "pageYOffset" === n;
        oe.fn[i] = function(o) {
            return oe.access(this, function(i, o, r) {
                var a = j(i);
                return r === e ? a ? a[n] : i[o] : (a ? a.scrollTo(s ? t.pageXOffset : r, s ? r : t.pageYOffset) : i[o] = r, 
                e);
            }, i, o, arguments.length, null);
        };
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(t, i) {
        oe.each({
            padding: "inner" + t,
            content: i,
            "": "outer" + t
        }, function(n, s) {
            oe.fn[s] = function(s, o) {
                var r = arguments.length && (n || "boolean" != typeof s), a = n || (s === !0 || o === !0 ? "margin" : "border");
                return oe.access(this, function(i, n, s) {
                    var o;
                    return oe.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (o = i.documentElement, 
                    Math.max(i.body["scroll" + t], o["scroll" + t], i.body["offset" + t], o["offset" + t], o["client" + t])) : s === e ? oe.css(i, n, a) : oe.style(i, n, s, a);
                }, i, r ? s : e, r, null);
            };
        });
    }), oe.fn.size = function() {
        return this.length;
    }, oe.fn.andSelf = oe.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = oe : "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe;
    }), "object" == typeof t && "object" == typeof t.document && (t.jQuery = t.$ = oe);
})(window), function(t, e, i) {
    function n(i) {
        var n = e.console;
        o[i] || (o[i] = !0, t.migrateWarnings.push(i), n && n.warn && !t.migrateMute && (n.warn("JQMIGRATE: " + i), 
        t.migrateTrace && n.trace && n.trace()));
    }
    function s(e, s, o, r) {
        if (Object.defineProperty) try {
            return Object.defineProperty(e, s, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return n(r), o;
                },
                set: function(t) {
                    n(r), o = t;
                }
            }), i;
        } catch (a) {}
        t._definePropertyBroken = !0, e[s] = o;
    }
    var o = {};
    t.migrateWarnings = [], !t.migrateMute && e.console && e.console.log && e.console.log("JQMIGRATE: Logging is active"), 
    t.migrateTrace === i && (t.migrateTrace = !0), t.migrateReset = function() {
        o = {}, t.migrateWarnings.length = 0;
    }, "BackCompat" === document.compatMode && n("jQuery is not compatible with Quirks Mode");
    var r = t("<input/>", {
        size: 1
    }).attr("size") && t.attrFn, a = t.attr, l = t.attrHooks.value && t.attrHooks.value.get || function() {
        return null;
    }, c = t.attrHooks.value && t.attrHooks.value.set || function() {
        return i;
    }, h = /^(?:input|button)$/i, u = /^[238]$/, p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, d = /^(?:checked|selected)$/i;
    s(t, "attrFn", r || {}, "jQuery.attrFn is deprecated"), t.attr = function(e, s, o, l) {
        var c = s.toLowerCase(), g = e && e.nodeType;
        return l && (4 > a.length && n("jQuery.fn.attr( props, pass ) is deprecated"), e && !u.test(g) && (r ? s in r : t.isFunction(t.fn[s]))) ? t(e)[s](o) : ("type" === s && o !== i && h.test(e.nodeName) && e.parentNode && n("Can't change the 'type' of an input or button in IE 6/7/8"), 
        !t.attrHooks[c] && p.test(c) && (t.attrHooks[c] = {
            get: function(e, n) {
                var s, o = t.prop(e, n);
                return o === !0 || "boolean" != typeof o && (s = e.getAttributeNode(n)) && s.nodeValue !== !1 ? n.toLowerCase() : i;
            },
            set: function(e, i, n) {
                var s;
                return i === !1 ? t.removeAttr(e, n) : (s = t.propFix[n] || n, s in e && (e[s] = !0), e.setAttribute(n, n.toLowerCase())), 
                n;
            }
        }, d.test(c) && n("jQuery.fn.attr('" + c + "') may use property instead of attribute")), a.call(t, e, s, o));
    }, t.attrHooks.value = {
        get: function(t, e) {
            var i = (t.nodeName || "").toLowerCase();
            return "button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && n("jQuery.fn.attr('value') no longer gets properties"), 
            e in t ? t.value : null);
        },
        set: function(t, e) {
            var s = (t.nodeName || "").toLowerCase();
            return "button" === s ? c.apply(this, arguments) : ("input" !== s && "option" !== s && n("jQuery.fn.attr('value', val) no longer sets properties"), 
            t.value = e, i);
        }
    };
    var g, f, m = t.fn.init, v = t.parseJSON, y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    t.fn.init = function(e, i, s) {
        var o;
        return e && "string" == typeof e && !t.isPlainObject(i) && (o = y.exec(t.trim(e))) && o[0] && ("<" !== e.charAt(0) && n("$(html) HTML strings must start with '<' character"), 
        o[3] && n("$(html) HTML text after last tag is ignored"), "#" === o[0].charAt(0) && (n("HTML string cannot start with a '#' character"), 
        t.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), t.parseHTML) ? m.call(this, t.parseHTML(o[2], i, !0), i, s) : m.apply(this, arguments);
    }, t.fn.init.prototype = t.fn, t.parseJSON = function(t) {
        return t || null === t ? v.apply(this, arguments) : (n("jQuery.parseJSON requires a valid JSON string"), 
        null);
    }, t.uaMatch = function(t) {
        t = t.toLowerCase();
        var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
        return {
            browser: e[1] || "",
            version: e[2] || "0"
        };
    }, t.browser || (g = t.uaMatch(navigator.userAgent), f = {}, g.browser && (f[g.browser] = !0, f.version = g.version), 
    f.chrome ? f.webkit = !0 : f.webkit && (f.safari = !0), t.browser = f), s(t, "browser", t.browser, "jQuery.browser is deprecated"), 
    t.sub = function() {
        function e(t, i) {
            return new e.fn.init(t, i);
        }
        t.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, 
        e.fn.init = function(n, s) {
            return s && s instanceof t && !(s instanceof e) && (s = e(s)), t.fn.init.call(this, n, s, i);
        }, e.fn.init.prototype = e.fn;
        var i = e(document);
        return n("jQuery.sub() is deprecated"), e;
    }, t.ajaxSetup({
        converters: {
            "text json": t.parseJSON
        }
    });
    var b = t.fn.data;
    t.fn.data = function(e) {
        var s, o, r = this[0];
        return !r || "events" !== e || 1 !== arguments.length || (s = t.data(r, e), o = t._data(r, e), s !== i && s !== o || o === i) ? b.apply(this, arguments) : (n("Use of jQuery.fn.data('events') is deprecated"), 
        o);
    };
    var w = /\/(java|ecma)script/i, _ = t.fn.andSelf || t.fn.addBack;
    t.fn.andSelf = function() {
        return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), _.apply(this, arguments);
    }, t.clean || (t.clean = function(e, s, o, r) {
        s = s || document, s = !s.nodeType && s[0] || s, s = s.ownerDocument || s, n("jQuery.clean() is deprecated");
        var a, l, c, h, u = [];
        if (t.merge(u, t.buildFragment(e, s).childNodes), o) for (c = function(t) {
            return !t.type || w.test(t.type) ? r ? r.push(t.parentNode ? t.parentNode.removeChild(t) : t) : o.appendChild(t) : i;
        }, a = 0; null != (l = u[a]); a++) t.nodeName(l, "script") && c(l) || (o.appendChild(l), l.getElementsByTagName !== i && (h = t.grep(t.merge([], l.getElementsByTagName("script")), c), 
        u.splice.apply(u, [ a + 1, 0 ].concat(h)), a += h.length));
        return u;
    });
    var x = t.event.add, k = t.event.remove, $ = t.event.trigger, C = t.fn.toggle, T = t.fn.live, P = t.fn.die, S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", E = RegExp("\\b(?:" + S + ")\\b"), M = /(?:^|\s)hover(\.\S+|)\b/, I = function(e) {
        return "string" != typeof e || t.event.special.hover ? e : (M.test(e) && n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), 
        e && e.replace(M, "mouseenter$1 mouseleave$1"));
    };
    t.event.props && "attrChange" !== t.event.props[0] && t.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), 
    t.event.dispatch && s(t.event, "handle", t.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), 
    t.event.add = function(t, e, i, s, o) {
        t !== document && E.test(e) && n("AJAX events should be attached to document: " + e), x.call(this, t, I(e || ""), i, s, o);
    }, t.event.remove = function(t, e, i, n, s) {
        k.call(this, t, I(e) || "", i, n, s);
    }, t.fn.error = function() {
        var t = Array.prototype.slice.call(arguments, 0);
        return n("jQuery.fn.error() is deprecated"), t.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, t) : (this.triggerHandler.apply(this, t), 
        this);
    }, t.fn.toggle = function(e, i) {
        if (!t.isFunction(e) || !t.isFunction(i)) return C.apply(this, arguments);
        n("jQuery.fn.toggle(handler, handler...) is deprecated");
        var s = arguments, o = e.guid || t.guid++, r = 0, a = function(i) {
            var n = (t._data(this, "lastToggle" + e.guid) || 0) % r;
            return t._data(this, "lastToggle" + e.guid, n + 1), i.preventDefault(), s[n].apply(this, arguments) || !1;
        };
        for (a.guid = o; s.length > r; ) s[r++].guid = o;
        return this.click(a);
    }, t.fn.live = function(e, i, s) {
        return n("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (t(this.context).on(e, this.selector, i, s), 
        this);
    }, t.fn.die = function(e, i) {
        return n("jQuery.fn.die() is deprecated"), P ? P.apply(this, arguments) : (t(this.context).off(e, this.selector || "**", i), 
        this);
    }, t.event.trigger = function(t, e, i, s) {
        return i || E.test(t) || n("Global events are undocumented and deprecated"), $.call(this, t, e, i || document, s);
    }, t.each(S.split("|"), function(e, i) {
        t.event.special[i] = {
            setup: function() {
                var e = this;
                return e !== document && (t.event.add(document, i + "." + t.guid, function() {
                    t.event.trigger(i, null, e, !0);
                }), t._data(this, i, t.guid++)), !1;
            },
            teardown: function() {
                return this !== document && t.event.remove(document, i + "." + t._data(this, i)), !1;
            }
        };
    });
}(jQuery, window), //     Underscore may be freely distributed under the MIT license.
function() {
    var t = this, e = t._, i = {}, n = Array.prototype, s = Object.prototype, o = Function.prototype, r = n.push, a = n.slice, l = n.concat, c = s.toString, h = s.hasOwnProperty, u = n.forEach, p = n.map, d = n.reduce, g = n.reduceRight, f = n.filter, m = n.every, v = n.some, y = n.indexOf, b = n.lastIndexOf, w = Array.isArray, _ = Object.keys, x = o.bind, k = function(t) {
        return t instanceof k ? t : this instanceof k ? (this._wrapped = t, void 0) : new k(t);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), 
    exports._ = k) : t._ = k, k.VERSION = "1.5.1";
    var $ = k.each = k.forEach = function(t, e, n) {
        if (null != t) if (u && t.forEach === u) t.forEach(e, n); else if (t.length === +t.length) {
            for (var s = 0, o = t.length; o > s; s++) if (e.call(n, t[s], s, t) === i) return;
        } else for (var r in t) if (k.has(t, r) && e.call(n, t[r], r, t) === i) return;
    };
    k.map = k.collect = function(t, e, i) {
        var n = [];
        return null == t ? n : p && t.map === p ? t.map(e, i) : ($(t, function(t, s, o) {
            n.push(e.call(i, t, s, o));
        }), n);
    };
    var C = "Reduce of empty array with no initial value";
    k.reduce = k.foldl = k.inject = function(t, e, i, n) {
        var s = arguments.length > 2;
        if (null == t && (t = []), d && t.reduce === d) return n && (e = k.bind(e, n)), s ? t.reduce(e, i) : t.reduce(e);
        if ($(t, function(t, o, r) {
            s ? i = e.call(n, i, t, o, r) : (i = t, s = !0);
        }), !s) throw new TypeError(C);
        return i;
    }, k.reduceRight = k.foldr = function(t, e, i, n) {
        var s = arguments.length > 2;
        if (null == t && (t = []), g && t.reduceRight === g) return n && (e = k.bind(e, n)), s ? t.reduceRight(e, i) : t.reduceRight(e);
        var o = t.length;
        if (o !== +o) {
            var r = k.keys(t);
            o = r.length;
        }
        if ($(t, function(a, l, c) {
            l = r ? r[--o] : --o, s ? i = e.call(n, i, t[l], l, c) : (i = t[l], s = !0);
        }), !s) throw new TypeError(C);
        return i;
    }, k.find = k.detect = function(t, e, i) {
        var n;
        return T(t, function(t, s, o) {
            return e.call(i, t, s, o) ? (n = t, !0) : void 0;
        }), n;
    }, k.filter = k.select = function(t, e, i) {
        var n = [];
        return null == t ? n : f && t.filter === f ? t.filter(e, i) : ($(t, function(t, s, o) {
            e.call(i, t, s, o) && n.push(t);
        }), n);
    }, k.reject = function(t, e, i) {
        return k.filter(t, function(t, n, s) {
            return !e.call(i, t, n, s);
        }, i);
    }, k.every = k.all = function(t, e, n) {
        e || (e = k.identity);
        var s = !0;
        return null == t ? s : m && t.every === m ? t.every(e, n) : ($(t, function(t, o, r) {
            return (s = s && e.call(n, t, o, r)) ? void 0 : i;
        }), !!s);
    };
    var T = k.some = k.any = function(t, e, n) {
        e || (e = k.identity);
        var s = !1;
        return null == t ? s : v && t.some === v ? t.some(e, n) : ($(t, function(t, o, r) {
            return s || (s = e.call(n, t, o, r)) ? i : void 0;
        }), !!s);
    };
    k.contains = k.include = function(t, e) {
        return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : T(t, function(t) {
            return t === e;
        });
    }, k.invoke = function(t, e) {
        var i = a.call(arguments, 2), n = k.isFunction(e);
        return k.map(t, function(t) {
            return (n ? e : t[e]).apply(t, i);
        });
    }, k.pluck = function(t, e) {
        return k.map(t, function(t) {
            return t[e];
        });
    }, k.where = function(t, e, i) {
        return k.isEmpty(e) ? i ? void 0 : [] : k[i ? "find" : "filter"](t, function(t) {
            for (var i in e) if (e[i] !== t[i]) return !1;
            return !0;
        });
    }, k.findWhere = function(t, e) {
        return k.where(t, e, !0);
    }, k.max = function(t, e, i) {
        if (!e && k.isArray(t) && t[0] === +t[0] && 65535 > t.length) return Math.max.apply(Math, t);
        if (!e && k.isEmpty(t)) return -1/0;
        var n = {
            computed: -1/0,
            value: -1/0
        };
        return $(t, function(t, s, o) {
            var r = e ? e.call(i, t, s, o) : t;
            r > n.computed && (n = {
                value: t,
                computed: r
            });
        }), n.value;
    }, k.min = function(t, e, i) {
        if (!e && k.isArray(t) && t[0] === +t[0] && 65535 > t.length) return Math.min.apply(Math, t);
        if (!e && k.isEmpty(t)) return 1/0;
        var n = {
            computed: 1/0,
            value: 1/0
        };
        return $(t, function(t, s, o) {
            var r = e ? e.call(i, t, s, o) : t;
            n.computed > r && (n = {
                value: t,
                computed: r
            });
        }), n.value;
    }, k.shuffle = function(t) {
        var e, i = 0, n = [];
        return $(t, function(t) {
            e = k.random(i++), n[i - 1] = n[e], n[e] = t;
        }), n;
    };
    var P = function(t) {
        return k.isFunction(t) ? t : function(e) {
            return e[t];
        };
    };
    k.sortBy = function(t, e, i) {
        var n = P(e);
        return k.pluck(k.map(t, function(t, e, s) {
            return {
                value: t,
                index: e,
                criteria: n.call(i, t, e, s)
            };
        }).sort(function(t, e) {
            var i = t.criteria, n = e.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (n > i || void 0 === n) return -1;
            }
            return t.index < e.index ? -1 : 1;
        }), "value");
    };
    var S = function(t, e, i, n) {
        var s = {}, o = P(null == e ? k.identity : e);
        return $(t, function(e, r) {
            var a = o.call(i, e, r, t);
            n(s, a, e);
        }), s;
    };
    k.groupBy = function(t, e, i) {
        return S(t, e, i, function(t, e, i) {
            (k.has(t, e) ? t[e] : t[e] = []).push(i);
        });
    }, k.countBy = function(t, e, i) {
        return S(t, e, i, function(t, e) {
            k.has(t, e) || (t[e] = 0), t[e]++;
        });
    }, k.sortedIndex = function(t, e, i, n) {
        i = null == i ? k.identity : P(i);
        for (var s = i.call(n, e), o = 0, r = t.length; r > o; ) {
            var a = o + r >>> 1;
            s > i.call(n, t[a]) ? o = a + 1 : r = a;
        }
        return o;
    }, k.toArray = function(t) {
        return t ? k.isArray(t) ? a.call(t) : t.length === +t.length ? k.map(t, k.identity) : k.values(t) : [];
    }, k.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length : k.keys(t).length;
    }, k.first = k.head = k.take = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[0] : a.call(t, 0, e);
    }, k.initial = function(t, e, i) {
        return a.call(t, 0, t.length - (null == e || i ? 1 : e));
    }, k.last = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0));
    }, k.rest = k.tail = k.drop = function(t, e, i) {
        return a.call(t, null == e || i ? 1 : e);
    }, k.compact = function(t) {
        return k.filter(t, k.identity);
    };
    var E = function(t, e, i) {
        return e && k.every(t, k.isArray) ? l.apply(i, t) : ($(t, function(t) {
            k.isArray(t) || k.isArguments(t) ? e ? r.apply(i, t) : E(t, e, i) : i.push(t);
        }), i);
    };
    k.flatten = function(t, e) {
        return E(t, e, []);
    }, k.without = function(t) {
        return k.difference(t, a.call(arguments, 1));
    }, k.uniq = k.unique = function(t, e, i, n) {
        k.isFunction(e) && (n = i, i = e, e = !1);
        var s = i ? k.map(t, i, n) : t, o = [], r = [];
        return $(s, function(i, n) {
            (e ? n && r[r.length - 1] === i : k.contains(r, i)) || (r.push(i), o.push(t[n]));
        }), o;
    }, k.union = function() {
        return k.uniq(k.flatten(arguments, !0));
    }, k.intersection = function(t) {
        var e = a.call(arguments, 1);
        return k.filter(k.uniq(t), function(t) {
            return k.every(e, function(e) {
                return k.indexOf(e, t) >= 0;
            });
        });
    }, k.difference = function(t) {
        var e = l.apply(n, a.call(arguments, 1));
        return k.filter(t, function(t) {
            return !k.contains(e, t);
        });
    }, k.zip = function() {
        for (var t = k.max(k.pluck(arguments, "length").concat(0)), e = Array(t), i = 0; t > i; i++) e[i] = k.pluck(arguments, "" + i);
        return e;
    }, k.object = function(t, e) {
        if (null == t) return {};
        for (var i = {}, n = 0, s = t.length; s > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i;
    }, k.indexOf = function(t, e, i) {
        if (null == t) return -1;
        var n = 0, s = t.length;
        if (i) {
            if ("number" != typeof i) return n = k.sortedIndex(t, e), t[n] === e ? n : -1;
            n = 0 > i ? Math.max(0, s + i) : i;
        }
        if (y && t.indexOf === y) return t.indexOf(e, i);
        for (;s > n; n++) if (t[n] === e) return n;
        return -1;
    }, k.lastIndexOf = function(t, e, i) {
        if (null == t) return -1;
        var n = null != i;
        if (b && t.lastIndexOf === b) return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
        for (var s = n ? i : t.length; s--; ) if (t[s] === e) return s;
        return -1;
    }, k.range = function(t, e, i) {
        1 >= arguments.length && (e = t || 0, t = 0), i = arguments[2] || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), s = 0, o = Array(n); n > s; ) o[s++] = t, t += i;
        return o;
    };
    var M = function() {};
    k.bind = function(t, e) {
        var i, n;
        if (x && t.bind === x) return x.apply(t, a.call(arguments, 1));
        if (!k.isFunction(t)) throw new TypeError();
        return i = a.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return t.apply(e, i.concat(a.call(arguments)));
            M.prototype = t.prototype;
            var s = new M();
            M.prototype = null;
            var o = t.apply(s, i.concat(a.call(arguments)));
            return Object(o) === o ? o : s;
        };
    }, k.partial = function(t) {
        var e = a.call(arguments, 1);
        return function() {
            return t.apply(this, e.concat(a.call(arguments)));
        };
    }, k.bindAll = function(t) {
        var e = a.call(arguments, 1);
        if (0 === e.length) throw Error("bindAll must be passed function names");
        return $(e, function(e) {
            t[e] = k.bind(t[e], t);
        }), t;
    }, k.memoize = function(t, e) {
        var i = {};
        return e || (e = k.identity), function() {
            var n = e.apply(this, arguments);
            return k.has(i, n) ? i[n] : i[n] = t.apply(this, arguments);
        };
    }, k.delay = function(t, e) {
        var i = a.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, i);
        }, e);
    }, k.defer = function(t) {
        return k.delay.apply(k, [ t, 1 ].concat(a.call(arguments, 1)));
    }, k.throttle = function(t, e, i) {
        var n, s, o, r = null, a = 0;
        i || (i = {});
        var l = function() {
            a = i.leading === !1 ? 0 : new Date(), r = null, o = t.apply(n, s);
        };
        return function() {
            var c = new Date();
            a || i.leading !== !1 || (a = c);
            var h = e - (c - a);
            return n = this, s = arguments, 0 >= h ? (clearTimeout(r), r = null, a = c, o = t.apply(n, s)) : r || i.trailing === !1 || (r = setTimeout(l, h)), 
            o;
        };
    }, k.debounce = function(t, e, i) {
        var n, s = null;
        return function() {
            var o = this, r = arguments, a = function() {
                s = null, i || (n = t.apply(o, r));
            }, l = i && !s;
            return clearTimeout(s), s = setTimeout(a, e), l && (n = t.apply(o, r)), n;
        };
    }, k.once = function(t) {
        var e, i = !1;
        return function() {
            return i ? e : (i = !0, e = t.apply(this, arguments), t = null, e);
        };
    }, k.wrap = function(t, e) {
        return function() {
            var i = [ t ];
            return r.apply(i, arguments), e.apply(this, i);
        };
    }, k.compose = function() {
        var t = arguments;
        return function() {
            for (var e = arguments, i = t.length - 1; i >= 0; i--) e = [ t[i].apply(this, e) ];
            return e[0];
        };
    }, k.after = function(t, e) {
        return function() {
            return 1 > --t ? e.apply(this, arguments) : void 0;
        };
    }, k.keys = _ || function(t) {
        if (t !== Object(t)) throw new TypeError("Invalid object");
        var e = [];
        for (var i in t) k.has(t, i) && e.push(i);
        return e;
    }, k.values = function(t) {
        var e = [];
        for (var i in t) k.has(t, i) && e.push(t[i]);
        return e;
    }, k.pairs = function(t) {
        var e = [];
        for (var i in t) k.has(t, i) && e.push([ i, t[i] ]);
        return e;
    }, k.invert = function(t) {
        var e = {};
        for (var i in t) k.has(t, i) && (e[t[i]] = i);
        return e;
    }, k.functions = k.methods = function(t) {
        var e = [];
        for (var i in t) k.isFunction(t[i]) && e.push(i);
        return e.sort();
    }, k.extend = function(t) {
        return $(a.call(arguments, 1), function(e) {
            if (e) for (var i in e) t[i] = e[i];
        }), t;
    }, k.pick = function(t) {
        var e = {}, i = l.apply(n, a.call(arguments, 1));
        return $(i, function(i) {
            i in t && (e[i] = t[i]);
        }), e;
    }, k.omit = function(t) {
        var e = {}, i = l.apply(n, a.call(arguments, 1));
        for (var s in t) k.contains(i, s) || (e[s] = t[s]);
        return e;
    }, k.defaults = function(t) {
        return $(a.call(arguments, 1), function(e) {
            if (e) for (var i in e) void 0 === t[i] && (t[i] = e[i]);
        }), t;
    }, k.clone = function(t) {
        return k.isObject(t) ? k.isArray(t) ? t.slice() : k.extend({}, t) : t;
    }, k.tap = function(t, e) {
        return e(t), t;
    };
    var I = function(t, e, i, n) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof k && (t = t._wrapped), e instanceof k && (e = e._wrapped);
        var s = c.call(t);
        if (s != c.call(e)) return !1;
        switch (s) {
          case "[object String]":
            return t == e + "";

          case "[object Number]":
            return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;

          case "[object Date]":
          case "[object Boolean]":
            return +t == +e;

          case "[object RegExp]":
            return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase;
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var o = i.length; o--; ) if (i[o] == t) return n[o] == e;
        var r = t.constructor, a = e.constructor;
        if (r !== a && !(k.isFunction(r) && r instanceof r && k.isFunction(a) && a instanceof a)) return !1;
        i.push(t), n.push(e);
        var l = 0, h = !0;
        if ("[object Array]" == s) {
            if (l = t.length, h = l == e.length) for (;l-- && (h = I(t[l], e[l], i, n)); ) ;
        } else {
            for (var u in t) if (k.has(t, u) && (l++, !(h = k.has(e, u) && I(t[u], e[u], i, n)))) break;
            if (h) {
                for (u in e) if (k.has(e, u) && !l--) break;
                h = !l;
            }
        }
        return i.pop(), n.pop(), h;
    };
    k.isEqual = function(t, e) {
        return I(t, e, [], []);
    }, k.isEmpty = function(t) {
        if (null == t) return !0;
        if (k.isArray(t) || k.isString(t)) return 0 === t.length;
        for (var e in t) if (k.has(t, e)) return !1;
        return !0;
    }, k.isElement = function(t) {
        return !(!t || 1 !== t.nodeType);
    }, k.isArray = w || function(t) {
        return "[object Array]" == c.call(t);
    }, k.isObject = function(t) {
        return t === Object(t);
    }, $([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(t) {
        k["is" + t] = function(e) {
            return c.call(e) == "[object " + t + "]";
        };
    }), k.isArguments(arguments) || (k.isArguments = function(t) {
        return !(!t || !k.has(t, "callee"));
    }), k.isFunction = function(t) {
        return "function" == typeof t;
    }, k.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t));
    }, k.isNaN = function(t) {
        return k.isNumber(t) && t != +t;
    }, k.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" == c.call(t);
    }, k.isNull = function(t) {
        return null === t;
    }, k.isUndefined = function(t) {
        return void 0 === t;
    }, k.has = function(t, e) {
        return h.call(t, e);
    }, k.noConflict = function() {
        return t._ = e, this;
    }, k.identity = function(t) {
        return t;
    }, k.times = function(t, e, i) {
        for (var n = Array(Math.max(0, t)), s = 0; t > s; s++) n[s] = e.call(i, s);
        return n;
    }, k.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1));
    };
    var D = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    D.unescape = k.invert(D.escape);
    var A = {
        escape: RegExp("[" + k.keys(D.escape).join("") + "]", "g"),
        unescape: RegExp("(" + k.keys(D.unescape).join("|") + ")", "g")
    };
    k.each([ "escape", "unescape" ], function(t) {
        k[t] = function(e) {
            return null == e ? "" : ("" + e).replace(A[t], function(e) {
                return D[t][e];
            });
        };
    }), k.result = function(t, e) {
        if (null == t) return void 0;
        var i = t[e];
        return k.isFunction(i) ? i.call(t) : i;
    }, k.mixin = function(t) {
        $(k.functions(t), function(e) {
            var i = k[e] = t[e];
            k.prototype[e] = function() {
                var t = [ this._wrapped ];
                return r.apply(t, arguments), H.call(this, i.apply(k, t));
            };
        });
    };
    var N = 0;
    k.uniqueId = function(t) {
        var e = ++N + "";
        return t ? t + e : e;
    }, k.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var R = /(.)^/, L = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, O = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    k.template = function(t, e, i) {
        var n;
        i = k.defaults({}, i, k.templateSettings);
        var s = RegExp([ (i.escape || R).source, (i.interpolate || R).source, (i.evaluate || R).source ].join("|") + "|$", "g"), o = 0, r = "__p+='";
        t.replace(s, function(e, i, n, s, a) {
            return r += t.slice(o, a).replace(O, function(t) {
                return "\\" + L[t];
            }), i && (r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), n && (r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), 
            s && (r += "';\n" + s + "\n__p+='"), o = a + e.length, e;
        }), r += "';\n", i.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
        try {
            n = Function(i.variable || "obj", "_", r);
        } catch (a) {
            throw a.source = r, a;
        }
        if (e) return n(e, k);
        var l = function(t) {
            return n.call(this, t, k);
        };
        return l.source = "function(" + (i.variable || "obj") + "){\n" + r + "}", l;
    }, k.chain = function(t) {
        return k(t).chain();
    };
    var H = function(t) {
        return this._chain ? k(t).chain() : t;
    };
    k.mixin(k), $([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(t) {
        var e = n[t];
        k.prototype[t] = function() {
            var i = this._wrapped;
            return e.apply(i, arguments), "shift" != t && "splice" != t || 0 !== i.length || delete i[0], H.call(this, i);
        };
    }), $([ "concat", "join", "slice" ], function(t) {
        var e = n[t];
        k.prototype[t] = function() {
            return H.call(this, e.apply(this._wrapped, arguments));
        };
    }), k.extend(k.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}.call(this), //     Backbone may be freely distributed under the MIT license.
function() {
    var t, e = this, i = e.Backbone, n = [], s = n.push, o = n.slice, r = n.splice;
    t = "undefined" != typeof exports ? exports : e.Backbone = {}, t.VERSION = "1.0.0";
    var a = e._;
    a || "undefined" == typeof require || (a = require("underscore")), t.$ = e.jQuery || e.Zepto || e.ender || e.$, 
    t.noConflict = function() {
        return e.Backbone = i, this;
    }, t.emulateHTTP = !1, t.emulateJSON = !1;
    var l = t.Events = {
        on: function(t, e, i) {
            if (!h(this, "on", t, [ e, i ]) || !e) return this;
            this._events || (this._events = {});
            var n = this._events[t] || (this._events[t] = []);
            return n.push({
                callback: e,
                context: i,
                ctx: i || this
            }), this;
        },
        once: function(t, e, i) {
            if (!h(this, "once", t, [ e, i ]) || !e) return this;
            var n = this, s = a.once(function() {
                n.off(t, s), e.apply(this, arguments);
            });
            return s._callback = e, this.on(t, s, i);
        },
        off: function(t, e, i) {
            var n, s, o, r, l, c, u, p;
            if (!this._events || !h(this, "off", t, [ e, i ])) return this;
            if (!t && !e && !i) return this._events = {}, this;
            for (r = t ? [ t ] : a.keys(this._events), l = 0, c = r.length; c > l; l++) if (t = r[l], o = this._events[t]) {
                if (this._events[t] = n = [], e || i) for (u = 0, p = o.length; p > u; u++) s = o[u], (e && e !== s.callback && e !== s.callback._callback || i && i !== s.context) && n.push(s);
                n.length || delete this._events[t];
            }
            return this;
        },
        trigger: function(t) {
            if (!this._events) return this;
            var e = o.call(arguments, 1);
            if (!h(this, "trigger", t, e)) return this;
            var i = this._events[t], n = this._events.all;
            return i && u(i, e), n && u(n, arguments), this;
        },
        stopListening: function(t, e, i) {
            var n = this._listeners;
            if (!n) return this;
            var s = !e && !i;
            "object" == typeof e && (i = this), t && ((n = {})[t._listenerId] = t);
            for (var o in n) n[o].off(e, i, this), s && delete this._listeners[o];
            return this;
        }
    }, c = /\s+/, h = function(t, e, i, n) {
        if (!i) return !0;
        if ("object" == typeof i) {
            for (var s in i) t[e].apply(t, [ s, i[s] ].concat(n));
            return !1;
        }
        if (c.test(i)) {
            for (var o = i.split(c), r = 0, a = o.length; a > r; r++) t[e].apply(t, [ o[r] ].concat(n));
            return !1;
        }
        return !0;
    }, u = function(t, e) {
        var i, n = -1, s = t.length, o = e[0], r = e[1], a = e[2];
        switch (e.length) {
          case 0:
            for (;s > ++n; ) (i = t[n]).callback.call(i.ctx);
            return;

          case 1:
            for (;s > ++n; ) (i = t[n]).callback.call(i.ctx, o);
            return;

          case 2:
            for (;s > ++n; ) (i = t[n]).callback.call(i.ctx, o, r);
            return;

          case 3:
            for (;s > ++n; ) (i = t[n]).callback.call(i.ctx, o, r, a);
            return;

          default:
            for (;s > ++n; ) (i = t[n]).callback.apply(i.ctx, e);
        }
    }, p = {
        listenTo: "on",
        listenToOnce: "once"
    };
    a.each(p, function(t, e) {
        l[e] = function(e, i, n) {
            var s = this._listeners || (this._listeners = {}), o = e._listenerId || (e._listenerId = a.uniqueId("l"));
            return s[o] = e, "object" == typeof i && (n = this), e[t](i, n, this), this;
        };
    }), l.bind = l.on, l.unbind = l.off, a.extend(t, l);
    var d = t.Model = function(t, e) {
        var i, n = t || {};
        e || (e = {}), this.cid = a.uniqueId("c"), this.attributes = {}, a.extend(this, a.pick(e, g)), e.parse && (n = this.parse(n, e) || {}), 
        (i = a.result(this, "defaults")) && (n = a.defaults({}, n, i)), this.set(n, e), this.changed = {}, this.initialize.apply(this, arguments);
    }, g = [ "url", "urlRoot", "collection" ];
    a.extend(d.prototype, l, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return a.clone(this.attributes);
        },
        sync: function() {
            return t.sync.apply(this, arguments);
        },
        get: function(t) {
            return this.attributes[t];
        },
        escape: function(t) {
            return a.escape(this.get(t));
        },
        has: function(t) {
            return null != this.get(t);
        },
        set: function(t, e, i) {
            var n, s, o, r, l, c, h, u;
            if (null == t) return this;
            if ("object" == typeof t ? (s = t, i = e) : (s = {})[t] = e, i || (i = {}), !this._validate(s, i)) return !1;
            o = i.unset, l = i.silent, r = [], c = this._changing, this._changing = !0, c || (this._previousAttributes = a.clone(this.attributes), 
            this.changed = {}), u = this.attributes, h = this._previousAttributes, this.idAttribute in s && (this.id = s[this.idAttribute]);
            for (n in s) e = s[n], a.isEqual(u[n], e) || r.push(n), a.isEqual(h[n], e) ? delete this.changed[n] : this.changed[n] = e, 
            o ? delete u[n] : u[n] = e;
            if (!l) {
                r.length && (this._pending = !0);
                for (var p = 0, d = r.length; d > p; p++) this.trigger("change:" + r[p], this, u[r[p]], i);
            }
            if (c) return this;
            if (!l) for (;this._pending; ) this._pending = !1, this.trigger("change", this, i);
            return this._pending = !1, this._changing = !1, this;
        },
        unset: function(t, e) {
            return this.set(t, void 0, a.extend({}, e, {
                unset: !0
            }));
        },
        clear: function(t) {
            var e = {};
            for (var i in this.attributes) e[i] = void 0;
            return this.set(e, a.extend({}, t, {
                unset: !0
            }));
        },
        hasChanged: function(t) {
            return null == t ? !a.isEmpty(this.changed) : a.has(this.changed, t);
        },
        changedAttributes: function(t) {
            if (!t) return this.hasChanged() ? a.clone(this.changed) : !1;
            var e, i = !1, n = this._changing ? this._previousAttributes : this.attributes;
            for (var s in t) a.isEqual(n[s], e = t[s]) || ((i || (i = {}))[s] = e);
            return i;
        },
        previous: function(t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null;
        },
        previousAttributes: function() {
            return a.clone(this._previousAttributes);
        },
        fetch: function(t) {
            t = t ? a.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
            var e = this, i = t.success;
            return t.success = function(n) {
                return e.set(e.parse(n, t), t) ? (i && i(e, n, t), e.trigger("sync", e, n, t), void 0) : !1;
            }, O(this, t), this.sync("read", this, t);
        },
        save: function(t, e, i) {
            var n, s, o, r = this.attributes;
            if (null == t || "object" == typeof t ? (n = t, i = e) : (n = {})[t] = e, !(!n || i && i.wait || this.set(n, i))) return !1;
            if (i = a.extend({
                validate: !0
            }, i), !this._validate(n, i)) return !1;
            n && i.wait && (this.attributes = a.extend({}, r, n)), void 0 === i.parse && (i.parse = !0);
            var l = this, c = i.success;
            return i.success = function(t) {
                l.attributes = r;
                var e = l.parse(t, i);
                return i.wait && (e = a.extend(n || {}, e)), a.isObject(e) && !l.set(e, i) ? !1 : (c && c(l, t, i), 
                l.trigger("sync", l, t, i), void 0);
            }, O(this, i), s = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === s && (i.attrs = n), 
            o = this.sync(s, this, i), n && i.wait && (this.attributes = r), o;
        },
        destroy: function(t) {
            t = t ? a.clone(t) : {};
            var e = this, i = t.success, n = function() {
                e.trigger("destroy", e, e.collection, t);
            };
            if (t.success = function(s) {
                (t.wait || e.isNew()) && n(), i && i(e, s, t), e.isNew() || e.trigger("sync", e, s, t);
            }, this.isNew()) return t.success(), !1;
            O(this, t);
            var s = this.sync("delete", this, t);
            return t.wait || n(), s;
        },
        url: function() {
            var t = a.result(this, "urlRoot") || a.result(this.collection, "url") || L();
            return this.isNew() ? t : t + ("/" === t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id);
        },
        parse: function(t) {
            return t;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return null == this.id;
        },
        isValid: function(t) {
            return this._validate({}, a.extend(t || {}, {
                validate: !0
            }));
        },
        _validate: function(t, e) {
            if (!e.validate || !this.validate) return !0;
            t = a.extend({}, this.attributes, t);
            var i = this.validationError = this.validate(t, e) || null;
            return i ? (this.trigger("invalid", this, i, a.extend(e || {}, {
                validationError: i
            })), !1) : !0;
        }
    });
    var f = [ "keys", "values", "pairs", "invert", "pick", "omit" ];
    a.each(f, function(t) {
        d.prototype[t] = function() {
            var e = o.call(arguments);
            return e.unshift(this.attributes), a[t].apply(a, e);
        };
    });
    var m = t.Collection = function(t, e) {
        e || (e = {}), e.url && (this.url = e.url), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), 
        this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, a.extend({
            silent: !0
        }, e));
    }, v = {
        add: !0,
        remove: !0,
        merge: !0
    }, y = {
        add: !0,
        merge: !1,
        remove: !1
    };
    a.extend(m.prototype, l, {
        model: d,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t);
            });
        },
        sync: function() {
            return t.sync.apply(this, arguments);
        },
        add: function(t, e) {
            return this.set(t, a.defaults(e || {}, y));
        },
        remove: function(t, e) {
            t = a.isArray(t) ? t.slice() : [ t ], e || (e = {});
            var i, n, s, o;
            for (i = 0, n = t.length; n > i; i++) o = this.get(t[i]), o && (delete this._byId[o.id], delete this._byId[o.cid], 
            s = this.indexOf(o), this.models.splice(s, 1), this.length--, e.silent || (e.index = s, o.trigger("remove", o, this, e)), 
            this._removeReference(o));
            return this;
        },
        set: function(t, e) {
            e = a.defaults(e || {}, v), e.parse && (t = this.parse(t, e)), a.isArray(t) || (t = t ? [ t ] : []);
            var i, n, o, l, c, h = e.at, u = this.comparator && null == h && e.sort !== !1, p = a.isString(this.comparator) ? this.comparator : null, d = [], g = [], f = {};
            for (i = 0, n = t.length; n > i; i++) (o = this._prepareModel(t[i], e)) && ((l = this.get(o)) ? (e.remove && (f[l.cid] = !0), 
            e.merge && (l.set(o.attributes, e), u && !c && l.hasChanged(p) && (c = !0))) : e.add && (d.push(o), 
            o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, null != o.id && (this._byId[o.id] = o)));
            if (e.remove) {
                for (i = 0, n = this.length; n > i; ++i) f[(o = this.models[i]).cid] || g.push(o);
                g.length && this.remove(g, e);
            }
            if (d.length && (u && (c = !0), this.length += d.length, null != h ? r.apply(this.models, [ h, 0 ].concat(d)) : s.apply(this.models, d)), 
            c && this.sort({
                silent: !0
            }), e.silent) return this;
            for (i = 0, n = d.length; n > i; i++) (o = d[i]).trigger("add", o, this, e);
            return c && this.trigger("sort", this, e), this;
        },
        reset: function(t, e) {
            e || (e = {});
            for (var i = 0, n = this.models.length; n > i; i++) this._removeReference(this.models[i]);
            return e.previousModels = this.models, this._reset(), this.add(t, a.extend({
                silent: !0
            }, e)), e.silent || this.trigger("reset", this, e), this;
        },
        push: function(t, e) {
            return t = this._prepareModel(t, e), this.add(t, a.extend({
                at: this.length
            }, e)), t;
        },
        pop: function(t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t), e;
        },
        unshift: function(t, e) {
            return t = this._prepareModel(t, e), this.add(t, a.extend({
                at: 0
            }, e)), t;
        },
        shift: function(t) {
            var e = this.at(0);
            return this.remove(e, t), e;
        },
        slice: function(t, e) {
            return this.models.slice(t, e);
        },
        get: function(t) {
            return null == t ? void 0 : this._byId[null != t.id ? t.id : t.cid || t];
        },
        at: function(t) {
            return this.models[t];
        },
        where: function(t, e) {
            return a.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                for (var i in t) if (t[i] !== e.get(i)) return !1;
                return !0;
            });
        },
        findWhere: function(t) {
            return this.where(t, !0);
        },
        sort: function(t) {
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            return t || (t = {}), a.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(a.bind(this.comparator, this)), 
            t.silent || this.trigger("sort", this, t), this;
        },
        sortedIndex: function(t, e, i) {
            e || (e = this.comparator);
            var n = a.isFunction(e) ? e : function(t) {
                return t.get(e);
            };
            return a.sortedIndex(this.models, t, n, i);
        },
        pluck: function(t) {
            return a.invoke(this.models, "get", t);
        },
        fetch: function(t) {
            t = t ? a.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
            var e = t.success, i = this;
            return t.success = function(n) {
                var s = t.reset ? "reset" : "set";
                i[s](n, t), e && e(i, n, t), i.trigger("sync", i, n, t);
            }, O(this, t), this.sync("read", this, t);
        },
        create: function(t, e) {
            if (e = e ? a.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
            e.wait || this.add(t, e);
            var i = this, n = e.success;
            return e.success = function(s) {
                e.wait && i.add(t, e), n && n(t, s, e);
            }, t.save(null, e), t;
        },
        parse: function(t) {
            return t;
        },
        clone: function() {
            return new this.constructor(this.models);
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {};
        },
        _prepareModel: function(t, e) {
            if (t instanceof d) return t.collection || (t.collection = this), t;
            e || (e = {}), e.collection = this;
            var i = new this.model(t, e);
            return i._validate(t, e) ? i : (this.trigger("invalid", this, t, e), !1);
        },
        _removeReference: function(t) {
            this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(t, e, i, n) {
            ("add" !== t && "remove" !== t || i === this) && ("destroy" === t && this.remove(e, n), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], 
            null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments));
        }
    });
    var b = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain" ];
    a.each(b, function(t) {
        m.prototype[t] = function() {
            var e = o.call(arguments);
            return e.unshift(this.models), a[t].apply(a, e);
        };
    });
    var w = [ "groupBy", "countBy", "sortBy" ];
    a.each(w, function(t) {
        m.prototype[t] = function(e, i) {
            var n = a.isFunction(e) ? e : function(t) {
                return t.get(e);
            };
            return a[t](this.models, n, i);
        };
    });
    var _ = t.View = function(t) {
        this.cid = a.uniqueId("view"), this._configure(t || {}), this._ensureElement(), this.initialize.apply(this, arguments), 
        this.delegateEvents();
    }, x = /^(\S+)\s*(.*)$/, k = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
    a.extend(_.prototype, l, {
        tagName: "div",
        $: function(t) {
            return this.$el.find(t);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this;
        },
        setElement: function(e, i) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], 
            i !== !1 && this.delegateEvents(), this;
        },
        delegateEvents: function(t) {
            if (!t && !(t = a.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var e in t) {
                var i = t[e];
                if (a.isFunction(i) || (i = this[t[e]]), i) {
                    var n = e.match(x), s = n[1], o = n[2];
                    i = a.bind(i, this), s += ".delegateEvents" + this.cid, "" === o ? this.$el.on(s, i) : this.$el.on(s, o, i);
                }
            }
            return this;
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this;
        },
        _configure: function(t) {
            this.options && (t = a.extend({}, a.result(this, "options"), t)), a.extend(this, a.pick(t, k)), this.options = t;
        },
        _ensureElement: function() {
            if (this.el) this.setElement(a.result(this, "el"), !1); else {
                var e = a.extend({}, a.result(this, "attributes"));
                this.id && (e.id = a.result(this, "id")), this.className && (e["class"] = a.result(this, "className"));
                var i = t.$("<" + a.result(this, "tagName") + ">").attr(e);
                this.setElement(i, !1);
            }
        }
    }), t.sync = function(e, i, n) {
        var s = $[e];
        a.defaults(n || (n = {}), {
            emulateHTTP: t.emulateHTTP,
            emulateJSON: t.emulateJSON
        });
        var o = {
            type: s,
            dataType: "json"
        };
        if (n.url || (o.url = a.result(i, "url") || L()), null != n.data || !i || "create" !== e && "update" !== e && "patch" !== e || (o.contentType = "application/json", 
        o.data = JSON.stringify(n.attrs || i.toJSON(n))), n.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", 
        o.data = o.data ? {
            model: o.data
        } : {}), n.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s)) {
            o.type = "POST", n.emulateJSON && (o.data._method = s);
            var r = n.beforeSend;
            n.beforeSend = function(t) {
                return t.setRequestHeader("X-HTTP-Method-Override", s), r ? r.apply(this, arguments) : void 0;
            };
        }
        "GET" === o.type || n.emulateJSON || (o.processData = !1), "PATCH" !== o.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (o.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP");
        });
        var l = n.xhr = t.ajax(a.extend(o, n));
        return i.trigger("request", i, l, n), l;
    };
    var $ = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    t.ajax = function() {
        return t.$.ajax.apply(t.$, arguments);
    };
    var C = t.Router = function(t) {
        t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, T = /\((.*?)\)/g, P = /(\(\?)?:\w+/g, S = /\*\w+/g, E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    a.extend(C.prototype, l, {
        initialize: function() {},
        route: function(e, i, n) {
            a.isRegExp(e) || (e = this._routeToRegExp(e)), a.isFunction(i) && (n = i, i = ""), n || (n = this[i]);
            var s = this;
            return t.history.route(e, function(o) {
                var r = s._extractParameters(e, o);
                n && n.apply(s, r), s.trigger.apply(s, [ "route:" + i ].concat(r)), s.trigger("route", i, r), t.history.trigger("route", s, i, r);
            }), this;
        },
        navigate: function(e, i) {
            return t.history.navigate(e, i), this;
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = a.result(this, "routes");
                for (var t, e = a.keys(this.routes); null != (t = e.pop()); ) this.route(t, this.routes[t]);
            }
        },
        _routeToRegExp: function(t) {
            return t = t.replace(E, "\\$&").replace(T, "(?:$1)?").replace(P, function(t, e) {
                return e ? t : "([^/]+)";
            }).replace(S, "(.*?)"), RegExp("^" + t + "$");
        },
        _extractParameters: function(t, e) {
            var i = t.exec(e).slice(1);
            return a.map(i, function(t) {
                return t ? decodeURIComponent(t) : null;
            });
        }
    });
    var M = t.History = function() {
        this.handlers = [], a.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, 
        this.history = window.history);
    }, I = /^[#\/]|\s+$/g, D = /^\/+|\/+$/g, A = /msie [\w.]+/, N = /\/$/;
    M.started = !1, a.extend(M.prototype, l, {
        interval: 50,
        getHash: function(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : "";
        },
        getFragment: function(t, e) {
            if (null == t) if (this._hasPushState || !this._wantsHashChange || e) {
                t = this.location.pathname;
                var i = this.root.replace(N, "");
                t.indexOf(i) || (t = t.substr(i.length));
            } else t = this.getHash();
            return t.replace(I, "");
        },
        start: function(e) {
            if (M.started) throw Error("Backbone.history has already been started");
            M.started = !0, this.options = a.extend({}, {
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, 
            this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var i = this.getFragment(), n = document.documentMode, s = A.exec(navigator.userAgent.toLowerCase()) && (!n || 7 >= n);
            this.root = ("/" + this.root + "/").replace(D, "/"), s && this._wantsHashChange && (this.iframe = t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, 
            this.navigate(i)), this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !s ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), 
            this.fragment = i;
            var o = this.location, r = o.pathname.replace(/[^\/]$/, "$&/") === this.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !r ? (this.fragment = this.getFragment(null, !0), 
            this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && r && o.hash && (this.fragment = this.getHash().replace(I, ""), 
            this.history.replaceState({}, document.title, this.root + this.fragment + o.search)), this.options.silent ? void 0 : this.loadUrl());
        },
        stop: function() {
            t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), 
            M.started = !1;
        },
        route: function(t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            });
        },
        checkUrl: function() {
            var t = this.getFragment();
            return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), 
            this.loadUrl() || this.loadUrl(this.getHash()), void 0);
        },
        loadUrl: function(t) {
            var e = this.fragment = this.getFragment(t), i = a.any(this.handlers, function(t) {
                return t.route.test(e) ? (t.callback(e), !0) : void 0;
            });
            return i;
        },
        navigate: function(t, e) {
            if (!M.started) return !1;
            if (e && e !== !0 || (e = {
                trigger: e
            }), t = this.getFragment(t || ""), this.fragment !== t) {
                this.fragment = t;
                var i = this.root + t;
                if (this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i); else {
                    if (!this._wantsHashChange) return this.location.assign(i);
                    this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), 
                    this._updateHash(this.iframe.location, t, e.replace));
                }
                e.trigger && this.loadUrl(t);
            }
        },
        _updateHash: function(t, e, i) {
            if (i) {
                var n = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(n + "#" + e);
            } else t.hash = "#" + e;
        }
    }), t.history = new M();
    var R = function(t, e) {
        var i, n = this;
        i = t && a.has(t, "constructor") ? t.constructor : function() {
            return n.apply(this, arguments);
        }, a.extend(i, n, e);
        var s = function() {
            this.constructor = i;
        };
        return s.prototype = n.prototype, i.prototype = new s(), t && a.extend(i.prototype, t), i.__super__ = n.prototype, 
        i;
    };
    d.extend = m.extend = C.extend = _.extend = M.extend = R;
    var L = function() {
        throw Error('A "url" property or function must be specified');
    }, O = function(t, e) {
        var i = e.error;
        e.error = function(n) {
            i && i(t, n, e), t.trigger("error", t, n, e);
        };
    };
}.call(this), function(t) {
    function e(t) {
        if (t in u.style) return t;
        var e = [ "Moz", "Webkit", "O", "ms" ], i = t.charAt(0).toUpperCase() + t.substr(1);
        if (t in u.style) return t;
        for (var n = 0; e.length > n; ++n) {
            var s = e[n] + i;
            if (s in u.style) return s;
        }
    }
    function i() {
        return u.style[p.transform] = "", u.style[p.transform] = "rotateY(90deg)", "" !== u.style[p.transform];
    }
    function n(t) {
        return "string" == typeof t && this.parse(t), this;
    }
    function s(t, e, i) {
        e === !0 ? t.queue(i) : e ? t.queue(e, i) : i();
    }
    function o(e) {
        var i = [];
        return t.each(e, function(e) {
            e = t.camelCase(e), e = t.transit.propertyMap[e] || t.cssProps[e] || e, e = l(e), -1 === t.inArray(e, i) && i.push(e);
        }), i;
    }
    function r(e, i, n, s) {
        var r = o(e);
        t.cssEase[n] && (n = t.cssEase[n]);
        var a = "" + h(i) + " " + n;
        parseInt(s, 10) > 0 && (a += " " + h(s));
        var l = [];
        return t.each(r, function(t, e) {
            l.push(e + " " + a);
        }), l.join(", ");
    }
    function a(e, i) {
        i || (t.cssNumber[e] = !0), t.transit.propertyMap[e] = p.transform, t.cssHooks[e] = {
            get: function(i) {
                var n = t(i).css("transit:transform");
                return n.get(e);
            },
            set: function(i, n) {
                var s = t(i).css("transit:transform");
                s.setFromString(e, n), t(i).css({
                    "transit:transform": s
                });
            }
        };
    }
    function l(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase();
        });
    }
    function c(t, e) {
        return "string" != typeof t || t.match(/^[\-0-9\.]+$/) ? "" + t + e : t;
    }
    function h(e) {
        var i = e;
        return t.fx.speeds[i] && (i = t.fx.speeds[i]), c(i, "ms");
    }
    t.transit = {
        version: "0.9.9",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: !0,
        useTransitionEnd: !1
    };
    var u = document.createElement("div"), p = {}, d = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    p.transition = e("transition"), p.transitionDelay = e("transitionDelay"), p.transform = e("transform"), 
    p.transformOrigin = e("transformOrigin"), p.transform3d = i();
    var g = {
        transition: "transitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    }, f = p.transitionEnd = g[p.transition] || null;
    for (var m in p) p.hasOwnProperty(m) && t.support[m] === void 0 && (t.support[m] = p[m]);
    u = null, t.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    }, t.cssHooks["transit:transform"] = {
        get: function(e) {
            return t(e).data("transform") || new n();
        },
        set: function(e, i) {
            var s = i;
            s instanceof n || (s = new n(s)), e.style[p.transform] = "WebkitTransform" !== p.transform || d ? "" + s : s.toString(!0), 
            t(e).data("transform", s);
        }
    }, t.cssHooks.transform = {
        set: t.cssHooks["transit:transform"].set
    }, "1.8" > t.fn.jquery && (t.cssHooks.transformOrigin = {
        get: function(t) {
            return t.style[p.transformOrigin];
        },
        set: function(t, e) {
            t.style[p.transformOrigin] = e;
        }
    }, t.cssHooks.transition = {
        get: function(t) {
            return t.style[p.transition];
        },
        set: function(t, e) {
            t.style[p.transition] = e;
        }
    }), a("scale"), a("translate"), a("rotate"), a("rotateX"), a("rotateY"), a("rotate3d"), a("perspective"), 
    a("skewX"), a("skewY"), a("x", !0), a("y", !0), n.prototype = {
        setFromString: function(t, e) {
            var i = "string" == typeof e ? e.split(",") : e.constructor === Array ? e : [ e ];
            i.unshift(t), n.prototype.set.apply(this, i);
        },
        set: function(t) {
            var e = Array.prototype.slice.apply(arguments, [ 1 ]);
            this.setter[t] ? this.setter[t].apply(this, e) : this[t] = e.join(",");
        },
        get: function(t) {
            return this.getter[t] ? this.getter[t].apply(this) : this[t] || 0;
        },
        setter: {
            rotate: function(t) {
                this.rotate = c(t, "deg");
            },
            rotateX: function(t) {
                this.rotateX = c(t, "deg");
            },
            rotateY: function(t) {
                this.rotateY = c(t, "deg");
            },
            scale: function(t, e) {
                void 0 === e && (e = t), this.scale = t + "," + e;
            },
            skewX: function(t) {
                this.skewX = c(t, "deg");
            },
            skewY: function(t) {
                this.skewY = c(t, "deg");
            },
            perspective: function(t) {
                this.perspective = c(t, "px");
            },
            x: function(t) {
                this.set("translate", t, null);
            },
            y: function(t) {
                this.set("translate", null, t);
            },
            translate: function(t, e) {
                void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), 
                null !== t && void 0 !== t && (this._translateX = c(t, "px")), null !== e && void 0 !== e && (this._translateY = c(e, "px")), 
                this.translate = this._translateX + "," + this._translateY;
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0;
            },
            y: function() {
                return this._translateY || 0;
            },
            scale: function() {
                var t = (this.scale || "1,1").split(",");
                return t[0] && (t[0] = parseFloat(t[0])), t[1] && (t[1] = parseFloat(t[1])), t[0] === t[1] ? t[0] : t;
            },
            rotate3d: function() {
                for (var t = (this.rotate3d || "0,0,0,0deg").split(","), e = 0; 3 >= e; ++e) t[e] && (t[e] = parseFloat(t[e]));
                return t[3] && (t[3] = c(t[3], "deg")), t;
            }
        },
        parse: function(t) {
            var e = this;
            t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, i, n) {
                e.setFromString(i, n);
            });
        },
        toString: function(t) {
            var e = [];
            for (var i in this) if (this.hasOwnProperty(i)) {
                if (!p.transform3d && ("rotateX" === i || "rotateY" === i || "perspective" === i || "transformOrigin" === i)) continue;
                "_" !== i[0] && (t && "scale" === i ? e.push(i + "3d(" + this[i] + ",1)") : t && "translate" === i ? e.push(i + "3d(" + this[i] + ",0)") : e.push(i + "(" + this[i] + ")"));
            }
            return e.join(" ");
        }
    }, t.fn.transition = t.fn.transit = function(e, i, n, o) {
        var a = this, l = 0, c = !0;
        "function" == typeof i && (o = i, i = void 0), "function" == typeof n && (o = n, n = void 0), e.easing !== void 0 && (n = e.easing, 
        delete e.easing), e.duration !== void 0 && (i = e.duration, delete e.duration), e.complete !== void 0 && (o = e.complete, 
        delete e.complete), e.queue !== void 0 && (c = e.queue, delete e.queue), e.delay !== void 0 && (l = e.delay, 
        delete e.delay), i === void 0 && (i = t.fx.speeds._default), n === void 0 && (n = t.cssEase._default), 
        i = h(i);
        var u = r(e, i, n, l), d = t.transit.enabled && p.transition, g = d ? parseInt(i, 10) + parseInt(l, 10) : 0;
        if (0 === g) {
            var m = function(t) {
                a.css(e), o && o.apply(a), t && t();
            };
            return s(a, c, m), a;
        }
        var v = {}, y = function(i) {
            var n = !1, s = function() {
                n && a.unbind(f, s), g > 0 && a.each(function() {
                    this.style[p.transition] = v[this] || null;
                }), "function" == typeof o && o.apply(a), "function" == typeof i && i();
            };
            g > 0 && f && t.transit.useTransitionEnd ? (n = !0, a.bind(f, s)) : window.setTimeout(s, g), a.each(function() {
                g > 0 && (this.style[p.transition] = u), t(this).css(e);
            });
        }, b = function(t) {
            this.offsetWidth, y(t);
        };
        return s(a, c, b), this;
    }, t.transit.getTransitionValue = r;
}(jQuery), function(t, e) {
    function i(e, i) {
        var s, o, r, a = e.nodeName.toLowerCase();
        return "area" === a ? (s = e.parentNode, o = s.name, e.href && o && "map" === s.nodeName.toLowerCase() ? (r = t("img[usemap=#" + o + "]")[0], 
        !!r && n(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e);
    }
    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility");
        }).length;
    }
    var s = 0, o = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        focus: function(e) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), n && n.call(e);
                    }, i);
                }) : e.apply(this, arguments);
            };
        }(t.fn.focus),
        scrollParent: function() {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"));
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"));
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e;
        },
        zIndex: function(i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length) for (var n, s, o = t(this[0]); o.length && o[0] !== document; ) {
                if (n = o.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(o.css("zIndex"), 10), 
                !isNaN(s) && 0 !== s)) return s;
                o = o.parent();
            }
            return 0;
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s);
            });
        },
        removeUniqueId: function() {
            return this.each(function() {
                o.test(this.id) && t(this).removeAttr("id");
            });
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e);
            };
        }) : function(e, i, n) {
            return !!t.data(e, n[3]);
        },
        focusable: function(e) {
            return i(e, !isNaN(t.attr(e, "tabindex")));
        },
        tabbable: function(e) {
            var n = t.attr(e, "tabindex"), s = isNaN(n);
            return (s || n >= 0) && i(e, !s);
        }
    }), t("<a>").outerWidth(1).jquery || t.each([ "Width", "Height" ], function(i, n) {
        function s(e, i, n, s) {
            return t.each(o, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), 
                s && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
            }), i;
        }
        var o = "Width" === n ? [ "Left", "Right" ] : [ "Top", "Bottom" ], r = n.toLowerCase(), a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + n] = function(i) {
            return i === e ? a["inner" + n].call(this) : this.each(function() {
                t(this).css(r, s(this, i) + "px");
            });
        }, t.fn["outer" + n] = function(e, i) {
            return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function() {
                t(this).css(r, s(this, e, !0, i) + "px");
            });
        };
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this);
        };
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), 
    t.fn.extend({
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault();
            });
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function(e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([ i, n[s] ]);
            },
            call: function(t, e, i) {
                var n, s = t.plugins[e];
                if (s && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (n = 0; s.length > n; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i);
            }
        },
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
            return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s);
        }
    });
}(jQuery), function(t, e) {
    var i = 0, n = Array.prototype.slice, s = t.cleanData;
    t.cleanData = function(e) {
        for (var i, n = 0; null != (i = e[n]); n++) try {
            t(i).triggerHandler("remove");
        } catch (o) {}
        s(e);
    }, t.widget = function(i, n, s) {
        var o, r, a, l, c = {}, h = i.split(".")[0];
        i = i.split(".")[1], o = h + "-" + i, s || (s = n, n = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
            return !!t.data(e, o);
        }, t[h] = t[h] || {}, r = t[h][i], a = t[h][i] = function(t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new a(t, i);
        }, t.extend(a, r, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), l = new n(), l.options = t.widget.extend({}, l.options), t.each(s, function(i, s) {
            return t.isFunction(s) ? (c[i] = function() {
                var t = function() {
                    return n.prototype[i].apply(this, arguments);
                }, e = function(t) {
                    return n.prototype[i].apply(this, t);
                };
                return function() {
                    var i, n = this._super, o = this._superApply;
                    return this._super = t, this._superApply = e, i = s.apply(this, arguments), this._super = n, this._superApply = o, 
                    i;
                };
            }(), e) : (c[i] = s, e);
        }), a.prototype = t.widget.extend(l, {
            widgetEventPrefix: r ? l.widgetEventPrefix : i
        }, c, {
            constructor: a,
            namespace: h,
            widgetName: i,
            widgetFullName: o
        }), r ? (t.each(r._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, a, i._proto);
        }), delete r._childConstructors) : n._childConstructors.push(a), t.widget.bridge(i, a);
    }, t.widget.extend = function(i) {
        for (var s, o, r = n.call(arguments, 1), a = 0, l = r.length; l > a; a++) for (s in r[a]) o = r[a][s], 
        r[a].hasOwnProperty(s) && o !== e && (i[s] = t.isPlainObject(o) ? t.isPlainObject(i[s]) ? t.widget.extend({}, i[s], o) : t.widget.extend({}, o) : o);
        return i;
    }, t.widget.bridge = function(i, s) {
        var o = s.prototype.widgetFullName || i;
        t.fn[i] = function(r) {
            var a = "string" == typeof r, l = n.call(arguments, 1), c = this;
            return r = !a && l.length ? t.widget.extend.apply(null, [ r ].concat(l)) : r, a ? this.each(function() {
                var n, s = t.data(this, o);
                return s ? t.isFunction(s[r]) && "_" !== r.charAt(0) ? (n = s[r].apply(s, l), n !== s && n !== e ? (c = n && n.jquery ? c.pushStack(n.get()) : n, 
                !1) : e) : t.error("no such method '" + r + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'");
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(r || {})._init() : t.data(this, o, new s(r, this));
            }), c;
        };
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, 
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), 
            this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy();
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), 
            this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function() {
            return this.element;
        },
        option: function(i, n) {
            var s, o, r, a = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i) if (a = {}, s = i.split("."), i = s.shift(), s.length) {
                for (o = a[i] = t.widget.extend({}, this.options[i]), r = 0; s.length - 1 > r; r++) o[s[r]] = o[s[r]] || {}, 
                o = o[s[r]];
                if (i = s.pop(), n === e) return o[i] === e ? null : o[i];
                o[i] = n;
            } else {
                if (n === e) return this.options[i] === e ? null : this.options[i];
                a[i] = n;
            }
            return this._setOptions(a), this;
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this;
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), 
            this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this;
        },
        enable: function() {
            return this._setOption("disabled", !1);
        },
        disable: function() {
            return this._setOption("disabled", !0);
        },
        _on: function(i, n, s) {
            var o, r = this;
            "boolean" != typeof i && (s = n, n = i, i = !1), s ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (s = n, 
            n = this.element, o = this.widget()), t.each(s, function(s, a) {
                function l() {
                    return i || r.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? r[a] : a).apply(r, arguments) : e;
                }
                "string" != typeof a && (l.guid = a.guid = a.guid || l.guid || t.guid++);
                var c = s.match(/^(\w+)\s*(.*)$/), h = c[1] + r.eventNamespace, u = c[2];
                u ? o.delegate(u, h, l) : n.bind(h, l);
            });
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e);
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments);
            }
            var n = this;
            return setTimeout(i, e || 0);
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(e, i, n) {
            var s, o, r = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
            i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(t.isFunction(r) && r.apply(this.element[0], [ i ].concat(n)) === !1 || i.isDefaultPrevented());
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, o) {
            "string" == typeof s && (s = {
                effect: s
            });
            var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
            s = s || {}, "number" == typeof s && (s = {
                duration: s
            }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
                t(this)[e](), o && o.call(n[0]), i();
            });
        };
    });
}(jQuery), function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1;
    }), t.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t);
            }).bind("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), 
                i.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var n = this, s = 1 === i.which, o = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return s && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    n.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, 
                !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(t) {
                    return n._mouseMove(t);
                }, this._mouseUpDelegate = function(t) {
                    return n._mouseUp(t);
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                i.preventDefault(), e = !0, !0)) : !0;
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), 
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, 
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(e)), !1;
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    });
}(jQuery), function(t, e) {
    function i(t, e, i) {
        return [ parseFloat(t[0]) * (d.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (d.test(t[1]) ? i / 100 : 1) ];
    }
    function n(e, i) {
        return parseInt(t.css(e, i), 10) || 0;
    }
    function s(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        };
    }
    t.ui = t.ui || {};
    var o, r = Math.max, a = Math.abs, l = Math.round, c = /left|center|right/, h = /top|center|bottom/, u = /[\+\-]\d+(\.[\d]+)?%?/, p = /^\w+/, d = /%$/, g = t.fn.position;
    t.position = {
        scrollbarWidth: function() {
            if (o !== e) return o;
            var i, n, s = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), r = s.children()[0];
            return t("body").append(s), i = r.offsetWidth, s.css("overflow", "scroll"), n = r.offsetWidth, i === n && (n = s[0].clientWidth), 
            s.remove(), o = i - n;
        },
        getScrollInfo: function(e) {
            var i = e.isWindow ? "" : e.element.css("overflow-x"), n = e.isWindow ? "" : e.element.css("overflow-y"), s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
            return {
                width: o ? t.position.scrollbarWidth() : 0,
                height: s ? t.position.scrollbarWidth() : 0
            };
        },
        getWithinInfo: function(e) {
            var i = t(e || window), n = t.isWindow(i[0]);
            return {
                element: i,
                isWindow: n,
                offset: i.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: n ? i.width() : i.outerWidth(),
                height: n ? i.height() : i.outerHeight()
            };
        }
    }, t.fn.position = function(e) {
        if (!e || !e.of) return g.apply(this, arguments);
        e = t.extend({}, e);
        var o, d, f, m, v, y, b = t(e.of), w = t.position.getWithinInfo(e.within), _ = t.position.getScrollInfo(w), x = (e.collision || "flip").split(" "), k = {};
        return y = s(b), b[0].preventDefault && (e.at = "left top"), d = y.width, f = y.height, m = y.offset, 
        v = t.extend({}, m), t.each([ "my", "at" ], function() {
            var t, i, n = (e[this] || "").split(" ");
            1 === n.length && (n = c.test(n[0]) ? n.concat([ "center" ]) : h.test(n[0]) ? [ "center" ].concat(n) : [ "center", "center" ]), 
            n[0] = c.test(n[0]) ? n[0] : "center", n[1] = h.test(n[1]) ? n[1] : "center", t = u.exec(n[0]), i = u.exec(n[1]), 
            k[this] = [ t ? t[0] : 0, i ? i[0] : 0 ], e[this] = [ p.exec(n[0])[0], p.exec(n[1])[0] ];
        }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += d : "center" === e.at[0] && (v.left += d / 2), 
        "bottom" === e.at[1] ? v.top += f : "center" === e.at[1] && (v.top += f / 2), o = i(k.at, d, f), v.left += o[0], 
        v.top += o[1], this.each(function() {
            var s, c, h = t(this), u = h.outerWidth(), p = h.outerHeight(), g = n(this, "marginLeft"), y = n(this, "marginTop"), $ = u + g + n(this, "marginRight") + _.width, C = p + y + n(this, "marginBottom") + _.height, T = t.extend({}, v), P = i(k.my, h.outerWidth(), h.outerHeight());
            "right" === e.my[0] ? T.left -= u : "center" === e.my[0] && (T.left -= u / 2), "bottom" === e.my[1] ? T.top -= p : "center" === e.my[1] && (T.top -= p / 2), 
            T.left += P[0], T.top += P[1], t.support.offsetFractions || (T.left = l(T.left), T.top = l(T.top)), 
            s = {
                marginLeft: g,
                marginTop: y
            }, t.each([ "left", "top" ], function(i, n) {
                t.ui.position[x[i]] && t.ui.position[x[i]][n](T, {
                    targetWidth: d,
                    targetHeight: f,
                    elemWidth: u,
                    elemHeight: p,
                    collisionPosition: s,
                    collisionWidth: $,
                    collisionHeight: C,
                    offset: [ o[0] + P[0], o[1] + P[1] ],
                    my: e.my,
                    at: e.at,
                    within: w,
                    elem: h
                });
            }), e.using && (c = function(t) {
                var i = m.left - T.left, n = i + d - u, s = m.top - T.top, o = s + f - p, l = {
                    target: {
                        element: b,
                        left: m.left,
                        top: m.top,
                        width: d,
                        height: f
                    },
                    element: {
                        element: h,
                        left: T.left,
                        top: T.top,
                        width: u,
                        height: p
                    },
                    horizontal: 0 > n ? "left" : i > 0 ? "right" : "center",
                    vertical: 0 > o ? "top" : s > 0 ? "bottom" : "middle"
                };
                u > d && d > a(i + n) && (l.horizontal = "center"), p > f && f > a(s + o) && (l.vertical = "middle"), 
                l.important = r(a(i), a(n)) > r(a(s), a(o)) ? "horizontal" : "vertical", e.using.call(this, t, l);
            }), h.offset(t.extend(T, {
                using: c
            }));
        });
    }, t.ui.position = {
        fit: {
            left: function(t, e) {
                var i, n = e.within, s = n.isWindow ? n.scrollLeft : n.offset.left, o = n.width, a = t.left - e.collisionPosition.marginLeft, l = s - a, c = a + e.collisionWidth - o - s;
                e.collisionWidth > o ? l > 0 && 0 >= c ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : t.left = c > 0 && 0 >= l ? s : l > c ? s + o - e.collisionWidth : s : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = r(t.left - a, t.left);
            },
            top: function(t, e) {
                var i, n = e.within, s = n.isWindow ? n.scrollTop : n.offset.top, o = e.within.height, a = t.top - e.collisionPosition.marginTop, l = s - a, c = a + e.collisionHeight - o - s;
                e.collisionHeight > o ? l > 0 && 0 >= c ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : t.top = c > 0 && 0 >= l ? s : l > c ? s + o - e.collisionHeight : s : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = r(t.top - a, t.top);
            }
        },
        flip: {
            left: function(t, e) {
                var i, n, s = e.within, o = s.offset.left + s.scrollLeft, r = s.width, l = s.isWindow ? s.scrollLeft : s.offset.left, c = t.left - e.collisionPosition.marginLeft, h = c - l, u = c + e.collisionWidth - r - l, p = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, g = -2 * e.offset[0];
                0 > h ? (i = t.left + p + d + g + e.collisionWidth - r - o, (0 > i || a(h) > i) && (t.left += p + d + g)) : u > 0 && (n = t.left - e.collisionPosition.marginLeft + p + d + g - l, 
                (n > 0 || u > a(n)) && (t.left += p + d + g));
            },
            top: function(t, e) {
                var i, n, s = e.within, o = s.offset.top + s.scrollTop, r = s.height, l = s.isWindow ? s.scrollTop : s.offset.top, c = t.top - e.collisionPosition.marginTop, h = c - l, u = c + e.collisionHeight - r - l, p = "top" === e.my[1], d = p ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, g = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, f = -2 * e.offset[1];
                0 > h ? (n = t.top + d + g + f + e.collisionHeight - r - o, t.top + d + g + f > h && (0 > n || a(h) > n) && (t.top += d + g + f)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + d + g + f - l, 
                t.top + d + g + f > u && (i > 0 || u > a(i)) && (t.top += d + g + f));
            }
        },
        flipfit: {
            left: function() {
                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
            },
            top: function() {
                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
            }
        }
    }, function() {
        var e, i, n, s, o, r = document.getElementsByTagName("body")[0], a = document.createElement("div");
        e = document.createElement(r ? "div" : "body"), n = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, r && t.extend(n, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (o in n) e.style[o] = n[o];
        e.appendChild(a), i = r || document.documentElement, i.insertBefore(e, i.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", 
        s = t(a).offset().left, t.support.offsetFractions = s > 10 && 11 > s, e.innerHTML = "", i.removeChild(e);
    }();
}(jQuery), function(t) {
    function e(t, e, i) {
        return t > e && e + i > t;
    }
    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, 
            this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this;
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments);
        },
        _mouseCapture: function(e, i) {
            var n = null, s = !1, o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), 
            t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0;
            }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), n ? !this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function() {
                this === e.target && (s = !0);
            }), s) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1 : !1);
        },
        _mouseStart: function(e, i, n) {
            var s, o, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), 
            this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), 
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), 
            this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), 
            r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), 
            o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), 
            r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), 
            r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), 
            this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !n) for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), 
            this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0;
        },
        _mouseDrag: function(e) {
            var i, n, s, o, r = this.options, a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - t(document).scrollTop() < r.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - r.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < r.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + r.scrollSpeed)), 
            e.pageX - t(document).scrollLeft() < r.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - r.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < r.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + r.scrollSpeed))), 
            a !== !1 && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), 
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            i = this.items.length - 1; i >= 0; i--) if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), 
            o && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], s) : !0)) {
                if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                break;
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), 
            this.lastPositionAbs = this.positionAbs, !1;
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this, s = this.placeholder.offset(), o = this.options.axis, r = {};
                    o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), 
                    o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
                        n._clear(e);
                    });
                } else this._clear(e, i);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), 
                this.containers[e].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), n = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
            }), !n.length && e.key && n.push(e.key + "="), n.join("&");
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), n = [];
            return e = e || {}, i.each(function() {
                n.push(t(e.item || this).attr(e.attribute || "id") || "");
            }), n;
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, n = this.positionAbs.top, s = n + this.helperProportions.height, o = t.left, r = o + t.width, a = t.top, l = a + t.height, c = this.offset.click.top, h = this.offset.click.left, u = "x" === this.options.axis || n + c > a && l > n + c, p = "y" === this.options.axis || e + h > o && r > e + h, d = u && p;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? d : e + this.helperProportions.width / 2 > o && r > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > a && l > s - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function(t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width), s = i && n, o = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
            return s ? this.floating ? r && "right" === r || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1;
        },
        _intersectsWithSides: function(t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), n = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), s = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && n || "left" === o && !n : s && ("down" === s && i || "up" === s && !i);
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left");
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this;
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [ t.connectWith ] : t.connectWith;
        },
        _getItemsAsjQuery: function(e) {
            var i, n, s, o, r = [], a = [], l = this._connectWith();
            if (l && e) for (i = l.length - 1; i >= 0; i--) for (s = t(l[i]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName), 
            o && o !== this && !o.options.disabled && a.push([ t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o ]);
            for (a.push([ t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            i = a.length - 1; i >= 0; i--) a[i][0].each(function() {
                r.push(this);
            });
            return t(r);
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [ this ];
            var i, n, s, o, r, a, l, c, h = this.items, u = [ [ t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this ] ], p = this._connectWith();
            if (p && this.ready) for (i = p.length - 1; i >= 0; i--) for (s = t(p[i]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName), 
            o && o !== this && !o.options.disabled && (u.push([ t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                item: this.currentItem
            }) : t(o.options.items, o.element), o ]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--) for (r = u[i][1], a = u[i][0], n = 0, c = a.length; c > n; n++) l = t(a[n]), 
            l.data(this.widgetName + "-item", r), h.push({
                item: l,
                instance: r,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, s, o;
            for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, 
            e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), 
            this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), 
            this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, n = e.options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function() {
                    var n = e.currentItem[0].nodeName.toLowerCase(), s = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === n ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(s);
                    }) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s;
                },
                update: function(t, s) {
                    (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), 
                    s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
                }
            }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), 
            n.placeholder.update(e, e.placeholder);
        },
        _contactContainers: function(n) {
            var s, o, r, a, l, c, h, u, p, d, g = null, f = null;
            for (s = this.containers.length - 1; s >= 0; s--) if (!t.contains(this.currentItem[0], this.containers[s].element[0])) if (this._intersectsWith(this.containers[s].containerCache)) {
                if (g && t.contains(this.containers[s].element[0], g.element[0])) continue;
                g = this.containers[s], f = s;
            } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", n, this._uiHash(this)), 
            this.containers[s].containerCache.over = 0);
            if (g) if (1 === this.containers.length) this.containers[f].containerCache.over || (this.containers[f]._trigger("over", n, this._uiHash(this)), 
            this.containers[f].containerCache.over = 1); else {
                for (r = 1e4, a = null, d = g.floating || i(this.currentItem), l = d ? "left" : "top", c = d ? "width" : "height", 
                h = this.positionAbs[l] + this.offset.click[l], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[f].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!d || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[l], 
                p = !1, Math.abs(u - h) > Math.abs(u + this.items[o][c] - h) && (p = !0, u += this.items[o][c]), r > Math.abs(u - h) && (r = Math.abs(u - h), 
                a = this.items[o], this.direction = p ? "up" : "down"));
                if (!a && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[f]) return;
                a ? this._rearrange(n, a, null, !0) : this._rearrange(n, null, this.containers[f].element, !0), this._trigger("change", n, this._uiHash()), 
                this.containers[f]._trigger("change", n, this._uiHash(this)), this.currentContainer = this.containers[f], 
                this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[f]._trigger("over", n, this._uiHash(this)), 
                this.containers[f].containerCache.over = 1;
            }
        },
        _createHelper: function(e) {
            var i = this.options, n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [ e, this.currentItem ])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), 
            n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), 
            n;
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e, i, n, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === s.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === s.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), 
            n = "hidden" !== t(e).css("overflow"), this.containment = [ i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1, s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
            };
        },
        _generatePosition: function(e) {
            var i, n, s = this.options, o = e.pageX, r = e.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), 
            e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), 
            e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), 
            e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), 
            s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, 
            n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), 
            {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            };
        },
        _rearrange: function(t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function() {
                s === this.counter && this.refreshPositions(!n);
            });
        },
        _clear: function(t, e) {
            this.reverting = !1;
            var i, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) ("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                this._trigger("update", t, this._uiHash());
            }), this !== this.currentContainer && (e || (n.push(function(t) {
                this._trigger("remove", t, this._uiHash());
            }), n.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), n.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || n.push(function(t) {
                return function(e) {
                    t._trigger("deactivate", e, this._uiHash(this));
                };
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (n.push(function(t) {
                return function(e) {
                    t._trigger("out", e, this._uiHash(this));
                };
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), 
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), i = 0; n.length > i; i++) n[i].call(this, t);
                    this._trigger("stop", t, this._uiHash());
                }
                return this.fromOutside = !1, !1;
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (i = 0; n.length > i; i++) n[i].call(this, t);
                this._trigger("stop", t, this._uiHash());
            }
            return this.fromOutside = !1, !0;
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            };
        }
    });
}(jQuery), function(t, e) {
    var i = "ui-effects-";
    t.effects = {
        effect: {}
    }, function(t, e) {
        function i(t, e, i) {
            var n = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t);
        }
        function n(i) {
            var n = c(), s = n._rgba = [];
            return i = i.toLowerCase(), g(l, function(t, o) {
                var r, a = o.re.exec(i), l = a && o.parse(a), c = o.space || "rgba";
                return l ? (r = n[c](l), n[h[c].cache] = r[h[c].cache], s = n._rgba = r._rgba, !1) : e;
            }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n) : o[i];
        }
        function s(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t;
        }
        var o, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", a = /^([\-+])=\s*(\d+\.?\d*)/, l = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ t[1], t[2], t[3], t[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ 2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [ parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [ parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [ t[1], t[2] / 100, t[3] / 100, t[4] ];
            }
        } ], c = t.Color = function(e, i, n, s) {
            return new t.Color.fn.parse(e, i, n, s);
        }, h = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, u = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, p = c.support = {}, d = t("<p>")[0], g = t.each;
        d.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = d.style.backgroundColor.indexOf("rgba") > -1, 
        g(h, function(t, e) {
            e.cache = "_" + t, e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), c.fn = t.extend(c.prototype, {
            parse: function(s, r, a, l) {
                if (s === e) return this._rgba = [ null, null, null, null ], this;
                (s.jquery || s.nodeType) && (s = t(s).css(r), r = e);
                var u = this, p = t.type(s), d = this._rgba = [];
                return r !== e && (s = [ s, r, a, l ], p = "array"), "string" === p ? this.parse(n(s) || o._default) : "array" === p ? (g(h.rgba.props, function(t, e) {
                    d[e.idx] = i(s[e.idx], e);
                }), this) : "object" === p ? (s instanceof c ? g(h, function(t, e) {
                    s[e.cache] && (u[e.cache] = s[e.cache].slice());
                }) : g(h, function(e, n) {
                    var o = n.cache;
                    g(n.props, function(t, e) {
                        if (!u[o] && n.to) {
                            if ("alpha" === t || null == s[t]) return;
                            u[o] = n.to(u._rgba);
                        }
                        u[o][e.idx] = i(s[t], e, !0);
                    }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o])));
                }), this) : e;
            },
            is: function(t) {
                var i = c(t), n = !0, s = this;
                return g(h, function(t, o) {
                    var r, a = i[o.cache];
                    return a && (r = s[o.cache] || o.to && o.to(s._rgba) || [], g(o.props, function(t, i) {
                        return null != a[i.idx] ? n = a[i.idx] === r[i.idx] : e;
                    })), n;
                }), n;
            },
            _space: function() {
                var t = [], e = this;
                return g(h, function(i, n) {
                    e[n.cache] && t.push(i);
                }), t.pop();
            },
            transition: function(t, e) {
                var n = c(t), s = n._space(), o = h[s], r = 0 === this.alpha() ? c("transparent") : this, a = r[o.cache] || o.to(r._rgba), l = a.slice();
                return n = n[o.cache], g(o.props, function(t, s) {
                    var o = s.idx, r = a[o], c = n[o], h = u[s.type] || {};
                    null !== c && (null === r ? l[o] = c : (h.mod && (c - r > h.mod / 2 ? r += h.mod : r - c > h.mod / 2 && (r -= h.mod)), 
                    l[o] = i((c - r) * e + r, s)));
                }), this[s](l);
            },
            blend: function(e) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), n = i.pop(), s = c(e)._rgba;
                return c(t.map(i, function(t, e) {
                    return (1 - n) * s[e] + n * t;
                }));
            },
            toRgbaString: function() {
                var e = "rgba(", i = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t;
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")";
            },
            toHslaString: function() {
                var e = "hsla(", i = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t;
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")";
            },
            toHexString: function(e) {
                var i = this._rgba.slice(), n = i.pop();
                return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), c.fn.parse.prototype = c.fn, h.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e, i, n = t[0] / 255, s = t[1] / 255, o = t[2] / 255, r = t[3], a = Math.max(n, s, o), l = Math.min(n, s, o), c = a - l, h = a + l, u = .5 * h;
            return e = l === a ? 0 : n === a ? 60 * (s - o) / c + 360 : s === a ? 60 * (o - n) / c + 120 : 60 * (n - s) / c + 240, 
            i = 0 === c ? 0 : .5 >= u ? c / h : c / (2 - h), [ Math.round(e) % 360, i, u, null == r ? 1 : r ];
        }, h.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e = t[0] / 360, i = t[1], n = t[2], o = t[3], r = .5 >= n ? n * (1 + i) : n + i - n * i, a = 2 * n - r;
            return [ Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o ];
        }, g(h, function(n, s) {
            var o = s.props, r = s.cache, l = s.to, h = s.from;
            c.fn[n] = function(n) {
                if (l && !this[r] && (this[r] = l(this._rgba)), n === e) return this[r].slice();
                var s, a = t.type(n), u = "array" === a || "object" === a ? n : arguments, p = this[r].slice();
                return g(o, function(t, e) {
                    var n = u["object" === a ? t : e.idx];
                    null == n && (n = p[e.idx]), p[e.idx] = i(n, e);
                }), h ? (s = c(h(p)), s[r] = p, s) : c(p);
            }, g(o, function(e, i) {
                c.fn[e] || (c.fn[e] = function(s) {
                    var o, r = t.type(s), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n, c = this[l](), h = c[i.idx];
                    return "undefined" === r ? h : ("function" === r && (s = s.call(this, h), r = t.type(s)), null == s && i.empty ? this : ("string" === r && (o = a.exec(s), 
                    o && (s = h + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), c[i.idx] = s, this[l](c)));
                });
            });
        }), c.hook = function(e) {
            var i = e.split(" ");
            g(i, function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, s) {
                        var o, r, a = "";
                        if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                            if (s = c(o || s), !p.rgba && 1 !== s._rgba[3]) {
                                for (r = "backgroundColor" === i ? e.parentNode : e; ("" === a || "transparent" === a) && r && r.style; ) try {
                                    a = t.css(r, "backgroundColor"), r = r.parentNode;
                                } catch (l) {}
                                s = s.blend(a && "transparent" !== a ? a : "_default");
                            }
                            s = s.toRgbaString();
                        }
                        try {
                            e.style[i] = s;
                        } catch (l) {}
                    }
                }, t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = c(e.elem, i), e.end = c(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                };
            });
        }, c.hook(r), t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return g([ "Top", "Right", "Bottom", "Left" ], function(i, n) {
                    e["border" + n + "Color"] = t;
                }), e;
            }
        }, o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    }(jQuery), function() {
        function i(e) {
            var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
            if (s && s.length && s[0] && s[s[0]]) for (n = s.length; n--; ) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]); else for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
            return o;
        }
        function n(e, i) {
            var n, s, r = {};
            for (n in i) s = i[n], e[n] !== s && (o[n] || (t.fx.step[n] || !isNaN(parseFloat(s))) && (r[n] = s));
            return r;
        }
        var s = [ "add", "remove", "toggle" ], o = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0);
            };
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }), t.effects.animateClass = function(e, o, r, a) {
            var l = t.speed(o, r, a);
            return this.queue(function() {
                var o, r = t(this), a = r.attr("class") || "", c = l.children ? r.find("*").addBack() : r;
                c = c.map(function() {
                    var e = t(this);
                    return {
                        el: e,
                        start: i(this)
                    };
                }), o = function() {
                    t.each(s, function(t, i) {
                        e[i] && r[i + "Class"](e[i]);
                    });
                }, o(), c = c.map(function() {
                    return this.end = i(this.el[0]), this.diff = n(this.start, this.end), this;
                }), r.attr("class", a), c = c.map(function() {
                    var e = this, i = t.Deferred(), n = t.extend({}, l, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e);
                        }
                    });
                    return this.el.animate(this.diff, n), i.promise();
                }), t.when.apply(t, c.get()).done(function() {
                    o(), t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "");
                        });
                    }), l.complete.call(r[0]);
                });
            });
        }, t.fn.extend({
            addClass: function(e) {
                return function(i, n, s, o) {
                    return n ? t.effects.animateClass.call(this, {
                        add: i
                    }, n, s, o) : e.apply(this, arguments);
                };
            }(t.fn.addClass),
            removeClass: function(e) {
                return function(i, n, s, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                        remove: i
                    }, n, s, o) : e.apply(this, arguments);
                };
            }(t.fn.removeClass),
            toggleClass: function(i) {
                return function(n, s, o, r, a) {
                    return "boolean" == typeof s || s === e ? o ? t.effects.animateClass.call(this, s ? {
                        add: n
                    } : {
                        remove: n
                    }, o, r, a) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: n
                    }, s, o, r);
                };
            }(t.fn.toggleClass),
            switchClass: function(e, i, n, s, o) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                }, n, s, o);
            }
        });
    }(), function() {
        function n(e, i, n, s) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                effect: e
            }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, 
            n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, 
            e.complete = s || i.complete, e;
        }
        function s(e) {
            return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0;
        }
        t.extend(t.effects, {
            version: "1.10.3",
            save: function(t, e) {
                for (var n = 0; e.length > n; n++) null !== e[n] && t.data(i + e[n], t[0].style[e[n]]);
            },
            restore: function(t, n) {
                var s, o;
                for (o = 0; n.length > o; o++) null !== n[o] && (s = t.data(i + n[o]), s === e && (s = ""), t.css(n[o], s));
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
            },
            getBaseline: function(t, e) {
                var i, n;
                switch (t[0]) {
                  case "top":
                    i = 0;
                    break;

                  case "middle":
                    i = .5;
                    break;

                  case "bottom":
                    i = 1;
                    break;

                  default:
                    i = t[0] / e.height;
                }
                switch (t[1]) {
                  case "left":
                    n = 0;
                    break;

                  case "center":
                    n = .5;
                    break;

                  case "right":
                    n = 1;
                    break;

                  default:
                    n = t[1] / e.width;
                }
                return {
                    x: n,
                    y: i
                };
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    "float": e.css("float")
                }, n = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), s = {
                    width: e.width(),
                    height: e.height()
                }, o = document.activeElement;
                try {
                    o.id;
                } catch (r) {
                    o = document.body;
                }
                return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), n = e.parent(), "static" === e.css("position") ? (n.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each([ "top", "left", "bottom", "right" ], function(t, n) {
                    i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto");
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(s), n.css(i).show();
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), 
                e;
            },
            setTransition: function(e, i, n, s) {
                return s = s || {}, t.each(i, function(t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (s[i] = o[0] * n + o[1]);
                }), s;
            }
        }), t.fn.extend({
            effect: function() {
                function e(e) {
                    function n() {
                        t.isFunction(o) && o.call(s[0]), t.isFunction(e) && e();
                    }
                    var s = t(this), o = i.complete, a = i.mode;
                    (s.is(":hidden") ? "hide" === a : "show" === a) ? (s[a](), n()) : r.call(s[0], i, n);
                }
                var i = n.apply(this, arguments), s = i.mode, o = i.queue, r = t.effects.effect[i.effect];
                return t.fx.off || !r ? s ? this[s](i.duration, i.complete) : this.each(function() {
                    i.complete && i.complete.call(this);
                }) : o === !1 ? this.each(e) : this.queue(o || "fx", e);
            },
            show: function(t) {
                return function(e) {
                    if (s(e)) return t.apply(this, arguments);
                    var i = n.apply(this, arguments);
                    return i.mode = "show", this.effect.call(this, i);
                };
            }(t.fn.show),
            hide: function(t) {
                return function(e) {
                    if (s(e)) return t.apply(this, arguments);
                    var i = n.apply(this, arguments);
                    return i.mode = "hide", this.effect.call(this, i);
                };
            }(t.fn.hide),
            toggle: function(t) {
                return function(e) {
                    if (s(e) || "boolean" == typeof e) return t.apply(this, arguments);
                    var i = n.apply(this, arguments);
                    return i.mode = "toggle", this.effect.call(this, i);
                };
            }(t.fn.toggle),
            cssUnit: function(e) {
                var i = this.css(e), n = [];
                return t.each([ "em", "px", "%", "pt" ], function(t, e) {
                    i.indexOf(e) > 0 && (n = [ parseFloat(i), e ]);
                }), n;
            }
        });
    }(), function() {
        var e = {};
        t.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2);
            };
        }), t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(t) {
                return t * t * (3 * t - 2);
            },
            Bounce: function(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; ) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
            }
        }), t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t);
            }, t.easing["easeInOut" + e] = function(t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
            };
        });
    }();
}(jQuery), function(t) {
    var e = /up|down|vertical/, i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function(n, s) {
        var o, r, a, l = t(this), c = [ "position", "top", "bottom", "left", "right", "height", "width" ], h = t.effects.setMode(l, n.mode || "hide"), u = n.direction || "up", p = e.test(u), d = p ? "height" : "width", g = p ? "top" : "left", f = i.test(u), m = {}, v = "show" === h;
        l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), c) : t.effects.save(l, c), l.show(), 
        o = t.effects.createWrapper(l).css({
            overflow: "hidden"
        }), r = o[d](), a = parseFloat(o.css(g)) || 0, m[d] = v ? r : 0, f || (l.css(p ? "bottom" : "right", 0).css(p ? "top" : "left", "auto").css({
            position: "absolute"
        }), m[g] = v ? a : r + a), v && (o.css(d, 0), f || o.css(g, a + r)), o.animate(m, {
            duration: n.duration,
            easing: n.easing,
            queue: !1,
            complete: function() {
                "hide" === h && l.hide(), t.effects.restore(l, c), t.effects.removeWrapper(l), s();
            }
        });
    };
}(jQuery), function(t) {
    t.effects.effect.bounce = function(e, i) {
        var n, s, o, r = t(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], l = t.effects.setMode(r, e.mode || "effect"), c = "hide" === l, h = "show" === l, u = e.direction || "up", p = e.distance, d = e.times || 5, g = 2 * d + (h || c ? 1 : 0), f = e.duration / g, m = e.easing, v = "up" === u || "down" === u ? "top" : "left", y = "up" === u || "left" === u, b = r.queue(), w = b.length;
        for ((h || c) && a.push("opacity"), t.effects.save(r, a), r.show(), t.effects.createWrapper(r), p || (p = r["top" === v ? "outerHeight" : "outerWidth"]() / 3), 
        h && (o = {
            opacity: 1
        }, o[v] = 0, r.css("opacity", 0).css(v, y ? 2 * -p : 2 * p).animate(o, f, m)), c && (p /= Math.pow(2, d - 1)), 
        o = {}, o[v] = 0, n = 0; d > n; n++) s = {}, s[v] = (y ? "-=" : "+=") + p, r.animate(s, f, m).animate(o, f, m), 
        p = c ? 2 * p : p / 2;
        c && (s = {
            opacity: 0
        }, s[v] = (y ? "-=" : "+=") + p, r.animate(s, f, m)), r.queue(function() {
            c && r.hide(), t.effects.restore(r, a), t.effects.removeWrapper(r), i();
        }), w > 1 && b.splice.apply(b, [ 1, 0 ].concat(b.splice(w, g + 1))), r.dequeue();
    };
}(jQuery), function(t) {
    t.effects.effect.clip = function(e, i) {
        var n, s, o, r = t(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], l = t.effects.setMode(r, e.mode || "hide"), c = "show" === l, h = e.direction || "vertical", u = "vertical" === h, p = u ? "height" : "width", d = u ? "top" : "left", g = {};
        t.effects.save(r, a), r.show(), n = t.effects.createWrapper(r).css({
            overflow: "hidden"
        }), s = "IMG" === r[0].tagName ? n : r, o = s[p](), c && (s.css(p, 0), s.css(d, o / 2)), g[p] = c ? o : 0, 
        g[d] = c ? 0 : o / 2, s.animate(g, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                c || r.hide(), t.effects.restore(r, a), t.effects.removeWrapper(r), i();
            }
        });
    };
}(jQuery), function(t) {
    t.effects.effect.drop = function(e, i) {
        var n, s = t(this), o = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ], r = t.effects.setMode(s, e.mode || "hide"), a = "show" === r, l = e.direction || "left", c = "up" === l || "down" === l ? "top" : "left", h = "up" === l || "left" === l ? "pos" : "neg", u = {
            opacity: a ? 1 : 0
        };
        t.effects.save(s, o), s.show(), t.effects.createWrapper(s), n = e.distance || s["top" === c ? "outerHeight" : "outerWidth"](!0) / 2, 
        a && s.css("opacity", 0).css(c, "pos" === h ? -n : n), u[c] = (a ? "pos" === h ? "+=" : "-=" : "pos" === h ? "-=" : "+=") + n, 
        s.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i();
            }
        });
    };
}(jQuery), function(t) {
    t.effects.effect.explode = function(e, i) {
        function n() {
            b.push(this), b.length === u * p && s();
        }
        function s() {
            d.css({
                visibility: "visible"
            }), t(b).remove(), f || d.hide(), i();
        }
        var o, r, a, l, c, h, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, p = u, d = t(this), g = t.effects.setMode(d, e.mode || "hide"), f = "show" === g, m = d.show().css("visibility", "hidden").offset(), v = Math.ceil(d.outerWidth() / p), y = Math.ceil(d.outerHeight() / u), b = [];
        for (o = 0; u > o; o++) for (l = m.top + o * y, h = o - (u - 1) / 2, r = 0; p > r; r++) a = m.left + r * v, 
        c = r - (p - 1) / 2, d.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -r * v,
            top: -o * y
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: v,
            height: y,
            left: a + (f ? c * v : 0),
            top: l + (f ? h * y : 0),
            opacity: f ? 0 : 1
        }).animate({
            left: a + (f ? 0 : c * v),
            top: l + (f ? 0 : h * y),
            opacity: f ? 1 : 0
        }, e.duration || 500, e.easing, n);
    };
}(jQuery), function(t) {
    t.effects.effect.fade = function(e, i) {
        var n = t(this), s = t.effects.setMode(n, e.mode || "toggle");
        n.animate({
            opacity: s
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    };
}(jQuery), function(t) {
    t.effects.effect.fold = function(e, i) {
        var n, s, o = t(this), r = [ "position", "top", "bottom", "left", "right", "height", "width" ], a = t.effects.setMode(o, e.mode || "hide"), l = "show" === a, c = "hide" === a, h = e.size || 15, u = /([0-9]+)%/.exec(h), p = !!e.horizFirst, d = l !== p, g = d ? [ "width", "height" ] : [ "height", "width" ], f = e.duration / 2, m = {}, v = {};
        t.effects.save(o, r), o.show(), n = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }), s = d ? [ n.width(), n.height() ] : [ n.height(), n.width() ], u && (h = parseInt(u[1], 10) / 100 * s[c ? 0 : 1]), 
        l && n.css(p ? {
            height: 0,
            width: h
        } : {
            height: h,
            width: 0
        }), m[g[0]] = l ? s[0] : h, v[g[1]] = l ? s[1] : 0, n.animate(m, f, e.easing).animate(v, f, e.easing, function() {
            c && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i();
        });
    };
}(jQuery), function(t) {
    t.effects.effect.highlight = function(e, i) {
        var n = t(this), s = [ "backgroundImage", "backgroundColor", "opacity" ], o = t.effects.setMode(n, e.mode || "show"), r = {
            backgroundColor: n.css("backgroundColor")
        };
        "hide" === o && (r.opacity = 0), t.effects.save(n, s), n.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(), t.effects.restore(n, s), i();
            }
        });
    };
}(jQuery), function(t) {
    t.effects.effect.pulsate = function(e, i) {
        var n, s = t(this), o = t.effects.setMode(s, e.mode || "show"), r = "show" === o, a = "hide" === o, l = r || "hide" === o, c = 2 * (e.times || 5) + (l ? 1 : 0), h = e.duration / c, u = 0, p = s.queue(), d = p.length;
        for ((r || !s.is(":visible")) && (s.css("opacity", 0).show(), u = 1), n = 1; c > n; n++) s.animate({
            opacity: u
        }, h, e.easing), u = 1 - u;
        s.animate({
            opacity: u
        }, h, e.easing), s.queue(function() {
            a && s.hide(), i();
        }), d > 1 && p.splice.apply(p, [ 1, 0 ].concat(p.splice(d, c + 1))), s.dequeue();
    };
}(jQuery), function(t) {
    t.effects.effect.puff = function(e, i) {
        var n = t(this), s = t.effects.setMode(n, e.mode || "hide"), o = "hide" === s, r = parseInt(e.percent, 10) || 150, a = r / 100, l = {
            height: n.height(),
            width: n.width(),
            outerHeight: n.outerHeight(),
            outerWidth: n.outerWidth()
        };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: s,
            complete: i,
            percent: o ? r : 100,
            from: o ? l : {
                height: l.height * a,
                width: l.width * a,
                outerHeight: l.outerHeight * a,
                outerWidth: l.outerWidth * a
            }
        }), n.effect(e);
    }, t.effects.effect.scale = function(e, i) {
        var n = t(this), s = t.extend(!0, {}, e), o = t.effects.setMode(n, e.mode || "effect"), r = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100), a = e.direction || "both", l = e.origin, c = {
            height: n.height(),
            width: n.width(),
            outerHeight: n.outerHeight(),
            outerWidth: n.outerWidth()
        }, h = {
            y: "horizontal" !== a ? r / 100 : 1,
            x: "vertical" !== a ? r / 100 : 1
        };
        s.effect = "size", s.queue = !1, s.complete = i, "effect" !== o && (s.origin = l || [ "middle", "center" ], 
        s.restore = !0), s.from = e.from || ("show" === o ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : c), s.to = {
            height: c.height * h.y,
            width: c.width * h.x,
            outerHeight: c.outerHeight * h.y,
            outerWidth: c.outerWidth * h.x
        }, s.fade && ("show" === o && (s.from.opacity = 0, s.to.opacity = 1), "hide" === o && (s.from.opacity = 1, 
        s.to.opacity = 0)), n.effect(s);
    }, t.effects.effect.size = function(e, i) {
        var n, s, o, r = t(this), a = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ], l = [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ], c = [ "width", "height", "overflow" ], h = [ "fontSize" ], u = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], p = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], d = t.effects.setMode(r, e.mode || "effect"), g = e.restore || "effect" !== d, f = e.scale || "both", m = e.origin || [ "middle", "center" ], v = r.css("position"), y = g ? a : l, b = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === d && r.show(), n = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        }, "toggle" === e.mode && "show" === d ? (r.from = e.to || b, r.to = e.from || n) : (r.from = e.from || ("show" === d ? b : n), 
        r.to = e.to || ("hide" === d ? b : n)), o = {
            from: {
                y: r.from.height / n.height,
                x: r.from.width / n.width
            },
            to: {
                y: r.to.height / n.height,
                x: r.to.width / n.width
            }
        }, ("box" === f || "both" === f) && (o.from.y !== o.to.y && (y = y.concat(u), r.from = t.effects.setTransition(r, u, o.from.y, r.from), 
        r.to = t.effects.setTransition(r, u, o.to.y, r.to)), o.from.x !== o.to.x && (y = y.concat(p), r.from = t.effects.setTransition(r, p, o.from.x, r.from), 
        r.to = t.effects.setTransition(r, p, o.to.x, r.to))), ("content" === f || "both" === f) && o.from.y !== o.to.y && (y = y.concat(h).concat(c), 
        r.from = t.effects.setTransition(r, h, o.from.y, r.from), r.to = t.effects.setTransition(r, h, o.to.y, r.to)), 
        t.effects.save(r, y), r.show(), t.effects.createWrapper(r), r.css("overflow", "hidden").css(r.from), 
        m && (s = t.effects.getBaseline(m, n), r.from.top = (n.outerHeight - r.outerHeight()) * s.y, r.from.left = (n.outerWidth - r.outerWidth()) * s.x, 
        r.to.top = (n.outerHeight - r.to.outerHeight) * s.y, r.to.left = (n.outerWidth - r.to.outerWidth) * s.x), 
        r.css(r.from), ("content" === f || "both" === f) && (u = u.concat([ "marginTop", "marginBottom" ]).concat(h), 
        p = p.concat([ "marginLeft", "marginRight" ]), c = a.concat(u).concat(p), r.find("*[width]").each(function() {
            var i = t(this), n = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            };
            g && t.effects.save(i, c), i.from = {
                height: n.height * o.from.y,
                width: n.width * o.from.x,
                outerHeight: n.outerHeight * o.from.y,
                outerWidth: n.outerWidth * o.from.x
            }, i.to = {
                height: n.height * o.to.y,
                width: n.width * o.to.x,
                outerHeight: n.height * o.to.y,
                outerWidth: n.width * o.to.x
            }, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), i.to = t.effects.setTransition(i, u, o.to.y, i.to)), 
            o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, p, o.from.x, i.from), i.to = t.effects.setTransition(i, p, o.to.x, i.to)), 
            i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                g && t.effects.restore(i, c);
            });
        })), r.animate(r.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === r.to.opacity && r.css("opacity", r.from.opacity), "hide" === d && r.hide(), t.effects.restore(r, y), 
                g || ("static" === v ? r.css({
                    position: "relative",
                    top: r.to.top,
                    left: r.to.left
                }) : t.each([ "top", "left" ], function(t, e) {
                    r.css(e, function(e, i) {
                        var n = parseInt(i, 10), s = t ? r.to.left : r.to.top;
                        return "auto" === i ? s + "px" : n + s + "px";
                    });
                })), t.effects.removeWrapper(r), i();
            }
        });
    };
}(jQuery), function(t) {
    t.effects.effect.shake = function(e, i) {
        var n, s = t(this), o = [ "position", "top", "bottom", "left", "right", "height", "width" ], r = t.effects.setMode(s, e.mode || "effect"), a = e.direction || "left", l = e.distance || 20, c = e.times || 3, h = 2 * c + 1, u = Math.round(e.duration / h), p = "up" === a || "down" === a ? "top" : "left", d = "up" === a || "left" === a, g = {}, f = {}, m = {}, v = s.queue(), y = v.length;
        for (t.effects.save(s, o), s.show(), t.effects.createWrapper(s), g[p] = (d ? "-=" : "+=") + l, f[p] = (d ? "+=" : "-=") + 2 * l, 
        m[p] = (d ? "-=" : "+=") + 2 * l, s.animate(g, u, e.easing), n = 1; c > n; n++) s.animate(f, u, e.easing).animate(m, u, e.easing);
        s.animate(f, u, e.easing).animate(g, u / 2, e.easing).queue(function() {
            "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i();
        }), y > 1 && v.splice.apply(v, [ 1, 0 ].concat(v.splice(y, h + 1))), s.dequeue();
    };
}(jQuery), function(t) {
    t.effects.effect.slide = function(e, i) {
        var n, s = t(this), o = [ "position", "top", "bottom", "left", "right", "width", "height" ], r = t.effects.setMode(s, e.mode || "show"), a = "show" === r, l = e.direction || "left", c = "up" === l || "down" === l ? "top" : "left", h = "up" === l || "left" === l, u = {};
        t.effects.save(s, o), s.show(), n = e.distance || s["top" === c ? "outerHeight" : "outerWidth"](!0), 
        t.effects.createWrapper(s).css({
            overflow: "hidden"
        }), a && s.css(c, h ? isNaN(n) ? "-" + n : -n : n), u[c] = (a ? h ? "+=" : "-=" : h ? "-=" : "+=") + n, 
        s.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i();
            }
        });
    };
}(jQuery), function(t) {
    t.effects.effect.transfer = function(e, i) {
        var n = t(this), s = t(e.to), o = "fixed" === s.css("position"), r = t("body"), a = o ? r.scrollTop() : 0, l = o ? r.scrollLeft() : 0, c = s.offset(), h = {
            top: c.top - a,
            left: c.left - l,
            height: s.innerHeight(),
            width: s.innerWidth()
        }, u = n.offset(), p = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
            top: u.top - a,
            left: u.left - l,
            height: n.innerHeight(),
            width: n.innerWidth(),
            position: o ? "fixed" : "absolute"
        }).animate(h, e.duration, e.easing, function() {
            p.remove(), i();
        });
    };
}(jQuery), function(t, e) {
    "use strict";
    var i = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element, n = function() {
        for (var t, i, n = [ [ "requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror" ], [ "webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror" ] ], s = 0, o = n.length, r = {}; o > s; s++) if (t = n[s], 
        t && t[1] in e) {
            for (s = 0, i = t.length; i > s; s++) r[n[0][s]] = t[s];
            return r;
        }
        return !1;
    }(), s = {
        request: function(t) {
            var s = n.requestFullscreen;
            t = t || e.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? t[s]() : t[s](i && Element.ALLOW_KEYBOARD_INPUT);
        },
        exit: function() {
            e[n.exitFullscreen]();
        },
        toggle: function(t) {
            this.isFullscreen ? this.exit() : this.request(t);
        },
        onchange: function() {},
        onerror: function() {},
        raw: n
    };
    return n ? (Object.defineProperties(s, {
        isFullscreen: {
            get: function() {
                return !!e[n.fullscreenElement];
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return e[n.fullscreenElement];
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!e[n.fullscreenEnabled];
            }
        }
    }), e.addEventListener(n.fullscreenchange, function(t) {
        s.onchange.call(s, t);
    }), e.addEventListener(n.fullscreenerror, function(t) {
        s.onerror.call(s, t);
    }), t.screenfull = s, void 0) : t.screenfull = !1;
}(window, document), /*!
 * Modernizr v2.6.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = function(t, e, i) {
    function n(t) {
        b.cssText = t;
    }
    function s(t, e) {
        return n(k.join(t + ";") + (e || ""));
    }
    function o(t, e) {
        return typeof t === e;
    }
    function r(t, e) {
        return !!~("" + t).indexOf(e);
    }
    function a(t, e) {
        for (var n in t) {
            var s = t[n];
            if (!r(s, "-") && b[s] !== i) return "pfx" == e ? s : !0;
        }
        return !1;
    }
    function l(t, e, n) {
        for (var s in t) {
            var r = e[t[s]];
            if (r !== i) return n === !1 ? t[s] : o(r, "function") ? r.bind(n || e) : r;
        }
        return !1;
    }
    function c(t, e, i) {
        var n = t.charAt(0).toUpperCase() + t.slice(1), s = (t + " " + C.join(n + " ") + n).split(" ");
        return o(e, "string") || o(e, "undefined") ? a(s, e) : (s = (t + " " + T.join(n + " ") + n).split(" "), 
        l(s, e, i));
    }
    function h() {
        g.input = function(i) {
            for (var n = 0, s = i.length; s > n; n++) M[i[n]] = !!(i[n] in w);
            return M.list && (M.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), M;
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), g.inputtypes = function(t) {
            for (var n, s, o, r = 0, a = t.length; a > r; r++) w.setAttribute("type", s = t[r]), n = "text" !== w.type, 
            n && (w.value = _, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && w.style.WebkitAppearance !== i ? (m.appendChild(w), 
            o = e.defaultView, n = o.getComputedStyle && "textfield" !== o.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, 
            m.removeChild(w)) : /^(search|tel)$/.test(s) || (n = /^(url|email)$/.test(s) ? w.checkValidity && w.checkValidity() === !1 : w.value != _)), 
            E[t[r]] = !!n;
            return E;
        }("search tel url email datetime date month week time datetime-local number range color".split(" "));
    }
    var u, p, d = "2.6.2", g = {}, f = !0, m = e.documentElement, v = "modernizr", y = e.createElement(v), b = y.style, w = e.createElement("input"), _ = ":)", x = {}.toString, k = " -webkit- -moz- -o- -ms- ".split(" "), $ = "Webkit Moz O ms", C = $.split(" "), T = $.toLowerCase().split(" "), P = {
        svg: "http://www.w3.org/2000/svg"
    }, S = {}, E = {}, M = {}, I = [], D = I.slice, A = function(t, i, n, s) {
        var o, r, a, l, c = e.createElement("div"), h = e.body, u = h || e.createElement("body");
        if (parseInt(n, 10)) for (;n--; ) a = e.createElement("div"), a.id = s ? s[n] : v + (n + 1), c.appendChild(a);
        return o = [ "&#173;", '<style id="s', v, '">', t, "</style>" ].join(""), c.id = v, (h ? c : u).innerHTML += o, 
        u.appendChild(c), h || (u.style.background = "", u.style.overflow = "hidden", l = m.style.overflow, 
        m.style.overflow = "hidden", m.appendChild(u)), r = i(c, t), h ? c.parentNode.removeChild(c) : (u.parentNode.removeChild(u), 
        m.style.overflow = l), !!r;
    }, N = function(e) {
        var i = t.matchMedia || t.msMatchMedia;
        if (i) return i(e).matches;
        var n;
        return A("@media " + e + " { #" + v + " { position: absolute; } }", function(e) {
            n = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position;
        }), n;
    }, R = function() {
        function t(t, s) {
            s = s || e.createElement(n[t] || "div"), t = "on" + t;
            var r = t in s;
            return r || (s.setAttribute || (s = e.createElement("div")), s.setAttribute && s.removeAttribute && (s.setAttribute(t, ""), 
            r = o(s[t], "function"), o(s[t], "undefined") || (s[t] = i), s.removeAttribute(t))), s = null, r;
        }
        var n = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return t;
    }(), L = {}.hasOwnProperty;
    p = o(L, "undefined") || o(L.call, "undefined") ? function(t, e) {
        return e in t && o(t.constructor.prototype[e], "undefined");
    } : function(t, e) {
        return L.call(t, e);
    }, Function.prototype.bind || (Function.prototype.bind = function(t) {
        var e = this;
        if ("function" != typeof e) throw new TypeError();
        var i = D.call(arguments, 1), n = function() {
            if (this instanceof n) {
                var s = function() {};
                s.prototype = e.prototype;
                var o = new s(), r = e.apply(o, i.concat(D.call(arguments)));
                return Object(r) === r ? r : o;
            }
            return e.apply(t, i.concat(D.call(arguments)));
        };
        return n;
    }), S.flexbox = function() {
        return c("flexWrap");
    }, S.flexboxlegacy = function() {
        return c("boxDirection");
    }, S.canvas = function() {
        var t = e.createElement("canvas");
        return !(!t.getContext || !t.getContext("2d"));
    }, S.canvastext = function() {
        return !(!g.canvas || !o(e.createElement("canvas").getContext("2d").fillText, "function"));
    }, S.webgl = function() {
        return !!t.WebGLRenderingContext;
    }, S.touch = function() {
        var i;
        return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : A([ "@media (", k.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(t) {
            i = 9 === t.offsetTop;
        }), i;
    }, S.geolocation = function() {
        return "geolocation" in navigator;
    }, S.postmessage = function() {
        return !!t.postMessage;
    }, S.websqldatabase = function() {
        return !!t.openDatabase;
    }, S.indexedDB = function() {
        return !!c("indexedDB", t);
    }, S.hashchange = function() {
        return R("hashchange", t) && (e.documentMode === i || e.documentMode > 7);
    }, S.history = function() {
        return !(!t.history || !history.pushState);
    }, S.draganddrop = function() {
        var t = e.createElement("div");
        return "draggable" in t || "ondragstart" in t && "ondrop" in t;
    }, S.websockets = function() {
        return "WebSocket" in t || "MozWebSocket" in t;
    }, S.rgba = function() {
        return n("background-color:rgba(150,255,150,.5)"), r(b.backgroundColor, "rgba");
    }, S.hsla = function() {
        return n("background-color:hsla(120,40%,100%,.5)"), r(b.backgroundColor, "rgba") || r(b.backgroundColor, "hsla");
    }, S.multiplebgs = function() {
        return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background);
    }, S.backgroundsize = function() {
        return c("backgroundSize");
    }, S.borderimage = function() {
        return c("borderImage");
    }, S.borderradius = function() {
        return c("borderRadius");
    }, S.boxshadow = function() {
        return c("boxShadow");
    }, S.textshadow = function() {
        return "" === e.createElement("div").style.textShadow;
    }, S.opacity = function() {
        return s("opacity:.55"), /^0.55$/.test(b.opacity);
    }, S.cssanimations = function() {
        return c("animationName");
    }, S.csscolumns = function() {
        return c("columnCount");
    }, S.cssgradients = function() {
        var t = "background-image:", e = "gradient(linear,left top,right bottom,from(#9f9),to(white));", i = "linear-gradient(left top,#9f9, white);";
        return n((t + "-webkit- ".split(" ").join(e + t) + k.join(i + t)).slice(0, -t.length)), r(b.backgroundImage, "gradient");
    }, S.cssreflections = function() {
        return c("boxReflect");
    }, S.csstransforms = function() {
        return !!c("transform");
    }, S.csstransforms3d = function() {
        var t = !!c("perspective");
        return t && "webkitPerspective" in m.style && A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e) {
            t = 9 === e.offsetLeft && 3 === e.offsetHeight;
        }), t;
    }, S.csstransitions = function() {
        return c("transition");
    }, S.fontface = function() {
        var t;
        return A('@font-face {font-family:"font";src:url("https://")}', function(i, n) {
            var s = e.getElementById("smodernizr"), o = s.sheet || s.styleSheet, r = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            t = /src/i.test(r) && 0 === r.indexOf(n.split(" ")[0]);
        }), t;
    }, S.generatedcontent = function() {
        var t;
        return A([ "#", v, "{font:0/0 a}#", v, ':after{content:"', _, '";visibility:hidden;font:3px/1 a}' ].join(""), function(e) {
            t = e.offsetHeight >= 3;
        }), t;
    }, S.video = function() {
        var t = e.createElement("video"), i = !1;
        try {
            (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), 
            i.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
        } catch (n) {}
        return i;
    }, S.audio = function() {
        var t = e.createElement("audio"), i = !1;
        try {
            (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), 
            i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), 
            i.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""));
        } catch (n) {}
        return i;
    }, S.localstorage = function() {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0;
        } catch (t) {
            return !1;
        }
    }, S.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0;
        } catch (t) {
            return !1;
        }
    }, S.webworkers = function() {
        return !!t.Worker;
    }, S.applicationcache = function() {
        return !!t.applicationCache;
    }, S.svg = function() {
        return !!e.createElementNS && !!e.createElementNS(P.svg, "svg").createSVGRect;
    }, S.inlinesvg = function() {
        var t = e.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == P.svg;
    }, S.smil = function() {
        return !!e.createElementNS && /SVGAnimate/.test(x.call(e.createElementNS(P.svg, "animate")));
    }, S.svgclippaths = function() {
        return !!e.createElementNS && /SVGClipPath/.test(x.call(e.createElementNS(P.svg, "clipPath")));
    };
    for (var O in S) p(S, O) && (u = O.toLowerCase(), g[u] = S[O](), I.push((g[u] ? "" : "no-") + u));
    return g.input || h(), g.addTest = function(t, e) {
        if ("object" == typeof t) for (var n in t) p(t, n) && g.addTest(n, t[n]); else {
            if (t = t.toLowerCase(), g[t] !== i) return g;
            e = "function" == typeof e ? e() : e, f !== i && f && (m.className += " " + (e ? "" : "no-") + t), g[t] = e;
        }
        return g;
    }, n(""), y = w = null, function(t, e) {
        function n(t, e) {
            var i = t.createElement("p"), n = t.getElementsByTagName("head")[0] || t.documentElement;
            return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild);
        }
        function s() {
            var t = y.elements;
            return "string" == typeof t ? t.split(" ") : t;
        }
        function o(t) {
            var e = v[t[f]];
            return e || (e = {}, m++, t[f] = m, v[m] = e), e;
        }
        function r(t, i, n) {
            if (i || (i = e), u) return i.createElement(t);
            n || (n = o(i));
            var s;
            return s = n.cache[t] ? n.cache[t].cloneNode() : g.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), 
            s.canHaveChildren && !d.test(t) ? n.frag.appendChild(s) : s;
        }
        function a(t, i) {
            if (t || (t = e), u) return t.createDocumentFragment();
            i = i || o(t);
            for (var n = i.frag.cloneNode(), r = 0, a = s(), l = a.length; l > r; r++) n.createElement(a[r]);
            return n;
        }
        function l(t, e) {
            e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), 
            t.createElement = function(i) {
                return y.shivMethods ? r(i, t, e) : e.createElem(i);
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + s().join().replace(/\w+/g, function(t) {
                return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")';
            }) + ");return n}")(y, e.frag);
        }
        function c(t) {
            t || (t = e);
            var i = o(t);
            return !y.shivCSS || h || i.hasCSS || (i.hasCSS = !!n(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), 
            u || l(t, i), t;
        }
        var h, u, p = t.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, g = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f = "_html5shiv", m = 0, v = {};
        (function() {
            try {
                var t = e.createElement("a");
                t.innerHTML = "<xyz></xyz>", h = "hidden" in t, u = 1 == t.childNodes.length || function() {
                    e.createElement("a");
                    var t = e.createDocumentFragment();
                    return t.cloneNode === i || t.createDocumentFragment === i || t.createElement === i;
                }();
            } catch (n) {
                h = !0, u = !0;
            }
        })();
        var y = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: c,
            createElement: r,
            createDocumentFragment: a
        };
        t.html5 = y, c(e);
    }(this, e), g._version = d, g._prefixes = k, g._domPrefixes = T, g._cssomPrefixes = C, g.mq = N, g.hasEvent = R, 
    g.testProp = function(t) {
        return a([ t ]);
    }, g.testAllProps = c, g.testStyles = A, g.prefixed = function(t, e, i) {
        return e ? c(t, e, i) : c(t, "pfx");
    }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + I.join(" ") : ""), 
    g;
}(this, this.document);

var Froogaloop = function() {
    function t(e) {
        return new t.fn.init(e);
    }
    function e(t, e, i) {
        if (!i.contentWindow.postMessage) return !1;
        var n = i.getAttribute("src").split("?")[0], s = JSON.stringify({
            method: t,
            value: e
        });
        "//" === n.substr(0, 2) && (n = window.location.protocol + n), i.contentWindow.postMessage(s, n);
    }
    function i(t) {
        var e, i;
        try {
            e = JSON.parse(t.data), i = e.event || e.method;
        } catch (n) {}
        if ("ready" != i || c || (c = !0), t.origin != h) return !1;
        var o = e.value, r = e.data, a = "" === a ? null : e.player_id, l = s(i, a), u = [];
        return l ? (void 0 !== o && u.push(o), r && u.push(r), a && u.push(a), u.length > 0 ? l.apply(null, u) : l.call()) : !1;
    }
    function n(t, e, i) {
        i ? (l[i] || (l[i] = {}), l[i][t] = e) : l[t] = e;
    }
    function s(t, e) {
        return e ? l[e][t] : l[t];
    }
    function o(t, e) {
        if (e && l[e]) {
            if (!l[e][t]) return !1;
            l[e][t] = null;
        } else {
            if (!l[t]) return !1;
            l[t] = null;
        }
        return !0;
    }
    function r(t) {
        "//" === t.substr(0, 2) && (t = window.location.protocol + t);
        for (var e = t.split("/"), i = "", n = 0, s = e.length; s > n && 3 > n; n++) i += e[n], 2 > n && (i += "/");
        return i;
    }
    function a(t) {
        return !!(t && t.constructor && t.call && t.apply);
    }
    var l = {}, c = !1, h = (Array.prototype.slice, "");
    return t.fn = t.prototype = {
        element: null,
        init: function(t) {
            return "string" == typeof t && (t = document.getElementById(t)), this.element = t, this.element ? (h = r(this.element.getAttribute("src")), 
            this) : null;
        },
        api: function(t, i) {
            if (!this.element || !t) return !1;
            var s = this, o = s.element, r = "" !== o.id ? o.id : null, l = a(i) ? null : i, c = a(i) ? i : null;
            return c && n(t, c, r), e(t, l, o), s;
        },
        addEvent: function(t, i) {
            if (!this.element) return !1;
            var s = this, o = s.element, r = "" !== o.id ? o.id : null;
            return n(t, i, r), "ready" != t ? e("addEventListener", t, o) : "ready" == t && c && i.call(null, r), 
            s;
        },
        removeEvent: function(t) {
            if (!this.element) return !1;
            var i = this, n = i.element, s = "" !== n.id ? n.id : null, r = o(t, s);
            "ready" != t && r && e("removeEventListener", t, n);
        }
    }, t.fn.init.prototype = t.fn, window.addEventListener ? window.addEventListener("message", i, !1) : window.attachEvent("onmessage", i), 
    window.Froogaloop = window.$f = t;
}();

/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.3.0
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2013, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
(function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t(jQuery);
})(function(t) {
    function e() {
        var e = i(this), o = r.settings;
        return isNaN(e.datetime) || (0 == o.cutoff || s(e.datetime) < o.cutoff) && t(this).text(n(e.datetime)), 
        this;
    }
    function i(e) {
        if (e = t(e), !e.data("timeago")) {
            e.data("timeago", {
                datetime: r.datetime(e)
            });
            var i = t.trim(e.text());
            r.settings.localeTitle ? e.attr("title", e.data("timeago").datetime.toLocaleString()) : !(i.length > 0) || r.isTime(e) && e.attr("title") || e.attr("title", i);
        }
        return e.data("timeago");
    }
    function n(t) {
        return r.inWords(s(t));
    }
    function s(t) {
        return new Date().getTime() - t.getTime();
    }
    function o() {
        t.ajax({
            type: "GET",
            url: "/api/datetime",
            success: function(e) {
                e && e.serverDate && (t.timeago.serverDate = new Date(e.serverDate), t.timeago.localDate = new Date(), 
                6e4 > Math.abs(t.timeago.serverDate.getTime() - t.timeago.localDate.getTime()) && (delete t.timeago.serverDate, 
                clearInterval(t.timeago.serverDateInterval), delete t.timeago.serverDateInterval));
            },
            error: function() {
                t.timeago.serverDate = t.timeago.localDate ? new Date(t.timeago.serverDate.getTime() + (new Date().getTime() - t.timeago.localDate.getTime())) : null;
            },
            timeout: 1e3
        });
    }
    function s(e) {
        var i = t.timeago.serverDate instanceof Date ? t.timeago.serverDate : new Date();
        return i.getTime() - e.getTime();
    }
    t.timeago = function(e) {
        return e instanceof Date ? n(e) : "string" == typeof e ? n(t.timeago.parse(e)) : "number" == typeof e ? n(new Date(e)) : n(t.timeago.datetime(e));
    };
    var r = t.timeago;
    t.extend(t.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowFuture: !1,
            localeTitle: !1,
            cutoff: 0,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            },
            attributeName: "data-lastupdated"
        },
        inWords: function(e) {
            function i(i, s) {
                var o = t.isFunction(i) ? i(s, e) : i, r = n.numbers && n.numbers[s] || s;
                return o.replace(/%d/i, r);
            }
            var n = this.settings.strings, s = n.prefixAgo, o = n.suffixAgo;
            this.settings.allowFuture && 0 > e && (s = n.prefixFromNow, o = n.suffixFromNow);
            var r = Math.abs(e) / 1e3, a = r / 60, l = a / 60, c = l / 24, h = c / 365, u = 45 > r && i(n.seconds, Math.round(r)) || 90 > r && i(n.minute, 1) || 45 > a && i(n.minutes, Math.round(a)) || 90 > a && i(n.hour, 1) || 24 > l && i(n.hours, Math.round(l)) || 42 > l && i(n.day, 1) || 30 > c && i(n.days, Math.round(c)) || 45 > c && i(n.month, 1) || 365 > c && i(n.months, Math.round(c / 30)) || 1.5 > h && i(n.year, 1) || i(n.years, Math.round(h)), p = n.wordSeparator || "";
            return void 0 === n.wordSeparator && (p = " "), t.trim([ s, u, o ].join(p));
        },
        parse: function(e) {
            var i = t.trim(e);
            return i = i.replace(/\.\d+/, ""), i = i.replace(/-/, "/").replace(/-/, "/"), i = i.replace(/T/, " ").replace(/Z/, " UTC"), 
            i = i.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(i);
        },
        datetime: function(e) {
            var i = r.isTime(e) ? t(e).attr("datetime") : t(e).attr(r.settings.attributeName);
            return r.parse(i);
        },
        isTime: function(e) {
            return "time" === t(e).get(0).tagName.toLowerCase();
        }
    });
    var a = {
        init: function() {
            var i = t.proxy(e, this);
            i();
            var n = r.settings;
            n.refreshMillis > 0 && setInterval(i, n.refreshMillis);
        },
        update: function(i) {
            t(this).data("timeago", {
                datetime: r.parse(i)
            }), e.apply(this);
        },
        updateFromDOM: function() {
            t(this).data("timeago", {
                datetime: r.parse(r.isTime(this) ? t(this).attr("datetime") : t(this).attr("title"))
            }), e.apply(this);
        }
    };
    t.fn.timeago = function(t, e) {
        var i = t ? a[t] : a.init;
        if (!i) throw Error("Unknown function name '" + t + "' for timeago");
        return this.each(function() {
            i.call(this, e);
        }), this;
    }, document.createElement("abbr"), document.createElement("time"), t.timeago.settings.strings = {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        seconds: "1 minute",
        minute: "1 minute",
        minutes: "%d minutes",
        hour: "1 hour",
        hours: "%d hours",
        day: "1 day",
        days: "%d days",
        month: "1 month",
        months: "%d months",
        year: "1 year",
        years: "%d years",
        wordSeparator: " ",
        numbers: []
    }, o(), t.timeago.serverDateInterval = setInterval(function() {
        o();
    }, 6e4);
}), /*
 * jQuery File Upload Plugin 5.31.6
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery", "jquery.ui.widget" ], t) : t(window.jQuery);
}(function(t) {
    "use strict";
    t.support.xhrFileUpload = !(!window.XMLHttpRequestUpload || !window.FileReader), t.support.xhrFormDataFileUpload = !!window.FormData, 
    t.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice), 
    t.widget("blueimp.fileupload", {
        options: {
            dropZone: t(document),
            pasteZone: t(document),
            fileInput: void 0,
            replaceFileInput: !0,
            paramName: void 0,
            singleFileUploads: !0,
            limitMultiFileUploads: void 0,
            sequentialUploads: !1,
            limitConcurrentUploads: void 0,
            forceIframeTransport: !1,
            redirect: void 0,
            redirectParamName: void 0,
            postMessage: void 0,
            multipart: !0,
            maxChunkSize: void 0,
            uploadedBytes: void 0,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: !0,
            messages: {
                uploadedBytes: "Uploaded bytes exceed file size"
            },
            i18n: function(e, i) {
                return e = this.messages[e] || "" + e, i && t.each(i, function(t, i) {
                    e = e.replace("{" + t + "}", i);
                }), e;
            },
            formData: function(t) {
                return t.serializeArray();
            },
            add: function(e, i) {
                (i.autoUpload || i.autoUpload !== !1 && t(this).fileupload("option", "autoUpload")) && i.process().done(function() {
                    i.submit();
                });
            },
            processData: !1,
            contentType: !1,
            cache: !1
        },
        _specialOptions: [ "fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport" ],
        _blobSlice: t.support.blobSlice && function() {
            var t = this.slice || this.webkitSlice || this.mozSlice;
            return t.apply(this, arguments);
        },
        _BitrateTimer: function() {
            this.timestamp = Date.now ? Date.now() : new Date().getTime(), this.loaded = 0, this.bitrate = 0, this.getBitrate = function(t, e, i) {
                var n = t - this.timestamp;
                return (!this.bitrate || !i || n > i) && (this.bitrate = 8 * (e - this.loaded) * (1e3 / n), this.loaded = e, 
                this.timestamp = t), this.bitrate;
            };
        },
        _isXHRUpload: function(e) {
            return !e.forceIframeTransport && (!e.multipart && t.support.xhrFileUpload || t.support.xhrFormDataFileUpload);
        },
        _getFormData: function(e) {
            var i;
            return "function" == typeof e.formData ? e.formData(e.form) : t.isArray(e.formData) ? e.formData : "object" === t.type(e.formData) ? (i = [], 
            t.each(e.formData, function(t, e) {
                i.push({
                    name: t,
                    value: e
                });
            }), i) : [];
        },
        _getTotal: function(e) {
            var i = 0;
            return t.each(e, function(t, e) {
                i += e.size || 1;
            }), i;
        },
        _initProgressObject: function(e) {
            var i = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            e._progress ? t.extend(e._progress, i) : e._progress = i;
        },
        _initResponseObject: function(t) {
            var e;
            if (t._response) for (e in t._response) t._response.hasOwnProperty(e) && delete t._response[e]; else t._response = {};
        },
        _onProgress: function(t, e) {
            if (t.lengthComputable) {
                var i, n = Date.now ? Date.now() : new Date().getTime();
                if (e._time && e.progressInterval && n - e._time < e.progressInterval && t.loaded !== t.total) return;
                e._time = n, i = Math.floor(t.loaded / t.total * (e.chunkSize || e._progress.total)) + (e.uploadedBytes || 0), 
                this._progress.loaded += i - e._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(n, this._progress.loaded, e.bitrateInterval), 
                e._progress.loaded = e.loaded = i, e._progress.bitrate = e.bitrate = e._bitrateTimer.getBitrate(n, i, e.bitrateInterval), 
                this._trigger("progress", t, e), this._trigger("progressall", t, this._progress);
            }
        },
        _initProgressListener: function(e) {
            var i = this, n = e.xhr ? e.xhr() : t.ajaxSettings.xhr();
            n.upload && (t(n.upload).bind("progress", function(t) {
                var n = t.originalEvent;
                t.lengthComputable = n.lengthComputable, t.loaded = n.loaded, t.total = n.total, i._onProgress(t, e);
            }), e.xhr = function() {
                return n;
            });
        },
        _isInstanceOf: function(t, e) {
            return Object.prototype.toString.call(e) === "[object " + t + "]";
        },
        _initXHRData: function(e) {
            var i, n = this, s = e.files[0], o = e.multipart || !t.support.xhrFileUpload, r = e.paramName[0];
            e.headers = e.headers || {}, e.contentRange && (e.headers["Content-Range"] = e.contentRange), o && !e.blob && this._isInstanceOf("File", s) || (e.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(s.name) + '"'), 
            o ? t.support.xhrFormDataFileUpload && (e.postMessage ? (i = this._getFormData(e), e.blob ? i.push({
                name: r,
                value: e.blob
            }) : t.each(e.files, function(t, n) {
                i.push({
                    name: e.paramName[t] || r,
                    value: n
                });
            })) : (n._isInstanceOf("FormData", e.formData) ? i = e.formData : (i = new FormData(), t.each(this._getFormData(e), function(t, e) {
                i.append(e.name, e.value);
            })), e.blob ? i.append(r, e.blob, s.name) : t.each(e.files, function(t, s) {
                (n._isInstanceOf("File", s) || n._isInstanceOf("Blob", s)) && i.append(e.paramName[t] || r, s, s.name);
            })), e.data = i) : (e.contentType = s.type, e.data = e.blob || s), e.blob = null;
        },
        _initIframeSettings: function(e) {
            var i = t("<a></a>").prop("href", e.url).prop("host");
            e.dataType = "iframe " + (e.dataType || ""), e.formData = this._getFormData(e), e.redirect && i && i !== location.host && e.formData.push({
                name: e.redirectParamName || "redirect",
                value: e.redirect
            });
        },
        _initDataSettings: function(t) {
            this._isXHRUpload(t) ? (this._chunkedUpload(t, !0) || (t.data || this._initXHRData(t), this._initProgressListener(t)), 
            t.postMessage && (t.dataType = "postmessage " + (t.dataType || ""))) : this._initIframeSettings(t);
        },
        _getParamName: function(e) {
            var i = t(e.fileInput), n = e.paramName;
            return n ? t.isArray(n) || (n = [ n ]) : (n = [], i.each(function() {
                for (var e = t(this), i = e.prop("name") || "files[]", s = (e.prop("files") || [ 1 ]).length; s; ) n.push(i), 
                s -= 1;
            }), n.length || (n = [ i.prop("name") || "files[]" ])), n;
        },
        _initFormSettings: function(e) {
            e.form && e.form.length || (e.form = t(e.fileInput.prop("form")), e.form.length || (e.form = t(this.options.fileInput.prop("form")))), 
            e.paramName = this._getParamName(e), e.url || (e.url = e.form.prop("action") || location.href), e.type = (e.type || e.form.prop("method") || "").toUpperCase(), 
            "POST" !== e.type && "PUT" !== e.type && "PATCH" !== e.type && (e.type = "POST"), e.formAcceptCharset || (e.formAcceptCharset = e.form.attr("accept-charset"));
        },
        _getAJAXSettings: function(e) {
            var i = t.extend({}, this.options, e);
            return this._initFormSettings(i), this._initDataSettings(i), i;
        },
        _getDeferredState: function(t) {
            return t.state ? t.state() : t.isResolved() ? "resolved" : t.isRejected() ? "rejected" : "pending";
        },
        _enhancePromise: function(t) {
            return t.success = t.done, t.error = t.fail, t.complete = t.always, t;
        },
        _getXHRPromise: function(e, i, n) {
            var s = t.Deferred(), o = s.promise();
            return i = i || this.options.context || o, e === !0 ? s.resolveWith(i, n) : e === !1 && s.rejectWith(i, n), 
            o.abort = s.promise, this._enhancePromise(o);
        },
        _addConvenienceMethods: function(e, i) {
            var n = this, s = function(e) {
                return t.Deferred().resolveWith(n, [ e ]).promise();
            };
            i.process = function(t, e) {
                return (t || e) && (i._processQueue = this._processQueue = (this._processQueue || s(this)).pipe(t, e)), 
                this._processQueue || s(this);
            }, i.submit = function() {
                return "pending" !== this.state() && (i.jqXHR = this.jqXHR = n._trigger("submit", e, this) !== !1 && n._onSend(e, this)), 
                this.jqXHR || n._getXHRPromise();
            }, i.abort = function() {
                return this.jqXHR ? this.jqXHR.abort() : n._getXHRPromise();
            }, i.state = function() {
                return this.jqXHR ? n._getDeferredState(this.jqXHR) : this._processQueue ? n._getDeferredState(this._processQueue) : void 0;
            }, i.progress = function() {
                return this._progress;
            }, i.response = function() {
                return this._response;
            };
        },
        _getUploadedBytes: function(t) {
            var e = t.getResponseHeader("Range"), i = e && e.split("-"), n = i && i.length > 1 && parseInt(i[1], 10);
            return n && n + 1;
        },
        _chunkedUpload: function(e, i) {
            e.uploadedBytes = e.uploadedBytes || 0;
            var n, s, o = this, r = e.files[0], a = r.size, l = e.uploadedBytes, c = e.maxChunkSize || a, h = this._blobSlice, u = t.Deferred(), p = u.promise();
            return this._isXHRUpload(e) && h && (l || a > c) && !e.data ? i ? !0 : l >= a ? (r.error = e.i18n("uploadedBytes"), 
            this._getXHRPromise(!1, e.context, [ null, "error", r.error ])) : (s = function() {
                var i = t.extend({}, e), p = i._progress.loaded;
                i.blob = h.call(r, l, l + c, r.type), i.chunkSize = i.blob.size, i.contentRange = "bytes " + l + "-" + (l + i.chunkSize - 1) + "/" + a, 
                o._initXHRData(i), o._initProgressListener(i), n = (o._trigger("chunksend", null, i) !== !1 && t.ajax(i) || o._getXHRPromise(!1, i.context)).done(function(n, r, c) {
                    l = o._getUploadedBytes(c) || l + i.chunkSize, p + i.chunkSize - i._progress.loaded && o._onProgress(t.Event("progress", {
                        lengthComputable: !0,
                        loaded: l - i.uploadedBytes,
                        total: l - i.uploadedBytes
                    }), i), e.uploadedBytes = i.uploadedBytes = l, i.result = n, i.textStatus = r, i.jqXHR = c, o._trigger("chunkdone", null, i), 
                    o._trigger("chunkalways", null, i), a > l ? s() : u.resolveWith(i.context, [ n, r, c ]);
                }).fail(function(t, e, n) {
                    i.jqXHR = t, i.textStatus = e, i.errorThrown = n, o._trigger("chunkfail", null, i), o._trigger("chunkalways", null, i), 
                    u.rejectWith(i.context, [ t, e, n ]);
                });
            }, this._enhancePromise(p), p.abort = function() {
                return n.abort();
            }, s(), p) : !1;
        },
        _beforeSend: function(t, e) {
            0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer(), this._progress.loaded = this._progress.total = 0, 
            this._progress.bitrate = 0), this._initResponseObject(e), this._initProgressObject(e), e._progress.loaded = e.loaded = e.uploadedBytes || 0, 
            e._progress.total = e.total = this._getTotal(e.files) || 1, e._progress.bitrate = e.bitrate = 0, this._active += 1, 
            this._progress.loaded += e.loaded, this._progress.total += e.total;
        },
        _onDone: function(e, i, n, s) {
            var o = s._progress.total, r = s._response;
            o > s._progress.loaded && this._onProgress(t.Event("progress", {
                lengthComputable: !0,
                loaded: o,
                total: o
            }), s), r.result = s.result = e, r.textStatus = s.textStatus = i, r.jqXHR = s.jqXHR = n, this._trigger("done", null, s);
        },
        _onFail: function(t, e, i, n) {
            var s = n._response;
            n.recalculateProgress && (this._progress.loaded -= n._progress.loaded, this._progress.total -= n._progress.total), 
            s.jqXHR = n.jqXHR = t, s.textStatus = n.textStatus = e, s.errorThrown = n.errorThrown = i, this._trigger("fail", null, n);
        },
        _onAlways: function(t, e, i, n) {
            this._trigger("always", null, n);
        },
        _onSend: function(e, i) {
            i.submit || this._addConvenienceMethods(e, i);
            var n, s, o, r, a = this, l = a._getAJAXSettings(i), c = function() {
                return a._sending += 1, l._bitrateTimer = new a._BitrateTimer(), n = n || ((s || a._trigger("send", e, l) === !1) && a._getXHRPromise(!1, l.context, s) || a._chunkedUpload(l) || t.ajax(l)).done(function(t, e, i) {
                    a._onDone(t, e, i, l);
                }).fail(function(t, e, i) {
                    a._onFail(t, e, i, l);
                }).always(function(t, e, i) {
                    if (a._onAlways(t, e, i, l), a._sending -= 1, a._active -= 1, l.limitConcurrentUploads && l.limitConcurrentUploads > a._sending) for (var n = a._slots.shift(); n; ) {
                        if ("pending" === a._getDeferredState(n)) {
                            n.resolve();
                            break;
                        }
                        n = a._slots.shift();
                    }
                    0 === a._active && a._trigger("stop");
                });
            };
            return this._beforeSend(e, l), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (o = t.Deferred(), 
            this._slots.push(o), r = o.pipe(c)) : (this._sequence = this._sequence.pipe(c, c), r = this._sequence), 
            r.abort = function() {
                return s = [ , "abort", "abort" ], n ? n.abort() : (o && o.rejectWith(l.context, s), c());
            }, this._enhancePromise(r)) : c();
        },
        _onAdd: function(e, i) {
            var n, s, o, r, a = this, l = !0, c = t.extend({}, this.options, i), h = c.limitMultiFileUploads, u = this._getParamName(c);
            if ((c.singleFileUploads || h) && this._isXHRUpload(c)) if (!c.singleFileUploads && h) for (o = [], 
            n = [], r = 0; i.files.length > r; r += h) o.push(i.files.slice(r, r + h)), s = u.slice(r, r + h), s.length || (s = u), 
            n.push(s); else n = u; else o = [ i.files ], n = [ u ];
            return i.originalFiles = i.files, t.each(o || i.files, function(s, r) {
                var c = t.extend({}, i);
                return c.files = o ? r : [ r ], c.paramName = n[s], a._initResponseObject(c), a._initProgressObject(c), 
                a._addConvenienceMethods(e, c), l = a._trigger("add", e, c);
            }), l;
        },
        _replaceFileInput: function(e) {
            var i = e.clone(!0);
            t("<form></form>").append(i)[0].reset(), e.after(i).detach(), t.cleanData(e.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function(t, n) {
                return n === e[0] ? i[0] : n;
            }), e[0] === this.element[0] && (this.element = i);
        },
        _handleFileTreeEntry: function(e, i) {
            var n, s = this, o = t.Deferred(), r = function(t) {
                t && !t.entry && (t.entry = e), o.resolve([ t ]);
            };
            return i = i || "", e.isFile ? e._file ? (e._file.relativePath = i, o.resolve(e._file)) : e.file(function(t) {
                t.relativePath = i, o.resolve(t);
            }, r) : e.isDirectory ? (n = e.createReader(), n.readEntries(function(t) {
                s._handleFileTreeEntries(t, i + e.name + "/").done(function(t) {
                    o.resolve(t);
                }).fail(r);
            }, r)) : o.resolve([]), o.promise();
        },
        _handleFileTreeEntries: function(e, i) {
            var n = this;
            return t.when.apply(t, t.map(e, function(t) {
                return n._handleFileTreeEntry(t, i);
            })).pipe(function() {
                return Array.prototype.concat.apply([], arguments);
            });
        },
        _getDroppedFiles: function(e) {
            e = e || {};
            var i = e.items;
            return i && i.length && (i[0].webkitGetAsEntry || i[0].getAsEntry) ? this._handleFileTreeEntries(t.map(i, function(t) {
                var e;
                return t.webkitGetAsEntry ? (e = t.webkitGetAsEntry(), e && (e._file = t.getAsFile()), e) : t.getAsEntry();
            })) : t.Deferred().resolve(t.makeArray(e.files)).promise();
        },
        _getSingleFileInputFiles: function(e) {
            e = t(e);
            var i, n, s = e.prop("webkitEntries") || e.prop("entries");
            if (s && s.length) return this._handleFileTreeEntries(s);
            if (i = t.makeArray(e.prop("files")), i.length) void 0 === i[0].name && i[0].fileName && t.each(i, function(t, e) {
                e.name = e.fileName, e.size = e.fileSize;
            }); else {
                if (n = e.prop("value"), !n) return t.Deferred().resolve([]).promise();
                i = [ {
                    name: n.replace(/^.*\\/, "")
                } ];
            }
            return t.Deferred().resolve(i).promise();
        },
        _getFileInputFiles: function(e) {
            return e instanceof t && 1 !== e.length ? t.when.apply(t, t.map(e, this._getSingleFileInputFiles)).pipe(function() {
                return Array.prototype.concat.apply([], arguments);
            }) : this._getSingleFileInputFiles(e);
        },
        _onChange: function(e) {
            var i = this, n = {
                fileInput: t(e.target),
                form: t(e.target.form)
            };
            this._getFileInputFiles(n.fileInput).always(function(t) {
                n.files = t, i.options.replaceFileInput && i._replaceFileInput(n.fileInput), i._trigger("change", e, n) !== !1 && i._onAdd(e, n);
            });
        },
        _onPaste: function(e) {
            var i = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items, n = {
                files: []
            };
            return i && i.length && (t.each(i, function(t, e) {
                var i = e.getAsFile && e.getAsFile();
                i && n.files.push(i);
            }), this._trigger("paste", e, n) === !1 || this._onAdd(e, n) === !1) ? !1 : void 0;
        },
        _onDrop: function(t) {
            t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
            var e = this, i = t.dataTransfer, n = {};
            i && i.files && i.files.length && (t.preventDefault(), this._getDroppedFiles(i).always(function(i) {
                n.files = i, e._trigger("drop", t, n) !== !1 && e._onAdd(t, n);
            }));
        },
        _onDragOver: function(e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var i = e.dataTransfer;
            if (i) {
                if (this._trigger("dragover", e) === !1) return !1;
                -1 !== t.inArray("Files", i.types) && (i.dropEffect = "copy", e.preventDefault());
            }
        },
        _initEventHandlers: function() {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                dragover: this._onDragOver,
                drop: this._onDrop
            }), this._on(this.options.pasteZone, {
                paste: this._onPaste
            })), this._on(this.options.fileInput, {
                change: this._onChange
            });
        },
        _destroyEventHandlers: function() {
            this._off(this.options.dropZone, "dragover drop"), this._off(this.options.pasteZone, "paste"), this._off(this.options.fileInput, "change");
        },
        _setOption: function(e, i) {
            var n = -1 !== t.inArray(e, this._specialOptions);
            n && this._destroyEventHandlers(), this._super(e, i), n && (this._initSpecialOptions(), this._initEventHandlers());
        },
        _initSpecialOptions: function() {
            var e = this.options;
            void 0 === e.fileInput ? e.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : e.fileInput instanceof t || (e.fileInput = t(e.fileInput)), 
            e.dropZone instanceof t || (e.dropZone = t(e.dropZone)), e.pasteZone instanceof t || (e.pasteZone = t(e.pasteZone));
        },
        _getRegExp: function(t) {
            var e = t.split("/"), i = e.pop();
            return e.shift(), RegExp(e.join("/"), i);
        },
        _isRegExpOption: function(e, i) {
            return "url" !== e && "string" === t.type(i) && /^\/.*\/[igm]{0,3}$/.test(i);
        },
        _initDataAttributes: function() {
            var e = this, i = this.options;
            t.each(t(this.element[0].cloneNode(!1)).data(), function(t, n) {
                e._isRegExpOption(t, n) && (n = e._getRegExp(n)), i[t] = n;
            });
        },
        _create: function() {
            this._initDataAttributes(), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), 
            this._sending = this._active = 0, this._initProgressObject(this), this._initEventHandlers();
        },
        active: function() {
            return this._active;
        },
        progress: function() {
            return this._progress;
        },
        add: function(e) {
            var i = this;
            e && !this.options.disabled && (e.fileInput && !e.files ? this._getFileInputFiles(e.fileInput).always(function(t) {
                e.files = t, i._onAdd(null, e);
            }) : (e.files = t.makeArray(e.files), this._onAdd(null, e)));
        },
        send: function(e) {
            if (e && !this.options.disabled) {
                if (e.fileInput && !e.files) {
                    var i, n, s = this, o = t.Deferred(), r = o.promise();
                    return r.abort = function() {
                        return n = !0, i ? i.abort() : (o.reject(null, "abort", "abort"), r);
                    }, this._getFileInputFiles(e.fileInput).always(function(t) {
                        n || (e.files = t, i = s._onSend(null, e).then(function(t, e, i) {
                            o.resolve(t, e, i);
                        }, function(t, e, i) {
                            o.reject(t, e, i);
                        }));
                    }), this._enhancePromise(r);
                }
                if (e.files = t.makeArray(e.files), e.files.length) return this._onSend(null, e);
            }
            return this._getXHRPromise(!1, e && e.context);
        }
    });
}), /*	
 *	jQuery dotdotdot 1.5.9
 *	
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
function(t) {
    function e(t, e, i) {
        var n = t.children(), o = !1;
        t.empty();
        for (var r = 0, a = n.length; a > r; r++) {
            var l = n.eq(r);
            if (t.append(l), i && t.append(i), s(t, e)) {
                l.remove(), o = !0;
                break;
            }
            i && i.remove();
        }
        return o;
    }
    function i(e, o, r, a, l) {
        var c = e.contents(), h = !1;
        e.empty();
        for (var u = "table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, select, optgroup, option, textarea, script, style", p = 0, d = c.length; d > p && !h; p++) {
            var g = c[p], f = t(g);
            void 0 !== g && (e.append(f), l && e[e.is(u) ? "after" : "append"](l), 3 == g.nodeType ? s(r, a) && (h = n(f, o, r, a, l)) : h = i(f, o, r, a, l), 
            h || l && l.remove());
        }
        return h;
    }
    function n(t, e, i, r, c) {
        var h = !1, u = t[0];
        if (u === void 0) return !1;
        for (var p = "letter" == r.wrap ? "" : " ", d = l(u).split(p), g = -1, f = -1, m = 0, v = d.length - 1; v >= m; ) {
            var y = Math.floor((m + v) / 2);
            if (y == f) break;
            f = y, a(u, d.slice(0, f + 1).join(p) + r.ellipsis), s(i, r) ? v = f : (g = f, m = f);
        }
        if (-1 == g || 1 == d.length && 0 == d[0].length) {
            var b = t.parent();
            t.remove();
            var w = c ? c.length : 0;
            if (b.contents().size() > w) {
                var _ = b.contents().eq(-1 - w);
                h = n(_, e, i, r, c);
            } else {
                var x = b.prev(), u = x.contents().eq(-1)[0];
                if (u !== void 0) {
                    var k = o(l(u), r);
                    a(u, k), c && x.append(c), b.remove(), h = !0;
                }
            }
        } else {
            var k = o(d.slice(0, g + 1).join(p), r);
            h = !0, a(u, k);
        }
        return h;
    }
    function s(t, e) {
        return t.innerHeight() > e.maxHeight;
    }
    function o(e, i) {
        for (;t.inArray(e.slice(-1), i.lastCharacter.remove) > -1; ) e = e.slice(0, -1);
        return 0 > t.inArray(e.slice(-1), i.lastCharacter.noEllipsis) && (e += i.ellipsis), e;
    }
    function r(t) {
        return {
            width: t.innerWidth(),
            height: t.innerHeight()
        };
    }
    function a(t, e) {
        t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e);
    }
    function l(t) {
        return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : "";
    }
    function c(e, i) {
        return e === void 0 ? !1 : e ? "string" == typeof e ? (e = t(e, i), e.length ? e : !1) : "object" == typeof e ? e.jquery === void 0 ? !1 : e : !1 : !1;
    }
    function h(t) {
        for (var e = t.innerHeight(), i = [ "paddingTop", "paddingBottom" ], n = 0, s = i.length; s > n; n++) {
            var o = parseInt(t.css(i[n]), 10);
            isNaN(o) && (o = 0), e -= o;
        }
        return e;
    }
    function u(t, e) {
        return t ? (e = "string" == typeof e ? "dotdotdot: " + e : [ "dotdotdot:", e ], window.console !== void 0 && window.console.log !== void 0 && window.console.log(e), 
        !1) : !1;
    }
    if (!t.fn.dotdotdot) {
        t.fn.dotdotdot = function(n) {
            if (0 == this.length) return n && n.debug === !1 || u(!0, 'No element found for "' + this.selector + '".'), 
            this;
            if (this.length > 1) return this.each(function() {
                t(this).dotdotdot(n);
            });
            var o = this;
            o.data("dotdotdot") && o.trigger("destroy.dot"), o.data("dotdotdot-style", o.attr("style")), o.css("word-wrap", "break-word"), 
            o.bind_events = function() {
                return o.bind("update.dot", function(n, r) {
                    n.preventDefault(), n.stopPropagation(), l.maxHeight = "number" == typeof l.height ? l.height : h(o), 
                    l.maxHeight += l.tolerance, r !== void 0 && (("string" == typeof r || r instanceof HTMLElement) && (r = t("<div />").append(r).contents()), 
                    r instanceof t && (a = r)), m = o.wrapInner('<div class="dotdotdot" />').children(), m.empty().append(a.clone(!0)).css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var c = !1, u = !1;
                    return d.afterElement && (c = d.afterElement.clone(!0), d.afterElement.remove()), s(m, l) && (u = "children" == l.wrap ? e(m, l, c) : i(m, o, m, l, c)), 
                    m.replaceWith(m.contents()), m = null, t.isFunction(l.callback) && l.callback.call(o[0], u, a), d.isTruncated = u, 
                    u;
                }).bind("isTruncated.dot", function(t, e) {
                    return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(o[0], d.isTruncated), 
                    d.isTruncated;
                }).bind("originalContent.dot", function(t, e) {
                    return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(o[0], a), a;
                }).bind("destroy.dot", function(t) {
                    t.preventDefault(), t.stopPropagation(), o.unwatch().unbind_events().empty().append(a).attr("style", o.data("dotdotdot-style")).data("dotdotdot", !1);
                }), o;
            }, o.unbind_events = function() {
                return o.unbind(".dot"), o;
            }, o.watch = function() {
                if (o.unwatch(), "window" == l.watch) {
                    var e = t(window), i = e.width(), n = e.height();
                    e.bind("resize.dot" + d.dotId, function() {
                        i == e.width() && n == e.height() && l.windowResizeFix || (i = e.width(), n = e.height(), f && clearInterval(f), 
                        f = setTimeout(function() {
                            o.trigger("update.dot");
                        }, 10));
                    });
                } else g = r(o), f = setInterval(function() {
                    var t = r(o);
                    (g.width != t.width || g.height != t.height) && (o.trigger("update.dot"), g = r(o));
                }, 100);
                return o;
            }, o.unwatch = function() {
                return t(window).unbind("resize.dot" + d.dotId), f && clearInterval(f), o;
            };
            var a = o.contents(), l = t.extend(!0, {}, t.fn.dotdotdot.defaults, n), d = {}, g = {}, f = null, m = null;
            return d.afterElement = c(l.after, o), d.isTruncated = !1, d.dotId = p++, o.data("dotdotdot", !0).bind_events().trigger("update.dot"), 
            l.watch && o.watch(), o;
        }, t.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            lastCharacter: {
                remove: [ " ", ",", ";", ".", "!", "?" ],
                noEllipsis: []
            },
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0,
            debug: !1
        };
        var p = 1, d = t.fn.html;
        t.fn.html = function(t) {
            return t !== void 0 ? this.data("dotdotdot") && "function" != typeof t ? this.trigger("update", [ t ]) : d.call(this, t) : d.call(this);
        };
        var g = t.fn.text;
        t.fn.text = function(e) {
            if (e !== void 0) {
                if (this.data("dotdotdot")) {
                    var i = t("<div />");
                    return i.text(e), e = i.html(), i.remove(), this.trigger("update", [ e ]);
                }
                return g.call(this, e);
            }
            return g.call(this);
        };
    }
}(jQuery);

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
var dateFormat = function() {
    var t = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, e = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, i = /[^-+\dA-Z]/g, n = function(t, e) {
        for (t += "", e = e || 2; e > t.length; ) t = "0" + t;
        return t;
    };
    return function(s, o, r) {
        var a = dateFormat;
        if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(s) || /\d/.test(s) || (o = s, 
        s = void 0), s = s ? new Date(s) : new Date(), isNaN(s)) throw SyntaxError("invalid date");
        o = (a.masks[o] || o || a.masks["default"]) + "", "UTC:" == o.slice(0, 4) && (o = o.slice(4), r = !0);
        var l = r ? "getUTC" : "get", c = s[l + "Date"](), h = s[l + "Day"](), u = s[l + "Month"](), p = s[l + "FullYear"](), d = s[l + "Hours"](), g = s[l + "Minutes"](), f = s[l + "Seconds"](), m = s[l + "Milliseconds"](), v = r ? 0 : s.getTimezoneOffset(), y = {
            d: c,
            dd: n(c),
            ddd: a.i18n.dayNames[h],
            dddd: a.i18n.dayNames[h + 7],
            m: u + 1,
            mm: n(u + 1),
            mmm: a.i18n.monthNames[u],
            mmmm: a.i18n.monthNames[u + 12],
            yy: (p + "").slice(2),
            yyyy: p,
            h: d % 12 || 12,
            hh: n(d % 12 || 12),
            H: d,
            HH: n(d),
            M: g,
            MM: n(g),
            s: f,
            ss: n(f),
            l: n(m, 3),
            L: n(m > 99 ? Math.round(m / 10) : m),
            t: 12 > d ? "a" : "p",
            tt: 12 > d ? "am" : "pm",
            T: 12 > d ? "A" : "P",
            TT: 12 > d ? "AM" : "PM",
            Z: r ? "UTC" : ((s + "").match(e) || [ "" ]).pop().replace(i, ""),
            o: (v > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(v) / 60) + Math.abs(v) % 60, 4),
            S: [ "th", "st", "nd", "rd" ][c % 10 > 3 ? 0 : (10 != c % 100 - c % 10) * c % 10]
        };
        return o.replace(t, function(t) {
            return t in y ? y[t] : t.slice(1, t.length - 1);
        });
    };
}();

dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
}, dateFormat.i18n = {
    dayNames: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
}, Date.prototype.format = function(t, e) {
    return dateFormat(this, t, e);
}, /*
*   JavaScript interface for the SoundCloud Player widget
*   Author: Matas Petrikas, matas@soundcloud.com
*   Copyright (c) 2009  SoundCloud Ltd.
*   Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*/
function() {
    var t = /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
    window.soundcloud = {
        version: "0.1",
        debug: !1,
        _listeners: [],
        _redispatch: function(t, e, i) {
            var n, s = this._listeners[t] || [], o = "soundcloud:" + t;
            try {
                n = this.getPlayer(e);
            } catch (r) {
                return this.debug && window.console && console.error("unable to dispatch widget event " + t + " for the widget id " + e, i, r), 
                void 0;
            }
            window.jQuery ? jQuery(n).trigger(o, [ i ]) : window.Prototype && $(n).fire(o, i);
            for (var a = 0, l = s.length; l > a; a += 1) s[a].apply(n, [ n, i ]);
            this.debug && window.console && console.log(o, t, e, i);
        },
        addEventListener: function(t, e) {
            this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e);
        },
        removeEventListener: function(t, e) {
            for (var i = this._listeners[t] || [], n = 0, s = i.length; s > n; n += 1) i[n] === e && i.splice(n, 1);
        },
        getPlayer: function(e) {
            var i;
            try {
                if (!e) throw "The SoundCloud Widget DOM object needs an id atribute, please refer to SoundCloud Widget API documentation.";
                if (i = t ? window[e] : document[e]) {
                    if (i.api_getFlashId) return i;
                    throw "The SoundCloud Widget External Interface is not accessible. Check that allowscriptaccess is set to 'always' in embed code";
                }
                throw "The SoundCloud Widget with an id " + e + " couldn't be found";
            } catch (n) {
                throw console && console.error && console.error(n), n;
            }
        },
        onPlayerReady: function(t, e) {
            this._redispatch("onPlayerReady", t, e);
        },
        onMediaStart: function(t, e) {
            this._redispatch("onMediaStart", t, e);
        },
        onMediaEnd: function(t, e) {
            this._redispatch("onMediaEnd", t, e);
        },
        onMediaPlay: function(t, e) {
            this._redispatch("onMediaPlay", t, e);
        },
        onMediaPause: function(t, e) {
            this._redispatch("onMediaPause", t, e);
        },
        onMediaBuffering: function(t, e) {
            this._redispatch("onMediaBuffering", t, e);
        },
        onMediaSeek: function(t, e) {
            this._redispatch("onMediaSeek", t, e);
        },
        onMediaDoneBuffering: function(t, e) {
            this._redispatch("onMediaDoneBuffering", t, e);
        },
        onPlayerError: function(t, e) {
            this._redispatch("onPlayerError", t, e);
        }
    };
}(), function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : "object" == typeof exports ? module.exports = t : t(jQuery);
}(function(t) {
    function e(e) {
        var i = e || window.event, n = [].slice.call(arguments, 1), l = 0, c = 0, h = 0;
        e = t.event.fix(i), e.type = "mousewheel", i.detail && (l = -1 * i.detail), i.wheelDelta && (l = i.wheelDelta), 
        i.deltaY && (h = -1 * i.deltaY, l = h), i.deltaX && (c = -1 * i.deltaX, l = c), void 0 !== i.wheelDeltaY && (h = i.wheelDeltaY), 
        void 0 !== i.wheelDeltaX && (c = i.wheelDeltaX);
        var u = 1;
        return o && r && Math.abs(l - Math.round(l)) > 1e-7 && (u *= 120), s && r && (u *= 40), o && a && (u /= 15), 
        l *= u, c *= u, h *= u, n.unshift(e, l, c, h), (t.event.dispatch || t.event.handle).apply(this, n);
    }
    var i = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], n = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], s = navigator.platform.toUpperCase().indexOf("WIN") >= 0, o = navigator.platform.toUpperCase().indexOf("MAC") >= 0, r = navigator.userAgent.toUpperCase().indexOf("FIREFOX") >= 0, a = navigator.userAgent.toUpperCase().indexOf("OPERA") >= 0;
    if (t.event.fixHooks) for (var l = i.length; l; ) t.event.fixHooks[i[--l]] = t.event.mouseHooks;
    t.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) for (var t = n.length; t; ) this.addEventListener(n[--t], e, !1); else this.onmousewheel = e;
        },
        teardown: function() {
            if (this.removeEventListener) for (var t = n.length; t; ) this.removeEventListener(n[--t], e, !1); else this.onmousewheel = null;
        }
    }, t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t);
        }
    });
}), function() {
    Modernizr.addTest("retina", function() {
        return window.devicePixelRatio > 1;
    }), Modernizr.addTest("Mac", function() {
        return -1 != window.navigator.userAgent.indexOf("Mac");
    }), Modernizr.addTest("webkit", function() {
        return -1 != window.navigator.userAgent.indexOf("AppleWebKit");
    }), Modernizr.addTest("opera", function() {
        return !(!window.opera || !window.opera.buildNumber);
    }), Modernizr.addTest("msie", function() {
        return !1;
    }), Modernizr.addTest("safari", function() {
        return -1 != navigator.userAgent.indexOf("Safari") && (-1 != navigator.userAgent.indexOf("Mac") || navigator.userAgent.indexOf("Windows")) && -1 == navigator.userAgent.indexOf("Chrome");
    }), Modernizr.addTest("ismobile", function() {
        return 1 == window.isMobile;
    }), Modernizr.addTest("firefox", function() {
        return window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    });
}(), function(t, e) {
    t.fn.RMDrag = function(i) {
        function n(e) {
            a(e), window._moveInProcess || (l = {
                startX: e.pageX,
                startY: e.pageY,
                deltaX: 0,
                deltaY: 0,
                velocityX: 0,
                velocityY: 0,
                moved: !1,
                startTime: Number(new Date()),
                duration: 0
            }, r(e), t(document).on(c.move, s).on(c.end, o), "function" == typeof i.start && i.start.call(u, e), 
            i.dragClass && "string" == typeof i.dragClass && p.addClass(i.dragClass));
        }
        function s(t) {
            a(t), l.moved = !0;
            var e = t.pageX - l.startX, n = t.pageY - l.startY, s = e - l.deltaX || e, o = n - l.deltaY || n;
            Math.abs(s) > h.X && (s = l.velocityX), Math.abs(o) > h.Y && (o = l.velocityY), l.deltaX = e, l.deltaY = n, 
            l.velocityX = s, l.velocityY = o, r(t), "function" == typeof i.move && i.move.call(u, t), window._moveInProcess = !0;
        }
        function o(e) {
            a(e), l.duration = Number(new Date()) - l.startTime, r(e), t(document).off(c.move, s).off(c.end, o), 
            "function" == typeof i.stop && i.stop.call(u, e), window._moveInProcess = !1, i.dragClass && "string" == typeof i.dragClass && p.removeClass(i.dragClass);
        }
        function r(t) {
            for (prop in l) t[prop] = l[prop];
        }
        function a(t) {
            t && (i.preventDefault && t.preventDefault(), i.silent && t.stopPropagation());
        }
        if (!i) return this;
        "function" == typeof i && (i = {
            start: arguments[0],
            move: arguments[1],
            stop: arguments[2]
        }), i.start = i.start || i.begin || i.down, i.stop = i.stop || i.end || i.up, i.move = i.move || i.drag, 
        i.silent = i.silent === e ? !0 : i.silent;
        var l, c = {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup"
        }, h = {
            X: 200,
            Y: 200
        }, u = this[0], p = t(u);
        return this.on(c.start, n), this;
    };
}(jQuery), function(t) {
    t.fn.RMAltText = function(e) {
        return this.each(function() {
            function i() {
                clearTimeout(h), o.hasClass("rmalttext-disable") || o.hasClass("active") || (h = setTimeout(function() {
                    if (!c) {
                        c = t(u).appendTo(o), c.find(".rmalttext-content").text(o.attr("data-alt"));
                        var e = c.width(), i = c.offset().left - e / 2, n = c.offset().top;
                        n >= t(window).height() / 2 || "top" == o.attr("data-pos") ? c.addClass("rmalttext-top") : c.addClass("rmalttext-bottom");
                        var s = 0;
                        l > i && (s = l - i), i + e > t(window).width() - l && (s = t(window).width() - l - (i + e)), c.css({
                            "margin-left": s + "px",
                            "margin-top": o.attr("data-alt-top") || 0
                        });
                        var r = parseInt(c.find(".rmalttext-corner-wrapper").css("margin-left"), 10);
                        c.find(".rmalttext-corner-wrapper").css("margin-left", -s + r + "px"), c.addClass("rmalttext-hidden");
                    }
                    c.fadeIn(200);
                }, 1e3));
            }
            function n() {
                clearTimeout(h), h = setTimeout(function() {
                    c && c.fadeOut(150, function() {
                        c.remove(), c = void 0;
                    });
                }, 400);
            }
            function s() {
                clearTimeout(h), c && c.hide(0, function() {
                    c.remove(), c = void 0;
                });
            }
            var o = t(this);
            if (!o.hasClass("rmalttext") && !Modernizr.touch) {
                o.addClass("rmalttext");
                var r = o.attr("data-alt");
                if (r) {
                    var a = {}, l = 10;
                    e && t.extend(a, e);
                    var c, h, u = '<div class="rmalttext-wrapper">							<div class="rmalttext-inner">								<div class="rmalttext-content">' + r + '</div>								<div class="rmalttext-corner-wrapper"><div class="rmalttext-corner"></div></div>							</div>						</div>';
                    o.on("mouseenter", i).on("mouseleave", n).on("click", s);
                }
            }
        }), this;
    };
}(jQuery), function(t) {
    t.keycodes = {
        enter: 13,
        esc: 27,
        alt: 18,
        shift: 16,
        pgUp: 33,
        pgDn: 34,
        left: 37,
        right: 39,
        up: 38,
        down: 40,
        del: 46,
        backspace: 8,
        comma: 188,
        g: 71,
        h: 72,
        s: 83,
        w: 87,
        m: 77
    };
}(jQuery), function(t) {
    t.fn.zoom = function(e) {
        return e || (e = 1), this.each(function(i, n) {
            Math.abs(e - 1) > .01 ? t(n).css({
                transform: "scale(" + e + ")",
                "-o-transform": "scale(" + e + ")",
                "-ms-transform": "scale(" + e + ")",
                "-moz-transform": "scale(" + e + ")",
                "-webkit-transform": "scale(" + e + ")",
                "transform-origin": "0 0",
                "-o-transform-origin": "0 0",
                "-ms-transform-origin": "0 0",
                "-moz-transform-origin": "0 0",
                "-webkit-transform-origin": "0 0"
            }) : t(n).css({
                transform: "none",
                "-o-transform": "none",
                "-ms-transform": "none",
                "-moz-transform": "none",
                "-webkit-transform": "none"
            });
        });
    };
}(jQuery), function(t) {
    t.fn.RMScroll = function(e) {
        var i = function(t, e) {
            this.options = _.clone(t), this.$scroll = e, this.incDelta = 0, this.mouseWheelProceedThrottled = _.throttle(this.mouseWheelProceed, 50), 
            _.defaults(this.options, {
                gap_start: 0,
                gap_end: 0,
                $gutter: null,
                tp: "vertical",
                wheelScrollSpeed: 1,
                scrollStep: 1,
                systemScroll: !1
            });
        };
        i.prototype = {
            initialize: function() {
                _.bindAll(this), this.options.$container.bind("scroll", this.onScroll), this.options.systemScroll || this.options.$container.bind("mousewheel", this.onMouseWheel), 
                this.options.$handle.RMDrag({
                    start: this.startScrollDrag,
                    move: this.moveScrollDrag,
                    end: this.stopScrollDrag,
                    silent: !0,
                    preventDefault: !0
                }), this.data = {
                    handle_pos: 0,
                    handle_size: 0,
                    container_size: 0,
                    content_size: 0,
                    scroll_pos: 0,
                    scroll_percent: 0
                }, this.recalc();
            },
            onMouseWheel: function(t, e, i, n) {
                t.preventDefault(), (i || n) && ("vertical" == this.options.tp ? e = n : (e = i || n, t.stopPropagation()));
                var s = -Math.ceil(e * this.options.wheelScrollSpeed);
                this.incDelta += s, this.mouseWheelProceedThrottled(this.incDelta);
            },
            mouseWheelProceed: function(t) {
                if (t > 0 && this.options.scrollStep > t && (t = this.options.scrollStep), 0 > t && t > -this.options.scrollStep && (t = -this.options.scrollStep), 
                "vertical" == this.options.tp) {
                    var e = t + this.options.$container.scrollTop();
                    e -= e % this.options.scrollStep, this.options.$container.scrollTop(e);
                } else {
                    var e = t + this.options.$container.scrollLeft();
                    e -= e % this.options.scrollStep, this.options.$container.scrollLeft(e);
                }
                this.incDelta = 0;
            },
            recalc: function() {
                this.data.container_size = "vertical" == this.options.tp ? this.options.$container.height() : this.options.$container.width(), 
                this.data.container_size_with_gaps = this.data.container_size - this.options.gap_start - this.options.gap_end, 
                this.data.content_size = "vertical" == this.options.tp ? this.options.$content.outerHeight(!0) : this.options.$content.outerWidth(!0), 
                this.data.handle_size = this.data.container_size_with_gaps / this.data.content_size, this.data.handle_size = Math.max(Math.min(this.data.handle_size, 1), 0), 
                this.data.handle_size = Math.sqrt(this.data.handle_size), this.data.handle_size = Math.ceil(this.data.handle_size * this.data.container_size_with_gaps), 
                this.data.container_size >= this.data.content_size ? (this.options.$handle.css("display", "none"), this.options.$gutter && this.options.$gutter.css("display", "none")) : (this.options.$handle.css("display", "block"), 
                this.options.$gutter && this.options.$gutter.css("display", "block")), this.options.$handle.css("vertical" == this.options.tp ? "height" : "width", this.data.handle_size), 
                this.onScroll();
            },
            onScroll: function(t) {
                this.data.scroll_pos = "vertical" == this.options.tp ? this.options.$container.scrollTop() : this.options.$container.scrollLeft();
                var e = this.data.content_size - this.data.container_size;
                this.data.scroll_pos > e && (this.data.scroll_pos = e), this.data.scroll_percent = e > 0 ? this.data.scroll_pos / e : 0, 
                this.data.handle_pos = this.options.gap_start + Math.ceil(this.data.scroll_percent * (this.data.container_size_with_gaps - this.data.handle_size)), 
                this.options.$handle.css("vertical" == this.options.tp ? "top" : "left", this.data.handle_pos), this.data.scroll_event = t, 
                "function" == typeof this.options.onScroll && this.options.onScroll(this.data);
            },
            startScrollDrag: function() {
                this.options.$handle.addClass("dragging"), this.oldHandlePos = this.data.handle_pos;
            },
            moveScrollDrag: function(t) {
                var e = "vertical" == this.options.tp ? t.deltaY : t.deltaX, i = this.oldHandlePos + e - this.options.gap_start, n = i / (this.data.container_size_with_gaps - this.data.handle_size);
                n = Math.min(Math.max(n, 0), 1);
                var s = n * (this.data.content_size - this.data.container_size);
                "vertical" == this.options.tp ? this.options.$container.scrollTop(s) : this.options.$container.scrollLeft(s);
            },
            stopScrollDrag: function() {
                this.options.$handle.removeClass("dragging");
            }
        };
        var n = t(this), s = new i(e, n);
        return s.initialize(), n.data("scroll", s), this;
    };
}(jQuery), function(t) {
    t.fn.RMAutoResizeTextArea = function(e) {
        var i = function(t, e) {
            this.options = _.clone(t), this.$input = e, _.defaults(this.options, {
                maxHeight: 9999,
                maxVisibleHeight: 9999,
                disableMultiline: !1,
                $scroll: null
            }), this.$scroll = this.options.$scroll;
        };
        i.prototype = {
            initialize: function() {
                _.bindAll(this), this.$input.on("input", this.resizeTextArea), this.$input.on("keydown", this.keyDown), 
                this.options.$scroll && (this.$input.on("scroll", this.onScroll), this.$input.bind("mousewheel", this.onMouseWheel), 
                this.$scroll.bind("mousewheel", this.onMouseWheel), this.$scroll.RMDrag({
                    start: this.startScrollDrag,
                    move: this.moveScrollDrag,
                    end: this.stopScrollDrag,
                    silent: !0,
                    preventDefault: !0
                })), this.data = {
                    handle_pos: 0,
                    handle_size: 0,
                    container_size: 0,
                    content_size: 0,
                    scroll_pos: 0,
                    scroll_percent: 0
                };
                var t = this.$input.css("background-position"), e = t.split(" ");
                this.background_x = parseInt(e[0], 10), this.background_y = parseInt(e[1], 10), this.prevText = this.$input.val(), 
                this.resizeTextArea();
            },
            onMouseWheel: function(t, e) {
                if (this.options.$scroll) {
                    var i = -Math.ceil(.1 * e);
                    if (i) {
                        t.preventDefault(), i > 0 && 1 > i && (i = 1), 0 > i && i > -1 && (i = -1);
                        var n = i + this.$input.scrollTop();
                        this.$input.scrollTop(n);
                    }
                }
            },
            onScroll: function() {
                if (this.options.$scroll) {
                    this.data.scroll_pos = this.$input.scrollTop();
                    var t = this.data.content_size - this.data.container_size;
                    this.data.scroll_pos > t && (this.data.scroll_pos = t), this.data.scroll_percent = t > 0 ? this.data.scroll_pos / t : 0, 
                    this.data.handle_pos = Math.ceil(this.data.scroll_percent * (this.data.container_size - this.data.handle_size)), 
                    this.$scroll.css("top", this.data.handle_pos), this.$input.css("background-position", this.background_x + "px " + (this.background_y - this.data.scroll_pos) + "px");
                }
            },
            recalcScroll: function() {
                this.options.$scroll && (this.data.handle_size = this.data.container_size / this.data.content_size, 
                this.data.handle_size = Math.max(Math.min(this.data.handle_size, 1), 0), this.data.handle_size = Math.sqrt(this.data.handle_size), 
                this.data.handle_size = Math.ceil(this.data.handle_size * this.data.container_size), this.data.container_size >= this.data.content_size ? this.$scroll.css("display", "none") : this.$scroll.css("display", "block"), 
                this.$scroll.css("height", this.data.handle_size), this.onScroll());
            },
            startScrollDrag: function() {
                this.$scroll.addClass("dragging"), this.oldDeltaY = 0;
            },
            moveScrollDrag: function(t) {
                var e = t.deltaY - this.oldDeltaY, i = (this.data.container_size - this.data.handle_size) / (this.data.content_size - this.data.container_size);
                0 > e && e > -i && (e = -i), e > 0 && i > e && (e = i);
                var n = this.data.handle_pos + e, s = n / (this.data.container_size - this.data.handle_size);
                s = Math.min(Math.max(s, 0), 1);
                var o = s * (this.data.content_size - this.data.container_size);
                this.$input.scrollTop(o), this.oldDeltaY = t.deltaY;
            },
            stopScrollDrag: function() {
                this.$scroll.removeClass("dragging");
            },
            keyDown: function() {
                this.st = this.$input[0].selectionStart, this.ed = this.$input[0].selectionEnd;
            },
            resizeTextArea: function() {
                var t = this.$input.val(), e = this.$input.scrollTop();
                if (this.options.disableMultiline) {
                    var i = t.split("\n").join("");
                    if (i != t) return this.$input.val(i), _.defer(_.bind(function() {
                        this.$input[0].selectionStart = this.st, this.$input[0].selectionEnd = this.ed;
                    }, this)), this.resizeTextArea(), undefined;
                }
                var n = this.calcHeight();
                if (n > this.options.maxHeight) {
                    if (1 == t.length - this.prevText.length) this.$input.val(this.prevText); else {
                        for (var s = 0, o = t.length - 1; o > s; ) {
                            var r = Math.floor((s + o) / 2), i = t.substring(0, r + 1);
                            this.$input.val(i), n = this.calcHeight(), n > this.options.maxHeight ? o = r : s = r + 1;
                        }
                        this.$input.val(t.substring(0, o));
                    }
                    return _.defer(_.bind(function() {
                        this.$input[0].selectionStart = this.st, this.$input[0].selectionEnd = this.ed;
                    }, this)), this.resizeTextArea(), undefined;
                }
                n > this.options.maxVisibleHeight ? (this.$input.height(this.options.maxVisibleHeight), this.data.container_size = this.options.maxVisibleHeight, 
                this.data.content_size = n) : (this.$input.height(n), this.data.container_size = n, this.data.content_size = n), 
                this.$input.scrollTop(e), this.prevText = t, this.recalcScroll();
            },
            calcHeight: function() {
                return this.$input.height(0), this.$input.scrollTop("9999"), this.$input.height() + this.$input.scrollTop();
            }
        };
        var n = t(this), s = new i(e, n);
        return s.initialize(), n.data("autoresize", s), this;
    };
}(jQuery), function(t) {
    "use strict";
    var e = _.clone(t.History.prototype);
    _.extend(t.History.prototype, {
        navigate: function(t, i) {
            screenfull && screenfull.isFullscreen ? (this._savedFragment = t, i && i.trigger && this.loadUrl(t)) : e.navigate.apply(this, arguments);
        },
        start: function() {
            e.start.apply(this, arguments), screenfull && (screenfull.onchange = _.bind(function() {
                !screenfull.isFullscreen && this._savedFragment && (e.navigate.call(this, this._savedFragment), delete this._savedFragment);
            }, this));
        },
        getLastUrl: function() {
            return this._savedFragment || this.getFragment();
        }
    });
}(Backbone), window.RM = _.extend(window.RM || {}, {
    classes: {},
    widgets: {},
    views: {},
    models: {},
    collections: {},
    common: {}
}), window.RM.gaId = "UA-33458420-1", "undefined" == typeof RM && (RM = {}), function(t) {
    t.constants = {
        UPLOAD_IMAGE_SIZE_LIMIT: 6291456,
        MSG_UPLOAD_IMAGE_SIZE_ERROR: "File size should be less than 6 Mb.",
        MSG_UPLOAD_IMAGE_SUPPORTED_ERROR: "We support only JPG, GIF, PNG, and BMP picture formats.",
        MSG_UPLOAD_ONLY_SINGLE_FILE: "We support only 1 file upload via drop on workspace",
        THUMB_SIZE: 48,
        BG_EFFECT_THUMBSIZE: 40,
        UPLOAD_IMAGE_FORMATS: "jpeg|jpg|png|gif|bmp",
        FACEBOOK_APP_ID: "141232946007322"
    }, t.utils = {
        picSizes: [ 256, 304, 512, 1024 ],
        declination: function(t, e, i, n, s) {
            var o = [ t, e, i ], r = n % 100;
            return r = r >= 11 && 14 >= r ? 0 : 5 > (r %= 10) ? r > 2 ? 2 : r : 0, s || (r = 1 == n ? 1 : 0), o[r];
        },
        escapeSpecial: function(t, e) {
            return t = (t + "").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1"), t && e && (t = "'" + t + "'"), 
            t;
        },
        scanForURIs: function(t, e, i) {
            function n(t, n, s, o) {
                var l = t;
                (void 0 == n || "" == n) && (l = "http://" + l);
                var c = s;
                return void 0 != o && "" != o && (c += "." + o), a++, i || (c = l, c = c.replace(/^https?:\/\//, "")), 
                r[a] = "<a " + (e ? 'class = "' + e + '"' : "") + ' href="' + l + '" target="_blank" title="' + l + '">' + c + "</a>", 
                "INNER_TMP_BLOCK_" + a + "_INNER_TMP_BLOCK";
            }
            function s(t) {
                return a++, r[a] = "<a " + (e ? 'class = "' + e + '"' : "") + ' href="mailto:' + t + '">' + t + "</a>", 
                "INNER_TMP_BLOCK_" + a + "_INNER_TMP_BLOCK";
            }
            function o(t, e) {
                return r[e];
            }
            var r = [], a = 0;
            return t += " ", t = t.replace(/\b([a-z0-9_\.-]+)@([\da-z\.-]+)\.(biz|com|edu|gov|net|org|us|ru|ua|uk|su|se|co|no|jp|it|in|il|gb|fr|fi|es|de|cz|ch|ca|by|at|au)/gim, s), 
            t = t.replace(/\b(https?:\/\/)?([\da-z\.-]+)\.(biz|com|edu|gov|net|org|us|ru|ua|uk|su|se|co|no|jp|it|in|il|gb|fr|fi|es|de|cz|ch|ca|by|at|au)(\/[^\s\(\)\[\]\{\}]*)*/gim, n), 
            t = t.replace(/INNER_TMP_BLOCK_([\d]+)_INNER_TMP_BLOCK/gim, o);
        },
        screenshotSize: function(t) {
            return Modernizr.retina && (t *= 2), 256 >= t && (t = 256), t >= 512 && 768 > t && (t = 512), -1 == this.picSizes.indexOf(t) ? (console.error("screenshot size not found! size: " + t), 
            512) : t;
        },
        URLParts: function(t) {
            var e = /(.+:\/\/)?([^\/]+)(\/.*)*/i, i = e.exec(t);
            return i = i || [], {
                url: i[0] || "",
                protocol: i[1] || "",
                hostname: i[2] || "",
                path: i[3] || ""
            };
        },
        filterNonAscii: function(t) {
            if (t && t.val) {
                var e = t.val();
                return /[^\x00-\x7f]/.test(e) ? (e = e.replace(/[^\x00-\x7f]/g, ""), t.val(e), !0) : !1;
            }
        },
        applyTransform: function(t, e) {
            t.css({
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                "-o-transform": e,
                transform: e
            });
        }
    }, $.expr[":"].icontains = function(t, e, i) {
        var n = i[3] + "", s = t.textContent || t.innerText || jQuery(t).text() || "", o = RegExp("(" + n + ")", "i");
        return !!s.match(o);
    }, $.expr[":"].econtains = function(t, e, i) {
        var n = i[3] + "", s = t.textContent || t.innerText || jQuery(t).text() || "", o = RegExp("(^" + n + "$)", "");
        return !!s.match(o);
    }, String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }, String.prototype.postfix = function(t) {
        var e = this.split(".");
        return e.length > 1 ? (e[e.length - 2] += "_" + t, e.join(".")) : this + "_" + t;
    };
    var e = _.template;
    _.template = function() {
        var t = e.apply(this, arguments);
        return function() {
            return $.trim(t.apply(this, arguments));
        };
    }, _.bindAll = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return 0 === e.length && (e = _.functions(t)), _.each(e, function(e) {
            t[e] = _.bind(t[e], t);
        }), t;
    }, _.mixin({
        cloneWithObjects: function(t) {
            return t = _.clone(t), _.each(t, function(e, i) {
                _.isObject(e) && (t[i] = _.clone(t[i]));
            }), t;
        }
    }), jQuery.fn.selectText = function() {
        var t, e, i = document, n = this[0];
        i.body.createTextRange ? (t = document.body.createTextRange(), t.moveToElementText(n), t.select()) : window.getSelection && (e = window.getSelection(), 
        t = document.createRange(), t.selectNodeContents(n), e.removeAllRanges(), e.addRange(t)), this.focus(), 
        n.selectionStart = 0, n.selectionEnd = 1;
    };
}(RM), function(t) {
    t.Analytics = Backbone.Model.extend({
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t), this.bindAnalytics();
        },
        bindAnalytics: function() {
            if (!t.screenshot) {
                if (!window._gat) return setTimeout(this.bindAnalytics, 500);
                if (!this._gaTracker) return this._gaTracker = window._gat._getTracker(window.RM.gaId), this._gaTracker ? (this.router.on("route", this.trackPage), 
                void 0) : console.error("can't bind Google analytics tracker", window.RM.gaId);
            }
        },
        trackPage: function() {
            var e = "/" + Backbone.history.getFragment();
            t.Analytics.lastTrackedUrl != e && (this.trigger("trackpage", e), this._gaTracker._trackPageview(e), 
            t.Analytics.lastTrackedUrl = e);
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.Navigation = Backbone.View.extend({
        delays: {
            show: 1e3,
            hide: 500
        },
        events: {
            "click .menu-button": "toggleMagMenu"
        },
        initialize: function(t) {
            _.bindAll(this), this.mag = t, this.$el = this.mag.$el, this.template = _.template($("#template-navigation-default").html()), 
            this.pageArrows = new e({
                mag: t,
                navigation: this,
                el: this.$el
            });
        },
        render: function() {
            t.screenshot || (this.magMenu = this.mag.magMenu, this.$el.append(this.template()), this.pageArrows.render(), 
            this.$arrows = this.pageArrows.$prev.add(this.pageArrows.$next), this.shown = !0, $("div[data-alt]:not(.rmalttext)").RMAltText());
        },
        switchOn: function() {
            $("body").on("keyup", this.onKeyup), this.magMenu.on("toggle", this.onToggleMagMenu), this.pageArrows.switchOn(), 
            $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", this.onFullScrrenChange), 
            this.prevPage = null, this.mag.on("pageChanged", this.onPageChanged), this.mag.navigation.on("keypress-" + $.keycodes.esc, this.onEscape);
        },
        switchOff: function() {
            $("body").off("keyup", this.onKeyup), this.magMenu.off("toggle", this.onToggleMagMenu), this.pageArrows.switchOff(), 
            $(document).off("webkitfullscreenchange mozfullscreenchange fullscreenchange", this.onFullScrrenChange), 
            this.mag.off("pageChanged", this.onPageChanged), this.prevPage && this.prevPage.off("pageLoaded", this.onPageLoaded), 
            this.prevPage = null, this.mag.navigation.off("keypress-" + $.keycodes.esc, this.onEscape);
        },
        onPageChanged: function(t) {
            var e = this.mag.getPage(t);
            this.$(".edit-link").attr("href", "/edit/" + this.mag.num_id + "/" + this.mag.currentPage.num || "1/"), 
            this.$(".menu-button").removeClass("preloading"), this.prevPage && this.prevPage.off("pageLoaded", this.onPageLoaded), 
            e && !e.loaded && (this.$(".menu-button").addClass("preloading"), e.on("pageLoaded", this.onPageLoaded), 
            e.on("pageLoadFailed", this.onPageLoadFailed), this.prevPage = e);
        },
        onPageLoaded: function() {
            this.$(".menu-button").removeClass("preloading");
        },
        onPageLoadFailed: function() {
            this.$(".menu-button").removeClass("preloading");
        },
        onEscape: function() {
            return this.mag.magMenu.shown ? this.mag.magMenu.hide() : (this.mag.magMenu.goBack(), undefined);
        },
        show: function() {
            this.fadeIn(this.delays.show), preloadDesignImages("navigation"), this.shown = !0;
        },
        hide: function() {
            this.fadeOut(this.delays.hide), this.shown = !1;
        },
        fadeIn: function(t) {
            t ? this.$arrows.fadeIn(t) : this.$arrows.removeAttr("style"), this.pageArrows.showArrows = !0, this.pageArrows.onPageChanged(), 
            this.shown = !0;
        },
        fadeOut: function(t) {
            this.pageArrows.showArrows = !1, this.pageArrows.disableOpacityChange = !1, this.shown = !1, t ? this.$arrows.fadeOut(t, function() {
                $(this).hide();
            }) : this.$arrows.hide();
        },
        onKeyup: function(e) {
            if (!(t.router && t.router.shortcuts_disabled || t.magrouter && t.magrouter.shortcuts_disabled)) {
                e.keyCode == $.keycodes.left && this.pageArrows.gotoPrevPage(), e.keyCode == $.keycodes.right && this.pageArrows.gotoNextPage();
                var i = _.find($.keycodes, function(t, i) {
                    return $.keycodes[i] === e.keyCode;
                });
                i && this.trigger("keypress-" + e.keyCode, e);
            }
        },
        toggleMagMenu: function() {
            this.magMenu.toggle();
        },
        onToggleMagMenu: function() {
            this.$(".menu-button").toggleClass("active", this.magMenu.shown), this.magMenu.shown || this.mag.currentPage && this.mag.currentPage.focusPage();
        },
        destroy: function() {
            this.switchOff(), this.pageArrows.destroy(), this.prevPage && this.prevPage.off("pageLoaded", this.onPageLoaded), 
            this.prevPage = null;
        }
    });
    var e = Backbone.View.extend({
        events: {
            "click .mag-prev-page-navigation-arrow": "gotoPrevPage",
            "click .mag-next-page-navigation-arrow": "gotoNextPage"
        },
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t), this.$el = this.navigation.$el, this.template = _.template($("#template-arrow-navigation-default").text()), 
            this.mag.on("pageChanged", this.onPageChanged), this.onResize();
        },
        render: function() {
            this.$el.append(this.template({
                data: this
            })), this.$prev = this.$(".mag-prev-page-navigation-arrow"), this.$next = this.$(".mag-next-page-navigation-arrow");
        },
        switchOn: function() {
            $(window).on("resize", this.onResize);
        },
        switchOff: function() {
            $(window).off("resize", this.onResize);
        },
        onResize: function() {
            this.window_width = $(window).width();
        },
        onPageChanged: function() {
            this.$prev.toggleClass("hidden", this.mag.isFirstPage()), this.$next.toggleClass("hidden", this.mag.isLastPage());
        },
        gotoPrevPage: function(t) {
            t && t.stopPropagation(), this.mag.goPrevPage();
        },
        gotoNextPage: function(t) {
            t && t.stopPropagation(), this.mag.goNextPage();
        },
        bodyMouseMove: function(t) {
            var e, i, n;
            e = this.window_width * this.dist.end / 100, i = this.window_width * this.dist.start / 100, n = 1 - (t.pageX - e) / (i - e), 
            n = Math.max(Math.min(n, 1), 0), this.$prev.css({
                opacity: n,
                display: "block"
            }), e = this.window_width * (100 - this.dist.end) / 100, i = this.window_width * (100 - this.dist.start) / 100, 
            n = 1 - (t.pageX - e) / (i - e), n = Math.max(Math.min(n, 1), 0), this.$next.css({
                opacity: n,
                display: "block"
            });
        },
        destroy: function() {
            $("body").off("mousemove", this.bodyMouseMove), $(window).off("resize", this.onResize);
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.Slider = Backbone.View.extend({
        durations: {
            slide_time: 300
        },
        pagesNumsPos: [],
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t), this.template = _.template($("#template-slider").html()), $(window).on("resize", this.onResize);
        },
        render: function(t) {
            t ? (t.append(this.template({})), this.$el = t) : this.$el.html(this.template({})), this.curPage = this.mag.getPageNum(), 
            (1 >= this.mag.pages.length || Modernizr.touch) && (this.staticSlider = !0, this.$(".rmslider").addClass("static")), 
            this.staticSlider || this.$el.on("click", ".rmslider-lines-wrapper", this.lineClick);
            for (var e = "", i = 1; this.mag.pages.length >= i; i++) e += '<div class="rmslider-handle-page ' + (i > 99 ? "above99" : "") + '">' + i + "</div>";
            this.$(".rmslider-handle-pages").append(e), this.getAllNumberOffset(!1), this.waitForFontsLoad(), this.$handle = this.$(".rmslider-handle"), 
            this.$handle_phantom = this.$(".rmslider-handle-phantom"), this.handleWidth = this.$handle.width(), 
            this.staticSlider || this.$handle.RMDrag({
                start: this.startHandleDrag,
                move: this.moveHandleDrag,
                end: this.endHandleDrag,
                silent: !0,
                preventDefault: !0
            }), this.onResize(), (Modernizr.msie || Modernizr.firefox) && this.$(".rmslider").addClass("rmslider-ff-ie"), 
            this.mag.on("pageChanged", this.onPageChanged);
        },
        waitForFontsLoad: function() {
            if (!t.screenshot) {
                var e = this, i = "http://f.fontdeck.com/s/css/U4OPLG+LCl9ufBsdwZbYJ8tUe6c/readymag.com/20841.css";
                window.development && (i = "/css/dev_fonts.css"), window.WebFontConfig = {
                    custom: {
                        families: [ "Apercu Pro Regular", "Apercu Pro Bold" ],
                        urls: [ i ]
                    },
                    active: function() {
                        e.getAllNumberOffset(!1), e.positionDetails(e.currentSliderOffset), setTimeout(function() {
                            e.getAllNumberOffset(!0), e.positionDetails(e.currentSliderOffset);
                        }, 3e3);
                    }
                }, function() {
                    var t = document.createElement("script");
                    t.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1.4.8/webfont.js", 
                    t.type = "text/javascript", t.async = "true";
                    var e = document.getElementsByTagName("script")[0];
                    e.parentNode.insertBefore(t, e);
                }();
            }
        },
        getAllNumberOffset: function(t) {
            var e = $(".rmslider.clone");
            0 == e.length && (e = this.$(".rmslider").clone().appendTo("body").addClass("clone").css({
                position: "absolute",
                top: "-999px",
                left: "-999px"
            }));
            var i = this;
            e.find(".rmslider-handle-pages div").each(function(t) {
                i.pagesNumsPos[++t] = i.getNumberOffset(t, this);
            }), t && e.remove();
        },
        getNumberOffset: function(t, e) {
            var i;
            return i || (i = $(e).position().left + $(e).width() / 2 - 1, 10 > t && 3 != t && 5 != t && 7 != t && 8 != t && (i += 1), 
            Modernizr.msie || Modernizr.firefox || 8 != t || (i += 1), t > 20 && 1 == t % 10 && (i += 1), (48 == t || 49 == t || 60 == t || 62 == t || 95 == t || 97 == t || 99 == t) && (i += 1)), 
            i;
        },
        onResize: function() {
            this.sliderWidth = this.$(".rmslider").width(), 1 > this.sliderWidth && (this.sliderWidth = 1), this.positionDetails(this.getPageOffset(this.curPage));
        },
        positionDetails: function(t) {
            if (!isNaN(t)) {
                this.static || this.$handle.css("left", t + "px"), this.$handle_phantom.css("left", t + "px");
                var e = 1 + t * (this.mag.pages.length - 1) / this.sliderWidth, i = Math.floor(e), n = e - i, s = this.pagesNumsPos[i];
                if (n > .001 && (s += (this.pagesNumsPos[i + 1] - this.pagesNumsPos[i]) * n), this.$(".rmslider-handle-pages").css("left", -Math.floor(s) + "px"), 
                !this.static) {
                    var o = t - this.handleWidth / 2 - 2 + 22, r = Math.ceil(this.sliderWidth - t - this.handleWidth / 2 - 2 + 22);
                    0 > o && (o = 0), 0 > r && (r = 0), this.$(".rmslider-line-1").width(o), this.$(".rmslider-line-2").width(r);
                    var a = this.getPageOffset(this.curPage);
                    if (a >= t) var l = this.sliderWidth + 22 + "px", c = t + this.handleWidth / 2 - 2 + "px"; else var l = t - this.handleWidth / 2 + 2 + "px", c = "-22px";
                    this.$(".rmslider-curpage-wrapper").css("clip", "rect(0, " + l + ", auto, " + c + ")");
                }
                this.currentSliderOffset = t;
            }
        },
        positionLinesDop: function(t) {
            var e = Math.floor(-11 * t / 35) + "px";
            this.$(".rmslider-line-1").css("padding-left", e), this.$(".rmslider-line-2").css("padding-right", e);
        },
        lineClick: function(t) {
            var e = t.pageX - this.$(".rmslider-lines-wrapper").offset().left, i = this.getPageNumber(e);
            this.mag.showPage(i, !1);
        },
        getOffset: function(t) {
            return Math.min(Math.max(this.startHandleX + t.deltaX, 0), this.sliderWidth);
        },
        getPageOffset: function(t) {
            return (t - 1) * this.sliderWidth / (this.mag.pages.length - 1);
        },
        getPageNumber: function(t) {
            return Math.round(1 + t * (this.mag.pages.length - 1) / this.sliderWidth);
        },
        moveSliderToPage: function(t) {
            this.$handle_phantom.stop().animate({
                left: this.getPageOffset(t) + "px"
            }, {
                duration: this.durations.slide_time,
                step: this.positionDetails
            });
        },
        startHandleDrag: function() {
            this.$handle.stop().animate({
                top: "-35px"
            }, {
                duration: 200,
                step: this.positionLinesDop
            }), this.$(".rmslider-handle-arrow").stop().fadeIn(200), this.startHandleX = this.$handle.position().left, 
            this.$(".rmslider-curpage-wrapper2").css("left", this.getPageOffset(this.curPage) + "px"), this.$(".rmslider-curpage").text(this.curPage).stop().fadeIn(200).removeClass("above99"), 
            this.curPage > 99 && this.$(".rmslider-curpage").addClass("above99"), this.trigger("slider-dragstart"), 
            this.isDragging = !0;
        },
        moveHandleDrag: function(t) {
            var e = this.getOffset(t);
            this.positionDetails(e), this.trigger("slider-drag", {
                offset: (e / this.sliderWidth).toFixed(4),
                page: this.getPageNumber(e),
                event: t
            });
        },
        endHandleDrag: function(t) {
            this.$handle.stop().animate({
                top: "0"
            }, {
                duration: 200,
                step: this.positionLinesDop
            }), this.$(".rmslider-handle-arrow").stop().fadeOut(100);
            var e = this.getPageNumber(this.getOffset(t));
            e == this.curPage && t.moved && this.moveSliderToPage(e), this.$(".rmslider-curpage").stop().fadeOut(200), 
            this.trigger("slider-dragstop", e), this.isDragging = !1;
        },
        onPageChanged: function(t, e) {
            this.curPage = t, "preview-click" != e && "mouse-wheel" != e && this.moveSliderToPage(t);
        },
        destroy: function() {
            $(window).off("resize", this.onResize), this.mag.off("pageChanged", this.onPageChanged), this.$el.remove();
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.Comments = Backbone.View.extend({
        events: {
            "click .close": "hide"
        },
        initialize: function(t, e) {
            this.mag = t, this.template = _.template($("#template-comments").text()), this.$el = $(this.template(e)).hide().appendTo("body"), 
            this.mag.on("pageChanged", this.reload, this);
        },
        render: function() {
            this.show();
        },
        hide: function() {
            return this.shown = !1, this.$el.hide(), this.$el;
        },
        show: function() {
            return this.shown = !0, this.$el.show(), this.loaded ? this.reload() : this.load(), this.$el;
        },
        toggle: function() {
            return this.shown ? this.hide() : this.show(), this.$el;
        },
        getDisqusId: function() {
            return this.mag._id + "/" + this.mag.currentPage._id;
        },
        load: function() {
            window.disqus_shortname = "readymag", window.disqus_developer = 1, window.disqus_identifier = this.getDisqusId(), 
            function() {
                var t = document.createElement("script");
                t.type = "text/javascript", t.async = !0, t.src = "http://" + disqus_shortname + ".disqus.com/embed.js", 
                (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t);
            }(), this.loaded = !0;
        },
        reload: function() {
            if (this.loaded && window.DISQUS) {
                var t = this;
                window.DISQUS.reset({
                    reload: !0,
                    config: function() {
                        this.page.identifier = t.getDisqusId(), this.page.url = "http://rm.dev/" + t.mag.id + "/" + t.mag.currentPage.get("num");
                    }
                });
            }
        },
        destroy: function() {
            this.$el.remove();
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.Contents = Backbone.View.extend({
        durations: {
            slide_time: 300,
            toggleSections: 400
        },
        section: "slide",
        pagewidth: 512,
        halfpage: 256,
        events: {
            "click .contents-slide .preview": "onSlidePreviewClick",
            "click .contents-list .preview": "onListPreviewClick"
        },
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.template = _.template($("#template-contents").text()), this.slide_template = _.template($("#template-slide-preview").text()), 
            this.list_template = _.template($("#template-list-preview").text()), this.slider = new t.classes.Slider({
                mag: this.mag,
                magMenu: this.magMenu
            }), this.render(), this.slider.on("slider-drag", this.onDrag), this.slider.on("slider-dragstop", this.onDragEnd), 
            this.mag.on("pageChanged", this.onPageChanged);
        },
        render: function() {
            this.mag.router.isPreview && t.router.on("renewScreenshot", this.renewScreenshot), this.rendered || (this.rendered = !0, 
            this.$el.html(this.template({})), this.$slideView = this.$el.find(".contents-slide"), this.$slideView.html(this.slide_template({
                pages: this.mag.pages,
                mag: this.mag,
                width: this.pagewidth,
                img_width: t.utils.screenshotSize(512),
                contents: this
            })), this.slider.render(this.$slideView), this.$listView = this.$el.find(".contents-list"), this.$listView.html(this.list_template({
                pages: this.mag.pages,
                mag: this.mag,
                img_width: t.utils.screenshotSize(512),
                contents: this
            })), this.scroll = this.$listView.find(".scroll-wrapper").RMScroll({
                $container: this.$listView.find(".pages-wrapper"),
                $content: this.$listView.find(".pages"),
                $handle: this.$listView.find(".scroll"),
                wheelScrollSpeed: .3,
                gap_start: 25,
                gap_end: 25,
                systemScroll: !0
            }).data("scroll"), this.$container = this.$(".container"), this.$container_width = this.mag.pages.length * this.$("img.screen").eq(0).width(), 
            this.$container.width(this.$container_width), this.$(".screen").load(this.onScreenshotLoad), this.$slideView.bind("mousewheel", this.mouseWheel), 
            $(window).on("resize", this.onWindowResize), this.onWindowResize());
        },
        getPreviewPostfix: function(e) {
            return _.isString(e) && (e = t.router.mag.pages.get(e).toJSON()), t.router && t.router.screenshotDates ? "edit/" + t.router.screenshotDates[e.num - 1] : "edit/" + Date.now();
        },
        mouseWheel: function(t, e, i, n) {
            if (t.preventDefault(), (i || n) && (e = i || n), !this.centeringAnimation) {
                var s = -parseInt(this.$container.css("margin-left")) - 1.25 * e, o = Math.round((this.mag.pages.length - .5) * this.pagewidth);
                this.halfpage > s && (s = this.halfpage), s > o && (s = o), this.$container.css({
                    "margin-left": -s
                }), this.slider.positionDetails((s / this.pagewidth - .5) * this.slider.sliderWidth / (this.mag.pages.length - 1)), 
                clearTimeout(this.centerPageTimeout), this.centerPageTimeout = setTimeout(_.bind(function() {
                    this.centeringAnimation = !0;
                    var t = Math.ceil(s / this.pagewidth);
                    this.centerPage(t, !0, _.bind(function() {
                        this.mag.showPage(t, !1, !0, "mouse-wheel"), this.centeringAnimation = !1;
                    }, this)), this.slider.onPageChanged(t);
                }, this), 500);
            }
        },
        toggleSection: function(t) {
            this.section != t && (this.$(".contents-" + this.section).fadeOut(this.durations.toggleSections), this.section = t, 
            this.$(".contents-" + t).fadeIn(this.durations.toggleSections), this.scroll && this.scroll.recalc());
        },
        onWindowResize: function() {
            this.scroll && this.scroll.recalc();
        },
        onPageChanged: function(t, e) {
            this.updateActivePageOnListView(t), "preview-click" != e && "mouse-wheel" != e && "slider-drag" != e && "touch-swipe" != e && this.centerPage(null, !0);
        },
        renewScreenshot: function(e) {
            var i = this.$(".preview").filter(function() {
                return $(this).data("id") == e;
            });
            i.find(".screen").attr("src", "/screenshot/" + t.utils.screenshotSize(512) + "/" + this.mag.num_id + "/" + e + "/" + this.getPreviewPostfix(e));
        },
        onScreenshotLoad: function(t) {
            $(t.currentTarget).closest(".preview").find(".preloader").remove(), $(t.currentTarget).closest(".preview").addClass("loaded");
        },
        onDrag: function(t) {
            this.$container.css({
                "margin-left": -t.offset * (this.$container_width - this.pagewidth) - this.halfpage
            });
        },
        onDragEnd: function(t) {
            this.centerPage(t, !0, _.bind(function() {
                this.mag.showPage(t, !1, !1, "slider-drag");
            }, this));
        },
        onSlidePreviewClick: function(t) {
            var e = $(t.target).closest(".preview").data("num");
            e == this.mag.currentPage.num ? this.magMenu.toggle() : (this.centerPage(e, !0, _.bind(function() {
                this.mag.showPage(e, !1, !1, "preview-click");
            }, this)), this.slider.onPageChanged(e));
        },
        onListPreviewClick: function(t) {
            this.noAutoScroll = !0, this.onSlidePreviewClick(t);
        },
        scrollToPageOnListView: function(t) {
            if (this.noAutoScroll) return this.noAutoScroll = !1, undefined;
            this.noAutoScroll = !1;
            var e = this.$listView, i = (this.$listView.find(".scroll-wrapper"), this.$listView.find(".pages-wrapper")), n = this.$listView.find(".preview[data-num=" + t + "]"), s = e.is(":visible");
            if (1 == n.length) {
                e.addClass("force-display");
                var o = n.position().top + i.scrollTop(), r = n.height(), a = i.height(), l = Math.floor(o - (a - r) / 2);
                s ? i.stop().animate({
                    scrollTop: l
                }, 300) : i.stop().scrollTop(l), e.removeClass("force-display");
            }
        },
        updateActivePageOnListView: function(t) {
            this.$listView.find(".preview .num-wrapper .num").removeClass("active"), this.$listView.find(".preview[data-num=" + t + "] .num-wrapper .num").addClass("active"), 
            this.scrollToPageOnListView(t);
        },
        centerPage: function(t, e, i) {
            t = t || this.mag.currentPage.num, this.offset = (t - 1) * this.pagewidth + this.halfpage;
            var n = {
                "margin-left": -this.offset
            };
            e ? this.$container.stop(!0, !1).animate(n, this.durations.slide_time, function() {
                i && i();
            }) : this.$container.css(n);
        },
        destroy: function() {
            $(window).off("resize", this.onWindowResize), this.mag.off("pageChanged", this.onPageChanged), this.slider.destroy && this.slider.destroy(), 
            t.router && t.router.off(null, null, this), this.$el.remove();
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.Share = Backbone.View.extend({
        events: {
            "click .share-facebook": "toFacebook",
            "click .share-twitter": "toTwitter",
            "click .share-pinterest": "toPinterest",
            "click .share-mail": "toMail",
            "click .share-embed": "toEmbed",
            "click .share-report": "toReport",
            "click .stop-events": "stopEvents"
        },
        show_speed_1: 200,
        show_speed_2: 400,
        initialize: function(e, i, n) {
            _.bindAll(this), this.shown = !1, this.mag = e, this.$button = n, this.$parent = i, this.template = _.template($("#template-share").text()), 
            this.$el = $(this.template()).hide().appendTo(this.$parent), this.$panel = this.$el, this.mag.on("pageChanged", this.hide), 
            this.sharer = new t.classes.Sharer(this.mag);
        },
        render: function() {
            this.show();
        },
        hide: function() {
            this.shown && (this.shown = !1, this.$button.removeClass("active"), Modernizr.csstransforms3d ? (this.toggleShadows("block"), 
            setTimeout(_.bind(function() {
                this.$panel.addClass("share-collapsed"), setTimeout(_.bind(function() {
                    this.$panel.removeClass("share-show-buttons"), this.$panel.removeClass("share-opened"), setTimeout(_.bind(function() {
                        this.$panel.css("display", "none");
                    }, this), this.show_speed_1);
                }, this), this.show_speed_2);
            }, this), 50)) : (this.$panel.removeClass("share-opened"), setTimeout(_.bind(function() {
                this.$panel.css("display", "none");
            }, this), this.show_speed_1)), $(window).off("mousedown", this.onClick));
        },
        show: function() {
            console.log("share.js"), this.shown || (preloadDesignImages("share"), this.shown = !0, this.$button.addClass("active"), 
            Modernizr.csstransforms3d ? (this.$panel.addClass("share-collapsed"), this.toggleShadows("block")) : (this.toggleShadows("none"), 
            this.$panel.addClass("share-show-buttons")), this.$panel.css("display", "block"), setTimeout(_.bind(function() {
                this.$panel.addClass("share-opened"), Modernizr.csstransforms3d && setTimeout(_.bind(function() {
                    this.$panel.addClass("share-show-buttons"), this.$panel.removeClass("share-collapsed"), setTimeout(_.bind(function() {
                        this.toggleShadows("none");
                    }, this), this.show_speed_2);
                }, this), this.show_speed_1);
            }, this), 50), setTimeout(_.bind(function() {
                $(window).on("mousedown", this.onClick);
            }, this), 100), this.$(".page-number").text("Page " + this.mag.currentPage.num));
        },
        toggleShadows: function(t) {
            this.$panel.find(".share-top-shadow-backface").css("display", t), this.$panel.find(".share-top-shadow").css("display", t), 
            this.$panel.find(".share-bottom-shadow").css("display", t);
        },
        toggle: _.debounce(function() {
            this.shown ? this.hide() : this.show();
        }, 750, !0),
        onClick: function(t) {
            0 == this.$el.find(t.target).length && t.target != this.$parent.get(0) && this.hide();
        },
        stopEvents: function(t) {
            t.preventDefault(), t.stopPropagation();
        },
        destroy: function() {
            this.$el.remove();
        },
        toFacebook: function() {
            this.sharer.toFacebook();
        },
        toTwitter: function() {
            this.sharer.toTwitter();
        },
        toGPlus: function() {
            this.sharer.toGPlus();
        },
        toPinterest: function() {
            this.sharer.toPinterest();
        },
        toMail: function() {
            this.sharer.toMail();
        },
        toEmbed: function() {
            this.trigger("embed");
        },
        toReport: function() {
            this.sharer.toReport();
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.Sharer = function(t) {
        if (!t) throw "Cannot create Sharer with empty mag";
        this.mag = t;
    }, t.classes.Sharer.prototype.updateShareData = function() {
        this.mag.get ? (this.pageNum = 1, this.shareMagUser = this.mag.user.get("name"), this.shareMagTitle = this.mag.get("title"), 
        this.shareMagDescription = this.mag.get("description"), this.shareURL = window.location.protocol + "//" + window.location.hostname + "/" + this.mag.get("num_id") + "/", 
        this.pictureURL = window.location.protocol + "//" + window.location.hostname + this.mag.getPageScreenshot(512, "cover")) : (this.pageNum = this.mag.currentPage.num, 
        this.shareMagUser = this.mag.user.name, this.shareMagTitle = this.mag.title, this.shareMagDescription = this.mag.description, 
        this.shareURL = window.location.protocol + "//" + window.location.hostname + "/" + this.mag.num_id + "/", 
        this.mag.currentPage.num > 1 ? (this.sharePageURL = window.location.protocol + "//" + window.location.hostname + "/" + "p" + this.mag.currentPage.num_id + "/", 
        this.sharePageNumber = this.mag.currentPage.num, this.sharePageTitle = this.mag.currentPage.title) : this.sharePageURL = "", 
        this.pictureURL = window.location.protocol + "//" + window.location.hostname + "/screenshot/" + t.utils.screenshotSize(512) + "/" + this.mag.num_id + "/" + this.mag.currentPage._id + "/");
    }, t.classes.Sharer.prototype._openShareWindow = function(t) {
        window.open(t, "sharer", "width=626,height=436,toolbar=0,status=0");
    }, t.classes.Sharer.prototype._getFBShareTitle = function() {
        var t;
        return this.updateShareData(), t = this.sharePageURL ? this.shareMagTitle && this.sharePageTitle ? "'" + this.sharePageTitle + "'" + " from " + "'" + this.shareMagTitle + "'" + " by " + this.shareMagUser : (this.sharePageTitle ? "'" + this.sharePageTitle + "'" : "Page " + this.sharePageNumber) + " from " + (this.shareMagTitle ? "'" + this.shareMagTitle + "'" : "Mag") + " by " + this.shareMagUser : this.shareMagTitle ? "'" + this.shareMagTitle + "' by " + this.shareMagUser : this.shareMagUser + "'s Mag";
    }, t.classes.Sharer.prototype.getFBUrl = function() {
        var t = this._getFBShareTitle(), e = "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + encodeURIComponent(this.sharePageURL ? this.sharePageURL : this.shareURL) + (this.shareMagDescription ? "&p[summary]=" + encodeURIComponent(this.shareMagDescription) : "") + "&p[title]=" + encodeURIComponent(t) + "&p[images][0]=" + encodeURIComponent(this.pictureURL);
        return e;
    }, t.classes.Sharer.prototype.toFacebook = function() {
        this._openShareWindow(this.getFBUrl());
    }, t.classes.Sharer.prototype.getTwitterData = function() {
        var t, e = "", i = "", n = 140, s = {};
        return this.updateShareData(), this.sharePageURL ? (i = this.sharePageURL, t = n - this.sharePageURL.length, 
        this.shareMagTitle && this.sharePageTitle ? (e = "'" + this.sharePageTitle + "'" + " from " + "'" + this.shareMagTitle + "'" + " by " + this.shareMagUser, 
        e.length > t && (e = "'" + this.sharePageTitle + "'" + " from " + "'" + this.shareMagTitle.substring(0, 20) + "..." + "'" + " by " + this.shareMagUser, 
        e.length > t && (e = "'" + this.sharePageTitle + "'" + " by " + this.shareMagUser, e.length > t && (e = "'" + this.sharePageTitle.substring(0, this.sharePageTitle.length - (e.length - t - 3)) + "..." + "'" + " by " + this.shareMagUser)))) : this.shareMagTitle ? (e = "Page " + this.sharePageNumber + " from " + this.shareMagTitle + "'" + " by " + this.shareMagUser, 
        e.length > t && (e = "Page " + this.sharePageNumber + " from " + this.shareMagTitle.substring(0, this.shareMagTitle.length - (e.length - t - 3)) + "..." + "'" + " by " + this.shareMagUser)) : (e = "'" + this.sharePageTitle + "'" + " from " + "mag" + " by " + this.shareMagUser, 
        e.length > t && (e = "'" + this.sharePageTitle.substring(0, this.sharePageTitle.length - (e.length - t - 3)) + "..." + "'" + " from " + "mag" + " by " + this.shareMagUser))) : (i = this.shareURL, 
        t = n - this.shareURL.length, e = (this.shareMagTitle ? "'" + this.shareMagTitle + "'" : "Mag") + " by " + this.shareMagUser + ":", 
        e.length > t && (e = (this.shareMagTitle ? "'" + this.shareMagTitle.substring(0, this.shareMagTitle.length - (e.length - t - 3)) + "..." + "'" : "Mag") + " by " + this.shareMagUser + ":")), 
        s.url = i, s.text = e, s;
    }, t.classes.Sharer.prototype.toTwitter = function() {
        var t = this.getTwitterData(), e = t.text, i = t.url;
        this._openShareWindow("https://twitter.com/share?url=" + encodeURIComponent(i) + "&text=" + encodeURIComponent(e));
    }, t.classes.Sharer.prototype.toGPlus = function() {
        this.updateShareData(), this._openShareWindow("https://plus.google.com/share?url=" + encodeURIComponent(location.href.replace(/info(\/?)$/i, "")));
    }, t.classes.Sharer.prototype.toPinterest = function() {
        this.updateShareData(), this._openShareWindow("http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(location.href.replace(/info(\/?)$/i, "")) + "&media=" + encodeURIComponent(this.pictureURL) + "&description=" + encodeURIComponent(this._getFBShareTitle()));
    }, t.classes.Sharer.prototype.toMail = function() {
        this.updateShareData();
        var t = "Check out " + this._getFBShareTitle(), e = t + encodeURIComponent("\n\n") + (this.sharePageURL ? this.sharePageURL : this.shareURL) + encodeURIComponent("\n\n") + "Sent via Readymag.";
        window.location.href = "mailto:?subject=" + t + "&body=" + e;
    }, t.classes.Sharer.prototype.toReport = function() {
        this.updateShareData();
        var t = "mailto:support@readymag.com", e = "Report " + encodeURIComponent(this.sharePageURL ? this.sharePageURL : this.shareURL), i = encodeURIComponent("Please tell us why are you reporting this: ");
        window.location.href = t + "?subject=" + e + "&body=" + i;
    };
}(RM), function(t) {
    "use strict";
    t.classes.Page = Backbone.View.extend({
        min_page_width: 1024,
        min_page_height: 672,
        WAIT_FOR_LOAD: 15,
        initialize: function(e, i) {
            return _.bindAll(this), e || (e = {}), _.defaults(e, {
                title: "",
                width: this.min_page_width,
                height: this.min_page_height,
                bg: "white"
            }), this.$window = $(window), _.extend(this, _.omit(e, [ "wids" ])), this.mag = i, this.$container = i.$pages_container, 
            this.window_size = {
                width: this.$window.width(),
                height: this.$window.height()
            }, this.template = _.template($("#template-page").text()), this.$el = $(this.template(this)).appendTo(this.$container), 
            this.$content = this.$(".page-content-container"), this.$fixedBgContainer = this.$(".page-fixed-bg-container"), 
            this.$contentBounds = this.$(".content-bounds"), this.widgets = this.createWidgets(_.filter(e.wids, function(e) {
                return !!t.widgets[e.type] && !e.hidden;
            })), this.hidden = !0, this.loaded = !1, t.screenshot == this._id && (this.$el.css({
                "overflow-y": "hidden"
            }), this._onFontsLoad = [], this._fontsToload = [], this._fontloaderCalled = 0, this._textWidgetsCount = _.countBy(this.widgets, "type").text, 
            this.on("pageLoaded", function() {
                alert("rm:ready");
            })), this;
        },
        createWidgets: function(e) {
            var i = this, e = _.map(e, function(e) {
                return new t.widgets[e.type](e, i);
            });
            return _.filter(e, function(t) {
                return t.isValid();
            });
        },
        render: function() {
            _.each(this.widgets, function(t) {
                !t.rendered && t.render(this);
            }, this), _.any(this.widgets, function(e) {
                return e instanceof t.widgets.twitter;
            }) && t.widgets.twitter.init();
        },
        load: function() {
            this.rendered || (this.signalOnLoading(), this.render(), this.rendered = !0);
        },
        unload: function() {
            this.rendered && (_.each(this.widgets, function(t) {
                t.off("load"), t.unload && t.unload(this), t.rendered = !1;
            }, this), this.rendered = !1, this.hidden = !0, this.loaded = !1);
        },
        show: function() {
            this.load(), this.onResize(), this.$el.show(), this.hidden = !1;
        },
        hide: function() {
            this.rendered && (this.$el.hide(), this.hidden = !0, this.stop());
        },
        focusPage: function() {
            this.$content.focus();
        },
        start: function() {
            this.active = !0, _.each(this.widgets, function(t) {
                t.start && t.start();
            }), this.$(".video").resize();
        },
        stop: function() {
            _.each(this.widgets, function(t) {
                t.stop && t.stop();
            }), this.active = !1;
        },
        onResize: function() {
            var t = {
                width: this.$window.width(),
                height: this.$window.height()
            }, e = Math.min(this.width, t.width), i = this.height, n = (t.height - i) / 2, s = (t.width - e) / 2;
            0 > n && (n = 0), i > t.height && (t.height = i + n), this.$content.css({
                width: e,
                height: i,
                top: n,
                left: s
            }), this.scrollable = i > $(window).height(), this.$contentBounds.css({
                width: t.width,
                height: Math.max(t.height, this.height)
            }), this.$el.css({
                left: t.width * (this.num - 1),
                width: t.width
            }), this.trigger("resize", t);
        },
        signalOnLoading: function() {
            function t() {
                0 == --i && e(200);
            }
            function e(t) {
                clearTimeout(s), setTimeout(function() {
                    n.loaded = !0, n.trigger("pageLoaded");
                }, t);
            }
            var i = 0, n = this, s = setTimeout(function() {
                n.trigger("pageLoadFailed");
            }, 1e3 * this.WAIT_FOR_LOAD);
            _.each(this.widgets, function(e) {
                e.tellOnLoad && (i++, e.on("load", t));
            }, this), 0 == i && e(400);
        },
        addFontsToLoad: function(t, e) {
            if (this._fontsToload = _.uniq(_.union(this._fontsToload, t)), this._onFontsLoad.push(e), this._fontloaderCalled += 1, 
            this._fontloaderCalled == this._textWidgetsCount) {
                if (_.isEmpty(this._fontsToload)) return this.onAllFontsLoad(), undefined;
                window.WebFontConfig = {
                    google: {
                        families: this._fontsToload
                    },
                    inactive: this.onAllFontsLoad,
                    active: _.delay(this.onAllFontsLoad, 500)
                }, function() {
                    var t = document.createElement("script");
                    t.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1.4.8/webfont.js", 
                    t.type = "text/javascript", t.async = "true";
                    var e = document.getElementsByTagName("script")[0];
                    e.parentNode.insertBefore(t, e);
                }();
            }
        },
        onAllFontsLoad: function() {
            _.each(this._onFontsLoad, function(t) {
                t && t();
            });
        },
        toggleLike: function(t) {
            this.isLiked ? $.post("/api/page/" + this._id + "/dislike", function() {
                t(!1);
            }) : $.post("/api/page/" + this._id + "/like", function() {
                t(!0);
            }), this.isLiked = !this.isLiked;
        },
        destroy: function() {
            _.each(this.widgets, function(t) {
                t.off("load"), t.destroy && t.destroy();
            });
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.Widget = Backbone.View.extend({
        initialize: function(t, e) {
            this.widgetInit(t, e);
        },
        widgetInit: function(t, e) {
            _.bindAll(this), _.extend(this, t, t.params), this.page = e, this.bindEvents();
        },
        isValid: function() {
            return !0;
        },
        bindEvents: function() {
            this.page && (this.page.on("resize", this.onResize, this), this.page.on("zoom", this.onZoom, this));
        },
        makeBox: function() {
            if (!this.page.$content) return null;
            var t = this.template(this.calculateDimensions());
            return this.$el = $(t).appendTo(this.page.$content), this.$el;
        },
        calculateDimensions: function() {
            return {
                left: this.x * (this.page.zoom || 1),
                top: this.y * (this.page.zoom || 1),
                width: this.w,
                height: this.h,
                z: this.z || 1
            };
        },
        onZoom: function() {
            if (this.rendered) {
                var t = this.page.zoom;
                this.$el.css({
                    left: this.x * t + "px",
                    top: this.y * t + "px"
                });
            }
        },
        unload: function() {
            this.stop(), this.$el.remove(), this.unloaded = !0;
        },
        onResize: function() {},
        start: function() {},
        stop: function() {}
    }), $(function() {
        t.classes.Widget.prototype.template = _.template($("#template-widget").text());
    });
}(RM), function(t) {
    "use strict";
    t.classes.MagMenu = Backbone.View.extend({
        FADE_TIMEOUT: 200,
        events: {
            "click .share-block .icon": "toggleShare",
            "click .comments-block .icon": "toggleComments",
            "click .likes-block .icon": "toggleLike",
            "click .back": "goBack",
            "click .switcher .section": "toggleContentsSection",
            "click .switcher .fullscreen": "toggleFullscreen",
            "click .top .header .title": "openMagInfo"
        },
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.template = _.template($("#template-mag-menu").text()), this.$el.html(this.template({
                mag: this.mag
            })), this.$("div[data-alt]:not(.rmalttext)").RMAltText(), this.contents = new t.classes.Contents({
                $el: this.$(".contents"),
                mag: this.mag,
                magMenu: this
            }), this.info = new t.classes.MagInfo({
                tp: "viewer-menu",
                mag: this.mag,
                magMenu: this
            }), this.embed = new t.views.Embed({
                mag: this.mag,
                $parent: this.$(".middle")
            }), this.$(".block-layer").on("click", this.onBlockClick), this.embed.on("show", _.bind(function() {
                this.$el.addClass("embed-shown");
            }, this)), this.embed.on("hide", _.bind(function() {
                this.$el.removeClass("embed-shown");
            }, this)), this.$(".switcher .fullscreen").toggleClass("hidden", !screenfull), (3 > this.mag.pages.length || Modernizr.touch) && this.$(".switcher .section").addClass("hidden"), 
            this.onFullScreenChange(), this.router = t.router || this.mag.router, this.info.on("hide", this.simpleShow), 
            this.info.on("show", this.simpleHide), this.mag.on("pageChanged", this.drawLikes), this.drawLikes(), 
            this.toggleLike = _.wrap(this.toggleLike, this.mag.isUser);
        },
        onBlockClick: function() {
            this.embed && this.embed.shown && this.embed.hide();
        },
        render: function() {},
        switchOff: function() {
            this.mag.off("pageChanged", this.onPageChanged), $(document).off("webkitfullscreenchange mozfullscreenchange fullscreenchange", this.onFullScreenChange), 
            this.mag.navigation.off("keypress-" + $.keycodes.m, this.toggle);
        },
        switchOn: function() {
            this.mag.on("pageChanged", this.onPageChanged), $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", this.onFullScreenChange), 
            this.mag.navigation.on("keypress-" + $.keycodes.m, this.toggle);
        },
        onMouseWheel: function(t) {
            t && t.stopPropagation(), t && t.preventDefault();
        },
        disableMouseWheel: function() {
            $(document).bind("mousewheel", this.onMouseWheel);
        },
        enableMouseWheel: function() {
            $(document).unbind("mousewheel", this.onMouseWheel);
        },
        openMagInfo: function() {
            this.info && this.info.show();
        },
        simpleHide: function() {
            this.$el.delay(400).fadeOut(200);
        },
        simpleShow: function() {
            preloadDesignImages("magmenu"), this.$el.fadeIn(0);
        },
        hide: function() {
            return this.shown ? (this.info && this.info.shown && this.info.hide(), this.embed && this.embed.shown && this.embed.hide(), 
            this.shown = !1, this.$el.addClass("closed"), this.hideTimeout = setTimeout(_.bind(function() {
                this.$el.css("display", "none"), this.mag.active && !this.mag.currentPage.active && this.mag.currentPage.start();
            }, this), 500), this.mag.navigation.show(), this.trigger("toggle"), this.$el) : undefined;
        },
        show: function() {
            return this.shown ? undefined : (preloadDesignImages("magmenu"), this.mag.navigation.onToggleMagMenu(), 
            this.shown = !0, clearTimeout(this.hideTimeout), this.$el.addClass("closed").css("display", "block"), 
            setTimeout(_.bind(function() {
                this.$el.removeClass("closed"), this.mag.currentPage.active && this.mag.currentPage.stop();
            }, this), 50), this.mag.navigation.hide(), this.trigger("toggle"), this.$el);
        },
        drawLikes: function() {
            this.mag && this.mag.currentPage && (this.$(".likes-block").find(".counter").text(this.mag.currentPage.likes_count || ""), 
            this.$(".likes-block").find(".icon").toggleClass("active", !!this.mag.currentPage.isLiked));
        },
        toggle: function() {
            return this.shown ? this.hide() : this.show(), this.$el;
        },
        toggleShare: _.debounce(function(e) {
            this.share || (this.share = new t.classes.Share(this.mag, $(e.currentTarget), this.$(".share-block")), 
            this.share.on("embed", _.bind(function() {
                this.embed && this.embed.toggle();
            }, this))), this.share.toggle();
        }, 750, !0),
        toggleComments: function() {
            alert("not implemented!");
        },
        toggleLike: function(t) {
            var e = parseInt(this.$(".likes-block .counter").text()) || 0;
            this.mag.currentPage.toggleLike(_.bind(function(i) {
                var n = i ? e + 1 : e - 1;
                0 >= n && (n = ""), this.$(".likes-block .counter").text(n), $(t.target).toggleClass("active", !!i);
            }, this));
        },
        toggleContentsSection: function(t) {
            this.contents.toggleSection($(t.target).data("section")), this.$(".switcher .section").removeClass("active"), 
            $(t.target).addClass("active"), this.$(".page-info .page-num").toggleClass("invisible", !this.$(".switcher .list").hasClass("active"));
        },
        toggleFullscreen: function() {
            screenfull && screenfull.toggle();
        },
        onFullScreenChange: function() {
            setTimeout(_.bind(function() {
                this.$(".switcher .fullscreen").toggleClass("active", screenfull && screenfull.isFullscreen);
            }, this), 500);
        },
        onPageChanged: function(t) {
            this.$(".page-num").text("Page " + t), this.$(".page-name").text(this.mag.currentPage.title);
        },
        goBack: function() {
            screenfull && screenfull.isFullscreen && screenfull.exit(), t.collector_router && t.collector_router.me ? setTimeout(_.bind(function() {
                this.toggle(), this.mag.router.exit();
            }, this), this.shown ? 200 : 0) : this.mag.router.exit();
        },
        destroy: function() {
            this.embed && this.embed.off("show hide"), this.embed.destroy && this.embed.destroy(), this.$el.remove(), 
            this.contents.destroy && this.contents.destroy(), this.info.destroy && this.info.destroy(), this.switchOff();
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.Mag = Backbone.View.extend({
        PRELOAD_COUNT: 5,
        PRELOADPAGES_DEBOUNCE: 1e4,
        saveScrolls: [],
        initialize: function(e, i) {
            _.bindAll(this), e || (e = {}), _.defaults(e, {
                pages: {}
            }), _.extend(this, e), this.router = i, this.$window = $(window), this.title = this.title || "Mag", 
            this.authorized = !!window.ServerData.me.user;
            var n = {
                mag: this,
                width: e.pages.length * this.$window.width(),
                showMenu: !t.screenshot,
                showEdit: !window.isMobile && window.ServerData.me.user && this.user._id == window.ServerData.me.user._id
            };
            return this.$el = $(this.template(n)).appendTo(this.router.$mags_container), this.$pages_container = this.$(".mag-pages-container .container"), 
            this.pages = this.createPages(e.pages), t.screenshot || (this.navigation = new t.classes.Navigation(this), 
            this.magMenu = new t.classes.MagMenu({
                $el: this.$(".mag-menu"),
                mag: this
            }), this.navigation.render()), this.loadPages.__debounced = _.debounce(this.loadPages, this.PRELOADPAGES_DEBOUNCE), 
            this.unloadPages.__debounced = _.debounce(this.unloadPages, this.PRELOADPAGES_DEBOUNCE), this;
        },
        show: function() {
            this.active || (_(this.router.mags).chain().without(this.mag).each(function(t) {
                t.hide();
            }), this.active = !0, this.$el.show(), this.bindEvents(), this.navigation && this.navigation.switchOn(), 
            this.magMenu && this.magMenu.switchOn());
        },
        hide: function() {
            this.active && (this.active = !1, this.magMenu && this.magMenu.switchOff(), this.navigation && this.navigation.switchOff(), 
            this.$el.hide(), this.unbindEvents(), this.currentPage.stop());
        },
        createPages: function(e) {
            var i = this;
            return _(e).chain().sortBy(function(t) {
                return t.num;
            }).map(function(e) {
                return new t.classes.Page(e, i);
            }).value();
        },
        showPage: function(t, e, i, n) {
            clearTimeout(this.transitionTimeout), this.active || this.show();
            var s = !this.currentPage;
            if (!s && t == this.currentPage.num) return !1;
            var o = this.getPage(t);
            if (!o) return this.router.onError(), !1;
            s || (this.prevPage = this.currentPage, this.saveScrolls[this.prevPage.num] = this.prevPage.$el.find(".content-scroll-wrapper").scrollTop()), 
            this.currentPage = o, this.$pages_container.scrollTop(0), this.currentPage.$el.find(".content-scroll-wrapper").scrollTop(this.saveScrolls[this.currentPage.num]), 
            this.currentPage.show();
            var r = -(o.num - 1) * this.$window.width();
            this.shift = r;
            var a = this.magMenu && this.magMenu.shown;
            this.moveContainer(r, e && !a, _.bind(function() {
                o.focusPage(), !a && this.currentPage.start();
            }, this)), this.prevPage && this.prevPage.stop && this.prevPage.active && this.prevPage.stop(), this.trigger("pageChanged", o.num, n), 
            this.router.setUrlString({
                replace: !s
            }), i || this.loadPages.__debounced(), this.unloadPages.__debounced();
        },
        moveContainer: function(e, i, n) {
            clearTimeout(this.moveTimeout), i ? (t.utils.applyTransform(this.$pages_container, "translateX(" + e + "px)"), 
            n && (this.moveTimeout = setTimeout(n, 300))) : (t.utils.applyTransform(this.$pages_container.addClass("no-transitions"), "translateX(" + e + "px)"), 
            setTimeout(_.bind(function() {
                this.$pages_container.removeClass("no-transitions");
            }, this), 50), n && n());
        },
        isUser: function(t) {
            return this.authorized ? (t(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), undefined) : (this.showNeedLogin(arguments[1]), 
            undefined);
        },
        showNeedLogin: function(e) {
            var i;
            e instanceof jQuery.Event && (i = $(e.currentTarget), this.unauthPopup || (this.unauthPopup = new t.classes.UnauthPopup()), 
            this.unauthPopup.setElement(i), this.unauthPopup.show());
        },
        showCurrentPage: function() {
            this.currentPage && this.showPage(this.currentPage.num);
        },
        loadPages: function(e) {
            if (!t.screenshot && this.active) {
                var i = this.PRELOAD_COUNT;
                e = e || (this.currentPage ? this.currentPage.num : 1), _.each(this.pages, function(t) {
                    i >= Math.abs(e - t.num) && t.hidden && t.show();
                });
            }
        },
        unloadPages: function() {
            if (!t.screenshot && this.active) {
                var e = this.PRELOAD_COUNT, i = this.currentPage ? this.currentPage.num : 1;
                _.each(this.pages, function(t) {
                    e >= Math.abs(i - t.num) || t.hidden || (t.hide(), t.unload());
                });
            }
        },
        hideAllPages: function() {
            _.each(this.pages, function(t) {
                t.hide();
            });
        },
        hideOtherPages: function() {
            if (this.currentPage) {
                var t = this.currentPage._id;
                _.each(this.pages, function(e) {
                    e._id != t && e.hide();
                }), this.loadPages.__debounced();
            }
        },
        goNextPage: function() {
            this.isLastPage() || this.currentPage && this.router.go(this.currentPage.num + 1, {
                animation: !0
            });
        },
        goPrevPage: function() {
            this.isFirstPage() || this.currentPage && this.router.go(this.currentPage.num - 1, {
                animation: !0
            });
        },
        bindEvents: function() {
            this.$window.on("resize", this.onResize), this.$window.on("scroll", this.onScroll);
        },
        unbindEvents: function() {
            this.$window.off("resize", this.onResize), this.$window.off("scroll", this.onScroll), screenfull && (screenfull.onchange = function() {});
        },
        onScroll: function() {
            this.loadPages.__debounced(), this.unloadPages.__debounced();
        },
        onResize: function(t) {
            this.currentPage && (this.hideOtherPages(), this.currentPage.onResize(t));
            var e = {
                width: this.$window.width(),
                height: this.$window.height()
            };
            this.$pages_container.css({
                width: e.width * this.pages.length
            }), this.moveContainer(-e.width * (this.currentPage.num - 1), !1);
        },
        getPage: function(t) {
            return this.pages[t - 1];
        },
        isFirstPage: function() {
            return this.currentPage && !this.getPage(this.currentPage.num - 1);
        },
        isLastPage: function() {
            return this.currentPage && !this.getPage(this.currentPage.num + 1);
        },
        getPageNum: function(t) {
            var e = _.find(this.pages, function(e) {
                return e._id == t;
            });
            return e && e.num;
        },
        getPageUri: function(t) {
            var e = _.find(this.pages, function(e) {
                return e._id == t;
            });
            return e ? this.router.getMagUri(this) + (1 == e.num ? "" : e.num + "/") : null;
        },
        destroy: function() {
            this.hide(), this.saveScrolls = [], _.each(this.pages, function(t) {
                t.destroy();
            }), this.navigation && this.navigation.destroy(), this.magMenu && this.magMenu.destroy(), this.$el.remove();
        }
    }), $(function() {
        t.classes.Mag.prototype.template = _.template($("#template-front-mag").text());
    });
}(RM), function(t) {
    "use strict";
    t.classes.MagRouter = Backbone.Router.extend({
        routes: {
            "_singlepage/ready/:mag/:page/*hash": "screenshotPublished",
            "_singlepage/:mag/:page/*hash": "screenshot",
            ":user(/)(:mag)(/)(:pagenum)(/)": "start"
        },
        mags: {},
        initialize: function() {
            this.route(/^(\d+)\/*(\d*)\/*$/, "start"), _.bindAll(this), this.started = !1, this.me = t.models.usersLoader.me, 
            this.$window = $(window), this.$mags_container = $("#mags"), this.on("route", this.onRoute), window.ServerData && _.each(window.ServerData.mags, _.bind(function(e, i) {
                e && "null" != e && (e = JSON.parse(decodeURIComponent(e)), this.mags[i] = new t.classes.Mag(e, this));
            }, this)), t.screenshot || (this.analytics = new t.Analytics({
                router: this
            }));
        },
        start: function(e, i, n) {
            if (parseInt(e, 10) == e || /^p\d+\/?$/i.test(e)) {
                var s = i;
                i = e, n = s, e = null;
            } else if (!i) return !1;
            n = n || 1;
            var o = e + "_" + i;
            if (this.username = e, this.started != o || this.loaded == o) {
                if (this.started = o, this.loaded == this.started) {
                    var r = this.mag.currentPage && 1 == Math.abs(n - this.mag.currentPage.num);
                    return this.go(n, {
                        animation: r
                    }), undefined;
                }
                if (this.mags[this.started]) return this.mag = this.mags[this.started], this.onLoadMag(n), undefined;
                this._loadingMagDataXHR && this._loadingMagDataXHR.abort(), this._loadingMagDataXHR = this.fetchData(this.username, i, {
                    success: _.bind(function(e) {
                        this.mag = new t.classes.Mag(e, this), this.mags[this.started] = this.mag, this.onLoadMag(n);
                    }, this),
                    error: this.notFound
                });
            }
        },
        onLoadMag: function(e) {
            var i;
            this.mag._requested_page ? (i = this.mag._requested_page, delete this.mag._requested_page) : i = e, 
            Modernizr.addTest("screenshot-mode", function() {
                return t.screenshot;
            }), this.loaded = this.started || !0, this.mag.loadPages(i), this.mag.show(), this.setTitle(), this.go(i), 
            this.showInfo ? (this.showInfo = !1, this.mag.magMenu.returnFragment = Backbone.history.getFragment(), 
            this.navigate(Backbone.history.getFragment() + "info/", {
                trigger: !1
            }), this.mag.magMenu.show(), this.mag.magMenu.info.show(), this.mag.magMenu.on("hide", _.once(this.countView))) : this.countView();
        },
        countView: function() {
            if (!t.screenshot && !_.isEmpty(this.mag)) {
                var e = this;
                _.delay(function() {
                    var i = e.mag && e.mag.num_id;
                    $.post("/api/countview/", {
                        num_id: i
                    }, function() {
                        t.collector_router.me && t.collector_router.me.markRead(e.mag._id);
                    });
                });
            }
        },
        notFound: function() {
            t.collector_router.notFound();
        },
        onRoute: function() {
            "mag" != t.common.mode && (t.common.mode = "mag", t.collector_router && t.collector_router.switchOff(), 
            this.mag && this.mag.show(), this.$mags_container.show());
        },
        switchOff: function() {
            this.mag && this.mag.hide(), this.mag && this.mag.destroy(), delete this.mag, this.mags = {}, this.loaded = !1, 
            this.started = !1;
        },
        fetchData: function(t, e, i) {
            var i = i || {};
            return i.url = t ? "/api/readymag/" + t + "/" + e : "/api/readymag/" + e, $.ajax(i);
        },
        screenshot: function(t, e) {
            $.get("/api/magFullById/" + t, this._screenshot(e));
        },
        screenshotPublished: function(t, e) {
            $.get("/api/readymag/" + t, this._screenshot(e));
        },
        _screenshot: function(e) {
            return _.bind(function(i) {
                return i ? (t.screenshot = e, this.mag = new t.classes.Mag(i, this), this.onLoadMag(this.mag.getPageNum(e)), 
                undefined) : this.notFound();
            }, this);
        },
        setTitle: function() {
            document.title = this.mag.title;
        },
        go: function(t, e) {
            e || (e = {}), t = t ? parseInt(t, 10) : 1, this.mag.showPage(t, e.animation);
        },
        setUrlString: function(e) {
            if (e = e || {}, !t.screenshot) {
                if (this.username) var i = this.mag.uri || this.mag.num_id, n = this.username + "/" + i + "/"; else var n = this.mag.num_id + "/";
                this.isPreview && (n += "preview/"), this.mag.currentPage && "1" != this.mag.currentPage.num && (n += "" + this.mag.currentPage.num + "/");
                var s = parseInt(_.last(Backbone.history.getFragment(), "/")) || 1, o = s == this.mag.currentPage.num || e.replace;
                this.navigate(n, {
                    replace: o
                });
            }
        },
        getMagUri: function(t) {
            return t.user.uri + "/" + (t.uri || t.num_id) + "/";
        },
        exit: function() {
            var e = t.collector_router.restoreLastState();
            e || (t.collector_router.me ? t.collector_router.navigate(_.clone(this.mag.user.uri), {
                trigger: !0
            }) : window.location.href = "/login"), delete this.mag;
        },
        onError: function() {
            console.error("Navigation error! page not found: " + Backbone.history.getFragment()), this.go(1);
        },
        destroy: function() {
            _.each(this.mags, function(t) {
                t.destroy();
            });
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.MagInfo = Backbone.View.extend({
        events: {
            "click .mag-info-bg": "hideByBGClick",
            "click .back": "goBack",
            "click .top .close": "hide",
            "click .left-block .user-block": "checkAuth",
            "click .link, .maglink": "hide",
            "click .section-content .desc-content .desc-more": "moreDesc",
            "click .section-content .desc-content .desc-less": "lessDesc",
            "click .section-captions .desc-caption": "showDesc",
            "click .section-captions .likes-caption": "showLikes",
            "click .section-captions .updates-caption": "showUpdates",
            "click .center-block .social-block .contents-button": "showContents",
            "click .right-block .pages-count": "showContents",
            "click .contents-hide": "hideContents",
            "click .block-layer": "onBlockClick",
            "click .center-block .social-block .like": "toggleLike",
            "click .center-block .social-block .facebook": "socialFacebook",
            "click .center-block .social-block .twitter": "socialTwitter",
            "click .center-block .social-block .pinterest": "socialPinterest",
            "click .center-block .social-block .mail": "socialMail",
            "click .center-block .social-block .embed": "socialEmbed",
            "click .center-block .social-block .report": "socialReport",
            "click .center-block .social-block .stop-events": "stopEvents",
            "click .left-block .follow-button": "toggleFollow",
            "click .right-block .more-tags": "toggleTags",
            "click .center-block .cover": "hideMagMenu"
        },
        MIN_DESC_HEIGHT: 48,
        ANIMATION_SPEED: {
            panel: 400,
            section_switch: 350,
            desc_more_less_switch: 200,
            likes_add: 300,
            contents: 300,
            tags_switch: 200
        },
        MAX_TAGS_LINES_HEIGHT: 36,
        CONTENTS_PAGE_SCREEN_HEIGHT: 84,
        section: "description",
        initialize: function(e) {
            _.bindAll(this), e && e.mag && this.parseMagModel(e.mag), e.me = e.me || t.models.usersLoader.me || t.router && t.router.me, 
            _.extend(this, e), this.isEditVersion = _.has(t, "router"), this.template = _.template($("#template-common-mag-info").text()), 
            this.template_page = _.template($("#template-common-mag-info-page").text()), this.mag || (this.mag = {
                isUser: t.classes.Mag.prototype.isUser,
                showNeedLogin: t.classes.Mag.prototype.showNeedLogin,
                authorized: !!this.me
            }, this.mag.isUser = _.bind(this.mag.isUser, this.mag)), this.toggleLike = _.wrap(this.toggleLike, this.mag.isUser), 
            this.toggleFollow = _.wrap(this.toggleFollow, this.mag.isUser), this.alwaysShow = !1;
        },
        parseMagModel: function(e) {
            var i;
            e instanceof t.models.UserMag || (i = new t.models.UserMag(), i.set(i.parse(e.options))), this.magModel = i || e;
        },
        render: function() {
            return this.magModel ? (this.sharer = new t.classes.Sharer(this.magModel), this.setElement($(this.template({
                mag: this.magModel,
                user: this.magModel.user,
                type: this.tp,
                isEditVersion: this.isEditVersion,
                isMe: this.me && this.me.id == this.magModel.user.id,
                canClose: !this.alwaysShow
            })).appendTo("body").addClass(this.tp).get(0)), this.transformDescription(), this.likersList = new t.classes.LikersList({
                me: this.me,
                $el: this.$(".section-content .likes-content"),
                mag: this.mag
            }), this.embed = new t.views.Embed({
                mag: this.magModel,
                $parent: this.$(".panel")
            }), this.embed.on("show", _.bind(function() {
                this.$(".block-layer").stop(!1, !0).fadeIn(200);
            }, this)), this.embed.on("hide", _.bind(function() {
                this.$(".block-layer").stop(!1, !0).fadeOut(200);
            }, this)), this.$el.bind("scroll", _.debounce(this.loadContentsImages, 500)), this.$("div[data-alt]:not(.rmalttext)").RMAltText(), 
            this.$(".section-content .updates-content .update-time").timeago(), this.rendered = !0, undefined) : console.error("missing magModel for magInfo view!");
        },
        transformDescription: function() {
            var e = this.$(".section-content .desc-content").text();
            e = e.replace(/\n/g, "<br />"), e = t.utils.scanForURIs(e, "desc-link", !1), this.$(".section-content .desc-content").html(e);
        },
        setDescLikesUpdates: function() {
            var e = $.trim(this.magModel.get("description")), i = this.magModel.get("likes_count"), n = this.magModel.get("changelog") || [];
            return e || i || n.length ? ("likes" != this.section || i || this.showDesc(), this.$(".section-captions").add(".section-content").show(), 
            this.$(".section-captions .desc-caption").toggle(!!e), this.$(".section-content .desc-content").toggle(!!e && "description" == this.section), 
            this.$(".section-captions .likes-caption").toggle(!!i).text(i + " " + t.utils.declination("Likes", "Like", "Likes", i)), 
            this.$(".section-content .likes-content").toggle(!!i && "likes" == this.section), this.$(".section-captions .updates-caption").toggle(!!n.length), 
            this.$(".section-content .updates-content").toggle(!!n.length && "updates" == this.section), setTimeout(_.bind(function() {
                this.updateDesc();
            }, this), 1e3), undefined) : (this.$(".section-captions").hide(), this.$(".section-content").hide(), 
            undefined);
        },
        toggleLike: function(t) {
            this.magModel.toggleLike(_.bind(function() {
                this.setDescLikesUpdates(), $(t.currentTarget).toggleClass("checked", !!this.magModel.get("isLiked")).attr("data-alt", this.magModel.get("isLiked") ? "Unlike" : "Like");
            }, this));
        },
        toggleFollow: function() {
            this.me.id != this.magModel.user.id && this.me.toggleFollow(this.magModel.user);
        },
        updateDesc: function() {
            this.$el.addClass("force-visible"), this.$(".section-content .desc-content").dotdotdot({
                after: $("<span>More</span>")
            }), this.$(".section-content .desc-content span").addClass("desc-more"), this.$el.removeClass("force-visible");
        },
        moreDesc: function() {
            var t = this.$(".section-content .desc-content"), e = t.height();
            t.trigger("destroy.dot").css("height", "auto").append('<span class="desc-less">&nbsp;&nbsp;Less</span>');
            var i = t.height();
            t.css("height", e).animate({
                height: i
            }, this.ANIMATION_SPEED.desc_more_less_switch);
        },
        lessDesc: function() {
            var t = this.$(".section-content .desc-content"), e = t.height();
            t.css({
                height: this.MIN_DESC_HEIGHT
            }), t.find(".desc-less").remove(), this.updateDesc(), t.css("height", e).animate({
                height: this.MIN_DESC_HEIGHT
            }, this.ANIMATION_SPEED.desc_more_less_switch);
        },
        setTags: function() {
            var t = this.magModel.get("tags"), e = this.$(".right-block .tags"), i = this.$(".right-block .more-tags");
            if (_.isEmpty(t)) return this.$(".tags_container").hide(), undefined;
            this.$(".tags_container").show(), this.$el.addClass("force-visible"), e.css("height", "auto");
            for (var n = "", s = "", o = 0; t.length > o; o++) {
                if (n += t[o], t.length - 1 > o && (n += ", "), e.text(n), e.height() > this.MAX_TAGS_LINES_HEIGHT) {
                    e.text(s), i.css("display", "inline-block").text("+" + (t.length - o)), this.tagsData = {
                        collapsed: !0,
                        collapsedHeight: e.height(),
                        collapsedText: e.text(),
                        expandedText: t.join(", "),
                        collapsedButtonText: i.text()
                    };
                    break;
                }
                s = n;
            }
            this.$el.removeClass("force-visible");
        },
        toggleTags: function() {
            if (this.tagsData) {
                var t = this.$(".right-block .tags"), e = this.$(".right-block .more-tags");
                if (this.tagsData.collapsed) {
                    e.text("-"), t.text(this.tagsData.expandedText).css("height", "auto");
                    var i = t.height();
                    t.css("height", this.tagsData.collapsedHeight).animate({
                        height: i
                    }, this.ANIMATION_SPEED.tags_switch);
                } else e.text(this.tagsData.collapsedButtonText), t.animate({
                    height: this.tagsData.collapsedHeight
                }, this.ANIMATION_SPEED.tags_switch, _.bind(function() {
                    t.text(this.tagsData.collapsedText);
                }, this));
                this.tagsData.collapsed = !this.tagsData.collapsed;
            }
        },
        showDesc: function() {
            this.showSection("desc"), this.section = "description";
        },
        showLikes: function() {
            this.showSection("likes"), this.section = "likes";
        },
        showUpdates: function() {
            this.showSection("updates"), this.section = "updates";
        },
        showSection: function(t) {
            if (!this.$(".section-captions ." + t + "-caption").hasClass("active")) {
                var e = {
                    desc: [ "likes", "updates" ],
                    likes: [ "desc", "updates" ],
                    updates: [ "desc", "likes" ]
                };
                if (e[t]) {
                    var i = this.$(".section-content ." + t + "-content"), n = this.$(".section-content ." + e[t][0] + "-content").add(this.$(".section-content ." + e[t][1] + "-content")), s = this.$(".section-content");
                    this.$(".section-captions .desc-caption").removeClass("active"), this.$(".section-captions .likes-caption").removeClass("active"), 
                    this.$(".section-captions .updates-caption").removeClass("active"), this.$(".section-captions ." + t + "-caption").addClass("active");
                    var o = s.height();
                    i.addClass("animating"), n.addClass("animating");
                    var r = i.addClass("force-visible").outerHeight(!1);
                    i.removeClass("force-visible"), s.css("height", o).animate({
                        height: r
                    }, this.ANIMATION_SPEED.section_switch), n.stop(!1, !0).fadeOut(this.ANIMATION_SPEED.section_switch), 
                    i.stop(!1, !0).fadeIn(this.ANIMATION_SPEED.section_switch, function() {
                        s.css("height", "auto"), i.removeClass("animating"), n.removeClass("animating");
                    }), "likes" != t || this.likersList.rendered || this.likersList.nextPage(this.magModel);
                }
            }
        },
        updateDatesBlock: function() {
            var t = this.magModel.get("is_published");
            if (this.$(".top .info-wrapper .publish-block").toggle(t), t) {
                var e, i = new Date(this.magModel.get("published")).format("mmm d, yyyy");
                this.magModel.get("updated") && (e = new Date(this.magModel.get("updated")).format("mmm dd")), this.$(".top .info-wrapper .publish-block .publish-date").text(i), 
                this.$(".top .info-wrapper .republish").toggle(!!e), this.$(".top .info-wrapper .publish-block .republish-date").text(e), 
                i && e && this.daysEqual(new Date(this.magModel.get("published")), new Date(this.magModel.get("updated"))) && this.$(".top .info-wrapper .republish").hide();
            }
        },
        daysEqual: function(t, e) {
            return t.format("mmm dd yyyy") == e.format("mmm dd yyyy");
        },
        updateFollowing: function(t) {
            t.id == this.magModel.user.id && this.$(".left-block .follow-button").toggleClass("following", !!t.get("isFollowed"));
        },
        requestContents: function(t) {
            this.magModel.loadContents({
                success: t
            });
        },
        loadContents: function(t) {
            function e(e) {
                i.contentsData = e, i.$(".contents-block .rmpreloader").remove();
                var n = i.$(".contents-block .pages");
                e = _.sortBy(e, "num"), _.each(e, function(t, e) {
                    t.pic = i.magModel.getPageScreenshot(128, e + 1, i.isEditVersion), t.link = i.magModel.getPageLink(e + 1), 
                    $(i.template_page({
                        page: t
                    })).appendTo(n);
                }), n = i.$(".contents-block"), i.contentsScroll = n.RMScroll({
                    $container: n.find(".pages-wrapper"),
                    $content: n.find(".pages"),
                    $handle: n.find(".scroll"),
                    wheelScrollSpeed: .7,
                    gap_start: 33,
                    gap_end: 33,
                    onScroll: _.debounce(i.loadContentsImages, 500),
                    systemScroll: !0
                }).data("scroll"), t && t();
            }
            if (this.contentsRequested && this.magModel.get("pages").length) return t && t(), undefined;
            this.contentsRequested = !0, this.$(".contents-block .rmpreloader").css("display", "block");
            var i = this;
            this.requestContents(e);
        },
        loadContentsImages: function() {
            if (this.contents_shown) {
                var t = (this.$(".contents-block .pages"), this), e = this.$(".contents-block").offset().top, i = e + this.$(".contents-block").height(), n = $(window).height();
                this.$(".contents-block .pages .page-block .screen").each(function() {
                    var s = $(this);
                    if (s.attr("data-src")) {
                        var o = s.offset().top, r = o + t.CONTENTS_PAGE_SCREEN_HEIGHT;
                        r > 0 && n > o && r > e && i > o && s.attr("src", s.attr("data-src")).removeAttr("data-src");
                    }
                });
            }
        },
        showContents: function() {
            "collector" == this.tp && (this.contents_shown || (this.contents_shown = !0, this.loadContents(_.bind(function() {
                this.$(".top .close").addClass("faded"), this.$(".contents-hide").stop(!1, !0), this.$(".block-layer").stop(!1, !0).fadeIn(this.ANIMATION_SPEED.contents), 
                this.$(".contents-block").stop(!1, !0).fadeIn(this.ANIMATION_SPEED.contents, _.bind(function() {
                    this.$(".contents-hide").css("display", "block").animate({
                        "margin-left": 256,
                        opacity: 1
                    }, this.ANIMATION_SPEED.contents);
                }, this));
            }, this)), this.contentsScroll && this.contentsScroll.recalc(), this.loadContentsImages()));
        },
        onBlockClick: function() {
            this.contents_shown && this.hideContents(), this.embed && this.embed.shown && this.embed.hide();
        },
        hideContents: function() {
            this.contents_shown && (this.contents_shown = !1, this.$(".top .close").removeClass("faded"), this.$(".block-layer").stop(!1, !0), 
            this.$(".contents-block").stop(!1, !0), this.$(".contents-hide").stop(!1, !0).animate({
                "margin-left": 216,
                opacity: 0
            }, this.ANIMATION_SPEED.contents, _.bind(function() {
                this.$(".contents-hide").css("display", "none"), this.$(".block-layer").fadeOut(this.ANIMATION_SPEED.contents), 
                this.$(".contents-block").fadeOut(this.ANIMATION_SPEED.contents);
            }, this)));
        },
        hideByBGClick: function() {
            this.contents_shown ? this.hideContents() : this.embed && this.embed.shown ? this.embed.hide() : this.hide();
        },
        hide: function(e) {
            this.alwaysShow || (this.me && this.me.off("toggleFollow", this.updateFollowing), this.likersList && this.likersList.switchOff(), 
            this.shown = !1, this.$el.fadeOut(this.ANIMATION_SPEED.panel), "collector" == this.tp && (this.returnUrl && !e && (t.collector_router.navigate(this.returnUrl, {
                trigger: !1
            }), t.collector_router.latestFragment = this.returnUrl), this.showDesc(), this.likersList.clear(), this.hideContents(), 
            this.embed && this.embed.shown && this.embed.hide(), delete this.magModel, this.contentsRequested = !1, 
            $("body").off("keyup", this.keyup)), this.share && this.share.destroy(), this.trigger("hide"));
        },
        setAlwaysShow: function() {
            this.alwaysShow = !0;
        },
        keyup: function(t) {
            t.keyCode == $.keycodes.esc && this.hideByBGClick();
        },
        show: function() {
            preloadDesignImages("mag-info"), this.rendered ? "collector" == this.tp && (this.embed && this.embed.off("show hide"), 
            this.embed.destroy && this.embed.destroy(), this.$el.html($(this.template({
                mag: this.magModel,
                user: this.magModel.user,
                type: this.tp,
                isEditVersion: this.isEditVersion,
                isMe: this.me.id == this.magModel.user.id,
                canClose: !this.alwaysShow
            })).html()), this.embed = new t.views.Embed({
                mag: this.magModel,
                $parent: this.$(".panel")
            }), this.embed.on("show", _.bind(function() {
                this.$(".block-layer").stop(!1, !0).fadeIn(200);
            }, this)), this.embed.on("hide", _.bind(function() {
                this.$(".block-layer").stop(!1, !0).fadeOut(200);
            }, this)), this.$("div[data-alt]:not(.rmalttext)").RMAltText(), this.$(".section-content .updates-content .update-time").timeago(), 
            this.transformDescription(), this.likersList && this.likersList.setElement(this.$(".section-content .likes-content").get(0))) : this.render(), 
            this.me && this.me.on("toggleFollow", this.updateFollowing), this.likersList && this.likersList.switchOn(), 
            this.shown = !0, this.$el.fadeIn(this.ANIMATION_SPEED.panel), this.trigger("show"), this.setTags(), 
            this.sharer = new t.classes.Sharer(this.magModel), this.setDescLikesUpdates(), this.updateDatesBlock(), 
            "collector" == this.tp && $("body").on("keyup", this.keyup);
        },
        socialFacebook: function() {
            this.sharer.toFacebook();
        },
        socialTwitter: function(t) {
            this.sharer.toTwitter(t);
        },
        socialPinterest: function(t) {
            this.sharer.toPinterest(t);
        },
        socialMail: function(t) {
            this.sharer.toMail(t);
        },
        socialEmbed: function() {
            this.embed && this.embed.toggle();
        },
        socialReport: function(t) {
            this.share.toReport(t);
        },
        goBack: function() {
            screenfull && screenfull.isFullscreen && screenfull.exit(), setTimeout(_.bind(function() {
                this.hide(), this.mag.router.exit();
            }, this), 200);
        },
        checkAuth: function(t) {
            this.mag && !this.mag.authorized && (t.preventDefault(), t.stopImmediatePropagation(), this.mag.showNeedLogin(t));
        },
        hideMagMenu: function() {
            this.magMenu && this.magMenu.hide();
        },
        destroy: function() {
            this.hide(), this.$el.remove();
        },
        stopEvents: function(t) {
            t.preventDefault(), t.stopPropagation();
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.views.Embed = Backbone.View.extend({
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t), this.template = _.template($("#template-common-embed").text()), 
            this.onlyFull = !!this.mag.get, preloadDesignImages("embed");
        },
        render: function() {
            this.rendered || (this.rendered = !0, this.$el = $(this.template({})), this.$el.appendTo(this.$parent), 
            this.$el.on("click", ".embed-close", this.hide), this.$el.on("click", ".embed-code", this.toggleCode), 
            this.$el.on("click", ".embed-type-page", this.selectTypePage), this.$el.on("click", ".embed-type-full", this.selectTypeFull), 
            this.$el.on("click", ".embed-size-512", this.selectSize512), this.$el.on("click", ".embed-size-256", this.selectSize256));
        },
        selectTypePage: function() {
            this.$(".embed-type-page").addClass("active"), this.$(".embed-type-full").removeClass("active"), this.updatePreviews(), 
            this.updateCode();
        },
        selectTypeFull: function() {
            this.$(".embed-type-page").removeClass("active"), this.$(".embed-type-full").addClass("active"), this.updatePreviews(), 
            this.updateCode();
        },
        selectSize512: function() {
            this.$(".embed-size-512").addClass("active"), this.$(".embed-size-256").removeClass("active"), this.updateCode();
        },
        selectSize256: function() {
            this.$(".embed-size-512").removeClass("active"), this.$(".embed-size-256").addClass("active"), this.updateCode();
        },
        toggleCode: function() {
            this.codeShown ? (this.$el.removeClass("embed-code-shown"), this.$(".embed-code").off("mouseleave"), 
            this.$(".embed-code").blur()) : (this.$el.addClass("embed-code-shown"), this.$(".embed-code").focus().select(), 
            this.$(".embed-code").on("mouseleave", this.toggleCode)), this.codeShown = !this.codeShown;
        },
        updatePreviews: function() {
            var e = this.$(".embed-type-page").hasClass("active") ? "page" : "full", i = "/screenshot/256/" + this.mag_num_id + "/" + ("page" == e ? this.cur_page_id : this.first_page_id) + "/";
            this.mag.get ? _.has(t, "router") && (i += "edit/") : this.mag.router.isPreview && (i += "edit/"), this.$(".embed-preview-512 .embed-preview-thumb").attr("src", i), 
            this.$(".embed-preview-256 .embed-preview-thumb").attr("src", i);
        },
        updateCode: function() {
            var t = this.$(".embed-type-page").hasClass("active") ? "page" : "full", e = this.$(".embed-size-512").hasClass("active") ? "512" : "256", i = window.location.protocol + "//embed." + window.location.hostname + ("full" == t ? "/" + this.mag_num_id : "") + ("page" == t ? "/p" + this.cur_page_num_id : "") + "/?size=" + e, n = '<iframe src="' + i + '" width="' + e + '" height="' + (512 == e ? 416 : 248) + '" frameborder="0"></iframe>';
            this.$(".embed-code").val(n), this.codeShown && this.$(".embed-code").focus().select();
        },
        updatePageData: function() {
            this.mag.get ? (this.mag_num_id = this.mag.getId(), this.cur_page_num = e, this.cur_page_id = e, this.first_page_id = e, 
            this.first_page_id = this.mag.get("coverPid") ? this.mag.get("coverPid") : this.mag.get("pages") ? this.mag.getPageId(1) : this.mag.get("pids") && this.mag.get("pids")[0]) : (this.mag_num_id = this.mag.num_id, 
            this.cur_page_num = this.mag.currentPage.num, this.cur_page_num_id = this.mag.currentPage.num_id, this.cur_page_id = this.mag.currentPage._id, 
            this.first_page_id = this.mag.coverPid);
        },
        hide: function() {
            this.shown = !1, this.trigger("hide"), this.$el.stop().fadeOut(200);
        },
        show: function() {
            this.updatePageData(), this.rendered || this.render(), this.$el.toggleClass("embed-full-only", this.onlyFull), 
            this.onlyFull ? this.selectTypeFull() : this.$(".embed-type-page").text("Page " + this.cur_page_num), 
            this.updatePreviews(), this.updateCode(), this.shown = !0, this.trigger("show"), this.$el.stop().fadeIn(200);
        },
        toggle: function() {
            this.shown ? this.hide() : this.show();
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.LikersList = Backbone.View.extend({
        events: {
            "click .show-more": "nextPage",
            "click .follow-button": "toggleFollow"
        },
        ANIMATION_SPEED: {
            likes_add: 300
        },
        LIKES_TIME_UPDATE_INTERVAL: 6e4,
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t), this.template = _.template($("#template-common-likers-list").text()), 
            this.template_liker = _.template($("#template-common-liker-list-liker").text()), this.mag && _.isFunction(this.mag.isUser) && (this.toggleFollow = _.wrap(this.toggleFollow, this.mag.isUser));
        },
        render: function(t) {
            this.rendered = !0, this.$el.html(this.template()), this.$preloader = this.$(".preloader"), this.$showMore = this.$el.find(".show-more-wrapper"), 
            this.model = t, this.switchOn();
        },
        nextPage: function(t) {
            this.rendered || this.render(t), this.preloaderTimeout = setTimeout(_.bind(function() {
                this.$preloader.show();
            }, this), 300), this.model.loadMagLikersPortion({
                success: _.bind(this.showSomeLikers, this),
                error: _.bind(function() {
                    this.$preloader.hide(), clearTimeout(this.preloaderTimeout);
                }, this)
            });
        },
        showSomeLikers: function(t) {
            clearTimeout(this.preloaderTimeout), this.$preloader.hide();
            var e = this.$el.find(".likers-list"), i = e.height();
            t = this.appendLikers ? _(t) : this.model.likers;
            var n = "";
            t.each(function(t) {
                n += this.renderLikerItem(t);
            }, this), $(n).insertBefore(this.$showMore), this.$showMore.toggleClass("hidden", this.model.get("likes_count") == this.model.likers.length);
            var s = e.height();
            e.css("height", i).animate({
                height: s
            }, this.ANIMATION_SPEED.likes_add, function() {
                e.css("height", "auto");
            }), this.appendLikers = !0;
        },
        renderLikerItem: function(t) {
            var e = new Date(t.get("likeDate"));
            return t.set({
                time: e,
                time_full: e.format("mmmm d, yyyy HH:MM:ss"),
                time_ago: $.timeago(e)
            }, {
                silent: !0
            }), this.template_liker({
                liker: t,
                me: this.me,
                loggedin: !!this.me
            });
        },
        toggleFollow: function(t) {
            var e = $(t.target).closest(".like-block").data("id");
            this.me.toggleFollow(this.model.likers.get(e));
        },
        toggleMyLike: function() {
            var t = this.model.get("isLiked"), e = this.me;
            t ? $(this.renderLikerItem(e.set("likeDate", "" + new Date()))).hide().prependTo(this.$el.find(".likers-list")).fadeIn(200) : this.$(".like-block").filter(function() {
                return $(this).data("id") == e.id;
            }).fadeOut(200, function() {
                $(this).remove();
            });
        },
        updateFollows: function(t) {
            var e = this.$(".like-block").filter(function() {
                return $(this).data("id") == t.id;
            });
            e.find(".follow-button").toggleClass("following", !!t.get("isFollowed") || !!t.isFollowed);
        },
        updateLikesTimes: function() {
            this.$(".like-block .time").each(function() {
                var t = $(this);
                t.text($.timeago(new Date(t.attr("data-time"))));
            });
        },
        switchOn: function() {
            this.rendered && (this.me && this.me.on("toggleFollow", this.updateFollows), this.model.on("change:isLiked", this.toggleMyLike), 
            this.updateLikesTimesInterval = setInterval(this.updateLikesTimes, this.LIKES_TIME_UPDATE_INTERVAL));
        },
        switchOff: function() {
            this.me && this.me.off("toggleFollow", this.updateFollows), this.model && this.model.off("change:isLiked", this.toggleMyLike), 
            this.model && this.model.abortXhr("magLikers"), clearInterval(this.updateLikesTimesInterval);
        },
        clear: function() {
            this.rendered = !1, this.$el.html(""), this.appendLikers = !1, clearTimeout(this.preloaderTimeout), 
            clearInterval(this.updateLikesTimesInterval);
        },
        destroy: function() {
            this.switchOff(), this.$el.remove(), this.appendLikers = !1;
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.shapeSVG = function() {}, t.classes.shapeSVG.prototype = {
        generateShapeSVG: function(t, i, n, s) {
            function o(t, e, i, n, s, o, r) {
                var a = "mask_" + o, l = "clip_" + o, c = "", h = 2;
                return s > 0 && r > .99 && (h = 1), c = "<defs>", s > 0 && (c += '<mask id="' + a + '">', "path" == t && (c += '<path d="' + e.path + '" style="fill:white; stroke:black; stroke-width:' + s * h + '"/>'), 
                "ellipse" == t && (c += '<ellipse cx="' + e.cx + '" cy="' + e.cy + '" rx="' + e.rx + '" ry="' + e.ry + '" style="fill:white; stroke:black; stroke-width:' + s * h + '"/>'), 
                c += "</mask>"), c += '<clippath id="' + l + '">', "path" == t && (c += '<path d="' + e.path + '"/>'), 
                "ellipse" == t && (c += '<ellipse cx="' + e.cx + '" cy="' + e.cy + '" rx="' + e.rx + '" ry="' + e.ry + '"/>'), 
                c += "</clippath>", c += "</defs>", "path" == t && (c += '<path mask="url(#' + a + ')" d="' + e.path + '" style="fill:' + i + '; stroke:none; stroke-width:0"/>'), 
                "ellipse" == t && (c += '<ellipse mask="url(#' + a + ')" cx="' + e.cx + '" cy="' + e.cy + '" rx="' + e.rx + '" ry="' + e.ry + '" style="fill:' + i + '; stroke:none; stroke-width:0"/>'), 
                0 == s ? c : ("path" == t && (c += '<path clip-path="url(#' + l + ')" d="' + e.path + '" style="fill:none; stroke:' + n + "; stroke-width:" + 2 * s + '"/>'), 
                "ellipse" == t && (c += '<ellipse clip-path="url(#' + l + ')" cx="' + e.cx + '" cy="' + e.cy + '" rx="' + e.rx + '" ry="' + e.ry + '" style="fill:none; stroke:' + n + "; stroke-width:" + 2 * s + '"/>'), 
                c);
            }
            function r(t, e, i) {
                for (var n, s, o, r = 2 * Math.PI / t, a = Math.PI / 2 - (1 == t % 2 ? 0 : r / 2), l = [], c = 999999, h = -999999, p = 999999, d = -999999, g = 0; t > g; g++) n = a + g * r, 
                s = .5 + .5 * Math.cos(n), o = .5 - .5 * Math.sin(n), l.push({
                    x: s,
                    y: o
                }), c > s && (c = s), s > h && (h = s), p > o && (p = o), o > d && (d = o);
                for (var g = 0; t > g; g++) l[g].x = (l[g].x - c) * (e / (h - c)), l[g].y = (l[g].y - p) * (i / (d - p)), 
                l[g].x = Math.round(l[g].x * u) / u, l[g].y = Math.round(l[g].y * u) / u;
                return l;
            }
            function a(t) {
                if (!t) return 99999;
                for (var e, i = 99999, n = t.length, s = 0; n > s; s++) {
                    var o = t[s].x - t[(s + 1) % n].x, r = t[s].y - t[(s + 1) % n].y;
                    e = Math.sqrt(o * o + r * r), i > e && (i = e), t[s].side = e;
                }
                return i;
            }
            function l(t, i, n) {
                if (!t) return e;
                if (1e-4 >= i) return e;
                var s = [], o = t.length;
                i = Math.min(i, n / 2);
                for (var r = 0; o > r; r++) {
                    var a, l, c, h, p = t[r], d = t[(r + 1) % o], g = t[r].side, f = (d.x - p.x) / g, m = (d.y - p.y) / g;
                    a = p.x + f * i, l = p.y + m * i, c = d.x - f * i, h = d.y - m * i, a = Math.round(a * u) / u, l = Math.round(l * u) / u, 
                    c = Math.round(c * u) / u, h = Math.round(h * u) / u, s.push({
                        x: a,
                        y: l
                    }), s.push({
                        x: c,
                        y: h
                    });
                }
                return s;
            }
            function c(t, e) {
                if (!t) return "";
                for (var i = t.length, n = "", s = 0; i > s; s++) {
                    var o = (s + 1) % i, r = 2 * s + 1, a = (2 * s + 2) % (2 * i);
                    n += 0 == s ? "M" : "L", e ? (n += e[r].x + " " + e[r].y + " ", n += "Q" + t[o].x + " " + t[o].y + " " + e[a].x + " " + e[a].y + " ") : n += t[s].x + " " + t[s].y + " ";
                }
                return n + " Z ";
            }
            var h, u = 1e5, p = this.getRGBA(i.get("bg_color"), i.get("bg_opacity")), d = this.getRGBA(i.get("color"), i.get("opacity"));
            if ("ellipse" == i.get("tp")) {
                var g = n / 2, f = s / 2, m = i.get("borders"), m = Math.min(m, g, f);
                h = o("ellipse", {
                    cx: g,
                    cy: f,
                    rx: g,
                    ry: f
                }, p, d, m, i.id + "_" + t, i.get("opacity"));
            }
            if ("rectangle" == i.get("tp") || "polygon" == i.get("tp")) {
                var v = "rectangle" == i.get("tp") ? 4 : i.get("sides"), m = i.get("borders"), y = i.get("radius"), b = r(v, n, s, m), w = a(b), _ = l(b, y, w), x = c(b, _);
                h = o("path", {
                    path: x
                }, p, d, m, i.id + "_" + t, i.get("opacity"));
            }
            if ("line" == i.get("tp")) {
                var m = i.get("weight"), f = Math.round(s / 2) + (1 == m % 2 ? .5 : 0), x = "", k = [ 13 * m / 3, 2 * m / 3 ].join(" "), $ = m > 1 ? [ .001, 5 * m / 3 ].join(" ") : [ 1, 2 ].join(" "), C = "dotted" == i.get("stroke") ? m / 2 : 0;
                if (x = "M" + C + " " + f + " L" + n + " " + f, "solid" == i.get("stroke") && (h = '<path d="' + x + '" style="fill:none; stroke:' + p + ";stroke-width:" + m + '"/>'), 
                "double" == i.get("stroke")) {
                    var T = "M" + C + " " + (f - m) + " L" + n + " " + (f - m), P = "M" + C + " " + (f + m) + " L" + n + " " + (f + m);
                    h = '<path d="' + T + '" style="fill:none; stroke:' + p + ";stroke-width:" + m + '"/>', h += '<path d="' + P + '" style="fill:none; stroke:' + p + ";stroke-width:" + m + '"/>';
                }
                "dotted" == i.get("stroke") && (h = '<path d="' + x + '" stroke-linecap="round" stroke-dasharray="' + $ + '" style=" fill:none; stroke:' + p + ";stroke-width:" + m + '"/>'), 
                "dashed" == i.get("stroke") && (h = '<path d="' + x + '" stroke-dasharray="' + k + '" style=" fill:none; stroke:' + p + ";stroke-width:" + m + '"/>');
            }
            return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + n + '" height="' + s + '">' + h + "</svg>";
        },
        getRGBA: function(t, e) {
            var i = [ parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16) ];
            return e > .99 ? "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : "rgba(" + i[0] + "," + i[1] + "," + i[2] + ", " + e + ")";
        }
    };
}(RM), function(t, e) {
    "use strict";
    t.classes.AudioPlayer = Backbone.View.extend({
        initialize: function(t, e, s) {
            _.bindAll(this), this.params = t, this.$container = e, this.readyCallback = s || function() {}, this.player = "standard" == t.current_type || Modernizr.opera ? new i(t, e, s, this) : new n(t, e, s, this), 
            this.render();
        },
        render: function() {
            this.player && this.player.render();
        },
        show: function() {
            this.player && this.player.show();
        },
        play: function() {
            this.player && this.player.play();
        },
        pause: function() {
            this.player && this.player.pause();
        },
        applyPlayerStyle: function(t) {
            this.player && this.player.applyPlayerStyle && this.player.applyPlayerStyle(t);
        },
        destroy: function() {
            this.player && this.player.destroy(), this.player = null;
        }
    });
    var i = Backbone.View.extend({
        initialize: function(t, e, i, n) {
            _.bindAll(this), this.inner_template = _.template($("#template-common-audio-standard").text()), this.parent = n, 
            this.params = t, this.$container = e, this.readyCallback = i || function() {};
        },
        render: function() {
            var e = [];
            e.push("auto_play=false"), e.push("buying=" + this.params.socials), e.push("liking=" + this.params.socials), 
            e.push("download=" + this.params.socials), e.push("sharing=" + this.params.socials), e.push("show_artwork=" + this.params.artwork), 
            e.push("show_comments=" + this.params.comments), e.push("show_playcount=" + this.params.playcount), 
            e.push("color=" + this.params.color), e.push("auto_advance=true"), e.push("show_user=true");
            var i = this.params.parsed_url + "&" + e.join("&");
            this.$el = $(this.inner_template({
                src: i
            })), this.$container.append(this.$el), this.player = SC.Widget(this.$el[0]), t.screenshot ? setTimeout(_.bind(function() {
                this.readyCallback(this.parent);
            }, this), 2e3) : this.player.bind("ready", _.bind(function() {
                setTimeout(_.bind(function() {
                    this.readyCallback(this.parent);
                }, this), 500);
            }, this));
        },
        show: function() {
            this.$el && this.$el.css("opacity", 1);
        },
        play: function() {
            this.player && this.player.play();
        },
        pause: function() {
            this.player && this.player.pause();
        },
        destroy: function() {
            this.$el && this.$el.remove(), this.player = null;
        }
    }), n = Backbone.View.extend({
        apiKey: "htuiRd1JP11Ww0X72T1C3g",
        defaultCover: "/img/common/audio-player/cover.png",
        initialize: function(t, e, i, n) {
            _.bindAll(this), this.inner_template = _.template($("#template-common-audio-minimal").text()), this.parent = n, 
            this.params = t, this.$container = e, this.readyCallback = i || function() {}, this.isHTHML5 = this.html5AudioAvailable();
        },
        render: function() {
            this.$el = $(this.inner_template({
                src: this.params.url
            })), this.$container.append(this.$el), this.applyPlayerStyle(this.params), this.audioEngine = this.isHTHML5 ? new s(this.$container, this) : new o(this.$container, this), 
            this.loadTracksData([ {
                url: this.params.url
            } ]);
        },
        applyPlayerStyle: function(t) {
            this.$el && (this.$el.toggleClass("no-artwork", !t.artwork), this.$el.toggleClass("no-info", !t.info), 
            this.$(".sc-info").css("color", t.artwork ? "#fff" : "#" + t.color), this.$(".sc-left").css("color", "#" + t.color), 
            this.$(".sc-button svg path").css("fill", "#" + t.color));
        },
        tracksIsLoaded: function(i) {
            if (this.tracks = null, this.audioEngine) {
                var n = i.playerObj.tracks;
                if (!n.length) return this.$el.remove(), this.ready = !0, this.readyCallback(this.parent), e;
                this.tracks = n, this.currentTrackNum = 0, this.$el.removeClass("loading"), this.audioEngine.on("scPlayer:onAudioReady", this.onAudioReady).on("scPlayer:onMediaPlay", this.onMediaPlay).on("scPlayer:onMediaPause", this.onMediaPause).on("scPlayer:onMediaEnd", this.onMediaEnd).on("scPlayer:onMediaBuffering", this.onMediaBuffering), 
                this.$elements = {}, this.$elements.scrubber = this.$(".sc-scrubber"), this.$elements.play_button = this.$(".sc-button"), 
                this.$elements.play_wrapper = this.$(".sc-button-wrapper"), this.$elements.buffer = this.$(".sc-buffer"), 
                this.$elements.played = this.$(".sc-played"), this.$elements.time = this.$(".sc-left");
                var s = this.updateTrackInfo(this.currentTrackNum);
                if (this.$elements.play_button.on("click", this.onPlayClick), Modernizr.touch || (this.$elements.scrubber.on("mousemove", this.onScrubberMouseMove), 
                this.$elements.scrubber.on("click", this.onScrubberClick)), this.$(".sc-artwork-list").on("click", this.onPlayClick), 
                this.$elements.play_button.RMDrag({
                    move: this.moveHandleDrag,
                    end: this.endHandleDrag,
                    silent: !0,
                    preventDefault: !0
                }), this.$elements.play_wrapper.on("touchstart", function(t) {
                    t.stopPropagation();
                }), t.screenshot) var o = $("<img/>").load(_.bind(function() {
                    setTimeout(_.bind(function() {
                        this.ready = !0, this.readyCallback(this.parent), o.remove();
                    }, this), 100);
                }, this)).attr("src", s); else this.ready = !0, this.readyCallback(this.parent);
            }
        },
        moveHandleDrag: function(t) {
            this.playing && this.pause(), this.isDragging = !0, this.$el.addClass("dragging"), this.scrub(t.pageX);
        },
        endHandleDrag: function(t) {
            t.moved && this.play(), this.$el.removeClass("dragging"), setTimeout(_.bind(function() {
                this.isDragging = !1;
            }, this), 0);
        },
        onScrubberMouseMove: function(t) {
            var e = $(t.currentTarget), i = e.find(".sc-hover-indicator"), n = t.pageX - e.offset().left;
            i.css("left", n + "px");
        },
        onScrubberClick: function(t) {
            return this.playing || this.play(), this.scrub(t.pageX), !1;
        },
        onPlayClick: function(t) {
            return this.isDragging ? e : (this.playing ? this.pause() : this.play(), t.stopPropagation(), !1);
        },
        onAudioReady: function() {
            this.audioEngine && this.audioEngine.play(), this.audioEngine && this.audioEngine.setVolume(100);
        },
        onMediaPlay: function() {
            this.$el.addClass("playing"), this.playing = !0, clearInterval(this.positionPoll), this.positionPoll = setInterval(this.updatePlayState, 500);
        },
        onMediaPause: function() {
            this.$el.removeClass("playing"), this.playing = !1, clearInterval(this.positionPoll), this.positionPoll = null;
        },
        onMediaEnd: function() {
            this.$elements.played.css("width", "0%"), this.$elements.play_button.css("left", "0%"), this.$el.removeClass("playing"), 
            this.playing = !1, this.audioEngine && this.audioEngine.stop();
            var t = (this.currentTrackNum + 1) % this.tracks.length;
            this.play(t), 0 == t && (this.pause(), this.updateTrackInfo(0));
        },
        onMediaBuffering: function(t) {
            this.$elements.buffer.css("width", t + "%");
        },
        play: function(t) {
            if (this.tracks && (t == e && (t = this.currentTrackNum), this.audioEngine && (!this.playing || t != this.currentTrackNum))) {
                var i = this.tracks[t];
                this.$el.addClass("playing"), this.playing = !0, t == this.currentTrackNum && this.audioEngine.firstLoad ? this.audioEngine && this.audioEngine.play() : (this.updateTrackInfo(t), 
                this.currentTrackNum = t, this.audioEngine && this.audioEngine.load(i, this.apiKey));
            }
        },
        pause: function() {
            this.audioEngine && this.playing && (this.$el.removeClass("playing"), this.playing = !1, this.audioEngine && this.audioEngine.pause());
        },
        scrub: function(t) {
            if (this.audioEngine) {
                var e = (t - this.$elements.play_wrapper.offset().left - this.$elements.play_button.width() / 2) / this.$elements.play_wrapper.width(), e = Math.min(Math.max(Math.min(e, .999), 0), this.$elements.buffer.width() / this.$elements.scrubber.width());
                this.$elements.play_button.css("left", Math.floor(this.$elements.play_wrapper.width() * e) + "px"), 
                this.audioEngine && this.audioEngine.seek(e);
            }
        },
        updatePlayState: function() {
            if (this.audioEngine) {
                var t = this.audioEngine.getDuration(), e = this.audioEngine.getPosition(), i = e / t;
                this.$elements.played.css("width", 100 * i + "%"), this.$elements.play_button.css("left", Math.floor(this.$elements.play_wrapper.width() * i) + "px"), 
                t && this.$elements.time.html(this.timecode(t - e));
            }
        },
        updateTrackInfo: function(t) {
            if (this.tracks) {
                var e = this.tracks[t];
                this.$(".sc-info h3").html('<a target="_blank" href="' + e.permalink_url + '">' + e.title + "</a>"), 
                this.$(".sc-info h4").html('by <a target="_blank" href="' + e.user.permalink_url + '">' + e.user.username + "</a>");
                var i;
                i = e.artwork_url ? e.artwork_url.replace("-large", "-t300x300") : e.user && e.user.avatar_url ? e.user.avatar_url.replace("-large", "-t300x300") : this.defaultCover, 
                this.$(".sc-artwork-list .sc-loaded-artwork").css("background-image", 'url("' + i + '")'), this.$elements.time.html(this.timecode(e.duration));
                var n = (t + 1) % this.tracks.length, s = (t - 1 + this.tracks.length) % this.tracks.length, o = this.tracks[n], r = this.tracks[s];
                return !o.preload && o.artwork_url && (o.preload = new Image(), o.preload.src = o.artwork_url.replace("-large", "-t300x300")), 
                !r.preload && r.artwork_url && (r.preload = new Image(), r.preload.src = r.artwork_url.replace("-large", "-t300x300")), 
                i;
            }
        },
        loadTracksData: function(t) {
            var e = 0, i = {
                tracks: []
            }, n = this, s = function(o) {
                var r = n.scApiUrl(o.url);
                $.getJSON(r, function(a) {
                    e += 1, a.tracks ? i.tracks = i.tracks.concat(a.tracks) : a.duration ? (a.permalink_url = o.url, i.tracks.push(a)) : a.creator ? t.push({
                        url: a.uri + "/tracks"
                    }) : a.username ? /favorites/.test(o.url) ? t.push({
                        url: a.uri + "/favorites"
                    }) : t.push({
                        url: a.uri + "/tracks"
                    }) : $.isArray(a) && (i.tracks = i.tracks.concat(a)), t[e] ? s(t[e]) : n.tracksIsLoaded({
                        playerObj: i,
                        url: r
                    });
                });
            };
            s(t[e]);
        },
        scApiUrl: function(t) {
            var e = "https:" === document.location.protocol, i = (e || /^https/i.test(t) ? "https" : "http") + "://api.soundcloud.com/resolve?url=", n = "format=json&consumer_key=" + this.apiKey + "&callback=?";
            return e && (t = t.replace(/^http:/, "https:")), /api\./.test(t) ? t + "?" + n : i + t + "&" + n;
        },
        html5AudioAvailable: function() {
            var t = !1;
            try {
                var e = new Audio();
                t = e.canPlayType && /maybe|probably/.test(e.canPlayType("audio/mpeg"));
            } catch (i) {}
            return t;
        },
        timecode: function(t) {
            var e = {
                h: Math.floor(t / 36e5),
                m: Math.floor(t / 6e4 % 60),
                s: Math.floor(t / 1e3 % 60)
            }, i = [];
            return e.h > 0 && i.push(e.h), i.push(10 > e.m && e.h > 0 ? "0" + e.m : e.m), i.push(10 > e.s ? "0" + e.s : e.s), 
            i.join(":");
        },
        show: function() {
            this.$el && this.$el.css("opacity", 1);
        },
        destroy: function() {
            this.pause(), this.audioEngine && this.audioEngine.off(), this.audioEngine && this.audioEngine.destroy(), 
            this.audioEngine = null, this.$el && this.$el.remove();
        }
    }), s = Backbone.View.extend({
        initialize: function(t, e) {
            _.bindAll(this), this.inner_template = _.template($("#template-common-audio-engine-html5").text()), 
            this.parent = e, this.$container = t, this.firstLoad = !1;
            var i = this;
            this.callbacks = {
                onReady: function() {
                    i.player && i.trigger("scPlayer:onAudioReady");
                },
                onPlay: function() {
                    i.player && i.trigger("scPlayer:onMediaPlay");
                },
                onPause: function() {
                    i.player && i.trigger("scPlayer:onMediaPause");
                },
                onEnd: function() {
                    i.player && i.trigger("scPlayer:onMediaEnd");
                },
                onBuffer: function(t) {
                    i.player && i.trigger("scPlayer:onMediaBuffering", t);
                }
            }, this.render();
        },
        render: function() {
            this.$el = $(this.inner_template({})), this.$container.append(this.$el), this.player = this.$el.find("audio")[0], 
            this.player.addEventListener("play", this.callbacks.onPlay, !1), this.player.addEventListener("pause", this.callbacks.onPause, !1), 
            this.player.addEventListener("timeupdate", this.onTimeUpdate, !1), this.player.addEventListener("progress", this.onProgress, !1);
        },
        onTimeUpdate: function() {
            if (this.player) {
                var t = 100 * ((this.player.buffered.length && this.player.buffered.end(0)) / this.player.duration);
                this.callbacks.onBuffer(t), this.player.currentTime === this.player.duration && this.callbacks.onEnd();
            }
        },
        onProgress: function() {
            if (this.player) {
                var t = 100 * ((this.player.buffered.length && this.player.buffered.end(0)) / this.player.duration);
                this.callbacks.onBuffer(t);
            }
        },
        load: function(t, e) {
            this.player && (this.firstLoad = !0, this.player.pause(), this.player.src = t.stream_url + (/\?/.test(t.stream_url) ? "&" : "?") + "consumer_key=" + e, 
            this.player.load(), this.player.play());
        },
        play: function() {
            this.player && this.player.play();
        },
        pause: function() {
            this.player && this.player.pause();
        },
        stop: function() {
            this.player && this.player.currentTime && (this.player.currentTime = 0, this.player.pause());
        },
        seek: function(t) {
            if (this.player && this.player.src) try {
                this.player.currentTime = this.player.duration * t;
            } catch (e) {}
        },
        getDuration: function() {
            return this.player ? 1e3 * this.player.duration : 0;
        },
        getPosition: function() {
            return this.player ? 1e3 * this.player.currentTime : 0;
        },
        setVolume: function(t) {
            this.player && (this.player.volume = t / 100);
        },
        destroy: function() {
            this.$el.remove(), this.player = null;
        }
    }), o = Backbone.View.extend({
        initialize: function(t, e) {
            _.bindAll(this), this.inner_template_flash = _.template($("#template-common-audio-engine-flash").text()), 
            this.inner_template_flash_ie = _.template($("#template-common-audio-engine-flash-ie").text()), this.parent = e, 
            this.$container = t, this.firstLoad = !1;
            var i = this;
            this.callbacks = {
                onReady: function() {
                    i.player && i.trigger("scPlayer:onAudioReady");
                },
                onPlay: function() {
                    i.player && i.trigger("scPlayer:onMediaPlay");
                },
                onPause: function() {
                    i.player && i.trigger("scPlayer:onMediaPause");
                },
                onEnd: function() {
                    i.player && i.trigger("scPlayer:onMediaEnd");
                },
                onBuffer: function(t) {
                    i.player && i.trigger("scPlayer:onMediaBuffering", t);
                }
            };
        },
        render: function(t) {
            var e = "soundcloud_" + this.parent.parent.params._id, i = "https:" === document.location.protocol, n = (i ? "https" : "http") + "://player.soundcloud.com/player.swf?url=" + t + "&amp;enable_api=true&amp;player_type=engine&amp;object_id=" + e;
            this.$el = Modernizr.msie ? $(this.inner_template_flash_ie({
                id: e,
                swf: n
            })) : $(this.inner_template_flash({
                id: e,
                swf: n
            })), this.$container.append(this.$el), this.$el.find("object").on("soundcloud:onPlayerReady", _.bind(function() {
                this.player = window.soundcloud.getPlayer(e), this.callbacks.onReady();
            }, this)).on("soundcloud:onMediaBuffering", _.bind(function(t, e) {
                this.callbacks.onBuffer(e.percent);
            }, this)).on("soundcloud:onMediaEnd", this.callbacks.onEnd).on("soundcloud:onMediaPlay", this.callbacks.onPlay).on("soundcloud:onMediaPause", this.callbacks.onPause);
        },
        load: function(t) {
            this.firstLoad ? this.player && this.player.api_load(t.uri) : (this.firstLoad = !0, this.render(t.uri));
        },
        play: function() {
            this.player && this.firstLoad && this.player.api_play();
        },
        pause: function() {
            this.player && this.firstLoad && this.player.api_pause();
        },
        stop: function() {
            this.player && this.firstLoad && this.player.api_stop();
        },
        seek: function(t) {
            this.player && this.firstLoad && this.player.api_seekTo(this.player.api_getTrackDuration() * t);
        },
        getDuration: function() {
            return this.player && this.firstLoad && this.player.api_getTrackDuration && 1e3 * this.player.api_getTrackDuration();
        },
        getPosition: function() {
            return this.player && this.firstLoad && this.player.api_getTrackPosition && 1e3 * this.player.api_getTrackPosition();
        },
        setVolume: function(t) {
            this.player && this.player.api_setVolume && this.player.api_setVolume(t);
        },
        destroy: function() {
            this.player = null, this.$el && this.$el.remove();
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.SlideshowPlayer = Backbone.View.extend({
        THUMBNAILS_HEIGHT: 72,
        COUNTERS_HEIGHT: 24,
        COUNTER_WIDTH: 14,
        THUMBNAIL_WIDTH: 56,
        THUMBNAIL_PADDING: 8,
        THUMBNAILS_PADDING: 16,
        swipeStartDistance: 5,
        scrollStartDistance: 3,
        swipeDistance: 35,
        events: {
            "click .images .prev-picture-arrow-middle": "prevImage",
            "click .images .next-picture-arrow-middle": "nextImage",
            "click .images .prev-picture-arrow-bottom": "prevImage",
            "click .images .next-picture-arrow-bottom": "nextImage",
            "click .images .fullscreen": "toggleFullscreen",
            "click .counters .counter": "counterClick",
            "click .thumbnails .thumb": "thumbnailClick",
            "click .images": "onImageClick",
            "blur .captions .caption": "onCaptionBlur",
            "touchstart .images-wrapper": "onSwipeStart",
            "touchstart .thumbnails": "preventPageSwipe",
            "touchstart .counters": "preventPageSwipe"
        },
        preventPageSwipe: function(t) {
            t.stopPropagation();
        },
        initialize: function(t, e, i, n) {
            if (_.bindAll(this), this.template = _.template($("#template-common-slideshow").text()), this.block = n, 
            this.model = n && n.model, this.params = t, this.$container = e, this.environment = i, this.preloadImagesList = [], 
            this.render(), this.applyVisualState(t), this.applyPictures(t), this.applyTextStyles(t), "viewer" == this.environment) {
                var s = this.preloadImagesList.length;
                _.each(this.preloadImagesList, function(t) {
                    t.preload = new Image(), t.preload.onload = _.bind(function() {
                        s--, s || this.trigger("ready");
                    }, this), t.preload.src = t.url;
                }, this);
            }
        },
        render: function() {
            this.$el = $(this.template({
                tp: this.environment
            })), this.$container.append(this.$el), this.counters_scroll = this.$(".counters .scroll-wrapper").RMScroll({
                $container: this.$(".counters .items-wrapper"),
                $content: this.$(".counters .items"),
                $handle: this.$(".counters .scroll"),
                wheelScrollSpeed: .1,
                scrollStep: 14,
                tp: "horizontal"
            }).data("scroll"), this.thumbnails_scroll = this.$(".thumbnails .scroll-wrapper").RMScroll({
                $container: this.$(".thumbnails .items-wrapper"),
                $content: this.$(".thumbnails .items"),
                $handle: this.$(".thumbnails .scroll"),
                wheelScrollSpeed: .3,
                onScroll: this.preloadThumbImages,
                tp: "horizontal"
            }).data("scroll");
        },
        applyVisualState: function(t, e) {
            if (t.theme_data) {
                var i = {
                    w: e ? e.w : t.w,
                    h: e ? e.h : t.h,
                    images_h: e ? e.images_h : t.images_h,
                    captions_h: e ? e.captions_h : t.captions_h,
                    thumbnails_h: this.THUMBNAILS_HEIGHT,
                    counters_h: this.COUNTERS_HEIGHT,
                    theme: t.current_theme,
                    thumbnails: t.theme_data.thumbnails,
                    counters: t.theme_data.counters
                };
                i.showThumbnails = "theme_classic" == i.theme && i.thumbnails, i.showCounters = "theme_captions" == i.theme && i.counters, 
                i.showCaptions = "theme_captions" == i.theme, i.showFullscreen = t.theme_data.fullscreen, this.$(".images").css("height", i.images_h), 
                this.$(".thumbnails").css({
                    display: i.showThumbnails ? "block" : "none",
                    height: i.thumbnails_h
                }), this.$(".counters").css({
                    display: i.showCounters ? "block" : "none",
                    height: i.counters_h
                }), this.$(".captions").css({
                    display: i.showCaptions ? "block" : "none",
                    height: i.captions_h
                }), this.$(".images .fullscreen").toggle(i.showFullscreen), this.$(".images .bottom-arrows").toggleClass("hidden", "theme_classic" !== i.theme), 
                this.$(".images .prev-picture-arrow-middle").toggleClass("hidden", "theme_captions" !== i.theme), this.$(".images .next-picture-arrow-middle").toggleClass("hidden", "theme_captions" !== i.theme);
                var n = t.theme_data, s = this.getRGBA(n.controls_color, n.controls_opacity), o = this.getRGBA(n.background_color, n.background_opacity);
                this.$("svg path").css("stroke", s), this.$("svg .fullscreen-path-1").css("fill", s), this.$(".counters-text").css("color", s), 
                this.$(".images").css("background", o), this.$(".thumbnails").css("background", o), this.$(".images .images-wrapper .image").each(_.bind(function(t, e) {
                    var s = $(e);
                    s.css({
                        "background-size": this.setImageSize(n.fill, s.attr("data-width"), s.attr("data-height"), i.w, i.images_h),
                        width: i.w,
                        left: i.w * t
                    });
                }, this));
                var r = t.pictures || [], a = this.$(".images .images-wrapper"), l = this.$(".counters .scroll-wrapper .items-wrapper .items"), c = this.$(".thumbnails .scroll-wrapper .items-wrapper .items");
                a.css("width", r.length * i.w), l.css("width", r.length * this.COUNTER_WIDTH), c.css("width", r.length * (this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING) - this.THUMBNAIL_PADDING), 
                this.recalcCounters(t, e), this.recalcThumbnails(t, e), this.moveToImage(this.currentImageID, !1, "change-visual-style");
            }
        },
        getRGBA: function(t, e) {
            var i = "", n = [ parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16) ];
            return i = e > .99 ? "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")" : "rgba(" + n[0] + "," + n[1] + "," + n[2] + ", " + e + ")";
        },
        applyPictures: function(t) {
            if (t.theme_data) {
                var e = t.pictures || [];
                this.$el.toggleClass("no-images", !e.length), this.$(".images .bottom-arrows").toggleClass("no-images", 1 >= e.length), 
                this.$(".images .prev-picture-arrow-middle").toggleClass("no-images", 1 >= e.length), this.$(".images .next-picture-arrow-middle").toggleClass("no-images", 1 >= e.length), 
                this.$(".images .bottom-arrows .counters-text .counters-text-total").html(e.length);
                var i = this.$(".images .images-wrapper"), n = this.$(".counters .scroll-wrapper .items-wrapper .items"), s = this.$(".thumbnails .scroll-wrapper .items-wrapper .items"), o = this.$(".captions");
                i.css("width", e.length * t.w), n.css("width", e.length * this.COUNTER_WIDTH), s.css("width", e.length * (this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING) - this.THUMBNAIL_PADDING), 
                i.empty(), n.empty(), s.empty(), e = _.sortBy(e, "num");
                for (var r = 0; e.length > r; r++) {
                    var a, l = e[r];
                    if (a = $("<div>").addClass("image").attr("data-id", l.id).toggleClass("error", !!l.error).css({
                        "background-size": this.setImageSize(t.theme_data.fill, l.width, l.height, t.w, t.images_h),
                        left: t.w * r,
                        width: t.w
                    }).appendTo(i), "constructor" == this.environment && a.css({
                        "background-image": l.url ? 'url("' + l.url + '")' : "none"
                    }), "viewer" == this.environment && l.url && a.attr("data-src", l.url), l.url && l.width && l.height && a.attr("data-width", l.width).attr("data-height", l.height), 
                    a = $("<div>").addClass("thumb").attr("data-id", l.id).toggleClass("error", !!l.error).css({
                        left: (this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING) * r - this.THUMBNAIL_PADDING / 2
                    }).appendTo(s), "constructor" == this.environment && a.css({
                        "background-image": l.thumbUrl ? 'url("' + l.thumbUrl + '")' : "none"
                    }), "viewer" == this.environment && l.thumbUrl && a.attr("data-src", l.thumbUrl), $("<div>").addClass("counter").attr("data-id", l.id).css({
                        left: this.COUNTER_WIDTH * r
                    }).appendTo(n), "viewer" == this.environment) {
                        var c = $("<div>").addClass("caption-wrapper").attr("data-id", l.id);
                        $("<div>").addClass("caption").html(this.transformText(l.text)).appendTo(c), c.appendTo(o);
                    }
                }
                this.updateCurrentImageID(t), this.recalcCounters(t), this.recalcThumbnails(t), this.moveToImage(this.currentImageID, !1, "change-pictures"), 
                e.length || this.$(".images .bottom-arrows .counters-text .counters-text-current").html(0);
            }
        },
        applyTextStyles: function(t) {
            var e = _.clone(t.text_style);
            /px/i.test(e["font-size"]) || (e["font-size"] += "px"), /px/i.test(e["letter-spacing"]) || (e["letter-spacing"] += "px"), 
            /px/i.test(e["line-height"]) || (e["line-height"] += "px"), /#/i.test(e.color) || (e.color = "#" + e.color), 
            e.opacity /= 100, this.$(".captions .caption").css(e);
        },
        setImageSize: function(t, e, i, n, s) {
            if (!e || !i) return t ? "cover" : "contain";
            var o, r;
            return t ? (n / s > e / i ? (o = n + 2, r = Math.round(o * i / e)) : (r = s + 2, o = Math.round(r * e / i)), 
            o + "px " + r + "px") : n > e && s > i ? e + "px " + i + "px" : (n / s > e / i ? (r = s + 2, o = Math.round(r * e / i)) : (o = n + 2, 
            r = Math.round(o * i / e)), o + "px " + r + "px");
        },
        onCaptionBlur: function() {
            if ("viewer" != this.environment && this.model) {
                var t = this.$(".captions .caption").val(), e = _.clone(this.model.get("pictures")), i = _.findWhere(e, {
                    id: this.$(".captions .caption").attr("data-id")
                });
                if (i && i.text != t) {
                    var n = e.indexOf(i);
                    e[n] = _.extend({}, i, {
                        text: t
                    }), this.model.save({
                        pictures: e
                    }, {
                        silent: !0,
                        toHistory: !0
                    }), this.block.workspace.trigger("redraw");
                }
            }
        },
        recalcCounters: function(t, e) {
            if ("theme_captions" == t.current_theme && t.theme_data.counters) {
                var i = t.pictures || [], n = e ? e.w : t.w, s = this.COUNTER_WIDTH * i.length, o = Math.floor(n / this.COUNTER_WIDTH) * this.COUNTER_WIDTH, r = Math.min(s, o), a = Math.floor((n - r) / 2);
                this.$(".counters .scroll-wrapper").css({
                    left: a,
                    width: r
                }), this.$(".counters .items").css({
                    width: s
                }), this.counters_scroll.recalc();
            }
        },
        scrollThumbnailsPrev: function() {
            var t = this.$(".thumbnails .items-wrapper").scrollLeft() - Math.floor(this.$(".thumbnails .items-wrapper").width() / 2);
            this.$(".thumbnails .items-wrapper").stop().animate({
                scrollLeft: t
            }, 400);
        },
        scrollThumbnailsNext: function() {
            var t = this.$(".thumbnails .items-wrapper").scrollLeft() + Math.floor(this.$(".thumbnails .items-wrapper").width() / 2);
            this.$(".thumbnails .items-wrapper").stop().animate({
                scrollLeft: t
            }, 400);
        },
        recalcThumbnails: function(t, e) {
            if ("theme_classic" == t.current_theme && t.theme_data.thumbnails) {
                var i = t.pictures || [], n = e ? e.w : t.w, s = i.length * (this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING) - this.THUMBNAIL_PADDING, o = Math.min(s, n - this.THUMBNAILS_PADDING), r = Math.floor((n - o) / 2);
                this.$(".thumbnails .scroll-wrapper").css({
                    left: r,
                    width: o
                }), this.$(".thumbnails .items").css({
                    width: s
                }), this.thumbnails_scroll && this.thumbnails_scroll.recalc();
            }
        },
        onImageClick: function(t) {
            if ("constructor" != this.environment && !Modernizr.touch) {
                var e = this.$(".images");
                t && t.stopPropagation(), t.pageX < e.offset().left + e.width() / 2 ? this.prevImage() : this.nextImage();
            }
        },
        prevImage: function(t) {
            if (this.currentImageID) {
                var e = this.$('.images .images-wrapper .image[data-id="' + this.currentImageID + '"]');
                if (e.length) {
                    var i = e.prev();
                    i.length || (i = this.$(".images .images-wrapper .image:last")), this.moveToImage(i.attr("data-id"), !0, "switch-to-image"), 
                    t && t.stopPropagation();
                }
            }
        },
        nextImage: function(t) {
            if (this.currentImageID) {
                var e = this.$('.images .images-wrapper .image[data-id="' + this.currentImageID + '"]');
                if (e.length) {
                    var i = e.next();
                    i.length || (i = this.$(".images .images-wrapper .image:first")), this.moveToImage(i.attr("data-id"), !0, "switch-to-image"), 
                    t && t.stopPropagation();
                }
            }
        },
        thumbnailClick: function(t) {
            this.moveToImage($(t.currentTarget).attr("data-id"), !0, "switch-to-image"), t.stopPropagation();
        },
        counterClick: function(t) {
            this.moveToImage($(t.currentTarget).attr("data-id"), !0, "switch-to-image"), t.stopPropagation();
        },
        moveToImage: function(i, n, s) {
            if (i && !this.swipeAnimating) {
                var o = this.$('.images .images-wrapper .image[data-id="' + i + '"]');
                if (o.length) {
                    var r = -o.position().left, a = this.$(".images .images-wrapper");
                    clearTimeout(this.restoreTransitionTimeout), a.toggleClass("enable-transitions", n), t.utils.applyTransform(a, "translate3d(" + r + "px, 0, 0)"), 
                    n || (this.restoreTransitionTimeout = setTimeout(function() {
                        a.addClass("enable-transitions");
                    }, 50)), this.$(".images .bottom-arrows .counters-text .counters-text-current").html(o.index() + 1), 
                    this.currentImageID = i, this.trigger("currentImageChanged", i, n, s);
                    var l = this.$('.counters .counter[data-id="' + i + '"]');
                    this.$(".counters .counter").removeClass("active"), l.addClass("active");
                    var r = l.position().left, c = this.$(".counters .items-wrapper").width(), h = e;
                    r + 2 * this.COUNTER_WIDTH - this.$(".counters .items-wrapper").scrollLeft() > c ? h = r + 2 * this.COUNTER_WIDTH - c : 0 > r - this.COUNTER_WIDTH - this.$(".counters .items-wrapper").scrollLeft() && (h = r - this.COUNTER_WIDTH), 
                    h != e && (n ? this.$(".counters .items-wrapper").stop().animate({
                        scrollLeft: h
                    }, 200) : this.$(".counters .items-wrapper").scrollLeft(h));
                    var u = this.$('.thumbnails .thumb[data-id="' + i + '"]');
                    this.$(".thumbnails .thumb").removeClass("active"), u.addClass("active");
                    var r = u.position().left, c = this.$(".thumbnails .items-wrapper").width(), h = e;
                    if (r + 2 * (this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING) - this.THUMBNAIL_PADDING / 2 - this.$(".thumbnails .items-wrapper").scrollLeft() > c ? h = r + 2 * (this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING) - this.THUMBNAIL_PADDING / 2 - c : c > 2 * (this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING) && 0 > r - this.THUMBNAIL_WIDTH - this.THUMBNAIL_PADDING / 2 - this.$(".thumbnails .items-wrapper").scrollLeft() && (h = r - this.THUMBNAIL_WIDTH - this.THUMBNAIL_PADDING / 2), 
                    h != e && (n ? this.$(".thumbnails .items-wrapper").stop().animate({
                        scrollLeft: h
                    }, 200) : this.$(".thumbnails .items-wrapper").scrollLeft(h)), this.model && "constructor" == this.environment) {
                        var p = this.model.get("pictures"), d = _.findWhere(p, {
                            id: this.currentImageID
                        });
                        d ? this.$(".captions .caption").val(d.text).attr("data-id", this.currentImageID) : this.$(".captions .caption").val("").attr("data-id", "");
                    } else "theme_captions" == this.params.current_theme && "viewer" == this.environment && (n ? this.$('.captions .caption-wrapper[data-id="' + this.currentImageID + '"]').stop().fadeIn(200).siblings().stop().fadeOut(200) : (this.$(".captions .caption-wrapper").stop().css({
                        display: "none"
                    }), this.$('.captions .caption-wrapper[data-id="' + this.currentImageID + '"]').stop().css({
                        display: "block"
                    })));
                    this.preloadImages(), this.preloadThumbImages();
                }
            }
        },
        preloadImages: function() {
            function t(t) {
                t.attr("data-src") && (s.preloadImagesList.push({
                    url: t.attr("data-src")
                }), t.css({
                    "background-image": 'url("' + t.attr("data-src") + '")'
                }).removeAttr("data-src"));
            }
            if ("viewer" == this.environment) {
                var e = this.$('.images .images-wrapper .image[data-id="' + this.currentImageID + '"]');
                if (e.length) {
                    var i = e.prev();
                    i.length || (i = this.$(".images .images-wrapper .image:last"));
                    var n = e.next();
                    n.length || (n = this.$(".images .images-wrapper .image:first"));
                    var s = this;
                    t(e), t(i), t(n);
                }
            }
        },
        preloadThumbImages: function() {
            if ("viewer" == this.environment && "theme_classic" == this.params.current_theme && this.params.theme_data.thumbnails) {
                var t = this.$(".thumbnails .scroll-wrapper").width(), e = this.$(".thumbnails .items-wrapper").scrollLeft();
                this.$(".thumbnails .items-wrapper .thumb").each(_.bind(function(i, n) {
                    var s = $(n), o = s.attr("data-src");
                    if (o) {
                        var r = i * this.THUMBNAIL_WIDTH - this.THUMBNAIL_PADDING / 2, a = this.THUMBNAIL_WIDTH + this.THUMBNAIL_PADDING;
                        r - e > t + a || 0 - a > r + a - e || (this.preloadImagesList.push({
                            url: s.attr("data-src")
                        }), s.css({
                            "background-image": 'url("' + s.attr("data-src") + '")'
                        }).removeAttr("data-src"));
                    }
                }, this));
            }
        },
        transformText: function(e) {
            return e = e || "", e = e.replace(/\&/gim, "&amp;"), e = e.replace(/\</gim, "&lt;"), e = e.replace(/\>/gim, "&gt;"), 
            e = e.replace(/\n/gim, "<br/>"), e = e.replace(/\s\s/gim, "&nbsp; "), e = t.utils.scanForURIs(e);
        },
        updateCurrentImageID: function(t) {
            if (!t.pictures || !t.pictures.length) return this.currentImageID = e, e;
            if (this.currentImageID) {
                var i = _.findWhere(t.pictures, {
                    id: this.currentImageID
                });
                this.currentImageID = i ? i.id : this.getFirstPictureID(t);
            } else this.currentImageID = this.getFirstPictureID(t);
        },
        getFirstPictureID: function(t) {
            var e = _.sortBy(t.pictures, "num");
            return e[0].id;
        },
        toggleFullscreen: function(t) {
            "constructor" != this.environment && (this.isFullscreenMode ? this.leaveFullscreen() : this.enterFullscreen(), 
            t.stopPropagation());
        },
        enterFullscreen: function() {
            "constructor" != this.environment && (this.isFullscreenMode || (this.$parentBeforeFullscreen = this.$el.parent(), 
            $(".constructor .widgetbar").addClass("hidden"), this.$el.addClass("fullscreen-mode"), this.$el.appendTo("body").css("z-index", 999), 
            $(window).on("resize", this.onFullscreenResize), $("body").on("keyup", this.onFullscreenKeyUp), _.defer(function() {
                t.router ? t.router.shortcuts_disabled = !0 : t.magrouter.shortcuts_disabled = !0;
            }), this.onFullscreenResize(), $('<input type="text"/>').appendTo("body").focus().remove(), this.isFullscreenMode = !0));
        },
        onFullscreenKeyUp: function(t) {
            t.keyCode == $.keycodes.left && this.prevImage(), t.keyCode == $.keycodes.right && this.nextImage(), 
            t.keyCode == $.keycodes.esc && this.leaveFullscreen();
        },
        onFullscreenResize: function() {
            var t = this.$el.width(), e = this.$el.height();
            if ("theme_classic" == this.params.current_theme) var i = e - (this.params.theme_data.thumbnails ? this.THUMBNAILS_HEIGHT : 0);
            if ("theme_captions" == this.params.current_theme) var i = e - this.params.captions_h - (this.params.theme_data.counters ? this.COUNTERS_HEIGHT : 0);
            this.applyVisualState(this.params, {
                w: t,
                h: e,
                images_h: i,
                captions_h: this.params.captions_h
            });
        },
        leaveFullscreen: function() {
            "constructor" != this.environment && this.isFullscreenMode && (this.$el.appendTo(this.$parentBeforeFullscreen).css("z-index", "auto"), 
            $(window).off("resize", this.onFullscreenResize), this.$el.removeClass("fullscreen-mode"), $(".constructor .widgetbar").removeClass("hidden"), 
            $("body").off("keyup", this.onFullscreenKeyUp), _.defer(function() {
                t.router ? t.router.shortcuts_disabled = !1 : t.magrouter.shortcuts_disabled = !1;
            }), this.applyVisualState(this.params), this.isFullscreenMode = !1);
        },
        destroy: function() {
            this.leaveFullscreen(), this.$el && this.$el.remove();
        },
        onSwipeStart: function(t) {
            if (t = t.originalEvent, this.swipeAnimating) return t.stopPropagation(), t.preventDefault(), e;
            var i = this.$('.images .images-wrapper .image[data-id="' + this.currentImageID + '"]');
            i.length && (this.iniTouch || (this.iniTouch = {
                x: t.pageX,
                y: t.pageY
            }), this.iniTouch.initialX = i.position().left, this.iniTouch.shiftStep = i.width(), this.iniTouch.maxSwipeShift = this.$(".images .images-wrapper").width() - this.iniTouch.shiftStep, 
            this.scrolling && delete this.scrolling, this.$(".images .images-wrapper").removeClass("enable-transitions"), 
            $("body").on("touchmove", this.onSwipe), $("body").on("touchend", this.onSwipeEnd));
        },
        onSwipe: function(i) {
            if (i = i.originalEvent, this.iniTouch) {
                var n = {
                    x: i.pageX,
                    y: i.pageY
                }, s = this.iniTouch.x - n.x, o = this.iniTouch.y - n.y;
                if (!this.swipingX && !this.scrolling) {
                    var r = Math.abs(s), a = Math.abs(o);
                    if (this.swipeStartDistance > r && this.scrollStartDistance > a) return;
                    return r > a ? (this.swipingX = !0, i.stopPropagation(), i.preventDefault()) : this.scrolling = !0, 
                    e;
                }
                return this.swipingX ? (i.stopPropagation(), i.preventDefault(), this.swipeShift = s, -this.iniTouch.initialX - this.swipeShift > 0 && (this.swipeShift = -this.iniTouch.initialX - Math.sqrt(-this.iniTouch.initialX - this.swipeShift)), 
                this.iniTouch.initialX + this.swipeShift > this.iniTouch.maxSwipeShift && (this.swipeShift = this.iniTouch.maxSwipeShift - this.iniTouch.initialX + Math.sqrt(this.iniTouch.initialX + this.swipeShift - this.iniTouch.maxSwipeShift)), 
                t.utils.applyTransform(this.$(".images .images-wrapper"), "translate3d(" + (-this.iniTouch.initialX - this.swipeShift) + "px, 0, 0)"), 
                e) : e;
            }
        },
        onSwipeEnd: function(e) {
            if ($("body").off("touchmove", this.onSwipe), $("body").off("touchend", this.onSwipeEnd), e = e.originalEvent, 
            this.$(".images .images-wrapper").addClass("enable-transitions"), this.swipingX) {
                var i = 0;
                this.swipeShift > this.swipeDistance ? i++ : this.swipeShift < -this.swipeDistance && i--;
                var n = -this.iniTouch.initialX - i * this.iniTouch.shiftStep;
                this.swipeAnimating = !0, t.utils.applyTransform(this.$(".images .images-wrapper"), "translate3d(" + n + "px, 0, 0)"), 
                setTimeout(_.bind(function() {
                    this.swipeAnimating = !1;
                    var t = this.$('.images .images-wrapper .image[data-id="' + this.currentImageID + '"]');
                    0 > i && (t = t.prev()), i > 0 && (t = t.next()), t.length || (t = this.$('.images .images-wrapper .image[data-id="' + this.currentImageID + '"]')), 
                    this.moveToImage(t.attr("data-id"), !1, "switch-to-image");
                }, this), 450);
            }
            delete this.iniTouch, delete this.swipingX, delete this.swipeShift;
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.widgets.text = t.classes.Widget.extend({
        tellOnLoad: !0,
        render: function() {
            this.makeBox().addClass("text"), this.bg_color = this.bg_color == e ? "ffffff" : this.bg_color, this.bg_opacity = this.bg_opacity == e ? 0 : this.bg_opacity;
            var i = [ parseInt(this.bg_color.substring(0, 2), 16), parseInt(this.bg_color.substring(2, 4), 16), parseInt(this.bg_color.substring(4, 6), 16) ];
            this.bg = this.bg_opacity > .99 ? "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : "rgba(" + i[0] + "," + i[1] + "," + i[2] + ", " + this.bg_opacity + ")";
            var n = _.template($("#template-widget-text").text()), s = $(n(this));
            this.$el.append(s), _.bindAll(this), this.$el.on("mouseenter", "a", this.onLinkMouseEnter), this.$el.on("mouseleave", "a", this.onLinkMouseLeave);
            var o = this;
            this.$el.find("a").each(function() {
                var t = $(this), e = t.attr("data-pid");
                if (e) {
                    var i = o.page.mag.getPageNum(e);
                    i ? t.attr("href", "javascript:void(0)").click(function() {
                        o.page.mag.router.go(i);
                    }) : t.removeAttr("href");
                }
            }), this.onZoom(), this.rendered = !0, t.screenshot ? this.waitForUsedFontsLoad() : this.trigger("load");
        },
        waitForUsedFontsLoad: function() {
            var t = {}, e = [ "arial", "courier new", "georgia", "times new roman", "trebuchet ms", "verdana", "tahoma" ];
            this.$el.find("*").each(function() {
                var i = $(this).css("font-family"), n = $(this).css("font-style"), s = $(this).css("font-weight");
                i && n && s && (i += "", n += "", s += "", i = i.replace(/\'|\"/gi, ""), n = "italic" == n ? "italic" : "", 
                "normal" == s && (s = "400"), "bold" == s && (s = "700"), -1 == _.indexOf(e, i.toLowerCase()) && (t[i] || (t[i] = []), 
                t[i].push(s + n)));
            });
            var i = [];
            _.each(t, function(t, e) {
                var n = e + ":" + _.uniq(t).join(",");
                i.push(n);
            }), this.page.addFontsToLoad(i, _.bind(function() {
                this.trigger("load");
            }, this));
        },
        onLinkMouseEnter: function(t) {
            var e = $(t.currentTarget).attr("data-uuid"), i = this.$el.find("a[data-uuid='" + e + "']");
            i.addClass("hovered");
        },
        onLinkMouseLeave: function(t) {
            var e = $(t.currentTarget).attr("data-uuid"), i = this.$el.find("a[data-uuid='" + e + "']");
            i.removeClass("hovered");
        }
    });
}(RM), function(t) {
    "use strict";
    t.widgets.picture = t.classes.Widget.extend({
        tellOnLoad: !0,
        render: function() {
            this.makeBox().addClass("widget-picture"), this.rendered = !0, this.onZoom();
            var t = this.getPictureUrl();
            this.$el.html(""), $("<img/>").appendTo(this.$el).load(_.bind(function() {
                this.$el.find("img").attr("url", t), this.trigger("load");
            }, this)).attr("src", t), this.checkLink();
        },
        isValid: function() {
            return !!this.getPictureUrl();
        },
        getPictureUrl: function() {
            if (!this.picture) return "";
            var t = Modernizr.retina ? this.picture.final2xUrl : this.picture.finalUrl;
            return t || this.picture.effectUrl || this.picture.url;
        },
        checkLink: function() {
            if (this.clickLink) {
                var t = /^http(s?)\:\/\//i.test(this.clickLink);
                t || (this.clickLink = "/" + this.page.mag.getPageUri(this.clickLink));
                var e = t ? "" : "maglink";
                this.$el.wrap('<a class="' + e + '" href="' + this.clickLink + '" target="_blank">');
            }
        }
    });
}(RM), function(t) {
    "use strict";
    t.widgets.background = t.classes.Widget.extend({
        tellOnLoad: !0,
        initialize: function(t, e) {
            this.widgetInit(t, e), this.template = _.template($("#template-widget-back").text()), _.bindAll(this);
        },
        render: function() {
            var e = this.template({
                data: this
            });
            if (this.$el = $(e).appendTo(this.page.$fixedBgContainer), this.$picture = this.$(".widget_bg_picture"), 
            this.$video = this.$(".video"), this.picture && "picture" == this.selectedType) var i = this.picture.finalUrl || this.picture.effectUrl || this.picture.url, n = $("<img/>").load(_.bind(function() {
                this.$picture.css({
                    "background-image": "url(" + i + ")",
                    opacity: this.opacity || 1
                }), this.trigger("load"), setTimeout(function() {
                    n.remove();
                }, 100);
            }, this)).attr("src", i); else this.video && "video" == this.selectedType ? (this.video.id = this.id, 
            this.video.mute = this.mute, this.video.loop = this.loop, this.video.controls = !1, this.videoWidget = new t.widgets.video(this.video, this.page, this.$video.find(".video-container")), 
            this.videoWidget.on("load", _.bind(function() {
                this.trigger("load");
            }, this)), this.videoWidget.render(), (t.screenshot || Modernizr.ismobile) && this.$video.show()) : this.trigger("load");
            this.rendered = !0;
        },
        start: function() {
            "video" != this.selectedType || t.screenshot || (this.$video.show(), this.videoWidget && this.videoWidget.start(), 
            setTimeout(_.bind(function() {
                this.$el.addClass("translate3d");
            }, this), 100), setTimeout(_.bind(function() {
                this.$el.removeClass("translate3d");
            }, this), 200)), this.started = !0;
        },
        stop: function() {
            this.started && "video" == this.selectedType && this.videoWidget && this.videoWidget.stop();
        },
        unload: function() {
            this.$picture.css("background-image", "none"), t.classes.Widget.prototype.unload.apply(this, arguments), 
            "video" == this.selectedType && this.videoWidget && this.videoWidget.unload();
        },
        onZoom: function() {}
    });
}(RM), function(t) {
    "use strict";
    t.widgets.slideshow = t.classes.Widget.extend({
        tellOnLoad: !0,
        initialize: function(t, e) {
            _.bindAll(this), this.widgetInit(_.clone(t), e);
        },
        render: function() {
            this.makeBox().addClass("widget-slideshow"), this.player = new t.classes.SlideshowPlayer(this, this.$el, "viewer"), 
            this.rendered = !0, this.player.on("ready", _.bind(function() {
                setTimeout(_.bind(function() {
                    this.trigger("load");
                }, this), 100);
            }, this));
        },
        isValid: function() {
            return this.pictures && this.pictures.length;
        },
        unload: function() {
            this.unloaded = !0, this.destroy();
        },
        destroy: function() {
            this.rendered && (this.player.off(), this.player && this.player.destroy && this.player.destroy(), this.player = null, 
            this.rendered = !1);
        }
    });
}(RM), function(t) {
    "use strict";
    t.widgets.twitter = t.classes.Widget.extend({
        tellOnLoad: !0,
        CONTENT_WAIT_TICK: 100,
        CONTENT_WAIT_MAX_TICKS: 20,
        render: function() {
            var t, e, i;
            this.makeBox().addClass("widget-twitter"), this.rendered = !0, this.onZoom(), this.current_type && (e = this[this.current_type], 
            "mag" === e.use_own_url ? e.url = this.getMagUrl() : "page" !== e.use_own_url && e.url || (e.url = this.getPageUrl(), 
            e.text = this.getPageTitle()), t = _.template($("#template-constructor-block-" + this.current_type).text()), 
            i = t(e), this.$el.html(i), "type_timeline" === this.current_type && this.$el.find("a").attr({
                width: this.w,
                height: this.h
            }), _([ "type_timeline", "type_embed" ]).contains(this.current_type) ? this.waitForTwitterContent() : this.trigger("load"));
        },
        getMagUrl: function() {
            return this.page.mag && window.location.protocol + "//" + window.location.hostname + "/" + this.page.mag.num_id + "/";
        },
        getPageUrl: function() {
            return this.page.mag && window.location.protocol + "//" + window.location.hostname + "/" + "p" + this.page.num_id + "/";
        },
        getPageTitle: function() {
            return this.page.title;
        },
        waitForTwitterContent: function() {
            var t, e, i, n = 0, s = !1, o = {
                type_timeline: ".root.timeline",
                type_embed: "blockquote.tweet"
            };
            clearInterval(t), t = setInterval(_.bind(function() {
                n++, e = this.$el.find("iframe"), 1 == e.length && (i = o[this.current_type], s = e.contents().find(i).length > 0), 
                (s || n > this.CONTENT_WAIT_MAX_TICKS) && ("type_embed" == this.current_type && e.css({
                    margin: 0,
                    "max-width": "100%"
                }), clearInterval(t), this.trigger("load"));
            }, this), this.CONTENT_WAIT_TICK);
        }
    }), t.widgets.twitter.init = function() {
        $('body > script[src^="//syndication.twimg.com/tweets.json"]').remove(), this._widgetXHR = $.ajax({
            url: "http://platform.twitter.com/widgets.js",
            dataType: "script",
            cache: !1,
            success: function() {}
        });
    };
}(RM), function(t) {
    "use strict";
    t.widgets.facebook = t.classes.Widget.extend({
        tellOnLoad: !0,
        render: function() {
            var t, e, i, n = this, s = [ "type_like_button", "type_like_box", "type_comments" ];
            this.makeBox().addClass("widget-facebook"), this.rendered = !0, this.onZoom(), this.current_type && (e = this[this.current_type], 
            e.w = this.w, e.h = this.h, "mag" === e.use_own_url ? e.url = this.getMagUrl() : "page" !== e.use_own_url && e.url || (e.url = this.getPageUrl()), 
            t = _.template($("#template-constructor-block-" + this.current_type).text()), i = t(e), this.$el.html(i), 
            this.$el.removeClass(s.join(" ")), this.$el.addClass(this.current_type), _.delay(function() {
                n.$el.addClass("animate");
            }, 300), "type_comments" === this.current_type ? this.$el.css({
                "overflow-x": "hidden",
                "overflow-y": "auto"
            }) : "type_like_button" !== this.current_type && this.$el.css({
                overflow: "hidden"
            }), "type_like_button" === this.current_type && this.$el.css("z-index", 999), this.initFacebook(function() {
                window.FB.XFBML.parse(n.$el.get(0), function() {
                    _.delay(function() {
                        n.trigger("load"), "type_like_button" === n.current_type && (n.iframe_w = n.$("iframe").width(), n.iframe_h = n.$("iframe").height(), 
                        $(window).on("message", n.onWindowMessage));
                    }, 500);
                });
            }));
        },
        onWindowMessage: function(t) {
            /type=resize\.iframe/.test(t.originalEvent.data) && (this.recalcPosition(), console.log("e.originalEvent.data : ", t.originalEvent.data));
        },
        recalcPosition: function() {
            var t, e, i, n, s, o, r, a, l, c, h = 24;
            this.$el.css({
                left: this.x,
                top: this.y
            }), t = this.$("iframe").width(), e = this.$("iframe").height(), i = this.$("iframe").offset().left, 
            n = this.$("iframe").offset().top, s = $(document).width(), o = $(document).height(), r = $("page-content-container").css("left"), 
            a = $("page-content-container").css("top"), l = (i + t > s || 0 > i) && t !== this.iframe_w ? i + t - s : 0, 
            c = (n + e > o || 0 > n) && e !== this.iframe_h ? n + e - o : 0, l && (l = 0 > i ? i - h : l + h), c && (c = 0 > n ? n - h : c + h), 
            this.$el.css({
                left: this.x - l,
                top: this.y - c
            }), this.iframe_w == t && this.iframe_h == e && this.$("iframe").css("left", 0);
        },
        initFacebook: function(e) {
            var i, n, s = this, o = 100, r = 100, a = 0, l = t.constants.FACEBOOK_APP_ID || "";
            if ("function" == typeof e) {
                if (this.isFacebookInited) return e();
                i = $("#fb-root"), i.length || $("body").prepend($('<div id="fb-root"></div>')), function(t, e, i) {
                    var n, s = t.getElementsByTagName(e)[0];
                    t.getElementById(i) || (n = t.createElement(e), n.id = i, n.src = "//connect.facebook.net/en_US/all.js#xfbml=0&appId=" + l, 
                    s.parentNode.insertBefore(n, s));
                }(document, "script", "facebook-jssdk"), clearInterval(n), n = setInterval(function() {
                    return a++, window.FB && window.FB.XFBML && window.FB.XFBML.parse ? (clearInterval(n), s.isFacebookInited = !0, 
                    e()) : (a > o && clearInterval(n), undefined);
                }, r);
            }
        },
        getMagUrl: function() {
            return this.page.mag && window.location.protocol + "//" + window.location.hostname + "/" + this.page.mag.num_id + "/";
        },
        getPageUrl: function() {
            return this.page.mag && window.location.protocol + "//" + window.location.hostname + "/" + "p" + this.page.num_id + "/";
        }
    });
}(RM);

var youTubeApiIsReady = !1, ytQueue = [];

if (window.onYouTubeIframeAPIReady = function() {
    youTubeApiIsReady = !0, _.each(ytQueue, function(t) {
        _.isFunction(t) && t();
    });
}, function(t) {
    "use strict";
    var e = function(t, e) {
        var i = _.bind(t, e);
        return youTubeApiIsReady ? i() : (ytQueue.push(i), undefined);
    }, i = function(t) {
        e(function() {
            this.yt = new YT.Player(t.id);
        }, this);
    };
    i.prototype = {
        on: function(t, i, n) {
            var s = _.bind(i, n || window), o = {
                finish: 0,
                play: 1,
                pause: 2
            };
            return "ready" == t ? (e(function() {
                this.yt.addEventListener("onReady", function(e) {
                    o[t] == e.data && s();
                });
            }, this), undefined) : (e(function() {
                this.yt.addEventListener("onStateChange", function(e) {
                    o[t] == e.data && s();
                });
            }, this), undefined);
        },
        mute: function() {
            e(function() {
                this.yt.mute();
            }, this);
        },
        pause: function() {
            e(function() {
                this.yt && this.yt.pauseVideo && this.yt.pauseVideo();
            }, this);
        },
        play: function() {
            e(function() {
                this.yt.playVideo();
            }, this);
        },
        rewind: function(t) {
            e(function() {
                this.yt.seekTo(t || 0);
            }, this);
        },
        loop: function() {
            this.rewind(.01);
        },
        getDuration: function() {
            return this.duration || (this.duration = this.yt.getDuration()), this.duration;
        },
        checkLoop: function() {
            .25 > this.getDuration() - this.yt.getCurrentTime() && this.loop();
        }
    };
    var n = function(t) {
        _.bindAll(this), this.id = t.id;
    };
    n.prototype = {
        on: function(t, e) {
            $f(this.id).addEvent(t, e);
        },
        mute: function() {
            $f(this.id).api("setVolume", 0);
        },
        pause: function() {
            $f(this.id).api("pause");
        },
        play: function() {
            $f(this.id).api("play");
        },
        rewind: function() {
            $f(this.id).api("seekTo", 0);
        },
        loop: function() {
            this.play();
        },
        setColor: function(t) {
            $f(this.id).api("setColor", t);
        },
        checkLoop: function() {},
        destroy: function() {
            var t = $f(this.id);
            t && (t.removeEvent("ready"), t.removeEvent("play"), t.removeEvent("finish"), t.removeEvent("pause"));
        }
    };
    var s = {
        Vimeo: _.template('<iframe src="http://player.vimeo.com/video/<%=video_id%>?wmode=opaque&api=1&player_id=video_<%=id%><%=(!real)?"_c":""%>&title=<%=info?1:0%>&byline=<%=info?1:0%>&portrait=<%=info?1:0%>&color=<%=color%>" id="video_<%=id%><%=(!real)?"_c":""%>" width="<%=w%>" height="<%=h%>" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'),
        YouTube: _.template('<iframe <% if (real) {%>id="yt_<%=video_id%>"<%}%> src="http://www.youtube.com/embed/<%=video_id%>?wmode=opaque&enablejsapi=1&playlist=&autohide=1&loop=<%=(loop)?1:0%>&showinfo=<%=info?1:0%>&theme=<%=theme%>&controls=<%=controls? 1: 0%>" width="<%=w%>" height="<%=h%>" frameborder="0" allowfullscreen></iframe>')
    };
    t.widgets.video = t.classes.Widget.extend({
        RESTART_TIMEOUT: 5e3,
        tellOnLoad: !0,
        initialize: function(t, e, i) {
            _.bindAll(this), this.widgetInit(_.clone(t), e), this.$container = i;
        },
        render: function() {
            this.$container ? this.$el = this.$container : this.makeBox().addClass("video"), this.setPosterInsteadOfVideo();
        },
        setPosterInsteadOfVideo: function() {
            var t = this.thumbnail_url, e = $("<img/>").load(_.bind(function() {
                this.$el.css({
                    background: "black url(" + t + ") center center no-repeat",
                    "background-size": "cover"
                }), setTimeout(_.bind(function() {
                    this.trigger("load"), e.remove();
                }, this), 100);
            }, this)).attr("src", t);
            t || this.trigger("load");
        },
        isValid: function() {
            return this.video_id && this.provider_name;
        },
        createPlayer: function(t, e, s) {
            return "vimeo" == t.toLowerCase() ? new n(e[0], s) : "youtube" == t.toLowerCase() ? new i(e[0], s) : null;
        },
        getEmbed: function(t) {
            return t = t || this, _.defaults(t, {
                real: !0,
                w: 640,
                h: 320,
                theme: "dark",
                color: "3ab9ff",
                info: !1,
                controls: !0,
                id: _.uniqueId("video_")
            }), t.video_id ? s[t.provider_name](t) : null;
        },
        onReady: function() {
            this.rendered = !0, setTimeout(_.bind(function() {
                this.trigger("load");
            }, this), 600), this.player && (this.player.on("finish", this.loopPlayback), this.player.on("pause", this.onPause), 
            this.player.on("play", this.onPlay), Modernizr.isMobile || "vimeo" == this.provider_name.toLowerCase() && this.player.on("playProgress", this.onProgress), 
            this.playOnStart(), this.player.setColor && this.player.setColor(this.color));
        },
        start: function() {
            this.rendered || t.screenshot || (this.$el.html(this.getEmbed()), this.$iframe = this.$el.find("iframe"), 
            this.$iframe.attr("id", "video_" + this.id), this.player = this.createPlayer(this.provider_name, this.$iframe), 
            this.player && this.player.on("ready", this.onReady)), this.playOnStart();
        },
        playOnStart: function() {
            this.player && this.autoplay && this.rendered && this.page.active && this.player.play();
        },
        onPlay: function() {
            clearInterval(this.loopInterval), this.loop && (this.loopInterval = setInterval(_.bind(function() {
                this.player.checkLoop();
            }, this), 250)), this.mute && this.player.mute();
        },
        onPause: function() {
            clearInterval(this.loopInterval);
        },
        onProgress: function(t) {
            0 == parseFloat(t.seconds) ? this.restartTimeout || (this.restartTimeout = setTimeout(_.bind(function() {
                this.attempts = 0, this.player.destroy(), this.destroy(), this.start(), delete this.restartTimeout;
            }, this), this.RESTART_TIMEOUT)) : (clearTimeout(this.restartTimeout), delete this.restartTimeout);
        },
        loopPlayback: function() {
            this.loop && this.player.loop && this.player.loop();
        },
        stop: function() {
            clearInterval(this.loopInterval), this.player && this.player.pause();
        },
        unload: function() {
            this.unloaded = !0, this.destroy();
        },
        destroy: function() {
            this.rendered && (this.player && this.player.destroy && this.player.destroy(), this.$iframe && this.$iframe.remove(), 
            this.rendered = !1);
        }
    });
}(RM), function(t) {
    "use strict";
    t.widgets.audio = t.classes.Widget.extend({
        tellOnLoad: !0,
        initialize: function(t, e) {
            _.bindAll(this), this.widgetInit(_.clone(t), e);
        },
        render: function() {
            this.makeBox().addClass("audio"), this.player = new t.classes.AudioPlayer(this, this.$el, this.onReady), 
            this.player.show();
        },
        isValid: function() {
            return this.parsed_url;
        },
        onReady: function() {
            this.rendered = !0, this.trigger("load"), this.playOnStart();
        },
        start: function() {
            this.playOnStart();
        },
        playOnStart: function() {
            !t.screenshot && this.player && this.autoplay && this.rendered && this.page.active && this.player.play();
        },
        stop: function() {
            this.player && this.player.pause();
        },
        unload: function() {
            this.unloaded = !0, this.destroy();
        },
        destroy: function() {
            this.rendered && (this.player && this.player.destroy && this.player.destroy(), this.rendered = !1);
        }
    });
}(RM), function(t) {
    "use strict";
    t.widgets.shape = t.classes.Widget.extend(t.classes.shapeSVG.prototype).extend({
        render: function() {
            this.makeBox().addClass("widget-shape"), this.rendered = !0, this.onZoom();
            var t = this, e = {
                id: t._id,
                get: function(e) {
                    return t[e];
                }
            }, i = this.generateShapeSVG("viewer", e, e.get("w"), e.get("h"));
            this.$el.html(i);
        }
    });
}(RM), !window.YT) var YT = {};

YT.Player || function() {
    var t = document.createElement("script");
    t.src = "https://s.ytimg.com/yts/jsbin/www-widgetapi-vflop0WbJ.js", t.async = !0;
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e);
}(), function(t) {
    "use strict";
    t.Model = Backbone.Model.extend({
        save: function(e, i, n) {
            var s, o = this;
            _.isObject(e) || null == e ? (s = e, n = i) : (s = {}, s[e] = i), n && n.patch && (n.dataType = "text", 
            n.parse = !1), n = n ? _.clone(n) : {};
            var r = Backbone.Model.prototype.save.apply(this, arguments);
            return r.error(function() {
                o.wasNotSaved = !0, t.router.raiseConnectionError();
            }), r.success(function() {
                o.wasNotSaved && o.trigger("re-saved"), o.wasNotSaved = !1;
            }), this.skipResponse && (r.skipResponse = !0), (n.toHistory || !this.isNew() && !n.silent && !n.skipHistory && t.history) && (this._firstAttributes && !_.isEqual(this._firstAttributes, this.attributes) && t.history.add(this, this._firstAttributes, n), 
            this._firstAttributes = null), t.router.mag && t.router.mag.set("changed", !0), r;
        },
        parse: function(t, e) {
            return e && e.xhr && e.xhr.skipResponse ? _.extend(t, this.toJSON()) : Backbone.Model.prototype.parse.apply(this, arguments);
        },
        set: function(t, e, i) {
            var n, s;
            _.isObject(t) || null == t ? (n = t, s = e) : (n = {}, n[t] = e, s = i), s = s || {}, s.skipHistory || this._firstAttributes && !_.isEmpty(this._firstAttributes) || s.silent && !s.toHistory || !this.id || (this._firstAttributes = _.cloneWithObjects(this.attributes));
            var o = Backbone.Model.prototype.set.apply(this, arguments);
            return s.first && (this._firstAttributes = _.cloneWithObjects(this.attributes)), o;
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.models.Mag = Backbone.Model.extend({
        idAttribute: "_id",
        urlRoot: "/api/mag/",
        PUBLISH_URL: "/api/publish/",
        UNPUBLISH_URL: "/api/unpublish/",
        page_templates: {},
        initialize: function() {
            _.bindAll(this), t.collections.Pages && (this.pages = new t.collections.Pages()), this.on("change:changed", function() {
                this.trigger("changed");
            }, this), this._super = Backbone.Model.prototype, this.on("error", function() {
                this._saveduser && this.set("user", this._saveduser), delete this._saveduser;
            }, this);
        },
        parse: function(t) {
            return this.has("changed") && delete t.changed, delete t.user, this._saveduser && (t.user = this._saveduser), 
            delete this._saveduser, t;
        },
        save: function() {
            this._saveduser = _.clone(this.get("user")), this.set("user", this._saveduser._id, {
                silent: !0
            });
            var t = this._super.save.apply(this, arguments);
            return this.set("changed", !0), t;
        },
        getPage: function(t) {
            return this.pages.get(t);
        },
        addPage: function(e, i) {
            e = e || {}, this._addBlock || (this._addBlock = !0, e.num = e.num || this.getMaxNum() + 1, e.mid = this.id, 
            $.ajax({
                type: "post",
                url: "/api/page/",
                data: e,
                success: _.bind(function(n) {
                    this._addBlock = !1;
                    var s = new t.models.Page(n);
                    if (e.template) {
                        var o = this.getPageTemplate(e.template);
                        s.specialScreenshot = o && o.screenshot;
                    }
                    this.onAdd(s), i && i(s);
                }, this),
                error: _.bind(function() {
                    this._addBlock = !1, alert("Seems there is a connection problem.");
                }, this)
            }));
        },
        onAdd: function(t) {
            this.pages.add(t);
            var e;
            e = _.clone(this.get("pids")), e.push(t.id), e = _(e).chain().uniq().compact().value(), this.set({
                pids: e
            });
        },
        getActivePages: function() {
            return this.pages.filter(function(t) {
                return _.include(this.get("pids"), t.id);
            }, this);
        },
        getTitle: function() {
            return this.get("title") || "Mag Title";
        },
        getMaxNum: function() {
            var t = _.max(_.map(this.getActivePages(), function(t) {
                return t.get("num");
            }));
            return (!t || 0 > t) && (t = 0), t;
        },
        loadFull: function(e) {
            var i = e.success;
            e.success = _.bind(function(e, n, s) {
                var o = _.clone(e);
                this.pages = new t.collections.Pages(o.pages), delete o.pages, this.set(o), i && i(e, n, s);
            }, this), $.ajax(_.extend(e, {
                url: "/api/magFullById/" + this.get("num_id"),
                dataType: "json"
            }));
        },
        getPageId: function(t, e) {
            var i = e && e.onlyActive ? _(this.getActivePages()) : this.pages, n = i.find(function(e) {
                return e.get("num") == t;
            });
            return n && n.id;
        },
        getPageNum: function(t) {
            var e = this.pages.find(function(e) {
                return e.get("_id") == t;
            });
            return e && e.get("num");
        },
        deletePage: function(t, i) {
            var n = _.reject(this.get("pids"), function(e) {
                return e === t.id;
            }, this);
            return _.isEmpty(n) ? !1 : (this._deleteXHR && this._deleteXHR.abort(), this._deleteXHR = this.save({
                pids: n
            }, {
                success: function() {
                    i && i();
                }
            }), e);
        },
        deleteMag: function(t) {
            $.ajax({
                type: "DELETE",
                url: "/api/mag/" + this.get("num_id"),
                success: function() {
                    "function" == typeof t && t();
                },
                error: function() {
                    console.log("Cannot delete :(");
                },
                context: this
            });
        },
        publish: function(t, i) {
            var n = {
                major: t || e,
                description: t ? i || e : e
            };
            $.ajax({
                type: "POST",
                url: this.PUBLISH_URL + this.get("num_id"),
                global: !1,
                data: n,
                success: _.bind(function(t) {
                    this.set(_.extend(this.parse(t), {
                        changed: !1
                    })), this.trigger("mag_state_changed");
                }, this),
                error: _.bind(function(t) {
                    this.trigger("mag_publish_error", t.responseJSON);
                }, this)
            });
        },
        unpublish: function() {
            $.ajax({
                type: "POST",
                url: this.UNPUBLISH_URL + this.get("num_id"),
                success: _.bind(function() {
                    this.set({
                        is_published: null,
                        published: null,
                        updated: null
                    }), this.trigger("mag_state_changed");
                }, this),
                error: _.bind(function() {
                    console.error(arguments);
                }, this)
            });
        },
        loadPageTemplates: function(t) {
            $.ajax({
                url: "/api/page_templates/",
                dataType: "json",
                success: _.bind(function(e) {
                    this.isTemplatesLoaded = !0, this.page_templates = e, t && t(e);
                }, this),
                error: _.bind(function() {
                    console.error("Error loading page templates"), this.isTemplatesLoaded = !1, t && t(response);
                }, this)
            });
        },
        getPageTemplate: function(t) {
            var i = null;
            return _.any(this.page_templates, function(n) {
                return _.any(n.templates, function(n) {
                    return n.num == t ? (i = n, !0) : e;
                });
            }), i;
        }
    });
}(RM), function(t, e) {
    "use strict";
    t.models.User = Backbone.Model.extend({
        idAttribute: "uri",
        url: "/api/me/",
        initialize: function() {
            _.bindAll(this);
        },
        auth: function(t, e) {
            $.ajax(_.extend(e, {
                type: "POST",
                url: this.url,
                data: t
            }));
        },
        store: function(t, e) {
            (!t.name || /^\s$/.test(t.name)) && (t.name = this.get("name")), t = this.changedAttributes(t), this.set(t), 
            this.validate(t) || $.ajax({
                type: "PUT",
                url: this.url,
                data: t,
                success: e && "function" == typeof e.success && e.success,
                error: e && "function" == typeof e.error && e.error
            });
        },
        deletePic: function() {
            var t = this;
            $.ajax({
                type: "DELETE",
                url: "/api/me/userpic/",
                success: function() {
                    t.set("pic", "");
                }
            });
        },
        validate: function(t) {
            return t.name !== e && _.isEmpty($.trim(t.name)) ? "Name yourself" : e;
        },
        getUserpic: function(t) {
            var e, i = this.get("pic");
            return Modernizr.retina && (t = 2 * t), t = 64 > t ? 64 : t, i ? (i = i.postfix(t), -1 == i.indexOf("/api/upload/") && (i = "/api/upload/" + i), 
            i) : (e = this.get("name").match(/^[a-z0-9]{1}/i), e ? "/img/stubs/avatar/" + e[0].toLowerCase() + ".gif" : "/img/stubs/avatar/" + t + ".gif");
        },
        getLink: function() {
            return "/" + this.get("uri");
        },
        getWebsiteButified: function() {
            var e, i = {
                link: "",
                label: ""
            };
            return this.get("website") && (e = t.utils.URLParts(this.get("website")), e.protocol = e.protocol || "http://", 
            i.link = e.protocol + e.hostname + e.path, i.label = e.hostname), i;
        },
        getTwitterButified: function() {
            var e, i = {
                link: "",
                nick: ""
            };
            return this.get("twitter") && (e = t.utils.URLParts(this.get("twitter")), e.protocol || e.path ? (e.protocol = e.protocol || "http://", 
            i.nick = e.path.split("/")[1]) : (e.protocol = "http://", i.nick = e.hostname, e.path = "/" + i.nick, 
            e.hostname = "twitter.com"), i.link = e.protocol + e.hostname + e.path), i;
        },
        getFacebookButified: function() {
            var e, i = {
                link: "",
                nick: ""
            };
            if (this.get("fb")) {
                e = t.utils.URLParts(this.get("fb"));
                try {
                    -1 != e.path.indexOf("profile.php") ? i.nick = "facebook" : "pages" == e.path.split("/")[1] ? i.nick = decodeURIComponent(e.path.split("/")[2]) || "" : e.protocol || e.path ? i.nick = e.path.split("/")[1].split("?")[0] || "" : (i.nick = e.hostname, 
                    e.hostname = "facebook.com", e.path = "/" + i.nick), e.protocol = e.protocol || "http://", i.link = e.protocol + e.hostname + e.path;
                } catch (n) {
                    console.log("Error parsing FB URL: ", n);
                }
            }
            return i;
        },
        toShortJSON: function() {
            return _.pick(this.attributes, "_id", "name", "desc", "isFollowed", "mags_count", "uri", "pic", "isMe");
        },
        follow: function(t, i) {
            var n = t.toShortJSON ? t.toShortJSON() : t, s = _(this.get("following")).chain().pluck("_id").contains(n._id).value();
            return s ? i && i.success && i.success() : (n.isFollowed = !0, this.set({
                following: _.union([ n ], this.get("following") || [])
            }), t.set && t.set({
                followers: _.union([ this.toShortJSON() ], t.get("followers") || []),
                isFollowed: !0
            }), this.trigger("toggleFollow", t), this._followingXHR = $.ajax(_.extend({
                type: "POST",
                url: "/api/follow/" + n._id
            }, i)), e);
        },
        unfollow: function(t, e) {
            var i = this.get("uri"), n = t.toShortJSON ? t.toShortJSON() : t;
            this.set({
                following: _.filter(this.get("following"), function(t) {
                    return t.uri != n.uri;
                })
            }), t.set && t.set({
                isFollowed: !1,
                followers: _.filter(t.get("followers"), function(t) {
                    return t.uri != i;
                })
            }), n.isFollowed = !1, this.trigger("toggleFollow", t), this._followingXHR = $.ajax(_.extend({
                type: "POST",
                url: "/api/unfollow/" + n._id
            }, e));
        },
        toggleFollow: function(t, i) {
            return t._id || t.get("_id") ? (t.isFollowed || t.get && t.get("isFollowed") ? this.unfollow(t, i) : this.follow(t, i), 
            e) : i && i.error && i.error("Following error");
        },
        markRead: function(t) {
            this.set("unread_mags", _.without(this.get("unread_mags"), "" + t)), this.set("unread", this.get("unread_mags").length);
        }
    }), t.collections.Users = Backbone.Collection.extend({
        model: t.models.User
    }), t.models.UsersLoader = function() {
        this.allUsers = new t.collections.Users(), this.userMags = {}, _.bindAll(this);
    }, t.models.UsersLoader.prototype = {
        LOAD_URL: "/api/readymags/user/",
        loadByUsername: function(t) {
            var e = this.allUsers.get(t.user_uri), i = _.bind(function(e) {
                this.load(e, t.is_me), t.success && t.success({
                    user: this.allUsers.get(e.user.uri),
                    mags: this.userMags[e.user.uri]
                });
            }, this);
            t.is_me && e ? t.success({
                user: e,
                mags: this.userMags[t.user_uri]
            }) : this.request(t.user_uri, {
                success: i,
                error: t.error
            });
        },
        load: function(e, i) {
            var n;
            e.user && e.mags && (n = e.user.uri, this.allUsers.remove(n), this.allUsers.add(e.user), this.userMags[n] = new t.collections.MagListData(e.mags, {
                parse: !0
            }), i && this.userMags[n].each(function(t) {
                t.user.set("isMe", !0);
            }));
        },
        request: function(t, e) {
            e = e || {}, this.abortLoading(), e.success || $.noop, this.loadingXHR = $.ajax(_.extend(e, {
                type: "GET",
                url: this.LOAD_URL + t
            }));
        },
        abortLoading: function() {
            this.loadingXHR && this.loadingXHR.abort && this.loadingXHR.abort();
        }
    }, $(function() {
        t.models.usersLoader = new t.models.UsersLoader();
        var e = window.ServerData.me;
        t.models.usersLoader.load(e, !0), t.models.usersLoader.me = e && e.user && e.user.uri ? t.models.usersLoader.allUsers.get(window.ServerData.me.user.uri) : !1;
    });
}(RM), function(t) {
    "use strict";
    t.models.UserMag = Backbone.Model.extend({
        idAttribute: "_id",
        url: function() {
            if (this.get("user") && this.get("uri")) {
                var t = this.get("user");
                _.isObject(t) && (t = t.get("uri"));
                var e = t + "/" + this.get("uri");
            } else var e = this.getId();
            return "/api/readymag/" + e;
        },
        LIKE_URL: "/api/likemag/",
        UNLIKE_URL: "/api/unlikemag/",
        LIKERS_URL: "/api/likers/",
        LIKERS_PORTION: 20,
        loadedMagLikers: 0,
        PAGES_URL: "/api/magpages/",
        PUBLISH_URL: "/api/publish/",
        UNPUBLISH_URL: "/api/unpublish/",
        parse: function(e) {
            return e.user && (this.user = new t.models.User(e.user), delete e.user), e.likes_count = e.likes_count || 0, 
            e.title = e.title || "Mag", e;
        },
        getPageId: function(t) {
            if (!this.get("pages")) return "";
            var e = _.find(this.get("pages"), function(e) {
                return e.num == t;
            });
            return e ? e._id : "";
        },
        getPageScreenshot: function(e, i, n) {
            e = t.utils.screenshotSize(e);
            var s;
            if (s = "cover" == i ? this.get("coverPid") : this.get("pages") ? this.getPageId(i) : this.get("pids") && this.get("pids")[i - 1], 
            !s) return "";
            var o = "/screenshot/" + e + "/" + this.getId() + "/" + s + "/";
            return n || !this.get("is_published") ? o += "edit/" + +new Date(this.get("last_changed")) : this.get("updated") && (o += +new Date(this.get("updated"))), 
            o;
        },
        getLink: function() {
            var t = this.get("uri") || this.getId();
            return "/" + this.user.get("uri") + "/" + t + "/";
        },
        getPageLink: function(t) {
            return this.getLink() + t + "/";
        },
        getMagInfoLink: function() {
            return this.getLink() + "info/";
        },
        getMagEditLink: function() {
            return "/edit/" + this.getId() + "/";
        },
        getMagSettingsLink: function() {
            return this.getMagEditLink() + "settings/";
        },
        getId: function() {
            return this.get("num_id");
        },
        getPagesCount: function() {
            return this.get("pages_count") || this.get("pages") && this.get("pages").length;
        },
        toggleLike: function(t) {
            if (!this.likeInProcess) {
                this.likeInProcess = !0;
                var e = _.pick(this.attributes, "likes_count", "isLiked");
                this.set({
                    isLiked: !this.get("isLiked"),
                    likes_count: this.get("isLiked") ? this.get("likes_count") - 1 : this.get("likes_count") + 1
                }), t(), $.ajax({
                    type: "POST",
                    url: this.get("isLiked") ? this.LIKE_URL + this.getId() : this.UNLIKE_URL + this.getId(),
                    success: function() {
                        this.likeInProcess = !1;
                    },
                    error: function() {
                        this.likeInProcess = !1, this.set(e), t();
                    },
                    context: this
                });
            }
        },
        loadMagLikersPortion: function(e) {
            if (!this._magLikersXhr) {
                if (e = e || {}, this.loadedMagLikers) {
                    if (this.loadedMagLikers == this.get("likes_count")) return e.success(this.likers.models);
                } else this.likers = new t.collections.Users(), this.likers.comparator = function(t) {
                    return -new Date(t.get("likeDate"));
                };
                this._magLikersXhr = $.ajax({
                    type: "GET",
                    url: this.LIKERS_URL + "mag/" + this.getId(),
                    data: {
                        limit: this.LIKERS_PORTION,
                        skip: this.loadedMagLikers
                    },
                    success: function(t) {
                        this.likers.add(t);
                        var i = this.loadedMagLikers;
                        this.loadedMagLikers += t.length, delete this._magLikersXhr, e.success && e.success(this.likers.rest(i));
                    },
                    error: function() {
                        delete this._magLikersXhr, e.error && e.error();
                    },
                    context: this
                });
            }
        },
        loadContents: function(t) {
            return t = t || {}, this.get("pages") ? t.success && t.success(this.get("pages")) : ($.ajax({
                type: "GET",
                url: this.PAGES_URL + this.getId(),
                success: function(e) {
                    this.set("pages", e), t.success && t.success(e);
                },
                error: t.error,
                context: this
            }), undefined);
        },
        abortXhr: function(t) {
            this["_" + t + "Xhr"] && this["_" + t + "Xhr"].abort && this["_" + t + "Xhr"].abort(), delete this["_" + t + "Xhr"];
        },
        deleteMag: function(t) {
            this.deleteXHR && this.deleteXHR.abort(), this.deleteXHR = $.ajax({
                type: "DELETE",
                url: "/api/mag/" + this.getId(),
                success: function() {
                    "function" == typeof t.success && t.success();
                },
                error: function(t) {
                    console.log("Error deleting mag: " + t.responseText), this.onError("A problem occurred while deleting your mag. Please, contact us: support@readymag.com");
                },
                context: this
            }).always(function() {
                "function" == typeof t.always && t.always();
            });
        },
        _changePublishState: function(t, e) {
            var i = !t || "publish" !== t && "republish" !== t ? this.UNPUBLISH_URL : this.PUBLISH_URL;
            this.publishXHR && this.publishXHR.abort(), this.publishXHR = $.ajax({
                type: "POST",
                url: i + this.getId(),
                success: function(i) {
                    this.set("is_published", t && "unpublish" !== t), "publish" === t && (this.set("published", i.published || new Date().toISOString()), 
                    this.set("updated", i.updated || new Date().toISOString()), this.set("major_update", i.major_update || new Date().toISOString())), 
                    "republish" === t && this.set(_.extend(_.omit(i, "user"), {
                        updated: this.get("last_changed")
                    })), this.set("coverPid", i.coverPid || this.get("coverPid")), "function" == typeof e.success && e.success();
                },
                error: function(e) {
                    console.log("Error changing puplish state: " + e.responseText), this.onError("A problem occurred while " + t + "ing " + "your mag. Please, contact us: support@readymag.com");
                },
                context: this
            }).always(function() {
                "function" == typeof e.always && e.always();
            });
        },
        publishMag: function(t) {
            this._changePublishState("publish", t);
        },
        unpublishMag: function(t) {
            this._changePublishState("unpublish", t);
        },
        republishMag: function(t) {
            this._changePublishState("republish", t);
        },
        hasUnsavedChanges: function() {
            return this.get("is_published") && this.get("last_changed") && this.get("updated") && this.get("updated") < this.get("last_changed");
        },
        onError: function(t) {
            alert(t);
        }
    });
}(RM), function(t) {
    "use strict";
    t.collections.MagListData = Backbone.Collection.extend({
        model: t.models.UserMag,
        load: function(t) {
            t = t || {};
            var e = t.success || $.noop;
            this.loaded;
            var i = this;
            return t.success = function() {
                e(i), i.loaded = !0;
            }, this.fetch(t);
        },
        comparator: function(t) {
            return -new Date(t.get("major_update")).getTime();
        }
    }), t.collections.NewestMagList = t.collections.MagListData.extend({
        url: "/api/readymags/newest/"
    }), t.collections.InboxMagList = t.collections.MagListData.extend({
        url: "/api/readymags/inbox/"
    }), t.collections.FeaturedMagList = t.collections.MagListData.extend({
        comparator: null
    });
}(RM), function(t) {
    "use strict";
    t.classes.CollectorView = Backbone.View.extend({
        events: {
            "click .maglink": "maglink",
            "click .link": "link"
        },
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t);
        },
        switchOn: function() {
            $(window).on("resize", this.triggerResize), $(document).on("click", this.triggerClick), $("#collector").on("scroll", this.triggerScroll), 
            this.triggerResize();
        },
        switchOff: function() {
            $(window).off("resize", this.triggerResize), $(document).off("click", this.triggerClick), $("#collector").off("scroll", this.triggerScroll);
        },
        showDefaultBG: function() {
            this.$el.addClass("defaultBG");
        },
        processUri: function(t) {
            return 0 == t.indexOf("/edit/") ? t.substr(6, t.length - 6) : t && "/" == t[0] && t.length > 1 ? t.substr(1, t.length - 1) : t;
        },
        maglink: function(e) {
            if (2 != e.which && !e.metaKey) {
                var i = $(e.currentTarget).data("link") || $(e.currentTarget).attr("href");
                if (!i) return !1;
                (t.magrouter || t.router.preview).navigate(this.processUri(i), {
                    trigger: !0
                }), e.preventDefault();
            }
        },
        link: function(t) {
            if (2 != t.which && !t.metaKey) {
                var e = $(t.currentTarget).data("link") || $(t.currentTarget).attr("href");
                if (!e) return !1;
                this.router.navigate(this.processUri(e), {
                    trigger: !0
                }), t.preventDefault();
            }
        },
        triggerClick: function(t) {
            this.trigger("click", t);
        },
        triggerResize: function(t) {
            this.trigger("resize", t);
        },
        triggerScroll: function(t) {
            this.trigger("scroll", t);
        },
        showGoDesktopPopup: function(e, i) {
            var n;
            e instanceof jQuery.Event && (n = $(e.currentTarget), this.goDesktopPopup || (this.goDesktopPopup = new t.classes.GoDesktopPopup()), 
            this.goDesktopPopup.setElement(n), this.goDesktopPopup.show(i));
        },
        triggerMySetingsChanged: function(t) {
            this.trigger("mySettingsChanged", t);
        },
        triggerShowUserSettings: function(t) {
            this.trigger("showUserSettings", t);
        },
        triggerMagsCentered: function(t) {
            this.trigger("magsCentered", t);
        },
        triggerFinishedContentLoading: function(t) {
            this.trigger("finishedContentLoading", t);
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.MagsView = Backbone.View.extend({
        events: {
            "click .bl-mag-info": "routeMagInfo",
            "mouseleave .block": "closeAllMenus",
            "click .block .mag-controls .arrow-button": "toggleMagMenu",
            "click .block .bl-updated-info": "toggleUpdatedMenu",
            "click .block .mag-controls .context-menu .menu-delete": "toggleDeletePanel",
            "click .block .mag-controls .context-menu .delete-panel-cancel": "toggleDeletePanel",
            "click .block .mag-controls .context-menu .delete-panel-yes": "onDeleteMagClick",
            "click .block .mag-controls .context-menu .menu-publish span": "onPublishUnpublishClick",
            "click .block .mag-controls .context-menu .menu-unpublish ": "onPublishUnpublishClick",
            "click .block .mag-controls .context-menu .menu-republish span": "onRepublishClick",
            "click .block .updated-unsubscribe": "onUnsubscribeClick"
        },
        BLOCK_WIDTH: 304,
        BLOCK_PADDING: 24,
        initialize: function(t) {
            _.defaults(t, {
                type: "all",
                parent_context: "profile"
            }), _.bindAll(this), _.extend(this, t);
        },
        render: function(t) {
            this.switchOff(), this.mags = t || this.mags, preloadDesignImages("collector-maglist"), this.$el.html(this.mags_template({
                mags: this.mags,
                view: this
            })).show(), this.$el.find(".block .when-published .date").timeago(), this.$el.find(".block .updated-panel .updated-caption span").timeago(), 
            this.ellipsisMagNames(), this.centerBlocks(), setTimeout(_.bind(function() {
                this.$(".blocks").addClass("opaque");
            }, this), 100), this.switchOn();
        },
        ellipsisMagNames: function() {
            var t, e = 0, i = $("html");
            t = setInterval(function() {
                e++, (i.hasClass("page-loaded") || e > 1e3) && (clearInterval(t), $(".block-mag.middle .bl-title").dotdotdot({
                    height: 66
                }));
            }, 100);
        },
        switchOn: function() {
            this.collector.on("resize", this.centerBlocks);
        },
        switchOff: function() {
            this.collector.off("resize", this.centerBlocks);
        },
        centerBlocks: function() {
            var t = this.$el.find(".cl-blocks-wrapper").width(), e = this.$el.find(".cl-blocks-wrapper .block").length;
            if (!(1 > t)) {
                var i = Math.floor(t / (this.BLOCK_WIDTH + this.BLOCK_PADDING)), n = Math.min(i, e) * (this.BLOCK_WIDTH + this.BLOCK_PADDING);
                this.$el.find(".cl-blocks-wrapper .blocks").width(n), this.collector.triggerMagsCentered({
                    newWidth: n
                });
            }
        },
        routeMagInfo: function(t) {
            var e = $(t.currentTarget).data("id");
            this.router.magInfo.magModel = this.mags.get(e), this.router.magInfo.returnUrl = Backbone.history.getFragment();
        },
        toggleMagMenu: function(t) {
            var e = $(t.currentTarget).closest(".block");
            e.toggleClass("menu-shown"), e.removeClass("delete-panel-shown");
        },
        toggleUpdatedMenu: function(t) {
            var e = $(t.currentTarget).closest(".block");
            e.toggleClass("updated-shown");
        },
        toggleDeletePanel: function(t) {
            var e = $(t.currentTarget).closest(".block");
            e.toggleClass("delete-panel-shown");
        },
        toggleMagPreloader: function(t) {
            var e = $(t.currentTarget).closest(".block");
            e.toggleClass("preloader-shown");
        },
        closeAllMenus: function(t) {
            var e = $(t.currentTarget).closest(".block");
            e.removeClass("menu-shown"), e.removeClass("updated-shown"), e.removeClass("delete-panel-shown");
        },
        _reRender: function() {
            this.render(this.mags), this.trigger("re-render");
        },
        onDeleteMagClick: function(t) {
            t.stopPropagation();
            var e = $(t.currentTarget).closest(".mag-controls").data("id"), i = this.mags.get(e), n = this;
            this.closeAllMenus(t), this.toggleMagPreloader(t), i && i.deleteMag({
                success: function() {
                    n.mags.remove(i), n.mags.size() || n.collector.trigger("emptyMags"), n._reRender(i);
                },
                always: function() {
                    n.toggleMagPreloader(t);
                }
            });
        },
        onPublishUnpublishClick: function(t) {
            t.stopPropagation();
            var e = $(t.currentTarget), i = e.closest(".mag-controls").data("id"), n = this.mags.get(i);
            if (n) {
                var s = this, o = {
                    success: function() {
                        n.set({
                            changed: !1
                        }), s.mags.sort(), s._reRender(n);
                    },
                    always: function() {
                        s.toggleMagPreloader(t);
                    }
                };
                this.closeAllMenus(t), this.toggleMagPreloader(t), n.get("is_published") ? n.unpublishMag(o) : n.publishMag(o);
            }
        },
        onRepublishClick: function(t) {
            t.stopPropagation();
            var e = $(t.currentTarget), i = e.closest(".mag-controls").data("id"), n = e.closest(".block"), s = n.find(".unsaved"), o = this.mags.get(i);
            if (o) {
                var r = this, a = {
                    success: function() {
                        o.set({
                            changed: !1
                        }), n.removeClass("changed"), e.remove(), s.remove(), r._reRender(o);
                    },
                    always: function() {
                        r.toggleMagPreloader(t);
                    }
                };
                this.closeAllMenus(t), this.toggleMagPreloader(t), o.republishMag(a);
            }
        },
        onUnsubscribeClick: function() {
            alert("Not implemented!");
        }
    }), $(function() {
        t.classes.MagsView.prototype.mags_template = _.template($("#template-collector-mags").text());
    });
}(RM), function(t) {
    "use strict";
    t.classes.FeaturedView = Backbone.View.extend({
        events: {
            "click .bl-mag-info": "routeMagInfo"
        },
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t);
        },
        render: function(e) {
            var i = this, n = "";
            return this.switchOff(), this.$el.empty(), this.currentXHR = $.ajax({
                url: "/api/readymags/featured/",
                method: "GET",
                success: function(s) {
                    var o;
                    i.featuredMags = new t.collections.FeaturedMagList(s.mags, {
                        parse: !0
                    }), o = i.featuredMags.at(0), o && (n = _.template(s.html)({
                        bigmag: o
                    })), i.$el.html(i.template({
                        html: n,
                        css: s.css,
                        mags: i.featuredMags.slice(4),
                        middlemag: i.featuredMags.at(1),
                        smallmag1: i.featuredMags.at(2),
                        smallmag2: i.featuredMags.at(3),
                        mag: i.featuredMags.at(0)
                    })), i.$el.find(".block .when-published .date").timeago(), i.$el.find(".block .updated-panel .updated-caption span").timeago(), 
                    i.ellipsisMagNames(), e && "function" == typeof e.success && e.success(), setTimeout(_.bind(function() {
                        i.$(".blocks").addClass("opaque"), i.collector.triggerFinishedContentLoading();
                    }, i), 100), i.switchOn();
                },
                fail: function() {
                    this.collector.triggerFinishedContentLoading();
                }
            }), this.currentXHR;
        },
        ellipsisMagNames: function() {
            var t, e = 0, i = $("html");
            t = setInterval(function() {
                e++, (i.hasClass("page-loaded") || e > 1e3) && (clearInterval(t), $(".block-mag.middle .bl-title").dotdotdot({
                    height: 66
                }));
            }, 100);
        },
        switchOn: function() {},
        switchOff: function() {},
        routeMagInfo: function(t) {
            var e = $(t.currentTarget).data("id");
            this.collector.router.magInfo.magModel = this.featuredMags.get(e), this.collector.router.magInfo.returnUrl = Backbone.history.getFragment();
        },
        abort: function() {
            this.currentXHR && this.currentXHR.abort();
        }
    }), $(function() {
        t.classes.FeaturedView.prototype.template = _.template($("#template-collector-discover-featured").text());
    });
}(RM), function(t) {
    "use strict";
    t.classes.User = Backbone.View.extend({
        events: {
            "click .profile-back": "toggleProfilePanel",
            "click .small-user-title": "toggleProfilePanel",
            "click .mag-number": "onMagNumberClick",
            "click .user-profile-panel .follow-button": "onFollowingButtonClick",
            "click .profile-edit-button": "onProfileEditClick",
            "click .button-delete": "deletePic",
            mousewheel: "onMouseWheel",
            "click .bottom-content .following-wrapper .followers": "renderFollowers",
            "click .bottom-content .following-wrapper .following": "renderFollowing",
            "click .maglist-overlay": "onMaglistOverlayClick",
            "touchmove .user-profile-panel": "preventTouchScroll",
            "touchmove .maglist-overlay": "preventTouchScroll",
            "click .empty-icon .create-link": "createNewMag",
            "click .button-pic-upload": "onChoosePicClick"
        },
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.$el = e.$el, this.router = e.router, this.template = _.template($("#template-user").text()), 
            this.me = this.router.me, this.minProfileHeight = 476, this.profileHeightPercent = 70, this.minProfileVisibleHeight = 50, 
            this.panelAnimationDuration = 500, this.panelBottomAnimationDuration = 400, this.maxUsernameInputHeight = 110, 
            this.maxUsernameLength = 24, this.profilePanelCollapsed = !1, this.isFollowingPopupActive = !1, this.isOwner = !1, 
            this.magsView = new t.classes.MagsView(_.extend({}, e, {
                type: "owner",
                parent_context: "profile"
            }));
        },
        render: function(e) {
            e = e || {}, this.switchOff(), this.switchOffModelsListeneres(), this.user = e.user || this.user, this.mags = e.mags || this.mags, 
            this.switchOnModelsListeneres(), this.user && (document.title = "Readymag • " + this.user.get("name")), 
            this.isOwner = this.user.id == this.me.id;
            var i = this.template({
                user: this.user,
                mags: this.mags,
                me: this.me,
                isOwner: this.isOwner
            });
            if (this.isOwner) {
                var n = Date.now();
                this.mags.comparator = function(t) {
                    var e = t.get("is_published") ? 0 : n;
                    return e += new Date(t.get(e ? "last_changed" : "major_update")).getTime(), -e || Number.MAX_VALUE;
                }, this.mags.sort();
            }
            preloadDesignImages("collector-profile"), this.$el.siblings().hide(), this.$el.html(i).show(), this.$magsRenderContainer = this.$el.find(".mag-list .render-container"), 
            this.magsView.setElement(this.$magsRenderContainer), this.magsView.mags = this.mags, this.magsView.render(), 
            this.magsView.on("re-render", function() {
                this.$(".cl-blocks-wrapper").addClass("collapsed");
            }), this.following = new t.classes.FollowingPopup({
                $el: this.$el.find(".follow-view"),
                user: this.user,
                me: this.router.me,
                collectorView: this.collector
            }), this.following.off("dismiss", this.onFollowingPopupDsimiss), this.following.on("dismiss", this.onFollowingPopupDsimiss), 
            this.$scrollContainer = $("#collector"), this.$maglistOverlay = this.$(".maglist-overlay"), this.$profilePanel = this.$(".user-profile-panel"), 
            this.$profileBack = this.$(".profile-back"), this.$profilePanelBottom = this.$profilePanel.find(".bottom-content"), 
            this.$bottomFollowers = this.$profilePanelBottom.find(".follow"), this.$bottomTitle = this.$profilePanelBottom.find(".small-user-title"), 
            this.$followButton = this.$profilePanel.find(".follow-button"), this.$userpicUploader = this.$profilePanel.find(".userpic-uploader"), 
            this.$username = this.$profilePanel.find(".username"), this.$smallUsername = this.$profilePanel.find(".small-user-title .title"), 
            this.$description = this.$profilePanel.find(".description"), this.$location = this.$profilePanel.find(".name.location"), 
            this.$website = this.$profilePanel.find(".name.website"), this.$twitter = this.$profilePanel.find(".name.twitter"), 
            this.$facebook = this.$profilePanel.find(".name.facebook"), this.$inputUsername = this.$profilePanel.find(".input-username"), 
            this.$inputDescription = this.$profilePanel.find(".input-description"), this.$inputLocation = this.$profilePanel.find(".input-location"), 
            this.$inputWebsite = this.$profilePanel.find(".input-website"), this.$inputTwitter = this.$profilePanel.find(".input-twitter"), 
            this.$inputFacebook = this.$profilePanel.find(".input-facebook"), this.$preloader = this.$profilePanel.find(".picture-preloader"), 
            this.$emptyIcon = this.$(".empty-icon"), this.$userpicUploader.fileupload({
                dataType: "json",
                dropZone: this.$(".userpic-dropzone"),
                fileInput: this.$userpicUploader,
                paramName: "userpic-uploader",
                singleFileUploads: !0,
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
                submit: this.startPreloader,
                done: this.updatePic,
                fail: this.onUserpicError
            }), this.isEditMode = !1, this.isPanelFixed = !1, this.redrawProfile(), this.delegateEvents(), this.profilePanelCollapsed && this.toggleProfilePanel(), 
            this.resizeProfilePanel(), this.resizeBlockContainer(), this.switchOn(), this.collector.triggerFinishedContentLoading();
        },
        switchOn: function() {
            this.collector.on("scroll", this.onScroll), this.collector.on("resize", this.onResize), this.collector.on("emptyMags", this.showEmptyMagsIcon), 
            this.collector.on("mySettingsChanged", this.redrawProfile), Modernizr.ismobile && (this.$profilePanel.swipe({
                swipeDown: this.profileSwipeDown,
                swipeUp: this.profileSwipeUp
            }), this.collector.on("collectorAttached", this.fixMobileScrollTop));
        },
        switchOff: function() {
            this.collector.off("scroll", this.onScroll), this.collector.off("resize", this.onResize), this.collector.off("emptyMags", this.showEmptyMagsIcon), 
            this.collector.off("mySettingsChanged", this.redrawProfile), Modernizr.ismobile && (this.$profilePanel && this.$profilePanel.swipe("destroy"), 
            this.collector.off("collectorAttached", this.fixMobileScrollTop));
        },
        fixMobileScrollTop: function() {
            "user" == this.router.currentPage && $(window).scrollTop(0);
        },
        preventTouchScroll: function(t) {
            t.preventDefault();
        },
        profileSwipeUp: function() {
            !this.profilePanelCollapsed && this.isPanelFixed ? this.toggleProfilePanel() : this.isPanelFixed && this.scrollOutAnimated || this.scrollOutPanel();
        },
        profileSwipeDown: function() {
            this.profilePanelCollapsed && this.toggleProfilePanel();
        },
        onScroll: function() {
            var t = this.$profilePanel.height();
            !this.isPanelFixed && this.$scrollContainer.scrollTop() >= t - this.minProfileVisibleHeight && this.fixProfilePanel();
        },
        onMouseWheel: function(t, e) {
            return this.isFollowingPopupActive || this.isProfileEditPopupActive ? (t.preventDefault(), undefined) : (this.scrollOutAnimated && t.preventDefault(), 
            !this.isPanelFixed && 0 > e && !this.scrollOutAnimated ? (t.preventDefault(), this.scrollOutPanel(), 
            undefined) : (this.isPanelFixed && !this.$profilePanel.hasClass("collapsed") && this.toggleProfilePanel(), 
            undefined));
        },
        fixProfilePanel: function(t) {
            var e, i, n, s = this.$profilePanel.height();
            this.$profilePanel.addClass("fixed"), this.$profilePanel.transition({
                y: this.minProfileVisibleHeight - s
            }, t ? 500 : 0), this.$(".cl-blocks-wrapper").addClass("collapsed"), this.$scrollContainer.scrollTop(0), 
            this.isPanelFixed = !0, this.toggleProfilePanel(), this.$profilePanel.addClass("transitions"), this.$maglistOverlay.css("opacity", 0), 
            this.$maglistOverlay.hide(), this.$(".blocks").css("height", "auto"), e = this.$profilePanel.width(), 
            i = this.$(".mag-list").width(), n = e - i, this.$profilePanel.css("padding-right", n), this.$(".bottom-panel-content").css("padding-right", n), 
            this.$(".panel-content-wrapper .back").css("padding-right", n), this.$profilePanelBottom.css("margin-left", -(this.$profilePanelBottom.width() / 2 + n / 2));
        },
        switchOnModelsListeneres: function() {
            this.user.on("change:pic", this.redrawUserPic), this.user.on("change:following", this.redrawFollows), 
            this.user.on("change:followers", this.redrawFollows);
        },
        switchOffModelsListeneres: function() {
            this.user && (this.user.off("change:pic", this.redrawUserPic), this.user.off("change:following", this.redrawFollows), 
            this.user.off("change:followers", this.redrawFollows));
        },
        redrawUserPic: function() {
            this.$(".centered-content .userpic-placeholder").find("img").attr("src", "").attr("src", this.user.getUserpic(128)), 
            this.$(".small-user-title").find("img").attr("src", this.user.getUserpic(32));
        },
        onResize: function() {
            this.resizeProfilePanel(), this.isPanelFixed || this.resizeBlockContainer();
        },
        resizeProfilePanel: function() {
            var t = $(window).height(), e = Math.floor(t * this.profileHeightPercent / 100);
            e = this.minProfileHeight > e ? this.minProfileHeight : e, this.$profilePanel.css("height", e), this.$profilePanel.hasClass("collapsed") && this.moveUpProfilePanel(!0);
        },
        moveUpProfilePanel: function(t) {
            var e;
            e = -(this.$profilePanel.height() - this.minProfileVisibleHeight), this.profilePanelCollapsed = !0, 
            this.hideProfileBack(), this.$profilePanel.transition({
                y: e
            }, t ? 0 : this.panelAnimationDuration);
        },
        toggleProfilePanel: function() {
            var t;
            this.isPanelFixed && (this.$profilePanel.toggleClass("collapsed"), this.$profilePanel.hasClass("collapsed") ? (this.moveUpProfilePanel(), 
            setTimeout(_.bind(function() {
                this.showBottomUserTitle(), this.isEditMode && this.onProfileEditClick();
            }, this), this.panelAnimationDuration)) : (this.hideBottomUserTitle(), this.resizeProfilePanel(), t = 0, 
            this.profilePanelCollapsed = !1, this.showProfileBack(), this.$profilePanel.transition({
                y: t
            }, this.panelAnimationDuration)));
        },
        hideProfileBack: function() {
            this.$profileBack.addClass("invisible"), setTimeout(_.bind(function() {
                this.$profileBack.addClass("hidden");
            }, this), 200);
        },
        showProfileBack: function() {
            this.$profileBack.removeClass("hidden"), _.defer(_.bind(function() {
                this.$profileBack.removeClass("invisible");
            }, this));
        },
        showBottomUserTitle: function() {
            this.$bottomTitle.removeClass("hidden"), _.defer(_.bind(function() {
                this.$profilePanelBottom.addClass("collapsed");
            }, this));
        },
        hideBottomUserTitle: function() {
            this.$profilePanelBottom.removeClass("collapsed"), setTimeout(_.bind(function() {
                this.$bottomTitle.addClass("hidden");
            }, this), this.panelBottomAnimationDuration);
        },
        onFollowingButtonClick: function() {
            this.isOwner ? (this.$profilePanel.hasClass("collapsed") && this.isPanelFixed && this.toggleProfilePanel(), 
            this.onProfileEditClick()) : (this.me.toggleFollow(this.user), this.$followButton.toggleClass("following"));
        },
        _showFollowingPopup: function(t) {
            this.following && (this.following.$el.removeClass("hidden"), this.following.render(t), this.isFollowingPopupActive = !0);
        },
        renderFollowers: function(t) {
            $(t.currentTarget).hasClass("not-clickable") || this._showFollowingPopup("followers");
        },
        renderFollowing: function(t) {
            $(t.currentTarget).hasClass("not-clickable") || this._showFollowingPopup("following");
        },
        onProfileEditClick: function(t, e) {
            this.isEditMode ? (this.$followButton.find(".label-edit").text("Edit Profile"), this.$profilePanel.find(".editable").removeClass("hidden"), 
            this.$profilePanel.find(".profile-input").addClass("hidden"), e || (this.limitUsername(), this.saveProfileData({
                name: this.$inputUsername.val(),
                desc: this.$inputDescription.val(),
                location: this.$inputLocation.val(),
                website: this.$inputWebsite.val(),
                twitter: this.$inputTwitter.val(),
                fb: this.$inputFacebook.val()
            })), this.redrawProfile()) : (this.$inputUsername.val(this.user.get("name") || ""), this.$inputDescription.val(this.user.get("desc") || ""), 
            _.defer(_.bind(function() {
                this.$inputUsername.RMAutoResizeTextArea({
                    maxHeight: 103
                }), this.$inputDescription.RMAutoResizeTextArea({
                    maxHeight: 72
                });
            }, this)), this.$inputLocation.val(this.user.get("location") || ""), this.$inputWebsite.val(this.user.get("website") || ""), 
            this.$inputTwitter.val(this.user.get("twitter") || ""), this.$inputFacebook.val(this.user.get("fb") || ""), 
            this.$followButton.find(".label-edit").text("Save Profile"), this.$profilePanel.find(".editable").addClass("hidden"), 
            this.$profilePanel.find(".profile-input").removeClass("hidden"), this.$el.find(".social-item a").removeClass("hidden"), 
            this.$location.parent().find(".image").show()), this.isEditMode = !this.isEditMode;
        },
        updatePic: function(t, e) {
            this.stopPreloader(), this.user.get("pic") === e.result.pic ? this.user.trigger("change:pic") : this.user.set("pic", e.result.pic);
        },
        deletePic: function(t) {
            t.stopPropagation(), this.user.deletePic();
        },
        onUserpicError: function(t, e) {
            this.stopPreloader(), console.log(t, e), alert("Userpic upload failed");
        },
        saveProfileData: function(t) {
            var e;
            if (t) {
                for (e in t) t[e] = $.trim(t[e]);
                this.user.store(t);
            }
        },
        redrawFollows: function() {
            var e = this.$(".following"), i = this.$(".followers");
            e.find(".number").text(this.user.get("following").length), this.user.get("following").length ? e.removeClass("not-clickable") : e.addClass("not-clickable"), 
            i.find(".number").text(this.user.get("followers").length), this.user.get("followers").length ? i.removeClass("not-clickable") : i.addClass("not-clickable"), 
            i.find(".label").text(t.utils.declination("Followers", "Follower", "Followers", this.user.get("followers").length));
        },
        redrawProfile: function() {
            var t, e, i;
            this.redrawFollows(), this.$username.text(this.user.get("name") || "").dotdotdot({
                height: this.maxUsernameInputHeight
            }), this.$smallUsername.text(this.user.get("name") || ""), this.$description.text(this.user.get("desc") || ""), 
            this.$location.text(this.user.get("location")), this.user.get("location") ? this.$location.parent().find(".image").show() : this.$location.parent().find(".image").hide(), 
            this.user.get("website") ? (t = this.user.getWebsiteButified(), this.$website.text(t.label).closest("a").attr("href", t.link)) : this.$website.closest("a").addClass("hidden"), 
            this.user.get("twitter") ? (e = this.user.getTwitterButified(), this.$twitter.text(e.nick).closest("a").attr("href", e.link)) : this.$twitter.closest("a").addClass("hidden"), 
            this.user.get("fb") ? (i = this.user.getFacebookButified(), this.$facebook.text(i.nick).closest("a").attr("href", i.link)) : this.$facebook.closest("a").addClass("hidden"), 
            this.user.trigger("change:pic");
        },
        resizeBlockContainer: function() {
            if (!this.isPanelFixed) {
                var t = 36, e = this.$el.find(".blocks"), i = e.height(), n = $(window).height();
                n > i - (this.minProfileVisibleHeight + t) && e.css("height", n - this.minProfileVisibleHeight - t);
            }
        },
        onMaglistOverlayClick: function() {
            this.scrollOutPanel();
        },
        scrollOutPanel: function() {
            var t = 500;
            if (!this.scrollOutAnimated) {
                var e = this.$profilePanel.height();
                this.scrollOutAnimated = !0;
                var i = this;
                setTimeout(function() {
                    i.scrollOutAnimated = !1;
                }, t + 200), Modernizr.ismobile ? this.fixProfilePanel(!0) : this.$scrollContainer.animate({
                    scrollTop: e - this.minProfileVisibleHeight
                }, t, _.bind(function() {
                    this.fixProfilePanel();
                }, this));
            }
        },
        limitUsername: function() {
            var t = this.$inputUsername.val();
            t.length > this.maxUsernameLength && this.$inputUsername.val(t.substring(0, this.maxUsernameLength));
        },
        startPreloader: function() {
            this.$preloader.removeClass("disabled");
        },
        stopPreloader: function() {
            this.$preloader.addClass("disabled");
        },
        onMagNumberClick: function() {
            this.isPanelFixed ? this.profilePanelCollapsed || this.toggleProfilePanel() : this.scrollOutPanel();
        },
        onFollowingPopupDsimiss: function() {
            this.isFollowingPopupActive = !1;
        },
        createNewMag: function(t) {
            return Modernizr.ismobile ? (this.collector.showGoDesktopPopup(t, {
                popupDistance: 25
            }), undefined) : (this.collector && this.collector.trigger("createNewMag"), undefined);
        },
        showEmptyMagsIcon: function() {
            this.$emptyIcon.removeClass("hidden");
        },
        onChoosePicClick: function() {
            this.collector.triggerShowUserSettings();
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.ProfileEditView = Backbone.View.extend({
        events: {
            "click .overlay": "hide",
            "click .close": "hide",
            "click .tab": "onTabClick",
            "click .settings-username-prefix": "onRmPrefixClick",
            "input .panel.profile input": "onProfileInput",
            "input .panel.profile textarea": "onBioInput",
            "click .panel.profile .save-changes": "saveProfile",
            "click .panel.password .save-changes": "savePassword",
            "click .panel.password .reset-password": "resetPassword",
            "click .panel.profile .delete-userpic": "deleteUserpic",
            "mousewheel .popup-back": "preventProfileScroll",
            "touchmove .crop-popup-back": "preventDefault",
            "input #password-new": "onNewPasswordInput",
            "input #password-old": "validatePasswordForm",
            "input #settings-username": "onUsernameInput",
            "click .crop-popup-back": "hideCropPopup",
            "click .userpic-crop-popup .buttons .cancel": "hideCropPopup",
            "click .userpic-crop-popup .buttons .save": "cropUserpic",
            "click .userpic-crop-popup .buttons .cancel-upload": "cancelUserpicUpload",
            "click .password-eye": "togglePasswordVisibility"
        },
        initialize: function(t) {
            if (_.bindAll(this), _.extend(this, t), !this.user) throw {
                message: "User must be defined!"
            };
            this.template = _.template($("#template-profile-edit").text()), this.checkUsernameAvailable = _.debounce(this._checkUsernameAvailable, 500), 
            this.CROP_W_SIZE = 128, this.CROP_CENTER_LEFT = 256, this.CROP_CENTER_TOP = 184, this.CROP_WINDOW_W = 2 * this.CROP_CENTER_LEFT, 
            this.CROP_WINDOW_H = 2 * this.CROP_CENTER_TOP, this.isDraggable = !1;
        },
        show: function(t) {
            var e = this;
            preloadDesignImages("user-settings"), this.$el.html(this.template({
                user: this.user
            })), this.$body = this.$(".popup-body"), this.$triangle = this.$(".tabs .triangle"), this.$currentPanel = this.$(".panels .panel.profile"), 
            this.$inputUsername = this.$(".settings-username"), this.$bio = this.$(".settings-bio"), this.$bioCounter = this.$(".counter-bio"), 
            this.$profileSaveButton = this.$(".panel.profile .save-changes"), this.$passwordSaveButton = this.$(".panel.password .save-changes"), 
            this.$deleteUserpic = this.$(".panel.profile .delete-userpic"), this.$userpicUploader = this.$("#settings-userpic-uploader"), 
            this.$userpicReUploader = this.$("#settings-userpic-reuploader"), this.$username = this.$("#settings-username"), 
            this.$oldPassword = this.$("#password-old"), this.$newPassword = this.$("#password-new"), this.$cropPopup = this.$(".userpic-crop-popup"), 
            this.$cropPopupBody = this.$(".crop-popup-body"), this.$cropOverlay = this.$(".crop-popup-body .crop-overlay"), 
            this.$zoomTrack = this.$(".userpic-crop-popup .zoomer .track"), this.$zoomHandler = this.$(".userpic-crop-popup .zoomer .handler"), 
            this.onBioInput(), this.hideCropPopup(), this.$userpicUploader.fileupload({
                dataType: "json",
                fileInput: this.$userpicUploader,
                paramName: "userpic-uploader",
                singleFileUploads: !0,
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
                start: this.showCropPopup,
                done: this.loadOriginalPicture,
                fail: this.onUserpicError,
                submit: this.validatePictureFormat,
                always: function() {
                    e.isUploading = !1;
                },
                add: function(t, i) {
                    e._currentXHR = i.submit();
                }
            }), this.$userpicReUploader.fileupload({
                dataType: "json",
                fileInput: this.$userpicReUploader,
                paramName: "userpic-uploader",
                singleFileUploads: !0,
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
                start: this.showCropPopup,
                done: this.loadOriginalPicture,
                fail: this.onUserpicError,
                submit: this.validatePictureFormat,
                always: function() {
                    e.isUploading = !1;
                },
                add: function(t, i) {
                    e._currentXHR = i.submit();
                }
            }), this.isUsernameOK = !0, this.oldUsername = this.user.get("uri"), this.oldName = this.user.get("name"), 
            this.userpicChanghed = !1, this.$zoomHandler.RMDrag({
                move: this.onZoomerDrag,
                preventDefault: !0,
                dragClass: "dragging"
            }), this.$cropOverlay.RMDrag({
                preventDefault: !0,
                dragClass: "dragging",
                move: this.onPictureDrag,
                start: function() {
                    e.start_drag_left = e.orig.left, e.start_drag_top = e.orig.top;
                }
            }), this.user.on("change:pic", this.redrawUserPic), $(document).on("keydown", this.onGlobalKeyDown), 
            this.$username.on("blur", function() {
                $.trim(e.$username.val()) || (e.$username.val(e.user.get("uri")), e.$username.siblings(".checkmark").removeClass("ok").removeClass("bad"), 
                e.isUsernameOK = !0, e.$profileSaveButton.addClass("disabled"));
            }), this.$(".profile-edit-view").removeClass("invisible").addClass("opaque"), Modernizr.ismobile && (this.$(".profile-edit-view").addClass("static"), 
            this.collector.detachCollector(), $("body").addClass("profile-settings-displayed")), t && t.section && "password" == t.section && this.switchTab(this.$(".tab.password"));
        },
        hide: function() {
            var t = this, e = this.oldUsername != this.user.get("uri") || this.oldName != this.user.get("name") || this.userpicChanghed;
            this.$(".profile-edit-view").removeClass("opaque"), _.delay(function() {
                t.$(".profile-edit-view").addClass("invisible");
            }, 300), _.delay(function() {
                t.trigger("dismiss", e ? {
                    visualChanges: !0
                } : {}), Modernizr.ismobile && (t.$(".profile-edit-view").removeClass("static"), t.collector.attachCollector(), 
                $("body").removeClass("profile-settings-displayed"));
            }, 400), this.user.off("change:pic", this.redrawUserPic), $(document).off("keydown", this.onGlobalKeyDown);
        },
        onNewPasswordInput: function() {
            var e = this.$newPassword.closest(".input-wrapper");
            t.utils.filterNonAscii(this.$newPassword) && (e.addClass("error"), _.defer(function() {
                e.removeClass("error");
            })), this.validatePasswordForm();
        },
        togglePasswordVisibility: function(t) {
            var e, i, n = $(t.currentTarget), s = n.siblings("input").first();
            n.toggleClass("hide-pass"), e = n.hasClass("hide-pass") ? "password" : "text", i = n.hasClass("hide-pass") ? "Show password" : "Hide password", 
            s.attr("type", e), n.attr("title", i), s.focus();
        },
        validatePictureFormat: function(t, e) {
            var i;
            return e.files && e.files.length > 0 && (i = e.files[0].type, !/^image\/(jpeg|png|gif)$/i.test(i)) ? (alert("File format is not supported. Try JPG, PNG or GIF instead."), 
            !1) : undefined;
        },
        onTabClick: function(t) {
            var e = $(t.currentTarget);
            this.switchTab(e);
        },
        switchTab: function(t) {
            var e, i, n, s, o = 200, r = 12, a = this;
            ("string" == typeof t || t === undefined) && (t = this.$(".tab." + (t ? t : "profile"))), !t || t.hasClass("disabled") || t.hasClass("active") || (i = t.attr("data-panel"), 
            e = this.$(".panels .panel." + i), t.addClass("active").siblings().removeClass("active"), n = t.position().top + Math.floor(t.height() / 2), 
            this.$triangle.css("top", n - Math.floor(this.$triangle.height() / 2) - r), s = e.removeClass("hidden").outerHeight(), 
            e.addClass("hidden"), this.$currentPanel.find(".contents").addClass("invisible"), this.$currentPanel.css("height", this.$currentPanel.outerHeight()), 
            this.$currentPanel.transition({
                height: s
            }, o, function() {
                e.removeClass("hidden"), a.$currentPanel.css("height", "auto"), a.$currentPanel.addClass("hidden"), 
                e.find(".contents").removeClass("invisible"), a.$currentPanel = e, a.$body.addClass("accelerate"), _.defer(function() {
                    a.$body.removeClass("accelerate");
                });
            }), this.router.navigate("/settings/" + i, {
                trigger: !1
            }));
        },
        onRmPrefixClick: function() {
            this.$inputUsername.focus();
        },
        onProfileInput: function(t) {
            $(t.currentTarget).hasClass("settings-username") || this.enableProfileSaveButton(!0);
        },
        enableProfileSaveButton: function(t) {
            t && this.isUsernameOK ? this.$profileSaveButton.removeClass("disabled").text("Save Changes") : this.$profileSaveButton.addClass("disabled");
        },
        onBioInput: function(t) {
            var e = this.$bio.val();
            this.$bioCounter.text(Math.max(160 - e.length, 0)), t && this.onProfileInput(t);
        },
        preventProfileScroll: function(t) {
            t.stopPropagation();
        },
        preventDefault: function(t) {
            t.preventDefault();
        },
        saveProfile: function() {
            this.$profileSaveButton.hasClass("disabled") || (this.trigger("saveProfile", {
                name: this.$("#settings-name").val(),
                uri: this.$("#settings-username").val(),
                desc: this.$("#settings-bio").val(),
                location: this.$("#settings-location").val(),
                website: this.$("#settings-website").val(),
                twitter: this.$("#settings-twitter").val(),
                fb: this.$("#settings-facebook").val()
            }), this.$profileSaveButton.text("Saved"), this.enableProfileSaveButton(!1));
        },
        updatePic: function(t) {
            this.user.set("pic", t), this.user.trigger("change:pic"), this.userpicChanghed = !0, this.hideCropPopup();
        },
        redrawUserPic: function() {
            this.$(".panel.profile .image-placeholder img").attr("src", "").attr("src", this.user.getUserpic(128));
        },
        onUserpicError: function(t, e) {
            this.hideCropPopup(), console.log(t, e);
        },
        deleteUserpic: function() {
            this.user.deletePic(), this.userpicChanghed = !0, this.$deleteUserpic.addClass("invisible");
        },
        validatePasswordForm: function() {
            var t = this.$oldPassword.val(), e = this.$newPassword.val(), i = this.$newPassword.siblings(".checkmark");
            0 !== t.length && e.length >= 8 ? this.$passwordSaveButton.text("Save Changes").removeClass("disabled") : this.$passwordSaveButton.addClass("disabled"), 
            e.length >= 8 ? i.removeClass("bad").addClass("ok") : i.removeClass("ok").addClass("bad"), this.$oldPassword.siblings(".checkmark").removeClass("bad");
        },
        savePassword: function() {
            var t = this;
            this.$passwordSaveButton.hasClass("disabled") || $.ajax({
                type: "POST",
                url: "/api/me/changepassword",
                data: {
                    oldPassword: md5(this.$oldPassword.val()),
                    newPassword: md5(this.$newPassword.val())
                },
                success: function() {
                    t.$passwordSaveButton.text("Changed").addClass("disabled");
                },
                error: function(e) {
                    var i = JSON.parse(e.responseText);
                    i && i.oldPasswordError ? t.$oldPassword.siblings(".checkmark").addClass("bad") : (console.log("Error changing password : ", i), 
                    alert("Problem changing password. Contact tech support, please: support@readymag.com"));
                }
            });
        },
        resetPassword: function() {
            var t = this;
            this.user.get("email") ? $.ajax({
                url: "/api/recoverypass",
                method: "POST",
                data: {
                    email: this.user.get("email")
                },
                success: function() {
                    t.$(".reset-password-success").removeClass("invisible"), t.$(".reset-password").addClass("invisible");
                },
                error: function() {
                    alert("Recovery problem. Contact tech support, please: support@readymag.com");
                }
            }) : (alert("Recovery problem. Contact tech support, please: support@readymag.com"), console.log("Error: User has no email."));
        },
        onUsernameInput: function(t) {
            var e;
            this.cancelCheckUsername = !1, "" != $.trim($(t.currentTarget).val()) && (this.normalizeCustomUsername(), 
            e = this.validateCustomUsername(), e.text && (this.updateUsernameStatus(!1, e.text), this._checkUsernameXHR && this._checkUsernameXHR.abort(), 
            this.cancelCheckUsername = !0), e.text && "checkserver" != e.status || this.checkUsernameAvailable());
        },
        updateUsernameStatus: function(t, e) {
            var i = this.$username.siblings(".checkmark"), n = i.find(".popup-message span");
            t ? (i.addClass("ok").removeClass("bad"), this.isUsernameOK = !0, this.enableProfileSaveButton(!0)) : (i.removeClass("ok").addClass("bad"), 
            e && n.text(e), this.isUsernameOK = !1, this.enableProfileSaveButton(!1));
        },
        _checkUsernameAvailable: function() {
            var t = this, e = $.trim(this.$username.val()), i = this.$username.siblings(".checkmark");
            return i.find(".popup-message span"), this.cancelCheckUsername ? undefined : e == this.user.get("uri") ? (this.updateUsernameStatus(!0), 
            undefined) : (this._checkUsernameXHR = $.ajax({
                url: "/api/checkusername/" + e,
                method: "GET",
                success: function() {
                    t.updateUsernameStatus(!0);
                },
                error: function() {
                    t.updateUsernameStatus(!1, "This username is unavailable");
                }
            }), undefined);
        },
        normalizeCustomUsername: function() {
            var t, e = this.$username.val();
            t = e.replace(/([^a-zA-Z0-9\.])/gi, ""), t = t.replace(/(\.{2,})/gi, "."), e !== t && this.$username.val(t);
        },
        validateCustomUsername: function() {
            var t, e = this.$username.val().toLowerCase(), i = "";
            return /(^\.)|(\.$)/.test(e) && (i = "Username should not start or end with a period"), /^p[0-9]+$/i.test(e) && (i = 'Username should not look like "p<number>" (ex. p234565)'), 
            /^u[0-9]+$/i.test(e) && e != this.user.get("rmid") && (t = "checkserver", i = 'Username should not look like "u<number>" (ex. u234565)'), 
            /^[0-9]+$/.test(e) && (i = "Username should not contain only numbers"), {
                text: i,
                status: t
            };
        },
        showCropPopup: function() {
            this.$cropPopup.removeClass("invisible").addClass("opaque"), this.showPreloader(), this.isUploading = !0, 
            this.isDraggable = this.$cropOverlay.hasClass("draggable"), this.$cropOverlay.removeClass("draggable"), 
            this.cropPopupShown = !0;
        },
        onGlobalKeyDown: function(t) {
            27 == t.keyCode && (this.cropPopupShown ? this.hideCropPopup() : this.hide());
        },
        showPreloader: function() {
            this.$cropPopupBody.addClass("loading"), this.$zoomHandler.css("top", 84);
        },
        hidePreloader: function() {
            this.$cropPopupBody.removeClass("loading"), this.$cropOverlay.toggleClass("draggable", this.isDraggable);
        },
        hideCropPopup: function() {
            var t = this;
            this.isUploading && this._currentXHR && this._currentXHR.abort(), this.$cropPopup.removeClass("opaque"), 
            this.cropPopupShown = !1, _.delay(function() {
                t.$cropPopup.addClass("invisible");
            }, 300);
        },
        resizePic: function() {
            this.$cropPopup.addClass("invisible");
        },
        onZoomerDrag: function(t) {
            this.$zoomHandler.hasClass("disabled") || this.isUploading || this.positionZoomHandler(t.startY, t.deltaY);
        },
        positionZoomHandler: function(t, e) {
            var i, n, s, o = 164, r = this.orig.no_zoom_out ? o / 2 + 2 : o, a = o / 2;
            i = t - this.$zoomTrack.offset().top, n = i + e - 12, n = 0 > n ? 0 : n, n = n > r ? r : n, s = a > n ? (a - n) / a : -(n - a) / a, 
            this.$zoomHandler.css("top", n), this.scalePicture(s);
        },
        repaintPic: function() {
            this.$cropPopupBody.css("background-size", Math.floor(this.orig.current_width) + "px " + Math.floor(this.orig.current_height) + "px"), 
            this.$cropPopupBody.css("background-position", Math.ceil(this.orig.left) + "px " + Math.ceil(this.orig.top) + "px");
        },
        initPicture: function(t, e) {
            var i, n, s;
            this.orig = {
                width: t,
                height: e,
                current_width: 0,
                current_height: 0,
                left: 0,
                top: 0,
                min_left: 0,
                min_top: 0,
                scale: 1,
                scale_q: 1,
                max_scale: 1,
                min_scale: 1
            }, this.orig.width = t, this.orig.height = e, this.$zoomHandler.removeClass("disabled"), this.$cropOverlay.addClass("draggable"), 
            i = this.orig.width > this.orig.height ? this.orig.height : this.orig.width, this.orig.width > this.CROP_WINDOW_W && this.orig.height > this.CROP_WINDOW_H ? (n = this.CROP_WINDOW_W / this.orig.width, 
            s = this.CROP_WINDOW_H / this.orig.height, this.orig.scale_q = n > s ? n : s, i * this.orig.scale_q < this.CROP_W_SIZE && (this.orig.scale_q = this.CROP_W_SIZE / i / this.orig.scale_q, 
            this.orig.no_zoom_out = !0), this.orig.min_scale = this.CROP_W_SIZE / i, this.orig.max_scale = 1 / this.orig.scale_q) : this.CROP_W_SIZE > i ? (this.orig.scale = this.CROP_W_SIZE / i, 
            this.orig.min_scale = this.orig.scale, this.orig.max_scale = this.orig.scale, this.orig.no_zoom_out = !0, 
            this.$zoomHandler.addClass("disabled"), this.orig.width == this.orig.height && this.$cropOverlay.removeClass("draggable")) : (this.orig.min_scale = this.CROP_W_SIZE / i, 
            this.orig.max_scale = 1 / (1 - this.orig.min_scale)), this.orig.current_width = this.orig.width * this.orig.scale, 
            this.orig.current_height = this.orig.height * this.orig.scale, this.orig.left = this.CROP_CENTER_LEFT - this.orig.current_width / 2, 
            this.orig.top = this.CROP_CENTER_TOP - this.orig.current_height / 2, this.orig.min_left = this.CROP_CENTER_LEFT + this.CROP_W_SIZE / 2 - this.orig.width, 
            this.orig.min_top = this.CROP_CENTER_TOP + this.CROP_W_SIZE / 2 - this.orig.height, this.scalePicture(0);
        },
        scalePicture: function(t) {
            var e, i, n, s, o, r;
            e = this.CROP_CENTER_LEFT - this.orig.left, i = this.CROP_CENTER_TOP - this.orig.top, n = this.orig.current_width, 
            0 >= t ? this.orig.scale = 1 + (1 - this.orig.min_scale / this.orig.scale_q) * t : t > 0 && (this.orig.scale = (this.orig.max_scale - 1) * t + 1), 
            this.orig.scale = this.orig.scale * this.orig.scale_q, this.orig.scale = this.orig.scale < this.orig.min_scale ? this.orig.min_scale : this.orig.scale, 
            this.orig.scale = this.orig.scale > this.orig.max_scale ? this.orig.max_scale : this.orig.scale, this.orig.current_width = this.orig.width * this.orig.scale, 
            this.orig.current_height = this.orig.height * this.orig.scale, this.orig.min_left = this.CROP_CENTER_LEFT + this.CROP_W_SIZE / 2 - this.orig.current_width, 
            this.orig.min_top = this.CROP_CENTER_TOP + this.CROP_W_SIZE / 2 - this.orig.current_height, r = this.orig.current_width / n, 
            s = -(e * r - e), o = -(i * r - i), this.movePicture(s, o);
        },
        onPictureDrag: function(t) {
            this.isUploading || this.movePicture(t.deltaX, t.deltaY, !0);
        },
        movePicture: function(t, e, i) {
            var n, s, o, r, a = this.CROP_CENTER_LEFT - this.CROP_W_SIZE / 2, l = this.CROP_CENTER_TOP - this.CROP_W_SIZE / 2;
            t = t || 0, e = e || 0, n = i ? this.start_drag_left : this.orig.left, s = i ? this.start_drag_top : this.orig.top, 
            o = n + t, r = s + e, this.orig.left = o > this.orig.min_left ? o : this.orig.min_left, this.orig.top = r > this.orig.min_top ? r : this.orig.min_top, 
            this.orig.left = a > o ? this.orig.left : a, this.orig.top = l > r ? this.orig.top : l, this.repaintPic();
        },
        loadOriginalPicture: function(t, e) {
            var i, n = this;
            e && (this.tmpUrl = e.result.tmpUrl, i = new Image(), i.onload = function() {
                n.$cropPopupBody.css("background-image", 'url("' + n.tmpUrl + '")'), n.hidePreloader(), n.initPicture(i.width, i.height);
            }, i.src = this.tmpUrl);
        },
        cropUserpic: function() {
            var t, e, i, n, s = this;
            t = Math.round((this.CROP_CENTER_LEFT - this.CROP_W_SIZE / 2 - this.orig.left) / this.orig.scale), e = Math.round((this.CROP_CENTER_TOP - this.CROP_W_SIZE / 2 - this.orig.top) / this.orig.scale), 
            i = n = Math.floor(this.CROP_W_SIZE / this.orig.scale), t + i > this.orig.width && (t = this.orig.width - i), 
            e + n > this.orig.height && (e = this.orig.height - n), $.ajax({
                type: "POST",
                url: "/api/me/cropuserpic",
                data: {
                    url: this.tmpUrl,
                    cropX: t,
                    cropY: e,
                    cropW: i,
                    cropH: n
                },
                success: function() {
                    s.updatePic(s.tmpUrl);
                },
                error: function(t) {
                    console.log("Error cropping avatar image : ", t.responceText);
                }
            });
        },
        cancelUserpicUpload: function() {
            this._currentXHR && this._currentXHR.abort(), this.hideCropPopup();
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.Static = Backbone.View.extend({
        sections: {},
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t), this.template = _.template($("template-collector-mags").text());
        },
        render: function(t, e) {
            var i = this.loadStatic(t);
            return i ? (this.$el.html(i).show().siblings().hide(), undefined) : e && e();
        },
        loadStatic: function(t) {
            return this.sections[t] || (this.sections[t] = $("#template-static-" + t).text()), this.sections[t];
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.Discover = Backbone.View.extend({
        events: {},
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.newestMags = new t.collections.NewestMagList(), this.newestMagsView = new t.classes.MagsView(_.extend(e, {
                type: "all",
                mags: this.newestMags,
                parent_context: "discover"
            })), this.featuredMagsView = new t.classes.FeaturedView({
                collector: this.collector
            }), this.currentXHR = null;
        },
        loadSection: function(t) {
            return this[t + "Mags"].load({
                success: _.bind(function() {
                    this.render(t);
                }, this),
                error: this.router.onError
            });
        },
        render: function(t) {
            return this.rendered || (this.$el.html(this.template({
                view: this
            })), this.rendered = !0, this.$sections = this.$(".sections"), this.$featured = this.$sections.find(".featured"), 
            this.$heading = this.$(".heading"), this.$switcherPopup = this.$(".heading .sort .popup"), this.$switcherDropTriangle = this.$(".heading .sort .drop-down .drop"), 
            this.$switcherDropText = this.$(".heading .sort .drop-down .text"), this.newestMagsView.setElement(this.$sections.find(".newest").get(0)), 
            this.featuredMagsView.setElement(this.$sections.find(".featured").get(0)), this.switchOn()), this.$el.siblings().hide(), 
            this.$el.show(), t && (this.currentXHR = this["render" + t.capitalize()](), this.$switcherDropText.text(t.capitalize())), 
            this.currentXHR;
        },
        switchOn: function() {
            this.collector.on("click", _.bind(function() {
                this.toggleSwitcherPopup(!0);
            }, this)), this.collector.on("magsCentered", _.bind(function(t) {
                t && t.newWidth && this.$heading.width(t.newWidth);
            }, this));
        },
        switchOff: function() {
            this.collector.off("click"), this.collector.oаа("magsCentered");
        },
        renderFeatured: function() {
            return preloadDesignImages("collector-maglist"), this.$sections.children().hide(), this.$heading.width(984), 
            this.featuredMagsView.render({
                success: _.bind(function() {
                    this.$featured.show(), this.$featured.find(".block-mag.middle .bl-title").dotdotdot({
                        height: 66
                    });
                }, this)
            });
        },
        renderNewest: function() {
            this.$sections.children().hide(), this.newestMagsView.render(), this.collector.triggerFinishedContentLoading();
        },
        onSwitchViewClick: function(t) {
            t.stopPropagation(), this.toggleSwitcherPopup();
        },
        toggleSwitcherPopup: function(t) {
            t ? (this.$switcherPopup.addClass("invisible"), this.$switcherDropTriangle.removeClass("expanded")) : (this.$switcherPopup.toggleClass("invisible"), 
            this.$switcherDropTriangle.toggleClass("expanded"));
        }
    }), $(function() {
        t.classes.Discover.prototype.template = _.template($("#template-collector-discover").text());
    });
}(RM), function(t) {
    "use strict";
    t.classes.Inbox = Backbone.View.extend({
        events: {
            "click .bl-mag-new": "markViewed"
        },
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.mags = new t.collections.InboxMagList(), this.magsView = new t.classes.MagsView(_.extend(e, {
                type: "all",
                mags: this.mags,
                readmark: !0,
                parent_context: "inbox"
            }));
        },
        load: function() {
            return this.mags.load({
                success: this.render,
                error: this.router.onError
            });
        },
        render: function() {
            this.rendered || (this.$el.html(this.template({
                view: this
            })), this.rendered = !0), this.$(".empty-icon").toggleClass("hidden", !(!this.mags || !this.mags.size())), 
            this.magsView.setElement(this.$(".inbox-mags")), this.$el.siblings().hide(), this.$el.show(), this.magsView.render(), 
            this.$("div[data-alt]:not(.rmalttext)").RMAltText(), this.collector.triggerFinishedContentLoading();
        },
        markViewed: function(t) {
            var e = $(t.currentTarget), i = e.data("id"), n = this.mags.find(function(t) {
                return t.get("num_id") == i;
            });
            this.me.markRead(n.id), $.post("/api/readymag/" + i + "/view", function() {
                e.fadeOut("fast");
            });
        }
    }), $(function() {
        t.classes.Inbox.prototype.template = _.template($("#template-collector-inbox").text());
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.CollectorMenu = Backbone.View.extend({
        events: {
            "click .item.create-mag": "create",
            "click .filter-slider": "toggleFilterPanel",
            "click .body .me .drop-button": "showUserPopup",
            "doubleclick .body .me .drop-button": "showUserPopup",
            "mouseleave .user-popup": "setPopupTimeout",
            "mouseleave .item.me": "setPopupTimeout",
            "mouseenter .user-popup": "resetPopupTimeout",
            "touchmove .menu-wrapper": "preventTouchScroll"
        },
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t), this.me && (this.me.on("change:pic", this.drawPic), this.me.on("change:unread", this.updateCount)), 
            this.router.magInfo.on("show", function() {
                this.toggleHidden(!0);
            }, this), this.router.magInfo.on("hide", function() {
                this.toggleHidden(!1);
            }, this), this.currentPage = "";
        },
        show: function() {
            this.rendered || this.render(), this.$el.show(), this.centerMenu(), this.switchOn();
        },
        hide: function() {
            this.rendered && (this.switchOff(), this.$el.hide());
        },
        toggleHidden: function(t) {
            this.$el.toggleClass("hidden-menu", t);
        },
        render: function() {
            var t, i = this.me;
            preloadDesignImages("collector-menu"), this.$el.html(this.template({
                me: i
            })), this.$menuWrapper = this.$(".collector-menu .menu-wrapper"), this.$menuBack = this.$(".collector-menu .back"), 
            this.$panel = this.$(".filter-panel"), this.$panelBody = this.$panel.find(".panel-body"), this.$user_popup = this.$(".user-popup"), 
            this.$user_drop_button = this.$(".item.me .drop-button"), t = this.router.routes[Backbone.history.fragment], 
            _.last(Backbone.history.fragment.split("/")) == i.get("uri") && (t = "user"), this.updateMenu(t), this.centerMenu(), 
            this.drawPic(), this.popupTimer = e;
        },
        updateCount: function() {
            this.$(".new-items").text(this.me.get("unread"));
        },
        preventTouchScroll: function(t) {
            t.preventDefault();
        },
        switchOn: function() {
            this.router.on("route", this.onRoute), this.collector.on("click", this.onGlobalClick), this.collector.on("resize", this.onResize), 
            this.collector.on("createNewMag", this.create), this.collector.on("showUserSettings", this.showEditProfile), 
            Modernizr.ismobile;
        },
        switchOff: function() {
            this.router.off("all", this.onRoute), this.collector.off("click", this.onGlobalClick), this.collector.off("resize", this.onResize), 
            this.collector.off("createNewMag", this.create), this.collector.off("showUserSettings", this.showEditProfile), 
            Modernizr.ismobile;
        },
        onSwipeUp: function(t) {
            return $(t.target).closest(".logo-container, .logo-back").length ? (this.showRMPopup(), t.stopPropagation(), 
            e) : (this.openFilterPanel(), e);
        },
        onSwipeDown: function(t) {
            $(t.target).closest(".logo-container, .logo-back, .rm-popup").length && this.closeRMPopup(), this.closeFilterPanel(!1);
        },
        onRoute: function(t) {
            "magInfo" != t && ("settings" !== t && this.isProfileEditPopupActive && this.profileEditView.hide(), 
            _([ "magInfo", "settings" ]).contains(t) || this.updateMenu(t));
        },
        onGlobalClick: function() {
            this.closePopups();
        },
        onResize: function() {
            this.centerMenu();
        },
        centerMenu: function() {
            this.$menuWrapper.css("margin-left", -Math.floor(this.$menuWrapper.outerWidth(!1) / 2));
        },
        create: function(t) {
            return Modernizr.ismobile ? (this.collector.showGoDesktopPopup(t, {
                popupDistance: 20
            }), e) : ($.ajax({
                url: "/api/mag/",
                type: "POST",
                success: this.onMagCreate,
                error: this.onCreateFail
            }), e);
        },
        onMagCreate: function(t) {
            window.location.href = "/edit/" + t.num_id + "/contents/";
        },
        onCreateFail: function() {
            console.log(arguments);
        },
        logout: function() {
            window.location.href = "/logout/";
        },
        drawPic: function() {
            this.$(".userpic").find("img").attr("src", this.me.getUserpic(48));
        },
        openFilterPanel: function() {
            this.$panel.removeClass("hidden"), this.$menuBack.addClass("full-opacity"), this.$panelBody.addClass("full-opacity"), 
            this.$panel.addClass("filter-expanded");
        },
        closeFilterPanel: function(t) {
            var e = 200;
            this.$panel.removeClass("filter-expanded"), setTimeout(_.bind(function() {
                if (this.$menuBack.removeClass("full-opacity"), this.$panelBody.removeClass("full-opacity"), t) {
                    this.$panel.find(".filter-slider").addClass("slider-hidden");
                    var e = this;
                    setTimeout(function() {
                        e.$panel.addClass("hidden");
                    }, 200);
                }
            }, this), e);
        },
        hideFilterPanel: function() {
            this.closeFilterPanel(!0);
        },
        unhideFilterPanel: function() {
            this.$panel.removeClass("hidden"), this.$panel.find(".filter-slider").removeClass("slider-hidden");
        },
        toggleFilterPanel: function() {
            this.$panel.hasClass("filter-expanded") ? this.closeFilterPanel() : this.openFilterPanel();
        },
        updateMenu: function(t) {
            var e = "";
            switch (this.currentPage = t, t && this.$el.find(".item").removeClass("active"), t) {
              case "discover":
                e = ".panel-body .discover-featured, .body .discover", this.unhideFilterPanel();
                break;

              case "discoverNewest":
                e = ".panel-body .discover-newest, .body .discover", this.unhideFilterPanel();
                break;

              case "inbox":
                e = ".body .inbox", this.hideFilterPanel();
                break;

              case "user":
                this.hideFilterPanel();
            }
            $(e).addClass("active");
        },
        showUserPopup: function(t) {
            t.preventDefault(), t.stopPropagation(), this.isUserPopupVisible ? this.closePopups() : (this._showPopup(this.$user_popup), 
            this.$user_drop_button.addClass("rotate"), this.isUserPopupVisible = !0);
        },
        _showPopup: function(t) {
            t.hasClass("full-opacity") || (t.show(), _.defer(function() {
                t.removeClass("zero-opacity").addClass("full-opacity");
            }));
        },
        closePopups: function() {
            this.closeUserPopup(), this.$user_drop_button.removeClass("rotate"), this.isUserPopupVisible = !1;
        },
        closeUserPopup: function() {
            this._closePopup(this.$user_popup);
        },
        _closePopup: function(t) {
            if (!t.hasClass("zero-opacity")) {
                var e = 100;
                t.removeClass("full-opacity").addClass("zero-opacity"), setTimeout(function() {
                    t.hide();
                }, e);
            }
        },
        setPopupTimeout: function() {
            var t = this;
            this.popupTimer = setTimeout(function() {
                t.closePopups();
            }, 500);
        },
        resetPopupTimeout: function() {
            clearTimeout(this.popupTimer);
        },
        showEditProfile: function(e) {
            var i = this, n = function() {
                i.settingsReturnUrl && (i.router.navigate(i.settingsReturnUrl, {
                    trigger: !1
                }), i.router.latestFragment = i.settingsReturnUrl);
            };
            this.settingsReturnUrl = e && e.returnUrl, this.profileEditView || (this.profileEditView = new t.classes.ProfileEditView({
                $el: $("body > .popups"),
                user: this.me,
                collector: this.collector,
                router: this.router
            }), this.profileEditView.on("dismiss", function(t) {
                i.isProfileEditPopupActive = !1, i.profileEditView.off("saveProfile"), t && t.visualChanges && ("user" == i.currentPage ? window.location.href = i.me.get("uri") : (n(), 
                window.location.reload())), n();
            })), this.profileEditView.on("saveProfile", function(t) {
                t || console.log("Cannot save empty profile data. Sorry."), i.saveProfileData(t);
            }), this.isProfileEditPopupActive || (this.profileEditView.show(e), this.isProfileEditPopupActive = !0);
        },
        switchProfileTab: function(t) {
            t = t ? t : "profile", this.profileEditView && this.isProfileEditPopupActive && this.profileEditView.switchTab(t);
        },
        saveProfileData: function(t) {
            var e, i;
            if (t) {
                for (e in t) t[e] = $.trim(t[e]);
                i = function(t) {
                    400 != t.status && (alert("Problem saving user data. Contact tech support, please: support@readymag.com"), 
                    console.log("Cannnot save user data: " + t.responseText));
                }, this.me.store(t, {
                    error: i
                }), this.router.collector_view.triggerMySetingsChanged();
            }
        },
        preventDefault: function(t) {
            t.preventDefault();
        }
    }), $(function() {
        t.classes.CollectorMenu.prototype.template = _.template($("#template-collector-menu").text());
    });
}(RM), function(t) {
    "use strict";
    t.classes.FollowingPopup = Backbone.View.extend({
        events: {
            "click .back": "dismiss",
            "click .follow-close": "dismiss",
            "click .link": "dismiss",
            "click .follows .item": "onFollowsItemClick",
            "click .follow-button": "onFollowClick",
            "click .list-follow-button": "onListFollowClick",
            "touchmove .back": "preventTouchScroll"
        },
        PAGE_SIZE: 100,
        SCROLL_TRESHOLD: .8,
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t), this.scrollers = [], this.pointers = [];
        },
        render: function(t) {
            this.collectorView.off("resize", this.recalcScrollers), this.$el.html(this.template({
                user: this.user
            })), this.renderList("followers"), this.renderList("following"), this.$followsPointer = $(".follows .triangle"), 
            this.$mainFollowButton = $(".follow-button"), t && "followers" == t ? this.positionFollowsPointer($(".follows .followers")) : this.positionFollowsPointer($(".follows .following")), 
            this.collectorView.on("resize", this.recalcScrollers), this._usercache = {};
        },
        renderList: function(t) {
            this.pointers[t] = 0, this.scrollers[t] = this.$(".list." + t).RMScroll({
                $container: this.$(".list." + t + " .scrollable-zone"),
                $content: this.$(".list." + t + " .scrollable-content"),
                $handle: this.$(".list." + t + " .scroll-bar"),
                gap_start: 8,
                onScroll: _.bind(function(e) {
                    e.scroll_percent > this.SCROLL_TRESHOLD && this.renderNextPortion(t);
                }, this)
            }).data("scroll"), this.$(".list." + t).find(".scrollable-content").empty(), this.renderNextPortion(t);
        },
        renderNextPortion: function(t) {
            var e, i = this.user.get(t);
            this.pointers[t] != i.length && (e = this.pointers[t] + this.PAGE_SIZE, e = e > i.length ? i.length : e, 
            this.$(".list." + t).find(".scrollable-content").append(this.listTemplate({
                users: i.slice(this.pointers[t], e)
            })), this.pointers[t] = e, this.scrollers[t].recalc());
        },
        dismiss: function() {
            _.defer(_.bind(function() {
                this.$el.empty().addClass("hidden");
            }, this)), this.trigger("dismiss");
        },
        onFollowsItemClick: function(t) {
            t.stopPropagation(), this.positionFollowsPointer($(t.currentTarget));
        },
        positionFollowsPointer: function(t) {
            var e = t.position().left + t.outerWidth(!0) / 2 - 16;
            this.$followsPointer.css("left", e), this.$(".follows .item").removeClass("selected"), t.addClass("selected"), 
            this.$(".list.followers").toggle(t.hasClass("followers")), this.$(".list.following").toggle(t.hasClass("following")), 
            this.recalcScrollers();
        },
        onFollowClick: function() {
            this.me.toggleFollow(this.user), this.$mainFollowButton.toggleClass("following"), this.renderList("followers");
        },
        onListFollowClick: function(t) {
            var e = $(t.currentTarget).data("user"), i = this._usercache[e] || _.find(this.user.get("followers"), function(t) {
                return t.uri == e;
            }) || _.find(this.user.get("following"), function(t) {
                return t.uri == e;
            });
            i && (this._usercache[e] = i, this.me.toggleFollow(i), $(t.currentTarget).toggleClass("following", i.isFollowed), 
            this.user == this.me && this.$(".follows .followers").hasClass("selected") && this.renderList("following"));
        },
        recalcScrollers: function() {
            this.scrollers.followers && this.scrollers.followers.recalc(), this.scrollers.following && this.scrollers.following.recalc();
        },
        preventTouchScroll: function(t) {
            t.preventDefault(), t.stopPropagation();
        }
    }), $(function() {
        t.classes.FollowingPopup.prototype.template = _.template($("#template-collector-following").text()), 
        t.classes.FollowingPopup.prototype.listTemplate = _.template($("#template-collector-following-list").text());
    });
}(RM), function(t) {
    "use strict";
    t.classes.UnauthPopup = Backbone.View.extend({
        events: {},
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t), this.$html = $(_.template($("#unauthorized-popup").text())());
        },
        show: function() {
            var t, e, i, n, s, o = 208, r = 76;
            this.$parentEl = this.$el.parents("div").first(), this.$el && this.$parentEl && (this.$popup = this.$parentEl.find(".unauthorized-popup"), 
            this.$popup.length || (this.$popup = this.$html.appendTo(this.$parentEl)), t = this.$el.offset().left, 
            e = this.$el.offset().top, i = this.$el.width(), n = t + Math.floor((i - o) / 2), s = e - r, this.$popup.css({
                left: n,
                top: s
            }), _.defer(_.bind(function() {
                this.$popup.removeClass("hidden");
            }, this)), this.$el.on("mouseleave", this.startTimer), this.$popup.on("mouseleave", this.startTimer), 
            this.$popup.on("mouseenter", this.stopTimer), this.$parentEl.on("click", this.hide));
        },
        hide: function() {
            this.$popup && this.$popup.addClass("hidden"), this.$el.off("mouseleave", this.startTimer), this.$popup.off("mouseleave", this.startTimer), 
            this.$popup.off("mouseenter", this.stopTimer), this.$parentEl.off("click", this.hide);
        },
        startTimer: function() {
            this.timer = setTimeout(this.hide, 300);
        },
        stopTimer: function() {
            clearTimeout(this.timer);
        }
    });
}(RM), function(t) {
    "use strict";
    t.classes.GoDesktopPopup = Backbone.View.extend({
        events: {},
        initialize: function(t) {
            _.bindAll(this), this.popupDistance = 20, _.extend(this, t), this.$html = $(_.template($("#godesktop-popup").text())()), 
            this.$window = $(window);
        },
        show: function(t) {
            var e, i, n, s, o, r, a, l = 512, c = 258, h = 32;
            _.extend(this, t), this.$parentEl = $("body > .popups"), this.$el && this.$parentEl && (this.$popup = this.$parentEl.find(".godesktop-popup"), 
            this.$popup.length || (this.$popup = this.$html.appendTo(this.$parentEl)), this.$popupBubble = this.$popup.find(".popup"), 
            this.$popupTriangle = this.$popup.find(".triangle"), this.$popupClose = this.$popup.find(".btn-close"), 
            this.hide(), e = this.$el.offset().left - this.$window.scrollLeft(), i = this.$el.offset().top, n = this.$el.width(), 
            a = this.$window.width(), s = Math.floor((a - l) / 2) - this.$window.scrollLeft(), o = i - c - this.popupDistance, 
            r = e + Math.floor(n / 2) - s - Math.floor(h / 2), this.$popupBubble.css({
                left: s,
                top: o
            }), this.$popupTriangle.css("left", r), _.defer(_.bind(function() {
                this.$popup.removeClass("invisible");
            }, this)), this.$popup.on("click", this.hide), this.$popupBubble.on("click", this.onPopupBubbleClick), 
            this.$popupClose.on("click", this.hide), this.$window.on("resize", this.hide));
        },
        hide: function(t) {
            t && t.stopPropagation(), this.$popup && this.$popup.addClass("invisible"), this.$popup.off("click", this.hide), 
            this.$popupBubble.off("click", this.onPopupBubbleClick), this.$popupClose.off("click", this.hide), this.$window.off("resize", this.hide);
        },
        onPopupBubbleClick: function(t) {
            t.stopPropagation();
        }
    });
}(RM), function(t) {
    "use strict";
    t.views.ConnectionAlert = Backbone.View.extend({
        events: {
            "click .connection": "togglePopup"
        },
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t);
        },
        render: function() {
            this.$el.html(this.template()), this.rendered = !0;
        },
        show: function() {
            this.rendered || this.render(), this.$el.addClass("visible"), this.$el.removeClass("save-progress"), 
            _.delay(this.showPopup, 300);
        },
        showSaveInProgress: function() {
            this.rendered || this.render(), this.$el.addClass("visible save-progress");
        },
        hide: function() {
            var t = this;
            this.hidePopup(), _.delay(function() {
                t.$el.removeClass("visible save-progress");
            }, 600);
        },
        showPopup: function() {
            this.$(".popup").removeClass("hidden");
        },
        hidePopup: function() {
            this.$(".popup").addClass("hidden");
        },
        togglePopup: function() {
            this.$(".popup").toggleClass("hidden");
        },
        switchOn: function() {},
        switchOff: function() {}
    }), $(function() {
        t.views.ConnectionAlert.prototype.template = _.template($("#template-common-alert-connection").text());
    });
}(RM), function(t) {
    "use strict";
    t.classes.CollectorRouter = Backbone.Router.extend({
        routes: {
            "": "mainpage",
            "discover(/)": "discover",
            "discover/avadakedavra(/)": "discoverNewest",
            "rm/:page(/)": "rmPage",
            ":user/:mag_id/info(/)": "magInfo",
            ":mag_id/info(/)": "magInfo",
            "settings(/)(:section)(/)": "settings",
            "inbox(/)": "inbox"
        },
        noScrollTopRouteNames: [ "magInfo", "settings" ],
        PRELOADER_DELAY: 1e3,
        constructor: function() {
            return this.route(/^((?!(\d+|p\d+)\/?$)(?!\.)(?!\w+\.$)[\w\.]+)\/?$/, "user"), Backbone.Router.apply(this, arguments), 
            this;
        },
        initialize: function() {
            _.bindAll(this), this.magInfo = new t.classes.MagInfo({
                me: this.me,
                tp: "collector"
            }), this.usersLoader = t.models.usersLoader, this.me = this.usersLoader.me, this.$collector_container = $("#collector"), 
            this.$collector_preloader = $("#collector .preloader"), this.$content = this.$collector_container.find(".content"), 
            this.collector_view = new t.classes.CollectorView({
                el: $("body").get(0),
                router: this,
                magInfo: this.magInfo
            });
            var e = {
                collector: this.collector_view,
                router: this
            };
            this.discoverView = new t.classes.Discover(_.extend({
                $el: this.$content.find(".discover"),
                collector: this.collector_view
            }, _.clone(e))), this.inboxView = new t.classes.Inbox(_.extend({
                $el: this.$content.find(".inbox"),
                me: this.me
            }, _.clone(e))), this.userView = new t.classes.User(_.extend({
                $el: this.$content.find(".user")
            }, _.clone(e))), this.staticView = new t.classes.Static(_.extend({
                $el: this.$content.find(".static")
            }, _.clone(e))), this.menuView = new t.classes.CollectorMenu(_.extend({
                $el: this.$collector_container.find(".menu"),
                me: this.me
            }, _.clone(e))), this.on("route", this.onRoute), this.analytics = new t.Analytics({
                router: this
            });
        },
        update: function() {
            t.screenshot || this.me && (this._updateXHR && this._updateXHR.abort(), this._updateXHR = $.ajax({
                url: "/api/state",
                global: !1,
                error: function() {},
                success: _.bind(function(t) {
                    this.me.get("unread") != t.unread && "inbox" == this.currentPage && (this._loading = this.inboxView.load()), 
                    this.me.set(t);
                }, this)
            }));
        },
        mainpage: function() {
            this.navigate("/discover", {
                trigger: !0,
                replace: !0
            });
        },
        discover: function() {
            return this.currentPage = "discover", this.me ? (this.startLoader(), this._loading = this.discoverView.render("featured"), 
            undefined) : this.showLogin();
        },
        discoverNewest: function() {
            return this.currentPage = "discover", this.me ? (this.startLoader(), this._loading = this.discoverView.loadSection("newest"), 
            undefined) : this.showLogin();
        },
        inbox: function() {
            return this.currentPage = "inbox", this.me ? (this.startLoader(), this._loading = this.inboxView.load(), 
            undefined) : this.showLogin();
        },
        rmPage: function(t) {
            return this.currentPage = "static", this.me ? (this.startLoader(), this.staticView.render(t, this.onError), 
            undefined) : this.showLogin();
        },
        user: function(e) {
            if (parseInt(e, 10) != e) {
                if (this.currentPage = "user", !this.me) return this.showLogin();
                "collector" !== t.common.mode && this.switchOn(), this.startLoader(), this._loading = this.usersLoader.loadByUsername({
                    user_uri: e,
                    success: this.userView.render,
                    error: this.onError,
                    is_me: e === this.me.get("uri")
                });
            }
        },
        magInfo: function(e, i) {
            i || (i = e, e = null), this.magInfo.magModel && this.magInfo.magModel.getId() == i || (this.me ? this.currentPage || (this.discover(), 
            this.magInfo.returnUrl = "discover", _.defer(_.bind(function() {
                this.menuView.updateMenu("discover");
            }, this))) : (this.collector_view.showDefaultBG(), this.magInfo.setAlwaysShow()));
            var n = null;
            return _.each(window.ServerData.mags, function(t) {
                var e = JSON.parse(decodeURIComponent(t));
                e.uri == i && (n = e);
            }), n ? (this.magInfo.magModel = new t.models.UserMag(n, {
                parse: !0
            }), this.magInfo.show(), undefined) : this.magInfo.magModel ? (this.magInfo.show(), undefined) : (this.magInfo.magModel = e ? new t.models.UserMag({
                user: e,
                uri: i
            }) : new t.models.UserMag({
                num_id: i
            }), this.magInfo.magModel.fetch({
                success: _.bind(function() {
                    this.magInfo.show();
                }, this)
            }), undefined);
        },
        settings: function(t) {
            var e, i;
            if (!this.me) return this.showLogin();
            if (0 == $("#collector .content").height()) {
                var n = this;
                this.discover(), this.latestFragment = "discover", _.defer(function() {
                    n.menuView.updateMenu("discover");
                });
            }
            e = Backbone.history.getFragment(), i = this.latestFragment, this.menuView.isProfileEditPopupActive ? this.menuView.switchProfileTab(t) : this.menuView.showEditProfile({
                returnUrl: i,
                section: t
            });
        },
        abort: function() {
            this._loading && (this._loading.abort(), this._loading = null);
        },
        onRoute: function(e) {
            this.latestFragment = Backbone.history.getFragment();
            var i = _.compact(this.latestFragment.split("/"));
            "info" != _.last(i) && this.magInfo.shown && this.magInfo.hide(!0), this.setDocumentTitle(e), this.scrollTopOnRoute(e), 
            "collector" != t.common.mode && this.switchOn();
        },
        scrollTopOnRoute: function(t) {
            -1 === _.indexOf(this.noScrollTopRouteNames, t) && (Modernizr.ismobile ? $("html, body").scrollTop(0) : this.$collector_container.scrollTop(0));
        },
        setDocumentTitle: function(t) {
            var e = {
                discover: "Readymag • Featured",
                discoverNewest: "Readymag • Newest",
                inbox: "Readymag • Inbox",
                about: "Readymag • About"
            };
            e[t] && (window.document.title = e[t]);
        },
        switchOn: function() {
            return this.me ? (t.common.mode = "collector", this.$collector_container.show(), this.collector_view.switchOn(), 
            this.menuView.show(), this._updateInterval = setInterval(this.update, 7e3), t.magrouter.switchOff(), 
            this.listenTo(this.collector_view, "finishedContentLoading", this.hideLoader), undefined) : !1;
        },
        switchOff: function() {
            this.collector_view.switchOff(), this.$collector_container.hide(), this.menuView.hide(), clearInterval(this._updateInterval), 
            this.currentPage = "", this.stopListening(this.collector_view, "contentLoaded", this.hideLoader);
        },
        restoreLastState: function(t) {
            return t = _.defaults(t || {}, {
                trigger: !0
            }), this.latestFragment ? (this.navigate(this.latestFragment, t), this.latestFragment) : !1;
        },
        startLoader: function() {
            var t = this;
            this.abort(), this.preloaderCancelled = !1, this.preloader_timeout = setTimeout(function() {
                t.preloaderCancelled || t.$collector_preloader.removeClass("hidden");
            }, this.PRELOADER_DELAY);
        },
        hideLoader: function() {
            this.preloaderCancelled = !0, this.$collector_preloader.addClass("hidden"), clearTimeout(this.preloader_timeout);
        },
        notFound: function() {
            $("#mags").hide(), $("#collector").show().find(".content").show().find(".page404").show().siblings().hide();
        },
        showLogin: function() {
            window.location.href = "/login";
        },
        onError: function(t) {
            this.hideLoader(), t && _.contains([ 500, 501, 502, 503 ], t.statusCode) || (document.title = "404", 
            this.$content.find(".page404").show().siblings().hide(), this.menuView && this.menuView.closeFilterPanel(!0));
        }
    });
}(RM);

var preloadDesignImagesList = {
    login: {
        normal: [ "/img/collector/login-register/go-active.png", "/img/collector/login-register/go-hover.png", "/img/collector/pass_eye.png", "/img/collector/pass_eye_closed.png" ],
        retina: [ "/img/collector/login-register/retina-go-active.png", "/img/collector/login-register/retina-go-hover.png", "/img/collector/pass_eye@2x.png", "/img/collector/pass_eye_closed@2x.png" ]
    },
    embed: {
        normal: [ "/img/common/embed/bottom-256.png", "/img/common/embed/bottom-512.png", "/img/common/embed/close.png", "/img/common/embed/close-hover.png" ],
        retina: [ "/img/common/embed/retina-bottom-256.png", "/img/common/embed/retina-bottom-512.png", "/img/common/embed/retina-close.png", "/img/common/embed/retina-close-hover.png" ]
    },
    "mag-info": {
        normal: [ "/img/common/mag-info/close-hover.png", "/img/common/mag-info/info-active-hover.png", "/img/common/mag-info/social-like.png", "/img/common/mag-info/social-like-active.png", "/img/common/mag-info/social-like-active-hover.png", "/img/common/mag-info/social-like-hover.png", "/img/common/mag-info/social-facebook-hover.png", "/img/common/mag-info/social-twitter-hover.png", "/img/common/mag-info/social-pinterest-hover.png", "/img/common/mag-info/social-mail-hover.png", "/img/common/mag-info/social-embed-hover.png", "/img/common/mag-info/social-report-hover.png", "/img/common/mag-info/updated.png" ],
        retina: [ "/img/common/mag-info/retina-close-hover.png", "/img/common/mag-info/retina-info-active-hover.png", "/img/common/mag-info/retina-social-like.png", "/img/common/mag-info/retina-social-like-active.png", "/img/common/mag-info/retina-social-like-active-hover.png", "/img/common/mag-info/retina-social-like-hover.png", "/img/common/mag-info/retina-social-facebook-hover.png", "/img/common/mag-info/retina-social-twitter-hover.png", "/img/common/mag-info/retina-social-pinterest-hover.png", "/img/common/mag-info/retina-social-mail-hover.png", "/img/common/mag-info/retina-social-embed-hover.png", "/img/common/mag-info/retina-social-report-hover.png", "/img/common/mag-info/retina-updated.png" ]
    },
    constructor: {
        normal: [ "/img/constructor/block-dot-plus.png", "/img/constructor/toolbar/connection-alert.png" ],
        retina: [ "/img/constructor/toolbar/connection-alert@2x.png" ]
    },
    controls: {
        normal: [ "/img/constructor/controls/arrow-hover.png" ],
        retina: []
    },
    "controls-align": {
        normal: [ "/img/constructor/controls/align/bottom-hover.png", "/img/constructor/controls/align/center-hover.png", "/img/constructor/controls/align/icon-hover.png", "/img/constructor/controls/align/left-hover.png", "/img/constructor/controls/align/middle-hover.png", "/img/constructor/controls/align/right-hover.png", "/img/constructor/controls/align/top-hover.png" ],
        retina: []
    },
    "controls-effects": {
        normal: [ "/img/constructor/controls/effects/icon-hover.png" ],
        retina: []
    },
    "controls-layer": {
        normal: [ "/img/constructor/controls/layer/down-active.png", "/img/constructor/controls/layer/down-hover.png", "/img/constructor/controls/layer/icon-hover.png", "/img/constructor/controls/layer/up-active.png", "/img/constructor/controls/layer/up-hover.png" ],
        retina: []
    },
    "controls-text_align": {
        normal: [ "/img/constructor/controls/text_align/center-hover.png", "/img/constructor/controls/text_align/icon-hover.png", "/img/constructor/controls/text_align/justify-hover.png", "/img/constructor/controls/text_align/left-hover.png", "/img/constructor/controls/text_align/right-hover.png" ],
        retina: []
    },
    "controls-text_bius": {
        normal: [ "/img/constructor/controls/text_bius/all-caps-hover.png", "/img/constructor/controls/text_bius/bold-hover.png", "/img/constructor/controls/text_bius/icon-hover.png", "/img/constructor/controls/text_bius/italic-hover.png", "/img/constructor/controls/text_bius/small-caps-hover.png", "/img/constructor/controls/text_bius/strike-hover.png", "/img/constructor/controls/text_bius/sub-hover.png", "/img/constructor/controls/text_bius/sup-hover.png", "/img/constructor/controls/text_bius/underline-hover.png" ],
        retina: []
    },
    "controls-text_columns": {
        normal: [ "/img/constructor/controls/text_columns/icon-hover.png" ],
        retina: []
    },
    "controls-text_edit": {
        normal: [ "/img/constructor/controls/text_edit/icon-hover.png" ],
        retina: []
    },
    "controls-text_link": {
        normal: [ "/img/constructor/controls/text_link/apply.png", "/img/constructor/controls/text_link/apply-hover.png", "/img/constructor/controls/text_link/delete.png", "/img/constructor/controls/text_link/delete-hover.png", "/img/constructor/controls/text_link/icon-hover.png" ],
        retina: []
    },
    "controls-text_typography": {
        normal: [ "/img/constructor/controls/text_typography/font-arrows-hover.png", "/img/constructor/controls/text_typography/icon-hover.png", "/img/constructor/controls/text_typography/point-active.png", "/img/constructor/controls/text_typography/point-hover.png", "/img/constructor/controls/text_typography/style-arrows-hover.png", "/img/constructor/controls/text_typography/unlinked.png" ],
        retina: []
    },
    "controls-slideshow_manager": {
        normal: [ "/img/constructor/controls/slideshow_manager/add-hover.png", "/img/constructor/controls/slideshow_manager/image-placeholder.png", "/img/constructor/controls/slideshow_manager/remove.png", "/img/constructor/controls/slideshow_manager/remove-hover.png", "/img/constructor/controls/slideshow_manager/update.png", "/img/constructor/controls/slideshow_manager/update-hover.png", "/img/constructor/controls/slideshow_manager/preloader.png" ],
        retina: []
    },
    "controls-shape_settings": {
        normal: [ "/img/constructor/controls/shape_settings/color-arrow.png", "/img/constructor/controls/shape_settings/color-arrow-hover.png", "/img/constructor/controls/shape_settings/icon.png", "/img/constructor/controls/shape_settings/icon-hover.png", "/img/constructor/controls/shape_settings/opacity-grid.png", "/img/constructor/controls/shape_settings/point-active.png", "/img/constructor/controls/shape_settings/point-hover.png", "/img/constructor/controls/shape_settings/popup-arrow.png", "/img/constructor/controls/shape_settings/popup-arrow-hover.png", "/img/constructor/controls/shape_settings/stroke-dashed.png", "/img/constructor/controls/shape_settings/stroke-dotted.png", "/img/constructor/controls/shape_settings/stroke-double.png", "/img/constructor/controls/shape_settings/stroke-solid.png" ],
        retina: []
    },
    colorbox: {
        normal: [ "/img/constructor/helpers/colorbox/add-hover.png", "/img/constructor/helpers/colorbox/fav-active.png", "/img/constructor/helpers/colorbox/fav-hover.png", "/img/constructor/helpers/colorbox/trash-active.png", "/img/constructor/helpers/colorbox/trash-hover.png" ],
        retina: []
    },
    fontselector: {
        normal: [ "/img/constructor/helpers/fontselector/add-to-fav.png", "/img/constructor/helpers/fontselector/add-to-fav-hover.png", "/img/constructor/helpers/fontselector/delete.png", "/img/constructor/helpers/fontselector/delete-hover.png", "/img/constructor/helpers/fontselector/fav-inverted.png", "/img/constructor/helpers/fontselector/google.png", "/img/constructor/helpers/fontselector/in-fav.png", "/img/constructor/helpers/fontselector/search-active.png", "/img/constructor/helpers/fontselector/search-hover.png" ],
        retina: []
    },
    toolbar: {
        normal: [ "/img/constructor/toolbar/menu-closed.png", "/img/constructor/toolbar/menu-closed-hover.png", "/img/constructor/toolbar/menu-opened.png", "/img/constructor/toolbar/menu-opened-hover.png", "/img/constructor/toolbar/preview-hover.png" ],
        retina: [ "/img/constructor/toolbar/retina-menu-closed.png", "/img/constructor/toolbar/retina-menu-closed-hover.png", "/img/constructor/toolbar/retina-menu-opened.png", "/img/constructor/toolbar/retina-menu-opened-hover.png", "/img/constructor/toolbar/retina-preview-hover.png" ]
    },
    pagespanel: {
        normal: [ "/img/constructor/pagespanel/back-click.png", "/img/constructor/pagespanel/back-hover.png", "/img/constructor/pagespanel/eye-invisible.png", "/img/constructor/pagespanel/eye-invisible-active.png", "/img/constructor/pagespanel/eye-visible.png", "/img/constructor/pagespanel/eye-visible-active.png", "/img/constructor/pagespanel/fullscreen.png", "/img/constructor/pagespanel/fullscreen-active.png", "/img/constructor/pagespanel/fullscreen-active-hover.png", "/img/constructor/pagespanel/fullscreen-hover.png", "/img/constructor/pagespanel/list-view-active.png", "/img/constructor/pagespanel/list-view-hover.png", "/img/constructor/pagespanel/plus-click.png", "/img/constructor/pagespanel/plus-hover.png", "/img/constructor/pagespanel/settings.png", "/img/constructor/pagespanel/settings-active.png", "/img/constructor/pagespanel/settings-active-hover.png", "/img/constructor/pagespanel/settings-hover.png", "/img/constructor/pagespanel/slide-view.png", "/img/constructor/pagespanel/slide-view-active.png", "/img/constructor/pagespanel/slide-view-hover.png", "/img/constructor/pagespanel/submenu-clone-hover.png", "/img/constructor/pagespanel/submenu-edit-hover.png", "/img/constructor/pagespanel/submenu-invisible.png", "/img/constructor/pagespanel/submenu-invisible-hover.png", "/img/constructor/pagespanel/submenu-remove-hover.png", "/img/constructor/pagespanel/submenu-visible.png", "/img/constructor/pagespanel/submenu-visible-hover.png" ],
        retina: [ "/img/constructor/pagespanel/retina-back-click.png", "/img/constructor/pagespanel/retina-back-hover.png", "/img/constructor/pagespanel/retina-eye-invisible.png", "/img/constructor/pagespanel/retina-eye-invisible-active.png", "/img/constructor/pagespanel/retina-eye-visible.png", "/img/constructor/pagespanel/retina-eye-visible-active.png", "/img/constructor/pagespanel/retina-fullscreen.png", "/img/constructor/pagespanel/retina-fullscreen-active.png", "/img/constructor/pagespanel/retina-fullscreen-active-hover.png", "/img/constructor/pagespanel/retina-fullscreen-hover.png", "/img/constructor/pagespanel/retina-list-view-active.png", "/img/constructor/pagespanel/retina-list-view-hover.png", "/img/constructor/pagespanel/retina-plus-click.png", "/img/constructor/pagespanel/retina-plus-hover.png", "/img/constructor/pagespanel/retina-settings.png", "/img/constructor/pagespanel/retina-settings-active.png", "/img/constructor/pagespanel/retina-settings-active-hover.png", "/img/constructor/pagespanel/retina-settings-hover.png", "/img/constructor/pagespanel/retina-slide-view.png", "/img/constructor/pagespanel/retina-slide-view-active.png", "/img/constructor/pagespanel/retina-slide-view-hover.png", "/img/constructor/pagespanel/retina-submenu-clone-hover.png", "/img/constructor/pagespanel/retina-submenu-edit-hover.png", "/img/constructor/pagespanel/retina-submenu-invisible.png", "/img/constructor/pagespanel/retina-submenu-invisible-hover.png", "/img/constructor/pagespanel/retina-submenu-remove-hover.png", "/img/constructor/pagespanel/retina-submenu-visible.png", "/img/constructor/pagespanel/retina-submenu-visible-hover.png" ]
    },
    settings: {
        normal: [ "/img/constructor/pagespanel-settings/context-panel-corner.png", "/img/constructor/pagespanel-settings/link-status-error.png", "/img/constructor/pagespanel-settings/link-status-ok.png", "/img/constructor/pagespanel-settings/republish-arrow.png", "/img/constructor/pagespanel-settings/republish-arrow-hover.png", "/img/constructor/pagespanel-settings/republish-line.png", "/img/constructor/pagespanel-settings/republish-settings.png", "/img/constructor/pagespanel-settings/settings-corner.png", "/img/constructor/pagespanel-settings/share-facebook.png", "/img/constructor/pagespanel-settings/share-facebook-hover.png", "/img/constructor/pagespanel-settings/share-mail.png", "/img/constructor/pagespanel-settings/share-mail-hover.png", "/img/constructor/pagespanel-settings/share-twitter.png", "/img/constructor/pagespanel-settings/share-twitter-hover.png", "/img/constructor/pagespanel-settings/textured-panel-corner.png" ],
        retina: [ "/img/constructor/pagespanel-settings/retina-context-panel-corner.png", "/img/constructor/pagespanel-settings/retina-link-status-error.png", "/img/constructor/pagespanel-settings/retina-link-status-ok.png", "/img/constructor/pagespanel-settings/retina-republish-arrow.png", "/img/constructor/pagespanel-settings/retina-republish-arrow-hover.png", "/img/constructor/pagespanel-settings/retina-republish-settings.png", "/img/constructor/pagespanel-settings/retina-settings-corner.png", "/img/constructor/pagespanel-settings/retina-share-facebook.png", "/img/constructor/pagespanel-settings/retina-share-facebook-hover.png", "/img/constructor/pagespanel-settings/retina-share-mail.png", "/img/constructor/pagespanel-settings/retina-share-mail-hover.png", "/img/constructor/pagespanel-settings/retina-share-twitter.png", "/img/constructor/pagespanel-settings/retina-share-twitter-hover.png", "/img/constructor/pagespanel-settings/retina-textured-panel-corner.png" ]
    },
    templates: {
        normal: [ "/img/constructor/pagespanel-templates/arrow.png", "/img/constructor/pagespanel-templates/arrow-active.png", "/img/constructor/pagespanel-templates/long.png" ],
        retina: [ "/img/constructor/pagespanel-templates/retina-arrow.png", "/img/constructor/pagespanel-templates/retina-arrow-active.png", "/img/constructor/pagespanel-templates/retina-long.png" ]
    },
    panels: {
        normal: [ "/img/constructor/panels/panel-body-default.png", "/img/constructor/panels/panel-body-tabbed.png", "/img/constructor/panels/panel-corner-default.png", "/img/constructor/panels/panel-corner-tabbed.png" ],
        retina: []
    },
    "panels-background": {
        normal: [ "/img/constructor/panels/background/delete-hover.png", "/img/constructor/panels/background/effects-active.png", "/img/constructor/panels/background/effects-hover.png", "/img/constructor/panels/background/mask.png", "/img/constructor/panels/background/mask-video.png", "/img/constructor/panels/background/opacity-handle-hover.png", "/img/constructor/panels/background/picture-active.png", "/img/constructor/panels/background/picture-hover.png", "/img/constructor/panels/background/upload_dark.png", "/img/constructor/panels/background/video-active.png", "/img/constructor/panels/background/video-hover.png" ],
        retina: []
    },
    "panels-guides": {
        normal: [ "/img/constructor/panels/guides/left-arrow-hover.png", "/img/constructor/panels/guides/right-arrow-hover.png" ],
        retina: []
    },
    "panels-pageinfo": {
        normal: [ "/img/constructor/panels/pageinfo/tag-delete-hover.png" ],
        retina: []
    },
    "panels-text": {
        normal: [ "/img/constructor/panels/text/dot.png", "/img/constructor/panels/text/eye.png", "/img/constructor/panels/text/eye-hidden.png", "/img/constructor/panels/text/eye-hidden-hover.png", "/img/constructor/panels/text/eye-hover.png", "/img/constructor/panels/text/unhide.png", "/img/constructor/panels/text/unhide-hover.png", "/img/constructor/panels/text/x.png", "/img/constructor/panels/text/x-hover.png" ],
        retina: []
    },
    "panels-video": {
        normal: [ "/img/constructor/panels/video/color-arrow-hover.png", "/img/constructor/panels/video/delete-hover.png", "/img/constructor/panels/video/mask.png", "/img/constructor/panels/video/settings-active.png", "/img/constructor/panels/video/settings-hover.png" ],
        retina: []
    },
    "panels-audio": {
        normal: [ "/img/constructor/panels/audio/color-arrow.png", "/img/constructor/panels/audio/color-arrow-hover.png", "/img/constructor/panels/audio/delete.png", "/img/constructor/panels/audio/delete-hover.png", "/img/constructor/panels/audio/logo-hover.png", "/img/constructor/panels/audio/logo-small.png", "/img/constructor/panels/audio/mask.png", "/img/constructor/panels/audio/settings.png", "/img/constructor/panels/audio/icon.png", "/img/constructor/panels/audio/settings.png", "/img/constructor/panels/audio/settings-active.png", "/img/constructor/panels/audio/settings-hover.png", "/img/constructor/panels/audio/social-upload.png", "/img/constructor/panels/audio/social-upload-hover.png", "/img/constructor/panels/audio/left-arrow.png", "/img/constructor/panels/audio/left-arrow-hover.png", "/img/constructor/panels/audio/right-arrow.png", "/img/constructor/panels/audio/right-arrow-hover.png" ],
        retina: []
    },
    "panels-twitter": {
        normal: [ "/img/constructor/panels/twitter/input-delete-hover.png", "/img/constructor/panels/twitter/input-target-hover.png", "/img/constructor/panels/twitter/input-go-hover.png", "/img/constructor/panels/twitter/point-hover.png", "/img/constructor/panels/twitter/point-active.png" ],
        retina: []
    },
    "panels-facebook": {
        normal: [ "/img/constructor/panels/facebook/input-delete.png", "/img/constructor/panels/facebook/input-delete-hover.png", "/img/constructor/panels/facebook/input-go.png", "/img/constructor/panels/facebook/input-go-hover.png", "/img/constructor/panels/facebook/input-target.png", "/img/constructor/panels/facebook/input-target-hover.png", "/img/constructor/panels/facebook/left-arrow-hover.png", "/img/constructor/panels/facebook/point-active.png", "/img/constructor/panels/facebook/point-hover.png", "/img/constructor/panels/facebook/right-arrow-hover.png" ],
        retina: []
    },
    "panels-shape": {
        normal: [ "/img/constructor/panels/shape/ellipse.png", "/img/constructor/panels/shape/ellipse-active.png", "/img/constructor/panels/shape/ellipse-hover.png", "/img/constructor/panels/shape/icon-ellipse.png", "/img/constructor/panels/shape/icon-line.png", "/img/constructor/panels/shape/icon-polygon.png", "/img/constructor/panels/shape/icon-rectangle.png", "/img/constructor/panels/shape/line.png", "/img/constructor/panels/shape/line-active.png", "/img/constructor/panels/shape/line-hover.png", "/img/constructor/panels/shape/polygon.png", "/img/constructor/panels/shape/polygon-active.png", "/img/constructor/panels/shape/polygon-hover.png", "/img/constructor/panels/shape/rectangle.png", "/img/constructor/panels/shape/rectangle-active.png", "/img/constructor/panels/shape/rectangle-hover.png" ],
        retina: [ "/img/constructor/panels/shape/retina-icon-ellipse.png", "/img/constructor/panels/shape/retina-icon-line.png", "/img/constructor/panels/shape/retina-icon-polygon.png", "/img/constructor/panels/shape/retina-icon-rectangle.png" ]
    },
    searchpanel: {
        normal: [ "/img/constructor/searchpanel/clear.png", "/img/constructor/searchpanel/clear-hover.png", "/img/constructor/searchpanel/search-hover.png" ],
        retina: []
    },
    "searchpanel-google": {
        normal: [ "/img/constructor/searchpanel/searchGoogle/arrow-hover.png", "/img/constructor/searchpanel/searchGoogle/bw-circle.png", "/img/constructor/searchpanel/searchGoogle/corner-color.png", "/img/constructor/searchpanel/searchGoogle/curr.png", "/img/constructor/searchpanel/searchGoogle/error.png", "/img/constructor/searchpanel/searchGoogle/logo-hover.png", "/img/constructor/searchpanel/searchGoogle/point-hover.png" ],
        retina: []
    },
    "searchpanel-flickr": {
        normal: [ "/img/constructor/searchpanel/searchFlickr/connect-logo.png", "/img/constructor/searchpanel/searchFlickr/logo-hover.png", "/img/constructor/searchpanel/searchFlickr/error.png" ],
        retina: []
    },
    "searchpanel-youtube": {
        normal: [ "/img/constructor/searchpanel/searchYouTube/connect-logo.png", "/img/constructor/searchpanel/searchYouTube/logo-hover.png" ],
        retina: []
    },
    "searchpanel-vimeo": {
        normal: [ "/img/constructor/searchpanel/searchVimeo/connect-logo.png", "/img/constructor/searchpanel/searchVimeo/logo-hover.png" ],
        retina: []
    },
    "searchpanel-videocommon": {
        normal: [ "/img/constructor/searchpanel/searchVideoCommon/play.png", "/img/constructor/searchpanel/searchVideoCommon/play-hover.png", "/img/constructor/searchpanel/searchVideoCommon/user.png" ],
        retina: []
    },
    widgetbar: {
        normal: [ "/img/constructor/widgetbar/redo-active.png", "/img/constructor/widgetbar/redo-active-hover.png", "/img/constructor/widgetbar/undo-active.png", "/img/constructor/widgetbar/undo-active-hover.png", "/img/constructor/widgetbar/arrow-left-hover.png", "/img/constructor/widgetbar/arrow-right-hover.png", "/img/constructor/widgetbar/dot.png", "/img/constructor/widgetbar/ellipsis.png", "/img/constructor/widgetbar/ellipsis-hover.png", "/img/constructor/widgetbar/eye-back.png", "/img/constructor/widgetbar/eye-back-hidden.png", "/img/constructor/widgetbar/eye-back-hidden-hover.png", "/img/constructor/widgetbar/eye-back-hover.png", "/img/constructor/widgetbar/eye-front.png", "/img/constructor/widgetbar/eye-front-hover.png", "/img/constructor/widgetbar/hidden_white.png", "/img/constructor/widgetbar/i.png", "/img/constructor/widgetbar/i-hover.png", "/img/constructor/widgetbar/selection-point.png", "/img/constructor/widgetbar/x.png", "/img/constructor/widgetbar/x-hover.png" ],
        retina: [ "/img/constructor/widgetbar/retina-redo-active.png", "/img/constructor/widgetbar/retina-redo-active-hover.png", "/img/constructor/widgetbar/retina-undo-active.png", "/img/constructor/widgetbar/retina-undo-active-hover.png" ]
    },
    widgetselector: {
        normal: [ "/img/constructor/widgetselector/clear.png", "/img/constructor/widgetselector/clear-hover.png", "/img/constructor/widgetselector/search-hover.png", "/img/constructor/widgetselector/store-hover.png" ],
        retina: []
    },
    magmenu: {
        normal: [ "/img/front/magmenu/back-hover.png", "/img/front/magmenu/back-click.png", "/img/front/magmenu/comments-hover.png", "/img/front/magmenu/fullscreen-active.png", "/img/front/magmenu/fullscreen-active-hover.png", "/img/front/magmenu/fullscreen-hover.png", "/img/front/magmenu/info-hover.png", "/img/front/magmenu/likes.png", "/img/front/magmenu/likes-active.png", "/img/front/magmenu/likes-active-hover.png", "/img/front/magmenu/likes-hover.png", "/img/front/magmenu/list-view-active.png", "/img/front/magmenu/list-view-hover.png", "/img/front/magmenu/menu-closed-hover.png", "/img/front/magmenu/menu-opened.png", "/img/front/magmenu/menu-opened-hover.png", "/img/front/magmenu/share-hover.png", "/img/front/magmenu/slide-view-active.png", "/img/front/magmenu/slide-view-hover.png" ],
        retina: [ "/img/front/magmenu/retina-back-hover.png", "/img/front/magmenu/retina-back-click.png", "/img/front/magmenu/retina-comments-hover.png", "/img/front/magmenu/retina-fullscreen-active.png", "/img/front/magmenu/retina-fullscreen-active-hover.png", "/img/front/magmenu/retina-fullscreen-hover.png", "/img/front/magmenu/retina-info-hover.png", "/img/front/magmenu/retina-likes.png", "/img/front/magmenu/retina-likes-active.png", "/img/front/magmenu/retina-likes-active-hover.png", "/img/front/magmenu/retina-likes-hover.png", "/img/front/magmenu/retina-list-view-active.png", "/img/front/magmenu/retina-list-view-hover.png", "/img/front/magmenu/retina-menu-closed-hover.png", "/img/front/magmenu/retina-menu-opened.png", "/img/front/magmenu/retina-menu-opened-hover.png", "/img/front/magmenu/retina-share-hover.png", "/img/front/magmenu/retina-slide-view-active.png", "/img/front/magmenu/retina-slide-view-hover.png" ]
    },
    navigation: {
        normal: [ "/img/front/navigation/left-arrow-hover.png", "/img/front/navigation/right-arrow-hover.png" ],
        retina: [ "/img/front/navigation/retina-left-arrow-hover.png", "/img/front/navigation/retina-right-arrow-hover.png" ]
    },
    share: {
        normal: [ "/img/front/share/embed.png", "/img/front/share/embed-hover.png", "/img/front/share/report.png", "/img/front/share/report-hover.png", "/img/front/share/mail.png", "/img/front/share/mail-hover.png", "/img/front/share/facebook.png", "/img/front/share/facebook-hover.png", "/img/front/share/pinterest.png", "/img/front/share/pinterest-hover.png", "/img/front/share/twitter.png", "/img/front/share/twitter-hover.png" ],
        retina: [ "/img/front/share/report-embed.png", "/img/front/share/report-embed-hover.png", "/img/front/share/report-report.png", "/img/front/share/report-hover.png", "/img/front/share/retina-mail.png", "/img/front/share/retina-mail-hover.png", "/img/front/share/retina-facebook.png", "/img/front/share/retina-facebook-hover.png", "/img/front/share/retina-pinterest.png", "/img/front/share/retina-pinterest-hover.png", "/img/front/share/retina-twitter.png", "/img/front/share/retina-twitter-hover.png" ]
    },
    "collector-menu": {
        normal: [ "/img/collector/rm_menu_logo_hover.png", "/img/collector/icon_menu_discover_active.png", "/img/collector/icon_menu_inbox_active.png", "/img/collector/icon_menu_create_active.png", "/img/collector/menu_slider_bg.png", "/img/collector/menu_rm_popup_pointer.png", "/img/collector/menu_user_popup.png", "/img/collector/menu_user_popup_hover.png" ],
        retina: [ "/img/collector/rm_menu_logo_hover@2x.png", "/img/collector/icon_menu_discover_active@2x.png", "/img/collector/icon_menu_inbox_active@2x.png", "/img/collector/icon_menu_create_active@2x.png", "/img/collector/menu_slider_bg@2x.png", "/img/collector/menu_rm_popup_pointer@2x.png", "/img/collector/menu_user_popup@2x.png", "/img/collector/menu_user_popup_hover@2x.png" ]
    },
    "collector-maglist": {
        normal: [ "/img/collector/thumbnail/arrow.png", "/img/collector/thumbnail/arrow-hover.png", "/img/collector/thumbnail/close.png", "/img/collector/thumbnail/close-hover.png", "/img/collector/thumbnail/edit.png", "/img/collector/thumbnail/edit-hover.png", "/img/collector/thumbnail/info.png", "/img/collector/thumbnail/info-hover.png", "/img/collector/thumbnail/menu-bg.png", "/img/collector/thumbnail/menu-corner.png", "/img/collector/thumbnail/menu-panel-bg.png", "/img/collector/thumbnail/settings.png", "/img/collector/thumbnail/settings-hover.png", "/img/collector/thumbnail/updated.png", "/img/collector/thumbnail/updated-hover.png" ],
        retina: [ "/img/collector/thumbnail/retina-arrow.png", "/img/collector/thumbnail/retina-arrow-hover.png", "/img/collector/thumbnail/retina-close.png", "/img/collector/thumbnail/retina-close-hover.png", "/img/collector/thumbnail/retina-edit.png", "/img/collector/thumbnail/retina-edit-hover.png", "/img/collector/thumbnail/retina-info.png", "/img/collector/thumbnail/retina-info-hover.png", "/img/collector/thumbnail/retina-menu-bg.png", "/img/collector/thumbnail/retina-menu-corner.png", "/img/collector/thumbnail/retina-settings.png", "/img/collector/thumbnail/retina-settings-hover.png", "/img/collector/thumbnail/retina-updated.png", "/img/collector/thumbnail/retina-updated-hover.png" ]
    },
    "collector-profile": {
        normal: [ "/img/collector/icon_profile_location_hover.png", "/img/collector/icon_profile_website_hover.png", "/img/collector/icon_profile_twitter_hover.png", "/img/collector/icon_profile_facebook_hover.png", "/img/collector/icon_profile_sharing_hover.png", "/img/collector/profile_bottom_left.png", "/img/collector/profile_bottom_right.png", "/img/collector/profile_bottom_main.png", "/img/collector/profile_bottom_center.png" ],
        retina: [ "/img/collector/icon_profile_location_hover@2x.png", "/img/collector/icon_profile_website_hover@2x.png", "/img/collector/icon_profile_twitter_hover@2x.png", "/img/collector/icon_profile_facebook_hover@2x.png", "/img/collector/icon_profile_sharing_hover@2x.png", "/img/collector/profile_bottom_left@2x.png", "/img/collector/profile_bottom_right@2x.png", "/img/collector/profile_bottom_main@2x.png", "/img/collector/profile_bottom_center@2x.png" ]
    },
    "user-settings": {
        normal: [ "/img/collector/pass_eye.png", "/img/collector/pass_eye_closed.png", "/img/collector/edit_profile/checkmark_ok.png", "/img/collector/edit_profile/checkmark_bad.png", "/img/collector/edit_profile/del_userpic_hover.png", "/img/collector/edit_profile/preloader_grey_arc.png" ],
        retina: [ "/img/collector/pass_eye@2x.png", "/img/collector/pass_eye_closed@2x.png", "/img/collector/edit_profile/close@2x.png", "/img/collector/edit_profile/checkmark_ok@2x.png", "/img/collector/edit_profile/checkmark_bad@2x.png", "/img/collector/edit_profile/del_userpic_hover@2x.png" ]
    }
};
/*!
  LESS - Leaner CSS v1.3.3
  http://lesscss.org
 
  Copyright (c) 2009-2013, Alexis Sellier
  Licensed under the Apache 2.0 License.
*/
