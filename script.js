/*WOW*/
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       150,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

$(function(){
    $("#js-footer-btn").on("click",function(e){
        e.preventDefault();

        var planOffest = $("#js-header").offset().top;
        $("html,body").animate({
            scrollTop:planOffest
        },1000)
    });
});

/*Fixed */
$(function(){
    var headH = $("#js-header").height();
    
    $(document).on("scroll",function(){
        var documentScroll = $(this).scrollTop();

        if(documentScroll> headH){
            $("#js-nav-conteiner").addClass("fixed");
        }else{
            $("#js-nav-conteiner").removeClass("fixed");
        }
    })
})



/*Slider*/ 
$('#multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    dots:true,
    responsive: [
        {
        breakpoint: 1000,
        settings: {
        arrows:false
        }}]

    });

    $('#js-brand-shop').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows:false,
        responsive: [
            {
            breakpoint: 1140,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 930,
            settings: {
                slidesToShow: 3
            }
        }]
    
        });
       