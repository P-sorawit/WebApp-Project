using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class Answer
    {
        [Key]
        public int Id { get; set; }
        public int PostParticipantsId { get; set; }
        public PostParticipants PostParticipants { get; set; } = null!;
        public int QuestionId { get; set; }
        public Question Question { get; set; } = null!;
        public string AnswerText { get; set; } = null!;
    }
}