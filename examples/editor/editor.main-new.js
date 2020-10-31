const CODEMIRROR_CONTENT = `
<!-- HTML Code -->
<h1>Code Example</h1>
<div id="msg"></div>

<!-- CSS Code -->
<style>
/* Your CSS code */
</style>

<!-- JavaScript Code -->
<script type="text/babel">
// your JavaScript logic
var imagetag = document.getElementById('msg');
imagetag.innerHTML = 'Hi';

function cube(x) {
	return x * x *x;
}

console.log(cube(4));

var obj = {
	"name" : "Jignesh",
	"age" : 40
}
console.log("Status code: %d", obj);
console.error("Error lg", "test");
</script>
`;


class Editor {

    constructor() {
        this.timer;
        this.editorData = '';
        this._template = 'JavaScript';
        // this.previewFrame = document.getElementById('preview');
        // this.preview = this.previewFrame.contentDocument || this.previewFrame.contentWindow.document;

        this.sandboxFrame = document.getElementById('sandbox');
        this.textArea = document.getElementById('code');
        this.codeMirror;
        // localStorage.setItem('editorTemplateName', this._template);
    }

    init() {
        this.initCodeMirror();
        this.getCodeExamples();
    }

    /**
     * Initialize CodeMirror Editor
     */
    initCodeMirror() {
        let editorArea = document.getElementById('code');
        this.codeMirror = CodeMirror.fromTextArea(editorArea, {
            lineNumbers: true,
            lineWrapping: true,
            autoCloseTags: true,
            autoCloseBrackets: true,
            styleActiveLine: true,
            mode: "text/html",
            theme: 'tomorrow-night-bright',
            value: "function myScript(){return 100;}\n",
        });

        // Set default content in CodeMirror editor
        this.codeMirror.getDoc().setValue(CODEMIRROR_CONTENT);

        // Bind event listener with text area
        this.codeMirror.on("change", (event) => {
            this.editorData = this.codeMirror && this.codeMirror.getValue() || event.target && event.target.value || event.target && event.target.innerText;
            setTimeout(() => {
                this.sandboxFrame.contentWindow.postMessage(this.editorData, '*');
            }, 500);
        });
    }

    /**
     * Set template name
     * @param {*} event
     */
    setTemplate(event) {
        // this.resetEditor();
        this._template = event.target.parentNode.children[1].value || event.target.children[1].value;
        localStorage.setItem('editorTemplateName', this._template);

        let codeMirrorContent = document.querySelector(`.code-example-wrapper #${this._template} pre code`).innerText;
        // Set default content in CodeMirror editor
        this.codeMirror.getDoc().setValue(codeMirrorContent || CODEMIRROR_CONTENT);

        this.reloadIFrame();
    }

    reloadIFrame() {
        // option 1: get a reference to the iframe element:
        var iframeElem = document.getElementById('sandbox');

        // update the element's src:
        iframeElem.src = "./sandbox.html";

        // option 2: get a reference to the iframe's window object:
        // var iframeWindow = window.iframe1Name;

        // update the iframe's location:
        // iframeWindow.location.href = "./sandbox.html";

    }

    getTemplate() {
        this._template = localStorage.getItem('editorTemplateName');;
        return this._template;
    }

    getCodeExamples() {

        // Method 1 : Using JavaScript fetch API
        // REF : https://css-tricks.com/the-simplest-ways-to-handle-html-includes/
        fetch("./templates.html")
            .then(response => {
                return response.text()
            })
            .then(data => {
                document.querySelector(".code-example-wrapper").innerHTML = data;
                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightBlock(block);
                });
            });
    }

}

let codeEditor = new Editor();
codeEditor.init();
