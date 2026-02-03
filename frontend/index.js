function addProduct() {
    const token = localStorage.getItem("jwt_token");
    fetch("http://localhost:4000/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            name: Pname.value,
            price: price.value,
            quantity: quantity.value
        })
    }).then(() => loadProducts());
}
function loadProducts() {
    const token = localStorage.getItem("jwt_token");
    fetch("http://localhost:4000/api/products", {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
        .then(responces => responces.json())
        .then(data => {
            table.innerHTML = "";
            data.forEach(p => {
                table.innerHTML += `<tr>
            <td>${p.name}</td>
            <td>${p.price}</td>
            <td>${p.quantity}</td>
            </tr>`;
            });
        });
}
loadProducts();