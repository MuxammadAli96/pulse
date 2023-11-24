$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slide-left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slide-right.png"></img></button>',
       
    });
   
  });
  
 
  var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    nav: false,
    autoplay: false,
    controls: false,
      responsive: {
        270: {
          edgePadding: 20,
          gutter: 20,
          items: 3
        },
        700: {
          items: 2
        },
        900: {
          items: 2

        },
        1100:{
          autoWidth: true,
          items: 1,
          edgePadding: 20
        }
      }
      
    });
 
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });
    
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  
  function toogleSlide(item){
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  };
  toogleSlide('.catalog-item__link');
  toogleSlide('.catalog-item__back');
  //Modal

  $('[data-modal=consultation]').on('click',function(){
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
 
  $('.button__mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  })
  

 

   