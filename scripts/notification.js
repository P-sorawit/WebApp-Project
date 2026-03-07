import {showReviewPopup} from "./review.js"
import {showImagePopup} from "./QrImgPopup.js"

export function handleNotification() {
    const linkNoti = document.createElement("link")
    linkNoti.href = "../../styles/notification.css"
    linkNoti.rel = "stylesheet"
    document.querySelector("head").appendChild(linkNoti)
    const mockNoti = [
    {
        type: "approved",
        href: "https://cdn-icons-png.freepik.com/256/845/845646.png",
        title: "คุณได้รับการอนุมัติแล้ว",
        time: "Tue Mar 03 2026 20:08:20",
        detail: "คุณได้รับการอนุมัติจากกลุ่ม การ์ดหล่อกว่าณัฐ",
        image: "https://lh3.googleusercontent.com/d/1CwQ5bTRtaYW_s258toHLpBChkmUMWnkR"
    },
    {
        type: "review",
        href: "https://png.pngtree.com/png-clipart/20221206/ourmid/pngtree-yellow-star-3d-icon-png-image_6511591.png",
        title: "โปรดรีวิวกิจกรรม",
        time: "Tue Mar 03 2026 20:08:20",
        detail: "ให้คะแนนกิจกรรม การ์ดสุดหล่อ"
    },
    {
        type: "normal",
        href: "https://png.pngtree.com/png-vector/20250904/ourmid/pngtree-wrong-red-false-icon-x-vector-png-image_17366476.webp",
        title: "คำขอของคุณถูกปฏิเสธ",
        time: "Tue Mar 03 2026 20:08:20",
        detail: "คำขอของคุณถูกปฏิเสธจากกลุ่ม การ์ดสุดหล่อ"
    },
    {
        type: "approved",
        href: "https://cdn-icons-png.freepik.com/256/845/845646.png",
        title: "คุณได้รับการอนุมัติแล้ว",
        time: "Tue Mar 03 2026 20:08:20",
        detail: "คุณได้รับการอนุมัติจากกลุ่ม การ์ดหล่อกว่าณัฐ",
        image: "https://lh3.googleusercontent.com/d/1CwQ5bTRtaYW_s258toHLpBChkmUMWnkR"
    }
    ]
    const notificationButton = document.getElementById("notificationsButton")
    if (notificationButton) {
        const notificationsContainers = document.getElementById("notificationsContainers")
        const checkbox = document.getElementById("check_nav");
        let isShowing = false
        notificationButton.addEventListener('click', () => {
            if (isShowing) {
                notificationsContainers.style.display = "None"
            }
            else {
                notificationsContainers.style.display = "flex"
                notificationsContainers.innerHTML = ""
                mockNoti.forEach((item) => {
                    let layout = document.createElement("div")
                    layout.setAttribute("class", "layoutNotification")
                    if(item.type === "review"){
                        layout.style.cursor = "pointer"

                        layout.addEventListener("click",()=>{
                            showReviewPopup(item)
                        })
                    }
                    if(item.type === "approved"){
                        layout.style.cursor = "pointer"

                        layout.addEventListener("click",()=>{
                            showImagePopup(item)
                        })
                    }
                    let div = document.createElement("div")
                    div.setAttribute("class", "divTitleNotification")
                    let divImg = document.createElement("div")
                    divImg.setAttribute("class", "divImgNotification")
                    let img = document.createElement("img")
                    img.setAttribute("class", "imgNotification")
                    let title = document.createElement("h1")
                    title.setAttribute("class", "titleNotification")
                    let time = document.createElement("h2")
                    time.setAttribute("class", "timeNotification")
                    let detail = document.createElement("p")
                    detail.setAttribute("class", "detailNotification")
                    img.src = item.href
                    title.innerHTML = item.title
                    time.innerHTML = item.time
                    detail.innerHTML = item.detail
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

}