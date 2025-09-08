using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLib
{
    public class DataProviderV1: IDataProvider
    {
        public string GetData()
        {
            return "Data from DataProviderV1";
        }
    }
}
