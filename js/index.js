var a = prompt ('Enter a');
var b = prompt ('Enter b');
var c = prompt ('Enter c');
var  D = (b * b) - (4 * a * c);
var korD = Math.sqrt(D);
var x = -b / (2 * a);
  var x1 = (-b + korD) / (2 * a);
  var x2 = (-b - korD) / (2 * a);
function calc() {
 if (D == 0) {
  return (x)
 }
  if (D < 0) {
    return ('No results')
  } if (D > 0) {
  return [x1, x2];
  }
}
document.write(calc());