using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class Rating
    {
        [Key]
        public int Id { get; set; }
        // ใครเป็นคน "ให้" คะแนน 
        public int ReviewerId { get; set; }
        public User Reviewer { get; set; } = null!;
        // ใครเป็นคน "ถูกให้" คะแนน (Target/Ratee)
        public int TargetUserId { get; set; }
        public User TargetUser { get; set; } = null!;
        public int Score { get; set; } // คะแนนที่ให้ (1-5)
        public string Comment { get; set; } = null!; // ความคิดเห็นเพิ่มเติม 
        public int PostId { get; set; } 
        public Post Post { get; set; } = null!;

    }
}