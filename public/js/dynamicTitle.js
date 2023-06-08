window.onload = function () {
    const favicon = document.getElementById("favicon");
    let pageTitle = document.title;
    let attentionMessage = "Come back";
  
    document.addEventListener("visibilitychange", function (e) {
      let isPageActive = !document.hidden;
  
      if (!isPageActive) {
        toggle();
      } else {
        document.title = pageTitle;
      }
    });
  
    document.addEventListener("visibilitychange", function (e) {
      if (!document.hidden) {
        document.title = pageTitle;
        favicon.href = "image\favicon.ico";
      }
    });
  
    function toggle() {
      if (document.title === attentionMessage) {
        document.title = pageTitle;
        favicon.href = "image\favicon.ico";
      } else {
        document.title = attentionMessage;
        favicon.href = "image\favicon_1.ico";
      }
    }
  };