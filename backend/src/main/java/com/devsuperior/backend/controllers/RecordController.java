package com.devsuperior.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.backend.dto.RecordDTO;
import com.devsuperior.backend.dto.RecordInsertDTO;
import com.devsuperior.backend.services.RecordService;

@RestController
@RequestMapping(value = "/records")
public class RecordController {

    @Autowired
    RecordService service;

    @PostMapping
    public ResponseEntity<RecordDTO> insert(@RequestBody RecordInsertDTO dto) {
        RecordDTO newDTO = service.insert(dto);
        return ResponseEntity.ok().body(newDTO);
    }
    
}
