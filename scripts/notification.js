export function handleNotification(){
    const linkNoti = document.createElement("link")
    linkNoti.href = "../../styles/notification.css"
    linkNoti.rel = "stylesheet"
    document.querySelector("head").appendChild(linkNoti)
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