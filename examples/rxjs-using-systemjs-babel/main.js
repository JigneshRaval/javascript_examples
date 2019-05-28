// import * as rxjs from '../node_modules/rxjs/Rx';
// import * as rxjs from '../js/rxjs/rxjs.umd.js';
// (<any>window).UIkit = UIkit;
// window.rxjs = rxjs;
let Rx = window.Rx = window['rxjs'];

let { tap, map, filter, debounceTime, distinctUntilChanged, switchMap } = Rx.operators;
const { of } = Rx;

of(1, 2, 3).pipe(map(x => x + '!!!')); // etc

map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
