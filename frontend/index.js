function addProduct() {
    fetch("http://localhost:4000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            Pname: Pname.value,
            price: price.value,
            quantity: quantity.value
        })
    }).then(() => loadProducts());
}
function loadProducts(){
    fetch("http://localhost:4000/api/products")
    .then(responces => responces.json())
    .then(data => {
        table.innerHTML = "";
        data.forEach(p => {
            table.innerHTML += `<tr>
            <td>${p.Pname}</td>
            <td>${p.price}</td>
            <td>${p.quantity}</td>
            </tr>`;
        });
    });
}
loadProducts();