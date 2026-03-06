const mock_data = {
    titile: "รับสมัครคนบ้า",
    max: 10,
    candidate: [
        {
            user: {
                username: "Ken Eiei",
                email: "w@gmail.com",
                phone: "0123456789",
                image: "../../assets/member/ken.png",
                rating: 4.5,
                abourt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita veritatis facilis voluptates quibusdam, incidunt nobis ratione, ab nemo eligendi molestiae necessitatibus odio, sed quam quia recusandae placeat asperiores ut.",
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
            }
        },
        {
            user: {
                username: "Natto ",
                email: "n@gmail.com",
                phone: "0123456798",
                image: "../../assets/member/nut.png",
                rating: 3.0,
                abourt: "eieieieieiei Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita veritatis facilis voluptates quibusdam, incidunt nobis ratione, ab nemo eligendi molestiae necessitatibus odio, sed quam quia recusandae placeat asperiores ut.",
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
            }
        },
    ]
};

let num = 0;
let person = 0;
let question_now = 0;
let all_person = mock_data.candidate.length;
const div = document.createElement('div');
div.className='tinder'
div.innerHTML = `
    <div id="memberCount">
        <h3>คนที่ ${person + 1} จาก ${all_person}</h3>
    </div>
    <div id="post">
        <h2 id="post-name">${mock_data.titile}</h2>
        <div id="post-member">${num}/${mock_data.max}</div>
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
                true
            </button>
            <button id="unselectBtn">
                false
            </button>
        </div>
        <button id="mouse">
        </div>
    </div>
`

const mouse = div.querySelector("#mouse");
const next = div.querySelector("#nextBtn");
const back = div.querySelector("#backBtn");
const select = div.querySelector("#selectBtn");
const unselect = div.querySelector("#unselectBtn");

mouse.addEventListener('click', (event) => {
    console.log("Left click detected!");
});

mouse.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log("Right click detected!");
});

next.addEventListener('click', () => {
    const totalQuestions = mock_data.candidate[person].user.q_a.length;
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

select.addEventListener('click', () => {
    person++;
    updateAllInfo();

});

unselect.addEventListener('click', () => {
    person--;
    updateAllInfo();

});

function updateQA() {
    const qaContainer = div.querySelector("#QA-info");
    const currentUser = mock_data.candidate[person].user;
    const currentQA = currentUser.q_a[question_now];

    qaContainer.innerHTML = `
        <h3>${currentQA.question}</h3>
        <p>${currentQA.answer}</p>
    `;
    
    back.disabled = (question_now === 0);
    next.disabled = (question_now === currentUser.q_a.length - 1);
};
function updateAllInfo() {
    const currentUser = mock_data.candidate[person].user;
    
    div.querySelector("#memberCount h3").innerText = `คนที่ ${person + 1} จาก ${all_person}`;
    
    div.querySelector("#user-image").src = currentUser.image;
    div.querySelector("#info").innerText = currentUser.abourt;
    
    question_now = 0;
    updateQA();
}
updateAllInfo();

const tinder = document.getElementById('container')
tinder.appendChild(div)

