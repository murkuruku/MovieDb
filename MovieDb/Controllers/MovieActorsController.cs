using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieDataBase.Data;
using MovieDataBase.Models;

namespace MovieDb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieActorsController : ControllerBase
    {
        private readonly MovieDbContext _context;

        public MovieActorsController(MovieDbContext context)
        {
            _context = context;
        }

        // GET: api/MovieActors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MovieActors>>> GetMovieActors()
        {
            return await _context.MovieActors.ToListAsync();
        }

        // GET: api/MovieActors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MovieActors>> GetMovieActors(int id)
        {
            var movieActors = await _context.MovieActors.FindAsync(id);

            if (movieActors == null)
            {
                return NotFound();
            }

            return movieActors;
        }

        // PUT: api/MovieActors/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovieActors(int id, MovieActors movieActors)
        {
            if (id != movieActors.MovieId)
            {
                return BadRequest();
            }

            _context.Entry(movieActors).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieActorsExists(id))
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

        // POST: api/MovieActors
        [HttpPost]
        public async Task<ActionResult<MovieActors>> PostMovieActors(MovieActors movieActors)
        {

               /* var mathClass = new Class { Name = "Math" };
                Student student1 = context.Students.FirstOrDefault(s => s.Name == "Alice");
                Student student2 = context.Students.FirstOrDefault(s => s.Name == "Bob");
                mathClass.Students.Add(student1);
                mathClass.Students.Add(student2);

                context.AddToClasses(mathClass);
                context.SaveChanges();
            */
            _context.MovieActors.Add(movieActors);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MovieActorsExists(movieActors.MovieId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMovieActors", new { id = movieActors.MovieId }, movieActors);
        }

        // DELETE: api/MovieActors/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MovieActors>> DeleteMovieActors(int id)
        {
            var movieActors = await _context.MovieActors.FindAsync(id);
            if (movieActors == null)
            {
                return NotFound();
            }

            _context.MovieActors.Remove(movieActors);
            await _context.SaveChangesAsync();

            return movieActors;
        }

        private bool MovieActorsExists(int id)
        {
            return _context.MovieActors.Any(e => e.MovieId == id);
        }
    }
}
