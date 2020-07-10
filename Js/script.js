$(function () {
    $(window).on('scroll',function (){
        var scrollSize = $(window).scrollTop()

        if(scrollSize < 200){
            $('#backToTop').hide(1000)
        } else {
                $('#backToTop').show(1000)
            }
        })
})  





