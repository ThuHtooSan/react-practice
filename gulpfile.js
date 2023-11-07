const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

const compileStyles = () => {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('src'));
}

const minifyStyles = () => {
    return src('sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('src'));
}

const watchSass = () => {
    return watch(['sass/**/*.scss'], { 
        ignoreInitial: false 
        }, compileStyles);
}

exports.default = watchSass;
exports.build = minifyStyles;