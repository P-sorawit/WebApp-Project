user = {
    username: "P.sorawit",
    image_url: "../../assets/member/nut.png",
    email: "67010926@kmitl.ac.th",
    phone: "0912345678",
    about: "I am a dedicated and results-driven professional with a passion for solving complex problems and delivering high-quality work. With a background in [Your Industry/Field], I thrive in collaborative environments where I can leverage my skills in [Skill 1] and [Skill 2] to drive meaningful impact. I am a lifelong learner committed to staying ahead of industry trends and consistently looking for ways to streamline processes and add value to my team.",
    rating: 4.5,
}

let selectedFile = null;

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        selectedFile = file;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-img').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function toggleEdit() {
    document.getElementById('edit-btn').style.display = 'none';
    document.getElementById('save-btn').style.display = 'block';
    document.getElementById('profile-img').style.cursor = "pointer";
    const username = document.getElementById('Username');
    const email = document.getElementById('Email');
    const phone = document.getElementById('Phone');
    const about = document.getElementById('About');
    const arrayElement = [username, email, phone, about];
    for (const element of arrayElement) {
        element.readOnly = false;
        element.style.borderColor = "#ffff";
        element.style.color = "black";
        element.style.backgroundColor = "#ffff";
    }

}

async function saveProfile() {  
    const oldImageSrc = user.image_url;
    const profileImgElement = document.getElementById('profile-img');
    const username = document.getElementById('Username');
    const email = document.getElementById('Email');
    const phone = document.getElementById('Phone');
    const about = document.getElementById('About');
    const arrayElement = [username, email, phone, about];
    for (const element of arrayElement) {
        if (username.value.trim() === "") {
            alert("Please fill username");
            return;
        }else if(email.value.trim() === ""){
            alert("Please fill Eamil");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            alert("รูปแบบอีเมลไม่ถูกต้อง");
            email.focus();
            return;
        }

        const phonePattern = /^[0-9]{9,10}$/;
        const purePhone = phone.value.replace(/-/g, "");
        if (!phonePattern.test(purePhone)) {
            alert("กรุณากรอกเบอร์โทรศัพท์เป็นตัวเลข 9-10 หลัก");
            phone.focus();
            return;
        }
        element.readOnly = true;
        element.style.borderColor = "rgba(255, 255, 255, 0.624)";
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#97a6e445";
    }
    document.getElementById('edit-btn').style.display = 'block';
    document.getElementById('save-btn').style.display = 'none';

    const formData = new FormData();
    formData.append('username', document.getElementById('Username').value);
    formData.append('email', document.getElementById('Email').value);
    formData.append('phone', document.getElementById('Phone').value);
    formData.append('about', document.getElementById('About').value);

    if (selectedFile) {
        formData.append('profile_image', selectedFile);
    }

    try {
        const response = await fetch('/api/update-profile', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert("บันทึกสำเร็จ!");
            user.image_url = profileImgElement.src;
            finishEditing(); 
        } else {
            alert("เกิดข้อผิดพลาด: ไม่สามารถบันทึกข้อมูลได้");
            profileImgElement.src = oldImageSrc;
            selectedFile = null;
        }
    } catch (error) {
        console.error("Network Error:", error);
        alert("ไม่สามารถติดต่อเซิร์ฟเวอร์ได้ รูปภาพจะถูกย้อนกลับ");
        profileImgElement.src = oldImageSrc;
    }
}

function setData(){
    document.querySelector("#profile-img").src = user.image_url
    document.querySelector("#point").textContent = user.rating
    document.querySelector("#Username").value = user.username
    document.querySelector("#Email").value = user.email
    document.querySelector("#Phone").value = user.phone
    document.querySelector("#About").textContent = user.about

    const starContainer = document.querySelector("#star");

    for (let i = 1; i <= 5; i++) {
        const p = document.createElement("p");
        p.id = `po${i}`;
        p.innerHTML = "&#9733;";

        const rating = user.rating;
        const fullStars = Math.floor(rating);
        const decimal = (rating % 1) * 100;

        if (i <= fullStars) {
            p.style.color = "#5a68ff";
        } else if (i === fullStars + 1 && decimal > 0) {
            p.style.background = `linear-gradient(90deg, #5a68ff ${decimal}%, #ccc ${decimal}%)`;
            p.style.webkitBackgroundClip = "text";
            p.style.webkitTextFillColor = "transparent";
        } else {
            p.style.color = "#ccc";
        }

        starContainer.appendChild(p);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    setData();
    const profileImg = document.getElementById('profile-img');
    const uploadInput = document.getElementById('upload-img');
    const saveBtn = document.getElementById('save-btn');

    if (profileImg && uploadInput) {
        profileImg.onclick = () => {
            if (saveBtn.style.display === 'block') {
                uploadInput.click();
            }
        };
    }
});