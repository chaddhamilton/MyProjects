using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1.Models
{
    public class Television : IElectronicDevice
    {
        public int Volume { get; set; } = 0;
        public bool IsOn { get; set; }

        public void Mute()
        {
            if(Volume > 0)
            {
                Volume = 0;
            }
            Console.WriteLine("TV has been muted");
        }

        public void TurnOff()
        {
            if (IsOn)
            {
                Console.WriteLine("TV has been turned off");
                IsOn = false;
            }
        }

        public void TurnOn()
        {
            if (!IsOn)
            {
                Console.WriteLine("TV has been turned on");
                IsOn = true;
            }
        }

        public void VolumeDown()
        {
            if (Volume > 0) Volume--;
            Console.WriteLine($"TV volume is now {Volume}");
        }

        public void VolumeUp()
        {
            if (Volume < 100) Volume++;
            Console.WriteLine($"TV volume is now {Volume}");
        }

      
    }
}
