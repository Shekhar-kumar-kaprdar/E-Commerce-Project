
function productData(){
	
	let data = {
		product : document.getElementById("product").value,
		quantity : document.getElementById("quantity").value,
		price :  document.getElementById("price").value,
	}
	localStorage.setItem("data", JSON.stringify(data));
    alert("DATA STORED :) ")
}




