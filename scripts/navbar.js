export function generatedNavbar() {
    const navbar = `
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <a href="../main/main.html">
                    <img src="https://lh3.googleusercontent.com/d/1WYLZOzQQMg7YrPJY8_3AeAsmc5JWCE0Z" alt="Logo">
                </a>
            </div>
            <input type="checkbox" id="check_nav">
            <label for="check_nav" class="menu_icon">
                <svg id="open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
                </svg>
                <svg id="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z">
                    </path>
                </svg>
            </label>
            <div class="nav-links">
                <ul class="menu">
                    <li><a href="#">Post</a></li>
                    <li><a href="#">My activity</a></li>
                    <li><a href="#">Notification</a></li>
                    <li><a href="../profile/profile.html">Profile</a></li>
                    <li><a href="../main_guest/main_guest.html">Log out</a></li>
                </ul>
            </div>
        </div>
    </nav>
  `;
    const link = document.createElement("link")
    link.href = "../../styles/navbar.css"
    link.rel = "stylesheet"
    document.querySelector("head").appendChild(link)
    document.querySelector("nav").innerHTML = navbar;
}