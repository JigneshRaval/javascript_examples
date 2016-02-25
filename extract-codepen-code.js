function getIframecontent() {
  var iframes = document.querySelectorAll('iframe.cp_embed_iframe'); // Select all iFrame elements
  var figures = document.querySelectorAll('figure.graf--iframe'); // Select all iFrame parent Elements


    if(iframes && iframes.length > 0) {
      // Loop through all the iFrames
      for(var i = 0, len = iframes.length; i < len; i++) {
        var contDoc = iframes[i].contentDocument || iframes[i].contentWindow.document;
        var iframeContent = contDoc.innerText;

        console.log(iframeContent);
      }

      console.log(content);
      //copytext(content.innerHTML);
      //createCopyButton();
    }
  } else {
    alert("Please assign id to content wrapper.")
  }

getIframecontent();
