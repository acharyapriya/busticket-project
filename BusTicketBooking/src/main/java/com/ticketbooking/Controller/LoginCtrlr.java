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

import com.ticketbooking.Service.LoginService;
import com.ticketbooking.Entity.Login;

@RestController
public class LoginCtrlr {
    @Autowired
    private LoginService loginservice;
    
    @PostMapping("/login")
    public String Login(@RequestBody Login login) {
    	loginservice.saveuserdetail(login);
    	return "saved Sucessfully";
    }
    
    @GetMapping("/getuser")
    public List<Login> UserDetail() {
    	return loginservice.getuserdetail();	 
    }
    
    @PutMapping("/update/{userId}")
    public String UpdateUser(@RequestBody Login login,@PathVariable("userId") String userId) {
    	loginservice.updateuserdetail(login, userId);
    	return "Updated Sucessfully";
    }
    
    @GetMapping("/user/{userId}")
    public Login GetUserById(@PathVariable("userId") String userId) {
    	return loginservice.GetUserById(userId);
    }
	
    @DeleteMapping("/user/{userId}")
    public String DeleteUserById(@PathVariable("userId") String userId) {
    	loginservice.DeleteById(userId);
    	return "Deleted Successfully";
    }
}
