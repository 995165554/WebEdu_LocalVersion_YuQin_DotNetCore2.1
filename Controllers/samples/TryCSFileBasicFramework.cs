using System;
using System.Web.Mvc;
using ChangedMyNameSpace = MyNameSpace;
//using MyNameSpace;

namespace EDSS.Controllers
{
    public class TryCSFileBasicFrameworkController: Controller
    {

        public ContentResult Index()
        {
            //MyNameSpace.MyClass myClass = new MyNameSpace.MyClass();
            ChangedMyNameSpace.MyClass myClass = new MyNameSpace.MyClass();
            myClass.Property1 = 1;
            myClass.Property2 = 2;
            return this.Content(myClass.Mothod1().ToString());
        }   
    }
}
namespace MyNameSpace
{
     public class MyClass
    {
        internal System.Int32 Property1 { get; set; }
        internal Int32 Property2 { get; set; }
        internal Int32 Mothod1()
        {
            return Property1+Property2;
        }
    }
    interface MyInterface
    {
        Int32 TryInterfaceProperty { get; set; }
        String TryInterfaceMethod3();
    }
}
//以上是一个.cs文件中C#代码的基本框架。

