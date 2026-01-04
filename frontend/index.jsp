<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <h2>Product Management</h2>
    <label for="Pname">Product Name:</label>
    <input id="Pname" aria-placeholder="Enter the Product"/>
    <label for="price">Product Price:</label>
    <input id="price" placeholder="Enter price of Product"/>
    <label for="quantity">Product Quantity:</label>
    <input id="quantity" placeholder="Enter quantity"/>
    <button onclick="addProduct()">Add Product</button>
    <table id="table"></table>
    <script src="index.js"></script>
</body>
</html>