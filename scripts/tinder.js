const selectList = [];

const mock_data = {
    titile: "รับสมัครคนบ้า",
    max: 3,
    candidate: [
        {
            username: "Ken Eiei",
            email: "w@gmail.com",
            phone: "0123456789",
            image: "../../assets/member/ken.png",
            rating: 4.5,
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita veritatis facilis voluptates quibusdam, incidunt nobis ratione, ab nemo eligendi molestiae necessitatibus odio, sed quam quia recusandae placeat asperiores ut.",
            q_a: [
                {
                    question: "1+1=?",
                    answer: "3",
                },{
                    question: "2^2=?",
                    answer: "4",
                },{
                    question: "iEEE754 ของ 10 คือ?",
                    answer: "100101201011.101",
                },
            ]
        },
        {
            username: "Natto ",
            email: "n@gmail.com",
            phone: "0123456798",
            image: "../../assets/member/nut.png",
            rating: 0,
            about: "eieieieieiei Lorem ipsum dolor sit amet consectetur adipisicing ",
            q_a: [
                {
                    question: "1+1=?",
                    answer: "2",
                },{
                    question: "2^2=?",
                    answer: "8",
                },{
                    question: "iEEE754 ของ 10 คือ?",
                    answer: "1010",
                },
            ]
        },
        {
            username: "Cardder",
            email: "card@gmail.com",
            phone: "0123456798",
            image: "../../assets/member/card.jpg",
            rating: 2.45,
            about: "eieieieieiei Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita veritatis facilis voluptates quibusdam, incidunt nobis ratione, ab nemo eligendi molestiae necessitatibus odio, sed quam quia recusandae placeat asperiores ut.",
            q_a: [
                {
                    question: "1+1=?",
                    answer: "2",
                },{
                    question: "2^2=?",
                    answer: "8",
                },{
                    question: "iEEE754 ของ 10 คือ?",
                    answer: "1010",
                },
            ]
        },
        {
            username: "Neanu",
            email: "n@gmail.com",
            phone: "0123456798",
            image: "../../assets/member/neanea.png",
            rating: 2.8,
            about: "eieieieieiei Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita veritatis facilis voluptates quibusdam, incidunt nobis ratione, ab nemo eligendi molestiae necessitatibus odio, sed quam quia recusandae placeat asperiores ut.",
            q_a: [
                {
                    question: "1+1=?",
                    answer: "2",
                },{
                    question: "2^2=?",
                    answer: "8",
                },{
                    question: "iEEE754 ของ 10 คือ?",
                    answer: "1010",
                },
            ]
        },
        {
            username: "Mattew",
            email: "m@gmail.com",
            phone: "0123456798",
            image: "../../assets/member/mattew.png",
            rating: 3.0,
            about: "eieieieieiei Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita veritatis facilis voluptates quibusdam, incidunt nobis ratione, ab nemo eligendi molestiae necessitatibus odio, sed quam quia recusandae placeat asperiores ut.",
            q_a: [
                {
                    question: "1+1=?",
                    answer: "2",
                },{
                    question: "2^2=?",
                    answer: "8",
                },{
                    question: "iEEE754 ของ 10 คือ?",
                    answer: "1010",
                },
            ]
        },
        {
            username: "wettaM",
            email: "n@gmail.com",
            phone: "0123456798",
            image: "../../assets/member/mattew1.png",
            rating: 3.0,
            about: "eieieieieiei Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita veritatis facilis voluptates quibusdam, incidunt nobis ratione, ab nemo eligendi molestiae necessitatibus odio, sed quam quia recusandae placeat asperiores ut.",
            q_a: [
                {
                    question: "1+1=?",
                    answer: "2",
                },{
                    question: "2^2=?",
                    answer: "8",
                },{
                    question: "iEEE754 ของ 10 คือ?",
                    answer: "1010",
                },
            ]
        },
    ]
};

let num = 0;
let person = 0;
let question_now = 0;
let all_person = mock_data.candidate.length;
const tinder = document.createElement('div');
tinder.className='tinderContainer'
tinder.innerHTML = `
    <div id="memberCount">
        <h3>คนที่ ${person + 1} จาก ${all_person}</h3>
    </div>
    <div id="post">
        <h1>${mock_data.titile}</h1>
        <div id="post-member">${selectList.length}/${mock_data.max}</div>
    </div>
    <div id="user">
        <img id="user-image" alt="image">
        <div id="user-info">
            <div id="info">
            </div>
        </div>
    </div>
    <div id="QA">
        <div id="QA-info">
        </div>
        <div id="btn-QA">
            <button id="backBtn">Back</button>
            <button id="nextBtn">Next</button>
        </div>
    </div>
    <div id="select">
        <div id="action-btn">
            <button id="selectBtn">
                &#9745;
            </button>
            <button id="unselectBtn">
                &#9746;
            </button>
        </div>
            <button id="mouse">
                mouse click left/right
            </button>
    </div>
`
const popup = document.createElement('div');
popup.className='popupContainer'
popup.innerHTML = `
    <div id=popup>
    </div>
`

const mouse = tinder.querySelector("#mouse");
const next = tinder.querySelector("#nextBtn");
const back = tinder.querySelector("#backBtn");
const select = tinder.querySelector("#selectBtn");
const unselect = tinder.querySelector("#unselectBtn");

next.addEventListener('click', () => {
    const totalQuestions = mock_data.candidate[person].q_a.length;
    if (question_now < totalQuestions - 1) {
        question_now++;
        updateQA();
    }
});

back.addEventListener('click', () => {
    if (question_now > 0) {
        question_now--;
        updateQA();
    }
});

mouse.addEventListener('click', (event) => {
    person++;
    if (person < all_person) {
        updateAllInfo();
    } else {
        showConfirmPopup();
    }
});

mouse.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    selectList.push(mock_data.candidate[person])
    tinder.querySelector("#post-member").innerHTML = `${selectList.length}/${mock_data.max}`
    console.log(selectList)
    if (selectList.length == mock_data.max) {
        showConfirmPopup();
        return
    }
    person++;
    if (person < all_person) {
        updateAllInfo();

    } else {
        showConfirmPopup();
    }
});

select.addEventListener('click', () => {
    selectList.push(mock_data.candidate[person])
    tinder.querySelector("#post-member").innerHTML = `${selectList.length}/${mock_data.max}`
    console.log(selectList)
    if (selectList.length == mock_data.max) {
        showConfirmPopup();
        return
    }
    person++;
    if (person < all_person) {
        updateAllInfo();

    } else {
        showConfirmPopup();
    }
});

unselect.addEventListener('click', () => {
    person++;
    if (person < all_person) {
        updateAllInfo();
    } else {
        showConfirmPopup();
    }
});

function updateQA() {
    const qaContainer = tinder.querySelector("#QA-info");
    const currentUser = mock_data.candidate[person];
    const currentQA = currentUser.q_a[question_now];

    qaContainer.innerHTML = `
        <div id="question">
            <h2>Question ${question_now + 1}: </h2>
            <h3>${currentQA.question}</h3>
        </div>
        <div id="answer">
            <h2>Answer</h2>
            <p>${currentQA.answer}</p>
        </div>
    `;
    
    back.style.display = (question_now === 0) ? "none" : "block";
    next.style.display = (question_now === currentUser.q_a.length - 1) ? "none" : "block";
};

function updateAllInfo() {
    const currentUser = mock_data.candidate[person];
    tinder.querySelector("#memberCount h3").innerText = `คนที่ ${person + 1} จาก ${all_person}`;
    
    tinder.querySelector("#user-image").src = currentUser.image;

    tinder.querySelector("#info").innerHTML = `
            <span>Username:</span> <span>${currentUser.username}</span>
            <span>Rating:</span>   <span id="rating">${currentUser.rating} <div id="star"></div></span>
            <span>Email:</span>    <span>${currentUser.email}</span>
            <span>Phone:</span>    <span>${currentUser.phone}</span>
            <span>About:</span>    <span>${currentUser.about}</span>
        `;

    const starContainer = tinder.querySelector("#star");

    for (let i = 1; i <= 5; i++) {
        const p = document.createElement("p");
        p.id = `po${i}`;
        p.innerHTML = "&#9733;";

        const rating = currentUser.rating;
        const fullStars = Math.floor(rating);
        const decimal = (rating % 1) * 100;

        if (i <= fullStars) {
            p.style.color = "#ffcc00";
        } else if (i === fullStars + 1 && decimal > 0) {
            p.style.background = `linear-gradient(90deg, #ffcc00 ${decimal}%, #ccc ${decimal}%)`;
            p.style.webkitBackgroundClip = "text";
            p.style.webkitTextFillColor = "transparent";
        } else {
            p.style.color = "#ccc";
        }

        starContainer.appendChild(p);
    }
    question_now = 0;
    updateQA();
}

function updateStars(rating) {
    const starContainer = tinder.querySelector("#star");
    starContainer.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const p = document.createElement("p");
        p.id = `po${i}`;
        p.innerHTML = "&#9733;";
        
        if (i <= rating) {
            p.style.color = "#ffcc00";
        } else if (i - 0.5 <= rating) {

            p.style.color = "#ffcc00"; 
            p.style.opacity = "0.5"; 
        } else {
            p.style.color = "#ccc";
        }
        
        starContainer.appendChild(p);
    }
}

function showConfirmPopup() {
    popup.style.display = "flex";
    
    const popupContent = popup.querySelector("#popup");
    popupContent.innerHTML = `
        <h2>Selection Complete!</h2>
        <p>You have selected ${selectList.length} member(s).</p>
        <ul>
            ${selectList.map(u => `<li>${u.username}</li>`).join('')}
        </ul>
        <div id="popupBtn">
            <button onclick="window.history.back()" id="cancleBtn">Cancle</button>
            <button onclick="window.location.reload()" id="restartBtn">Restart</button>
            <button onclick="" id="comfirmBtn">Confirm</button>
        </div>
    `;
};
updateAllInfo();

const container = document.getElementById('container')

container.appendChild(tinder)
container.appendChild(popup)

