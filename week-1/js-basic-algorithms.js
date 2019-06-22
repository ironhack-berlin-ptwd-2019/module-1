let hacker1 = "Peter"

console.log(`The driver's name is ${hacker1}`)

let hacker2 = prompt("tell me your name")

console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else {
  // same length
}

// for loops

let result = ""
for (let i = 0; i < hacker2.length; i++) {
  console.log(`index ${i}`)
  console.log(hacker2[i])
  result += hacker2[i].toUpperCase()
  result += " "
  console.log(hacker2[i] + result)
}
console.log("RESULT : ")
console.log(result)

// reversal

let result2 = ""
for (let i = 0; i < hacker2.length; i++) {
  console.log(`index ${i}`)
  console.log(hacker2[i])
  result2 = hacker2[i] + result2
  console.log(result2)
}
console.log("RESULT : ")
console.log(result2)

// reversal

let result3 = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(`index ${i}`)
  console.log(hacker2[i])
  result3 += hacker2[i]
  console.log(result3)
}
console.log("RESULT : ")
console.log(result3)

// lexicographical order
if (hacker1 < hacker2) {
  "Hacker 1 first"
} else {
  "Hacker 2 first"
}
