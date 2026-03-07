import { Card } from "./card.js";

async function loadPosts() {
    try {
        // 1. Fetch the real data from your C# backend!
        const response = await fetch('/Post/GetAllPosts');
        
        if (!response.ok) {
            throw new Error("Failed to fetch posts from the server");
        }

        const posts = await response.json();
        const div = document.getElementById("all-post");
        
        // Clear any existing loading text
        div.innerHTML = ""; 

        // 2. Loop through the real database posts and create cards
        for (const element of posts) {
            div.appendChild(Card(element));
        }
    } catch (error) {
        console.error("Error loading posts:", error);
        document.getElementById("all-post").innerHTML = "<p>Failed to load posts.</p>";
    }
}

// Call the function when the script loads
loadPosts();