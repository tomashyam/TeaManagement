using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAgent.Common
{
    public class ApplicationModel
    {
        public string Name { get; set; }

        public string WindowTitle { get; set; }

        public DateTime FocusStartTime { get; set; }

        public DateTime FocusEndTime { get; set; }

        public string UserId { get; set; }
    }
}
