var maxPosition = 71;
var player1position = 3;
var player2position = 3;
var player1nos = false;
var player2nos = false;

var resetGame = function(){
  window.location.reload(true);
}

var checkForWinner = function(){
  if (player1position >= maxPosition){
      setTimeout(function(){
        alert('COLLECT YO MONEY PLAYER 1! YOU WON!');
        window.location.reload(true);
      }, 0);
  }
  if (player2position >= maxPosition){
      setTimeout(function(){
        alert('COLLECT YO MONEY PLAYER 2! YOU WON!');
        window.location.reload(true);
      }, 0);
  }
};

$(window).on('keyup', function(event){
  if (event.keyCode === 81){
    player1position = player1position + 2;
    if (!player1nos && event.shiftKey){
      player1nos = true;
      player1position = player1position+20;
    }
    $('.player-1').css('left', player1position+'%');
      checkForWinner();
  }
  if (event.keyCode === 80){
    player2position = player2position + 2;
    if (!player2nos && event.shiftKey){
      player2nos = true;
      player2position = player2position+20;
    }
      $('.player-2').css('left', player2position+'%');
      checkForWinner();
  }
});


