/*global document, jQuery, window*/

/*!
 * jQuery Personality Quiz Plugin
 * Original author: @justmarkup
 * Licensed under the MIT license
 */
(function(e,t,n){"use strict";function w(t,n){this.element=t;this.options=e.extend({},s,n);i=this.options;this._defaults=s;this._name=r;this.init()}function E(){e(y).before('<div class="juma-progress"><span></span></div>');b=e(y).outerWidth();v=".juma-progress";g=e(v+"> span");e(v).css("width",b)}function S(t){e("html").addClass("js");if(!i.nextAuto){e(y).after('<button type="submit" title="Show next question" class="juma-forward">Next</button>')}u=e(".juma-forward");u.attr("disabled","disabled");if(!e(t).hasClass("active")){e(t+":first-child").addClass("active")}}function x(t){a=e(o+"> ul li");u=e(".juma-forward");a.on("click keydown",function(t){if(t.which==1|t.which==13){a.removeClass("juma-choice");a.attr("aria-checked",false);u.attr("disabled","disabled");f=e(o+".active").data("question");u.removeAttr("disabled");e(this).addClass("juma-choice");e(this).attr("aria-checked",true);if(i.nextAuto){T()}}else{}});if(!i.nextAuto){u.click(function(){T()})}}function T(){l[f]=e(".juma-choice").data("points");c+=l[f];f=e(o+".active");if(f.is(":last-child")){e(".juma-progress > span").css("width",b);e(y).hide();u.hide();p=e(".juma-score li").length;for(d;d<p;d+=1){var t=e(".juma-score li")[d];if(c<=e(t).data("points")){e(t).show();if(i.showFinalScore){e(".juma-final-score").text(c)}return}}}else{e(o).removeClass("active");f.next("li").addClass("active");u.attr("disabled","disabled");g.css("width",b/e(o).length);m=parseInt(g.css("width"),10);e(".juma-progress > span").css("width",m*(e(".active").data("question")-1)+"px")}}var r="jumaQuiz",i,s={container:"juma-quiz",progress:true,nextAuto:false,showFinalScore:false},o,u,a,f,l=[],c=0,h,p,d=0,v,m,g,y,b;w.prototype={init:function(){y="#"+this.options.container;o=y+" > li";if(this.options.progress){E()}S(o);x(y)}};e.fn[r]=function(t){return this.each(function(){if(!e.data(this,"plugin_"+r)){e.data(this,"plugin_"+r,new w(this,t))}})}})(jQuery,window,document)