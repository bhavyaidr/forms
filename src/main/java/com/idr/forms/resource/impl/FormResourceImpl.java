package com.idr.forms.resource.impl;

import com.idr.forms.domain.Fields;
import com.idr.forms.resource.Resource;
import com.idr.forms.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/forms")
public class FormResourceImpl implements Resource<Fields> {

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
