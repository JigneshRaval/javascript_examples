import { Main } from './app.module';
/* const { Observable, range, of } = rxjs;
const { map, filter } = rxjs.operators; */

import { Observable, range, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

let test = new Main();

console.log(test);

// EXAMPLE 1
// ========================
const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');

// EXAMPLE 2
// ========================
range(1, 200).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x));



// EXAMPLE 3
// ========================
map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`EXAMPLE 3 value: ${v}`));
