webpackJsonp([2],{

/***/ "./src/AppBundle/Resources/public/assets/js/abc.js":
/*!*********************************************************!*\
  !*** ./src/AppBundle/Resources/public/assets/js/abc.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(window).ready(function () {
    // header 색상 바꾸기
    initScroll();

    menuClose();
});

// header 스크롤 내렸을때 색상 블랙
function initScroll() {
    $(document).on('scroll', function () {
        a = $(window).scrollTop();

        if (a > 70) {
            $('header').addClass('black');
        } else {
            $('header').removeClass('black');
        }
    });
}

function menuClose() {

    $('.btn-menu').on('click', function () {
        $('#gnb-mobile').addClass('collapsed');
        $('.dim').addClass('open');
        $('body').addClass('no-scroll');
    });

    $('.btn-close').on('click', function (e) {
        e.preventDefault();
        $('#gnb-mobile').removeClass('collapsed');
        $('.dim').removeClass('open');
        $('body').removeClass('no-scroll');
    });
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./src/AppBundle/Resources/public/assets/js/abc.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvYXNzZXRzL2pzL2FiYy5qcyJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwicmVhZHkiLCJpbml0U2Nyb2xsIiwibWVudUNsb3NlIiwiZG9jdW1lbnQiLCJvbiIsImEiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQUFBLEVBQUVDLE1BQUYsRUFBVUMsS0FBVixDQUFnQixZQUNoQjtBQUNJO0FBQ0FDOztBQUVBQztBQUNILENBTkQ7O0FBUUE7QUFDQSxTQUFTRCxVQUFULEdBQXFCO0FBQ2pCSCxNQUFFSyxRQUFGLEVBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFlBQVU7QUFDL0JDLFlBQUlQLEVBQUVDLE1BQUYsRUFBVU8sU0FBVixFQUFKOztBQUVBLFlBQUdELElBQUUsRUFBTCxFQUFRO0FBQ0pQLGNBQUUsUUFBRixFQUFZUyxRQUFaLENBQXFCLE9BQXJCO0FBQ0gsU0FGRCxNQUVLO0FBQ0RULGNBQUUsUUFBRixFQUFZVSxXQUFaLENBQXdCLE9BQXhCO0FBQ0g7QUFDSixLQVJEO0FBU0g7O0FBR0QsU0FBU04sU0FBVCxHQUFvQjs7QUFFaEJKLE1BQUUsV0FBRixFQUFlTSxFQUFmLENBQWtCLE9BQWxCLEVBQTBCLFlBQVU7QUFDaENOLFVBQUUsYUFBRixFQUFpQlMsUUFBakIsQ0FBMEIsV0FBMUI7QUFDQVQsVUFBRSxNQUFGLEVBQVVTLFFBQVYsQ0FBbUIsTUFBbkI7QUFDQVQsVUFBRSxNQUFGLEVBQVVTLFFBQVYsQ0FBbUIsV0FBbkI7QUFDSCxLQUpEOztBQU1BVCxNQUFFLFlBQUYsRUFBZ0JNLEVBQWhCLENBQW1CLE9BQW5CLEVBQTJCLFVBQVNLLENBQVQsRUFBVztBQUNsQ0EsVUFBRUMsY0FBRjtBQUNBWixVQUFFLGFBQUYsRUFBaUJVLFdBQWpCLENBQTZCLFdBQTdCO0FBQ0FWLFVBQUUsTUFBRixFQUFVVSxXQUFWLENBQXNCLE1BQXRCO0FBQ0FWLFVBQUUsTUFBRixFQUFVVSxXQUFWLENBQXNCLFdBQXRCO0FBQ0gsS0FMRDtBQU1ILEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCh3aW5kb3cpLnJlYWR5KGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gaGVhZGVyIOyDieyDgSDrsJTqvrjquLBcclxuICAgIGluaXRTY3JvbGwoKTtcclxuXHJcbiAgICBtZW51Q2xvc2UoKTtcclxufSk7XHJcblxyXG4vLyBoZWFkZXIg7Iqk7YGs66GkIOuCtOuguOydhOuVjCDsg4nsg4Eg67iU656ZXHJcbmZ1bmN0aW9uIGluaXRTY3JvbGwoKXtcclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGEgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgIGlmKGE+NzApe1xyXG4gICAgICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcygnYmxhY2snKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2JsYWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtZW51Q2xvc2UoKXtcclxuXHJcbiAgICAkKCcuYnRuLW1lbnUnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnI2duYi1tb2JpbGUnKS5hZGRDbGFzcygnY29sbGFwc2VkJyk7XHJcbiAgICAgICAgJCgnLmRpbScpLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCduby1zY3JvbGwnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5idG4tY2xvc2UnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcjZ25iLW1vYmlsZScpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcclxuICAgICAgICAkKCcuZGltJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FwcEJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2Fzc2V0cy9qcy9hYmMuanMiXSwic291cmNlUm9vdCI6IiJ9