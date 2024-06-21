localStorage.setItem('date', 'today is 30th of march')

const text = document.querySelector('#text')

text.innerHTML = localStorage.getItem('date')

localStorage.setItem('age', 15)

const text2 = document.querySelector('#text2')

text2.innerHTML = localStorage.getItem('age')

let arr = ['bmw', 'mercedes', 'pagani', 'ferrari', 'range rover']
console.log(arr)

// localStorage.setItem('cars', arr)
localStorage.setItem('cars', JSON.stringify(arr))

//let getCars = localStorage.getItem('cars')
// console.log(getCars)
// console.log(getCars[0])

let getCarsCorrect = JSON.parse(localStorage.getItem('cars'))
console.log(getCarsCorrect)
console.log(getCarsCorrect[0])

let obj = {
	userName: 'Emiliya',
	userDay: 26,
	userPass: 9128,
}
console.log(obj)

//localStorage.setItem('myUser'.obj)
localStorage.setItem('myUser', JSON.stringify(obj))

//let getObj = localStorage.getItem('myUser')
//console.log(getObj)

let getCorrectObj = JSON.parse(localStorage.getItem('myUser'))
console.log(getCorrectObj)
