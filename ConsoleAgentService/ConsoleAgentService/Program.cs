using AgentInterface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAgentService
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] array = new char[3];
            array[0] = 'I';
            array[1] = 'I';
            array[2] = '\0';
            Console.WriteLine(array);
            Agent agent = new Agent();
            PCTracker.TrackFocusPrograms tracker = new PCTracker.TrackFocusPrograms(agent);
            Console.ReadLine();
        }
    }
}
