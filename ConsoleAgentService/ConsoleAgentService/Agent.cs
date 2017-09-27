using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Collections.Generic;
using System.Linq;
using ConsoleAgent.Common;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAgentService
{
    class Agent : IAgent
    {

        #region C'tor
        private List<string> _ignoreApplications = new List<string>
        {
            "explorer.exe"
        };
        private ApplicationModel _currentApplication;
        private HttpClient httpClient = new HttpClient();
        public Agent()
        {
            
        }

        #endregion

        public DynamicKeyboardCommunicate.DynamicKeyboardCommunicateArduino DynamicKeyboard
        {
            get;
            set;
        }

        public async Task ApplicationChanged(ApplicationModel application)
        {
            try
            {
                if (_currentApplication != null)
                {
                    if (!_ignoreApplications.Contains(application.Name.ToLower()))
                    {
                        _currentApplication.FocusEndTime = DateTime.Now;
                        var result = await httpClient.PostAsJsonAsync("http://localhost:3000/applicationSessions/add", _currentApplication);
                    }
                }
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                //TODO: Log
            }
            finally
            {
                _currentApplication = application;
            }
        }
    }
}
