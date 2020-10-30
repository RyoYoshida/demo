package com.example.demo.controller.contents;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class IndexController {

  @GetMapping("/")
  public String index(HttpServletRequest request) {
    if (request.isUserInRole("ROLE_USER")) {
      log.debug("has ROLE_USER");
    }
    return "contents/index";
  }

  @GetMapping("menu")
  public String menu() {
    return "contents/menu";
  }

}
