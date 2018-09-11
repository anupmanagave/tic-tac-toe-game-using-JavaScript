//restart button
var restart= document.querySelector('#b1');
var squares=document.querySelectorAll('td');
var player=1;
var turn = document.querySelector('#turn');
//grabs all the squares
function clearBoard(){
  for(var i=0; i<squares.length;i++){
    squares[i].textContent='';
    turn.textContent='Player1 = X;   Player2 = O';
    document.getElementById("turn").style.color = "black";
    document.getElementById("turn").style.fontSize = "x-large";
  }
}

//clear all squares
restart.addEventListener('click',clearBoard);

//to change the square marker
function changeMarker(){
  //for player1
  if(player==1){
    if(this.textContent === ''){
      this.textContent='X';
    }else if (this.textContent ==='X') {
      this.textContent='';
    }
  }

//for player 2
  else if (player==2) {
    if(this.textContent === ''){
      this.textContent='O';
    }else if (this.textContent ==='O') {
      this.textContent='';
    }
  }
}


//for loop to add event listener
for (var i=0;i<squares.length;i++){
  squares1[i].addEventListener('click', changeMarker)
}

//to set player's turn

var nextButton= document.querySelector('#next');

nextButton.addEventListener('click',changeTurn)

//to change turn after clicking on next button
function changeTurn(){
  var winner=won();
  console.log(winner);
  var tie=1;
  for(var j=0;j<squares.length;j++){
    if(squares[j].textContent==''){
      tie=0;
    }
  }
  if(winner=='X'){
    turn.textContent='Player 1 wins!!!'
    document.getElementById("turn").style.color = "red";
    document.getElementById("turn").style.fontSize = "xx-large";
  }else if(winner=='O'){
      turn.textContent='Player 2 wins!!!'
      document.getElementById("turn").style.color = "red";
      document.getElementById("turn").style.fontSize = "xx-large";
  }else if(tie==1){
    turn.textContent='Match Tied!!!'
    document.getElementById("turn").style.color = "red";
    document.getElementById("turn").style.fontSize = "xx-large";
  }
  else if(player==1){
    turn.textContent='Player 2\'s turn';
    player=2;
  }
  else if (player ==2) {
    turn.textContent='Player 1\'s turn';
    player=1;
  }
}

//to check if anyone won?
function won(){
  //check horizontal
  if((squares[0].textContent==squares[1].textContent)&&(squares[1].textContent==squares[2].textContent)){
    return squares[0].textContent;
  }else if((squares[3].textContent==squares[4].textContent)&&(squares[4].textContent==squares[5].textContent)){
    return squares[3].textContent;
  }else if((squares[6].textContent==squares[7].textContent)&&(squares[7].textContent==squares[8].textContent)){
    return squares[6].textContent;
  }
  //check vertical
else if((squares[0].textContent==squares[3].textContent)&&(squares[3].textContent==squares[6].textContent)){
  return squares[0].textContent;
}else if((squares[1].textContent==squares[4].textContent)&&(squares[4].textContent==squares[7].textContent)){
  return squares[1].textContent;
}else if((squares[2].textContent==squares[5].textContent)&&(squares[5].textContent==squares[8].textContent)){
  return squares[2].textContent;
}
  //check diagonal
else if((squares[0].textContent==squares[4].textContent)&&(squares[4].textContent==squares[8].textContent)){
  return squares[0].textContent;
}else if((squares[2].textContent==squares[4].textContent)&&(squares[4].textContent==squares[6].textContent)){
  return squares[2].textContent;
}
else return '';
}
