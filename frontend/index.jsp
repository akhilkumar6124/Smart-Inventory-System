<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Management - Smart Inventory System</title>
    <link rel="stylesheet" href="css/index.css">
</head>

<body>
    <div class="container fade-in">
        <div class="header-bar">
            <h2>Product Management</h2>
            <button class="logout-btn" onclick="logout()">Logout</button>
        </div>

        <div class="product-form">
            <div class="form-group">
                <label for="Pname">Product Name</label>
                <input type="text" id="Pname" placeholder="Enter product name" required />
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="number" id="price" placeholder="Enter price" step="0.01" required />
            </div>
            <div class="form-group">
                <label for="quantity">Quantity</label>
                <input type="number" id="quantity" placeholder="Enter quantity" required />
            </div>
            <button onclick="addProduct()">Add Product</button>
        </div>

        <table id="table">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody id="tableBody">
                <!-- Products will be loaded here -->
            </tbody>
        </table>
    </div>
    <script src="index.js"></script>
</body>

</html>