const numberOfCupsCoffee = 'zero'
const fullName = `Erika`

console.log(`${fullName} drinks ${numberOfCupsCoffee} cups of coffee each day.`)

const userName = window.prompt(`What is your name?`)
console.log(`hello there ${userName}!`)

const firstOperand = parseFloat(
  window.prompt(`Please give me two numbers, what is your first number?`)
)

const secondOperand = parseFloat(
  window.prompt(`Please give me two numbers, what is your second number?`)
)

const sumNumber = secondOperand + firstOperand
console.log(sumNumber)
const difference = secondOperand - firstOperand
console.log(difference)
const product = secondOperand * firstOperand
console.log(product)
const quotient = secondOperand / firstOperand
console.log(quotient)
const remainder = firstOperand % secondOperand
console.log(remainder)

const numbers = [
  7,
  53,
  53,
  43,
  70,
  78,
  54,
  23,
  92,
  92,
  95,
  93,
  30,
  56,
  73,
  94,
  74,
  9,
  15,
  21,
  38,
  18,
  98,
  9,
  12,
  5,
  22,
  84,
  17,
  26,
  44,
  47,
  5,
  63,
  21,
  75,
  52,
  14,
  5,
  49,
  3,
  42,
  28,
  65,
  47,
  32,
  40,
  7,
  87,
  64,
  57,
  5,
  46,
  22,
  46,
  99,
  80,
  70,
  43,
  64,
  55,
  78,
  80,
  91,
  81,
  42,
  10,
  51,
  21,
  64,
  47,
  88,
  50,
  67,
  1,
  16,
  64,
  1,
  25,
  66,
  54,
  98,
  80,
  50,
  80,
  98,
  79,
  44,
  75,
  83,
  47,
  76,
  30,
  37,
  22,
  21,
  54,
  52,
  23,
  43,
]
let min = numbers[0]
let max = numbers[0]
let sum = 0
let average = sum / numbers.length

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < min) min = numbers[i]
}
console.log(min)

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i]
}
console.log(max)

let newSum = 0
for (let i = 0; (i = numbers.length); i++) {
  newSum = newSum + 1
}
console.log(newSum)

// let average = numbers[0]
average = newSum / numbers.length
