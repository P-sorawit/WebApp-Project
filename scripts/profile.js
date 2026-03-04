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
        element.style.borderColor = "black";
        element.style.color = "#bbb8b8";
        element.style.backgroundColor = "#404040";
    }
    document.getElementById('edit-btn').style.display = 'block';
    document.getElementById('save-btn').style.display = 'none';
}