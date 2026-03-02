using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class Question
    {
        [Key]
        public int Id { get; set; }
        public int PostId { get; set; }
        public Post Post { get; set; } = null!;
        public string QuestionText { get; set; } = null!;
        public ICollection<Answer> Answer { get; set; } = new List<Answer>();
    }
}