import { myPostCard } from "./myPostCard.js";
const data = {
  post: [
    {
      title: "คนบ้า",
      description: "รับสมาชิกอยู่ กทถึง 4 คน แต่รอฟฟตได้เป็นนายกก่อนนะ อุอิ",
      image: "https://i.pravatar.cc/30?img=1",
      owner: "../../assets/member/ken.png",
      members: ["../../assets/member/neanea.png","../../assets/member/nut.png"],
      category: "Sport",
      size: "3-5",
      now: 3,
      max: 5,
    },
    {
      title: "คนบ้า",
      description: "รับสมาชิกอยู่ กทถึง 4 คน แต่รอฟฟตได้เป็นนายกก่อนนะ อุอิ",
      image: "https://i.pravatar.cc/30?img=1",
      owner: "../../assets/member/neanea.png",
      members: ["../../assets/member/mattew.png","../../assets/member/nut.png"],
      category: "Sport",
      size: "3-5",
      now: 3,
      max: 5,
    },
    {
      title: "คนบ้า",
      description: "รับสมาชิกอยู่ กทถึง 4 คน แต่รอฟฟตได้เป็นนายกก่อนนะ อุอิ",
      image: "https://i.pravatar.cc/30?img=1",
      owner: "../../assets/member/nut.png",
      members: ["../../assets/member/neanea.png","https://i.pravatar.cc/30?img=3","https://i.pravatar.cc/30?img=2","../../assets/member/mattew1.png","https://i.pravatar.cc/30?img=2","https://i.pravatar.cc/30?img=3","https://i.pravatar.cc/30?img=2","https://i.pravatar.cc/30?img=3","https://i.pravatar.cc/30?img=2","https://i.pravatar.cc/30?img=3","https://i.pravatar.cc/30?img=2","https://i.pravatar.cc/30?img=3","https://i.pravatar.cc/30?img=2","https://i.pravatar.cc/30?img=3",],
      category: "Sport",
      size: "3-5",
      now: 3,
      max: 5,
    },
    {
      title: "คนบ้า",
      description: "รับสมาชิกอยู่ กทถึง 4 คน แต่รอฟฟตได้เป็นนายกก่อนนะ อุอิ",
      image: "https://i.pravatar.cc/30?img=1",
      owner: "../../assets/member/mattew.png",
      members: ["https://i.pravatar.cc/30?img=2","https://i.pravatar.cc/30?img=3",],
      category: "Sport",
      size: "3-5",
      now: 3,
      max: 5,
    },
    {
      title: "คนบ้า",
      description: "รับสมาชิกอยู่ กทถึง 4 คน แต่รอฟฟตได้เป็นนายกก่อนนะ อุอิ",
      image: "https://i.pravatar.cc/30?img=1",
      owner: "../../assets/member/mattew1.png",
      members: ["https://i.pravatar.cc/30?img=2","https://i.pravatar.cc/30?img=3",],
      category: "Sport",
      size: "3-5",
      now: 6,
      max: 5,
    }
  ]
};
const div = document.getElementById("my-post");
for (const element of data.post) {
  div.appendChild(myPostCard(element));
}
