function myFunction2() {
  var a1 = document.getElementById("myNumber1").value;
  var b1 = document.getElementById("myNumber2").value;
  var c1 = document.getElementById("myNumber3").value;
  var d1 = document.getElementById("myNumber4").value;
  var e1 = document.getElementById("myNumber5").value;
  var f1 = document.getElementById("myNumber6").value;

  var a = parseInt(a1);
  var b = parseInt(b1);
  var c = parseInt(c1);
  var d = parseInt(d1);
  var e = parseInt(e1);
  var f = parseInt(f1);

  var outputContent = document.getElementById("demo");

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && b - a >= 0 && a - b < 10 && b - a < 10) {
      outputContent.innerHTML = "Formula (a - b , b - a) output is correct: =  " + (a - b) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && b - a >= 0 && a - c < 10 && b - a < 10) {
      outputContent.innerHTML += "Formula (a - c , b - a) output is correct: =  " + (a - c) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";


//   This is the End of Funtion-2. 
}
