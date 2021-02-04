// gnb
$(function(){
  $('#gnb > .depth1 > li').hover(
      function(){
          $('.depth2').stop().show();
          $('#gnb_bg').addClass('show');
      },
      function(){
          $('.depth2').stop().hide();
          $('#gnb_bg').removeClass('show');
      }
  )
});


// swiper slider
  $(function(){
    var mySwiper = new Swiper('.swiper-container', {
        // 설정 옵션
        direction: 'horizontal',
        loop: true,  
        // autoplay
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
          // pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
          // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
  });

  
  // bxslide
  $(document).ready(function(){
    $('.bxslider').bxSlider( {
        mode: 'horizontal',// 가로 방향 수평 슬라이드
        speed: 250,        // 이동 속도를 설정
        pager: true,      // 현재 위치 페이징 표시 여부 설정
        moveSlides: 1,     // 슬라이드 이동시 개수
        slideWidth: 285,   // 슬라이드 너비
        minSlides: 4,      // 최소 노출 개수
        maxSlides: 4,      // 최대 노출 개수
        slideMargin: 15,    // 슬라이드간의 간격
        auto: true,        // 자동 실행 여부
        autoHover: true,   // 마우스 호버시 정지 여부
        controls: false    // 이전 다음 버튼 노출 여부
    });
});
