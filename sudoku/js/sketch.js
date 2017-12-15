// set the default state
/*
// This default state I am using for checking my right output for 
var defaultState = [
        [0, 3, 4, 6, 7, 8, 9, 1, 2], //deleted 5 insted of 0
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
        ];
        */

var defaultState = [
  [3, 0, 0, 6, 1, 0, 0, 0, 8],
  [0, 0, 2, 0, 3, 0, 7, 6, 0],
  [0, 0, 0, 7, 5, 0, 2, 9, 0],
  [0, 9, 0, 8, 0, 0, 0, 1, 0],
  [0, 4, 0, 1, 7, 3, 0, 5, 0],
  [0, 5, 0, 0, 0, 9, 0, 2, 0],
  [0, 3, 7, 0, 4, 1, 0, 0, 0],
  [0, 2, 5, 0, 8, 0, 9, 0, 0],
  [4, 0, 0, 0, 9, 7, 0, 0, 2]
];

window.state = defaultState;

flag = 0; //this is used to start the timer (when a user enters a number into the box)

window.onload = function () {
	setDefaultState();
	document.querySelectorAll('.tile:not(:disabled)').forEach((el) => {
		el.addEventListener('keyup', numberAdded)	
	})
}

function setDefaultState() {
	for (line in defaultState) {
		for (tile in defaultState[line]) {
			addNumber(
				defaultState[line][tile],
				document.getElementById(`${line}-${tile}`),
				true
			)
		}
	}
}
function numberAdded(e) {
  if (flag === 0){
  watch.start();
  }
  flag +=1;
	let code = e.keyCode || e.which;
	let el = e.target;

	if (code !== 13) return;
	if (! el.value.match(/^[1-9]{1}$/)) return;

	let [x, y] = el.id.split('-');

	el.className = checkCorrectMove(parseInt(el.value), x, y) ? 'tile placed' : 'tile misplaced'
  gameOver(e);
	state[x][y] = parseInt(el.value);
}

function addNumber(number, el, disable) {
	if (number === 0) return
	el.value = number;
	el.disabled = disable;
	el.className = 'tile static'
}

// check if the input number is correct 
function checkCorrectMove(number, x, y) {
	let horizontalDuplicate = !! state[x].filter((num) => num === number).length	// check horizontal way 
	let verticalDuplicate = !! state.map(line => line[y]).filter((num) => num === number).length	// check vertical way

	let squareX = Math.floor(x / 3) * 3	// check square 3 * 3
	let squareY = Math.floor(y / 3) * 3

	let squareDuplicate = false
	for (x = squareX; x < squareX + 3; x++) {
		for (y = squareY; y < squareY + 3; y++) {
			if (state[x][y] === number) {
				squareDuplicate = true
				break
			}
		}
	}
	return ! (horizontalDuplicate || verticalDuplicate || squareDuplicate);
}

// check when the game is finish
// the timer will stop automatically after the last correct input
// if the player does not compleat it correctly the timer will continue until the player will compleate it corretly
function gameOver(e) {
  let el = e.target;
  
  isGameOver = true;
  for (x = 0; x < 9; x++){
    for (y = 0; y < 9; y++){  

      if ((defaultState[x][y] === 0) && (checkCorrectMove(el.value, x, y))){
        isGameOver = false;
      }
    }
  }
  if(isGameOver === true){
  watch.stop();
  console.log("stoping watch game is over");

  }
}
// STOPE WATCH!!
var timer = document.getElementById('timer');
var watch = new Stopwatch(timer);


function Stopwatch(elem) {
  var time = 0;
  var offset;
  var interval;

  function update() {
    if (this.isOn) {
      time += delta();
    }
    
    elem.textContent = timeFormatter(time);
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;

    offset = now;

    return timePassed;
  }

// Format the time 
  function timeFormatter(time) {
    time = new Date(time);

    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    //var milliseconds = time.getMilliseconds().toString();

    if (hours.length < 2){
    	hours = '0' + hours;
    }

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    return hours + ' : ' + minutes + ' : ' + seconds;
  }
//When checking on console - watch.start(); 
  this.start = function() {
    interval = setInterval(update.bind(this), 10);
    offset = Date.now();
    this.isOn = true;
    var okeyTime = time;
    okeyDisplayS = timeFormatter(time);
  //};

  } 
// the purpose of saving the time for the user is to output and compare the score
  this.save = function(){
  	var okeyTime = time;
  	//okeyDisplay = timeFormatter(time);
  	console.log(okeyTime);
  }
//When checking on console - watch.score(); 
   this.socre = function(){	// count the time to the score 
   	if (time < 35700 ){  // If 1min 40s is about ~10k, then 35700 is about 5min.
   		// userObj.score += 100;
   		var usrObj = JSON.parse(localStorage[localStorage.loggedInUsrEmail]);
   		// setScore(100);
  		console.log("Adding the score 100 to a user");
   	}
    //>60000  
    else if ((times < 60000) || (time > 35700)){
      console.log("Adding the score 90 to a user");
    }
    else if ((times < 7000) || (time > 60000)){
      console.log("Adding the score 80 to a user");
    }
   	else if ((times < 80000) || (time > 70000)){
      console.log("Adding the score 70 to a user");
    }
    else if ((times < 90000) || (time > 80000)){
      console.log("Adding the score 60 to a user");
    }
    else if ((times < 100000) || (time > 90000)){
      console.log("Adding the score 50 to a user");
    }
    else if ((times < 110000) || (time > 100000)){
      console.log("Adding the score 40 to a user");
    }
    else if ((times < 120000) || (time > 110000)){
      console.log("Adding the score 30 to a user");
    }
    else if ((times < 130000) || (time > 120000)){
      console.log("Adding the score 20 to a user");
    }
    else {
      console.log("Adding the score 10 to a user");
    }
   		   	
 } 
//When checking on console - watch.stop(); 
  this.stop = function() {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
    
  };
//When checking on console - watch.reset(); 
  this.reset = function() {
    time = 0;
    update();
  };

  this.isOn = false;
}
