using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1.Models
{
    public interface IElectronicDevice
    {
        bool IsOn { get; set; }
        void TurnOn();
        void TurnOff();
        void VolumeUp();
        void VolumeDown();
        void Mute();
    }
}
