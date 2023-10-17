$(document).ready(function() {
  let turn = 'X';
  
  function checkWin() {
    let cells = $('.cell');
    for (let i = 0; i < 3; i++) {
      // Check rows
      if (cells[i * 3].innerText === turn &&
          cells[i * 3 + 1].innerText === turn &&
          cells[i * 3 + 2].innerText === turn) {
        return true;
      }
      // Check columns
      if (cells[i].innerText === turn &&
          cells[i + 3].innerText === turn &&
          cells[i + 6].innerText === turn) {
        return true;
      }
    }
    // Check diagonals
    if (cells[0].innerText === turn && cells[4].innerText === turn && cells[8].innerText === turn) {
      return true;
    }
    if (cells[2].innerText === turn && cells[4].innerText === turn && cells[6].innerText === turn) {
      return true;
    }
    return false;
  }

  function checkStalemate() {
    let cells = $('.cell');
    let emptyCell = false;
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerText == '') {
            emptyCell = true;
        }
    }
    console.log(emptyCell);
    if (!emptyCell) {
        return true;
    } else {
        return false;
    }
  }


  $('.cell').click(function() {
    if (this.innerText === '') {
      this.innerText = turn;
      $(this).addClass('btn-'+turn);
      if (checkWin()) {
        alert(turn + ' wins!');
        return;
      }
      if (checkStalemate()) {
        alert('dang! its a stalemate!');
      }
      if (turn == 'X') {
        turn = 'O';
      } else {
        turn = 'X';
      }
      $('#turn').text(turn);
      $('#turn').attr('class','turn-'+ turn);

    }
  });

  $('#reset').click(function() {
    location.reload();
  });
});
