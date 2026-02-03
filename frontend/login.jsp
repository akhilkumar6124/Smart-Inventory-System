<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Smart Inventory System</title>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <div class="login-container">
        <div class="card fade-in">
            <h2>Smart Inventory</h2>
            <form onsubmit="event.preventDefault(); login();">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" required />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p id="msg"></p>
        </div>
    </div>
    <script src="js/login.js"></script>
</body>
</html>