const { src, dest, series } = require('gulp');
const del = require('del');

const destPath = '/workspace/localsystem/plugins/inbox/plugins/PlentyPluginShowcase/ui';

function copy() {
    return src('dist/**')
        .pipe(dest(destPath));
}

function clean() {
    return del(destPath, {force:true});
}

exports.default = series(clean, copy);
