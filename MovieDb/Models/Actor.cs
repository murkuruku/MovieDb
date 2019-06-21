using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieDataBase.Models
{
    public class Actor
    {
        public Actor()
        {
            MovieActors = new List<MovieActors>();
        }

        public int ActorId { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public List<MovieActors> MovieActors { get; set; }
    }
}
