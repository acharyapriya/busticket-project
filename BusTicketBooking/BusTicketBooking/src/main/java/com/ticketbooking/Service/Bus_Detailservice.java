package com.ticketbooking.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.ObjectIdGenerators.UUIDGenerator;
import com.ticketbooking.Entity.Bus_Detail;
import com.ticketbooking.Repository.Bus_Detailrepository;

@Service
public class Bus_Detailservice {
  @Autowired
  private Bus_Detailrepository bus_detailrepository;
  
  public Bus_Detail busdetail(Bus_Detail bus_detail)
  {
	  bus_detail.setBusId(UUID.randomUUID().toString());
	  String[] coverageNew = bus_detail.getCoverage().split(","); 
	  bus_detail.setCoverage(coverageNew.toString());
	  return bus_detailrepository.save(bus_detail);
  }
  
  
  public List<Bus_Detail>getallbusdetail()
  {
	  return bus_detailrepository.findAll();
  }
  
  
  public Bus_Detail getbyiddetail(String bus_id )
  {
	  return bus_detailrepository.findById(bus_id).get();
  }
  
  public Bus_Detail updatebusdetail(Bus_Detail busdetail, String bus_id)
  
  {
	  Bus_Detail bus_detail=bus_detailrepository.findById(bus_id).get();
	  bus_detail.setBusName(busdetail.getBusName());
	  bus_detail.setBusNo(busdetail.getBusNo());
	  bus_detail.setBusModel(busdetail.getBusModel());
	  bus_detail.setMode(busdetail.getMode());
	  bus_detail.setNoOfSeats(busdetail.getNoOfSeats());
	  bus_detail.setCoverage(busdetail.getCoverage());
	  return bus_detailrepository.save(bus_detail);
  }
  
  public void deletebusdetail(String bus_id)
  {
	  bus_detailrepository.deleteById(bus_id);
	  
  }
  
	
}
