// Characters
const mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
}

const profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
}

const characters = [mrGreen, profPlum]

// Weapons
const weapons = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 }
]

// const rooms = [
//   { name: "Dinning Room" }, { name: "Conservatory" }
// ]
const rooms = ["Dinning Room", "Conservatory"]


function randomArrayPosition(length) {
  return Math.floor(Math.random() * length)
}


// define a function.
function randomSelector(array) {
  if (array.length === 0) {
    return undefined
  }

  // to select a random position in the array:
  let pos = randomArrayPosition(array.length)

  return array[pos]
}

function pickMistery(roomsArr, charArr, weaponArr) {
  let room = randomSelector(roomsArr)
  let character = randomSelector(charArr)
  let weapon = randomSelector(weaponArr)
  return [room, character, weapon]
}

function revealMistery(mistery) {
  return `${mistery[1].first_name} ${mistery[1].last_name} killed Mr.Boddy using the ${mistery[2].name} in the ${mistery[0].name}!!!!`  
}

let randomMistery = pickMistery(rooms, characters, weapons)
console.log(revealMistery(randomMistery))
