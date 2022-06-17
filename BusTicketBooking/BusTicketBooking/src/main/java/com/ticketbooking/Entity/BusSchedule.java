package com.ticketbooking.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BusSchedule {
	@Id
	private String busId;
	private String busName;
	private String from;
	private String to;
	private String distance;
	private String departureArea;
	private int noOfSeats;
	private int bookedSeats;
	private String date;
	private String startingTime;
	private String reachTime;
	private int fairPerSeat;
	
	
	
	

}
