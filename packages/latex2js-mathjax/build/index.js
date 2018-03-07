Object.defineProperty(exports, "__esModule", { value: true });
var load_script_1 = require("load-script");
exports.DEFAULT_SCRIPT = process.env.MATHJAX_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML';
exports.DEFAULT_OPTIONS = {
    showProcessingMessages: false,
    messageStyle: 'none',
    showMathMenu: false,
    showMathMenuMSIE: false,
    tex2jax: {
        processEnvironments: true,
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        preview: 'none',
        processEscapes: true,
    },
};
exports.getMathJax = function () {
    return typeof MathJax === 'undefined' ? undefined : MathJax;
};
exports.loadMathJax = function (script, options) {
    if (script === void 0) { script = exports.DEFAULT_SCRIPT; }
    if (options === void 0) { options = exports.DEFAULT_OPTIONS; }
    var onLoad = function () {
        MathJax.Hub.Config(options);
    };
    if (!script) {
        return onLoad();
    }
    load_script_1.default(script, onLoad);
};
//# sourceMappingURL=index.js.map