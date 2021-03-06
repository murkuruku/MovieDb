﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieDataBase.Data;
using MovieDataBase.Models;

namespace MovieDb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly MovieDbContext _context;

        public MoviesController(MovieDbContext context)
        {
            _context = context;
        }

        // GET: api/Movies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> GetMovies()
        {
            return await _context.Movies.ToListAsync();
        }

        // GET: api/Movies/All
        [HttpGet("All")]
        public  IEnumerable<Movie> All()
        {
            var movies = _context.Movies.ToList();

            var actors =  _context.MovieActors.ToList();

            var result = movies.GroupJoin(actors,
                         actor => actor.MovieId,
                         movie => movie.MovieId,
                         (movie, actorColletion) =>
                             new Movie
                             {
                                 MovieId = movie.MovieId,
                                 Title = movie.Title,
                                 ReleasYear = movie.ReleasYear,
                                 Genre =movie.Genre,
                                 MovieActors = actorColletion.Select(actor => {
                                     var mv = new MovieActors
                                     {
                                         MovieId = movie.MovieId,
                                         ActorId = actor.ActorId,
                                     };
                                     return mv;
                                 })

                             });

            return result;
        }

        // GET: api/Movies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Movie>> GetMovie(int id)
        {
            var movie = await _context.Movies.FindAsync(id);

            if (movie == null)
            {
                return NotFound();
            }

            return movie;
        }

        // PUT: api/Movies/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie(int id, Movie movie)
        {
            if (id != movie.MovieId)
            {
                return BadRequest();
            }

            _context.Entry(movie).State = EntityState.Modified;
            var movies = new List<MovieActors>();
            movies.AddRange(movie.MovieActors);
            var tablema = _context.MovieActors.Where(x => x.MovieId == movie.MovieId).ToList();
            _context.MovieActors.RemoveRange(tablema);
            _context.MovieActors.AddRange(movies);
                                
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Movies
        [HttpPost]
        public async Task<ActionResult<Movie>> PostMovie(Movie movie)
        {
            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMovie", new { id = movie.MovieId }, movie);
        }

        // DELETE: api/Movies/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Movie>> DeleteMovie(int id)
        {
            var movie = await _context.Movies.FindAsync(id);
            if (movie == null)
            {
                return NotFound();
            }

            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();

            return movie;
        }

        private bool MovieExists(int id)
        {
            return _context.Movies.Any(e => e.MovieId == id);
        }
    }
}
