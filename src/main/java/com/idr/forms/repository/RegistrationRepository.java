package com.idr.forms.repository;

import com.idr.forms.model.Fields;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RegistrationRepository extends JpaRepository<Fields, Long> {
}