$(function () {

  //根据屏幕的大小，切换对应的图片
  var $carousel = $("#wjs_carousel");
  var $img = $carousel.find("img");
  $(window).on("resize", function () {

    var screenWidth = $(window).width();

    if (screenWidth >= 640) {
      //给所有的图片都设置src为pc端的图片
      $img.each(function () {
        $(this).attr("src",  $(this).data("psrc")  );
      })

    } else {
      //给所有的图片都设置src为移动端的图片
      $img.each(function () {
        $(this).attr("src",  $(this).data("msrc")  );
      })
    }


  }).trigger("resize");


  //支持滑动
  var startX = 0;
  $carousel.on("touchstart", function (e) {
    startX = e.originalEvent.touches[0].clientX;
  });

  $carousel.on("touchend", function (e) {
    var distance = e.originalEvent.changedTouches[0].clientX - startX;

    if(distance >= 50) {
      $carousel.carousel("prev");
    }

    if(distance <= -50) {
      $carousel.carousel("next");
    }

  });

});