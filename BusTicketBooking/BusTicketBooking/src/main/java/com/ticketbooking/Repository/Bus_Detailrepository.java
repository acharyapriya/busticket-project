package com.ticketbooking.Repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ticketbooking.Entity.Bus_Detail;


public interface Bus_Detailrepository extends JpaRepository<Bus_Detail, String> {

	@Query("select detail.coverage from Bus_Detail detail")
	List <String> listofcoverage();
}
