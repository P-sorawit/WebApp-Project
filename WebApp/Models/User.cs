using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email {get; set; } = null!;
        public string Password { get; set; } = null!;
        public string ImageUrl {get; set; } = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4kqSX7olduATclTx5-qwPKxAb26dBhQvKA&s";
        public string PhoneNumber { get; set; } = null!;
        public string? AboutMe { get; set; }
        public double AverageRating { get; set; } = 0.0;
        public ICollection<Post> Posts { get; set; } = new List<Post>();
        public ICollection<PostParticipants> PostParticipants { get; set; } = new List<PostParticipants>();
        public ICollection<Rating> GivenRatings { get; set; } = new List<Rating>(); 
        public ICollection<Rating> ReceivedRatings { get; set; } = new List<Rating>(); 
        public ICollection<Notification> Notifications { get; set; } = new List<Notification>();
    }
}