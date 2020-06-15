package com.idr.forms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class RegistrationResource {

    @Autowired
    RegistrationRepository fieldsRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/forms")
    public List<Fields> getAllUsers() {
        List<Fields> fields = new ArrayList<>();
        fieldsRepository.findAll().forEach(fields::add);
        return fields;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/forms")
    public Fields addUser(@RequestBody Fields fields) {
        fieldsRepository.save(fields);
        return fields;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/forms/{id}")
    public void deleteUser(@PathVariable long id) {
        fieldsRepository.deleteById(id);
    }


}