$('.allBtn').click(function(){
    $('nav').animate({left:0})
});

$('.close_btn').click(function(){
    $('nav').animate({left:'-100%'}) //or ({left:-300}) 단, %를 사용할 땐 ''를 써줘야함
})

$(window).resize(function(){
    if($('nav').removeAttr('style'));
});
//nav에 스크립트가 적용된 게 있으면 화면이 resize 될 때 없애준다