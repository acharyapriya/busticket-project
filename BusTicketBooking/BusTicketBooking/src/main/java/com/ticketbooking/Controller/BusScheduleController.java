package com.ticketbooking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ticketbooking.Entity.BusSchedule;
import com.ticketbooking.Service.BusScheduleService;

@RestController
public class BusScheduleController {
  
	@Autowired
	private BusScheduleService busscheduleservice;
	
	@PostMapping("/busschedule")
	public BusSchedule scheduledetails(@RequestBody BusSchedule busschedule)
	{
		
		return busscheduleservice.scheduledetails(busschedule);
	}
	
	@PostMapping("/allschedule")
	public List<BusSchedule> savemultiple(@RequestBody List<BusSchedule> busschedule)
	{
		System.out.println(busschedule);
		return busscheduleservice.savemultiple(busschedule);
	}
	
	@GetMapping("/getbusschedule")
	
		public List<BusSchedule> getscheduledetail()
		{
			return busscheduleservice.getscheduledetail();
		}
	
	@GetMapping("/getidschedule/{id}")
	    public BusSchedule getscheduleid(@PathVariable("id") String busId)
	    {
		   return busscheduleservice.getscheduleid(busId);
	    }
	@PutMapping("/updateidschedule/{id}")
	    public BusSchedule updateschedule(@PathVariable("id") String busId, @RequestBody BusSchedule busschedule)
	    {
		return busscheduleservice.updateschedule(busschedule,busId);
	    }
	
	@DeleteMapping("/deleteschedule/{id}")
	   public String deleteschedule(@PathVariable("id") String busId)
	   {
		busscheduleservice.deleteschedule(busId);
		return "deleted successfully";
	   }
	
	@GetMapping("/{from}/{to}/date={date}")
	public BusSchedule fetchBus(@PathVariable("from") String from, @PathVariable("to") String to, @PathVariable("date") String date) {
		
		
		return busscheduleservice.fetchBusByDestination(from, to,date);
	}	    
	}

