$('#container').css({
  'width': '50%', 
  'margin':'auto',
  'border-radius':'10px',
  'border': '5px solid #a89ca2',
  'align-items':'center',
  'text-align':'center'
});

$('.myDiv').css({
  'background-color': 'red',
   'font-size': '24px',
   'font-weight': 'bold',
  'text-align': 'center',
  'border-radius':'10px',
  'width':'90%',
  'margin':'auto'
 });

$('#header').css({
  'width':'50%',
  'margin':'auto',
  'align-items':'center',
  'text-align': 'center'
 
});

$('.cool-img2').attr({
  'src': 'https://res.cloudinary.com/dw8jueqoy/image/upload/v1697911101/geekLogo_cizftg.png',
  'alt': 'geek logo',
  'width': '100px',
  'display': 'inline-block',
});


$('h1').text('jQuiz!').css({
  'color': 'orange',
  'display': 'inline-block',
  'text-align':'center'
});

$('.myButton').css({
  'width':'100%',
  'padding':'7px',
  'margin':'auto',
  'border-radius':'5px'
});

$('.myButton').on('mouseover', function() {
  // 'this' is the element that triggered the mouseover event
  $(this).css('background-color', 'orange');
});

$('.myButton').on('mouseleave', function() {
  // 'this' is the element that triggered the mouseover event
  $(this).css('background-color', '#e3e3e3');
});

$('.main').css({
  'width':'100%',
  'margin': 'auto'
});

var rightanswer = $('<p>').text('Correct!');
rightanswer.css('color', 'green');
var wronganswer = $('<p>').text('Incorrect');
wronganswer.css('color', 'red');


$('.buttons').css({
  'padding':'10px',
  'width':'80%',
  'margin':'auto'
});

$('#display-answer').css({
  'text-align':'center',
  'width':'80%',
  'padding':'7px',
  'margin':'auto'
});


$('#correct').click(function () {
  $('#display-answer').append(rightanswer);
  $('.nope').prop('disabled', true);
});

$('#nope1').click(function () {
  $('#display-answer').append(wronganswer);
  $('#nope2').prop('disabled', true);
  $('#nope3').prop('disabled', true);
  $('#correct').prop('disabled', true);
});

$('#nope2').click(function () {
  $('#display-answer').append(wronganswer);
  $('#nope1').prop('disabled', true);
  $('#nope3').prop('disabled', true);
  $('#correct').prop('disabled', true);
});

$('#nope3').click(function () {
  $('#display-answer').append(wronganswer);
  $('#nope2').prop('disabled', true);
  $('#nope1').prop('disabled', true);
  $('#correct').prop('disabled', true);
});