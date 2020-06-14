using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Den.Dto
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }


        public static IEnumerable<User> GetSomeData()
        {
            for (int i = 0; i < 20; i++)
            {
                yield return new User()
                {
                    FirstName = (Guid.NewGuid()).ToString(), LastName = Guid.NewGuid().ToString(),
                    Email = Guid.NewGuid().ToString()
                };
            }
        }
    }
}
