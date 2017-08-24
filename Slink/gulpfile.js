/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fs=require('fs');
var gulp=require('gulp');

var path=require('path');

var browserSync=require('browser-sync');

gulp.task('reload',function(){
    browserSync.reload();
});

gulp.task('watch',function(){
    gulp.watch('./src/*.js',['reload']);
   });

gulp.task('serve',['watch'],function(){
    browserSync({
        server:{
            baseDir: "./",
            index:"./index.html"
        }
    });
});
