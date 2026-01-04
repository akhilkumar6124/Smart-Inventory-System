function login(){
    fetch("http://localhost:4000/api/auth/login",{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
    .then(responce => responce.json())
    .then(data => {
        if(data && data.id){
            msg.innerHTMl = "Login Succesful as "+data.role;
        }else{
            msg.innerHTML = "Invalid credentials";
        }
    });
}