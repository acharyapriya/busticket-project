package com.ticketbooking.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ticketbooking.Entity.BusSchedule;
import com.ticketbooking.Entity.TicketBooking;

public interface TicketBookingRepo extends JpaRepository<TicketBooking, String> {
//@Query("select count(no_of_booking_seats) from TicketBooking bookseats")
//String countbooking();
	
	 @Query("select count(no_of_booking_seats) from TicketBooking bsdetail")
	   String countbooking();
		
	 @Query("select username.bookingLabel from TicketBooking username where username.userName=:userName ")
	 List<String> findByUsername(@Param("userName") String userName);
}
