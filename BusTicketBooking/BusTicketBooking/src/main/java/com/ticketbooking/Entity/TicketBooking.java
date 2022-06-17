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
@AllArgsConstructor
@NoArgsConstructor
public class TicketBooking {
	@Id
  private String busId;
  private String busNo;
  private int noOFSeats;
  private Date bookingDate;
  private int totalFare;
 
}
