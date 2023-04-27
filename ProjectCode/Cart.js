
let users = JSON.parse(localStorage.getItem('users'));
console.log(users);
let userRow = "";
for(const index in users) {
	userRow += `<tr>
	<td>${Number(index)+1}</td>
	<td>${users[index].name}</td>
	<td>${users[index].email}</td>
	<td>${users[index].phone_number}</td>
	
	</tr>`
}



document.querySelector('.table-body').innerHTML = userRow;


// let product = localStorage.getItem(product);
// let quantity = localStorage.getItem(quantity);
// let price = localStorage.getItem(price);

// document.getElementById("product").innerHTML = product;
// document.getElementById("quantity").innerHTML = quantity;
// document.getElementById("price").innerHTML = price;

// console.log(product);
// console.log(quantity);
// console.log(price);

