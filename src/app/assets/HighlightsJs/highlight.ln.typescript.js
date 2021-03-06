hljs.registerLanguage("typescript", function (e) {
    var r = {
        keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract",
        literal: "true false null undefined NaN Infinity",
        built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void"
    };
    return {
        aliases: ["ts"],
        k: r,
        c: [{cN: "meta", b: /^\s*['"]use strict['"]/}, e.ASM, e.QSM, {
            cN: "string",
            b: "`",
            e: "`",
            c: [e.BE, {cN: "subst", b: "\\$\\{", e: "\\}"}]
        }, e.CLCM, e.CBCM, {
            cN: "number",
            v: [{b: "\\b(0[bB][01]+)"}, {b: "\\b(0[oO][0-7]+)"}, {b: e.CNR}],
            r: 0
        }, {b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*", k: "return throw case", c: [e.CLCM, e.CBCM, e.RM], r: 0}, {
            cN: "function",
            b: "function",
            e: /[\{;]/,
            eE: !0,
            k: r,
            c: ["self", e.inherit(e.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/}), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                k: r,
                c: [e.CLCM, e.CBCM],
                i: /["'\(]/
            }],
            i: /\[|%/,
            r: 0
        }, {bK: "constructor", e: /\{/, eE: !0}, {bK: "module", e: /\{/, eE: !0}, {
            bK: "interface",
            e: /\{/,
            eE: !0,
            k: "interface extends"
        }, {b: /\$[(.]/}, {b: "\\." + e.IR, r: 0}]
    }
});