package com.ticketbooking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ticketbooking.Entity.TicketBooking;
import com.ticketbooking.Service.TicketBookingService;
import com.ticketbooking.model.TicketBook;

@RestController
@CrossOrigin("http://localhost:4200")
public class TicketBookingController {
   @Autowired
   private TicketBookingService ticketbookingservice;
   @PostMapping("/tickets")
   public TicketBooking ticket(@RequestBody TicketBooking ticketbooking)
   {
	   return ticketbookingservice.ticket(ticketbooking);
	   
   }
   @GetMapping("/gettickets")
   public List<TicketBooking> getbooking()
   {
	   return ticketbookingservice.getbooking();
   }
   
  
   @GetMapping("/ticketbyid/{id}")
   
  public  List <String> bookingbyid(@PathVariable("id")String userName) 
  {
	return ticketbookingservice.bookingbyid(userName);
  }
   
   @DeleteMapping("/deletebooking/{id}")
   
	   public String deletebooking (@PathVariable("id")String bookingId) 
	   {
	   ticketbookingservice.deletebooking(bookingId);
	  
       return"deleted succesfully";
	   }
	  
   
}
