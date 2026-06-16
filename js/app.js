function createCounter() {
  let count = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function value() {
    return count;
  }

  return {
    increment,
    decrement,
    value,
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value());

/* count is not reset because increment() does not create count — 
it only reads and updates it. 
count actually belongs to createCounter()'s scope.

As long as counter keeps holding reference to those inner functions, 
that scope stays alive in memory.
This whole behavior is called closure.
*/
