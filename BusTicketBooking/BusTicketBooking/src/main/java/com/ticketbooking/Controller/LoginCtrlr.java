package com.ticketbooking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> Login(@RequestBody Login login) {
    	if(loginservice.UserExist(login.getUsername())) {
    		return new ResponseEntity<String>("USER ALREADY EXIST", HttpStatus.BAD_GATEWAY);
    	}else {
    		loginservice.saveuserdetail(login);
        	return  new ResponseEntity<String>("NEW USER IS CREATED", HttpStatus.OK);
    	}
    	
    }
    
    @GetMapping("/getuser")
    public List<Login> UserDetail() {
    	return loginservice.getuserdetail();	 
    }
    
    @GetMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Login login) {
    	if(loginservice.LoginINUser(login.getUsername(), login.getPassword())!= null) {
    	return new ResponseEntity<Login>( loginservice.LoginINUser(login.getUsername(), login.getPassword()),HttpStatus.OK);
    }else {
    	return new ResponseEntity<String>("USER DOES NOT EXIST, TRY REGISTERING",HttpStatus.INTERNAL_SERVER_ERROR);
    }
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
