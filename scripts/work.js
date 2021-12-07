window.addEventListener("load", function() {
  
    document.getElementById("expressive").addEventListener("mouseover", expressiveReplace);
    document.getElementById("about-project").addEventListener("mouseover", aboutReplace);
    document.getElementById("toy").addEventListener("mouseover", toyReplace);
      
    
    function expressiveReplace() {
      document.getElementById("preview").src = "images/expressive-main.png";
    };
      
    function aboutReplace() {
      document.getElementById("preview").src = "images/about-main.png";
    };
      
    function toyReplace() {
      document.getElementById("preview").src = "images/toy-main.png";
    };
      
      
    })  