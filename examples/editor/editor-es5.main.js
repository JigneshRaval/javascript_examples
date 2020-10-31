"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LOCAL_JS_PATH = '';
var APP_ROOT = '<div id="root"></div>'; // CDN path : <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" crossorigin="anonymous"></script>

var JQUERY = '<script src="./js/jquery.min.js"><\/script>'; // CDN path : <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" crossorigin="anonymous">

var BOOTSTRAP_CSS = '<link rel="stylesheet" href="./css/bootstrap.min.css" />'; // CDN path : <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" crossorigin="anonymous"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" crossorigin="anonymous"></script>

var BOOTSTRAP_JS = '<script src="./js/bootstrap.bundle.min.js"><\/script>';
var HANDLEBARS = '<script src="./js/handlebars/handlebars-v4.4.3.js"><\/script>';
var REQUIRE_METHOD = "\n<script id=\"require_method\" type=\"text/javascript\">\n    function require(module) {\n        if (module === \"react\") return React;\n        if (module === \"react-dom\") return ReactDOM;\n        if (module === \"react-router-dom\") return ReactRouterDOM;\n        if (module === \"rxjs\") return rxjs; // RxJS 5.x\n        if (module === \"RxJs\") return Rx;   // RxJS 6.x\n    }\n</script>\n";
var BABEL = "\n<script src=\"./js/babel/babel.min.js\" type=\"text/javascript\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/@babel/plugin-proposal-decorators@7.7.4/lib/index.min.js\" type=\"text/javascript\"></script>\n<script src=\"https://unpkg.com/@babel/plugin-proposal-decorators@7.7.4/lib/index.js\" type=\"text/javascript\"></script>\n<script>\n// https://jsfiddle.net/0n8w6zh9/\nBabel.registerPreset(\"my-preset\", {\n    presets: [\n        [Babel.availablePresets[\"es2015\"], { \"modules\": false }]\n    ],\n    plugins: [\n        [\n            Babel.availablePlugins[\"transform-modules-amd\"],\n            Babel.availablePlugins[\"babel-preset-env\"]\n        ]\n    ],\n    moduleId: \"main\"\n});\n</script>\n"; // CDN path : https://unpkg.com/@babel/preset-env-standalone@7.7.3/babel-preset-env.min.js

var BABEL_PRESET_ENV = '<script src="./js/babel/babel-preset-env.js"><\/script>'; // CDN path : https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.1.2/react-router-dom.js

var REACT = "\n<script src=\"./js/react/react.development.js\" type=\"text/javascript\"></script>\n<script src=\"./js/react/react-dom.development.js\" type=\"text/javascript\"></script>\n<script src=\"./js/react/react-router-dom.js\" type=\"text/javascript\"></script>\n";
var VUEJS = "\n<script src=\"https://unpkg.com/vue@2.6.10/dist/vue.js\"></script>\n<script src=\"https://unpkg.com/vue-router@3.1.3/dist/vue-router.js\"></script>\n";
var SCSS = '<script src="./js/sass/sass.js"><\/script>';
var RXJS_5 = '<script src="https://unpkg.com/@reactivex/rxjs@5.5.6/dist/global/Rx.js"><\/script>';
var RXJS_6 = '<script src="https://unpkg.com/rxjs@6.5.3/bundles/rxjs.umd.js"><\/script>';
var rxjsOutputStyle = "<style> body { background-color: #eeeeee; } .example { margin-bottom: 1em; } .observable-output { list-style-type: none; margin: 0; padding: 0; } .observable-output li { padding: 1em; margin-bottom: 1em; border: 1px solid #CCC; background-color: #ffffff; box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1); } .observable-output .bg-success { box-shadow: 0 5px 5px rgba(40, 167, 69, 0.4); } .observable-output .bg-danger { box-shadow: 0 5px 5px rgba(220, 53, 69, 0.4); } </style>";
var rxjsOutputScript = "\n<script>\n    var dangerClass = 'border border-danger bg-danger text-white';\n    var successClass = 'border border-success bg-success text-white';\n    function addItem(val, outputContainer, cssClass) {\n        let listWrapper = document.createElement('ul');\n        listWrapper.className = 'observable-output';\n        listWrapper.id = Math.random();\n        var node = document.createElement(\"li\");\n        var textNode = document.createTextNode(val);\n        node.appendChild(textNode);\n        // outputContainer ? document.querySelector(outputContainer).appendChild(node) : document.body.appendChild(listWrapper);;\n        // document.querySelector(outputContainer).appendChild(node);\n        listWrapper.appendChild(node);\n        document.body.appendChild(listWrapper);\n        if (cssClass) {\n            if (node) {\n                node.className = cssClass;\n            }\n        }\n    }\n</script>";
var CODEMIRROR_CONTENT = "\n<!-- HTML Code -->\n<h1>Code Example</h1>\n<div id=\"msg\"></div>\n\n<!-- CSS Code -->\n<style>\n/* Your CSS code */\n</style>\n\n<!-- JavaScript Code -->\n<script type=\"text/babel\">\n// your JavaScript logic\n</script>\n";

var Editor = /*#__PURE__*/function () {
  function Editor() {
    _classCallCheck(this, Editor);

    this.timer;
    this.editorData = '';
    this._template = 'JavaScript';
    this.previewFrame = document.getElementById('preview');
    this.preview = this.previewFrame.contentDocument || this.previewFrame.contentWindow.document;
    this.textArea = document.getElementById('code');
    this.codeMirror;
  }

  _createClass(Editor, [{
    key: "init",
    value: function init() {
      // Babel.registerPlugin('babelPresetEnv', babelPresetEnv);
      this.initCodeMirror();
      this.getCodeExamples(); // this.renderOutput(documentContents);
      // Bind event listener with text area

      /* this.textArea.addEventListener('input', (event) => {
          this.editorData = editor1.getValue() || event.target.value || event.target.innerText;
          console.log('this.editorData :', this.editorData);
          clearInterval(this.timer);
           this.timer = setInterval(() => {
              this.createApp(this.editorData);
              // let block = document.querySelector('textarea') || document.querySelector('pre');
              // hljs.highlightBlock(block);
          }, 1000);
      }); */
    }
    /**
     * Initialize CodeMirror Editor
     */

  }, {
    key: "initCodeMirror",
    value: function initCodeMirror() {
      var _this = this;

      var editorArea = document.getElementById('code');
      this.codeMirror = CodeMirror.fromTextArea(editorArea, {
        lineNumbers: true,
        lineWrapping: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        styleActiveLine: true,
        mode: "text/html",
        theme: 'tomorrow-night-bright',
        value: "function myScript(){return 100;}\n"
      }); // Set default content in CodeMirror editor

      this.codeMirror.getDoc().setValue(CODEMIRROR_CONTENT); // Bind event listener with text area

      this.codeMirror.on("change", function (event) {
        _this.editorData = _this.codeMirror && _this.codeMirror.getValue() || event.target && event.target.value || event.target && event.target.innerText;
        clearInterval(_this.timer);
        _this.timer = setInterval(function () {
          _this.createApp(_this.editorData);
        }, 1000);
      });
    }
    /**
     * Set template name
     * @param {*} event
     */

  }, {
    key: "setTemplate",
    value: function setTemplate(event) {
      this.resetEditor();
      this._template = event.target.parentNode.children[1].value || event.target.children[1].value;
      localStorage.setItem('editorTemplateName', this._template);
      var codeMirrorContent = document.querySelector(".code-example-wrapper #".concat(this._template, " pre code")).innerText; // Set default content in CodeMirror editor

      this.codeMirror.getDoc().setValue(codeMirrorContent || CODEMIRROR_CONTENT);
    }
  }, {
    key: "getTemplate",
    value: function getTemplate() {
      this._template = localStorage.getItem('editorTemplateName');
      ;
      return this._template;
    }
  }, {
    key: "createApp",
    value: function createApp(editorData) {
      var _this2 = this;

      var scriptBlocks = JQUERY + BOOTSTRAP_CSS + BOOTSTRAP_JS + REQUIRE_METHOD + BABEL + BABEL_PRESET_ENV;

      if (this._template === 'SCSS') {
        sass.compile(editorData, function (result) {
          editorData = '<pre>' + result.text + '</pre>';
          console.log(result.text, editorData);

          _this2.preview.open();

          _this2.preview.write(editorData); // insertJs();
          // preview.body.innerHTML = editorData;


          _this2.preview.close();

          clearInterval(_this2.timer);
        });
      }

      var documentContents = "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n            <title>Document</title>\n            ".concat(scriptBlocks, "\n            ").concat(this._template === 'Handlebars' ? HANDLEBARS : '', "\n            ").concat(this._template === 'React' ? REACT : '', "\n            ").concat(this._template === 'Vue' ? VUEJS : '', "\n            ").concat(this._template === 'RxJs5' ? rxjsOutputStyle + rxjsOutputScript + RXJS_5 : '', "\n            ").concat(this._template === 'RxJs6' ? rxjsOutputStyle + rxjsOutputScript + RXJS_6 : '', "\n            <!-- <script type=\"text/babel\" src=\"./MyExport.js\"></script> -->\n        </head>\n\n        <body>\n            ").concat(this._template === 'React' ? APP_ROOT : '', "\n            ").concat(editorData, "\n        </body>\n\n        </html>");
      this.renderOutput(documentContents);
    } // Compile and Render code into iFrame

  }, {
    key: "renderOutput",
    value: function renderOutput(editorData) {
      // var output = Babel.transform(editorData, { presets: ['es2015'] }).code;
      // 1. jQuery Way
      // let myFrame = $("#preview").contents().find('body');
      // myFrame.html(editorData);
      // 2. Vanilla JavaScript way
      this.preview.open();
      this.preview.write(editorData); // insertJs();
      // preview.body.innerHTML = editorData;

      this.preview.close();
      clearInterval(this.timer);
    }
  }, {
    key: "saveEditor",
    value: function saveEditor() {
      // get the value of the data
      var value = this.codeMirror.getValue();
      console.log('Value :', value);
    } // Reset/Clear Editor value and output from iFrame

  }, {
    key: "resetEditor",
    value: function resetEditor() {
      // Reset code editor
      this.textArea.value = '';
      this.codeMirror.setValue(""); // Reset output area

      this.preview.open();
      this.preview.write('');
      this.preview.close();
      clearInterval(this.timer);
    }
  }, {
    key: "getCodeExamples",
    value: function getCodeExamples() {
		
		$.get("./examples.html", function (result) {
     var html = result;
	 console.log(html);
	 document.querySelector(".code-example-wrapper").innerHTML = html;
        document.querySelectorAll('pre code').forEach(function (block) {
          hljs.highlightBlock(block);
        });
     // text = $(result).text();
});
      // Method 1 : Using JavaScript fetch API
      // REF : https://css-tricks.com/the-simplest-ways-to-handle-html-includes/
      /*fetch("./examples.html").then(function (response) {
        return response.text();
      }).then(function (data) {
        document.querySelector(".code-example-wrapper").innerHTML = data;
        document.querySelectorAll('pre code').forEach(function (block) {
          hljs.highlightBlock(block);
        });
      }); */
	  
	  // Method 2 : Using HTML Imports
      // REF : https://www.html5rocks.com/en/tutorials/webcomponents/imports/
      // <link rel="import" href="examples.html" />

      /* if ('import' in document.createElement('link')) {
          var htmlImport = document.querySelector('link[rel="import"]');
          var htmlDoc = htmlImport.import;
          var htmlMessage = htmlDoc.querySelector('#example-content');
          document.querySelector('.code-example-wrapper').appendChild(htmlMessage.cloneNode(true));
      } */
    }
  }, {
    key: "initSass",
    value: function initSass() {
      // https://github.com/medialize/sass.js/blob/master/docs/api.md
      var sass = new Sass('./js/dist/sass.worker.js');
      sass.options({
        // Format output: nested, expanded, compact, compressed
        style: Sass.style.expanded,
        // Decimal point precision for outputting fractional numbers
        // (-1 will use the libsass default, which currently is 5)
        precision: -1,
        indentedSyntax: false,
        // If you want inline source comments
        comments: false,
        // String to be used for indentation
        indent: '  ',
        // String to be used to for line feeds
        linefeed: '\n'
      }, function callback() {// invoked without arguments when operation completed
      });
      /*
      var scss = `$someVar: 123px; .some-selector { width: $someVar; }
      body {
          p {
              color: red;
          }
      }
      `;
      sass.compile(scss, function (result) {
          console.log(result);
      }); */
    } // TODO : Currently not in use, remove if not required

  }, {
    key: "insertJs",
    value: function insertJs() {
      ['js/Rx-5.5.12.js', 'js/react.development.js', 'js/react-dom.development.js', 'js/babel-6.26.0.js', 'js/typescript/typescript.js', 'https://unpkg.com/rxjs@6.5.2/bundles/rxjs.umd.min.js', 'https://unpkg.com/rxjs@6.5.2/bundles/rxjs.umd.js'].forEach(function (src) {
        var script = document.createElement('script');
        script.src = src; // script.async = false;

        preview.head.appendChild(script);
      });
    } // https://codetheory.in/babel-6-and-above-in-browser/
    // TODO : Currently not in use, remove if not required

  }, {
    key: "babelTranspile",
    value: function babelTranspile() {
      // Get all the babel scripts
      var babel_scripts = document.querySelectorAll('script[type="text/babel"]'); // Loop over them

      Array.prototype.forEach.call(babel_scripts, function (script, index, arr) {
        // Get their contents
        var input = script.textContent; // Transform/Transpile/Compile

        var output = Babel.transform(input, {
          presets: ['es2015', 'react']
        }).code; // Create a new script tag of `javascript` type

        var new_script = document.createElement('script');
        new_script.setAttribute('type', 'text/javascript'); // Set the contents of the script to the transpiled code

        new_script.textContent = output; // Remove the babel script

        script.remove(); // Inject the new transpiled JS

        document.querySelector('body').appendChild(new_script);
      });
    }
  }]);

  return Editor;
}(); // document.addEventListener('DOMContentLoaded', (event) => {


var codeEditor = new Editor();
codeEditor.init(); // });