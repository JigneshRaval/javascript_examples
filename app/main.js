import { Main } from './other.js';

// import * as rxjs from '../node_modules/rxjs/Rx';
// import * as rxjs from '../js/rxjs/rxjs.umd.js';
// (<any>window).UIkit = UIkit;
// window.rxjs = rxjs;
let Rx = window.Rx = window['rxjs'];

let { tap, map, filter, debounceTime, distinctUntilChanged, switchMap } = Rx.operators;
const { of } = Rx;

let test = new Main();

console.log(test);

test.showMessage();

of(1, 2, 3).pipe(map(x => x + '!!!')); // etc

map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

function searchWikipedia(term) {
    return $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term,
            limit: 10
        }
    }).promise();
}

const $input = document.querySelector('#textInput');
const $results = $('#results');

// Get all distinct key up events from the input and only fire if long enough and distinct
Rx.fromEvent($input, 'keyup').pipe(
    map(e => e.target.value),
    //filter(text => text.length > 2),
    debounceTime(750),
    distinctUntilChanged(),
    tap(console.log),
    switchMap(searchWikipedia)
)
    .subscribe(
        ([, data]) => {
            $results.empty().append(data.map(v => $('<li>').text(v)))
        },
        error => $results.empty().append($('<li>')).text('Error:' + error)
    );
