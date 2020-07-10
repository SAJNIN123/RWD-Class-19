$(function () {
    $(window).on('scroll',function (){
        var scrollSize = $(window).scrollTop()

        if(scrollSize < 200){
            $('#backToTop').fadeOut(1000)
        } else {
                $('#backToTop').fadeIn(1000)
            }
    })

    $('#backToTop').on('click',function () {
        $('html,body').animate({
            scrollTop:0
        },2000)
    })

    //Animate Div
    $('#animate').on('click',function () {
        $('#animateAdd').animate({
            width:'500px',
            height:'400px',
            margin:'70px'
        },'2000')
        $('#animateAdd').animate({
           opacity:'0.7',
           borderRedius:'5px'
        },'1000')
    })

    $('#stop').on('click',function () {
        $('#animateAdd').stop()
    })


    $('p').css({
        'color':'blue',
        'font-size':'30px',
      
    })
})  





