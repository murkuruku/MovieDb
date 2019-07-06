using System.Collections.Generic;
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
    public class ActorsController : ControllerBase
    {
        private readonly MovieDbContext _context;

        public ActorsController(MovieDbContext context)
        {
            _context = context;
        }

        // GET: api/Actors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Actor>>> GetActors()
        {
            return await _context.Actors.ToListAsync();
        }

        // GET: api/Actors/All
        [HttpGet("All")]
        public  IEnumerable<Actor> All()
        {
            var actors =  _context.Actors.ToList();
            var movies = _context.MovieActors.ToList();

            var result = actors.GroupJoin(movies,
                         actor => actor.ActorId,
                         movie => movie.ActorId,
                         (actor, movieColletion) =>
                             new Actor
                             {
                                 ActorId = actor.ActorId,
                                 Name = actor.Name,
                                 Age = actor.Age,
                                 MovieActors = movieColletion.Select(movie => {
                                     var mv = new MovieActors
                                     {
                                         MovieId = movie.MovieId,
                                         ActorId= actor.ActorId,
                                     };
                                     return mv;
                                 })

                             });

            return  result;
        }


        // GET: api/Actors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Actor>> GetActor(int id)
        {
            var actor = await _context.Actors.FindAsync(id);

            if (actor == null)
            {
                return NotFound();
            }

            return actor;
        }

        
        // PUT: api/Actors/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutActor(int id, Actor actor)
        {
            if (id != actor.ActorId)
            {
                return BadRequest();
            }

            _context.Entry(actor).State = EntityState.Modified;
            var actors = new List<MovieActors>();
            actors.AddRange(actor.MovieActors);
            var tablema = _context.MovieActors.Where(x => x.ActorId == actor.ActorId).ToList();
            _context.MovieActors.RemoveRange(tablema);
            _context.MovieActors.AddRange(actors);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActorExists(id))
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

        // POST: api/Actors
        [HttpPost]
        public async Task<ActionResult<Actor>> PostActor(Actor actor)
        {
            _context.Actors.Add(actor);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetActor", new { id = actor.ActorId }, actor);
        }

        // DELETE: api/Actors/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Actor>> DeleteActor(int id)
        {
            var actor = await _context.Actors.FindAsync(id);
            if (actor == null)
            {
                return NotFound();
            }

            _context.Actors.Remove(actor);
            await _context.SaveChangesAsync();

            return actor;
        }

        private bool ActorExists(int id)
        {
            return _context.Actors.Any(e => e.ActorId == id);
        }
    }
}
