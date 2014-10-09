//Problem: No user interaction causes no change to application
//Solution: When user interacts cause change appropriately
var color = $('.selected').css('background-color');
// document.getElementByTagName('canvas')[0] is the same as $('canvas')[0] to get the html element object because we need the .getContext();
var $canvas = $('canvas');
var context = $canvas[0].getContext('2d');
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$('.controls').on('click', 'li', (function() {
  //Deselect sibling element
  $(this).siblings().removeClass('selected');
  //Select clicked element
  $(this).addClass('selected');
  //cache current color
  color = $(this).css('background-color');
}));


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


//When 'add color' is pressed
$('#addNewColor').click(function() {
  //Append the color to the controls ul
  var $newColor = $('<li></li>');
  $newColor.css('background-color', $('#newColor').css('background-color'));
  $('.controls ul').append($newColor)
  //Select the new color
  $newColor.click();
});


//On mouse events on the canvas (this is mostly done in plain Javascript)
$canvas.mousedown(function(e) {
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if(mouseDown) {
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.strokeStyle = color;
  context.stroke();
  lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup()
})



  //Draw lines example without mouse
  // context.beginPath();
  // context.moveTo(10, 10);
  // context.lineTo(20, 10);
  // context.lineTo(20, 20);
  // context.lineTo(10, 20);
  // context.closePath();
  // context.stroke();
  // context.strokeStyle();



// Methods used

// .css()
// .addClass() **dont put a . in the selector because already say 'addClass'
// .removeClass()
// .siblings() Get siblings of each element in the set of matched elements, optionaly filtred by a selector
// .toggle() Display or hide matched elements
// .on() eg$ ('.controls').on('click', 'li', (function() {})); bind .controls on click with the function performing on li

// HTML element methods to draw the line
// .beginPath()
// .moveTo()
// .lineTo()
// .closePath()
// .stroke() draw line from 2 coordinates

// jQuery methods for drawing
// .mousedown()
// .mosemove()
// .moseup()
// .mouseleave()
