using Microsoft.EntityFrameworkCore;
using MovieDataBase.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieDataBase.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options)
        {

        }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<Actor> Actors { get; set; }
        public DbSet<MovieActors> MovieActors { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MovieActors>()
                .HasKey(m => new { m.MovieId, m.ActorId });

            modelBuilder.Entity<MovieActors>()
                .HasOne(m => m.Movie)
                .WithMany(a => a.MovieActors)
                .HasForeignKey(k => k.MovieId);

            modelBuilder.Entity<MovieActors>()
                .HasOne(a => a.Actor)
                .WithMany(m => m.MovieActors)
                .HasForeignKey(k => k.ActorId);
        }
    }
}
