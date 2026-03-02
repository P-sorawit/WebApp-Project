using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class Post
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        // public string RequiredParticipants { get; set; } 
        // RequiredParticipants => 2-4 players, 5-10 attendees
        public string Type { get; set; } = null!; 
        // Type => sport game musical concert 
        public string Description { get; set; } = null!;
        public int MaxParticipants { get; set; }
        public int MinParticipants { get; set; }
        public int CreatedById { get; set; }
        public User CreatedBy { get; set; } = null!;
        public ICollection<Question> Questions { get; set; } = new List<Question>();
        // renamed for consistency with DbContext mapping
        public ICollection<PostParticipants> PostParticipants { get; set; } = new List<PostParticipants>();
        public ICollection<Rating> Ratings { get; set; } = new List<Rating>();
        public ICollection<Notification> Notifications { get; set; } = new List<Notification>();
        public DateTime CreatedAt { get; set; } 
    }
}