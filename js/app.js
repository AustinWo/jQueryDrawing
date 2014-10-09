//Problem: No user interaction causes no change to application
//Solution: When user interacts cause change appropriately
var color = $('.selected').css('background-color');

//When clicking on control list items
$('.controls li').click(function() {
  //Deselect sibling element
  $(this).siblings().removeClass('selected');
  //Select clicked element
  $(this).addClass('selected');
  //cache current color
  color = $(this).css('background-color');
});


//When new color  is pressed
$('#revealColorSelect').click(function(){
  //show color select or hide color select
  changeColor();
  $('#colorSelect').toggle();
});

  //Update the new color span
function changeColor () {
  var r = $('#red').val();
  var g = $('#green').val();
  var b = $('#blue').val();

  $('#newColor').css('background-color', "rgb(" + r + "," + g + ", " + b + ")");
}

//When color sliders change
$('input[type=range]').change(changeColor);


//When add color is pressed
  //Append the color to the controls ul
  //Select the new color

//On mouse events on the canvas
  //Draw lines


// Methods used

// .css()
// .addClass() **dont put a . in the selector because already say 'addClass'
// .removeClass()
// .siblings() Get siblings of each element in the set of matched elements, optionaly filtred by a selector
// .toggle() Display or hide matched elements
