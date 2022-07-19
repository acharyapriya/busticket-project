package com.ticketbooking.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BusCardModel {
	
	private String scheduleID;
	private String busName;
	private String from;
	private String to;
	private String distance;
	private String departureArea;
	private int noOfSeats;
	private int bookedSeats;
	private Date startingTime;
	private Date reachTime;
	private int fairPerSeat;
	private String mode;
}
