using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace randomizer.Controllers
{
    public class ParticipantController : ApiController
    {
        // GET: api/Participant
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Participant/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Participant
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Participant/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Participant/5
        public void Delete(int id)
        {
        }
    }
}
