function Simplify(n) {
  if(n<10) return n;
  var sum = 0;
  while (n > 9) {
    sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
     
    }
    if (sum >= 10) {
      n = sum;
    }
  }
  return sum;
}
var n = 97;
var res = Simplify(n);
var test1 = false;
test1 = (res == 7);
console.log('test1 =' + test1);
n=8;
res = Simplify(n);
var test2 = false;
test2 = (res == 8);
console.log('test2 =' + test2);
n=1086;
res = Simplify(n);
var test3 = false;
test3 = (res == 6);
console.log('test3 =' + test3);
