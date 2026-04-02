package com.example.albums.service;

import com.example.albums.model.User;
import com.example.albums.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository usersRepository) {
        this.userRepository = usersRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
    }

    public User updateUser(Long id, User user) {
        User existingUser = getUserById(id);
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setUserName(user.getUserName());
        existingUser.setUserPassword(user.getUserPassword());
        existingUser.setAdmin(user.getAdmin());
        return userRepository.save(existingUser);
    }

    public void deleteUser(Long id) {
        getUserById(id);
        userRepository.deleteById(id);
    }

}
