package com.idr.forms;

import com.idr.forms.Fields;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RegistrationRepository extends JpaRepository<Fields, Long> {
}