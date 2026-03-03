export function handleNotification(isShowing){
    const notificationsContainers = document.querySelector(".notificationsContainers")
    const eiei = document.createElement("div")
    if (isShowing){
        notificationsContainers.style.display = "None"
    }
    else{
        notificationsContainers.style.display = "flex"
    }
}