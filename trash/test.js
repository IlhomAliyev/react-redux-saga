function* genFunc() {
  for (let i = 0; i <= 5; i++) {
    yield i;
  }
}

const iter = genFunc();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());