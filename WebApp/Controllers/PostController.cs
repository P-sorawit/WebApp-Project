using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using WebApp.Data;
using WebApp.Models;
using System.Security.Claims;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;

namespace WebApp.Controllers
{
    public class PostController : Controller // Changed from ControllerBase to Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _env;

        public PostController(ApplicationDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        // 1. This returns the View to see ALL posts (Matches your navbar href="/Post")
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            // Fetch posts from database, including the user who created them
            var posts = await _context.Posts
                .Include(p => p.CreatedBy)
                .OrderByDescending(p => p.CreatedAt) // Newest first
                .ToListAsync();

            return View(posts); // This looks for Views/Post/Index.cshtml
        }

        // 2. This returns a View to see ONE specific post in detail
        [HttpGet]
        public async Task<IActionResult> Details(int id)
        {
            var post = await _context.Posts
                .Include(p => p.CreatedBy)
                .Include(p => p.Questions)
                .Include(p => p.PostParticipants)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (post == null)
            {
                return NotFound();
            }

            return View(post); // This looks for Views/Post/Details.cshtml
        }

        // 3. This receives the data from your makePost.js fetch() function
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreatePostApi([FromForm] CreatePostDto request)
        {
            var userIdString = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (!int.TryParse(userIdString, out int userId))
            {
                return Unauthorized("User not found.");
            }

            var questionsList = new List<Question>();
            if (!string.IsNullOrWhiteSpace(request.Questions))
            {
                var parsedQuestions = JsonSerializer.Deserialize<List<string>>(request.Questions);
                if (parsedQuestions != null)
                {
                    foreach (var qText in parsedQuestions)
                    {
                        questionsList.Add(new Question { QuestionText = qText });
                    }
                }
            }

            var newPost = new Post
            {
                Title = request.Title,
                Description = request.Description,
                Type = request.Tag,
                CreatedById = userId,
                Questions = questionsList,
                MaxParticipants = 10,
                MinParticipants = 2
            };

            _context.Posts.Add(newPost);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Post created successfully!", postId = newPost.Id });
        }
        
        [HttpGet]
        [Authorize] // This ensures only logged-in users can access the page
        public IActionResult Create()
        {
            return View(); // This will look for Views/Post/Create.cshtml
        }
    }
}