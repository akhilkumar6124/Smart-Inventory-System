package com.inventory.auth_service.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inventory.auth_service.model.User;
import com.inventory.auth_service.repository.UserRepository;

@Service
public class UserService{
    @Autowired
    private UserRepository userRepository;
    public User register(User user){
        return userRepository.save(user);
    }
    public User login(String username, String password){
        Optional<User> user = userRepository.findByUsername(username);
        if(user.isPresent() && user.get().getPassword().equals(password)){
            return user.get();
        }
        return null;
    }
}