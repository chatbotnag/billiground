/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var browser=require('browser-sync');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('serve',function(){
	browser.reload();
});
