var board = document.getElementById('boardInner');
var rowNumber = ['1', '2', '3', '4', '5', '6', '7', '8']
var colNumber = ['1', '2', '3', '4', '5', '6', '7', '8']
var display = 'block'

const renderChessBoard = (useLabels) =>{

  for (var i = 0; i < rowNumber.length; ++i){
    var row = document.createElement('DIV')
    row.className = 'row'
    row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse';
    for (var j = 0; j < rowNumber.length; ++j){
      var square = document.createElement('DIV')
      square.className = 'square'
      		var id = (i + 1) + "-" + (j + 1);

    	  if(row.style.flexDirection === 'row-reverse'){
    		  id = (i + 1) + "-" + (rowNumber.length - j);
    	  }

    	  square.id = id;

      square.style.backgroundColor = j % 2 === 0 ? 'white' : 'black'
      row.appendChild(square)
      square.onclick = function () {
        resetBoard();
        passIdPs(this.id, 'top-right' );
        passIdPs(this.id, 'bottom-right' );
        passIdPs(this.id, 'top-left' );
        passIdPs(this.id, 'bottom-left' );

      };
    }
    board.appendChild(row)
  }
 }

 function resetBoard(){

       var square = document.getElementsByClassName('square')
       for (var j = 0; j < square.length; ++j){
        square[j].style.backgroundColor = j % 2 === 0 ? 'white' : 'black'
       }
 }


function passIdPs(id, pos) {
	var arr = id.split('-');
	var x = parseInt(arr[0]);
	var y = parseInt(arr[1]);

		if (x < 1 || x > 8 || y < 1 || y > 8) {
			return;
		}else{
			var elem = document.getElementById(id);
			elem.style.backgroundColor = 'red';

			if(pos == 'top-right'){
				return passIdPs((x+1) + '-' + (y+1), 'top-right' );
			}else if(pos == 'bottom-right'){
				passIdPs((x+1) + '-' + (y-1), 'bottom-right');
			}else if(pos == 'top-left'){
				passIdPs((x-1) + '-' + (y+1), 'top-left');
			}else if(pos == 'bottom-left'){
				passIdPs((x-1) + '-' + (y-1), 'bottom-left');
			}
		}

	}

renderChessBoard(true)
