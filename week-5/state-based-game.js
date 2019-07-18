
const state = {
  playing: true
}

// defining a function
let handlePauseClick = () => {
  if (state.playing) {
    state.playing = false
  } else {
    state.playing = true
  }
  showGame()
}

// only access the DOM from here
let showGame = () => {
  if (state.playing) {
    // show that the game was paused
    document.getElementById('playing').style.display = 'block'
    document.getElementById('paused').style.display = 'none'
    // change the button text  
    document.getElementById('btn-pause').innerText = 'Pause Game'
  } else {
    // show that the game was paused
    document.getElementById('playing').style.display = 'none'
    document.getElementById('paused').style.display = 'block'
    // change the button text  
    document.getElementById('btn-pause').innerText = 'Resume Game'
  }
}

window.onload = () => {
  document.getElementById('btn-pause').onclick = handlePauseClick

  showGame()
}
