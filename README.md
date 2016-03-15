# angularrequirejs

Getting the inspiration from http://www.sitepoint.com/using-requirejs-angularjs-applications/ this sample shows how to separate angular modules to other web server and load the resources by RequireJS in web app.

 How to run this app

 1. Start a web server to serve all the angular files
 In the app folder start a web server to serve all the files. I prefer to use python
python -m SimpleHTTPServer 8088
 2. Launch the web app
Refer to https://github.com/yuxiaomin/angularrequirejs/blob/master/angularRequirejsSample/readme.md to launch web app.

Why I make this sample

For a platform web app it may load UI from distributed web product which is self-contained and individual. The root app only need an entry to know the paths of all the needed resources and the angular module dependency relationships. Then it can load the angular modules and run. In the index.html file it just statically include the common 3rd party libraries, like jQuery, Angular, bootstrap. etc. Beside these index.html file use script tag to load an entry file in which requirejs does the really angular module resource loading job.
