package com.inventory.product_service.servlet;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

import javax.net.ssl.HttpsURLConnection;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class LoginServlet extends HttpServlet{
    @Override
    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException{
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        URL url = new URL("http://localhost:4001/api/auth/login");
        HttpURLConnection con = (HttpsURLConnection)url.openConnection();
        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setDoOutput(true);
        String jsonInput = "{\"username\":\"" + username + "\",\"password\":\"" + password + "\"}";
        con.getOutputStream().write(jsonInput.getBytes());
        if(con.getResponseCode() == 200){
            Scanner sc = new Scanner(con.getInputStream());
            String result = sc.useDelimiter("\\A").next();
            sc.close();
            if(result.contains("id")){
                HttpSession session = request.getSession();
                session.setAttribute("username", username);
                response.sendRedirect("/products");
                return;
            }
        }
        response.sendRedirect("/login?error=true");
    }
}