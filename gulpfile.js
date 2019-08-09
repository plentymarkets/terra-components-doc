const { src, dest } = require('gulp');

function copy() {
    return src('dist/**')
        .pipe(dest('/workspace/localsystem/plugins/inbox/plugins/PlentyPluginShowcase/ui'));
}

exports.copy = copy;
