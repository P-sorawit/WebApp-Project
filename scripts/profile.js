function toggleEdit() {
    document.getElementById('edit-btn').style.display = 'none';
    document.getElementById('save-btn').style.display = 'block';
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
function saveProfile() {
    
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
}

function setStar(){
    const rating = parseInt(5);
    const star1 = document.getElementById('po1');
    const star2 = document.getElementById('po2');
    const star3 = document.getElementById('po3');
    const star4 = document.getElementById('po4');
    const star5 = document.getElementById('po5');
    if(rating === 5){
        star1.style.color = '#5a68ff';
        star2.style.color = '#5a68ff';
        star3.style.color = '#5a68ff';
        star4.style.color = '#5a68ff';
        star5.style.color = '#5a68ff';
    }else if(rating === 4){
        star1.style.color = '#5a68ff';
        star2.style.color = '#5a68ff';
        star3.style.color = '#5a68ff';
        star4.style.color = '#5a68ff';
        star5.style.color = '#ffff';
    }else if(rating === 3){
        star1.style.color = '#5a68ff';
        star2.style.color = '#5a68ff';
        star3.style.color = '#5a68ff';
        star4.style.color = '#ffff';
        star5.style.color = '#ffff';
    }else if(rating === 2){
        star1.style.color = '#5a68ff';
        star2.style.color = '#5a68ff';
        star3.style.color = '#ffff';
        star4.style.color = '#ffff';
        star5.style.color = '#ffff';
    }else if(rating === 1){
        star1.style.color = '#5a68ff';
        star2.style.color = '#ffff';
        star3.style.color = '#ffff';
        star4.style.color = '#ffff';
        star5.style.color = '#ffff';
    }else{
        star1.style.color = '#ffff';
        star2.style.color = '#ffff';
        star3.style.color = '#ffff';
        star4.style.color = '#ffff';
        star5.style.color = '#ffff';
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    setStar();
});