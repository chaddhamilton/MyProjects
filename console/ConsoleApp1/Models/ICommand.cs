using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1.Models
{
    public interface ICommand
    {
        void Execute();
        void Undo();
        void Volup();
        void Voldown();
    }
}
