using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Management;
using System.Windows;
using System.Runtime.InteropServices;
using System.Text;
using System.Windows.Forms;
using ConsoleAgent.Common;

namespace PCTracker
{
    public class TrackFocusPrograms : Form
    {
        delegate void WinEventDelegate(IntPtr hWinEventHook, uint eventType,
            IntPtr hwnd, int idObject, int idChild, uint dwEventThread, uint dwmsEventTime);

        [DllImport("user32.dll")]
        static extern IntPtr SetWinEventHook(uint eventMin, uint eventMax, IntPtr
           hmodWinEventProc, WinEventDelegate lpfnWinEventProc, uint idProcess,
           uint idThread, uint dwFlags);

        [DllImport("user32.dll")]
        static extern IntPtr AttachThreadInput(IntPtr idAttach,
                             IntPtr idAttachTo, bool fAttach);

        [DllImport("user32.dll", CharSet = CharSet.Auto, ExactSpelling = true)]
        public static extern IntPtr GetFocus();

        [DllImport("user32.dll")]
        static extern IntPtr GetForegroundWindow();

        [DllImport("user32.dll")]
        static extern bool UnhookWinEvent(IntPtr hWinEventHook);

        [DllImport("user32.dll")]
        static extern IntPtr GetWindowThreadProcessId(IntPtr hWnd, IntPtr ProcessId);

        [DllImport("oleacc.dll")]
        public static extern uint GetStateText(uint dwStateBit,[Out] StringBuilder lpszStateBit, uint cchStateBitMax);

        [DllImport("user32.dll")]
        public static extern IntPtr GetWindowThreadProcessId(IntPtr hWnd, out uint ProcessId);

        [DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        static extern int GetWindowText(IntPtr hWnd, StringBuilder lpString, int nMaxCount);



        // Constants from winuser.h
        const uint EVENT_SYSTEM_FOREGROUND = 3;
        const uint WINEVENT_OUTOFCONTEXT = 0;
        const uint EVENT_OBJECT_FOCUS = 0x8005;

        //void CALLBACK WinEventProc(HWINEVENTHOOK hWinEventHook,DWORD event,HWND hwnd,LONG idObject,LONG idChild,DWORD dwEventThread,DWORD dwmsEventTime);


        // Need to ensure delegate is not collected while we're using it,
        // storing it in a class field is simplest way to do this.

        public IAgent agent
        {
            get;
            set;
        }


        public TrackFocusPrograms(IAgent agent)
        {
            this.agent = agent;
          //  WinEventDelegate procDelegate = new WinEventDelegate(WinEventProc);
            WinEventDelegate procDelegate2 = new WinEventDelegate(WinEventProc);
            // Listen for foreground changes across all processes/threads on current desktop...
           // IntPtr hhook = SetWinEventHook(EVENT_SYSTEM_FOREGROUND, EVENT_SYSTEM_FOREGROUND, IntPtr.Zero,procDelegate, 0, 0, WINEVENT_OUTOFCONTEXT);
            IntPtr hhook2 = SetWinEventHook(EVENT_OBJECT_FOCUS, EVENT_OBJECT_FOCUS, IntPtr.Zero, procDelegate2, 0, 0, WINEVENT_OUTOFCONTEXT);
            // MessageBox provides the necessary mesage loop that SetWinEventHook requires.
            System.Windows.Forms.MessageBox.Show("Tracking focus, close message box to exit.");
            Console.WriteLine("Test");
            
            //UnhookWinEvent(hhook2);
          //  UnhookWinEvent(hhook);
        }

        private string GetMainModuleFilepath(int processId)
        {
            string wmiQueryString = "SELECT ProcessId, ExecutablePath FROM Win32_Process WHERE ProcessId = " + processId;
            using (var searcher = new ManagementObjectSearcher(wmiQueryString))
            {
                using (var results = searcher.Get())
                {
                    ManagementObject mo = results.Cast<ManagementObject>().FirstOrDefault();
                    if (mo != null)
                    {
                        return (string)mo["ExecutablePath"];
                    }
                }
            }
            return null;
        }

        void WinEventProc(IntPtr hWinEventHook, uint eventType,
            IntPtr hwnd, int idObject, int idChild, uint dwEventThread, uint dwmsEventTime)
        {
            uint pid;
            string currentProcessName;
            StringBuilder windowtitle = new StringBuilder(512);
            GetWindowThreadProcessId(hwnd, out pid);

            currentProcessName = System.IO.Path.GetFileName(GetMainModuleFilepath((int)pid));
            GetWindowText(hwnd, windowtitle, 512);

            IntPtr activeWindowHandle = GetForegroundWindow();
            IntPtr activeWindowThread =
          GetWindowThreadProcessId(activeWindowHandle, IntPtr.Zero);
            //IntPtr thisWindowThread = GetWindowThreadProcessId(this.Handle, IntPtr.Zero);

            //AttachThreadInput(activeWindowThread, thisWindowThread, true);
            //IntPtr focusedControlHandle = GetFocus();
            //AttachThreadInput(activeWindowThread, thisWindowThread, false);

            Console.WriteLine("Foreground changed to {0:x8}", hwnd.ToInt32());
            Console.WriteLine(currentProcessName);
            Console.WriteLine(windowtitle.ToString());

           agent.ApplicationChanged(new ApplicationModel()
           {
               Name = currentProcessName,
               WindowTitle = windowtitle.ToString(),
               FocusStartTime = DateTime.Now
           });
       //     Console.WriteLine("Focus changed to {0:x8}",focusedControlHandle.ToInt32());
            //Console.WriteLine("Focus Type ", focusedControlHandle.GetType());
        }
    }
}
