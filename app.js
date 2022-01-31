(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jQuery"], factory);
  } else if (typeof exports === "object") {
    factory(require("jquery"));
  } else {
    factory(root.jQuery || root.Zepto);
  }
})(this, function ($) {
  "use strict";

  let ashfakul = function(slider,options) {
    let slides = slider.children(),
      slideCount = slides.length,
      width=slider.width(),
      numSlides =slideCount,
      currentSlide = 0,
      nextSlide = 0,
      inner,
      timer,
      running = false,
      default ={
        
      }
  }
});
