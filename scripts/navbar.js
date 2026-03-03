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
                    <li><a id ="notificationsButton">Notification</a></li>
                    <li><a href="../profile/profile.html">Profile</a></li>
                    <li><a href="../main_guest/main_guest.html">Log out</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div id="notificationsContainers">
    </div>
  `;
    const linkNav = document.createElement("link")
    linkNav.href = "../../styles/navbar.css"
    linkNav.rel = "stylesheet"
    document.querySelector("head").appendChild(linkNav)
    const linkNoti = document.createElement("link")
    linkNoti.href = "../../styles/notification.css"
    linkNoti.rel = "stylesheet"
    document.querySelector("head").appendChild(linkNoti)    
    document.querySelector("nav").innerHTML = navbar;
    const mockNoti = [
        {
            href:"https://cdn-icons-png.freepik.com/256/845/845646.png?semt=ais_white_label",
            title:"คุณได้รับการอนุมัติแล้ว",
            time:"Tue Mar 03 2026 20:08:20",
            detail:"คุณได้รับการอนุมัติจากกลุ่ม การ์ดหล่อกว่าณัฐ"
        },
        {
            href:"https://png.pngtree.com/png-vector/20250904/ourmid/pngtree-wrong-red-false-icon-x-vector-png-image_17366476.webp",
            title:"คำขอของคุณถูกปฏิเสธ",
            time:"Tue Mar 03 2026 20:08:20",
            detail:"คำขอของคุณถูกปฏิเสธจากกลุ่ม การ์ดสุดหล่อ"
        },
        {
            href:"https://cdn-icons-png.freepik.com/256/845/845646.png?semt=ais_white_label",
            title:"คุณได้รับการอนุมัติแล้ว",
            time:"Tue Mar 03 2026 20:08:20",
            detail:"คุณได้รับการอนุมัติจากกลุ่ม การ์ดสุดหล่อ"
        },        
    ]
    const notificationButton = document.getElementById("notificationsButton")
    const notificationsContainers = document.getElementById("notificationsContainers")
    const checkbox = document.getElementById("check_nav");
    let isShowing = false
    notificationButton.addEventListener('click',()=>{
        if(isShowing){
            notificationsContainers.style.display = "None"
        }
        else{
            notificationsContainers.style.display = "flex"
            notificationsContainers.innerHTML = ""
            mockNoti.forEach((item)=>{
                let layout = document.createElement("div")
                layout.setAttribute("class","layoutNotification")
                let div = document.createElement("div")
                div.setAttribute("class","divTitleNotification")
                let divImg = document.createElement("div")
                divImg.setAttribute("class","divImgNotification")
                let img = document.createElement("img")
                img.setAttribute("class","imgNotification")
                let title = document.createElement("h1")
                title.setAttribute("class","titleNotification")
                let time =document.createElement("h2")
                time.setAttribute("class","timeNotification")
                let detail =document.createElement("p")
                detail.setAttribute("class","detailNotification")
                img.src=item.href
                title.innerHTML=item.title
                time.innerHTML=item.time
                detail.innerHTML=item.detail
                divImg.appendChild(img)
                layout.appendChild(divImg)
                div.appendChild(title)
                div.appendChild(time)
                div.appendChild(detail)
                layout.appendChild(div)
                notificationsContainers.appendChild(layout)

            })
            
            checkbox.checked = false;
            
        }
        isShowing = !isShowing
        
    })

}