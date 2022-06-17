package com.ticketbooking.Service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticketbooking.Entity.Login;
import com.ticketbooking.Repository.LoginRepo;

@Service
public class LoginService {
	@Autowired
	private LoginRepo loginrepo;
	
  public Login saveuserdetail(Login login)
  {
	 //System.out.println(login.toString());
	 login.setUserid(UUID.randomUUID().toString());
	 //System.out.println(login.toString());
	 return loginrepo.save(login); 
  }
  
  public List<Login> getuserdetail()
  {
	  return loginrepo.findAll();
  }
  
  public Login updateuserdetail(Login login, String userid)
  {
	  Login ExistingUser = loginrepo.findById(userid).get();
	  ExistingUser.setUsername(login.getUsername());
	  ExistingUser.setMobileno(login.getMobileno());
	  return loginrepo.save(ExistingUser);
  }
  
  public Login GetUserById(String userid) {
	  if(loginrepo.findById(userid).isPresent()) {
		 return loginrepo.findById(userid).get();  
	  }
	  return null;
  }
  
  public void DeleteById(String userid) {
	  loginrepo.deleteById(userid);
  }
  
}
