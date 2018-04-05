<!DOCTYPE html>
<html>
<head>
    <title>Blogs | E Poll | Create free polls</title>
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
                <li><a href="./login.html">Login</a></li>
            </ul>
        </nav>
    </header>

    <section class="container about-container">
        <div>
            <h2><%out.print(request.getParameter("title"));%></h2>
            <h5>Coming Soon</h5>
        </div>
    </section>

    <footer>
        <p>Created by: <%out.print(request.getParameter("name"));%></p>
        <p>Contact information: <a href="mailto:srijangreatgarg@gmail.com"><%out.print(request.getParameter("email"));%></a>.</p>
    </footer>
</body>
</html>