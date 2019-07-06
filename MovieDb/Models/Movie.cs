using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MovieDataBase.Models
{
    public class Movie
    {
        public Movie ()
        {
            MovieActors = new List<MovieActors>();
        }

        public int MovieId { get; set; }
        [Required, StringLength(50)]
        public string Title { get; set; }
        [Required]
        public int ReleasYear { get; set; }
        [Required]
        public Genre Genre { get; set; }

        public IEnumerable<MovieActors> MovieActors { get; set; }
    }
}

