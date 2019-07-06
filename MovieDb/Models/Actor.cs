using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MovieDataBase.Models
{
    public class Actor
    {
        public Actor()
        {
            MovieActors = new List<MovieActors>();
        }

        public int ActorId { get; set; }
        [Required, StringLength(50)]
        public string Name { get; set; }
        [Required]
        public int Age { get; set; }
        public IEnumerable<MovieActors> MovieActors { get; set; }
    }
}
