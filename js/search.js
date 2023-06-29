$(document).ready(function(){
    $('.demo').slick({
      dots: false,
      slidesToShow: 1,
      arrows:true,
      prevArrow:'<img class="slick-prev" style="height:auto !important; left:-30px !important" src="../assets/icons/Vector 2.png" alt="">',
      nextArrow:'<img class="slick-next" style="height:auto !important; right:-30px !important" src="../assets/icons/Vector 3.png" alt="">',
      autoplay:false,
      infinite:true,
      centerMode:false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});