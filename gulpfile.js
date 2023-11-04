const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const compileStyles = () => {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('src'))
        .pipe(cleanCSS())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('src'));
}

const watchSass = () => {
    return watch(['sass/**/*.scss'],{ 
        ignoreInitial: false 
        }, compileStyles);
}

exports.default = watchSass;