const gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('modern', () => {
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
    .pipe(uglify())
    .pipe(rename('CvrApi.min.js'))
    .pipe(gulp.dest('dist'))
});

exports.default = gulp.parallel('modern', 'old');