package com.inventory.auth_service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inventory.auth_service.dto.LoginDTO;
import com.inventory.auth_service.dto.UserRegisterDTO;
import com.inventory.auth_service.model.User;
import com.inventory.auth_service.repository.UserRepository;

@Service
public class AuthService{
    @Autowired
    private UserRepository userRepository;
    public User register(UserRegisterDTO dto) {
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword()); // will hash later

        return userRepository.save(user);
    }
    public String login(LoginDTO dto) {
        User user = userRepository.findByUsername(dto.getUsername())
            .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!user.getPassword().equals(dto.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        // temporary return — JWT will be added next
        return "LOGIN_SUCCESS";
    }
}