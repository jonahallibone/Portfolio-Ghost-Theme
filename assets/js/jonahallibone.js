$(function() {

  /*=********=*/
  /*** Menu ***/
  /*=********=*/

  //Burger Flip

  var burger_queue = new Array();

  var hamburgerFlip = function() {
    $(".burger").removeClass("open");
    $(".burger .condiments:nth(1)").addClass("fade-off");
    $(".burger .condiments:first").addClass("rotate-45");
    $(".burger .condiments:last").addClass("rotate-neg-45");
    $(".burger .condiments").removeClass("salmon").addClass("white");
    $("#menu").addClass("reveal");
  };

  var hamburgerUnflip = function() {
    $(".burger").addClass("open");
    $(".burger .condiments:nth(1)").removeClass("fade-off");
    $(".burger .condiments:first").removeClass("rotate-45");
    $(".burger .condiments:last").removeClass("rotate-neg-45");
    $(".box:last").removeClass("fade-off").addClass("fade-in");
    $(".burger .condiments").removeClass("white").addClass("salmon");
    $("#menu").removeClass("reveal");
  };

  //Create function queue for the hamburger animation
  burger_queue = [hamburgerFlip,hamburgerUnflip];

  $(".burger").on('click',function() {
    //get hamburer animation
    burger_queue[0]();
    //reverse the array
    burger_queue.reverse();
    //get menu animation
  });


});
