<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form method="post" action="/loginServlet">
        <input name="username" placeholder="Username" required/>
        <br><br>
        <input name="password" type="password" placeholder="password" required/>
        <br><br>
        <button type="submit">Login</button>
    </form>
    <%  if(request.getParameter("error") != null){ %>
        <p style="color:red;">Invalid username or password</p>
    <% } %>
</body>
</html>