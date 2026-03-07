using Microsoft.AspNetCore.Http;

namespace WebApp.Models
{
    public class CreatePostDto
    {
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string Tag { get; set; } = null!; // Maps to Type
        public IFormFile? Photo { get; set; }    // Handles the image file
        public IFormFile? Qr { get; set; }       // Handles the QR file
        
        // The frontend sends questions as a JSON string: "[\"Question 1\", \"Question 2\"]"
        public string? Questions { get; set; }   
    }
}