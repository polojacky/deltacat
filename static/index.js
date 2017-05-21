/**
 * Created by frank on 2017/1/5.
 */
$(document).ready(function() {
  $("a.anchor").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });
});