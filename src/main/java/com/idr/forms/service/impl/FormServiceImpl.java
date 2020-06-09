package com.idr.forms.service.impl;

import com.idr.forms.domain.Fields;
import com.idr.forms.service.FormService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class FormServiceImpl implements FormService {


    private Long formId=100L;
    private Map<Long,Fields> fieldsMap=new HashMap<Long,Fields>();

    {
        Fields fields=new Fields();
        fields.setId(formId);
        fields.setFirstName("Bhavya");
        fields.setLastName("Gupta");

        fields.setEmail("abcd@a");
        fields.setPassword("zaqxsw");

        fieldsMap.put(fields.getId(),fields);

    }

    @Override
    public Collection<Fields> findAll() {
        return fieldsMap.values();
    }

    @Override
    public Fields findById(Long id) {
        return fieldsMap.get(id);
    }

    @Override
    public Fields save(Fields fields) {
        Long newFormId=++formId;
        fields.setId(newFormId);
        fieldsMap.put(fields.getId(),fields);

        return fieldsMap.get(newFormId);
    }

    @Override
    public Fields update(Fields fields) {
       formId=fields.getId();
       if(fieldsMap.get(formId)!=null){
           fieldsMap.put(formId,fields);
           return fieldsMap.get(formId);
       }
       return null;
    }

    @Override
    public Fields deleteById(Long id) {
        if(fieldsMap.get(id) != null){
            return fieldsMap.remove(id);
        }
        return null;
    }
}
