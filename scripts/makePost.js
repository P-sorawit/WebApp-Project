export function haddleMakePost(){
    const link = document.createElement("link")
    link.href = "../../styles/makePost.css"
    link.rel = "stylesheet"
    document.querySelector("head").appendChild(link)
    let isShowing = false


    const container = document.getElementById("makePostContainer")
    container.setAttribute("class","makePostContainer")
    container.addEventListener("click",()=> {
        isShowing = false
        container.style.display="None"
        container.innerHTML=""
    })


    const button = document.getElementById("makePost")
    button.addEventListener("click",()=>{
        isShowing = true
        container.style.display="flex"
        container.innerHTML=`<form id="boxMakePost">
            <h1>Make Post</h1>
            <div class="layoutMakePost">
                <div>
                    <h3>Photo</h3>
                    <div class="upload-box" id="uploadBox">
                        <span class="plus" id="plus">+</span>
                        <img id="preview" style="display:none;" />
                    </div>
                    <input type="file" id="fileInput" accept="image/*" />
                    <div>
                        <label>Tag :</label>
                        <select name="tag">
                            <option value="" selected disabled>Select tag</option>
                            <option value="th">Sport</option>
                            <option value="jp">Party</option>
                            <option value="us">Game</option>
                        </select>
                    </div>

                    <h3>Questions</h3>
                    <div class="upload-box2" id="addQuestion">
                        <span class="plus" id="plus">+</span>
                    </div>
                </div>
                <div class="fillInput2MakePost">
                    <h3>Title</h3>
                    <input type="text" placeholder="Title">
                    <h3>Description</h3>
                    <textarea placeholder="Description" rows="4" cols="50"></textarea>
                </div>
                
            </div>
            <div class="footerMakePost">
                <input type="button" value="Back" id="backMakePost">
                <input type="submit" value="Done" id="submitMakePost">
            </div>
            
        </form>`
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