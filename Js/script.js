$(function () {
    $('window').on('scroll',function (){
        var scrollSize = $('window').scrollTop()

        if(scrollSize < 200){
            $('#backToTop').hide()
        }else{
            if(scrollSize < 200){
                $('#backToTop').show()
            }
        })
    })  





