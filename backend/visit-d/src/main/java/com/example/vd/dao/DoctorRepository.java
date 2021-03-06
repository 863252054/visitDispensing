package com.example.vd.dao;

import com.example.vd.entity.DoctorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DoctorRepository extends JpaRepository<DoctorEntity, Integer> {

    @Query(value = "select * from doctor where open_id = ?",nativeQuery = true)
    List<DoctorEntity> findByOpenId(String open_id);

    @Query(value = "select * from doctor where id = ?",nativeQuery = true)
    List<DoctorEntity> findOne(int id);

    List<DoctorEntity> findAll();

}
