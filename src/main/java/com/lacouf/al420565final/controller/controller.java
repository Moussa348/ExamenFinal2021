package com.lacouf.al420565final.controller;

import com.lacouf.al420565final.model.Client;
import com.lacouf.al420565final.util.ClientFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController()
@RequestMapping("/examen")
public class controller {


    @GetMapping("/getListClient")
    public List<Client> getListClient() {
        return ClientFactory.getClients();
    }

    @GetMapping("/getListMen")
    public List<Client> getListMen() {
        return ClientFactory.getClients()
                .stream()
                .filter(client -> client.getGender().equals("M"))
                .collect(Collectors.toList());
    }

    @GetMapping("/getListCitizenByProvince/{province}")
    public List<Client> getListCitizenByProvince(@PathVariable String province) {
        return ClientFactory.getClients()
                .stream()
                .filter(client -> client.getProvince().equals(province.toUpperCase()))
                .collect(Collectors.toList());
    }
}
