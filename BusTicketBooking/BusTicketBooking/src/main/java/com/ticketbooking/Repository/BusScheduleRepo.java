package com.ticketbooking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ticketbooking.Entity.BusSchedule;

public interface BusScheduleRepo extends JpaRepository<BusSchedule, String> {
// @Query("select schedule from BusSchedule schedule where schedule.from=:from and schedule.to=:to and schedule.date=:date")
// BusSchedule fetchBus( @Param("from") String from,@Param("to") String to,@Param("date") String date);
}
