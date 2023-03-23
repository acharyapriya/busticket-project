package com.ticketbooking.model;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TicketBook {
	 private String bookingId;
	  private String busId;
	  private String scheduleID;
	  private String userName;
	  private String bookingLabel;
}
