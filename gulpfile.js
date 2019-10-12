const gulp = require("gulp");
const sass=require("gulp-sass");
// const uglify = require("gulp-uglify");
// const es2015Preset = require("babel-preset-es2015");

gulp .task("copy",async()=>{
    gulp.src("./**/*")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\xinyiyuntan"));
});

//监听所有
gulp.task("watchall", async ()=>{
    //监听sass
    gulp.watch("sass/**/*",async ()=>{
        gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xinyiyuntan\\css"));
    })
    //监听html
    gulp.watch("*.html",async ()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xinyiyuntan"));
    })
    //监听img
    gulp.watch("img/**/*",async ()=>{
        gulp.src("img/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xinyiyuntan\\img"));
    })
    // gulp.watch("js/*.js",async ()=>{
    //     gulp.src("js/*.js")
    //     .pipe(babel({presets:[es2015Preset]}))
    //     .pipe(uglify())
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\xinyiyuntan\\js"));
    // })

  
})



// const gulp = require("gulp");
// const uglify = require("gulp-uglify");
// const minifycss = require("gulp-minify-css");
// const babel = require("gulp-babel");
// const es2015Preset = require("babel-preset-es2015");
// const sass = require("gulp-sass");

// gulp.task("copy-html", async ()=>{
// gulp.src("*.html")
// .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao"));
// })

// gulp.task("copyallfile",async ()=>{
// gulp.src("*/**/*")
// .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao"));
// })

// gulp.task("watchall", async ()=>{
// gulp.watch("*.html",async ()=>{
//     gulp.src("*.html")
//     .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao"));
// })
// gulp.watch("js/*.js",async ()=>{
//     gulp.src("js/*.js")
//     .pipe(babel({presets:[es2015Preset]}))
//     .pipe(uglify())
//     .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao\\js"));
// })
// gulp.watch("css/*.css",async ()=>{
//     gulp.src("css/index.css")
//     .pipe(minifycss())
//     .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao\\css"));
// })
// gulp.watch("sass/**/*",async ()=>{
//     gulp.src("sass/**/*")
//     .pipe(sass())
//     .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao\\css"));
// })
// gulp.watch("images/**/*",async ()=>{
//     gulp.src("images/**/*")
//     .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao\\images"));
// })
// })
