$(function () {
   $(window).on("resize",function () {
        //1.获取窗口宽度
       let clientW = $(window).width();
       //2.设置临界值
       console.log(clientW);
       let isShowBigImg = clientW >= 800;
       //3.获取所有的item
       let $allItems = $("#lk-carousel .item");
       // console.log($allItems);
       //4.遍历
       $allItems.each(function(index,item){
           console.log(item);
           //4.1取出图片路径
           let src = isShowBigImg ? $(item).data('lg-img') : $(item).data('sm-img');
           let imgUrl = 'url("'+ src +'")';

           //4.2设置背景
           $(item).css({
               backgroundImage : imgUrl
           });
           // 4.3设置img标签
           if (!isShowBigImg){
               let $img = "<img src='" + src + "'>";
               $(item).empty().append($img);
           }else {
               $(item).empty();
           }

       });
   });
    $(window).trigger("resize");

    let allUlLi = $('#lk-header .nav li');

    // $('allUlLi).each((index,item){
    //
    // })
    $(allUlLi).on('click',function () {
        $('html,body').animate({scrollTop : $('#lk-hot').offset().top},1000);
    })

    // $('#lk-header .nav').each(function(index,item){
    //
    // })

});