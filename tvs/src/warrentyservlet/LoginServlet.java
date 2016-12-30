package warrentyservlet;


import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

//import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;

//import Warrenty.LoginDao;

public class LoginServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response)  
			throws ServletException, IOException {  
		System.out.println("asdfg");
		response.setContentType("text/html");  
		PrintWriter pw = response.getWriter();  
		
		Connection conn=null;
        String url="jdbc:mysql://172.16.0.249:3306/";
        String dbName="warrantydb";
        String driver="com.mysql.jdbc.Driver";
    //String dbUserName="root";
    //String dbPassword="root";

    try{  
      String name = request.getParameter("name");  
      String email = request.getParameter("email");  
      String mobileno = request.getParameter("mobileno"); 
      String city = request.getParameter("city");  
      String coupon = request.getParameter("luckycoupon");  
      String tyre = request.getParameter("tyre");  
      String tyreno = request.getParameter("tyreno");  
      String make = request.getParameter("vehiclemake");  
      String model = request.getParameter("vehiclemodel");  
      String dealername = request.getParameter("dealername");  
      String dealerlocation = request.getParameter("dealerlocation");  

      Class.forName(driver).newInstance();  
      conn = DriverManager.getConnection(url+dbName,"admin", "password123");
      PreparedStatement pst =(PreparedStatement) conn.prepareStatement("insert into 'warrantydb'.'registercustable'(name,email,mobileno,city,coupon,tyre,tyreno,make,model,dealername,dealerlocation) values(?,?,?,?,?,?,?,?,?,?,?)");//try2 is the name of the table  

      pst.setString(1,name);  
      pst.setString(2,email);        
      pst.setString(3,mobileno);
      pst.setString(4,city);
      pst.setString(5,coupon);
      pst.setString(6,tyre);
      pst.setString(7,tyreno);
      pst.setString(8,make);
      pst.setString(9,model);
      pst.setString(10,dealername);
      pst.setString(11,dealerlocation);

      int i = pst.executeUpdate();
      conn.commit(); 
      String msg=" ";
      if(i!=0){  
        msg="Record has been inserted";
        pw.println("<font size='6' color=blue>" + msg + "</font>");  


      }  
      else{  
        msg="failed to insert the data";
        pw.println("<font size='6' color=blue>" + msg + "</font>");
       }  
      pst.close();
    }  
    catch (Exception e){  
      pw.println(e);  
    }   
	}  
}  