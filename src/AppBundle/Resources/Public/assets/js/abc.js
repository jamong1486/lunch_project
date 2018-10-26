$(window).ready(function()
{
    // header 색상 바꾸기
    initScroll();

});

// header 스크롤 내렸을때 색상 블랙
function initScroll(){
    $(document).on('scroll', function(){
        a = $(window).scrollTop();

        if(a>70){
            $('header').addClass('black');
        }else{
            $('header').removeClass('black');
        }
    });
}