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

  // This is the start of funtion.

  // Section-A (-b-a) column-1

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && b - a >= 0 && a - b < 10 && b - a < 10) {
      outputContent.innerHTML =
        "Formula (a - b , b - a) output is correct: =  " + (a - b) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && b - a >= 0 && a - c < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , b - a) output is correct: =  " + (a - c) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && b - a >= 0 && a - d < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , b - a) output is correct: =  " + (a - d) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && b - a >= 0 && a - e < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , b - a) output is correct: =  " + (a - e) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && b - a >= 0 && a - f < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , b - a) output is correct: =  " + (a - f) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c - a >= 0 && a - b < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c - a) output is correct: =  " + (a - b) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c - a >= 0 && a - c < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c - a) output is correct: =  " + (a - c) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c - a >= 0 && a - d < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c - a) output is correct: =  " + (a - d) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c - a >= 0 && a - e < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c - a) output is correct: =  " + (a - e) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c - a >= 0 && a - f < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c - a) output is correct: =  " + (a - f) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && d - a >= 0 && a - b < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , d - a) output is correct: =  " + (a - b) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && d - a >= 0 && a - c < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , d - a) output is correct: =  " + (a - c) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && d - a >= 0 && a - d < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , d - a) output is correct: =  " + (a - d) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && d - a >= 0 && a - e < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , d - a) output is correct: =  " + (a - e) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && d - a >= 0 && a - f < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , d - a) output is correct: =  " + (a - f) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e - a >= 0 && a - b < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e - a) output is correct: =  " + (a - b) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e - a >= 0 && a - c < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e - a) output is correct: =  " + (a - c) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e - a >= 0 && a - d < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e - a) output is correct: =  " + (a - d) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e - a >= 0 && a - e < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e - a) output is correct: =  " + (a - e) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e - a >= 0 && a - f < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e - a) output is correct: =  " + (a - f) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && f - a >= 0 && a - b < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , f - a) output is correct: =  " + (a - b) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && f - a >= 0 && a - c < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , f - a) output is correct: =  " + (a - c) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && f - a >= 0 && a - d < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , f - a) output is correct: =  " + (a - d) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && f - a >= 0 && a - e < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , f - a) output is correct: =  " + (a - e) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && f - a >= 0 && a - f < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , f - a) output is correct: =  " + (a - f) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  //   Section-A (-a-b) column-1

  //   This is the end of funtion.
}
