/*! jQuery v2.0.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.2.min.map
*/
/**! Calculate the md5 hash of a string
 * +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
 * + namespaced by: Michael White (http://crestidg.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
**/
function md5(e) {
    var t, n, r, o, i, a, s, c, u, l = function(e, t) {
        return e << t | e >>> 32 - t;
    }, p = function(e, t) {
        var n, r, o, i, a;
        return o = 2147483648 & e, i = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), 
        n & r ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i;
    }, f = function(e, t, n) {
        return e & t | ~e & n;
    }, h = function(e, t, n) {
        return e & n | t & ~n;
    }, g = function(e, t, n) {
        return e ^ t ^ n;
    }, d = function(e, t, n) {
        return t ^ (e | ~n);
    }, m = function(e, t, n, r, o, i, a) {
        return e = p(e, p(p(f(t, n, r), o), a)), p(l(e, i), t);
    }, v = function(e, t, n, r, o, i, a) {
        return e = p(e, p(p(h(t, n, r), o), a)), p(l(e, i), t);
    }, y = function(e, t, n, r, o, i, a) {
        return e = p(e, p(p(g(t, n, r), o), a)), p(l(e, i), t);
    }, b = function(e, t, n, r, o, i, a) {
        return e = p(e, p(p(d(t, n, r), o), a)), p(l(e, i), t);
    }, x = function(e) {
        for (var t, n = e.length, r = n + 8, o = (r - r % 64) / 64, i = 16 * (o + 1), a = Array(i - 1), s = 0, c = 0; n > c; ) t = (c - c % 4) / 4, 
        s = 8 * (c % 4), a[t] = a[t] | e.charCodeAt(c) << s, c++;
        return t = (c - c % 4) / 4, s = 8 * (c % 4), a[t] = a[t] | 128 << s, a[i - 2] = n << 3, a[i - 1] = n >>> 29, 
        a;
    }, w = function(e) {
        var t, n, r = "", o = "";
        for (n = 0; 3 >= n; n++) t = 255 & e >>> 8 * n, o = "0" + t.toString(16), r += o.substr(o.length - 2, 2);
        return r;
    }, _ = [], k = 7, T = 12, E = 17, C = 22, N = 5, S = 9, j = 14, A = 20, D = 4, O = 11, L = 16, M = 23, P = 6, R = 10, H = 15, F = 21;
    for (_ = x(e), a = 1732584193, s = 4023233417, c = 2562383102, u = 271733878, t = 0; _.length > t; t += 16) n = a, 
    r = s, o = c, i = u, a = m(a, s, c, u, _[t + 0], k, 3614090360), u = m(u, a, s, c, _[t + 1], T, 3905402710), 
    c = m(c, u, a, s, _[t + 2], E, 606105819), s = m(s, c, u, a, _[t + 3], C, 3250441966), a = m(a, s, c, u, _[t + 4], k, 4118548399), 
    u = m(u, a, s, c, _[t + 5], T, 1200080426), c = m(c, u, a, s, _[t + 6], E, 2821735955), s = m(s, c, u, a, _[t + 7], C, 4249261313), 
    a = m(a, s, c, u, _[t + 8], k, 1770035416), u = m(u, a, s, c, _[t + 9], T, 2336552879), c = m(c, u, a, s, _[t + 10], E, 4294925233), 
    s = m(s, c, u, a, _[t + 11], C, 2304563134), a = m(a, s, c, u, _[t + 12], k, 1804603682), u = m(u, a, s, c, _[t + 13], T, 4254626195), 
    c = m(c, u, a, s, _[t + 14], E, 2792965006), s = m(s, c, u, a, _[t + 15], C, 1236535329), a = v(a, s, c, u, _[t + 1], N, 4129170786), 
    u = v(u, a, s, c, _[t + 6], S, 3225465664), c = v(c, u, a, s, _[t + 11], j, 643717713), s = v(s, c, u, a, _[t + 0], A, 3921069994), 
    a = v(a, s, c, u, _[t + 5], N, 3593408605), u = v(u, a, s, c, _[t + 10], S, 38016083), c = v(c, u, a, s, _[t + 15], j, 3634488961), 
    s = v(s, c, u, a, _[t + 4], A, 3889429448), a = v(a, s, c, u, _[t + 9], N, 568446438), u = v(u, a, s, c, _[t + 14], S, 3275163606), 
    c = v(c, u, a, s, _[t + 3], j, 4107603335), s = v(s, c, u, a, _[t + 8], A, 1163531501), a = v(a, s, c, u, _[t + 13], N, 2850285829), 
    u = v(u, a, s, c, _[t + 2], S, 4243563512), c = v(c, u, a, s, _[t + 7], j, 1735328473), s = v(s, c, u, a, _[t + 12], A, 2368359562), 
    a = y(a, s, c, u, _[t + 5], D, 4294588738), u = y(u, a, s, c, _[t + 8], O, 2272392833), c = y(c, u, a, s, _[t + 11], L, 1839030562), 
    s = y(s, c, u, a, _[t + 14], M, 4259657740), a = y(a, s, c, u, _[t + 1], D, 2763975236), u = y(u, a, s, c, _[t + 4], O, 1272893353), 
    c = y(c, u, a, s, _[t + 7], L, 4139469664), s = y(s, c, u, a, _[t + 10], M, 3200236656), a = y(a, s, c, u, _[t + 13], D, 681279174), 
    u = y(u, a, s, c, _[t + 0], O, 3936430074), c = y(c, u, a, s, _[t + 3], L, 3572445317), s = y(s, c, u, a, _[t + 6], M, 76029189), 
    a = y(a, s, c, u, _[t + 9], D, 3654602809), u = y(u, a, s, c, _[t + 12], O, 3873151461), c = y(c, u, a, s, _[t + 15], L, 530742520), 
    s = y(s, c, u, a, _[t + 2], M, 3299628645), a = b(a, s, c, u, _[t + 0], P, 4096336452), u = b(u, a, s, c, _[t + 7], R, 1126891415), 
    c = b(c, u, a, s, _[t + 14], H, 2878612391), s = b(s, c, u, a, _[t + 5], F, 4237533241), a = b(a, s, c, u, _[t + 12], P, 1700485571), 
    u = b(u, a, s, c, _[t + 3], R, 2399980690), c = b(c, u, a, s, _[t + 10], H, 4293915773), s = b(s, c, u, a, _[t + 1], F, 2240044497), 
    a = b(a, s, c, u, _[t + 8], P, 1873313359), u = b(u, a, s, c, _[t + 15], R, 4264355552), c = b(c, u, a, s, _[t + 6], H, 2734768916), 
    s = b(s, c, u, a, _[t + 13], F, 1309151649), a = b(a, s, c, u, _[t + 4], P, 4149444226), u = b(u, a, s, c, _[t + 11], R, 3174756917), 
    c = b(c, u, a, s, _[t + 2], H, 718787259), s = b(s, c, u, a, _[t + 9], F, 3951481745), a = p(a, n), 
    s = p(s, r), c = p(c, o), u = p(u, i);
    var q = w(a) + w(s) + w(c) + w(u);
    return q.toLowerCase();
}

function preloadDesignImages(e) {
    if (preloadDesignImagesList[e] && !preloadDesignImagesList[e].preloaded) {
        preloadDesignImagesList[e].preloaded = !0;
        for (var t = preloadDesignImagesList[e][Modernizr.retina ? "retina" : "normal"], n = [], r = 0; t.length > r; r++) n[r] = new Image(), 
        n[r].src = t[r];
    }
}

(function(e, t) {
    function n(e) {
        var t = e.length, n = it.type(e);
        return it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function r(e) {
        var t = gt[e] = {};
        return it.each(e.match(st) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function o() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = it.expando + Math.random();
    }
    function i(e, n, r) {
        var o;
        if (r === t && 1 === e.nodeType) if (o = "data-" + n.replace(yt, "-$1").toLowerCase(), r = e.getAttribute(o), 
        "string" == typeof r) {
            try {
                r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : vt.test(r) ? JSON.parse(r) : r;
            } catch (i) {}
            dt.set(e, n, r);
        } else r = t;
        return r;
    }
    function a() {
        return !0;
    }
    function s() {
        return !1;
    }
    function c() {
        try {
            return U.activeElement;
        } catch (e) {}
    }
    function u(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function l(e, t, n) {
        if (it.isFunction(t)) return it.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        });
        if (t.nodeType) return it.grep(e, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (St.test(t)) return it.filter(t, e, n);
            t = it.filter(t, e);
        }
        return it.grep(e, function(e) {
            return tt.call(t, e) >= 0 !== n;
        });
    }
    function p(e, t) {
        return it.nodeName(e, "table") && it.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function f(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function h(e) {
        var t = qt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function g(e, t) {
        for (var n = e.length, r = 0; n > r; r++) mt.set(e[r], "globalEval", !t || mt.get(t[r], "globalEval"));
    }
    function d(e, t) {
        var n, r, o, i, a, s, c, u;
        if (1 === t.nodeType) {
            if (mt.hasData(e) && (i = mt.access(e), a = mt.set(t, i), u = i.events)) {
                delete a.handle, a.events = {};
                for (o in u) for (n = 0, r = u[o].length; r > n; n++) it.event.add(t, o, u[o][n]);
            }
            dt.hasData(e) && (s = dt.access(e), c = it.extend({}, s), dt.set(t, c));
        }
    }
    function m(e, n) {
        var r = e.getElementsByTagName ? e.getElementsByTagName(n || "*") : e.querySelectorAll ? e.querySelectorAll(n || "*") : [];
        return n === t || n && it.nodeName(e, n) ? it.merge([ e ], r) : r;
    }
    function v(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Rt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
    function y(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, o = Zt.length; o--; ) if (t = Zt[o] + n, 
        t in e) return t;
        return r;
    }
    function b(e, t) {
        return e = t || e, "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e);
    }
    function x(t) {
        return e.getComputedStyle(t, null);
    }
    function w(e, t) {
        for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = mt.get(r, "olddisplay"), 
        n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && b(r) && (i[a] = mt.access(r, "olddisplay", E(r.nodeName)))) : i[a] || (o = b(r), 
        (n && "none" !== n || !o) && mt.set(r, "olddisplay", o ? n : it.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
        return e;
    }
    function _(e, t, n) {
        var r = Xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function k(e, t, n, r, o) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += it.css(e, n + Qt[i], !0, o)), 
        r ? ("content" === n && (a -= it.css(e, "padding" + Qt[i], !0, o)), "margin" !== n && (a -= it.css(e, "border" + Qt[i] + "Width", !0, o))) : (a += it.css(e, "padding" + Qt[i], !0, o), 
        "padding" !== n && (a += it.css(e, "border" + Qt[i] + "Width", !0, o)));
        return a;
    }
    function T(e, t, n) {
        var r = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, i = x(e), a = it.support.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i);
        if (0 >= o || null == o) {
            if (o = Bt(e, t, i), (0 > o || null == o) && (o = e.style[t]), Gt.test(o)) return o;
            r = a && (it.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0;
        }
        return o + k(e, t, n || (a ? "border" : "content"), r, i) + "px";
    }
    function E(e) {
        var t = U, n = Vt[e];
        return n || (n = C(e, t), "none" !== n && n || (zt = (zt || it("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), 
        t = (zt[0].contentWindow || zt[0].contentDocument).document, t.write("<!doctype html><html><body>"), 
        t.close(), n = C(e, t), zt.detach()), Vt[e] = n), n;
    }
    function C(e, t) {
        var n = it(t.createElement(e)).appendTo(t.body), r = it.css(n[0], "display");
        return n.remove(), r;
    }
    function N(e, t, n, r) {
        var o;
        if (it.isArray(t)) it.each(t, function(t, o) {
            n || tn.test(e) ? r(e, o) : N(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r);
        }); else if (n || "object" !== it.type(t)) r(e, t); else for (o in t) N(e + "[" + o + "]", t[o], n, r);
    }
    function S(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0, i = t.toLowerCase().match(st) || [];
            if (it.isFunction(n)) for (;r = i[o++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function j(e, n, r, o) {
        function i(c) {
            var u;
            return a[c] = !0, it.each(e[c] || [], function(e, c) {
                var l = c(n, r, o);
                return "string" != typeof l || s || a[l] ? s ? !(u = l) : t : (n.dataTypes.unshift(l), i(l), !1);
            }), u;
        }
        var a = {}, s = e === bn;
        return i(n.dataTypes[0]) || !a["*"] && i("*");
    }
    function A(e, n) {
        var r, o, i = it.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((i[r] ? e : o || (o = {}))[r] = n[r]);
        return o && it.extend(!0, e, o), e;
    }
    function D(e, n, r) {
        for (var o, i, a, s, c = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (i in c) if (c[i] && c[i].test(o)) {
            u.unshift(i);
            break;
        }
        if (u[0] in r) a = u[0]; else {
            for (i in r) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    a = i;
                    break;
                }
                s || (s = i);
            }
            a = a || s;
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
    }
    function O(e, t, n, r) {
        var o, i, a, s, c, u = {}, l = e.dataTypes.slice();
        if (l[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (i = l.shift(); i; ) if (e.responseFields[i] && (n[e.responseFields[i]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
        c = i, i = l.shift()) if ("*" === i) i = c; else if ("*" !== c && c !== i) {
            if (a = u[c + " " + i] || u["* " + i], !a) for (o in u) if (s = o.split(" "), s[1] === i && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[o] : u[o] !== !0 && (i = s[0], l.unshift(s[1]));
                break;
            }
            if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                t = a(t);
            } catch (p) {
                return {
                    state: "parsererror",
                    error: a ? p : "No conversion from " + c + " to " + i
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    function L() {
        return setTimeout(function() {
            Sn = t;
        }), Sn = it.now();
    }
    function M(e, t, n) {
        for (var r, o = (Mn[t] || []).concat(Mn["*"]), i = 0, a = o.length; a > i; i++) if (r = o[i].call(n, t, e)) return r;
    }
    function P(e, t, n) {
        var r, o, i = 0, a = Ln.length, s = it.Deferred().always(function() {
            delete c.elem;
        }), c = function() {
            if (o) return !1;
            for (var t = Sn || L(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, i = 1 - r, a = 0, c = u.tweens.length; c > a; a++) u.tweens[a].run(i);
            return s.notifyWith(e, [ u, i, n ]), 1 > i && c ? n : (s.resolveWith(e, [ u ]), !1);
        }, u = s.promise({
            elem: e,
            props: it.extend({}, t),
            opts: it.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Sn || L(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = it.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; r > n; n++) u.tweens[n].run(1);
                return t ? s.resolveWith(e, [ u, t ]) : s.rejectWith(e, [ u, t ]), this;
            }
        }), l = u.props;
        for (R(l, u.opts.specialEasing); a > i; i++) if (r = Ln[i].call(u, e, l, u.opts)) return r;
        return it.map(l, M, u), it.isFunction(u.opts.start) && u.opts.start.call(e, u), it.fx.timer(it.extend(c, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function R(e, t) {
        var n, r, o, i, a;
        for (n in e) if (r = it.camelCase(n), o = t[r], i = e[n], it.isArray(i) && (o = i[1], i = e[n] = i[0]), 
        n !== r && (e[r] = i, delete e[n]), a = it.cssHooks[r], a && "expand" in a) {
            i = a.expand(i), delete e[r];
            for (n in i) n in e || (e[n] = i[n], t[n] = o);
        } else t[r] = o;
    }
    function H(e, n, r) {
        var o, i, a, s, c, u, l = this, p = {}, f = e.style, h = e.nodeType && b(e), g = mt.get(e, "fxshow");
        r.queue || (c = it._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, u = c.empty.fire, c.empty.fire = function() {
            c.unqueued || u();
        }), c.unqueued++, l.always(function() {
            l.always(function() {
                c.unqueued--, it.queue(e, "fx").length || c.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in n || "width" in n) && (r.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
        "inline" === it.css(e, "display") && "none" === it.css(e, "float") && (f.display = "inline-block")), 
        r.overflow && (f.overflow = "hidden", l.always(function() {
            f.overflow = r.overflow[0], f.overflowX = r.overflow[1], f.overflowY = r.overflow[2];
        }));
        for (o in n) if (i = n[o], An.exec(i)) {
            if (delete n[o], a = a || "toggle" === i, i === (h ? "hide" : "show")) {
                if ("show" !== i || !g || g[o] === t) continue;
                h = !0;
            }
            p[o] = g && g[o] || it.style(e, o);
        }
        if (!it.isEmptyObject(p)) {
            g ? "hidden" in g && (h = g.hidden) : g = mt.access(e, "fxshow", {}), a && (g.hidden = !h), h ? it(e).show() : l.done(function() {
                it(e).hide();
            }), l.done(function() {
                var t;
                mt.remove(e, "fxshow");
                for (t in p) it.style(e, t, p[t]);
            });
            for (o in p) s = M(h ? g[o] : 0, o, l), o in g || (g[o] = s.start, h && (s.end = s.start, s.start = "width" === o || "height" === o ? 1 : 0));
        }
    }
    function F(e, t, n, r, o) {
        return new F.prototype.init(e, t, n, r, o);
    }
    function q(e, t) {
        var n, r = {
            height: e
        }, o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Qt[o], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function I(e) {
        return it.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var $, B, z = typeof t, W = e.location, U = e.document, X = U.documentElement, G = e.jQuery, Y = e.$, V = {}, J = [], K = "2.0.2", Q = J.concat, Z = J.push, et = J.slice, tt = J.indexOf, nt = V.toString, rt = V.hasOwnProperty, ot = K.trim, it = function(e, t) {
        return new it.fn.init(e, t, $);
    }, at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, st = /\S+/g, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, lt = /^-ms-/, pt = /-([\da-z])/gi, ft = function(e, t) {
        return t.toUpperCase();
    }, ht = function() {
        U.removeEventListener("DOMContentLoaded", ht, !1), e.removeEventListener("load", ht, !1), it.ready();
    };
    it.fn = it.prototype = {
        jquery: K,
        constructor: it,
        init: function(e, n, r) {
            var o, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : ct.exec(e), 
                !o || !o[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (o[1]) {
                    if (n = n instanceof it ? n[0] : n, it.merge(this, it.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : U, !0)), 
                    ut.test(o[1]) && it.isPlainObject(n)) for (o in n) it.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                    return this;
                }
                return i = U.getElementById(o[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = U, 
                this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : it.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, 
            this.context = e.context), it.makeArray(e, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return et.call(this);
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },
        pushStack: function(e) {
            var t = it.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return it.each(this, e, t);
        },
        ready: function(e) {
            return it.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(et.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(it.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: Z,
        sort: [].sort,
        splice: [].splice
    }, it.fn.init.prototype = it.fn, it.extend = it.fn.extend = function() {
        var e, n, r, o, i, a, s = arguments[0] || {}, c = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, c = 2), "object" == typeof s || it.isFunction(s) || (s = {}), 
        u === c && (s = this, --c); u > c; c++) if (null != (e = arguments[c])) for (n in e) r = s[n], o = e[n], 
        s !== o && (l && o && (it.isPlainObject(o) || (i = it.isArray(o))) ? (i ? (i = !1, a = r && it.isArray(r) ? r : []) : a = r && it.isPlainObject(r) ? r : {}, 
        s[n] = it.extend(l, a, o)) : o !== t && (s[n] = o));
        return s;
    }, it.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === it && (e.$ = Y), t && e.jQuery === it && (e.jQuery = G), it;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? it.readyWait++ : it.ready(!0);
        },
        ready: function(e) {
            (e === !0 ? --it.readyWait : it.isReady) || (it.isReady = !0, e !== !0 && --it.readyWait > 0 || (B.resolveWith(U, [ it ]), 
            it.fn.trigger && it(U).trigger("ready").off("ready")));
        },
        isFunction: function(e) {
            return "function" === it.type(e);
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[nt.call(e)] || "object" : typeof e;
        },
        isPlainObject: function(e) {
            if ("object" !== it.type(e) || e.nodeType || it.isWindow(e)) return !1;
            try {
                if (e.constructor && !rt.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (t) {
                return !1;
            }
            return !0;
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw Error(e);
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || U;
            var r = ut.exec(e), o = !n && [];
            return r ? [ t.createElement(r[1]) ] : (r = it.buildFragment([ e ], t, o), o && it(o).remove(), it.merge([], r.childNodes));
        },
        parseJSON: JSON.parse,
        parseXML: function(e) {
            var n, r;
            if (!e || "string" != typeof e) return null;
            try {
                r = new DOMParser(), n = r.parseFromString(e, "text/xml");
            } catch (o) {
                n = t;
            }
            return (!n || n.getElementsByTagName("parsererror").length) && it.error("Invalid XML: " + e), n;
        },
        noop: function() {},
        globalEval: function(e) {
            var t, n = eval;
            e = it.trim(e), e && (1 === e.indexOf("use strict") ? (t = U.createElement("script"), t.text = e, U.head.appendChild(t).parentNode.removeChild(t)) : n(e));
        },
        camelCase: function(e) {
            return e.replace(lt, "ms-").replace(pt, ft);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, r) {
            var o, i = 0, a = e.length, s = n(e);
            if (r) {
                if (s) for (;a > i && (o = t.apply(e[i], r), o !== !1); i++) ; else for (i in e) if (o = t.apply(e[i], r), 
                o === !1) break;
            } else if (s) for (;a > i && (o = t.call(e[i], i, e[i]), o !== !1); i++) ; else for (i in e) if (o = t.call(e[i], i, e[i]), 
            o === !1) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : ot.call(e);
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? it.merge(r, "string" == typeof e ? [ e ] : e) : Z.call(r, e)), r;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : tt.call(t, e, n);
        },
        merge: function(e, n) {
            var r = n.length, o = e.length, i = 0;
            if ("number" == typeof r) for (;r > i; i++) e[o++] = n[i]; else for (;n[i] !== t; ) e[o++] = n[i++];
            return e.length = o, e;
        },
        grep: function(e, t, n) {
            var r, o = [], i = 0, a = e.length;
            for (n = !!n; a > i; i++) r = !!t(e[i], i), n !== r && o.push(e[i]);
            return o;
        },
        map: function(e, t, r) {
            var o, i = 0, a = e.length, s = n(e), c = [];
            if (s) for (;a > i; i++) o = t(e[i], i, r), null != o && (c[c.length] = o); else for (i in e) o = t(e[i], i, r), 
            null != o && (c[c.length] = o);
            return Q.apply([], c);
        },
        guid: 1,
        proxy: function(e, n) {
            var r, o, i;
            return "string" == typeof n && (r = e[n], n = e, e = r), it.isFunction(e) ? (o = et.call(arguments, 2), 
            i = function() {
                return e.apply(n || this, o.concat(et.call(arguments)));
            }, i.guid = e.guid = e.guid || it.guid++, i) : t;
        },
        access: function(e, n, r, o, i, a, s) {
            var c = 0, u = e.length, l = null == r;
            if ("object" === it.type(r)) {
                i = !0;
                for (c in r) it.access(e, n, c, r[c], !0, a, s);
            } else if (o !== t && (i = !0, it.isFunction(o) || (s = !0), l && (s ? (n.call(e, o), n = null) : (l = n, 
            n = function(e, t, n) {
                return l.call(it(e), n);
            })), n)) for (;u > c; c++) n(e[c], r, s ? o : o.call(e[c], c, n(e[c], r)));
            return i ? e : l ? n.call(e) : u ? n(e[0], r) : a;
        },
        now: Date.now,
        swap: function(e, t, n, r) {
            var o, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            o = n.apply(e, r || []);
            for (i in t) e.style[i] = a[i];
            return o;
        }
    }), it.ready.promise = function(t) {
        return B || (B = it.Deferred(), "complete" === U.readyState ? setTimeout(it.ready) : (U.addEventListener("DOMContentLoaded", ht, !1), 
        e.addEventListener("load", ht, !1))), B.promise(t);
    }, it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase();
    }), $ = it(U), function(e, t) {
        function n(e, t, n, r) {
            var o, i, a, s, c, u, l, p, f, h;
            if ((t ? t.ownerDocument || t : W) !== R && P(t), t = t || R, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (F && !r) {
                if (o = kt.exec(e)) if (a = o[1]) {
                    if (9 === s) {
                        if (i = t.getElementById(a), !i || !i.parentNode) return n;
                        if (i.id === a) return n.push(i), n;
                    } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && B(t, i) && i.id === a) return n.push(i), 
                    n;
                } else {
                    if (o[2]) return ot.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = o[3]) && N.getElementsByClassName && t.getElementsByClassName) return ot.apply(n, t.getElementsByClassName(a)), 
                    n;
                }
                if (N.qsa && (!q || !q.test(e))) {
                    if (p = l = z, f = t, h = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = d(e), (l = t.getAttribute("id")) ? p = l.replace(Ct, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", 
                        c = u.length; c--; ) u[c] = p + m(u[c]);
                        f = vt.test(e) && t.parentNode || t, h = u.join(",");
                    }
                    if (h) try {
                        return ot.apply(n, f.querySelectorAll(h)), n;
                    } catch (g) {} finally {
                        l || t.removeAttribute("id");
                    }
                }
            }
            return T(e.replace(gt, "$1"), t, n, r);
        }
        function r(e) {
            return _t.test(e + "");
        }
        function o() {
            function e(n, r) {
                return t.push(n += " ") > j.cacheLength && delete e[t.shift()], e[n] = r;
            }
            var t = [];
            return e;
        }
        function i(e) {
            return e[z] = !0, e;
        }
        function a(e) {
            var t = R.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function s(e, t, n) {
            e = e.split("|");
            for (var r, o = e.length, i = n ? null : t; o--; ) (r = j.attrHandle[e[o]]) && r !== t || (j.attrHandle[e[o]] = i);
        }
        function c(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null;
        }
        function u(e, t) {
            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }
        function l(e) {
            return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t;
        }
        function p(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function f(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function h(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function g(e) {
            return i(function(t) {
                return t = +t, i(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; ) n[o = i[a]] && (n[o] = !(r[o] = n[o]));
                });
            });
        }
        function d(e, t) {
            var r, o, i, a, s, c, u, l = Y[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, c = [], u = j.preFilter; s; ) {
                (!r || (o = dt.exec(s))) && (o && (s = s.slice(o[0].length) || s), c.push(i = [])), r = !1, (o = mt.exec(s)) && (r = o.shift(), 
                i.push({
                    value: r,
                    type: o[0].replace(gt, " ")
                }), s = s.slice(r.length));
                for (a in j.filter) !(o = wt[a].exec(s)) || u[a] && !(o = u[a](o)) || (r = o.shift(), i.push({
                    value: r,
                    type: a,
                    matches: o
                }), s = s.slice(r.length));
                if (!r) break;
            }
            return t ? s.length : s ? n.error(e) : Y(e, c).slice(0);
        }
        function m(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
        }
        function v(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, i = X++;
            return t.first ? function(t, n, i) {
                for (;t = t[r]; ) if (1 === t.nodeType || o) return e(t, n, i);
            } : function(t, n, a) {
                var s, c, u, l = U + " " + i;
                if (a) {
                    for (;t = t[r]; ) if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
                } else for (;t = t[r]; ) if (1 === t.nodeType || o) if (u = t[z] || (t[z] = {}), (c = u[r]) && c[0] === l) {
                    if ((s = c[1]) === !0 || s === S) return s === !0;
                } else if (c = u[r] = [ l ], c[1] = e(t, n, a) || S, c[1] === !0) return !0;
            };
        }
        function y(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function b(e, t, n, r, o) {
            for (var i, a = [], s = 0, c = e.length, u = null != t; c > s; s++) (i = e[s]) && (!n || n(i, r, o)) && (a.push(i), 
            u && t.push(s));
            return a;
        }
        function x(e, t, n, r, o, a) {
            return r && !r[z] && (r = x(r)), o && !o[z] && (o = x(o, a)), i(function(i, a, s, c) {
                var u, l, p, f = [], h = [], g = a.length, d = i || k(t || "*", s.nodeType ? [ s ] : s, []), m = !e || !i && t ? d : b(d, f, e, s, c), v = n ? o || (i ? e : g || r) ? [] : a : m;
                if (n && n(m, v, s, c), r) for (u = b(v, h), r(u, [], s, c), l = u.length; l--; ) (p = u[l]) && (v[h[l]] = !(m[h[l]] = p));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], l = v.length; l--; ) (p = v[l]) && u.push(m[l] = p);
                            o(null, v = [], u, c);
                        }
                        for (l = v.length; l--; ) (p = v[l]) && (u = o ? st.call(i, p) : f[l]) > -1 && (i[u] = !(a[u] = p));
                    }
                } else v = b(v === a ? v.splice(g, v.length) : v), o ? o(null, a, v, c) : ot.apply(a, v);
            });
        }
        function w(e) {
            for (var t, n, r, o = e.length, i = j.relative[e[0].type], a = i || j.relative[" "], s = i ? 1 : 0, c = v(function(e) {
                return e === t;
            }, a, !0), u = v(function(e) {
                return st.call(t, e) > -1;
            }, a, !0), l = [ function(e, n, r) {
                return !i && (r || n !== L) || ((t = n).nodeType ? c(e, n, r) : u(e, n, r));
            } ]; o > s; s++) if (n = j.relative[e[s].type]) l = [ v(y(l), n) ]; else {
                if (n = j.filter[e[s].type].apply(null, e[s].matches), n[z]) {
                    for (r = ++s; o > r && !j.relative[e[r].type]; r++) ;
                    return x(s > 1 && y(l), s > 1 && m(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(gt, "$1"), n, r > s && w(e.slice(s, r)), o > r && w(e = e.slice(r)), o > r && m(e));
                }
                l.push(n);
            }
            return y(l);
        }
        function _(e, t) {
            var r = 0, o = t.length > 0, a = e.length > 0, s = function(i, s, c, u, l) {
                var p, f, h, g = [], d = 0, m = "0", v = i && [], y = null != l, x = L, w = i || a && j.find.TAG("*", l && s.parentNode || s), _ = U += null == x ? 1 : Math.random() || .1;
                for (y && (L = s !== R && s, S = r); null != (p = w[m]); m++) {
                    if (a && p) {
                        for (f = 0; h = e[f++]; ) if (h(p, s, c)) {
                            u.push(p);
                            break;
                        }
                        y && (U = _, S = ++r);
                    }
                    o && ((p = !h && p) && d--, i && v.push(p));
                }
                if (d += m, o && m !== d) {
                    for (f = 0; h = t[f++]; ) h(v, g, s, c);
                    if (i) {
                        if (d > 0) for (;m--; ) v[m] || g[m] || (g[m] = nt.call(u));
                        g = b(g);
                    }
                    ot.apply(u, g), y && !i && g.length > 0 && d + t.length > 1 && n.uniqueSort(u);
                }
                return y && (U = _, L = x), v;
            };
            return o ? i(s) : s;
        }
        function k(e, t, r) {
            for (var o = 0, i = t.length; i > o; o++) n(e, t[o], r);
            return r;
        }
        function T(e, t, n, r) {
            var o, i, a, s, c, u = d(e);
            if (!r && 1 === u.length) {
                if (i = u[0] = u[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && N.getById && 9 === t.nodeType && F && j.relative[i[1].type]) {
                    if (t = (j.find.ID(a.matches[0].replace(Nt, St), t) || [])[0], !t) return n;
                    e = e.slice(i.shift().value.length);
                }
                for (o = wt.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !j.relative[s = a.type]); ) if ((c = j.find[s]) && (r = c(a.matches[0].replace(Nt, St), vt.test(i[0].type) && t.parentNode || t))) {
                    if (i.splice(o, 1), e = r.length && m(i), !e) return ot.apply(n, r), n;
                    break;
                }
            }
            return O(e, u)(r, t, !F, n, vt.test(e)), n;
        }
        function E() {}
        var C, N, S, j, A, D, O, L, M, P, R, H, F, q, I, $, B, z = "sizzle" + -new Date(), W = e.document, U = 0, X = 0, G = o(), Y = o(), V = o(), J = !1, K = function() {
            return 0;
        }, Q = typeof t, Z = 1 << 31, et = {}.hasOwnProperty, tt = [], nt = tt.pop, rt = tt.push, ot = tt.push, at = tt.slice, st = tt.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
            return -1;
        }, ct = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ut = "[\\x20\\t\\r\\n\\f]", lt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", pt = lt.replace("w", "w#"), ft = "\\[" + ut + "*(" + lt + ")" + ut + "*(?:([*^$|!~]?=)" + ut + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + pt + ")|)|)" + ut + "*\\]", ht = ":(" + lt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ft.replace(3, 8) + ")*)|.*)\\)|)", gt = RegExp("^" + ut + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ut + "+$", "g"), dt = RegExp("^" + ut + "*," + ut + "*"), mt = RegExp("^" + ut + "*([>+~]|" + ut + ")" + ut + "*"), vt = RegExp(ut + "*[+~]"), yt = RegExp("=" + ut + "*([^\\]'\"]*)" + ut + "*\\]", "g"), bt = RegExp(ht), xt = RegExp("^" + pt + "$"), wt = {
            ID: RegExp("^#(" + lt + ")"),
            CLASS: RegExp("^\\.(" + lt + ")"),
            TAG: RegExp("^(" + lt.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + ft),
            PSEUDO: RegExp("^" + ht),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ut + "*(even|odd|(([+-]|)(\\d*)n|)" + ut + "*(?:([+-]|)" + ut + "*(\\d+)|))" + ut + "*\\)|)", "i"),
            bool: RegExp("^(?:" + ct + ")$", "i"),
            needsContext: RegExp("^" + ut + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ut + "*((?:-\\d)?\\d*)" + ut + "*\\)|)(?=[^-]|$)", "i")
        }, _t = /^[^{]+\{\s*\[native \w/, kt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Tt = /^(?:input|select|textarea|button)$/i, Et = /^h\d$/i, Ct = /'|\\/g, Nt = RegExp("\\\\([\\da-f]{1,6}" + ut + "?|(" + ut + ")|.)", "ig"), St = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
        };
        try {
            ot.apply(tt = at.call(W.childNodes), W.childNodes), tt[W.childNodes.length].nodeType;
        } catch (jt) {
            ot = {
                apply: tt.length ? function(e, t) {
                    rt.apply(e, at.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        D = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, N = n.support = {}, P = n.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : W, o = n.parentWindow;
            return n !== R && 9 === n.nodeType && n.documentElement ? (R = n, H = n.documentElement, F = !D(n), 
            o && o.frameElement && o.attachEvent("onbeforeunload", function() {
                P();
            }), N.attributes = a(function(e) {
                return e.innerHTML = "<a href='#'></a>", s("type|href|height|width", u, "#" === e.firstChild.getAttribute("href")), 
                s(ct, c, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className");
            }), N.input = a(function(e) {
                return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
            }), s("value", l, N.attributes && N.input), N.getElementsByTagName = a(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
            }), N.getElementsByClassName = a(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
            }), N.getById = a(function(e) {
                return H.appendChild(e).id = z, !n.getElementsByName || !n.getElementsByName(z).length;
            }), N.getById ? (j.find.ID = function(e, t) {
                if (typeof t.getElementById !== Q && F) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, j.filter.ID = function(e) {
                var t = e.replace(Nt, St);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete j.find.ID, j.filter.ID = function(e) {
                var t = e.replace(Nt, St);
                return function(e) {
                    var n = typeof e.getAttributeNode !== Q && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), j.find.TAG = N.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== Q ? n.getElementsByTagName(e) : t;
            } : function(e, t) {
                var n, r = [], o = 0, i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = i[o++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return i;
            }, j.find.CLASS = N.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== Q && F ? n.getElementsByClassName(e) : t;
            }, I = [], q = [], (N.qsa = r(n.querySelectorAll)) && (a(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || q.push("\\[" + ut + "*(?:value|" + ct + ")"), 
                e.querySelectorAll(":checked").length || q.push(":checked");
            }), a(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && q.push("[*^$]=" + ut + "*(?:''|\"\")"), 
                e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (N.matchesSelector = r($ = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && a(function(e) {
                N.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), I.push("!=", ht);
            }), q = q.length && RegExp(q.join("|")), I = I.length && RegExp(I.join("|")), B = r(H.contains) || H.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, N.sortDetached = a(function(e) {
                return 1 & e.compareDocumentPosition(n.createElement("div"));
            }), K = H.compareDocumentPosition ? function(e, t) {
                if (e === t) return J = !0, 0;
                var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return r ? 1 & r || !N.sortDetached && t.compareDocumentPosition(e) === r ? e === n || B(W, e) ? -1 : t === n || B(W, t) ? 1 : M ? st.call(M, e) - st.call(M, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, t) {
                var r, o = 0, i = e.parentNode, a = t.parentNode, s = [ e ], c = [ t ];
                if (e === t) return J = !0, 0;
                if (!i || !a) return e === n ? -1 : t === n ? 1 : i ? -1 : a ? 1 : M ? st.call(M, e) - st.call(M, t) : 0;
                if (i === a) return p(e, t);
                for (r = e; r = r.parentNode; ) s.unshift(r);
                for (r = t; r = r.parentNode; ) c.unshift(r);
                for (;s[o] === c[o]; ) o++;
                return o ? p(s[o], c[o]) : s[o] === W ? -1 : c[o] === W ? 1 : 0;
            }, n) : R;
        }, n.matches = function(e, t) {
            return n(e, null, null, t);
        }, n.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== R && P(e), t = t.replace(yt, "='$1']"), !(!N.matchesSelector || !F || I && I.test(t) || q && q.test(t))) try {
                var r = $.call(e, t);
                if (r || N.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (o) {}
            return n(t, R, null, [ e ]).length > 0;
        }, n.contains = function(e, t) {
            return (e.ownerDocument || e) !== R && P(e), B(e, t);
        }, n.attr = function(e, n) {
            (e.ownerDocument || e) !== R && P(e);
            var r = j.attrHandle[n.toLowerCase()], o = r && et.call(j.attrHandle, n.toLowerCase()) ? r(e, n, !F) : t;
            return o === t ? N.attributes || !F ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o;
        }, n.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }, n.uniqueSort = function(e) {
            var t, n = [], r = 0, o = 0;
            if (J = !N.detectDuplicates, M = !N.sortStable && e.slice(0), e.sort(K), J) {
                for (;t = e[o++]; ) t === e[o] && (r = n.push(o));
                for (;r--; ) e.splice(n[r], 1);
            }
            return e;
        }, A = n.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += A(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (;t = e[r]; r++) n += A(t);
            return n;
        }, j = n.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: wt,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(Nt, St), e[3] = (e[4] || e[5] || "").replace(Nt, St), "~=" === e[2] && (e[3] = " " + e[3] + " "), 
                    e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), 
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e;
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return wt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && bt.test(r) && (n = d(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), 
                    e[2] = r.slice(0, n)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Nt, St).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = G[e + " "];
                    return t || (t = RegExp("(^|" + ut + ")" + e + "(" + ut + "|$)")) && G(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Q && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, r) {
                    return function(o) {
                        var i = n.attr(o, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === r : "!=" === t ? i !== r : "^=" === t ? r && 0 === i.indexOf(r) : "*=" === t ? r && i.indexOf(r) > -1 : "$=" === t ? r && i.slice(-r.length) === r : "~=" === t ? (" " + i + " ").indexOf(r) > -1 : "|=" === t ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0;
                    };
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, c) {
                        var u, l, p, f, h, g, d = i !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !c && !s;
                        if (m) {
                            if (i) {
                                for (;d; ) {
                                    for (p = t; p = p[d]; ) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    g = d = "only" === e && !g && "nextSibling";
                                }
                                return !0;
                            }
                            if (g = [ a ? m.firstChild : m.lastChild ], a && y) {
                                for (l = m[z] || (m[z] = {}), u = l[e] || [], h = u[0] === U && u[1], f = u[0] === U && u[2], p = h && m.childNodes[h]; p = ++h && p && p[d] || (f = h = 0) || g.pop(); ) if (1 === p.nodeType && ++f && p === t) {
                                    l[e] = [ U, h, f ];
                                    break;
                                }
                            } else if (y && (u = (t[z] || (t[z] = {}))[e]) && u[0] === U) f = u[1]; else for (;(p = ++h && p && p[d] || (f = h = 0) || g.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++f || (y && ((p[z] || (p[z] = {}))[e] = [ U, f ]), 
                            p !== t)); ) ;
                            return f -= o, f === r || 0 === f % r && f / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var r, o = j.pseudos[e] || j.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return o[z] ? o(t) : o.length > 1 ? (r = [ e, e, "", t ], j.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        for (var r, i = o(e, t), a = i.length; a--; ) r = st.call(e, i[a]), e[r] = !(n[r] = i[a]);
                    }) : function(e) {
                        return o(e, 0, r);
                    }) : o;
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [], n = [], r = O(e.replace(gt, "$1"));
                    return r[z] ? i(function(e, t, n, o) {
                        for (var i, a = r(e, null, o, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
                    }) : function(e, o, i) {
                        return t[0] = e, r(t, null, i, n), !n.pop();
                    };
                }),
                has: i(function(e) {
                    return function(t) {
                        return n(e, t).length > 0;
                    };
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || A(t)).indexOf(e) > -1;
                    };
                }),
                lang: i(function(e) {
                    return xt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Nt, St).toLowerCase(), function(t) {
                        var n;
                        do if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), 
                        n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === H;
                },
                focus: function(e) {
                    return e === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !j.pseudos.empty(e);
                },
                header: function(e) {
                    return Et.test(e.nodeName);
                },
                input: function(e) {
                    return Tt.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first: g(function() {
                    return [ 0 ];
                }),
                last: g(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: g(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: g(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: g(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: g(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: g(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r; ) e.push(r);
                    return e;
                })
            }
        };
        for (C in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) j.pseudos[C] = f(C);
        for (C in {
            submit: !0,
            reset: !0
        }) j.pseudos[C] = h(C);
        O = n.compile = function(e, t) {
            var n, r = [], o = [], i = V[e + " "];
            if (!i) {
                for (t || (t = d(e)), n = t.length; n--; ) i = w(t[n]), i[z] ? r.push(i) : o.push(i);
                i = V(e, _(o, r));
            }
            return i;
        }, j.pseudos.nth = j.pseudos.eq, E.prototype = j.filters = j.pseudos, j.setFilters = new E(), N.sortStable = z.split("").sort(K).join("") === z, 
        P(), [ 0, 0 ].sort(K), N.detectDuplicates = J, it.find = n, it.expr = n.selectors, it.expr[":"] = it.expr.pseudos, 
        it.unique = n.uniqueSort, it.text = n.getText, it.isXMLDoc = n.isXML, it.contains = n.contains;
    }(e);
    var gt = {};
    it.Callbacks = function(e) {
        e = "string" == typeof e ? gt[e] || r(e) : it.extend({}, e);
        var n, o, i, a, s, c, u = [], l = !e.once && [], p = function(t) {
            for (n = e.memory && t, o = !0, c = a || 0, a = 0, s = u.length, i = !0; u && s > c; c++) if (u[c].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break;
            }
            i = !1, u && (l ? l.length && p(l.shift()) : n ? u = [] : f.disable());
        }, f = {
            add: function() {
                if (u) {
                    var t = u.length;
                    (function r(t) {
                        it.each(t, function(t, n) {
                            var o = it.type(n);
                            "function" === o ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== o && r(n);
                        });
                    })(arguments), i ? s = u.length : n && (a = t, p(n));
                }
                return this;
            },
            remove: function() {
                return u && it.each(arguments, function(e, t) {
                    for (var n; (n = it.inArray(t, u, n)) > -1; ) u.splice(n, 1), i && (s >= n && s--, c >= n && c--);
                }), this;
            },
            has: function(e) {
                return e ? it.inArray(e, u) > -1 : !(!u || !u.length);
            },
            empty: function() {
                return u = [], s = 0, this;
            },
            disable: function() {
                return u = l = n = t, this;
            },
            disabled: function() {
                return !u;
            },
            lock: function() {
                return l = t, n || f.disable(), this;
            },
            locked: function() {
                return !l;
            },
            fireWith: function(e, t) {
                return t = t || [], t = [ e, t.slice ? t.slice() : t ], !u || o && !l || (i ? l.push(t) : p(t)), this;
            },
            fire: function() {
                return f.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return f;
    }, it.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", it.Callbacks("once memory"), "resolved" ], [ "reject", "fail", it.Callbacks("once memory"), "rejected" ], [ "notify", "progress", it.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return it.Deferred(function(n) {
                        it.each(t, function(t, i) {
                            var a = i[0], s = it.isFunction(e[t]) && e[t];
                            o[i[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? it.extend(e, r) : r;
                }
            }, o = {};
            return r.pipe = r.then, it.each(t, function(e, i) {
                var a = i[2], s = i[3];
                r[i[1]] = a.add, s && a.add(function() {
                    n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? r : this, arguments), this;
                }, o[i[0] + "With"] = a.fireWith;
            }), r.promise(o), e && e.call(o, o), o;
        },
        when: function(e) {
            var t, n, r, o = 0, i = et.call(arguments), a = i.length, s = 1 !== a || e && it.isFunction(e.promise) ? a : 0, c = 1 === s ? e : it.Deferred(), u = function(e, n, r) {
                return function(o) {
                    n[e] = this, r[e] = arguments.length > 1 ? et.call(arguments) : o, r === t ? c.notifyWith(n, r) : --s || c.resolveWith(n, r);
                };
            };
            if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > o; o++) i[o] && it.isFunction(i[o].promise) ? i[o].promise().done(u(o, r, i)).fail(c.reject).progress(u(o, n, t)) : --s;
            return s || c.resolveWith(r, i), c.promise();
        }
    }), it.support = function(t) {
        var n = U.createElement("input"), r = U.createDocumentFragment(), o = U.createElement("div"), i = U.createElement("select"), a = i.appendChild(U.createElement("option"));
        return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, 
        t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, 
        i.disabled = !0, t.optDisabled = !a.disabled, n = U.createElement("input"), n.value = "t", n.type = "radio", 
        t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), 
        t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, 
        o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === o.style.backgroundClip, 
        it(function() {
            var n, r, i = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", a = U.getElementsByTagName("body")[0];
            a && (n = U.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            a.appendChild(n).appendChild(o), o.innerHTML = "", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", 
            it.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === o.offsetWidth;
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(o, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(o, null) || {
                width: "4px"
            }).width, r = o.appendChild(U.createElement("div")), r.style.cssText = o.style.cssText = i, r.style.marginRight = r.style.width = "0", 
            o.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), 
            a.removeChild(n));
        }), t) : t;
    }({});
    var dt, mt, vt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, yt = /([A-Z])/g;
    o.uid = 1, o.accepts = function(e) {
        return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0;
    }, o.prototype = {
        key: function(e) {
            if (!o.accepts(e)) return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = o.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t);
                } catch (r) {
                    t[this.expando] = n, it.extend(e, t);
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n;
        },
        set: function(e, t, n) {
            var r, o = this.key(e), i = this.cache[o];
            if ("string" == typeof t) i[t] = n; else if (it.isEmptyObject(i)) it.extend(this.cache[o], t); else for (r in t) i[r] = t[r];
            return i;
        },
        get: function(e, n) {
            var r = this.cache[this.key(e)];
            return n === t ? r : r[n];
        },
        access: function(e, n, r) {
            return n === t || n && "string" == typeof n && r === t ? this.get(e, n) : (this.set(e, n, r), r !== t ? r : n);
        },
        remove: function(e, n) {
            var r, o, i, a = this.key(e), s = this.cache[a];
            if (n === t) this.cache[a] = {}; else {
                it.isArray(n) ? o = n.concat(n.map(it.camelCase)) : (i = it.camelCase(n), n in s ? o = [ n, i ] : (o = i, 
                o = o in s ? [ o ] : o.match(st) || [])), r = o.length;
                for (;r--; ) delete s[o[r]];
            }
        },
        hasData: function(e) {
            return !it.isEmptyObject(this.cache[e[this.expando]] || {});
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]];
        }
    }, dt = new o(), mt = new o(), it.extend({
        acceptData: o.accepts,
        hasData: function(e) {
            return dt.hasData(e) || mt.hasData(e);
        },
        data: function(e, t, n) {
            return dt.access(e, t, n);
        },
        removeData: function(e, t) {
            dt.remove(e, t);
        },
        _data: function(e, t, n) {
            return mt.access(e, t, n);
        },
        _removeData: function(e, t) {
            mt.remove(e, t);
        }
    }), it.fn.extend({
        data: function(e, n) {
            var r, o, a = this[0], s = 0, c = null;
            if (e === t) {
                if (this.length && (c = dt.get(a), 1 === a.nodeType && !mt.get(a, "hasDataAttrs"))) {
                    for (r = a.attributes; r.length > s; s++) o = r[s].name, 0 === o.indexOf("data-") && (o = it.camelCase(o.slice(5)), 
                    i(a, o, c[o]));
                    mt.set(a, "hasDataAttrs", !0);
                }
                return c;
            }
            return "object" == typeof e ? this.each(function() {
                dt.set(this, e);
            }) : it.access(this, function(n) {
                var r, o = it.camelCase(e);
                if (a && n === t) {
                    if (r = dt.get(a, e), r !== t) return r;
                    if (r = dt.get(a, o), r !== t) return r;
                    if (r = i(a, o, t), r !== t) return r;
                } else this.each(function() {
                    var r = dt.get(this, o);
                    dt.set(this, o, n), -1 !== e.indexOf("-") && r !== t && dt.set(this, e, n);
                });
            }, null, n, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                dt.remove(this, e);
            });
        }
    }), it.extend({
        queue: function(e, n, r) {
            var o;
            return e ? (n = (n || "fx") + "queue", o = mt.get(e, n), r && (!o || it.isArray(r) ? o = mt.access(e, n, it.makeArray(r)) : o.push(r)), 
            o || []) : t;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = it.queue(e, t), r = n.length, o = n.shift(), i = it._queueHooks(e, t), a = function() {
                it.dequeue(e, t);
            };
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, 
            o.call(e, a, i)), !r && i && i.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return mt.get(e, n) || mt.access(e, n, {
                empty: it.Callbacks("once memory").add(function() {
                    mt.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), it.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? it.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = it.queue(this, e, n);
                it._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && it.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                it.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = it.fx ? it.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            var r, o = 1, i = it.Deferred(), a = this, s = this.length, c = function() {
                --o || i.resolveWith(a, [ a ]);
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--; ) r = mt.get(a[s], e + "queueHooks"), 
            r && r.empty && (o++, r.empty.add(c));
            return c(), i.promise(n);
        }
    });
    var bt, xt, wt = /[\t\r\n\f]/g, _t = /\r/g, kt = /^(?:input|select|textarea|button)$/i;
    it.fn.extend({
        attr: function(e, t) {
            return it.access(this, it.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                it.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return it.access(this, it.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[it.propFix[e] || e];
            });
        },
        addClass: function(e) {
            var t, n, r, o, i, a = 0, s = this.length, c = "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function(t) {
                it(this).addClass(e.call(this, t, this.className));
            });
            if (c) for (t = (e || "").match(st) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " ")) {
                for (i = 0; o = t[i++]; ) 0 > r.indexOf(" " + o + " ") && (r += o + " ");
                n.className = it.trim(r);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, o, i, a = 0, s = this.length, c = 0 === arguments.length || "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function(t) {
                it(this).removeClass(e.call(this, t, this.className));
            });
            if (c) for (t = (e || "").match(st) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : "")) {
                for (i = 0; o = t[i++]; ) for (;r.indexOf(" " + o + " ") >= 0; ) r = r.replace(" " + o + " ", " ");
                n.className = e ? it.trim(r) : "";
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return it.isFunction(e) ? this.each(function(n) {
                it(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if ("string" === n) for (var o, i = 0, a = it(this), s = t, c = e.match(st) || []; o = c[i++]; ) s = r ? s : !a.hasClass(o), 
                a[s ? "addClass" : "removeClass"](o); else (n === z || "boolean" === n) && (this.className && mt.set(this, "__className__", this.className), 
                this.className = this.className || e === !1 ? "" : mt.get(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var n, r, o, i = this[0];
            return arguments.length ? (o = it.isFunction(e), this.each(function(r) {
                var i;
                1 === this.nodeType && (i = o ? e.call(this, r, it(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function(e) {
                    return null == e ? "" : e + "";
                })), n = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, i, "value") !== t || (this.value = i));
            })) : i ? (n = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], n && "get" in n && (r = n.get(i, "value")) !== t ? r : (r = i.value, 
            "string" == typeof r ? r.replace(_t, "") : null == r ? "" : r)) : t;
        }
    }), it.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, c = 0 > o ? s : i ? o : 0; s > c; c++) if (n = r[c], 
                    !(!n.selected && c !== o || (it.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                        if (t = it(n).val(), i) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = it.makeArray(t), a = o.length; a--; ) r = o[a], (r.selected = it.inArray(it(r).val(), i) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), i;
                }
            }
        },
        attr: function(e, n, r) {
            var o, i, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === z ? it.prop(e, n, r) : (1 === a && it.isXMLDoc(e) || (n = n.toLowerCase(), 
            o = it.attrHooks[n] || (it.expr.match.bool.test(n) ? xt : bt)), r === t ? o && "get" in o && null !== (i = o.get(e, n)) ? i : (i = it.find.attr(e, n), 
            null == i ? t : i) : null !== r ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), 
            r) : (it.removeAttr(e, n), t)) : t;
        },
        removeAttr: function(e, t) {
            var n, r, o = 0, i = t && t.match(st);
            if (i && 1 === e.nodeType) for (;n = i[o++]; ) r = it.propFix[n] || n, it.expr.match.bool.test(n) && (e[r] = !1), 
            e.removeAttribute(n);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!it.support.radioValue && "radio" === t && it.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var o, i, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !it.isXMLDoc(e), a && (n = it.propFix[n] || n, 
            i = it.propHooks[n]), r !== t ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : e[n] = r : i && "get" in i && null !== (o = i.get(e, n)) ? o : e[n]) : t;
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || kt.test(e.nodeName) || e.href ? e.tabIndex : -1;
                }
            }
        }
    }), xt = {
        set: function(e, t, n) {
            return t === !1 ? it.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, it.each(it.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = it.expr.attrHandle[n] || it.find.attr;
        it.expr.attrHandle[n] = function(e, n, o) {
            var i = it.expr.attrHandle[n], a = o ? t : (it.expr.attrHandle[n] = t) != r(e, n, o) ? n.toLowerCase() : null;
            return it.expr.attrHandle[n] = i, a;
        };
    }), it.support.optSelected || (it.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        }
    }), it.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        it.propFix[this.toLowerCase()] = this;
    }), it.each([ "radio", "checkbox" ], function() {
        it.valHooks[this] = {
            set: function(e, n) {
                return it.isArray(n) ? e.checked = it.inArray(it(e).val(), n) >= 0 : t;
            }
        }, it.support.checkOn || (it.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var Tt = /^key/, Et = /^(?:mouse|contextmenu)|click/, Ct = /^(?:focusinfocus|focusoutblur)$/, Nt = /^([^.]*)(?:\.(.+)|)$/;
    it.event = {
        global: {},
        add: function(e, n, r, o, i) {
            var a, s, c, u, l, p, f, h, g, d, m, v = mt.get(e);
            if (v) {
                for (r.handler && (a = r, r = a.handler, i = a.selector), r.guid || (r.guid = it.guid++), (u = v.events) || (u = v.events = {}), 
                (s = v.handle) || (s = v.handle = function(e) {
                    return typeof it === z || e && it.event.triggered === e.type ? t : it.event.dispatch.apply(s.elem, arguments);
                }, s.elem = e), n = (n || "").match(st) || [ "" ], l = n.length; l--; ) c = Nt.exec(n[l]) || [], g = m = c[1], 
                d = (c[2] || "").split(".").sort(), g && (f = it.event.special[g] || {}, g = (i ? f.delegateType : f.bindType) || g, 
                f = it.event.special[g] || {}, p = it.extend({
                    type: g,
                    origType: m,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: i,
                    needsContext: i && it.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, a), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, f.setup && f.setup.call(e, o, d, s) !== !1 || e.addEventListener && e.addEventListener(g, s, !1)), 
                f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), i ? h.splice(h.delegateCount++, 0, p) : h.push(p), 
                it.event.global[g] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, c, u, l, p, f, h, g, d, m = mt.hasData(e) && mt.get(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(st) || [ "" ], u = t.length; u--; ) if (s = Nt.exec(t[u]) || [], h = d = s[1], 
                g = (s[2] || "").split(".").sort(), h) {
                    for (p = it.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, f = c[h] || [], s = s[2] && RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    a = i = f.length; i--; ) l = f[i], !o && d !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (f.splice(i, 1), 
                    l.selector && f.delegateCount--, p.remove && p.remove.call(e, l));
                    a && !f.length && (p.teardown && p.teardown.call(e, g, m.handle) !== !1 || it.removeEvent(e, h, m.handle), 
                    delete c[h]);
                } else for (h in c) it.event.remove(e, h + t[u], n, r, !0);
                it.isEmptyObject(c) && (delete m.handle, mt.remove(e, "events"));
            }
        },
        trigger: function(n, r, o, i) {
            var a, s, c, u, l, p, f, h = [ o || U ], g = rt.call(n, "type") ? n.type : n, d = rt.call(n, "namespace") ? n.namespace.split(".") : [];
            if (s = c = o = o || U, 3 !== o.nodeType && 8 !== o.nodeType && !Ct.test(g + it.event.triggered) && (g.indexOf(".") >= 0 && (d = g.split("."), 
            g = d.shift(), d.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[it.expando] ? n : new it.Event(g, "object" == typeof n && n), 
            n.isTrigger = i ? 2 : 3, n.namespace = d.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            n.result = t, n.target || (n.target = o), r = null == r ? [ n ] : it.makeArray(r, [ n ]), f = it.event.special[g] || {}, 
            i || !f.trigger || f.trigger.apply(o, r) !== !1)) {
                if (!i && !f.noBubble && !it.isWindow(o)) {
                    for (u = f.delegateType || g, Ct.test(u + g) || (s = s.parentNode); s; s = s.parentNode) h.push(s), 
                    c = s;
                    c === (o.ownerDocument || U) && h.push(c.defaultView || c.parentWindow || e);
                }
                for (a = 0; (s = h[a++]) && !n.isPropagationStopped(); ) n.type = a > 1 ? u : f.bindType || g, p = (mt.get(s, "events") || {})[n.type] && mt.get(s, "handle"), 
                p && p.apply(s, r), p = l && s[l], p && it.acceptData(s) && p.apply && p.apply(s, r) === !1 && n.preventDefault();
                return n.type = g, i || n.isDefaultPrevented() || f._default && f._default.apply(h.pop(), r) !== !1 || !it.acceptData(o) || l && it.isFunction(o[g]) && !it.isWindow(o) && (c = o[l], 
                c && (o[l] = null), it.event.triggered = g, o[g](), it.event.triggered = t, c && (o[l] = c)), n.result;
            }
        },
        dispatch: function(e) {
            e = it.event.fix(e);
            var n, r, o, i, a, s = [], c = et.call(arguments), u = (mt.get(this, "events") || {})[e.type] || [], l = it.event.special[e.type] || {};
            if (c[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = it.event.handlers.call(this, e, u), n = 0; (i = s[n++]) && !e.isPropagationStopped(); ) for (e.currentTarget = i.elem, 
                r = 0; (a = i.handlers[r++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, 
                e.data = a.data, o = ((it.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, c), o !== t && (e.result = o) === !1 && (e.preventDefault(), 
                e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, n) {
            var r, o, i, a, s = [], c = n.delegateCount, u = e.target;
            if (c && u.nodeType && (!e.button || "click" !== e.type)) for (;u !== this; u = u.parentNode || this) if (u.disabled !== !0 || "click" !== e.type) {
                for (o = [], r = 0; c > r; r++) a = n[r], i = a.selector + " ", o[i] === t && (o[i] = a.needsContext ? it(i, this).index(u) >= 0 : it.find(i, this, null, [ u ]).length), 
                o[i] && o.push(a);
                o.length && s.push({
                    elem: u,
                    handlers: o
                });
            }
            return n.length > c && s.push({
                elem: this,
                handlers: n.slice(c)
            }), s;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, o, i, a = n.button;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || U, o = r.documentElement, 
                i = r.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), 
                e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), 
                e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e;
            }
        },
        fix: function(e) {
            if (e[it.expando]) return e;
            var t, n, r, o = e.type, i = e, a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Et.test(o) ? this.mouseHooks : Tt.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, 
            e = new it.Event(i), t = r.length; t--; ) n = r[t], e[n] = i[n];
            return e.target || (e.target = U), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, i) : e;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== c() && this.focus ? (this.focus(), !1) : t;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === c() && this.blur ? (this.blur(), !1) : t;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && it.nodeName(this, "input") ? (this.click(), !1) : t;
                },
                _default: function(e) {
                    return it.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var o = it.extend(new it.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? it.event.trigger(o, null, t) : it.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault();
        }
    }, it.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    }, it.Event = function(e, n) {
        return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? a : s) : this.type = e, 
        n && it.extend(this, n), this.timeStamp = e && e.timeStamp || it.now(), this[it.expando] = !0, t) : new it.Event(e, n);
    }, it.Event.prototype = {
        isDefaultPrevented: s,
        isPropagationStopped: s,
        isImmediatePropagationStopped: s,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = a, e && e.preventDefault && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = a, e && e.stopPropagation && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = a, this.stopPropagation();
        }
    }, it.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        it.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, o = e.relatedTarget, i = e.handleObj;
                return (!o || o !== r && !it.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), it.support.focusinBubbles || it.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            it.event.simulate(t, e.target, it.event.fix(e), !0);
        };
        it.event.special[t] = {
            setup: function() {
                0 === n++ && U.addEventListener(e, r, !0);
            },
            teardown: function() {
                0 === --n && U.removeEventListener(e, r, !0);
            }
        };
    }), it.fn.extend({
        on: function(e, n, r, o, i) {
            var a, c;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (c in e) this.on(c, n, r, e[c], i);
                return this;
            }
            if (null == r && null == o ? (o = n, r = n = t) : null == o && ("string" == typeof n ? (o = r, r = t) : (o = r, 
            r = n, n = t)), o === !1) o = s; else if (!o) return this;
            return 1 === i && (a = o, o = function(e) {
                return it().off(e), a.apply(this, arguments);
            }, o.guid = a.guid || (a.guid = it.guid++)), this.each(function() {
                it.event.add(this, e, o, r, n);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, n, r) {
            var o, i;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj, it(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), 
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, n, e[i]);
                return this;
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = s), this.each(function() {
                it.event.remove(this, e, r, n);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                it.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? it.event.trigger(e, n, r, !0) : t;
        }
    });
    var St = /^.[^:#\[\.,]*$/, jt = /^(?:parents|prev(?:Until|All))/, At = it.expr.match.needsContext, Dt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    it.fn.extend({
        find: function(e) {
            var t, n = [], r = this, o = r.length;
            if ("string" != typeof e) return this.pushStack(it(e).filter(function() {
                for (t = 0; o > t; t++) if (it.contains(r[t], this)) return !0;
            }));
            for (t = 0; o > t; t++) it.find(e, r[t], n);
            return n = this.pushStack(o > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, 
            n;
        },
        has: function(e) {
            var t = it(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++) if (it.contains(this, t[e])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(l(this, e || [], !0));
        },
        filter: function(e) {
            return this.pushStack(l(this, e || [], !1));
        },
        is: function(e) {
            return !!l(this, "string" == typeof e && At.test(e) ? it(e) : e || [], !1).length;
        },
        closest: function(e, t) {
            for (var n, r = 0, o = this.length, i = [], a = At.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; o > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
                n = i.push(n);
                break;
            }
            return this.pushStack(i.length > 1 ? it.unique(i) : i);
        },
        index: function(e) {
            return e ? "string" == typeof e ? tt.call(it(e), this[0]) : tt.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? it(e, t) : it.makeArray(e && e.nodeType ? [ e ] : e), r = it.merge(this.get(), n);
            return this.pushStack(it.unique(r));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), it.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return it.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return it.dir(e, "parentNode", n);
        },
        next: function(e) {
            return u(e, "nextSibling");
        },
        prev: function(e) {
            return u(e, "previousSibling");
        },
        nextAll: function(e) {
            return it.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return it.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return it.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return it.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return it.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return it.sibling(e.firstChild);
        },
        contents: function(e) {
            return e.contentDocument || it.merge([], e.childNodes);
        }
    }, function(e, t) {
        it.fn[e] = function(n, r) {
            var o = it.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = it.filter(r, o)), this.length > 1 && (Dt[e] || it.unique(o), 
            jt.test(e) && o.reverse()), this.pushStack(o);
        };
    }), it.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? it.find.matchesSelector(r, e) ? [ r ] : [] : it.find.matches(e, it.grep(t, function(e) {
                return 1 === e.nodeType;
            }));
        },
        dir: function(e, n, r) {
            for (var o = [], i = r !== t; (e = e[n]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
                if (i && it(e).is(r)) break;
                o.push(e);
            }
            return o;
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Lt = /<([\w:]+)/, Mt = /<|&#?\w+;/, Pt = /<(?:script|style|link)/i, Rt = /^(?:checkbox|radio)$/i, Ht = /checked\s*(?:[^=]|=\s*.checked.)/i, Ft = /^$|\/(?:java|ecma)script/i, qt = /^true\/(.*)/, It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, $t = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    $t.optgroup = $t.option, $t.tbody = $t.tfoot = $t.colgroup = $t.caption = $t.thead, $t.th = $t.td, it.fn.extend({
        text: function(e) {
            return it.access(this, function(e) {
                return e === t ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || U).createTextNode(e));
            }, null, e, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            for (var n, r = e ? it.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || it.cleanData(m(n)), 
            n.parentNode && (t && it.contains(n.ownerDocument, n) && g(m(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (it.cleanData(m(e, !1)), e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return it.clone(this, e, t);
            });
        },
        html: function(e) {
            return it.access(this, function(e) {
                var n = this[0] || {}, r = 0, o = this.length;
                if (e === t && 1 === n.nodeType) return n.innerHTML;
                if ("string" == typeof e && !Pt.test(e) && !$t[(Lt.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = e.replace(Ot, "<$1></$2>");
                    try {
                        for (;o > r; r++) n = this[r] || {}, 1 === n.nodeType && (it.cleanData(m(n, !1)), n.innerHTML = e);
                        n = 0;
                    } catch (i) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = it.map(this, function(e) {
                return [ e.nextSibling, e.parentNode ];
            }), t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++], o = e[t++];
                o && (r && r.parentNode !== o && (r = this.nextSibling), it(this).remove(), o.insertBefore(n, r));
            }, !0), t ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, t, n) {
            e = Q.apply([], e);
            var r, o, i, a, s, c, u = 0, l = this.length, p = this, g = l - 1, d = e[0], v = it.isFunction(d);
            if (v || !(1 >= l || "string" != typeof d || it.support.checkClone) && Ht.test(d)) return this.each(function(r) {
                var o = p.eq(r);
                v && (e[0] = d.call(this, r, o.html())), o.domManip(e, t, n);
            });
            if (l && (r = it.buildFragment(e, this[0].ownerDocument, !1, !n && this), o = r.firstChild, 1 === r.childNodes.length && (r = o), 
            o)) {
                for (i = it.map(m(r, "script"), f), a = i.length; l > u; u++) s = r, u !== g && (s = it.clone(s, !0, !0), 
                a && it.merge(i, m(s, "script"))), t.call(this[u], s, u);
                if (a) for (c = i[i.length - 1].ownerDocument, it.map(i, h), u = 0; a > u; u++) s = i[u], Ft.test(s.type || "") && !mt.access(s, "globalEval") && it.contains(c, s) && (s.src ? it._evalUrl(s.src) : it.globalEval(s.textContent.replace(It, "")));
            }
            return this;
        }
    }), it.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        it.fn[e] = function(e) {
            for (var n, r = [], o = it(e), i = o.length - 1, a = 0; i >= a; a++) n = a === i ? this : this.clone(!0), 
            it(o[a])[t](n), Z.apply(r, n.get());
            return this.pushStack(r);
        };
    }), it.extend({
        clone: function(e, t, n) {
            var r, o, i, a, s = e.cloneNode(!0), c = it.contains(e.ownerDocument, e);
            if (!(it.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e))) for (a = m(s), 
            i = m(e), r = 0, o = i.length; o > r; r++) v(i[r], a[r]);
            if (t) if (n) for (i = i || m(e), a = a || m(s), r = 0, o = i.length; o > r; r++) d(i[r], a[r]); else d(e, s);
            return a = m(s, "script"), a.length > 0 && g(a, !c && m(e, "script")), s;
        },
        buildFragment: function(e, t, n, r) {
            for (var o, i, a, s, c, u, l = 0, p = e.length, f = t.createDocumentFragment(), h = []; p > l; l++) if (o = e[l], 
            o || 0 === o) if ("object" === it.type(o)) it.merge(h, o.nodeType ? [ o ] : o); else if (Mt.test(o)) {
                for (i = i || f.appendChild(t.createElement("div")), a = (Lt.exec(o) || [ "", "" ])[1].toLowerCase(), 
                s = $t[a] || $t._default, i.innerHTML = s[1] + o.replace(Ot, "<$1></$2>") + s[2], u = s[0]; u--; ) i = i.firstChild;
                it.merge(h, i.childNodes), i = f.firstChild, i.textContent = "";
            } else h.push(t.createTextNode(o));
            for (f.textContent = "", l = 0; o = h[l++]; ) if ((!r || -1 === it.inArray(o, r)) && (c = it.contains(o.ownerDocument, o), 
            i = m(f.appendChild(o), "script"), c && g(i), n)) for (u = 0; o = i[u++]; ) Ft.test(o.type || "") && n.push(o);
            return f;
        },
        cleanData: function(e) {
            for (var n, r, i, a, s, c, u = it.event.special, l = 0; (r = e[l]) !== t; l++) {
                if (o.accepts(r) && (s = r[mt.expando], s && (n = mt.cache[s]))) {
                    if (i = Object.keys(n.events || {}), i.length) for (c = 0; (a = i[c]) !== t; c++) u[a] ? it.event.remove(r, a) : it.removeEvent(r, a, n.handle);
                    mt.cache[s] && delete mt.cache[s];
                }
                delete dt.cache[r[dt.expando]];
            }
        },
        _evalUrl: function(e) {
            return it.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), it.fn.extend({
        wrapAll: function(e) {
            var t;
            return it.isFunction(e) ? this.each(function(t) {
                it(this).wrapAll(e.call(this, t));
            }) : (this[0] && (t = it(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), 
            t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this);
        },
        wrapInner: function(e) {
            return it.isFunction(e) ? this.each(function(t) {
                it(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = it(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = it.isFunction(e);
            return this.each(function(n) {
                it(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                it.nodeName(this, "body") || it(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var Bt, zt, Wt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Xt = RegExp("^(" + at + ")(.*)$", "i"), Gt = RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"), Yt = RegExp("^([+-])=(" + at + ")", "i"), Vt = {
        BODY: "block"
    }, Jt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Qt = [ "Top", "Right", "Bottom", "Left" ], Zt = [ "Webkit", "O", "Moz", "ms" ];
    it.fn.extend({
        css: function(e, n) {
            return it.access(this, function(e, n, r) {
                var o, i, a = {}, s = 0;
                if (it.isArray(n)) {
                    for (o = x(e), i = n.length; i > s; s++) a[n[s]] = it.css(e, n[s], !1, o);
                    return a;
                }
                return r !== t ? it.style(e, n, r) : it.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show: function() {
            return w(this, !0);
        },
        hide: function() {
            return w(this);
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : b(this)) ? it(this).show() : it(this).hide();
            });
        }
    }), it.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Bt(e, "opacity");
                        return "" === n ? "1" : n;
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
        style: function(e, n, r, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, a, s, c = it.camelCase(n), u = e.style;
                return n = it.cssProps[c] || (it.cssProps[c] = y(u, c)), s = it.cssHooks[n] || it.cssHooks[c], r === t ? s && "get" in s && (i = s.get(e, !1, o)) !== t ? i : u[n] : (a = typeof r, 
                "string" === a && (i = Yt.exec(r)) && (r = (i[1] + 1) * i[2] + parseFloat(it.css(e, n)), a = "number"), 
                null == r || "number" === a && isNaN(r) || ("number" !== a || it.cssNumber[c] || (r += "px"), it.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), 
                s && "set" in s && (r = s.set(e, r, o)) === t || (u[n] = r)), t);
            }
        },
        css: function(e, n, r, o) {
            var i, a, s, c = it.camelCase(n);
            return n = it.cssProps[c] || (it.cssProps[c] = y(e.style, c)), s = it.cssHooks[n] || it.cssHooks[c], 
            s && "get" in s && (i = s.get(e, !0, r)), i === t && (i = Bt(e, n, o)), "normal" === i && n in Kt && (i = Kt[n]), 
            "" === r || r ? (a = parseFloat(i), r === !0 || it.isNumeric(a) ? a || 0 : i) : i;
        }
    }), Bt = function(e, n, r) {
        var o, i, a, s = r || x(e), c = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== c || it.contains(e.ownerDocument, e) || (c = it.style(e, n)), Gt.test(c) && Ut.test(n) && (o = u.width, 
        i = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = c, c = s.width, u.width = o, u.minWidth = i, 
        u.maxWidth = a)), c;
    }, it.each([ "height", "width" ], function(e, n) {
        it.cssHooks[n] = {
            get: function(e, r, o) {
                return r ? 0 === e.offsetWidth && Wt.test(it.css(e, "display")) ? it.swap(e, Jt, function() {
                    return T(e, n, o);
                }) : T(e, n, o) : t;
            },
            set: function(e, t, r) {
                var o = r && x(e);
                return _(e, t, r ? k(e, n, r, it.support.boxSizing && "border-box" === it.css(e, "boxSizing", !1, o), o) : 0);
            }
        };
    }), it(function() {
        it.support.reliableMarginRight || (it.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? it.swap(e, {
                    display: "inline-block"
                }, Bt, [ e, "marginRight" ]) : t;
            }
        }), !it.support.pixelPosition && it.fn.position && it.each([ "top", "left" ], function(e, n) {
            it.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Bt(e, n), Gt.test(r) ? it(e).position()[n] + "px" : r) : t;
                }
            };
        });
    }), it.expr && it.expr.filters && (it.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
    }, it.expr.filters.visible = function(e) {
        return !it.expr.filters.hidden(e);
    }), it.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        it.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [ n ]; 4 > r; r++) o[e + Qt[r] + t] = i[r] || i[r - 2] || i[0];
                return o;
            }
        }, Ut.test(e) || (it.cssHooks[e + t].set = _);
    });
    var en = /%20/g, tn = /\[\]$/, nn = /\r?\n/g, rn = /^(?:submit|button|image|reset|file)$/i, on = /^(?:input|select|textarea|keygen)/i;
    it.fn.extend({
        serialize: function() {
            return it.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = it.prop(this, "elements");
                return e ? it.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !it(this).is(":disabled") && on.test(this.nodeName) && !rn.test(e) && (this.checked || !Rt.test(e));
            }).map(function(e, t) {
                var n = it(this).val();
                return null == n ? null : it.isArray(n) ? it.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(nn, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(nn, "\r\n")
                };
            }).get();
        }
    }), it.param = function(e, n) {
        var r, o = [], i = function(e, t) {
            t = it.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t && (n = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(e) || e.jquery && !it.isPlainObject(e)) it.each(e, function() {
            i(this.name, this.value);
        }); else for (r in e) N(r, e[r], n, i);
        return o.join("&").replace(en, "+");
    }, it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        it.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), it.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    var an, sn, cn = it.now(), un = /\?/, ln = /#.*$/, pn = /([?&])_=[^&]*/, fn = /^(.*?):[ \t]*([^\r\n]*)$/gm, hn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, gn = /^(?:GET|HEAD)$/, dn = /^\/\//, mn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, vn = it.fn.load, yn = {}, bn = {}, xn = "*/".concat("*");
    try {
        sn = W.href;
    } catch (wn) {
        sn = U.createElement("a"), sn.href = "", sn = sn.href;
    }
    an = mn.exec(sn.toLowerCase()) || [], it.fn.load = function(e, n, r) {
        if ("string" != typeof e && vn) return vn.apply(this, arguments);
        var o, i, a, s = this, c = e.indexOf(" ");
        return c >= 0 && (o = e.slice(c), e = e.slice(0, c)), it.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (i = "POST"), 
        s.length > 0 && it.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: n
        }).done(function(e) {
            a = arguments, s.html(o ? it("<div>").append(it.parseHTML(e)).find(o) : e);
        }).complete(r && function(e, t) {
            s.each(r, a || [ e.responseText, t, e ]);
        }), this;
    }, it.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        it.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), it.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: sn,
            type: "GET",
            isLocal: hn.test(an[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xn,
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
                "text json": it.parseJSON,
                "text xml": it.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? A(A(e, it.ajaxSettings), t) : A(it.ajaxSettings, e);
        },
        ajaxPrefilter: S(yn),
        ajaxTransport: S(bn),
        ajax: function(e, n) {
            function r(e, n, r, s) {
                var u, p, y, b, w, k = n;
                2 !== x && (x = 2, c && clearTimeout(c), o = t, a = s || "", _.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, 
                r && (b = D(f, _, r)), b = O(f, b, _, u), u ? (f.ifModified && (w = _.getResponseHeader("Last-Modified"), 
                w && (it.lastModified[i] = w), w = _.getResponseHeader("etag"), w && (it.etag[i] = w)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, 
                p = b.data, y = b.error, u = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), _.status = e, 
                _.statusText = (n || k) + "", u ? d.resolveWith(h, [ p, k, _ ]) : d.rejectWith(h, [ _, k, y ]), _.statusCode(v), 
                v = t, l && g.trigger(u ? "ajaxSuccess" : "ajaxError", [ _, f, u ? p : y ]), m.fireWith(h, [ _, k ]), 
                l && (g.trigger("ajaxComplete", [ _, f ]), --it.active || it.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var o, i, a, s, c, u, l, p, f = it.ajaxSetup({}, n), h = f.context || f, g = f.context && (h.nodeType || h.jquery) ? it(h) : it.event, d = it.Deferred(), m = it.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!s) for (s = {}; t = fn.exec(a); ) s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, y[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return x || (f.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) v[t] = [ v[t], e[t] ]; else _.always(e[_.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || w;
                    return o && o.abort(t), r(0, t), this;
                }
            };
            if (d.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, f.url = ((e || f.url || sn) + "").replace(ln, "").replace(dn, an[1] + "//"), 
            f.type = n.method || n.type || f.method || f.type, f.dataTypes = it.trim(f.dataType || "*").toLowerCase().match(st) || [ "" ], 
            null == f.crossDomain && (u = mn.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === an[1] && u[2] === an[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (an[3] || ("http:" === an[1] ? "80" : "443")))), 
            f.data && f.processData && "string" != typeof f.data && (f.data = it.param(f.data, f.traditional)), 
            j(yn, f, n, _), 2 === x) return _;
            l = f.global, l && 0 === it.active++ && it.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), 
            f.hasContent = !gn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (un.test(i) ? "&" : "?") + f.data, 
            delete f.data), f.cache === !1 && (f.url = pn.test(i) ? i.replace(pn, "$1_=" + cn++) : i + (un.test(i) ? "&" : "?") + "_=" + cn++)), 
            f.ifModified && (it.lastModified[i] && _.setRequestHeader("If-Modified-Since", it.lastModified[i]), 
            it.etag[i] && _.setRequestHeader("If-None-Match", it.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", f.contentType), 
            _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xn + "; q=0.01" : "") : f.accepts["*"]);
            for (p in f.headers) _.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (f.beforeSend.call(h, _, f) === !1 || 2 === x)) return _.abort();
            w = "abort";
            for (p in {
                success: 1,
                error: 1,
                complete: 1
            }) _[p](f[p]);
            if (o = j(bn, f, n, _)) {
                _.readyState = 1, l && g.trigger("ajaxSend", [ _, f ]), f.async && f.timeout > 0 && (c = setTimeout(function() {
                    _.abort("timeout");
                }, f.timeout));
                try {
                    x = 1, o.send(y, r);
                } catch (k) {
                    if (!(2 > x)) throw k;
                    r(-1, k);
                }
            } else r(-1, "No Transport");
            return _;
        },
        getJSON: function(e, t, n) {
            return it.get(e, t, n, "json");
        },
        getScript: function(e, n) {
            return it.get(e, t, n, "script");
        }
    }), it.each([ "get", "post" ], function(e, n) {
        it[n] = function(e, r, o, i) {
            return it.isFunction(r) && (i = i || o, o = r, r = t), it.ajax({
                url: e,
                type: n,
                dataType: i,
                data: r,
                success: o
            });
        };
    }), it.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return it.globalEval(e), e;
            }
        }
    }), it.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), it.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, o) {
                    t = it("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
                    }), U.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var _n = [], kn = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = _n.pop() || it.expando + "_" + cn++;
            return this[e] = !0, e;
        }
    }), it.ajaxPrefilter("json jsonp", function(n, r, o) {
        var i, a, s, c = n.jsonp !== !1 && (kn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && kn.test(n.data) && "data");
        return c || "jsonp" === n.dataTypes[0] ? (i = n.jsonpCallback = it.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
        c ? n[c] = n[c].replace(kn, "$1" + i) : n.jsonp !== !1 && (n.url += (un.test(n.url) ? "&" : "?") + n.jsonp + "=" + i), 
        n.converters["script json"] = function() {
            return s || it.error(i + " was not called"), s[0];
        }, n.dataTypes[0] = "json", a = e[i], e[i] = function() {
            s = arguments;
        }, o.always(function() {
            e[i] = a, n[i] && (n.jsonpCallback = r.jsonpCallback, _n.push(i)), s && it.isFunction(a) && a(s[0]), 
            s = a = t;
        }), "script") : t;
    }), it.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (e) {}
    };
    var Tn = it.ajaxSettings.xhr(), En = {
        0: 200,
        1223: 204
    }, Cn = 0, Nn = {};
    e.ActiveXObject && it(e).on("unload", function() {
        for (var e in Nn) Nn[e]();
        Nn = t;
    }), it.support.cors = !!Tn && "withCredentials" in Tn, it.support.ajax = Tn = !!Tn, it.ajaxTransport(function(e) {
        var n;
        return it.support.cors || Tn && !e.crossDomain ? {
            send: function(r, o) {
                var i, a, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) s[i] = e.xhrFields[i];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (i in r) s.setRequestHeader(i, r[i]);
                n = function(e) {
                    return function() {
                        n && (delete Nn[a], n = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? o(s.status || 404, s.statusText) : o(En[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : t, s.getAllResponseHeaders()));
                    };
                }, s.onload = n(), s.onerror = n("error"), n = Nn[a = Cn++] = n("abort"), s.send(e.hasContent && e.data || null);
            },
            abort: function() {
                n && n();
            }
        } : t;
    });
    var Sn, jn, An = /^(?:toggle|show|hide)$/, Dn = RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"), On = /queueHooks$/, Ln = [ H ], Mn = {
        "*": [ function(e, t) {
            var n = this.createTween(e, t), r = n.cur(), o = Dn.exec(t), i = o && o[3] || (it.cssNumber[e] ? "" : "px"), a = (it.cssNumber[e] || "px" !== i && +r) && Dn.exec(it.css(n.elem, e)), s = 1, c = 20;
            if (a && a[3] !== i) {
                i = i || a[3], o = o || [], a = +r || 1;
                do s = s || ".5", a /= s, it.style(n.elem, e, a + i); while (s !== (s = n.cur() / r) && 1 !== s && --c);
            }
            return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), 
            n;
        } ]
    };
    it.Animation = it.extend(P, {
        tweener: function(e, t) {
            it.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, r = 0, o = e.length; o > r; r++) n = e[r], Mn[n] = Mn[n] || [], Mn[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? Ln.unshift(e) : Ln.push(e);
        }
    }), it.Tween = F, F.prototype = {
        constructor: F,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = r, this.unit = i || (it.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = F.propHooks[this.prop];
            return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : F.propHooks._default.set(this), this;
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            set: function(e) {
                it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, it.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = it.fn[t];
        it.fn[t] = function(e, r, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, r, o);
        };
    }), it.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(b).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var o = it.isEmptyObject(e), i = it.speed(t, n, r), a = function() {
                var t = P(this, it.extend({}, e), i);
                (o || mt.get(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a);
        },
        stop: function(e, n, r) {
            var o = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", i = it.timers, a = mt.get(this);
                if (n) a[n] && a[n].stop && o(a[n]); else for (n in a) a[n] && a[n].stop && On.test(n) && o(a[n]);
                for (n = i.length; n--; ) i[n].elem !== this || null != e && i[n].queue !== e || (i[n].anim.stop(r), 
                t = !1, i.splice(n, 1));
                (t || !r) && it.dequeue(this, e);
            });
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = mt.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = it.timers, a = r ? r.length : 0;
                for (n.finish = !0, it.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), 
                i.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), it.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        it.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), it.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? it.extend({}, e) : {
            complete: n || !n && t || it.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !it.isFunction(t) && t
        };
        return r.duration = it.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default, 
        (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue);
        }, r;
    }, it.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, it.timers = [], it.fx = F.prototype.init, it.fx.tick = function() {
        var e, n = it.timers, r = 0;
        for (Sn = it.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || it.fx.stop(), Sn = t;
    }, it.fx.timer = function(e) {
        e() && it.timers.push(e) && it.fx.start();
    }, it.fx.interval = 13, it.fx.start = function() {
        jn || (jn = setInterval(it.fx.tick, it.fx.interval));
    }, it.fx.stop = function() {
        clearInterval(jn), jn = null;
    }, it.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, it.fx.step = {}, it.expr && it.expr.filters && (it.expr.filters.animated = function(e) {
        return it.grep(it.timers, function(t) {
            return e === t.elem;
        }).length;
    }), it.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            it.offset.setOffset(this, e, t);
        });
        var n, r, o = this[0], i = {
            top: 0,
            left: 0
        }, a = o && o.ownerDocument;
        return a ? (n = a.documentElement, it.contains(n, o) ? (typeof o.getBoundingClientRect !== z && (i = o.getBoundingClientRect()), 
        r = I(a), {
            top: i.top + r.pageYOffset - n.clientTop,
            left: i.left + r.pageXOffset - n.clientLeft
        }) : i) : t;
    }, it.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, c, u, l = it.css(e, "position"), p = it(e), f = {};
            "static" === l && (e.style.position = "relative"), s = p.offset(), i = it.css(e, "top"), c = it.css(e, "left"), 
            u = ("absolute" === l || "fixed" === l) && (i + c).indexOf("auto") > -1, u ? (r = p.position(), a = r.top, 
            o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(c) || 0), it.isFunction(t) && (t = t.call(e, n, s)), 
            null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : p.css(f);
        }
    }, it.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === it.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), it.nodeName(e[0], "html") || (r = e.offset()), r.top += it.css(e[0], "borderTopWidth", !0), 
                r.left += it.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - it.css(n, "marginTop", !0),
                    left: t.left - r.left - it.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || X; e && !it.nodeName(e, "html") && "static" === it.css(e, "position"); ) e = e.offsetParent;
                return e || X;
            });
        }
    }), it.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, r) {
        var o = "pageYOffset" === r;
        it.fn[n] = function(i) {
            return it.access(this, function(n, i, a) {
                var s = I(n);
                return a === t ? s ? s[r] : n[i] : (s ? s.scrollTo(o ? e.pageXOffset : a, o ? a : e.pageYOffset) : n[i] = a, 
                t);
            }, n, i, arguments.length, null);
        };
    }), it.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        it.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, o) {
            it.fn[o] = function(o, i) {
                var a = arguments.length && (r || "boolean" != typeof o), s = r || (o === !0 || i === !0 ? "margin" : "border");
                return it.access(this, function(n, r, o) {
                    var i;
                    return it.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (i = n.documentElement, 
                    Math.max(n.body["scroll" + e], i["scroll" + e], n.body["offset" + e], i["offset" + e], i["client" + e])) : o === t ? it.css(n, r, s) : it.style(n, r, o, s);
                }, n, a ? o : t, a, null);
            };
        });
    }), it.fn.size = function() {
        return this.length;
    }, it.fn.andSelf = it.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = it : "function" == typeof define && define.amd && define("jquery", [], function() {
        return it;
    }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = it);
})(window), //     Underscore may be freely distributed under the MIT license.
function() {
    var e = this, t = e._, n = {}, r = Array.prototype, o = Object.prototype, i = Function.prototype, a = r.push, s = r.slice, c = r.concat, u = o.toString, l = o.hasOwnProperty, p = r.forEach, f = r.map, h = r.reduce, g = r.reduceRight, d = r.filter, m = r.every, v = r.some, y = r.indexOf, b = r.lastIndexOf, x = Array.isArray, w = Object.keys, _ = i.bind, k = function(e) {
        return e instanceof k ? e : this instanceof k ? (this._wrapped = e, void 0) : new k(e);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), 
    exports._ = k) : e._ = k, k.VERSION = "1.5.1";
    var T = k.each = k.forEach = function(e, t, r) {
        if (null != e) if (p && e.forEach === p) e.forEach(t, r); else if (e.length === +e.length) {
            for (var o = 0, i = e.length; i > o; o++) if (t.call(r, e[o], o, e) === n) return;
        } else for (var a in e) if (k.has(e, a) && t.call(r, e[a], a, e) === n) return;
    };
    k.map = k.collect = function(e, t, n) {
        var r = [];
        return null == e ? r : f && e.map === f ? e.map(t, n) : (T(e, function(e, o, i) {
            r.push(t.call(n, e, o, i));
        }), r);
    };
    var E = "Reduce of empty array with no initial value";
    k.reduce = k.foldl = k.inject = function(e, t, n, r) {
        var o = arguments.length > 2;
        if (null == e && (e = []), h && e.reduce === h) return r && (t = k.bind(t, r)), o ? e.reduce(t, n) : e.reduce(t);
        if (T(e, function(e, i, a) {
            o ? n = t.call(r, n, e, i, a) : (n = e, o = !0);
        }), !o) throw new TypeError(E);
        return n;
    }, k.reduceRight = k.foldr = function(e, t, n, r) {
        var o = arguments.length > 2;
        if (null == e && (e = []), g && e.reduceRight === g) return r && (t = k.bind(t, r)), o ? e.reduceRight(t, n) : e.reduceRight(t);
        var i = e.length;
        if (i !== +i) {
            var a = k.keys(e);
            i = a.length;
        }
        if (T(e, function(s, c, u) {
            c = a ? a[--i] : --i, o ? n = t.call(r, n, e[c], c, u) : (n = e[c], o = !0);
        }), !o) throw new TypeError(E);
        return n;
    }, k.find = k.detect = function(e, t, n) {
        var r;
        return C(e, function(e, o, i) {
            return t.call(n, e, o, i) ? (r = e, !0) : void 0;
        }), r;
    }, k.filter = k.select = function(e, t, n) {
        var r = [];
        return null == e ? r : d && e.filter === d ? e.filter(t, n) : (T(e, function(e, o, i) {
            t.call(n, e, o, i) && r.push(e);
        }), r);
    }, k.reject = function(e, t, n) {
        return k.filter(e, function(e, r, o) {
            return !t.call(n, e, r, o);
        }, n);
    }, k.every = k.all = function(e, t, r) {
        t || (t = k.identity);
        var o = !0;
        return null == e ? o : m && e.every === m ? e.every(t, r) : (T(e, function(e, i, a) {
            return (o = o && t.call(r, e, i, a)) ? void 0 : n;
        }), !!o);
    };
    var C = k.some = k.any = function(e, t, r) {
        t || (t = k.identity);
        var o = !1;
        return null == e ? o : v && e.some === v ? e.some(t, r) : (T(e, function(e, i, a) {
            return o || (o = t.call(r, e, i, a)) ? n : void 0;
        }), !!o);
    };
    k.contains = k.include = function(e, t) {
        return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : C(e, function(e) {
            return e === t;
        });
    }, k.invoke = function(e, t) {
        var n = s.call(arguments, 2), r = k.isFunction(t);
        return k.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n);
        });
    }, k.pluck = function(e, t) {
        return k.map(e, function(e) {
            return e[t];
        });
    }, k.where = function(e, t, n) {
        return k.isEmpty(t) ? n ? void 0 : [] : k[n ? "find" : "filter"](e, function(e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0;
        });
    }, k.findWhere = function(e, t) {
        return k.where(e, t, !0);
    }, k.max = function(e, t, n) {
        if (!t && k.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
        if (!t && k.isEmpty(e)) return -1/0;
        var r = {
            computed: -1/0,
            value: -1/0
        };
        return T(e, function(e, o, i) {
            var a = t ? t.call(n, e, o, i) : e;
            a > r.computed && (r = {
                value: e,
                computed: a
            });
        }), r.value;
    }, k.min = function(e, t, n) {
        if (!t && k.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
        if (!t && k.isEmpty(e)) return 1/0;
        var r = {
            computed: 1/0,
            value: 1/0
        };
        return T(e, function(e, o, i) {
            var a = t ? t.call(n, e, o, i) : e;
            r.computed > a && (r = {
                value: e,
                computed: a
            });
        }), r.value;
    }, k.shuffle = function(e) {
        var t, n = 0, r = [];
        return T(e, function(e) {
            t = k.random(n++), r[n - 1] = r[t], r[t] = e;
        }), r;
    };
    var N = function(e) {
        return k.isFunction(e) ? e : function(t) {
            return t[e];
        };
    };
    k.sortBy = function(e, t, n) {
        var r = N(t);
        return k.pluck(k.map(e, function(e, t, o) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, o)
            };
        }).sort(function(e, t) {
            var n = e.criteria, r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1;
            }
            return e.index < t.index ? -1 : 1;
        }), "value");
    };
    var S = function(e, t, n, r) {
        var o = {}, i = N(null == t ? k.identity : t);
        return T(e, function(t, a) {
            var s = i.call(n, t, a, e);
            r(o, s, t);
        }), o;
    };
    k.groupBy = function(e, t, n) {
        return S(e, t, n, function(e, t, n) {
            (k.has(e, t) ? e[t] : e[t] = []).push(n);
        });
    }, k.countBy = function(e, t, n) {
        return S(e, t, n, function(e, t) {
            k.has(e, t) || (e[t] = 0), e[t]++;
        });
    }, k.sortedIndex = function(e, t, n, r) {
        n = null == n ? k.identity : N(n);
        for (var o = n.call(r, t), i = 0, a = e.length; a > i; ) {
            var s = i + a >>> 1;
            o > n.call(r, e[s]) ? i = s + 1 : a = s;
        }
        return i;
    }, k.toArray = function(e) {
        return e ? k.isArray(e) ? s.call(e) : e.length === +e.length ? k.map(e, k.identity) : k.values(e) : [];
    }, k.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length : k.keys(e).length;
    }, k.first = k.head = k.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : s.call(e, 0, t);
    }, k.initial = function(e, t, n) {
        return s.call(e, 0, e.length - (null == t || n ? 1 : t));
    }, k.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0));
    }, k.rest = k.tail = k.drop = function(e, t, n) {
        return s.call(e, null == t || n ? 1 : t);
    }, k.compact = function(e) {
        return k.filter(e, k.identity);
    };
    var j = function(e, t, n) {
        return t && k.every(e, k.isArray) ? c.apply(n, e) : (T(e, function(e) {
            k.isArray(e) || k.isArguments(e) ? t ? a.apply(n, e) : j(e, t, n) : n.push(e);
        }), n);
    };
    k.flatten = function(e, t) {
        return j(e, t, []);
    }, k.without = function(e) {
        return k.difference(e, s.call(arguments, 1));
    }, k.uniq = k.unique = function(e, t, n, r) {
        k.isFunction(t) && (r = n, n = t, t = !1);
        var o = n ? k.map(e, n, r) : e, i = [], a = [];
        return T(o, function(n, r) {
            (t ? r && a[a.length - 1] === n : k.contains(a, n)) || (a.push(n), i.push(e[r]));
        }), i;
    }, k.union = function() {
        return k.uniq(k.flatten(arguments, !0));
    }, k.intersection = function(e) {
        var t = s.call(arguments, 1);
        return k.filter(k.uniq(e), function(e) {
            return k.every(t, function(t) {
                return k.indexOf(t, e) >= 0;
            });
        });
    }, k.difference = function(e) {
        var t = c.apply(r, s.call(arguments, 1));
        return k.filter(e, function(e) {
            return !k.contains(t, e);
        });
    }, k.zip = function() {
        for (var e = k.max(k.pluck(arguments, "length").concat(0)), t = Array(e), n = 0; e > n; n++) t[n] = k.pluck(arguments, "" + n);
        return t;
    }, k.object = function(e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, o = e.length; o > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n;
    }, k.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = 0, o = e.length;
        if (n) {
            if ("number" != typeof n) return r = k.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, o + n) : n;
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (;o > r; r++) if (e[r] === t) return r;
        return -1;
    }, k.lastIndexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = null != n;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var o = r ? n : e.length; o--; ) if (e[o] === t) return o;
        return -1;
    }, k.range = function(e, t, n) {
        1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), o = 0, i = Array(r); r > o; ) i[o++] = e, e += n;
        return i;
    };
    var A = function() {};
    k.bind = function(e, t) {
        var n, r;
        if (_ && e.bind === _) return _.apply(e, s.call(arguments, 1));
        if (!k.isFunction(e)) throw new TypeError();
        return n = s.call(arguments, 2), r = function() {
            if (!(this instanceof r)) return e.apply(t, n.concat(s.call(arguments)));
            A.prototype = e.prototype;
            var o = new A();
            A.prototype = null;
            var i = e.apply(o, n.concat(s.call(arguments)));
            return Object(i) === i ? i : o;
        };
    }, k.partial = function(e) {
        var t = s.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(s.call(arguments)));
        };
    }, k.bindAll = function(e) {
        var t = s.call(arguments, 1);
        if (0 === t.length) throw Error("bindAll must be passed function names");
        return T(t, function(t) {
            e[t] = k.bind(e[t], e);
        }), e;
    }, k.memoize = function(e, t) {
        var n = {};
        return t || (t = k.identity), function() {
            var r = t.apply(this, arguments);
            return k.has(n, r) ? n[r] : n[r] = e.apply(this, arguments);
        };
    }, k.delay = function(e, t) {
        var n = s.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n);
        }, t);
    }, k.defer = function(e) {
        return k.delay.apply(k, [ e, 1 ].concat(s.call(arguments, 1)));
    }, k.throttle = function(e, t, n) {
        var r, o, i, a = null, s = 0;
        n || (n = {});
        var c = function() {
            s = n.leading === !1 ? 0 : new Date(), a = null, i = e.apply(r, o);
        };
        return function() {
            var u = new Date();
            s || n.leading !== !1 || (s = u);
            var l = t - (u - s);
            return r = this, o = arguments, 0 >= l ? (clearTimeout(a), a = null, s = u, i = e.apply(r, o)) : a || n.trailing === !1 || (a = setTimeout(c, l)), 
            i;
        };
    }, k.debounce = function(e, t, n) {
        var r, o = null;
        return function() {
            var i = this, a = arguments, s = function() {
                o = null, n || (r = e.apply(i, a));
            }, c = n && !o;
            return clearTimeout(o), o = setTimeout(s, t), c && (r = e.apply(i, a)), r;
        };
    }, k.once = function(e) {
        var t, n = !1;
        return function() {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t);
        };
    }, k.wrap = function(e, t) {
        return function() {
            var n = [ e ];
            return a.apply(n, arguments), t.apply(this, n);
        };
    }, k.compose = function() {
        var e = arguments;
        return function() {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [ e[n].apply(this, t) ];
            return t[0];
        };
    }, k.after = function(e, t) {
        return function() {
            return 1 > --e ? t.apply(this, arguments) : void 0;
        };
    }, k.keys = w || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) k.has(e, n) && t.push(n);
        return t;
    }, k.values = function(e) {
        var t = [];
        for (var n in e) k.has(e, n) && t.push(e[n]);
        return t;
    }, k.pairs = function(e) {
        var t = [];
        for (var n in e) k.has(e, n) && t.push([ n, e[n] ]);
        return t;
    }, k.invert = function(e) {
        var t = {};
        for (var n in e) k.has(e, n) && (t[e[n]] = n);
        return t;
    }, k.functions = k.methods = function(e) {
        var t = [];
        for (var n in e) k.isFunction(e[n]) && t.push(n);
        return t.sort();
    }, k.extend = function(e) {
        return T(s.call(arguments, 1), function(t) {
            if (t) for (var n in t) e[n] = t[n];
        }), e;
    }, k.pick = function(e) {
        var t = {}, n = c.apply(r, s.call(arguments, 1));
        return T(n, function(n) {
            n in e && (t[n] = e[n]);
        }), t;
    }, k.omit = function(e) {
        var t = {}, n = c.apply(r, s.call(arguments, 1));
        for (var o in e) k.contains(n, o) || (t[o] = e[o]);
        return t;
    }, k.defaults = function(e) {
        return T(s.call(arguments, 1), function(t) {
            if (t) for (var n in t) void 0 === e[n] && (e[n] = t[n]);
        }), e;
    }, k.clone = function(e) {
        return k.isObject(e) ? k.isArray(e) ? e.slice() : k.extend({}, e) : e;
    }, k.tap = function(e, t) {
        return t(e), e;
    };
    var D = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof k && (e = e._wrapped), t instanceof k && (t = t._wrapped);
        var o = u.call(e);
        if (o != u.call(t)) return !1;
        switch (o) {
          case "[object String]":
            return e == t + "";

          case "[object Number]":
            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;

          case "[object Date]":
          case "[object Boolean]":
            return +e == +t;

          case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase;
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var i = n.length; i--; ) if (n[i] == e) return r[i] == t;
        var a = e.constructor, s = t.constructor;
        if (a !== s && !(k.isFunction(a) && a instanceof a && k.isFunction(s) && s instanceof s)) return !1;
        n.push(e), r.push(t);
        var c = 0, l = !0;
        if ("[object Array]" == o) {
            if (c = e.length, l = c == t.length) for (;c-- && (l = D(e[c], t[c], n, r)); ) ;
        } else {
            for (var p in e) if (k.has(e, p) && (c++, !(l = k.has(t, p) && D(e[p], t[p], n, r)))) break;
            if (l) {
                for (p in t) if (k.has(t, p) && !c--) break;
                l = !c;
            }
        }
        return n.pop(), r.pop(), l;
    };
    k.isEqual = function(e, t) {
        return D(e, t, [], []);
    }, k.isEmpty = function(e) {
        if (null == e) return !0;
        if (k.isArray(e) || k.isString(e)) return 0 === e.length;
        for (var t in e) if (k.has(e, t)) return !1;
        return !0;
    }, k.isElement = function(e) {
        return !(!e || 1 !== e.nodeType);
    }, k.isArray = x || function(e) {
        return "[object Array]" == u.call(e);
    }, k.isObject = function(e) {
        return e === Object(e);
    }, T([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(e) {
        k["is" + e] = function(t) {
            return u.call(t) == "[object " + e + "]";
        };
    }), k.isArguments(arguments) || (k.isArguments = function(e) {
        return !(!e || !k.has(e, "callee"));
    }), k.isFunction = function(e) {
        return "function" == typeof e;
    }, k.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e));
    }, k.isNaN = function(e) {
        return k.isNumber(e) && e != +e;
    }, k.isBoolean = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" == u.call(e);
    }, k.isNull = function(e) {
        return null === e;
    }, k.isUndefined = function(e) {
        return void 0 === e;
    }, k.has = function(e, t) {
        return l.call(e, t);
    }, k.noConflict = function() {
        return e._ = t, this;
    }, k.identity = function(e) {
        return e;
    }, k.times = function(e, t, n) {
        for (var r = Array(Math.max(0, e)), o = 0; e > o; o++) r[o] = t.call(n, o);
        return r;
    }, k.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
    };
    var O = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    O.unescape = k.invert(O.escape);
    var L = {
        escape: RegExp("[" + k.keys(O.escape).join("") + "]", "g"),
        unescape: RegExp("(" + k.keys(O.unescape).join("|") + ")", "g")
    };
    k.each([ "escape", "unescape" ], function(e) {
        k[e] = function(t) {
            return null == t ? "" : ("" + t).replace(L[e], function(t) {
                return O[e][t];
            });
        };
    }), k.result = function(e, t) {
        if (null == e) return void 0;
        var n = e[t];
        return k.isFunction(n) ? n.call(e) : n;
    }, k.mixin = function(e) {
        T(k.functions(e), function(t) {
            var n = k[t] = e[t];
            k.prototype[t] = function() {
                var e = [ this._wrapped ];
                return a.apply(e, arguments), F.call(this, n.apply(k, e));
            };
        });
    };
    var M = 0;
    k.uniqueId = function(e) {
        var t = ++M + "";
        return e ? e + t : t;
    }, k.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var P = /(.)^/, R = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, H = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    k.template = function(e, t, n) {
        var r;
        n = k.defaults({}, n, k.templateSettings);
        var o = RegExp([ (n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source ].join("|") + "|$", "g"), i = 0, a = "__p+='";
        e.replace(o, function(t, n, r, o, s) {
            return a += e.slice(i, s).replace(H, function(e) {
                return "\\" + R[e];
            }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), 
            o && (a += "';\n" + o + "\n__p+='"), i = s + t.length, t;
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            r = Function(n.variable || "obj", "_", a);
        } catch (s) {
            throw s.source = a, s;
        }
        if (t) return r(t, k);
        var c = function(e) {
            return r.call(this, e, k);
        };
        return c.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", c;
    }, k.chain = function(e) {
        return k(e).chain();
    };
    var F = function(e) {
        return this._chain ? k(e).chain() : e;
    };
    k.mixin(k), T([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
        var t = r[e];
        k.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], F.call(this, n);
        };
    }), T([ "concat", "join", "slice" ], function(e) {
        var t = r[e];
        k.prototype[e] = function() {
            return F.call(this, t.apply(this._wrapped, arguments));
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
    var e, t = this, n = t.Backbone, r = [], o = r.push, i = r.slice, a = r.splice;
    e = "undefined" != typeof exports ? exports : t.Backbone = {}, e.VERSION = "1.0.0";
    var s = t._;
    s || "undefined" == typeof require || (s = require("underscore")), e.$ = t.jQuery || t.Zepto || t.ender || t.$, 
    e.noConflict = function() {
        return t.Backbone = n, this;
    }, e.emulateHTTP = !1, e.emulateJSON = !1;
    var c = e.Events = {
        on: function(e, t, n) {
            if (!l(this, "on", e, [ t, n ]) || !t) return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({
                callback: t,
                context: n,
                ctx: n || this
            }), this;
        },
        once: function(e, t, n) {
            if (!l(this, "once", e, [ t, n ]) || !t) return this;
            var r = this, o = s.once(function() {
                r.off(e, o), t.apply(this, arguments);
            });
            return o._callback = t, this.on(e, o, n);
        },
        off: function(e, t, n) {
            var r, o, i, a, c, u, p, f;
            if (!this._events || !l(this, "off", e, [ t, n ])) return this;
            if (!e && !t && !n) return this._events = {}, this;
            for (a = e ? [ e ] : s.keys(this._events), c = 0, u = a.length; u > c; c++) if (e = a[c], i = this._events[e]) {
                if (this._events[e] = r = [], t || n) for (p = 0, f = i.length; f > p; p++) o = i[p], (t && t !== o.callback && t !== o.callback._callback || n && n !== o.context) && r.push(o);
                r.length || delete this._events[e];
            }
            return this;
        },
        trigger: function(e) {
            if (!this._events) return this;
            var t = i.call(arguments, 1);
            if (!l(this, "trigger", e, t)) return this;
            var n = this._events[e], r = this._events.all;
            return n && p(n, t), r && p(r, arguments), this;
        },
        stopListening: function(e, t, n) {
            var r = this._listeners;
            if (!r) return this;
            var o = !t && !n;
            "object" == typeof t && (n = this), e && ((r = {})[e._listenerId] = e);
            for (var i in r) r[i].off(t, n, this), o && delete this._listeners[i];
            return this;
        }
    }, u = /\s+/, l = function(e, t, n, r) {
        if (!n) return !0;
        if ("object" == typeof n) {
            for (var o in n) e[t].apply(e, [ o, n[o] ].concat(r));
            return !1;
        }
        if (u.test(n)) {
            for (var i = n.split(u), a = 0, s = i.length; s > a; a++) e[t].apply(e, [ i[a] ].concat(r));
            return !1;
        }
        return !0;
    }, p = function(e, t) {
        var n, r = -1, o = e.length, i = t[0], a = t[1], s = t[2];
        switch (t.length) {
          case 0:
            for (;o > ++r; ) (n = e[r]).callback.call(n.ctx);
            return;

          case 1:
            for (;o > ++r; ) (n = e[r]).callback.call(n.ctx, i);
            return;

          case 2:
            for (;o > ++r; ) (n = e[r]).callback.call(n.ctx, i, a);
            return;

          case 3:
            for (;o > ++r; ) (n = e[r]).callback.call(n.ctx, i, a, s);
            return;

          default:
            for (;o > ++r; ) (n = e[r]).callback.apply(n.ctx, t);
        }
    }, f = {
        listenTo: "on",
        listenToOnce: "once"
    };
    s.each(f, function(e, t) {
        c[t] = function(t, n, r) {
            var o = this._listeners || (this._listeners = {}), i = t._listenerId || (t._listenerId = s.uniqueId("l"));
            return o[i] = t, "object" == typeof n && (r = this), t[e](n, r, this), this;
        };
    }), c.bind = c.on, c.unbind = c.off, s.extend(e, c);
    var h = e.Model = function(e, t) {
        var n, r = e || {};
        t || (t = {}), this.cid = s.uniqueId("c"), this.attributes = {}, s.extend(this, s.pick(t, g)), t.parse && (r = this.parse(r, t) || {}), 
        (n = s.result(this, "defaults")) && (r = s.defaults({}, r, n)), this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments);
    }, g = [ "url", "urlRoot", "collection" ];
    s.extend(h.prototype, c, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return s.clone(this.attributes);
        },
        sync: function() {
            return e.sync.apply(this, arguments);
        },
        get: function(e) {
            return this.attributes[e];
        },
        escape: function(e) {
            return s.escape(this.get(e));
        },
        has: function(e) {
            return null != this.get(e);
        },
        set: function(e, t, n) {
            var r, o, i, a, c, u, l, p;
            if (null == e) return this;
            if ("object" == typeof e ? (o = e, n = t) : (o = {})[e] = t, n || (n = {}), !this._validate(o, n)) return !1;
            i = n.unset, c = n.silent, a = [], u = this._changing, this._changing = !0, u || (this._previousAttributes = s.clone(this.attributes), 
            this.changed = {}), p = this.attributes, l = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
            for (r in o) t = o[r], s.isEqual(p[r], t) || a.push(r), s.isEqual(l[r], t) ? delete this.changed[r] : this.changed[r] = t, 
            i ? delete p[r] : p[r] = t;
            if (!c) {
                a.length && (this._pending = !0);
                for (var f = 0, h = a.length; h > f; f++) this.trigger("change:" + a[f], this, p[a[f]], n);
            }
            if (u) return this;
            if (!c) for (;this._pending; ) this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1, this._changing = !1, this;
        },
        unset: function(e, t) {
            return this.set(e, void 0, s.extend({}, t, {
                unset: !0
            }));
        },
        clear: function(e) {
            var t = {};
            for (var n in this.attributes) t[n] = void 0;
            return this.set(t, s.extend({}, e, {
                unset: !0
            }));
        },
        hasChanged: function(e) {
            return null == e ? !s.isEmpty(this.changed) : s.has(this.changed, e);
        },
        changedAttributes: function(e) {
            if (!e) return this.hasChanged() ? s.clone(this.changed) : !1;
            var t, n = !1, r = this._changing ? this._previousAttributes : this.attributes;
            for (var o in e) s.isEqual(r[o], t = e[o]) || ((n || (n = {}))[o] = t);
            return n;
        },
        previous: function(e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null;
        },
        previousAttributes: function() {
            return s.clone(this._previousAttributes);
        },
        fetch: function(e) {
            e = e ? s.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = this, n = e.success;
            return e.success = function(r) {
                return t.set(t.parse(r, e), e) ? (n && n(t, r, e), t.trigger("sync", t, r, e), void 0) : !1;
            }, H(this, e), this.sync("read", this, e);
        },
        save: function(e, t, n) {
            var r, o, i, a = this.attributes;
            if (null == e || "object" == typeof e ? (r = e, n = t) : (r = {})[e] = t, !(!r || n && n.wait || this.set(r, n))) return !1;
            if (n = s.extend({
                validate: !0
            }, n), !this._validate(r, n)) return !1;
            r && n.wait && (this.attributes = s.extend({}, a, r)), void 0 === n.parse && (n.parse = !0);
            var c = this, u = n.success;
            return n.success = function(e) {
                c.attributes = a;
                var t = c.parse(e, n);
                return n.wait && (t = s.extend(r || {}, t)), s.isObject(t) && !c.set(t, n) ? !1 : (u && u(c, e, n), 
                c.trigger("sync", c, e, n), void 0);
            }, H(this, n), o = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === o && (n.attrs = r), 
            i = this.sync(o, this, n), r && n.wait && (this.attributes = a), i;
        },
        destroy: function(e) {
            e = e ? s.clone(e) : {};
            var t = this, n = e.success, r = function() {
                t.trigger("destroy", t, t.collection, e);
            };
            if (e.success = function(o) {
                (e.wait || t.isNew()) && r(), n && n(t, o, e), t.isNew() || t.trigger("sync", t, o, e);
            }, this.isNew()) return e.success(), !1;
            H(this, e);
            var o = this.sync("delete", this, e);
            return e.wait || r(), o;
        },
        url: function() {
            var e = s.result(this, "urlRoot") || s.result(this.collection, "url") || R();
            return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id);
        },
        parse: function(e) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return null == this.id;
        },
        isValid: function(e) {
            return this._validate({}, s.extend(e || {}, {
                validate: !0
            }));
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate) return !0;
            e = s.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, s.extend(t || {}, {
                validationError: n
            })), !1) : !0;
        }
    });
    var d = [ "keys", "values", "pairs", "invert", "pick", "omit" ];
    s.each(d, function(e) {
        h.prototype[e] = function() {
            var t = i.call(arguments);
            return t.unshift(this.attributes), s[e].apply(s, t);
        };
    });
    var m = e.Collection = function(e, t) {
        t || (t = {}), t.url && (this.url = t.url), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), 
        this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, s.extend({
            silent: !0
        }, t));
    }, v = {
        add: !0,
        remove: !0,
        merge: !0
    }, y = {
        add: !0,
        merge: !1,
        remove: !1
    };
    s.extend(m.prototype, c, {
        model: h,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e);
            });
        },
        sync: function() {
            return e.sync.apply(this, arguments);
        },
        add: function(e, t) {
            return this.set(e, s.defaults(t || {}, y));
        },
        remove: function(e, t) {
            e = s.isArray(e) ? e.slice() : [ e ], t || (t = {});
            var n, r, o, i;
            for (n = 0, r = e.length; r > n; n++) i = this.get(e[n]), i && (delete this._byId[i.id], delete this._byId[i.cid], 
            o = this.indexOf(i), this.models.splice(o, 1), this.length--, t.silent || (t.index = o, i.trigger("remove", i, this, t)), 
            this._removeReference(i));
            return this;
        },
        set: function(e, t) {
            t = s.defaults(t || {}, v), t.parse && (e = this.parse(e, t)), s.isArray(e) || (e = e ? [ e ] : []);
            var n, r, i, c, u, l = t.at, p = this.comparator && null == l && t.sort !== !1, f = s.isString(this.comparator) ? this.comparator : null, h = [], g = [], d = {};
            for (n = 0, r = e.length; r > n; n++) (i = this._prepareModel(e[n], t)) && ((c = this.get(i)) ? (t.remove && (d[c.cid] = !0), 
            t.merge && (c.set(i.attributes, t), p && !u && c.hasChanged(f) && (u = !0))) : t.add && (h.push(i), 
            i.on("all", this._onModelEvent, this), this._byId[i.cid] = i, null != i.id && (this._byId[i.id] = i)));
            if (t.remove) {
                for (n = 0, r = this.length; r > n; ++n) d[(i = this.models[n]).cid] || g.push(i);
                g.length && this.remove(g, t);
            }
            if (h.length && (p && (u = !0), this.length += h.length, null != l ? a.apply(this.models, [ l, 0 ].concat(h)) : o.apply(this.models, h)), 
            u && this.sort({
                silent: !0
            }), t.silent) return this;
            for (n = 0, r = h.length; r > n; n++) (i = h[n]).trigger("add", i, this, t);
            return u && this.trigger("sort", this, t), this;
        },
        reset: function(e, t) {
            t || (t = {});
            for (var n = 0, r = this.models.length; r > n; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models, this._reset(), this.add(e, s.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this;
        },
        push: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, s.extend({
                at: this.length
            }, t)), e;
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t;
        },
        unshift: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, s.extend({
                at: 0
            }, t)), e;
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e), t;
        },
        slice: function(e, t) {
            return this.models.slice(e, t);
        },
        get: function(e) {
            return null == e ? void 0 : this._byId[null != e.id ? e.id : e.cid || e];
        },
        at: function(e) {
            return this.models[e];
        },
        where: function(e, t) {
            return s.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                for (var n in e) if (e[n] !== t.get(n)) return !1;
                return !0;
            });
        },
        findWhere: function(e) {
            return this.where(e, !0);
        },
        sort: function(e) {
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            return e || (e = {}), s.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(s.bind(this.comparator, this)), 
            e.silent || this.trigger("sort", this, e), this;
        },
        sortedIndex: function(e, t, n) {
            t || (t = this.comparator);
            var r = s.isFunction(t) ? t : function(e) {
                return e.get(t);
            };
            return s.sortedIndex(this.models, e, r, n);
        },
        pluck: function(e) {
            return s.invoke(this.models, "get", e);
        },
        fetch: function(e) {
            e = e ? s.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = e.success, n = this;
            return e.success = function(r) {
                var o = e.reset ? "reset" : "set";
                n[o](r, e), t && t(n, r, e), n.trigger("sync", n, r, e);
            }, H(this, e), this.sync("read", this, e);
        },
        create: function(e, t) {
            if (t = t ? s.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
            t.wait || this.add(e, t);
            var n = this, r = t.success;
            return t.success = function(o) {
                t.wait && n.add(e, t), r && r(e, o, t);
            }, e.save(null, t), e;
        },
        parse: function(e) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.models);
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {};
        },
        _prepareModel: function(e, t) {
            if (e instanceof h) return e.collection || (e.collection = this), e;
            t || (t = {}), t.collection = this;
            var n = new this.model(e, t);
            return n._validate(e, t) ? n : (this.trigger("invalid", this, e, t), !1);
        },
        _removeReference: function(e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(e, t, n, r) {
            ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], 
            null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments));
        }
    });
    var b = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain" ];
    s.each(b, function(e) {
        m.prototype[e] = function() {
            var t = i.call(arguments);
            return t.unshift(this.models), s[e].apply(s, t);
        };
    });
    var x = [ "groupBy", "countBy", "sortBy" ];
    s.each(x, function(e) {
        m.prototype[e] = function(t, n) {
            var r = s.isFunction(t) ? t : function(e) {
                return e.get(t);
            };
            return s[e](this.models, r, n);
        };
    });
    var w = e.View = function(e) {
        this.cid = s.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), 
        this.delegateEvents();
    }, _ = /^(\S+)\s*(.*)$/, k = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
    s.extend(w.prototype, c, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this;
        },
        setElement: function(t, n) {
            return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], 
            n !== !1 && this.delegateEvents(), this;
        },
        delegateEvents: function(e) {
            if (!e && !(e = s.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                if (s.isFunction(n) || (n = this[e[t]]), n) {
                    var r = t.match(_), o = r[1], i = r[2];
                    n = s.bind(n, this), o += ".delegateEvents" + this.cid, "" === i ? this.$el.on(o, n) : this.$el.on(o, i, n);
                }
            }
            return this;
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this;
        },
        _configure: function(e) {
            this.options && (e = s.extend({}, s.result(this, "options"), e)), s.extend(this, s.pick(e, k)), this.options = e;
        },
        _ensureElement: function() {
            if (this.el) this.setElement(s.result(this, "el"), !1); else {
                var t = s.extend({}, s.result(this, "attributes"));
                this.id && (t.id = s.result(this, "id")), this.className && (t["class"] = s.result(this, "className"));
                var n = e.$("<" + s.result(this, "tagName") + ">").attr(t);
                this.setElement(n, !1);
            }
        }
    }), e.sync = function(t, n, r) {
        var o = T[t];
        s.defaults(r || (r = {}), {
            emulateHTTP: e.emulateHTTP,
            emulateJSON: e.emulateJSON
        });
        var i = {
            type: o,
            dataType: "json"
        };
        if (r.url || (i.url = s.result(n, "url") || R()), null != r.data || !n || "create" !== t && "update" !== t && "patch" !== t || (i.contentType = "application/json", 
        i.data = JSON.stringify(r.attrs || n.toJSON(r))), r.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", 
        i.data = i.data ? {
            model: i.data
        } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
            i.type = "POST", r.emulateJSON && (i.data._method = o);
            var a = r.beforeSend;
            r.beforeSend = function(e) {
                return e.setRequestHeader("X-HTTP-Method-Override", o), a ? a.apply(this, arguments) : void 0;
            };
        }
        "GET" === i.type || r.emulateJSON || (i.processData = !1), "PATCH" !== i.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (i.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP");
        });
        var c = r.xhr = e.ajax(s.extend(i, r));
        return n.trigger("request", n, c, r), c;
    };
    var T = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    e.ajax = function() {
        return e.$.ajax.apply(e.$, arguments);
    };
    var E = e.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, C = /\((.*?)\)/g, N = /(\(\?)?:\w+/g, S = /\*\w+/g, j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    s.extend(E.prototype, c, {
        initialize: function() {},
        route: function(t, n, r) {
            s.isRegExp(t) || (t = this._routeToRegExp(t)), s.isFunction(n) && (r = n, n = ""), r || (r = this[n]);
            var o = this;
            return e.history.route(t, function(i) {
                var a = o._extractParameters(t, i);
                r && r.apply(o, a), o.trigger.apply(o, [ "route:" + n ].concat(a)), o.trigger("route", n, a), e.history.trigger("route", o, n, a);
            }), this;
        },
        navigate: function(t, n) {
            return e.history.navigate(t, n), this;
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = s.result(this, "routes");
                for (var e, t = s.keys(this.routes); null != (e = t.pop()); ) this.route(e, this.routes[e]);
            }
        },
        _routeToRegExp: function(e) {
            return e = e.replace(j, "\\$&").replace(C, "(?:$1)?").replace(N, function(e, t) {
                return t ? e : "([^/]+)";
            }).replace(S, "(.*?)"), RegExp("^" + e + "$");
        },
        _extractParameters: function(e, t) {
            var n = e.exec(t).slice(1);
            return s.map(n, function(e) {
                return e ? decodeURIComponent(e) : null;
            });
        }
    });
    var A = e.History = function() {
        this.handlers = [], s.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, 
        this.history = window.history);
    }, D = /^[#\/]|\s+$/g, O = /^\/+|\/+$/g, L = /msie [\w.]+/, M = /\/$/;
    A.started = !1, s.extend(A.prototype, c, {
        interval: 50,
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : "";
        },
        getFragment: function(e, t) {
            if (null == e) if (this._hasPushState || !this._wantsHashChange || t) {
                e = this.location.pathname;
                var n = this.root.replace(M, "");
                e.indexOf(n) || (e = e.substr(n.length));
            } else e = this.getHash();
            return e.replace(D, "");
        },
        start: function(t) {
            if (A.started) throw Error("Backbone.history has already been started");
            A.started = !0, this.options = s.extend({}, {
                root: "/"
            }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, 
            this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var n = this.getFragment(), r = document.documentMode, o = L.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
            this.root = ("/" + this.root + "/").replace(O, "/"), o && this._wantsHashChange && (this.iframe = e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, 
            this.navigate(n)), this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), 
            this.fragment = n;
            var i = this.location, a = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !a ? (this.fragment = this.getFragment(null, !0), 
            this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && a && i.hash && (this.fragment = this.getHash().replace(D, ""), 
            this.history.replaceState({}, document.title, this.root + this.fragment + i.search)), this.options.silent ? void 0 : this.loadUrl());
        },
        stop: function() {
            e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), 
            A.started = !1;
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            });
        },
        checkUrl: function() {
            var e = this.getFragment();
            return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), 
            this.loadUrl() || this.loadUrl(this.getHash()), void 0);
        },
        loadUrl: function(e) {
            var t = this.fragment = this.getFragment(e), n = s.any(this.handlers, function(e) {
                return e.route.test(t) ? (e.callback(t), !0) : void 0;
            });
            return n;
        },
        navigate: function(e, t) {
            if (!A.started) return !1;
            if (t && t !== !0 || (t = {
                trigger: t
            }), e = this.getFragment(e || ""), this.fragment !== e) {
                this.fragment = e;
                var n = this.root + e;
                if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n); else {
                    if (!this._wantsHashChange) return this.location.assign(n);
                    this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), 
                    this._updateHash(this.iframe.location, e, t.replace));
                }
                t.trigger && this.loadUrl(e);
            }
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t);
            } else e.hash = "#" + t;
        }
    }), e.history = new A();
    var P = function(e, t) {
        var n, r = this;
        n = e && s.has(e, "constructor") ? e.constructor : function() {
            return r.apply(this, arguments);
        }, s.extend(n, r, t);
        var o = function() {
            this.constructor = n;
        };
        return o.prototype = r.prototype, n.prototype = new o(), e && s.extend(n.prototype, e), n.__super__ = r.prototype, 
        n;
    };
    h.extend = m.extend = E.extend = w.extend = A.extend = P;
    var R = function() {
        throw Error('A "url" property or function must be specified');
    }, H = function(e, t) {
        var n = t.error;
        t.error = function(r) {
            n && n(e, r, t), e.trigger("error", e, r, t);
        };
    };
}.call(this), /*!
 * Modernizr v2.6.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = function(e, t, n) {
    function r(e) {
        b.cssText = e;
    }
    function o(e, t) {
        return r(k.join(e + ";") + (t || ""));
    }
    function i(e, t) {
        return typeof e === t;
    }
    function a(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function s(e, t) {
        for (var r in e) {
            var o = e[r];
            if (!a(o, "-") && b[o] !== n) return "pfx" == t ? o : !0;
        }
        return !1;
    }
    function c(e, t, r) {
        for (var o in e) {
            var a = t[e[o]];
            if (a !== n) return r === !1 ? e[o] : i(a, "function") ? a.bind(r || t) : a;
        }
        return !1;
    }
    function u(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), o = (e + " " + E.join(r + " ") + r).split(" ");
        return i(t, "string") || i(t, "undefined") ? s(o, t) : (o = (e + " " + C.join(r + " ") + r).split(" "), 
        c(o, t, n));
    }
    function l() {
        g.input = function(n) {
            for (var r = 0, o = n.length; o > r; r++) A[n[r]] = !!(n[r] in x);
            return A.list && (A.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), A;
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), g.inputtypes = function(e) {
            for (var r, o, i, a = 0, s = e.length; s > a; a++) x.setAttribute("type", o = e[a]), r = "text" !== x.type, 
            r && (x.value = w, x.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && x.style.WebkitAppearance !== n ? (m.appendChild(x), 
            i = t.defaultView, r = i.getComputedStyle && "textfield" !== i.getComputedStyle(x, null).WebkitAppearance && 0 !== x.offsetHeight, 
            m.removeChild(x)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? x.checkValidity && x.checkValidity() === !1 : x.value != w)), 
            j[e[a]] = !!r;
            return j;
        }("search tel url email datetime date month week time datetime-local number range color".split(" "));
    }
    var p, f, h = "2.6.2", g = {}, d = !0, m = t.documentElement, v = "modernizr", y = t.createElement(v), b = y.style, x = t.createElement("input"), w = ":)", _ = {}.toString, k = " -webkit- -moz- -o- -ms- ".split(" "), T = "Webkit Moz O ms", E = T.split(" "), C = T.toLowerCase().split(" "), N = {
        svg: "http://www.w3.org/2000/svg"
    }, S = {}, j = {}, A = {}, D = [], O = D.slice, L = function(e, n, r, o) {
        var i, a, s, c, u = t.createElement("div"), l = t.body, p = l || t.createElement("body");
        if (parseInt(r, 10)) for (;r--; ) s = t.createElement("div"), s.id = o ? o[r] : v + (r + 1), u.appendChild(s);
        return i = [ "&#173;", '<style id="s', v, '">', e, "</style>" ].join(""), u.id = v, (l ? u : p).innerHTML += i, 
        p.appendChild(u), l || (p.style.background = "", p.style.overflow = "hidden", c = m.style.overflow, 
        m.style.overflow = "hidden", m.appendChild(p)), a = n(u, e), l ? u.parentNode.removeChild(u) : (p.parentNode.removeChild(p), 
        m.style.overflow = c), !!a;
    }, M = function(t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n) return n(t).matches;
        var r;
        return L("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
            r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position;
        }), r;
    }, P = function() {
        function e(e, o) {
            o = o || t.createElement(r[e] || "div"), e = "on" + e;
            var a = e in o;
            return a || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), 
            a = i(o[e], "function"), i(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, a;
        }
        var r = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e;
    }(), R = {}.hasOwnProperty;
    f = i(R, "undefined") || i(R.call, "undefined") ? function(e, t) {
        return t in e && i(e.constructor.prototype[t], "undefined");
    } : function(e, t) {
        return R.call(e, t);
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError();
        var n = O.call(arguments, 1), r = function() {
            if (this instanceof r) {
                var o = function() {};
                o.prototype = t.prototype;
                var i = new o(), a = t.apply(i, n.concat(O.call(arguments)));
                return Object(a) === a ? a : i;
            }
            return t.apply(e, n.concat(O.call(arguments)));
        };
        return r;
    }), S.flexbox = function() {
        return u("flexWrap");
    }, S.flexboxlegacy = function() {
        return u("boxDirection");
    }, S.canvas = function() {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"));
    }, S.canvastext = function() {
        return !(!g.canvas || !i(t.createElement("canvas").getContext("2d").fillText, "function"));
    }, S.webgl = function() {
        return !!e.WebGLRenderingContext;
    }, S.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : L([ "@media (", k.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(e) {
            n = 9 === e.offsetTop;
        }), n;
    }, S.geolocation = function() {
        return "geolocation" in navigator;
    }, S.postmessage = function() {
        return !!e.postMessage;
    }, S.websqldatabase = function() {
        return !!e.openDatabase;
    }, S.indexedDB = function() {
        return !!u("indexedDB", e);
    }, S.hashchange = function() {
        return P("hashchange", e) && (t.documentMode === n || t.documentMode > 7);
    }, S.history = function() {
        return !(!e.history || !history.pushState);
    }, S.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e;
    }, S.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e;
    }, S.rgba = function() {
        return r("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba");
    }, S.hsla = function() {
        return r("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla");
    }, S.multiplebgs = function() {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background);
    }, S.backgroundsize = function() {
        return u("backgroundSize");
    }, S.borderimage = function() {
        return u("borderImage");
    }, S.borderradius = function() {
        return u("borderRadius");
    }, S.boxshadow = function() {
        return u("boxShadow");
    }, S.textshadow = function() {
        return "" === t.createElement("div").style.textShadow;
    }, S.opacity = function() {
        return o("opacity:.55"), /^0.55$/.test(b.opacity);
    }, S.cssanimations = function() {
        return u("animationName");
    }, S.csscolumns = function() {
        return u("columnCount");
    }, S.cssgradients = function() {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + k.join(n + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient");
    }, S.cssreflections = function() {
        return u("boxReflect");
    }, S.csstransforms = function() {
        return !!u("transform");
    }, S.csstransforms3d = function() {
        var e = !!u("perspective");
        return e && "webkitPerspective" in m.style && L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight;
        }), e;
    }, S.csstransitions = function() {
        return u("transition");
    }, S.fontface = function() {
        var e;
        return L('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
            var o = t.getElementById("smodernizr"), i = o.sheet || o.styleSheet, a = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0]);
        }), e;
    }, S.generatedcontent = function() {
        var e;
        return L([ "#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}' ].join(""), function(t) {
            e = t.offsetHeight >= 3;
        }), e;
    }, S.video = function() {
        var e = t.createElement("video"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), 
            n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
        } catch (r) {}
        return n;
    }, S.audio = function() {
        var e = t.createElement("audio"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), 
            n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), 
            n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""));
        } catch (r) {}
        return n;
    }, S.localstorage = function() {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0;
        } catch (e) {
            return !1;
        }
    }, S.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0;
        } catch (e) {
            return !1;
        }
    }, S.webworkers = function() {
        return !!e.Worker;
    }, S.applicationcache = function() {
        return !!e.applicationCache;
    }, S.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect;
    }, S.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg;
    }, S.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(_.call(t.createElementNS(N.svg, "animate")));
    }, S.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(_.call(t.createElementNS(N.svg, "clipPath")));
    };
    for (var H in S) f(S, H) && (p = H.toLowerCase(), g[p] = S[H](), D.push((g[p] ? "" : "no-") + p));
    return g.input || l(), g.addTest = function(e, t) {
        if ("object" == typeof e) for (var r in e) f(e, r) && g.addTest(r, e[r]); else {
            if (e = e.toLowerCase(), g[e] !== n) return g;
            t = "function" == typeof t ? t() : t, d !== n && d && (m.className += " " + (t ? "" : "no-") + e), g[e] = t;
        }
        return g;
    }, r(""), y = x = null, function(e, t) {
        function r(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild);
        }
        function o() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e;
        }
        function i(e) {
            var t = v[e[d]];
            return t || (t = {}, m++, e[d] = m, v[m] = t), t;
        }
        function a(e, n, r) {
            if (n || (n = t), p) return n.createElement(e);
            r || (r = i(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : g.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), 
            o.canHaveChildren && !h.test(e) ? r.frag.appendChild(o) : o;
        }
        function s(e, n) {
            if (e || (e = t), p) return e.createDocumentFragment();
            n = n || i(e);
            for (var r = n.frag.cloneNode(), a = 0, s = o(), c = s.length; c > a; a++) r.createElement(s[a]);
            return r;
        }
        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), 
            e.createElement = function(n) {
                return y.shivMethods ? a(n, e, t) : t.createElem(n);
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + o().join().replace(/\w+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
            }) + ");return n}")(y, t.frag);
        }
        function u(e) {
            e || (e = t);
            var n = i(e);
            return !y.shivCSS || l || n.hasCSS || (n.hasCSS = !!r(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), 
            p || c(e, n), e;
        }
        var l, p, f = e.html5 || {}, h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, g = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, d = "_html5shiv", m = 0, v = {};
        (function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", l = "hidden" in e, p = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return e.cloneNode === n || e.createDocumentFragment === n || e.createElement === n;
                }();
            } catch (r) {
                l = !0, p = !0;
            }
        })();
        var y = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: p,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: u,
            createElement: a,
            createDocumentFragment: s
        };
        e.html5 = y, u(t);
    }(this, t), g._version = h, g._prefixes = k, g._domPrefixes = C, g._cssomPrefixes = E, g.mq = M, g.hasEvent = P, 
    g.testProp = function(e) {
        return s([ e ]);
    }, g.testAllProps = u, g.testStyles = L, g.prefixed = function(e, t, n) {
        return t ? u(e, t, n) : u(e, "pfx");
    }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (d ? " js " + D.join(" ") : ""), 
    g;
}(this, this.document), "undefined" == typeof RM && (RM = {}), function(e) {
    e.constants = {
        UPLOAD_IMAGE_SIZE_LIMIT: 6291456,
        MSG_UPLOAD_IMAGE_SIZE_ERROR: "File size should be less than 6 Mb.",
        MSG_UPLOAD_IMAGE_SUPPORTED_ERROR: "We support only JPG, GIF, PNG, and BMP picture formats.",
        MSG_UPLOAD_ONLY_SINGLE_FILE: "We support only 1 file upload via drop on workspace",
        THUMB_SIZE: 48,
        BG_EFFECT_THUMBSIZE: 40,
        UPLOAD_IMAGE_FORMATS: "jpeg|jpg|png|gif|bmp",
        FACEBOOK_APP_ID: "141232946007322"
    }, e.utils = {
        picSizes: [ 256, 304, 512, 1024 ],
        declination: function(e, t, n, r, o) {
            var i = [ e, t, n ], a = r % 100;
            return a = a >= 11 && 14 >= a ? 0 : 5 > (a %= 10) ? a > 2 ? 2 : a : 0, o || (a = 1 == r ? 1 : 0), i[a];
        },
        escapeSpecial: function(e, t) {
            return e = (e + "").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1"), e && t && (e = "'" + e + "'"), 
            e;
        },
        scanForURIs: function(e, t, n) {
            function r(e, r, o, i) {
                var c = e;
                (void 0 == r || "" == r) && (c = "http://" + c);
                var u = o;
                return void 0 != i && "" != i && (u += "." + i), s++, n || (u = c, u = u.replace(/^https?:\/\//, "")), 
                a[s] = "<a " + (t ? 'class = "' + t + '"' : "") + ' href="' + c + '" target="_blank" title="' + c + '">' + u + "</a>", 
                "INNER_TMP_BLOCK_" + s + "_INNER_TMP_BLOCK";
            }
            function o(e) {
                return s++, a[s] = "<a " + (t ? 'class = "' + t + '"' : "") + ' href="mailto:' + e + '">' + e + "</a>", 
                "INNER_TMP_BLOCK_" + s + "_INNER_TMP_BLOCK";
            }
            function i(e, t) {
                return a[t];
            }
            var a = [], s = 0;
            return e += " ", e = e.replace(/\b([a-z0-9_\.-]+)@([\da-z\.-]+)\.(biz|com|edu|gov|net|org|us|ru|ua|uk|su|se|co|no|jp|it|in|il|gb|fr|fi|es|de|cz|ch|ca|by|at|au)/gim, o), 
            e = e.replace(/\b(https?:\/\/)?([\da-z\.-]+)\.(biz|com|edu|gov|net|org|us|ru|ua|uk|su|se|co|no|jp|it|in|il|gb|fr|fi|es|de|cz|ch|ca|by|at|au)(\/[^\s\(\)\[\]\{\}]*)*/gim, r), 
            e = e.replace(/INNER_TMP_BLOCK_([\d]+)_INNER_TMP_BLOCK/gim, i);
        },
        screenshotSize: function(e) {
            return Modernizr.retina && (e *= 2), 256 >= e && (e = 256), e >= 512 && 768 > e && (e = 512), -1 == this.picSizes.indexOf(e) ? (console.error("screenshot size not found! size: " + e), 
            512) : e;
        },
        URLParts: function(e) {
            var t = /(.+:\/\/)?([^\/]+)(\/.*)*/i, n = t.exec(e);
            return n = n || [], {
                url: n[0] || "",
                protocol: n[1] || "",
                hostname: n[2] || "",
                path: n[3] || ""
            };
        },
        filterNonAscii: function(e) {
            if (e && e.val) {
                var t = e.val();
                return /[^\x00-\x7f]/.test(t) ? (t = t.replace(/[^\x00-\x7f]/g, ""), e.val(t), !0) : !1;
            }
        },
        applyTransform: function(e, t) {
            e.css({
                "-webkit-transform": t,
                "-moz-transform": t,
                "-ms-transform": t,
                "-o-transform": t,
                transform: t
            });
        }
    }, $.expr[":"].icontains = function(e, t, n) {
        var r = n[3] + "", o = e.textContent || e.innerText || jQuery(e).text() || "", i = RegExp("(" + r + ")", "i");
        return !!o.match(i);
    }, $.expr[":"].econtains = function(e, t, n) {
        var r = n[3] + "", o = e.textContent || e.innerText || jQuery(e).text() || "", i = RegExp("(^" + r + "$)", "");
        return !!o.match(i);
    }, String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }, String.prototype.postfix = function(e) {
        var t = this.split(".");
        return t.length > 1 ? (t[t.length - 2] += "_" + e, t.join(".")) : this + "_" + e;
    };
    var t = _.template;
    _.template = function() {
        var e = t.apply(this, arguments);
        return function() {
            return $.trim(e.apply(this, arguments));
        };
    }, _.bindAll = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return 0 === t.length && (t = _.functions(e)), _.each(t, function(t) {
            e[t] = _.bind(e[t], e);
        }), e;
    }, _.mixin({
        cloneWithObjects: function(e) {
            return e = _.clone(e), _.each(e, function(t, n) {
                _.isObject(t) && (e[n] = _.clone(e[n]));
            }), e;
        }
    });
    var n = function() {
        var e = {};
        return Error && Error.captureStackTrace && Error.captureStackTrace(e, n), e.stack;
    };
    window.onerror = function(e, t, r) {
        try {
            $.post("/api/log", {
                type: "error",
                message: e,
                url: t,
                lineNumber: r,
                stackTrace: n()
            }, function() {});
        } catch (o) {
            console.log(o);
        }
    }, jQuery.fn.selectText = function() {
        var e, t, n = document, r = this[0];
        n.body.createTextRange ? (e = document.body.createTextRange(), e.moveToElementText(r), e.select()) : window.getSelection && (t = window.getSelection(), 
        e = document.createRange(), e.selectNodeContents(r), t.removeAllRanges(), t.addRange(e)), this.focus(), 
        r.selectionStart = 0, r.selectionEnd = 1;
    };
}(RM), function() {
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
}();

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
