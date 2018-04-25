var a = 10;
var b = 20;
var c = 5;
var v;
var d;
var x1;
var x2;

if (a===0) {
  console.log('Please put another a');
}

v = Math.pow(b,2)-4*c*a;
if (v > 0) {
  d = Math.sqrt(v);
  x1 = (-b-d)/(2*a);
  x2 = (-b+d)/(2*a);
  console.log('We have two answers:' + x1 + x2);
} else if (v === 0) {
  d = Math.sqrt(v);
  x1 = -b/(2*a);
  console.log('We have answer:' + x1);
} else {
  console.log("We dont have answer");
}

