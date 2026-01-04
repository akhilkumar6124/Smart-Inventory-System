package com.inventory.auth_service.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import com.inventory.auth_service.model.User;
import com.inventory.auth_service.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController{
    @Autowired
    private UserService userservice;
    
    @PostMapping("/register")
    public User register(@RequestBody User user){
        return userservice.register(user);
    }
    @PostMapping("/login")
    public User login(@RequestBody User user){
        return userservice.login(user.getUsername(), user.getPassword());
    }
}