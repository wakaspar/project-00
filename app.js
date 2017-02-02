console.log('app.js linked');

var raceCount;
var screenWidth = $(window).width();

// Track Length
if (screenWidth > 1024){
  raceCount = 59;
} else if (screenWidth > 768){
  raceCount = 49;
} else if (screenWidth > 480){
  raceCount = 39;
} else if (screenWidth < 480){
  raceCount = 29;
}
console.log('inital raceCount: '+raceCount);

if (raceCount === 1) {
  console.log('game over');
}


  // PlayerOne Functionality
  $(document).on("keypress", function p1Handler(event){
    if((event.key === 'a') && (raceCount > 1)){
      raceCount--;
      console.log('raceCount: '+raceCount);
      var spaceShip = '>=>';
      var raceStr = " " + spaceShip;
      $('#p1').append(raceStr);
  }
  });

  // PlayerTwo Functionality
  $(document).on("keypress", function p2Handler(event){
    if((event.key === 'l') && (raceCount > 1)){
      raceCount--;
      console.log('raceCount: '+raceCount);
      var spaceShip = '<=<';
      var raceStr = " " + spaceShip;
      $('#p2').prepend(raceStr);
    }
  });

  if (raceCount === 1) {
    console.log('game over');
  }
