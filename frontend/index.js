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
            price: parseFloat(price.value),
            quantity: parseInt(quantity.value)
        })
    })
        .then(response => {
            if (response.ok) {
                // Clear form
                Pname.value = "";
                price.value = "";
                quantity.value = "";
                loadProducts();
            } else {
                alert("Failed to add product");
            }
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
}

function loadProducts() {
    const token = localStorage.getItem("jwt_token");
    const tableBody = document.getElementById("tableBody");

    fetch("http://localhost:4000/api/products", {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
        .then(responces => responces.json())
        .then(data => {
            tableBody.innerHTML = "";
            if (data.length === 0) {
                tableBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 2rem;">No products found. Add your first product!</td></tr>`;
            } else {
                data.forEach(p => {
                    tableBody.innerHTML += `<tr>
                <td>${p.name}</td>
                <td>$${parseFloat(p.price).toFixed(2)}</td>
                <td>${p.quantity}</td>
                </tr>`;
                });
            }
        })
        .catch(error => {
            tableBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--error-color); padding: 2rem;">Error loading products: ${error.message}</td></tr>`;
        });
}

function logout() {
    localStorage.removeItem("jwt_token");
    window.location.href = "/login";
}

loadProducts();