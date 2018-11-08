$(window).ready(function() {
    // header 색상 바꾸기
    initScroll();

    menuClose();
    naverMap();
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


function menuClose(){

    $('.btn-menu').on('click',function(){
        $('#gnb-mobile').addClass('collapsed');
        $('.dim').addClass('open');
        $('body').addClass('no-scroll');
    });

    $('.btn-close').on('click',function(e){
        e.preventDefault();
        $('#gnb-mobile').removeClass('collapsed');
        $('.dim').removeClass('open');
        $('body').removeClass('no-scroll');
    });
}

function naverMap(){

    var mapDiv = document.getElementById('testMap');
}
