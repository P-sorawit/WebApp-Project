function generate_member(name, rating, tel, email, img, type) {
    let memberBlock,ownerBlock;
    const Name = "Name: " + name;
    const Rating = "Rating: " + rating;
    const Tel = "Tel: " + tel;
    const Email = "Email: " + email;
    memberBlock = `
        <div class="Vmember">
            <img src="${img}" alt="${name}">
            <div class="member-detail">
                <p class="memberName">${Name}</p>
                <p class="rating">${Rating}</p>
                <p class="tel">${Tel}</p>
                <p class="email">${Email}</p>
            </div>
        </div>
    `;
    ownerBlock = `
        <div class="Vowner">
            <img src="${img}" alt="${name}">
            <div class="member-detail">
                <p class="memberName">${Name}</p>
                <p class="rating">${Rating}</p>
                <p class="tel">${Tel}</p>
                <p class="email">${Email}</p>
            </div>
        </div>
    `;
    if(type === 'owner'){
        return ownerBlock;
    }else{
        return memberBlock;
    }
}

export function gendataFromBackend(){
    const mock_data_nut = {
        title: "คนบ้า",
        description: "รับสมาชิกอยู่ กทถึง 4 คน แต่รอฟฟตได้เป็นนายกก่อนนะ อุอิ",
        image:"https://www.chula.ac.th/wp-content/uploads/2018/12/cu_101261_0001.jpg",
        owner: {
            id: "001",
            username: "Nut",
            image: "../../assets/member/nut.png",
            phone: "0123456789",
            email: "n@gmail.com",
            rating: 4.5,
        },
        members: [
        {
            id: "002",
            username: "Ken",
            image: "../../assets/member/ken.png",
            phone: "0123456798",
            email: "k@gmail.com",
            rating: 5,
        },
        {
            id: "003",
            username: "Neanea",
            image: "../../assets/member/neanea.png",
            phone: "0123456798",
            email: "neanea@gmail.com",
            rating: 3.8,
        },
        {
            id: "004",
            username: "Mattew",
            image: "../../assets/member/mattew.png",
            phone: "0123546798",
            email: "m@gmail.com",
            rating: 2.6,
        },
        {
            id: "005",
            username: "Mattew",
            image: "../../assets/member/mattew1.png",
            phone: "0123453498",
            email: "mattew@gmail.com",
            rating: 5,
        },
        {
            id: "006",
            username: "card",
            image: "https://lh3.googleusercontent.com/d/1CwQ5bTRtaYW_s258toHLpBChkmUMWnkR",
            phone: "0123456798",
            email: "c@gmail.com",
            rating: 0,
        },
        ],
        category: "Sport",
        size: "3-5",
    };

    let groupMember = "";

    for (let i of mock_data_nut.members){
        groupMember += generate_member(i.username, i.rating, i.phone, i.email, i.image, "mem")
    }
    document.querySelector('.Owner').innerHTML = generate_member(mock_data_nut.owner.username, mock_data_nut.owner.rating, mock_data_nut.owner.phone, mock_data_nut.owner.email, mock_data_nut.owner.image, "owner");
    document.querySelector('.groupMember').innerHTML = groupMember;
}


gendataFromBackend()