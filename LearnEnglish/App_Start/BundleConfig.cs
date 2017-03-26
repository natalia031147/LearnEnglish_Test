﻿using System.Web.Optimization;

namespace LearnEnglish
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-route.js",
                        "~/Scripts/angular-animate/angular-animate.min.js",
                        "~/Scripts/angular-aria/angular-aria.min.js",
                        "~/Scripts/angular-messages.min.js",
                        "~/Scripts/angular-material/angular-material.min.js",
                        "~/Scripts/ng-file-upload.min.js"
                        ));
            //"http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Angular/app.js",
                "~/Angular/Controllers/*.js",
                "~/Angular/Service/*.js",
                "~/Angular/Directives/*.js"

            ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/angular-material.min.css"));
        }
    }
}
