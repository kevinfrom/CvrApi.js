const gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    terser = require('gulp-terser'),
    strip = require('gulp-strip-comments');

gulp.task('es6', () => {
    return gulp.src('src/CvrApi.class.js')
        .pipe(babel({
            presets: [
                [
                    '@babel/env',
                    {
                        targets: [
                            'last 2 versions',
                            'not dead',
                            'not < 2%',
                        ],
                    }
                ]
            ]
        }))
        .pipe(rename('CvrApi.es6.js'))
        .pipe(gulp.dest('dist'))
});

gulp.task('es6-min', () => {
    return gulp.src('src/CvrApi.class.js')
        .pipe(babel({
            presets: [
                [
                    '@babel/env',
                    {
                        targets: [
                            'last 2 versions',
                            'not dead',
                            'not < 2%',
                        ],
                    }
                ]
            ]
        }))
        .pipe(rename('CvrApi.es6.min.js'))
        .pipe(strip())
        .pipe(terser())
        .pipe(gulp.dest('dist'))
});

gulp.task('old', () => {
    return gulp.src('src/CvrApi.class.js')
        .pipe(babel({
            presets: [
                [
                    '@babel/env',
                    {
                        targets: [
                            'ie >= 11',
                            'safari >= 9'
                        ]
                    }
                ]
            ]
        }))
        .pipe(rename('CvrApi.js'))
        .pipe(gulp.dest('dist'))
});

gulp.task('old-min', () => {
    return gulp.src('src/CvrApi.class.js')
        .pipe(babel({
            presets: [
                [
                    '@babel/env',
                    {
                        targets: [
                            'ie >= 11',
                            'safari >= 9'
                        ]
                    }
                ]
            ]
        }))
        .pipe(strip())
        .pipe(terser())
        .pipe(rename('CvrApi.min.js'))
        .pipe(gulp.dest('dist'))
});

exports.default = gulp.parallel('es6', 'old', 'es6-min', 'old-min');