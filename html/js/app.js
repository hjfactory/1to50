const cellCount = 5;

var currNum = 1;
var nextNum = cellCount * cellCount;
var maxNum = 50;

window.onload = function() {
}

function createCells(count){
  var box = document.getElementById("box");

  while(box.hasChildNodes()){ 
    cell.removeChild( cell.firstChild ); 
  }

  for(var i=0; i<count; i++){
    var row = document.createElement("div");
    row.className = "row";
    box.appendChild(row);
    for(var j=0; j<count; j++){
      var col = document.createElement("div");
      col.className = "col";
      row.appendChild(col);
    }
  }
}

function startGame(){
  createCells(cellCount);

  showGame();

  startTimer();

  // 숫자 생성 및 섞기
  var cols = document.getElementsByClassName("col");
  var nums = Array.from({length: cols.length}, (v, i) => i+1); // 1..25
  for(var i=0; i<cols.length; i++){
    var idx = Math.floor(Math.random() * nums.length);

    cols[i].textContent = (nums[idx]);
    nums.splice(idx, 1);
  }

  currNum = 1;
  nextNum = cols.length;

  for(var i=0; i<cols.length; i++){
    cols[i].addEventListener("click", function(e){
      var num = parseInt(e.target.textContent);
      if(num === currNum){
        currNum++;
        nextNum++;

        if(nextNum <= maxNum){
          e.target.textContent = nextNum;
        }
        else {
          e.target.textContent = "";
        }

        if(num == maxNum){
          completeGame();
        }
      }
    });
  }
}

function completeGame(){
  stopTimer();
  alert("성공");
}

function showWelcome(){
  document.getElementById("welcomePane").style.visibility = "visible";
  document.getElementById("gamePane").style.visibility = "hidden";
}

function showGame(){
  document.getElementById("welcomePane").style.visibility = "hidden";
  document.getElementById("gamePane").style.visibility = "visible";
}

var timer;
var startTime;
var elapsedTime;
function startTimer() {
  startTime = new Date();

  timer = setInterval(function() {
    var nowTime = new Date();
    elapsedTime = (nowTime.getTime() - startTime.getTime()) / 1000;
    document.getElementById('stopWatch').textContent = elapsedTime.toFixed(3); // 소숫점 3글자 표시 https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
  }, 1)
}
function stopTimer() {
  clearInterval(timer);
}

function showScores(){
  var datas = [
    {name: "Humphrey",  score: 50.242},
    {name: "Jeffrey",   score: 51.471},
    {name: "Ariana",    score: 60.412}
  ];
}