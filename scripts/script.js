window.onload = function()
{


  let html, newHtml;

  let req = new XMLHttpRequest();
  let medeeJSON;
  req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
          console.log(req.responseText);
          medeeJSON = JSON.parse(req.responseText);
      }
  };

  req.open("GET", "http://localhost/api/v2/apismartcar/_table/medee", true);
  req.setRequestHeader("X-DreamFactory-Session-Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS92Mi9zeXN0ZW0vYWRtaW4vc2Vzc2lvbiIsImlhdCI6MTU3NTkzNTc4OSwiZXhwIjoxNTc1OTQzMTQyLCJuYmYiOjE1NzU5Mzk1NDIsImp0aSI6ImxUUUV3NzZ0VFp2QWx2Nm0iLCJzdWIiOiJhZmJhZTc2MDFiNzdhOTQ5ZWVkNTE1MDc4MTNmNmIwMiIsInVzZXJfaWQiOjEsImZvcmV2ZXIiOmZhbHNlfQ.YHNWA9n83C-UaADCmKFAd0XEr9nAP50Vt5G8-bI-g70");
  req.setRequestHeader("X-DreamFactory-API-Key", "36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88");
  req.setRequestHeader("Content-type", "application/json");
  req.setRequestHeader("Access-Control-Allow-Origin", "*");
  req.send();

  var medeeNemeh = function()
  {   
      req.onreadystatechange = () => {
          if (req.readyState == XMLHttpRequest.DONE) {
              console.log(req.responseText);
              medeeJSON = JSON.parse(req.responseText);
          }
      };
      
      req.open("GET", "http://localhost/api/v2/apismartcar/_table/medee", true);
      req.setRequestHeader("X-DreamFactory-Session-Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS92Mi9zeXN0ZW0vYWRtaW4vc2Vzc2lvbiIsImlhdCI6MTU3NTkzNTc4OSwiZXhwIjoxNTc1OTQzMTQyLCJuYmYiOjE1NzU5Mzk1NDIsImp0aSI6ImxUUUV3NzZ0VFp2QWx2Nm0iLCJzdWIiOiJhZmJhZTc2MDFiNzdhOTQ5ZWVkNTE1MDc4MTNmNmIwMiIsInVzZXJfaWQiOjEsImZvcmV2ZXIiOmZhbHNlfQ.YHNWA9n83C-UaADCmKFAd0XEr9nAP50Vt5G8-bI-g70");
      req.setRequestHeader("X-DreamFactory-API-Key", "36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88");
      req.setRequestHeader("Content-type", "application/json");
      req.setRequestHeader("Access-Control-Allow-Origin", "*");
      req.send();
      
      html = '<section><a href=""><img src="medee/medee%zurag%.jpg" alt=""><img src="index/arrowr.png" alt=""><h2>%garchig%</h2><div><p>%date%</p><p>%uzelt%</p></div></a></section>';
      var elmnt = document.getElementById("medeeRow");
      while (elmnt.hasChildNodes()) {  
          elmnt.removeChild(elmnt.firstChild);
      }
      for (var i = medeeJSON.resource["length"] - 4; i < medeeJSON.resource["length"]; i++)
      {
          newHtml = html.replace('%zurag%', medeeJSON.resource[i]["zurag"]);
          newHtml = newHtml.replace('%garchig%', medeeJSON.resource[i]["garchig"]);
          newHtml = newHtml.replace('%date%', medeeJSON.resource[i]["onsarudur"]);
          newHtml = newHtml.replace('%uzelt%', medeeJSON.resource[i]["uzelt"]);
          document.getElementById("medeeRow").insertAdjacentHTML('afterbegin', newHtml);
      }
  }

  var coll = document.getElementsByClassName("collapsible");
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("activebla");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        this.innerHTML = " ► Тээврийн хэрэгслийн мэдээлэл хайх"
      } 
      else {
        content.style.display = "block";
        this.innerHTML = " ▼ Тээврийн хэрэгслийн мэдээлэл хайх"
      }
    });
  }
}