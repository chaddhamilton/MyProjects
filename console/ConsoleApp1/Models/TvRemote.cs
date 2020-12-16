using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1.Models
{
    public enum DeviceType {
    TV,
    Radio,
    TurnTable
    }

    
    public class TvRemote 
    {
        public static IElectronicDevice GetDevice(DeviceType dt)
        {
          IElectronicDevice device;
            
          if (dt == DeviceType.TV) 
            {
            device = new Television();
            }
            else
            {
                return null;
            }
            
          return device;
            
        }
    }
}
