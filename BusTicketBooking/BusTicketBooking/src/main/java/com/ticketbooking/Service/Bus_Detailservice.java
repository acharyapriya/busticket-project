package com.ticketbooking.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.ObjectIdGenerators.UUIDGenerator;
import com.ticketbooking.Entity.Bus_Detail;
import com.ticketbooking.Repository.Bus_Detailrepository;
import com.ticketbooking.model.BusModel;

@Service
public class Bus_Detailservice {
  @Autowired
  private Bus_Detailrepository bus_detailrepository;
  
  public Bus_Detail busdetail(Bus_Detail bus_detail)
  {
	  bus_detail.setBusId(UUID.randomUUID().toString());
	  bus_detail.setCoverage(bus_detail.getCoverage().toLowerCase());
	  
	  
	  return bus_detailrepository.save(bus_detail);
  }
  
  
  public List<Bus_Detail>getallbusdetail()
  {
	  return bus_detailrepository.findAll();
  }
  
  
  public BusModel getbyiddetail(String bus_id )
  {
	 Bus_Detail bus_detail= bus_detailrepository.findById(bus_id).get();
	  BusModel busmodel=new BusModel();
	  busmodel.setBusId(bus_detail.getBusId());
	  busmodel.setBusModel(bus_detail.getBusModel());
	  busmodel.setBusName(bus_detail.getBusName());
	  busmodel.setBusNo(bus_detail.getBusNo());
	   
	  busmodel.setMode(bus_detail.getMode());
	  busmodel.setNoOfSeats(bus_detail.getNoOfSeats());
	  
	  String[] coverageNew = bus_detail.getCoverage().split(",");
//	  List<String> coverages=new ArrayList<>();
//	  for(String coverage:coverageNew)
//	  {
//		coverages.add(coverage);
//	  }
		  busmodel.setCoverage(coverageNew);
		  return busmodel;
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
   
  public List<String> listOfCoverage()
  {
	 List<String> coveragedata= bus_detailrepository.listofcoverage();
	 List<String> newCoverageData=new ArrayList<>();
	 for(String covdata:coveragedata)
	 {
		 String[] revisedcovdata=covdata.split(",");
		 for(String data:revisedcovdata)
		 {
			 if(!newCoverageData.contains(data))
			 {
				 newCoverageData.add(data);
			 }
			 
		 }
	 }
	 System.out.println(newCoverageData);
	  return newCoverageData;
  }
	
  
  ////login for owner
  public Bus_Detail busdetail(String BusName,String busNo)
  {
	  Bus_Detail busdetail=bus_detailrepository.findbus_name(BusName);
	  if (BCrypt.checkpw(busNo,busdetail.getBusNo())) {
		  return busdetail;
	  }
	  else
	  {
		  return null;
	  }
	  
  }
  
}
