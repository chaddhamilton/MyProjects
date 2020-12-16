using System;
using ConsoleApp1.Models;

namespace ConsoleApp1
{
   // public delegate void MyDelegate(string msg);

    public class Program
    {       
        static void Main(string[] args)
        {
            IElectronicDevice tv;
            var remote = TvRemote.GetDevice(DeviceType.TV);

            PowerButton pb = new PowerButton(remote);
            pb.Execute();
            pb.Execute();
            for (int i = 0; i < 30; i++)
            {
                pb.Volup();
            }
            pb.Undo();
        }
        static void DoWorker(Action <string> del)
        {
            del("sfsdfsdfs");
        }
    }
}
