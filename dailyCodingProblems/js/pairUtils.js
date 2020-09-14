/*
Problem #5 [Medium]:
`cons(a, b)` constructs a pair, and `car(pair)` and `cdr(pair)` returns the first and last element of that pair. For example, `car(cons(3, 4))` returns 3, and `cdr(cons(3, 4))` returns 4.

Given this implementation of cons:

```
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
```
Implement car and cdr
*/

function cons(a, b) {
  function pair(f) {
    return f(a, b);
  }

  return pair;
}

function getPairValues(a, b) {
  return [a, b];
}

function car(pair) {
  const [first] = pair(getPairValues);
  return first;
}

function cdr(pair) {
  const [, last] = pair(getPairValues);
  return last;
}