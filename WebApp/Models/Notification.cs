using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class Notification
    {
        [Key]
        public int Id { get; set; }
        //ใครคือผู้รับการแจ้งเตือนนี้
        public int UserId { get; set; }
        public User User { get; set; } = null!;
        public string Message { get; set; } = null!;  // ข้อความแจ้งเตือน
        public string Type { get; set; } = null!; // ประเภทของการแจ้งเตือน เช่น ขอเข้าร่วม อนุมัติแล้ว หรือถูกปฏิเสธ
        public bool IsRead { get; set; } = false;
        public int? RelatedPostId { get; set; } // ถ้ามีการแจ้งเตือนเกี่ยวกับโพสต์ จะเก็บ PostId ไว้
        public Post? RelatedPost { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}