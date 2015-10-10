(function(window, undefined) {
  var dictionary = {
    "14355f66-2404-48fc-a5fd-c6e083fa3a43": "Camera",
    "abbf570d-8795-46c6-ac05-58f32e93e24e": "Splash Page",
    "bec90758-6901-497e-ab8b-7f3ea62618c7": "Profile page",
    "b17dd099-f52c-4ad8-b08a-a96c0ae21ea1": "Action Page",
    "994c76f9-29db-4916-87d8-444e6a04cdee": "Detail Page",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Master page",
    "ad63ef25-6ca8-4f66-afd0-d09d1206b6ab": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);