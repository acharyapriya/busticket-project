package com.ticketbooking.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticketbooking.Entity.BusSchedule;
import com.ticketbooking.Entity.Bus_Detail;
import com.ticketbooking.Repository.BusScheduleRepo;
import com.ticketbooking.Repository.Bus_Detailrepository;

@Service
public class BusScheduleService {
   @Autowired
   private BusScheduleRepo busschedulerepo;

   @Autowired
  private Bus_Detailrepository bus_detailrepository;
   
   public BusSchedule scheduledetails(BusSchedule busschedule )
   {
	   Bus_Detail bus_detail=bus_detailrepository.findById(busschedule.getBusId()).get();
	   busschedule.setBusName(bus_detail.getBusName());
	   busschedule.setNoOfSeats(bus_detail.getNoOfSeats());
	   return busschedulerepo.save(busschedule);
	    
   }
   
   public List<BusSchedule> savemultiple(List<BusSchedule> busschedule )
   {
	   return busschedulerepo.saveAll(busschedule);
	    
   }
   
   public List<BusSchedule> getscheduledetail()
   {
	   return busschedulerepo.findAll();
   }
   
   
   public BusSchedule getscheduleid(String busId)
   {
	   return busschedulerepo.findById(busId).get();
   }
   
   
   public BusSchedule updateschedule(BusSchedule busschedule,String busId)
   {
	   BusSchedule scheduledetails=busschedulerepo.findById(busId).get();
	   scheduledetails.setDepartureArea(busschedule.getDepartureArea());
	   scheduledetails.setFrom(busschedule.getFrom());
	   scheduledetails.setTo(busschedule.getTo());
	   scheduledetails.setNoOfSeats(busschedule.getNoOfSeats());
	   scheduledetails.setStartingTime(busschedule.getStartingTime());
	   scheduledetails.setReachTime(busschedule.getReachTime());
	   scheduledetails.setFairPerSeat(busschedule.getFairPerSeat());
	   return busschedulerepo.save(scheduledetails);
 }
   public void deleteschedule(String busId)
   {
	    busschedulerepo.deleteById(busId);
   }
   
 
   
}
