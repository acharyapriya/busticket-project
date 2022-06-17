package com.ticketbooking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ticketbooking.Entity.Bus_Detail;


public interface Bus_Detailrepository extends JpaRepository<Bus_Detail, String> {

}
