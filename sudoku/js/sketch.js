// set the default state
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
//this is used to start the timer (when a user enters a number into the box)
flag = 0; 
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

	if (checkWin()) alert("You won.")

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

// check when the user win 
function checkWin () {
	for (line in state) {
		for (tile in state[line]) {
			let el = document.getElementById(`${line}-${tile}`);

			if (el.className !== 'tile static' && el.className !== 'tile placed') {
				return false
			} 
		}
	}

	return true
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
//When checking on console - watch.save(); 
  this.save = function(){
  	var okeyTime = time;
  	//okeyDisplay = timeFormatter(time);
  	console.log(okeyTime);
  }
// //When checking on console - watch.score(); 
//    this.socre = function(){	// count the time to the score 
//    	if (time < 35700 ){  // If 1min 40s is about ~10k, then 35700 is about 5min.
//    		// userObj.score += 100;
//    		var usrObj = JSON.parse(localStorage[localStorage.loggedInUsrEmail]);
//    		// setScore(100);
//   		console.log("Adding the score 100 to a user");
//    	}
//     //if ((6000<times) || (time > 35700)){
//       //}
//     }
//    	else if( 60000 < time > 35700){
//    		// userObj.score += 90;
//    		console.log("Adding the score 90 to a user");
//    	}
//    	else if( 70000 < time > 60000){
//    		console.log("Adding the score 80 to a user");
//    	}
//    	else if( 80000 < time > 70000){
//    		console.log("Adding the score 70 to a user");
//    	}
//    	else if( 90000 < time > 80000){
//    		console.log("Adding the score 60 to a user");
//    	}
//    	else if( 100000 < time > 90000){
//    		console.log("Adding the score 50 to a user");
//    	}
//    	else if( 11000 < time > 100000){
//    		console.log("Adding the score 40 to a user");
//    	}
//    	else if( 120000 < time > 110000){
//    		console.log("Adding the score 30 to a user");
//    	}
//    	else if( 13000 < time > 120000){
//    		console.log("Adding the score 20 to a user");
//    	}
//    	else ( 140000 < time > 130000){
//    		console.log("Adding the score 10 to a user");
//    	}
   		   	

// //   } 
//When checking on console - watch.stop(); 
  this.stop = function() {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
    window.onload = () => watch.stop()
  };
//When checking on console - watch.reset(); 
  this.reset = function() {
    time = 0;
    update();
  };

  this.isOn = false;
}
