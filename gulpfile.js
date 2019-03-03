var gulp = require('gulp'); // 將 node_modules 的檔案載入
var sass = require('gulp-sass');
gulp.task('sass', function() { // 定義 sass 的任務名稱
    return gulp.src('./scss/*.scss') // sass 的來源資料夾
        .pipe(sass( // 編譯 sass
            { outputStyle: 'expanded' } // sass 的輸出格式
        ).on('error', sass.logError))
        .pipe(gulp.dest('./css')); // sass 編譯完成後的匯出資料夾
});
gulp.task('sass:watch', function() {
    gulp.watch('./scss/*.scss', gulp.series('sass'));
});