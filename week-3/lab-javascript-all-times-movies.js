// this is just a helper function
function stringToMinutes(string) {
  var arr = string.split('h')
  if (arr.length < 2) {
    arr.unshift("0")
  }
  var hours = Number(arr[0])
  var minutes = Number(arr[1].split("min")[0])

  return hours * 60 + minutes
}

// we want to re-use this for different arrays of movies
function turnHoursToMinutes(moviesArray) {

  // 
  let result = moviesArray.map((movie) => {
    console.log("movie.genre : " + movie.genre)
    return {
      title: movie.title,
      duration: stringToMinutes(movie.duration),
      genre: movie.genre
    }
  })

  return result

}

function orderByDuration(array) {

  let result = array.sort((movie1, movie2) => {
    if (movie1.duration < movie2.duration) {
      return -1
    } else if (movie1.duration > movie2.duration) {
      return 1
    } else { // movie1.duration === movie2.duration
      if (movie1.title > movie2.title) {
        return 1
      } else {
        return -1
      }
    }
  })

  console.log("result === array " + result === array)

  return result

}
