using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAgent.Common
{
    public interface IAgent
    {
        Task ApplicationChanged(ApplicationModel applicationName);
    }
}
