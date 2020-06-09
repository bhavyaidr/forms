package com.idr.forms.service;

import java.util.Collection;

import com.idr.forms.domain.Fields;

public interface FormService {

    Collection<Fields> findAll();

    Fields findById(Long id);

    Fields save(Fields fields);

    Fields update(Fields fields);

    Fields deleteById(Long id);



}
