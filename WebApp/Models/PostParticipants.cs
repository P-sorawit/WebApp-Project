using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class PostParticipants
    {
        [Key]
        public int Id { get; set; }
        public int PostId { get; set; }
        public Post Post { get; set; } = null!;
        public int UserId { get; set; }
        public User User { get; set; } = null!;
        public string Status { get; set; } = "Pending";
        public ICollection<Answer> Answers { get; set; } = new List<Answer>();

    }
}