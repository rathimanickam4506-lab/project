import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Simple validation
        if ("admin".equals(username) && "12345".equals(password)) {
            out.println("<h2 style='color:green; text-align:center;'>Login Successful!</h2>");
        } else {
            out.println("<h2 style='color:red; text-align:center;'>Invalid Username or Password</h2>");
        }
    }
}