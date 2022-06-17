package com.ticketbooking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticketbooking.Entity.Login;

public interface LoginRepo extends JpaRepository<Login, String> {

}
