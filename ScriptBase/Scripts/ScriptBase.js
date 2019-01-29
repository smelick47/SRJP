/// <reference path="head.js" />

// Root Namespace

//Absolute URL If you want
var serverUrl = "";

//All Js baseed on this url
// This is relative to your server
var baseUrl = "/Scripts";

// Add your script path relative to BaseUrl
var js =
  {
      Head: '/head.js',
      jquery: '/jquery-2.0.3.js',
      app: '/Js/MyScript.js',
      second: '/Js/Second.js',
      SPAjax: '#SPHostUrl/_layouts/15/MicrosoftAjax.js',
      internet: 'http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js'
  };


function CommonScripts() {
    // Add Common scripts here , scripts you need to load in every page
    head.js(getUrl(js.jquery));
    head.js(getUrl(js.app));
    head.js(getUrl(js.SPAjax));
};


function BaseReady(fun) {

    loadIntScript(getUrl(js.Head), function () {
        CommonScripts();
        head.ready(fun);
    });
};

function IncludeScript(scriptName) {
    head.js(getUrl(scriptName));
};

function ScriptReady(fun) {
    head.ready(fun);
};

function loadIntScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function loadIntScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function getServerUrl() {
    return serverUrl;
}

function getUrl(scriptName) {

    var link = scriptName.toString();

    // This is for direct references
    if (link.indexOf("http") == 0) {
        return scriptName;
    }
    else if (link.indexOf("#SPHostUrl") == 0)
    {
        //Method which get the query string and get the Url
        var getUrlParam = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
        link = link.replace("#SPHostUrl", getUrlParam);
        return link;
    }
    else {
        // Default link based on BaseUrl
        return getServerUrl() + this.baseUrl + scriptName;
    }
}

function getQueryStringParameter(paramToRetrieve) {
    var params = document.URL.split("?")[1].split("&");
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    }
    return "";
};