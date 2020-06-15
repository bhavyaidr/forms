package com.idr.forms.resource.impl;

import com.idr.forms.FieldsRepository;
import com.idr.forms.domain.Fields;
//import com.idr.forms.resource.Resource;
//import com.idr.forms.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/*@RestController
@RequestMapping("/forms")
@CrossOrigin(origins="http://localhost:3000")
public class FormResourceImpl  {

    @Autowired
    private FormService formService;

    @Override
    public ResponseEntity<Collection<Fields>> findAll() {
        return new ResponseEntity<>(formService.findAll(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Fields> findById(Long id) {
        return new ResponseEntity<>(formService.findById(id), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Fields> save(Fields fields) {
        return new ResponseEntity<>(formService.save(fields), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Fields> update(Fields fields) {
        return new ResponseEntity<>(formService.update(fields), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Fields> deleteById(Long id) {
        return new ResponseEntity<>(formService.deleteById(id), HttpStatus.OK);
    }
}

 */

@RestController
public class FormResourceImpl{

    @Autowired
    FieldsRepository fieldsRepository;

    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping(path="/forms")
    public List<Fields> getAllUsers(){
        List<Fields> fields = new ArrayList<>();
        fieldsRepository.findAll().forEach(fields :: add);
        return fields;
    }

    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping(path="/forms")
    public Fields addUser(@RequestBody Fields fields){
        fieldsRepository.save(fields);
        return fields;
    }

    @CrossOrigin(origins="http://localhost:3000")
    @DeleteMapping(path="/forms/{id}")
    public void deleteUser(@PathVariable long id){
        fieldsRepository.deleteById(id);
    }


}