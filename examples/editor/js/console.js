// console  -------------------------------------------------------------
$(document).ready(function () {
    // Ref : https://stackoverflow.com/questions/6604192/showing-console-errors-and-alerts-in-a-div-inside-the-page
    var consoleElem = document.querySelector('#console');

    function parseLog(input) {
        var type;
        type = typeof input;
        if (type === "object") {
            input = JSON.stringify(input);
            if (input.indexOf("{") === 0) {
                input = "Object " + input;
            }
            input = "<em>" + input + "</em>";
        }
        return input = "<span class=\"" + type + "\">" + input + "</span>";
    };

    function addLog() {
        var $list, args, html, text, type;
        type = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        $list = this.$("ul.logs-body");
        text = $.map(args, this.parseLog).join(" ");
        html = "<li class=\"log-item " + type + "\">\n    <pre>" + text + "</pre>\n</li>";
        return $list.append(html);
    };

    function scrollToBottom() {
        consoleElem.lastElementChild.lastElementChild.scrollIntoView({ behavior: 'smooth',  block: "end" });
    };

    ['log', 'debug', 'info', 'warn', 'error'].forEach(function (verb) {
        console[verb] = (function (method, verb, consoleElem) {
            return function () {
                method.apply(console, arguments);
                var msg = document.createElement('p');
                msg.classList.add(verb);
                msg.textContent = verb + ': ' + Array.prototype.slice.call(arguments).join(" ");
                let logs = consoleElem.querySelector('.logs');
                logs.appendChild(msg);
                scrollToBottom();
            };
        })(console[verb].bind(console), verb, consoleElem);
    });

});

/*
var realConsoleLog = console.log;
console.log = function () {
    var message = [].join.call(arguments, " ");
    // Display the message somewhere... (jQuery example);

    for (let i = 0; i < arguments.length; i++) {
        alert(arguments[i]);
    }
    $("#console").append(message + arguments);
    realConsoleLog.apply(console, arguments);
};
console.error = console.debug = console.info = console.log;
*/
