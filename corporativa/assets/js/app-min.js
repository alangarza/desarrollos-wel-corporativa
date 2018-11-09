$(function(){"use strict";
// On window's load
function e(){var e;992<$(window).width()?100<=$(document).scrollTop()?($(".header-shrink").length<1&&$(".sticky-header").addClass("header-shrink"),$(".do-sticky").length<1&&$(".logo img").attr("src","assets/img/logos/black-logo.png")):($(".sticky-header").removeClass("header-shrink"),$(".do-sticky").length<1&&$(".logo img").attr("src","assets/img/logos/logo.png")):$(".logo img").attr("src","assets/img/logos/black-logo.png")}function t(){40<$(document).scrollTop()?$(".do-sticky").addClass("sticky-header"):$(".do-sticky").removeClass("sticky-header")}
// WOW animation library initialization
// Banner slider
//Function to animate slider captions
function a(e){
//Cache the animationend event in a variable
var a="webkitAnimationEnd animationend";e.each(function(){var e=$(this),t=e.data("animation");e.addClass(t).one(a,function(){e.removeClass(t)})})}
//Variables on page load
// Counter Activation
function n(e){var t=$(window).scrollTop(),a=t+$(window).height(),n=e.offset().top,s;return n+e.height()<=a&&t<=n}
// Google map activation
function s(e){var t=40.7110411,a=-74.0110326,n={center:new google.maps.LatLng(t,a),zoom:15,scrollwheel:!1,styles:[{featureType:"administrative",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]}]},s=new google.maps.Map(document.getElementById("contactMap"),n),i=new google.maps.InfoWindow,o=new google.maps.LatLng(25.659054,-100.365627),l=new google.maps.Marker({position:o,map:s}),r;r=l,google.maps.event.addListener(r,"click",function(e){i.setContent("<div class='map-properties contact-map-content'><div class='map-content'><p class='address'>123 Kathal St. Tampa City </p><ul class='map-properties-list'> <li><i class='fa fa-phone'></i>  +XXXX XXXX XXX</li> <li><i class='fa fa-envelope'></i>  info@themevessel.com</li> <li><a href='index.html'><i class='fa fa-globe'></i>  http://http://themevessel.com</li></a> </ul></div></div>"),i.open(s,r)})}function i(){var t=0,a="data-items",n=".item",s=0,i="",o="",l=$(f).width(),r=$("body").width();$(m).each(function(){s+=1;var e=$(this).find(n).length;i=$(this).parent().attr(a),o=i.split(","),$(this).parent().attr("id","multiCarousel"+s),g=(t=1200<=r?o[3]:992<=r?o[2]:768<=r?o[1]:o[0],l/t),$(this).css({transform:"translateX(0px)",width:g*e}),$(this).find(n).each(function(){$(this).outerWidth(g)}),$(".leftLst").addClass("over"),$(".rightLst").removeClass("over")})}function o(e,t,a){var n=".leftLst",s=".rightLst",i="",o,l=$(t+" "+m).css("transform").match(/-?[\d\.]+/g),r=Math.abs(l[4]);if(0===e)i=parseInt(r,10)-parseInt(g*a,10),$(t+" "+s).removeClass("over"),i<=g/2&&(i=0,$(t+" "+n).addClass("over"));else if(1===e){var c=$(t).find(m).width()-$(t).width();i=parseInt(r,10)+parseInt(g*a,10),$(t+" "+n).removeClass("over"),c-g/2<=i&&(i=c,$(t+" "+s).addClass("over"))}$(t+" "+m).css("transform","translateX("+-i+"px)")}function l(e,t){var a="#"+$(t).parent().attr("id"),n;o(e,a,$(a).attr("data-slide"))}function r(){var e,t=400;$(window).width()<992&&(t=500);var a,n=t*.6665;$(".modalIframe").css("height",n)}
// Typed string activation
function c(){particlesJS("particles-banner",{particles:{number:{value:100,density:{enable:!0,value_area:1e3}},color:{value:["#aa73ff","#f8c210","#83d238","#33b1f8"]},shape:{type:"circle",stroke:{width:0,color:"#fff"},polygon:{nb_sides:2},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.6,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:120,color:"#ffffff",opacity:.4,width:1}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!1},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}
// Switching Color schema
function d(){var e='<div class="option-panel option-panel-collased">\n    <h2>Change Color</h2>\n    <div class="color-plate default-plate" data-color="default"></div>\n    <div class="color-plate blue-plate" data-color="blue"></div>\n    <div class="color-plate yellow-plate" data-color="yellow"></div>\n    <div class="color-plate red-plate" data-color="red"></div>\n    <div class="color-plate green-light-plate" data-color="green-light"></div>\n    <div class="color-plate orange-plate" data-color="orange"></div>\n    <div class="color-plate yellow-light-plate" data-color="yellow-light"></div>\n    <div class="color-plate green-light-2-plate" data-color="green-light-2"></div>\n    <div class="color-plate olive-plate" data-color="olive"></div>\n    <div class="color-plate purple-plate" data-color="purple"></div>\n    <div class="color-plate blue-light-plate" data-color="blue-light"></div>\n    <div class="color-plate brown-plate" data-color="brown"></div>\n    <div class="setting-button">\n        <i class="fa fa-gear"></i>\n    </div>\n</div>';$("body").append(e)}var p;$(window).on("load",function(){setTimeout(function(){$(".page_loader").fadeOut("fast"),$('link[id="style_sheet"]').attr("href","assets/css/skins/default.css")},1e3),0<$("body .filter-portfolio").length&&$(function(){$(".filter-portfolio").filterizr({delay:0})})}),
// Header shrink while page scroll
e(),t(),$(window).on("scroll",function(){e(),t()}),new WOW({animateClass:"animated",offset:100,mobile:!1}).init(),$(".open-offcanvas, .close-offcanvas").on("click",function(){return $("body").toggleClass("off-canvas-sidebar-open"),!1}),$(document).on("click",function(e){var t=$(".off-canvas-sidebar");t.is(e.target)||0!==t.has(e.target).length||$("body").removeClass("off-canvas-sidebar-open")});var h=$("#carouselExampleIndicators"),u=h.find(".item:first").find("[data-animation ^= 'animated']");
//Initialize carousel
h.carousel(),
//Animate captions in first slide on page load
a(u),
//Pause carousel
h.carousel("pause"),
//Other slides to be animated on carousel slide event
h.on("slide.bs.carousel",function(e){var t;a($(e.relatedTarget).find("[data-animation ^= 'animated']"))}),$("#carouselExampleIndicators").carousel({interval:3e3,pause:"false"}),
// Megamenu activation
$(".megamenu").on("click",function(e){e.stopPropagation()}),
// DROPDOWN ON HOVER
$(".dropdown").on("hover",function(){$(".dropdown-menu",this).stop().fadeIn("fast")},function(){$(".dropdown-menu",this).stop().fadeOut("fast")}),$(window).on("scroll",function(){$(".counter").each(function(){var e;n($(this))&&!$(this).hasClass("Starting")&&($(this).addClass("Starting"),$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:3e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e))}}))})}),
// Dropzone initialization
Dropzone.autoDiscover=!1,$(function(){$("div#myDropZone").dropzone({url:"/file-upload"})}),
// Full  Page Search Activation
$(function(){$('a[href="#full-page-search"]').on("click",function(e){e.preventDefault(),$("#full-page-search").addClass("open"),$('#full-page-search > form > input[type="search"]').focus()}),$("#full-page-search, #full-page-search button.close").on("click keyup",function(e){e.target!==this&&"close"!==e.target.className&&27!==e.keyCode||$(this).removeClass("open")}),$("form").submit(function(e){return e.preventDefault(),!1})}),
// Page scroller initialization.
$.scrollUp({scrollName:"page_scroller",scrollDistance:300,scrollFrom:"top",scrollSpeed:500,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:'<i class="fa fa-chevron-up"></i>',scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647}),
// Magnify activation
$(".property-magnify-gallery").each(function(){$(this).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}})}),
// Range sliders activation
$(".range-slider-ui").each(function(){var e=$(this).attr("data-min"),t=$(this).attr("data-max"),a=$(this).attr("data-min-name"),n=$(this).attr("data-max-name"),s=$(this).attr("data-unit");$(this).append("<span class='min-value'></span> <span class='max-value'></span><input class='current-min' type='hidden' name='"+a+"'><input class='current-max' type='hidden' name='"+n+"'>"),$(this).slider({range:!0,min:e,max:t,values:[e,t],slide:function(e,t){e=e;var a=parseInt(t.values[0],10),n=parseInt(t.values[1],10);$(this).children(".min-value").text(a+" "+s),$(this).children(".max-value").text(n+" "+s),$(this).children(".current-min").val(a),$(this).children(".current-max").val(n)}});var i=parseInt($(this).slider("values",0),10),o=parseInt($(this).slider("values",1),10);$(this).children(".min-value").text(i+" "+s),$(this).children(".max-value").text(o+" "+s),$(this).children(".current-min").val(i),$(this).children(".current-max").val(o)}),
// Select picket activation
$("select").selectBox({mobile:!0}),
// Dropdown activation
$(".dropdown-menu a.dropdown-toggle").on("click",function(e){var t;return $(this).next().hasClass("show")||$(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),$(this).next(".dropdown-menu").toggleClass("show"),$(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(e){$(".dropdown-submenu .show").removeClass("show")}),!1}),
// Modal activation
$(".property-video").on("click",function(){$("#propertyModal").modal("show")}),$("#contactMap").length&&s(),
// Countdown activation
$(function(){
// Add background image
//$.backstretch('../img/nature.jpg');
var e="December  27, 2019 15:03:25";$(".countdown.simple").countdown({date:e}),$(".countdown.styled").countdown({date:e,render:function(e){$(this.el).html("<div>"+this.leadingZeros(e.days,3)+" <span>Days</span></div><div>"+this.leadingZeros(e.hours,2)+" <span>Hours</span></div><div>"+this.leadingZeros(e.min,2)+" <span>Minutes</span></div><div>"+this.leadingZeros(e.sec,2)+" <span>Seconds</span></div>")}}),$(".countdown.callback").countdown({date:+new Date+1e4,render:function(e){$(this.el).text(this.leadingZeros(e.sec,2)+" sec")},onEnd:function(){$(this.el).addClass("ended")}}).on("click",function(){$(this).removeClass("ended").data("countdown").update(+new Date+1e4).start()})});
// Multi-item carousel activation
var f=".multi-carousel",m=".multi-carousel-inner",g="";if($(".leftLst, .rightLst").on("click",function(){var e;l($(this).hasClass("leftLst")?0:1,this)}),i(),$(window).on("resize",function(){i(),r(),e()}),r(),0<$("#typed-strings").length)var v=new Typed("#typed",{stringsElement:"#typed-strings",typeSpeed:100,backSpeed:0,backDelay:1e3,startDelay:1e3,loop:!0});if(0<$("#typed-strings2").length)var v=new Typed("#typed2",{stringsElement:"#typed-strings2",typeSpeed:100,backSpeed:0,backDelay:1e3,startDelay:1e3,loop:!0});if(0<$("#typed-strings3").length)var v=new Typed("#typed3",{stringsElement:"#typed-strings3",typeSpeed:100,backSpeed:0,backDelay:1e3,startDelay:1e3,loop:!0});
//Youtube carousel activation
0<$(".player").length&&$(document).on("ready",function(){$(".player").mb_YTPlayer()})
/* ---- particles.js config ---- */,0<$("#particles-banner").length&&c(),$(document).on("click",".setting-button",function(){$(".option-panel").toggleClass("option-panel-collased")})}),
// mCustomScrollbar initialization
function(e){e(window).on("resize",function(){e("#map").css("height",e(this).height()-110),768<e(this).width()?(e(".map-content-sidebar").mCustomScrollbar({theme:"minimal-dark"}),e(".map-content-sidebar").css("height",e(this).height()-110)):(e(".map-content-sidebar").mCustomScrollbar("destroy"),//destroy scrollbar
e(".map-content-sidebar").css("height","100%"))}).trigger("resize")}(jQuery);