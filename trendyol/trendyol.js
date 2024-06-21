const prodList = document.querySelector('#prodList')
const cartList = document.querySelector('#cartList')

const shoes = [
	{
		id: 1,
		brand: 'Nike',
		count: 1,
		price: 120,
	},
	{
		id: 2,
		brand: 'Adidas',
		count: 1,
		price: 90,
	},
	{
		id: 3,
		brand: 'NewBalance',
		count: 1,
		price: 150,
	},
	{
		id: 4,
		brand: 'Converse',
		count: 1,
		price: 90,
	},
	{
		id: 5,
		brand: 'MiuMiu',
		count: 1,
		price: 400,
	},
	{
		id: 6,
		brand: 'Asics',
		count: 1,
		price: 130,
	},
	{
		id: 7,
		brand: 'Lumber Jack',
		count: 1,
		price: 30,
	},
]

let cart = []

if (localStorage.getItem('cart')) {
	cart = JSON.parse(localStorage.getItem('cart'))
}

shoes.forEach(data => {
	console.log(data)
	prodList.innerHTML += `

		<li>
			${data.brand} (${data.price}$)
			<button onclick="addToCart(${data.id})">Add to Cart</button>
		</li>
    <br>
  `
})

function addToCart(id) { 
	console.log(id)
	let checkCart = cart.find(data => data.id == id)
	if (checkCart) {
		checkCart.count += 1
	} else {
		const product = shoes.find(data => data.id == id)
		cart.push(product)
	}
	localStorage.setItem('cart', JSON.stringify(cart))
	showCartItems()
}

function showCartItems() {
	cartList.innerHTML = ''
	cart.forEach(data => {
		cartList.innerHTML += `
		<li>
		${data.brand}
		<button onclick="changeCount('inc', '${data.id}')">+</button>
		${data.count}
		<button onclick="changeCount('dec', '${data.id}')">-</button>
		</li>
		`
	})
}

function changeCount(type, id) {
	if (type == 'inc') {
		let checkCart = cart.find(data => data.id == id)
		checkCart.count += 1
	} else {
		let checkCart = cart.find(data => data.id == id)
		checkCart.count -= 1
		if (checkCart.count == 0) {
			const findInd = cart.findIndex(data => data.id == id)
			cart.splice(findInd, 1)
		}
	}
	localStorage.setItem('cart', JSON.stringify(cart))
	showCartItems()
}
