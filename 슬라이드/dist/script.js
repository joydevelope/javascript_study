function MySliderBox1__init() {
  var swiper = new Swiper('.my-slider-box-1 .swiper-container', {
    autoplay:{
      delay:10000, //10초
      disableOnInteraction:false,
    },
    pagination:{
      el: ".my-slider-box-1 .swiper-pagination",
      clickable:true,
      renderBullet: function(index, className){
        let img = "";
        
        if(index ==0){
          img = '<img src="http://picsum.photos/id/1/100/100">';
        }
        else if(index == 1){
          img = '<img src="http://picsum.photos/id/2/100/100">';
        }
        else if(index == 2){
          img = '<img src="http://picsum.photos/id/3/100/100">';
        }
        else if(index == 3){
          img = '<img src="http://picsum.photos/id/4/100/100">';
        }
        else if(index == 4){
          img = '<img src="http://picsum.photos/id/5/100/100">';
        }
        else if(index == 5){
          img = '<img src="http://picsum.photos/id/6/100/100">';
        }
        
       const bullet = '<span class="' + className + '">' +img + '</span>'; 
        return bullet;
      },
    },
    slidesPerView:1,
    spaceBetween:30,
    loop: false,
    navigation: {
      nextEl: '.my-slider-box-1 .my-slider-box-1__btn-right',
      prevEl: '.my-slider-box-1 .my-slider-box-1__btn-left',
    },
  });
}

MySliderBox1__init();

function MySliderBox2__init() {
  var swiper = new Swiper('.my-slider-box-2 .swiper-container');
}

MySliderBox2__init();