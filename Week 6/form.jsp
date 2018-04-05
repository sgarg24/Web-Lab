<!DOCTYPE html>
<!-- <%@ page import = "java.io.*,java.util.*, javax.servlet.*,java.text.*" %> -->
<html>
<head>
    <title>Login | E Poll | Create free polls</title>
    <link rel="stylesheet" type="text/css" href="./index.css">
</head>
<body>
    <header>
        <!-- <h1 class="logo">E-Poll</h1> -->
        <img src="./poll.png" class="logo">
        <nav>
            <ul class="nav-bar">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./blogs.html">Blogs</a></li>
            </ul>
        </nav>
    </header>

    <section class="container login-container">
        <div>
            <form action="welcome.jsp">
                <h1>Form</h1>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" required>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" required>
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" required>
                </div>
                <div>
                    <input type="submit" name="submit" value="Submit">
                    <input type="reset" name="reset" value="Reset">
                </div>
            </form>
        </div>
    </section>

    <footer>
        <p>Created by: Srijan Garg</p>
        <p>Contact information: <a href="mailto:srijangreatgarg@gmail.com">srijangreatgarg@gmail.com</a>.</p>
    </footer>
</body>
</html>