(function ($) {
  "use strict";
  
  let isDark = false;
  $('#moon').on('click',function(){
    console.log(1111);
    isDark=false
  })
  
  $('#sun').on('click',function(){
    console.log(2222);
    isDark=true
  })
})(jQuery) 