hljs.registerLanguage("css", function (e) {
    var c = "[a-zA-Z-][a-zA-Z0-9_-]*", t = {
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                eW: !0,
                eE: !0,
                c: [{
                    b: /[\w-]+\(/,
                    rB: !0,
                    c: [{cN: "built_in", b: /[\w-]+/}, {b: /\(/, e: /\)/, c: [e.ASM, e.QSM]}]
                }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {cN: "number", b: "#[0-9A-Fa-f]+"}, {cN: "meta", b: "!important"}]
            }
        }]
    };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, {cN: "selector-id", b: /#[A-Za-z0-9_-]+/}, {cN: "selector-class", b: /\.[A-Za-z0-9_-]+/}, {
            cN: "selector-attr",
            b: /\[/,
            e: /\]/,
            i: "$"
        }, {cN: "selector-pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/}, {
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            b: "@",
            e: "[{;]",
            i: /:/,
            c: [{cN: "keyword", b: /\w+/}, {b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM]}]
        }, {cN: "selector-tag", b: c, r: 0}, {b: "{", e: "}", i: /\S/, c: [e.CBCM, t]}]
    }
});