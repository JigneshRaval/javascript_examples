function getIframecontent() {
  //var content = document.getElementById('test1'); // Give any Id to the parent container
  var content = document.querySelector('main .section-content > div:last-child'); // Give any Id to the parent container
  var iframes = document.querySelectorAll('iframe'); // Select all iFrame elements
  var figures = document.querySelectorAll('figure.graf--iframe'); // Select all iFrame parent Elements

  if(content) {
    if(iframes && iframes.length > 0) {
      // Loop through all the iFrames
      for(var i = 0, len = iframes.length; i < len; i++) {
        var contDoc = iframes[i].contentDocument || iframes[i].contentWindow.document;
        var iframeContent = contDoc.querySelector('table').innerText;

        var preNode = document.createElement('pre');
        var codeNode = document.createElement('code');

        codeNode.innerText = iframeContent;
        preNode.appendChild(codeNode);
        // replace all iFrame parent nodes with the new <pre> tags
        content.replaceChild(preNode, figures[i]);
      }

      console.log(content);
      //copytext(content.innerHTML);
      createCopyButton('main .section-content > div:last-child');
    }
  } else {
    alert("Please assign id to content wrapper.")
  }
}

getIframecontent();

// Get content from embeded gists
function getGistContent() {
  var parent = document.querySelector('.entry-content');
  var gists = document.querySelectorAll('.gist');

  var scripts = parent.querySelectorAll('script');
  var styles = parent.querySelectorAll('link');

  if(parent) {
    if(gists && gists.length > 0) {
      // Loop through all the iFrames
      for(var i = 0, len = gists.length; i < len; i++) {
        var gistContent = gists[i].querySelector('table').innerText;

        var preNode = document.createElement('pre');
        var codeNode = document.createElement('code');

        codeNode.innerText = gistContent;
        preNode.appendChild(codeNode);
        // replace all iFrame parent nodes with the new <pre> tags
        parent.replaceChild(preNode, gists[i]);
        if(scripts[i].src.indexOf('github.com') > -1) {
            parent.removeChild(scripts[i]);
        }
        if(styles[i].href.indexOf('github.com') > -1) {
            parent.removeChild(styles[i]);
        }
      }

      console.log(parent);
      //copytext(content.innerHTML);
      createCopyButton('.entry-content');
    }
  } else {
    alert("Please assign id to content wrapper.")
  }
}

getGistContent();

// Append button to copy data to Clipboard
function createCopyButton(parentId) {
  var button = document.createElement('button');
  button.innerText = "Copy Code";
  button.style.position = "relative";
  document.body.appendChild(button);
  // document.execCommand will work only inside event
  button.addEventListener('click', function() {
    var textVal = document.querySelector(parentId).innerHTML;
    textVal = textVal.replace(/"|"/g, '"').replace(/'/g, "'");
		copytext(textVal);
  });
}

// Copy To Clipboard : Method 1
function copytext(text) {
  var textField = document.createElement('textarea');
  textField.style.position = "relative";
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.focus();
  textField.select();
  var pp = document.execCommand('copy');
  console.log(pp);
  textField.remove();
}

// Copy To Clipboard : Method 2
function copyText2() {
	var urlField = document.querySelector('#test1');

	// create a Range object
	var range = document.createRange();
	// set the Node to select the "range"
	range.selectNode(urlField);
	// add the Range to the set of window selections
	window.getSelection().addRange(range);

	// execute 'copy', can't 'cut' in this case
	var tt = document.execCommand('copy');
	console.log(tt);
}
