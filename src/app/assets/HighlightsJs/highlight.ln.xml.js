hljs.registerLanguage("xml", function (s) {
    var e = "[A-Za-z0-9\\._:-]+", t = {
        eW: !0,
        i: /</,
        r: 0,
        c: [{cN: "attr", b: e, r: 0}, {
            b: /=\s*/,
            r: 0,
            c: [{cN: "string", endsParent: !0, v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}, {b: /[^\s"'=<>`]+/}]}]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
        cI: !0,
        c: [{cN: "meta", b: "<!DOCTYPE", e: ">", r: 10, c: [{b: "\\[", e: "\\]"}]}, s.C("<!--", "-->", {r: 10}), {
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {b: /<\?(php)?/, e: /\?>/, sL: "php", c: [{b: "/\\*", e: "\\*/", skip: !0}]}, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {name: "style"},
            c: [t],
            starts: {e: "</style>", rE: !0, sL: ["css", "xml"]}
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {name: "script"},
            c: [t],
            starts: {e: "</script>", rE: !0, sL: ["actionscript", "javascript", "handlebars", "xml"]}
        }, {cN: "meta", v: [{b: /<\?xml/, e: /\?>/, r: 10}, {b: /<\?\w+/, e: /\?>/}]}, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{cN: "name", b: /[^\/><\s]+/, r: 0}, t]
        }]
    }
});