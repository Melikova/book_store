$(document).ready(function(){
    $('.demo').slick({
      dots: false,
      slidesToShow: 5,
      arrows:true,
      prevArrow:'<img class="slick-prev" style="height:auto !important; left:-35px !important" src="../assets/icons/Vector 2.png" alt="">',
      nextArrow:'<img class="slick-next" style="height:auto !important; right:-35px !important" src="../assets/icons/Vector 3.png" alt="">',
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

    $('.read_more').on('click', function(e){
      e.preventDefault();
      console.log('ll');
      $('#categories').attr("style", "display:none");
      $('#read_more').attr("style", "display:block");
  })

  $('#star-rating').raty({
    score: function() {
      return $(this).attr('data-score');
    },
    starOff: '../assets/images/star_off.png',
    starOn: '../assets/images/star_on.png'
  });
});