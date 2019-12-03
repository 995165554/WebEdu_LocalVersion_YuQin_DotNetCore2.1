using System;
using System.Web.Mvc;

namespace EDSS.Controllers
{
    public class TrySwitchController : Controller
    {

        public ContentResult Index()
        {
            Int32 int32Number = new Int32();
            int32Number = 2;
            switch (int32Number)
            {
                case 0: { return this.Content("星期天"); }
                case 1: { return this.Content("星期一"); }
                case 2: { return this.Content("星期二"); }
                case 3: { return this.Content("星期三"); }
                case 4: { return this.Content("星期四"); }
                case 5: { return this.Content("星期五"); }
                case 6: { return this.Content("星期六"); }
                default: { return this.Content("没有这样的星期日子"); }
            }

        }
    }
}
