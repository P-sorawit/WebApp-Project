export function generatedFooter() {
  let footer;
  footer = `
    <div class="main_footer">
        <div class="course_info">
            <h2>Subject: Web Application Development Project</h2>
            <p>School of Engineering | Department of Computer Engineering at KMITL</p>
            <h3>Created By</h3>
        </div>
        <div class="team_member">
            <div class="member">
                <img src="https://lh3.googleusercontent.com/d/1CwQ5bTRtaYW_s258toHLpBChkmUMWnkR" alt="Member 5">
                <div class="member-detail">
                    <p class="name">Phattrawin Yodsukhaㅤ</p>
                    <p class="id">67010699</p>
                </div>
            </div>
            <div class="member">
                <img src="https://lh3.googleusercontent.com/d/1JumvINXqMwBnR5giU8-KgnB_8vYnyt-8" alt="Member 5">
                <div class="member-detail">
                    <p class="name">Wiritpol Rodngoenㅤㅤ</p>
                    <p class="id">67010848</p>
                </div>
            </div>
            <div class="member">
                <img src="https://lh3.googleusercontent.com/d/1GZjnkl6MDOS8poZIhGBS0wAaS88IeZvV" alt="Member 5">
                <div class="member-detail">
                    <p class="name">Veerapat Pirulthamㅤㅤ</p>
                    <p class="id">67010852</p>
                </div>
            </div>
            <div class="member">
                <img src="https://lh3.googleusercontent.com/d/1bxO9OyLYTB9JU5aQy4qhDDtLlK8StlTK" alt="Member 5">
                <div class="member-detail">
                    <p class="name">Verinda Temboonsaran</p>
                    <p class="id">67010858</p>
                </div>
            </div>
            <div class="member">
                <img src="https://lh3.googleusercontent.com/d/18d8yaUKgsN2MNaUsKkUxpuzECdlJvLi6" alt="Member 5">
                <div class="member-detail">
                    <p class="name">Sorawit Petpiboonthai</p>
                    <p class="id">67010926</p>
                </div>
            </div>
            <div class="member">
                <img src="https://lh3.googleusercontent.com/d/1HYvB20wMarnTX3C4cjs3IC23aUiS-Ubm" alt="Member 5">
                <div class="member-detail">
                    <p class="name">Achiravit Vanasinchai</p>
                    <p class="id">67011679</p>
                </div>
            </div>
        </div>
    </div>
    `;

  const linkFooter = document.createElement("link");
  linkFooter.href = "../../styles/footer.css";
  linkFooter.rel = "stylesheet";
  document.querySelector("head").appendChild(linkFooter);
  document.querySelector("footer").innerHTML = footer;
}
