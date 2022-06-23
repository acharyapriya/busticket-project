package com.ticketbooking.Service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticketbooking.Entity.BusSchedule;
import com.ticketbooking.Entity.TicketBooking;
import com.ticketbooking.Repository.BusScheduleRepo;
import com.ticketbooking.Repository.TicketBookingRepo;

@Service
public class TicketBookingService {
    @Autowired
    private TicketBookingRepo ticketbookingrepo;
    @Autowired
    private BusScheduleRepo busschedulerepo;
    
    public TicketBooking ticket(TicketBooking ticketbooking)
    {
    	Date date = new Date();
    	ticketbooking.setBookingDate(date);
    	 BusSchedule scheduledetails=busschedulerepo.findById(ticketbooking.getBusId()).get();
            int fair=scheduledetails.getFairPerSeat();
            int calculatefair=fair*ticketbooking.getNoOFSeats();
            ticketbooking.setTotalFare(calculatefair);
            ticketbookingrepo.save(ticketbooking);
    	
            if(scheduledetails.getBookedSeats() < scheduledetails.getNoOfSeats()) {
    		  int currentBookedseats= scheduledetails.getBookedSeats() + ticketbooking.getNoOFSeats();
    		  scheduledetails.setBookedSeats(currentBookedseats);
        	  busschedulerepo.save(scheduledetails);
        	  return ticketbookingrepo.save(ticketbooking);
    	  }
    	  
    	  return null;
    	  
    	  
    	  
    	
    }
    
    public List <TicketBooking> getbooking()
    {
    	return ticketbookingrepo.findAll();
    }
    public TicketBooking bookingbyid(String busId)
    {
    	return ticketbookingrepo.findById(busId).get();
    }
   public void deletebooking(String busId)
   {
	  ticketbookingrepo.deleteById(busId);
   }
   
  
    
    
}
