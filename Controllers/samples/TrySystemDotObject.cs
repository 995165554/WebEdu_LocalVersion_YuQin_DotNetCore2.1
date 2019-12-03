using System;
using System.Web.Mvc;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TrySystemDotObjectController : Controller
    {

        public Object Index()//或public ContentResult Index(),或public Object Index()
        {
            Object tryObject1=new Object();
            Object tryObject2 = new Object();
            return this.Content(tryObject1.GetType().ToString() + ";" 
                + tryObject1.GetHashCode()+ ";"
                + tryObject1.Equals(tryObject2) + ";"
                + tryObject1.ToString() + ";"
                );
        }   
    }
}
