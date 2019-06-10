using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieDataBase.Models
{
    public class Actor
    {
        public int ActorId { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public IList<MovieActors> MovieActors { get; set; }
    }
}
