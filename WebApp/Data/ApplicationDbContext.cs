using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;
using WebApp.Models;

namespace WebApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<PostParticipants> PostParticipants { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<PostParticipants>()
                .HasOne(pp => pp.Post)
                .WithMany(p => p.PostParticipants)
                .HasForeignKey(pp => pp.PostId);

            modelBuilder.Entity<PostParticipants>()
                .HasOne(pp => pp.User)
                .WithMany(u => u.PostParticipants)
                .HasForeignKey(pp => pp.UserId);

            modelBuilder.Entity<Answer>()
                .HasOne(a => a.PostParticipants)
                .WithMany(pp => pp.Answers)
                .HasForeignKey(a => a.PostParticipantsId);

            modelBuilder.Entity<Answer>()
                .HasOne(a => a.Question)
                .WithMany(q => q.Answer)
                .HasForeignKey(a => a.QuestionId);

            modelBuilder.Entity<Notification>()
                .HasOne(n => n.User)
                .WithMany(u => u.Notifications)
                .HasForeignKey(n => n.UserId);
            
            modelBuilder.Entity<Notification>()
                .HasOne(n => n.RelatedPost)
                .WithMany(p => p.Notifications)
                .HasForeignKey(n => n.RelatedPostId)
                .IsRequired(false);
            
            modelBuilder.Entity<Post>()
                .HasOne(p => p.CreatedBy)
                .WithMany(u => u.Posts)
                .HasForeignKey(p => p.CreatedById);
            
            modelBuilder.Entity<Question>()
                .HasOne(q => q.Post)
                .WithMany(p => p.Questions)
                .HasForeignKey(q => q.PostId);

            modelBuilder.Entity<Rating>()
                .HasOne(r => r.Reviewer)
                .WithMany(u => u.GivenRatings)
                .HasForeignKey(r => r.ReviewerId);

            modelBuilder.Entity<Rating>()
                .HasOne(r => r.TargetUser)
                .WithMany(u => u.ReceivedRatings)
                .HasForeignKey(r => r.TargetUserId);

            modelBuilder.Entity<Rating>()
                .HasOne(r => r.Post)
                .WithMany(p => p.Ratings)
                .HasForeignKey(r => r.PostId);
            modelBuilder.Entity<Post>()
                .Property(p => p.CreatedAt)
                .HasDefaultValueSql("NOW()");

                modelBuilder.Entity<Notification>()
                    .Property(n => n.CreatedAt)
                    .HasDefaultValueSql("NOW()");
        }
    }
}