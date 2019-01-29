# SRJP
I have tried many different ways to properly organized JavaScript in my Developments. When I'm developing I have faced following issues.

Each and every place we need to include script files
IF one place change we need to change all the pages for references
Assume we need to update JQuery  version then we need to change all pages which refers scripts.
Thus i thought to work on my pattern with the help of JavaScript Loader to overcome this situation. I have used Head.js to dynamically load JavaScript's. There are few other JavaScript loaders such as

RequireJS
Head.js
ControlJS
LABjs

I have chosen Head.js because of performance and simplicity you can develop this pattern to work with any JavaScript loader. Head.js supports other css declaration and media queries as well. This pattern can be extended support css loading as well.

This is very simple pattern. In here you need to only refer one script in a page. So I'm sure it is saving your development time as well as script maintenance time.

How to Use the Pattern in Nutshell

image

When every thing is prepared you need to Only refer one script in your pages.

   If you want to write a code by loading common scripts then you need to say like

<script src="Scripts/ScriptBase.js"></script>
<script>
    BaseReady(function () {
        // Add you code Here
    });
</script>
 

   If you want to write a code after MyScript.js is loaded then you need to say like

 


<script src="Scripts/ScriptBase.js" ></script>
<script>
    BaseReady(function () {
        IncludeScript(js.app);
        ScriptReady(function () {
            // Write Your code here
        });
    });
</script>
 

   If you want to write a code after MyScript.js,Second.js is loaded  then you need to say like

 


<script src="Scripts/ScriptBase.js" ></script>
 
<script>
    BaseReady(function () {
        //app: '/Js/MyScript.js'
        IncludeScript(js.app); 
        // '/Js/Second.js' 
        IncludeScript(js.second);
        ScriptReady(function () {
           // Write your code here
        });
    });
</script>
 

With jQuery

 


<script src="Scripts/ScriptBase.js" ></script>
<script>
    BaseReady(function () {
        IncludeScript(js.app);
        ScriptReady(function () {
            $(document).ready(function () {
                // With jQuery
            });
        });
    });
</script>
 

How to Prepare the Pattern

 


You need to copy ScriptBase.js to your JavaScript folder. (My file is under Script Folder) 
Then You Need to Download Head.Js and put it in to the same library. (You can takeHead.min.js since it is minified to greater performance) 
Open the ScriptBase.js
 

If you want any absolute URL you can put it in serverUrl. (But normally we wont)
 
BaseUrl is the Script Path related to Project Main hierarchy. For an example following scenario we can mentioned baseUrl as /Scripts. 
 
Then You can specify all the scripts you need in the project.There are three types of script references so far i found. You can extend it to any other ways if you want. 

Scripts reside under BaseUrl 
Scripts directly reference using absolute Url 
Dynamically deciding script Url (Ex:- Based on Query String)
 

Scripts reside under BaseUrl 

First You Must  refer Head.js (Download Head.js or Head.min.js) 
Then you can refer other related scripts

 


var js =
{
  Head: '/head.js', // Original Path /Scripts/head.js
  jquery: '/jquery-2.0.3.js', // Original Path /Scripts/jquery-2.0.3.js
  app: '/Js/MyScript.js',    // Original Path /Scripts/Js/MyScript.js
  second: '/Js/Second.js',  // Original Path /Scripts/Js/Second.js
};
 

 

Scripts directly reference using absolute Url 

You can directly put the Url


var js =
{
  lst: 'http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js'
};
Dynamically deciding script Url (Ex:- Based on Query String) 


In SharePoint development we need to refer JavaScript based on  URL parameter. For an example SPHostUrl and SPAppWebUrl. In here we can Specify the prefix of the Url with #tag (Ex- #SPHostUrl) and change the GetUrl() method to match the requirement.

After that if you want some scripts to load in every page (Ex:- JQuery) you need to add it to CommonScripts() Method. When adding scripts you can follow the below pattern. You can give a js.yourscript name.
 
Then you can use it for your project. (Refer How to Use the Pattern in Nutshell )

Blog Link http://melick-rajee.blogspot.com/2013/07/single-reference-javascript-pattern-for.html
