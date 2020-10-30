package com.example.demo.map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MapController {

  @GetMapping("map")
  @RequestMapping(value = "/map", method = RequestMethod.GET)
  public String map() {
      return "map";
  }
}

