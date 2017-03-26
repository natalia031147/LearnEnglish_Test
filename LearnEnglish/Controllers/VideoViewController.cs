using System.Web.Mvc;

namespace LearnEnglish.Controllers
{
    public class VideoViewController : Controller
    {
       
        // GET: Video
        public ActionResult Add()
        {
            return View();
        }
        public ActionResult AddPhrases()
        {
            return View();
        }


        public ActionResult List()
        {
            return PartialView();
        }

       
        public ActionResult Details()
        {
            return PartialView();
        }

       
        public ActionResult Listening()
        {
            return PartialView();
        }

        public ActionResult Writing()
        {
            return PartialView();
        }      

    }
}