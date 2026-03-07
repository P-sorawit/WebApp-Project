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
  button.addEventListener('click',()=>{
    answerContainer.style.display="flex"
    let index = 0
    const mockQuestion =[
      {
        question:"อิอิ1"
      },
      {
        question:"อิอิ2"
      },
      {
        question:"อิอิ3"
      },
      {
        question:"อิอิ4"
      },
    ]
    answerContainer.innerHTML = `
            <div class="boxQuestion" id="boxAddQuestion">
                <div>
                    <h3>Question</h3>
                    <div id="formQuestion" class="formQuestion">
                        <textarea  rows="9" cols="30" id="question" name="question"></textarea>

                    </div>
                    <div class="footerAddQuestion">
                        <input type="button" value="Back" id="backAddQuestion">
                        <input type="button" value="Add" id="submitAddQuestion">
                    </div>
                </div>    
            </div>`
  })
  answerContainer.addEventListener('click',()=>{
    answerContainer.style.display="None"
  })
  return card;
}