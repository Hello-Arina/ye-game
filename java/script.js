// 1 экран

$(document).ready(function(){
  $(".button").click(function(){
    $(".first-screen").addClass ("none");
    $(".second-screen").removeClass ("none");
  })
// 2 экран

  $(".yeti1").click(function(){
    $(".yeti1").addClass ("none");
    $(".yeti2").removeClass ("none");
  })
  $(".yeti2").click(function(){
    $(".yeti2").addClass ("none");
    $(".yeti3").removeClass ("none");
  })

  $(".yeti3").click(function(){
    $(".yeti3").addClass ("none");
    $(".yeti1").removeClass ("none");
  })

  $(".button2").click(function(){
    $(".second-screen").addClass ("none");
    $(".third-screen").removeClass ("none");
  })

// 3 экран

  $(".button3").click(function(){
    $(".third-screen").addClass ("none");
    $(".four-screen").removeClass ("none");
  })


  $(function() {
    $(".icon1").draggable({
      revert: "invalid",
      stop: function(event, ui) {
        $(".clothes1").css("opacity", "1");
        $(".clothes2").css("opacity", "0");
        $(".clothes3").css("opacity", "0");
      }
    });

    $(".icon2").draggable({
      revert: "invalid",
      stop: function(event, ui) {
        $(".clothes1").css("opacity", "0");
        $(".clothes2").css("opacity", "1");
        $(".clothes3").css("opacity", "0");
      }
    });

    $(".icon3").draggable({
      revert: "invalid",
      stop: function(event, ui) {
        $(".clothes1").css("opacity", "0");
        $(".clothes2").css("opacity", "0");
        $(".clothes3").css("opacity", "1");
      }
    });
    
    $(".clothes1, .clothes2, .clothes3").droppable({
      accept: ".icon1, .icon2, .icon3",
      drop: function(event, ui) {
        var clothesClass = $(this).attr("class");
        var iconClass = ui.draggable.attr("class");
        var clothesNumber = clothesClass.charAt(clothesClass.length-1);
        var iconNumber = iconClass.charAt(iconClass.length-1);
        if (clothesNumber == iconNumber) {
          $(this).css("opacity", "1");
        }
      }
    });
  });

// 4 экран

  $(".button4").click(function(){
    $(".four-screen").addClass ("none");
    $(".five-screen").removeClass ("none");
  })

  var slideIndex = 1;
    showSlides(slideIndex);

    $(".arrow2").click(function() {
      slideIndex--;
      showSlides(slideIndex);
    });

    $(".arrow1").click(function() {
      slideIndex++;
      showSlides(slideIndex);
    });

    function showSlides(n) {
      var i;
      var slides = $(".changes img");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides.eq(i).css("display", "none");
      }
      slides.eq(slideIndex - 1).css("display", "block");
    }

// 5 экран

  $(".center").click(function(){
    $(".five-screen").addClass ("flash");
    $(".center").addClass ("none");
  })

  $(".center1").click(function(){
    $(".five-screen").addClass ("none");
    $(".first-screen").removeClass ("none");
  })
})
