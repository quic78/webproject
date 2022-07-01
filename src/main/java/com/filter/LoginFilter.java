package com.filter;

import com.entity.User;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/jsp/*")
public class LoginFilter extends HttpFilter {
    private List<String> excludes = List.of("/jsp/login");

    @Override
    protected void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws IOException, ServletException {
    for(String e : excludes){
        if(e.equals(req.getServletPath())){
            chain.doFilter(req,res);
            return;
        }
    }
        User user = (User) req.getSession().getAttribute("user");
      if(user != null){
          chain.doFilter(req, res);
      }else {
          res.sendRedirect(req.getServletPath()+ "/jsp/login");
      }
    }
}
