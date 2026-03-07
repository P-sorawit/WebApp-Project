export function myEnrolledCard({ title, description, image, owner, members, category, size, now, max }) {

  if (!document.getElementById("myPost-style")) {
    const link = document.createElement("link");
    link.id = "myPost-style";
    link.href = "/css/myPost.css";
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
      <div class="btn">
        <button class="btn-cancle">Cancle</button>       
      </div>
    </div>
  `;
  const membersContainer = card.querySelector(".members-avatar");
  const displayLimit = 4;
  if (members.length >= 5) {
    for (let i = 0;i < displayLimit;i++) {
      const img = document.createElement('img');
      img.src = members[i];
      img.title = members[i];
      membersContainer.appendChild(img);
    }
    const remaining = document.createElement('div');
    remaining.innerText=`+${members.length - displayLimit}`
    remaining.className="member-remaining"
    membersContainer.appendChild(remaining);
  }else {
    for (const member of members)  {
      const img = document.createElement('img');
      img.src = member;
      img.title = member;
      membersContainer.appendChild(img);
    }
  };
  
  const badgeElement = card.querySelector(".badge");
  if (now < max) {
    badgeElement.style.backgroundColor = "#5b6cff";
  } else {
    badgeElement.style.backgroundColor = "#ff4d4d";
  }
  const button = card.querySelector(".btn-enroll")

  console.log(`Card: ${title} | Width: ${card.offsetWidth}px`);
  
  return card;
}