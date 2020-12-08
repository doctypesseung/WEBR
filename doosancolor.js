var Link = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i++;
    // }
    $('a').css('color', color);
  }
}
var Body = {
  setColor:function(color){
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    $('body').css('backgroundColor', color);
  },
  setBodyColor:function(color){
    $('#grid').css('borderColor', color);
    $('ol').css('borderColor', color);
  }
}
function nightDay(self) {
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setColor('white');
    Body.setBackgroundColor('black');
    Body.setBodyColor('white');
    self.value = 'day';
    Link.setColor('powderblue');

  } else {
    Body.setColor('black');
    Body.setBackgroundColor('white');
    Body.setBodyColor('black');
    self.value = 'night';
    Link.setColor('black');
  }
}
