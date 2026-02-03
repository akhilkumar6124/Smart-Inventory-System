function login() {
    fetch("http://localhost:4001/api/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
        .then(response => response.text())
        .then(token => {
            if (token && token.length > 0) {
                // Store JWT token in localStorage
                localStorage.setItem("jwt_token", token);
                msg.innerHTML = "Login Successful! Redirecting...";
                // Redirect to products page
                setTimeout(() => {
                    window.location.href = "/products";
                }, 1000);
            } else {
                msg.innerHTML = "Invalid credentials";
            }
        })
        .catch(error => {
            msg.innerHTML = "Login failed: " + error.message;
        });
}