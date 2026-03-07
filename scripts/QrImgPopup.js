export function showImagePopup(item){

    const popup = document.createElement("div")
    popup.className = "imagePopup"

    popup.innerHTML = `
    <div class="imageBox">
        <img src="${item.image}" />
    </div>
    `

    document.body.appendChild(popup)

    const imageBox = popup.querySelector(".imageBox")


    popup.addEventListener("click",()=>{
        popup.remove()
    })


    imageBox.addEventListener("click",(e)=>{
        e.stopPropagation()
    })
}