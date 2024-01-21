console.clear();

const $cursor = $(".cursor");
const $cursorShadow = $(".cursor-shadow");
$(window).mousemove(function (e) {
  //console.log("e.clientX: "+ e.clientX); //마우스의 X좌표 위치
  //console.log("e.clientY: "+ e.clientY); //마우스의 Y좌표 위치

  $cursor.css({
    //커서 따라다님
    top: e.clientY,
    left: e.clientX,
  });
  $cursorShadow.css({
    //커서 따라다님
    top: e.clientY,
    left: e.clientX,
  });
});

$(".cursor-big").mouseenter(function () {
  $("html").addClass("need-to-cursor-big");
});

$(".cursor-big").mouseleave(function () {
  $("html").removeClass("need-to-cursor-big");
});
