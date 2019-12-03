using System;
using System.Web.Mvc;

namespace EDSS.Controllers
{
    public class TryGenicTypeController : Controller
    {
        public ContentResult Index()
        {
            TryGenicType<String, String> tryGenicTypeString = new TryGenicType<String, String>();
            TryGenicType<Int32, Int32> tryGenicTypeInt32 = new TryGenicType<Int32, Int32>();

            return this.Content("字符串比较结果示例:" + tryGenicTypeString.TryCompare("1234", "1234") + ";" + "整型数值比较结果示例:" + tryGenicTypeInt32.TryCompare(1234, 23));
        }   
    }
    internal class TryGenicType<T1,T2> where T1:IComparable where T2:IComparable
    {
        public Int32 TryCompare(T1 t1,T2 t2)
        {
             return (t1.CompareTo(t2));
        }

    }

}


