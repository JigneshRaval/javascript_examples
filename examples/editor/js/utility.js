// utility.js

/* RXJS Style */
var dangerClass = 'border border-danger bg-danger text-white';
var successClass = 'border border-success bg-success text-white';

function addItem(val, outputContainer, cssClass) {
    let listWrapper = document.createElement('ul');
    listWrapper.className = 'observable-output';
    listWrapper.id = Math.random();
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    listWrapper.appendChild(node);
    document.body.appendChild(listWrapper);
    if (cssClass) {
        if (node) {
            node.className = cssClass;
        }
    }
}

// Listen for completion of DOM loading; if no SCRIPT element has been added
// to the HEAD, fire the DOMContentLoaded event again:
document.onreadystatechange = function () {
    console.log('document.readyState', document.readyState);
    if (document.readyState === 'complete') {
        if (document.querySelectorAll('head script').length === 0) {
            window.dispatchEvent(new Event('DOMContentLoaded'));
        }
    }
}
