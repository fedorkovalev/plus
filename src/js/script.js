$(document).ready(function(){
/* const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  controls: false,
  nav: false,
  speed: 2000,
  responsive: {
    320: {
      items: 1,
      nav: true,
      controls: true,
    }
  }
}); */
$('.carousel__inner').slick({
  speed: 1200,
  autoplay: true,
  autoplaySpeed: 2000,
  /* adaptiveHeight: true, */
  prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow/arrow_left.svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow/arrow_right.svg"></button>',
  responsive: [
      {
        breakpoint: 992,
        settings: {
        dots: true,
        arrows: false,
        }
      }, 
  ] 
});

/* document.querySelector('.slick-prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.slick-next').addEventListener('click', function () {
  slider.goTo('next');
}); */

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

function toggleSlide (item){
  $(item).each(function(i){
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  })
}

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');
});

  
