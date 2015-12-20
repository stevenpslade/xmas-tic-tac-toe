$(function() {
  
  var player = 0

  var player0 = []
  var player1 = []

  //winning combos
  var combo1 = ["one", "two", "three"]
  var combo2 = ["four", "five","six"]
  var combo3 = ["seven", "eight", "nine"]
  var combo4 = ["one", "four", "seven"]
  var combo5 = ["two", "five", "eight"]
  var combo6 = ["three", "six", "nine"]
  var combo7 = ["one", "five", "nine"]
  var combo8 = ["three", "five", "seven"]

  function checkWinner(array) {
    var comboCount1 = 0
    var comboCount2 = 0
    var comboCount3 = 0
    var comboCount4 = 0
    var comboCount5 = 0
    var comboCount6 = 0
    var comboCount7 = 0
    var comboCount8 = 0
    array.forEach(function(index) {
      if (combo1.includes(index)) {
        comboCount1 += 1;
      }
      if (combo2.includes(index)) {
        comboCount2 += 1;
      }
      if (combo3.includes(index)) {
        comboCount3 += 1;
      }
      if (combo4.includes(index)) {
        comboCount4 += 1;
      }
      if (combo5.includes(index)) {
        comboCount5 += 1;
      }
      if (combo6.includes(index)) {
        comboCount6 += 1;
      }
      if (combo7.includes(index)) {
        comboCount7 += 1;
      }
      if (combo8.includes(index)) {
        comboCount8 += 1;
      }
    });
    if (comboCount1 === 3 || comboCount2 === 3 || comboCount3 === 3 || comboCount4 === 3 || comboCount5 === 3 || comboCount6 === 3 || comboCount7 === 3 || comboCount8 === 3) {
      return true;
    }
  }

  function clearGrid() {
      $("div").removeClass("rudolph tree");
      player0 = []
      player1 = []
    }

  $( ".grid" ).on('click', function() {
    if (player === 0 && !(player0.includes(this.id) || player1.includes(this.id))) {
      $(this).addClass("rudolph");
      player0.push(this.id);
      player = 1;
      $(".player1").removeClass("shadow");
      $(".player2").addClass("shadow");
      if (checkWinner(player0)) {
        $(".player2").hide('explode');
        setTimeout(function() { clearGrid(); }, 2000);
        setTimeout(function() { $(".player2").show('explode'); }, 2000);
      }
    } else if (player === 1 && !(player0.includes(this.id) || player1.includes(this.id))) {
      $(this).addClass("tree");
      player1.push(this.id);
      player = 0;
      $(".player2").removeClass("shadow");
      $(".player1").addClass("shadow");
       if (checkWinner(player1)) {
        $(".player1").hide('explode');
        setTimeout(function() { clearGrid(); }, 2000);
        setTimeout(function() { $(".player1").show('explode'); }, 2000);
      }
    }
  });

});