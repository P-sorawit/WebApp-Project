import { addQuestion } from "./addQuestion.js"

export function haddleMakePost(){
    const link = document.createElement("link")
    link.href = "/css/makePost.css"
    link.rel = "stylesheet"
    document.querySelector("head").appendChild(link)
    let isShowing = false
    const showQuestionButton = document.createElement("input")
    showQuestionButton.setAttribute("class","showQuestionButton")
    showQuestionButton.setAttribute("type","button")
    showQuestionButton.setAttribute("value","Show All Questions")

    const container = document.getElementById("makePostContainer")
    container.setAttribute("class","makePostContainer")
    container.addEventListener("click",()=> {
        isShowing = false
        container.style.display="None"
        container.innerHTML=""
    })

  
    const button = document.getElementById("makePost")
    button.addEventListener("click",()=>{
        let questions =[]
        isShowing = true
        container.style.display="flex"
        container.innerHTML=`<form id="boxMakePost">
            <h1>Make Post</h1>
            <div class="layoutMakePost">
                <div id="leftMakePost">
                    <h3>Photo</h3>
                    <div class="upload-box" id="uploadBox">
                        <span class="plus" id="plus">+</span>
                        <img id="preview" style="display:none;" />
                    </div>
                    <input type="file" id="fileInput" accept="image/*" />
                    <div>
                        <label>Tag :</label>
                        <select name="tag" id="tagSelect">
                            <option value="" selected disabled>Select tag</option>
                            <option value="th">Sport</option>
                            <option value="jp">Party</option>
                            <option value="us">Game</option>
                        </select>
                    </div>

                    <h3 id="QuestionsTitle">Questions</h3>
                    <div class="upload-box2" id="addQuestion">
                        <span class="plus" id="plus">+</span>
                    </div>
                </div>
                <div class="fillInput2MakePost">
                    <h3>Title</h3>
                    <input type="text" placeholder="Title" id="titleInput">
                    <h3>Description</h3>
                    <textarea placeholder="Description" rows="4" cols="50" id="descInput"></textarea>
                    <label for="qrInput" class="uploadQrBtn">
                        Upload your QR code group image
                    </label>
                    <input type="file" id="qrInput" accept="image/*" / hidden>
                </div>
                
            </div>
            <div class="footerMakePost">
                <input type="button" value="Back" id="backMakePost">
                <input type="submit" value="Done" id="submitMakePost">
            </div>
            <div class=addQuestionContainer id="addQuestionContainer">
        </form>`

        const inputQR = document.getElementById("qrInput")
        const label = document.querySelector(".uploadQrBtn")
        inputQR.addEventListener("change", () => {
            const file = inputQR.files[0]
            if(!file) return

            const name = file.name
            const ext = name.split(".").pop()

            let base = name.replace("." + ext, "")

            if(base.length > 18){
                base = base.substring(0,18) + "... "
            }

            label.textContent = base + "." + ext
        })

        const backButton = document.getElementById("backMakePost")
        backButton.addEventListener("click",()=>{
            isShowing = false
            container.style.display="None"
            container.innerHTML=""
        })
        const box =document.getElementById("boxMakePost")
            box.addEventListener("click",(e)=>{
                e.stopPropagation()
        })
        const uploadBox = document.getElementById('uploadBox');
        const fileInput = document.getElementById('fileInput');
        const preview = document.getElementById('preview');
        const plus = document.getElementById('plus');

        uploadBox.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', () => {
            const file = fileInput.files[0];
            if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
                plus.style.display = 'none';
            };

            reader.readAsDataURL(file);
            }
        });
        const questionButton = document.getElementById("addQuestion")
        const questionContainer = document.getElementById("addQuestionContainer")
        
        questionButton.addEventListener("click",()=>{
            questionContainer.style.display = "flex"
            questionContainer.innerHTML = `
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

            const boxQuestion = document.getElementById("boxAddQuestion")
            boxQuestion.addEventListener("click",(e)=>{
                e.stopPropagation()
            })


            const submitAddQuestion = document.getElementById("submitAddQuestion")
            submitAddQuestion.addEventListener("click", () => {
                const question = document.getElementById("question").value
                if (question.length  > 5 ){
                    questions.push(question)
                    let questionTitle = document.getElementById("QuestionsTitle")
                    questionTitle.innerHTML =`${questions.length} Questions Avaliable`
                    questionContainer.click()
                    if (questions.length===1){
                        let leftMakePost =document.getElementById("leftMakePost")
                        
                        
                        leftMakePost.appendChild(showQuestionButton)
                        showQuestionButton.addEventListener('click',()=>{
                            let index = 0
                            questionContainer.style.display = "flex"
                            questionContainer.innerHTML = `
                                    <div class="boxQuestion" id="boxShowQuestion">
                                        <div>
                                            <h3>Questions</h3>
                                            <div id="showQuestions" class="showQuestions">
                                            </div>
                                            <div class="footerShowQuestion">
                                                <input type="button" value="Done" id="doneShowQuestion">
                                            </div>
                                        </div>    
                                    </div>
                                `
                            const showQuestions = document.getElementById("showQuestions")
                            questions.forEach((item,index)=>{
                                let q = document.createElement("p")
                                q.innerHTML=`Question ${index+1} : ${item}`
                                showQuestions.appendChild(q)
                            })
                            const boxShowQuestion = document.getElementById("boxShowQuestion")
                            boxShowQuestion.addEventListener("click",(e)=>{
                                e.stopPropagation()
                            })
                            const backShowQuestion = document.getElementById("doneShowQuestion")
                            backShowQuestion.addEventListener("click",()=>{
                                questionContainer.click()
                            })
                        })
                    }
                }
                else{
                    alert("The question shoulde longer than 5 words.")
                }
            })

            const backAddQuestion = document.getElementById("backAddQuestion")
            backAddQuestion.addEventListener("click",()=>{
                questionContainer.click()
            })

        })
        questionContainer.addEventListener("click",()=>{
            questionContainer.style.display = "None"

        })
        const linkQuestion = document.createElement("link")
        linkQuestion.href = "/css/addQuestion.css"
        linkQuestion.rel = "stylesheet"
        document.querySelector("head").appendChild(linkQuestion)

        const form = document.getElementById("boxMakePost")
        form.addEventListener("submit", async (e) => {
            e.preventDefault()

            const title = document.getElementById("titleInput").value.trim()
            const description = document.getElementById("descInput").value.trim()
            const tag = document.getElementById("tagSelect").value

            const photo = fileInput.files[0]
            const qrImage = inputQR.files[0]

            if(title.length < 5){
                alert("Title must be longer than 5 characters")
                return
            }

            if(description.length < 5){
                alert("Description must be longer than 5 characters")
                return
            }

            if(!tag){
                alert("Please select a tag")
                return
            }

            if(!photo){
                alert("Please upload a photo")
                return
            }

            if(!qrImage){
                alert("Please upload a QR image")
                return
            }

            const allowedTypes = ["image/jpeg","image/png"]

            if(!allowedTypes.includes(photo.type)){
                alert("Photo must be JPG or PNG")
                return
            }

            if(!allowedTypes.includes(qrImage.type)){
                alert("QR image must be JPG or PNG")
                return
            }


            const formData = new FormData()

            formData.append("title",title)
            formData.append("description",description)
            formData.append("tag",tag)
            formData.append("photo",photo)
            formData.append("qr",qrImage)
            formData.append("questions",JSON.stringify(questions))

            console.log("Ready to send")
            console.log(formData)

            try {
                // Pointing to the new C# PostController route we created
                const res = await fetch("/Post/CreatePostApi", {
                    method: "POST",
                    body: formData
                });

                if (res.ok) {
                    const data = await res.json();
                    console.log("Server:", data);
                    alert("Post created successfully!");
                    
                    // Close the modal upon success
                    isShowing = false;
                    container.style.display = "None";
                    container.innerHTML = "";
                    
                    // Optional: reload the page to show the new post
                    window.location.reload(); 
                } else {
                    // Handle errors (e.g., not logged in, bad request)
                    const errorData = await res.text();
                    console.error("Server Error:", errorData);
                    alert("Failed to create post. Make sure you are logged in!");
                }

            } catch(err) {
                console.error("Network or parsing error:", err);
                alert("A network error occurred.");
            }

        })


    })



    
    
    // const div = document.createElement("div")
    // const head = document.createElement("h1")
    // const layout = document.createElement("form")
    // const footer = document.createElement("div")

    // head.innerHTML = "Make Post"
    // head.setAttribute("class","headMakePost")
    // layout.setAttribute("class","layoutMakePost")
    // div.appendChild(head)
    // div.appendChild(layout)
    // container.appendChild(div)
}