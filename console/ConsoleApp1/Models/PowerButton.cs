using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1.Models
{
    public class PowerButton : ICommand
    {
        IElectronicDevice device;

        public PowerButton(IElectronicDevice _device)
        {
            device = _device;
        }
        public void Execute()
        {
            device.TurnOn();
        }

        public void Undo()
        {
            device.TurnOff();
        }

        public void Voldown()
        {
            device.VolumeDown();
        }

        public void Volup()
        {
            device.VolumeUp();
        }
    }
}
