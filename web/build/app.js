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
    naverMap();
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

function naverMap() {

    var mapDiv = document.getElementById('testMap');
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./src/AppBundle/Resources/public/assets/js/abc.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvYXNzZXRzL2pzL2FiYy5qcyJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwicmVhZHkiLCJpbml0U2Nyb2xsIiwibWVudUNsb3NlIiwibmF2ZXJNYXAiLCJkb2N1bWVudCIsIm9uIiwiYSIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYXBEaXYiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFBQSxFQUFFQyxNQUFGLEVBQVVDLEtBQVYsQ0FBZ0IsWUFBVztBQUN2QjtBQUNBQzs7QUFFQUM7QUFDQUM7QUFDSCxDQU5EOztBQVFBO0FBQ0EsU0FBU0YsVUFBVCxHQUFxQjtBQUNqQkgsTUFBRU0sUUFBRixFQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixZQUFVO0FBQy9CQyxZQUFJUixFQUFFQyxNQUFGLEVBQVVRLFNBQVYsRUFBSjs7QUFFQSxZQUFHRCxJQUFFLEVBQUwsRUFBUTtBQUNKUixjQUFFLFFBQUYsRUFBWVUsUUFBWixDQUFxQixPQUFyQjtBQUNILFNBRkQsTUFFSztBQUNEVixjQUFFLFFBQUYsRUFBWVcsV0FBWixDQUF3QixPQUF4QjtBQUNIO0FBQ0osS0FSRDtBQVNIOztBQUdELFNBQVNQLFNBQVQsR0FBb0I7O0FBRWhCSixNQUFFLFdBQUYsRUFBZU8sRUFBZixDQUFrQixPQUFsQixFQUEwQixZQUFVO0FBQ2hDUCxVQUFFLGFBQUYsRUFBaUJVLFFBQWpCLENBQTBCLFdBQTFCO0FBQ0FWLFVBQUUsTUFBRixFQUFVVSxRQUFWLENBQW1CLE1BQW5CO0FBQ0FWLFVBQUUsTUFBRixFQUFVVSxRQUFWLENBQW1CLFdBQW5CO0FBQ0gsS0FKRDs7QUFNQVYsTUFBRSxZQUFGLEVBQWdCTyxFQUFoQixDQUFtQixPQUFuQixFQUEyQixVQUFTSyxDQUFULEVBQVc7QUFDbENBLFVBQUVDLGNBQUY7QUFDQWIsVUFBRSxhQUFGLEVBQWlCVyxXQUFqQixDQUE2QixXQUE3QjtBQUNBWCxVQUFFLE1BQUYsRUFBVVcsV0FBVixDQUFzQixNQUF0QjtBQUNBWCxVQUFFLE1BQUYsRUFBVVcsV0FBVixDQUFzQixXQUF0QjtBQUNILEtBTEQ7QUFNSDs7QUFFRCxTQUFTTixRQUFULEdBQW1COztBQUVmLFFBQUlTLFNBQVNSLFNBQVNTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBYjtBQUNILEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCh3aW5kb3cpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gaGVhZGVyIOyDieyDgSDrsJTqvrjquLBcclxuICAgIGluaXRTY3JvbGwoKTtcclxuXHJcbiAgICBtZW51Q2xvc2UoKTtcclxuICAgIG5hdmVyTWFwKCk7XHJcbn0pO1xyXG5cclxuLy8gaGVhZGVyIOyKpO2BrOuhpCDrgrTroLjsnYTrlYwg7IOJ7IOBIOu4lOuemVxyXG5mdW5jdGlvbiBpbml0U2Nyb2xsKCl7XHJcbiAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBhID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICBpZihhPjcwKXtcclxuICAgICAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2JsYWNrJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdibGFjaycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWVudUNsb3NlKCl7XHJcblxyXG4gICAgJCgnLmJ0bi1tZW51Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJyNnbmItbW9iaWxlJykuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xyXG4gICAgICAgICQoJy5kaW0nKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYnRuLWNsb3NlJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnI2duYi1tb2JpbGUnKS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XHJcbiAgICAgICAgJCgnLmRpbScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuYXZlck1hcCgpe1xyXG4gICAgXHJcbiAgICB2YXIgbWFwRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RNYXAnKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQXBwQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvYXNzZXRzL2pzL2FiYy5qcyJdLCJzb3VyY2VSb290IjoiIn0=