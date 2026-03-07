[HttpGet("{userId}")]
public IActionResult GetNotifications(int userId)
{
    var noti = _context.Notifications
        .Where(n => n.UserId == userId)
        .OrderByDescending(n => n.CreatedAt)
        .ToList();

    foreach (var n in noti)
    {
        n.IsRead = true;
    }

    _context.SaveChanges();

    return Ok(noti);
}