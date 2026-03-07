export function showReviewPopup(item) {

    const popup = document.createElement("div")
    popup.className = "reviewPopup"

    popup.innerHTML = `
    <div class="reviewBox">
        <h2>ให้คะแนนกิจกรรม</h2>
        <p>${item.detail}</p>

        <div class="stars">
        <span data-rate="1">★</span>
        <span data-rate="2">★</span>
        <span data-rate="3">★</span>
        <span data-rate="4">★</span>
        <span data-rate="5">★</span>
        </div>

        <button id="submitReview">Submit</button>
    </div>
    `

    document.body.appendChild(popup)

    let rating = 0

    const stars = document.querySelectorAll(".stars span")

    stars.forEach((star, index) => {

        star.addEventListener("click", () => {

            rating = index + 1

            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add("active")
                } else {
                    s.classList.remove("active")
                }
            })

            console.log("rating:", rating)

        })
    })
    const reviewBox = popup.querySelector(".reviewBox")

    popup.addEventListener("click", () => {
        popup.remove()
    })

    reviewBox.addEventListener("click", (e) => {
        e.stopPropagation()
    })

    const submitReview = document.getElementById("submitReview")
    submitReview.addEventListener("click", () => {
        if (rating != 0) {
            alert(`rating is ${rating}`)
            popup.click()
        }
        else {
            alert("Please give rating")
        }
    })
}