using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting.Internal;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Billy.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var user = HttpContext;
            return View("~/Views/Index/Index.cshtml");
        }

        [Route("/login")]
        public IActionResult Login()
        {
            return View("~/Views/Index/Index.cshtml");
        }
    }
}
