// const { Observable } = require("rxjs");

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     // subscriber.complete();
//   }, 100);
// });

// console.log("just before subscribe");

// observable.subscribe({
//   next(x) {
//     console.log("got value " + x);
//   },
//   error(err) {
//     console.error("something wrong occurred: " + err);
//   },
//   complete() {
//     console.log("done");
//   },
// });

// observable.forEach((v) => {
//   console.log("v--------->", v);
// });
// console.log("just after subscribe");
