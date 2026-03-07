export function Card({ title, description, image, owner, members, category, size, now, max }) {

  if (!document.getElementById("cardPost-style")) {
    const link = document.createElement("link");
    link.id = "cardPost-style";
    link.href = "../../styles/cardPost.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-top">
      <div class="card-left">
        <img src="${image}" alt="image">
      </div>

      <div class="card-right">

          <div class="card-header">
              <h2>${title}</h2>
              <span class="badge">${now}/${max}</span>
          </div>

          <p class="card-desc">
              ${description}
          </p>

          <div class="card-members">
            <div>
              <span>Created by</span>
              <div class="avatars">
                <img src="${owner}" title="${owner}">
              </div>
            </div>
            <div>
              <span>Other members</span>
              <div class="avatars members-avatar">
              </div>
            </div>
          </div>
      </div>
    </div>

    <div class="card-bottom">
      <div class="tag">
        <span class="category-tag">${category}</span>
        <span class="size-tag">${size}</span>
      </div>
      

      <button class="btn-enroll">Enroll</button>
    </div>
  `;
  const membersContainer = card.querySelector(".members-avatar");
  if (members.length >= 5) {
    for (let i = 0;i < 4;i++) {
      const img = document.createElement('img');
      img.src = members[i];
      img.title = members[i];
      membersContainer.appendChild(img);
    }
    const remaining = document.createElement('div');
    remaining.innerText=`+${members.length-4}`
    remaining.className="member-remaining"
    membersContainer.appendChild(remaining);
  }else {
    for (const member of members)  {
      const img = document.createElement('img');
      img.src = member;
      img.title = member;
      membersContainer.appendChild(img);
    }
  }
  const badgeElement = card.querySelector(".badge");
  if (now < max) {
    badgeElement.style.backgroundColor = "#5b6cff";
  } else {
    badgeElement.style.backgroundColor = "#ff4d4d";
  }

  const button = card.querySelector(".btn-enroll")
  const answerContainer = document.getElementById("answerContainer")

  button.addEventListener('click', () => {

    answerContainer.style.display = "flex"

    let index = 0

    const mockQuestion = [
      { question: "อิอิ1" },
      { question: "อิอิ2" },
      { question: "อิอิ3" },
      { question: "อิอิ4" },
    ]
    let answers = new Array(mockQuestion.length).fill("")
    function renderQuestion() {

      const isFirst = index === 0
      const isLast = index === mockQuestion.length - 1

      answerContainer.innerHTML = `
        <div class="boxAnswer" id="boxAnswer">

          <div class="questionProgress">
            ${index + 1} / ${mockQuestion.length}
          </div>
          <div>
            <h3>Question ${index+1} : ${mockQuestion[index].question}</h3>

            <div id="formAnswer" class="formAnswer">
              <textarea rows="9" cols="30" id="Answer" name="Answer">${answers[index]}</textarea>
            </div>

            <div class="footerAnswer">
              ${!isFirst ? `<input type="button" value="Back" id="backAnswer">` : `<span></span>`}
              <input type="button" value="${isLast ? "Done" : "Next"}" id="nextAnswer">
            </div>
          </div>
        </div>
      `

      const boxAnswer = document.getElementById("boxAnswer")
      boxAnswer.addEventListener("click", (e) => {
        e.stopPropagation()
      })

      const backBtn = document.getElementById("backAnswer")
      const nextBtn = document.getElementById("nextAnswer")

      if (backBtn) {
        backBtn.addEventListener("click", () => {

          const textarea = document.getElementById("Answer")

          // save answer
          answers[index] = textarea.value

          index--
          renderQuestion()

        })
      }

      nextBtn.addEventListener("click", () => {

        const textarea = document.getElementById("Answer")

        // save answer
        answers[index] = textarea.value

        if (isLast) {
          console.log("All Answers:", answers)
          answerContainer.style.display = "none"
          return
        }

        index++
        renderQuestion()

      })
    }

    renderQuestion()
  })

  answerContainer.addEventListener('click', () => {
    answerContainer.style.display = "none"
  })

  return card;
}