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

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && a - b >= 0 && a - b < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , a - b) output is correct: =  " + (a - b) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && a - b >= 0 && a - c < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , a - b) output is correct: =  " + (a - c) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && a - b >= 0 && a - d < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , a - b) output is correct: =  " + (a - d) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && a - b >= 0 && a - e < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , a - b) output is correct: =  " + (a - e) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && a - b >= 0 && a - f < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , a - b) output is correct: =  " + (a - f) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-a-b) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && a - c >= 0 && a - b < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , a - c) output is correct: =  " + (a - b) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && a - c >= 0 && a - c < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , a - c) output is correct: =  " + (a - c) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && a - c >= 0 && a - d < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , a - c) output is correct: =  " + (a - d) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && a - c >= 0 && a - e < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , a - c) output is correct: =  " + (a - e) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && a - c >= 0 && a - f < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , a - c) output is correct: =  " + (a - f) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-a-b) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && a - d >= 0 && a - b < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , a - d) output is correct: =  " + (a - b) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && a - d >= 0 && a - c < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , a - d) output is correct: =  " + (a - c) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && a - d >= 0 && a - d < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , a - d) output is correct: =  " + (a - d) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && a - d >= 0 && a - e < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , a - d) output is correct: =  " + (a - e) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && a - d >= 0 && a - f < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , a - d) output is correct: =  " + (a - f) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-a-b) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && a - e >= 0 && a - b < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , a - e) output is correct: =  " + (a - b) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && a - e >= 0 && a - c < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , a - e) output is correct: =  " + (a - c) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && a - e >= 0 && a - d < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , a - e) output is correct: =  " + (a - d) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && a - e >= 0 && a - e < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , a - e) output is correct: =  " + (a - e) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && a - e >= 0 && a - f < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , a - e) output is correct: =  " + (a - f) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-a-b) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && a - f >= 0 && a - b < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , a - f) output is correct: =  " + (a - b) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && a - f >= 0 && a - c < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , a - f) output is correct: =  " + (a - c) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && a - f >= 0 && a - d < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , a - f) output is correct: =  " + (a - d) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && a - f >= 0 && a - e < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , a - f) output is correct: =  " + (a - e) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && a - f >= 0 && a - f < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , a - f) output is correct: =  " + (a - f) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  //  Section-A (-b-c) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && b - c >= 0 && a - b < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , b - c) output is correct: =  " + (a - b) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && b - c >= 0 && a - c < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , b - c) output is correct: =  " + (a - c) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && b - c >= 0 && a - d < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , b - c) output is correct: =  " + (a - d) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && b - c >= 0 && a - e < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , b - c) output is correct: =  " + (a - e) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && b - c >= 0 && a - f < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , b - c) output is correct: =  " + (a - f) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b-c) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && b - d >= 0 && a - b < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , b - d) output is correct: =  " + (a - b) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && b - d >= 0 && a - c < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , b - d) output is correct: =  " + (a - c) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && b - d >= 0 && a - d < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , b - d) output is correct: =  " + (a - d) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && b - d >= 0 && a - e < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , b - d) output is correct: =  " + (a - e) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && b - d >= 0 && a - f < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , b - d) output is correct: =  " + (a - f) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b-c) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && b - e >= 0 && a - b < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , b - e) output is correct: =  " + (a - b) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && b - e >= 0 && a - c < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , b - e) output is correct: =  " + (a - c) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && b - e >= 0 && a - d < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , b - e) output is correct: =  " + (a - d) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && b - e >= 0 && a - e < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , b - e) output is correct: =  " + (a - e) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && b - e >= 0 && a - f < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , b - e) output is correct: =  " + (a - f) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b-c) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && b - f >= 0 && a - b < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , b - f) output is correct: =  " + (a - b) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && b - f >= 0 && a - c < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , b - f) output is correct: =  " + (a - c) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && b - f >= 0 && a - d < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , b - f) output is correct: =  " + (a - d) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && b - f >= 0 && a - e < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , b - f) output is correct: =  " + (a - e) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && b - f >= 0 && a - f < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , b - f) output is correct: =  " + (a - f) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  //  Section-A (-c-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c - b >= 0 && a - b < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c - b) output is correct: =  " + (a - b) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c - b >= 0 && a - c < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c - b) output is correct: =  " + (a - c) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c - b >= 0 && a - d < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c - b) output is correct: =  " + (a - d) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c - b >= 0 && a - e < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c - b) output is correct: =  " + (a - e) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c - b >= 0 && a - f < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c - b) output is correct: =  " + (a - f) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-c-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c - e >= 0 && a - b < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c - e) output is correct: =  " + (a - b) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c - e >= 0 && a - c < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c - e) output is correct: =  " + (a - c) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c - e >= 0 && a - d < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c - e) output is correct: =  " + (a - d) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c - e >= 0 && a - e < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c - e) output is correct: =  " + (a - e) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c - e >= 0 && a - f < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c - e) output is correct: =  " + (a - f) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-c-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c - d >= 0 && a - b < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c - d) output is correct: =  " + (a - b) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c - d >= 0 && a - c < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c - d) output is correct: =  " + (a - c) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c - d >= 0 && a - d < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c - d) output is correct: =  " + (a - d) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c - d >= 0 && a - e < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c - d) output is correct: =  " + (a - e) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c - d >= 0 && a - f < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c - d) output is correct: =  " + (a - f) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-c-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c - f >= 0 && a - b < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c - f) output is correct: =  " + (a - b) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c - f >= 0 && a - c < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c - f) output is correct: =  " + (a - c) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c - f >= 0 && a - d < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c - f) output is correct: =  " + (a - d) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c - f >= 0 && a - e < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c - f) output is correct: =  " + (a - e) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c - f >= 0 && a - f < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c - f) output is correct: =  " + (a - f) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-d-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && d - b >= 0 && a - b < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , d - b) output is correct: =  " + (a - b) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && d - b >= 0 && a - c < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , d - b) output is correct: =  " + (a - c) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && d - b >= 0 && a - d < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , d - b) output is correct: =  " + (a - d) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && d - b >= 0 && a - e < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , d - b) output is correct: =  " + (a - e) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && d - b >= 0 && a - f < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , d - b) output is correct: =  " + (a - f) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-d-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && d - c >= 0 && a - b < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , d - c) output is correct: =  " + (a - b) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && d - c >= 0 && a - c < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , d - c) output is correct: =  " + (a - c) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && d - c >= 0 && a - d < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , d - c) output is correct: =  " + (a - d) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && d - c >= 0 && a - e < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , d - c) output is correct: =  " + (a - e) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && d - c >= 0 && a - f < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , d - c) output is correct: =  " + (a - f) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-d-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && d - e >= 0 && a - b < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , d - e) output is correct: =  " + (a - b) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && d - e >= 0 && a - c < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , d - e) output is correct: =  " + (a - c) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && d - e >= 0 && a - d < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , d - e) output is correct: =  " + (a - d) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && d - e >= 0 && a - e < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , d - e) output is correct: =  " + (a - e) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && d - e >= 0 && a - f < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , d - e) output is correct: =  " + (a - f) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-d-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && d - f >= 0 && a - b < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , d - f) output is correct: =  " + (a - b) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && d - f >= 0 && a - c < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , d - f) output is correct: =  " + (a - c) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && d - f >= 0 && a - d < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , d - f) output is correct: =  " + (a - d) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && d - f >= 0 && a - e < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , d - f) output is correct: =  " + (a - e) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && d - f >= 0 && a - f < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , d - f) output is correct: =  " + (a - f) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-e-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e - b >= 0 && a - b < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e - b) output is correct: =  " + (a - b) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e - b >= 0 && a - c < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e - b) output is correct: =  " + (a - c) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e - b >= 0 && a - d < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e - b) output is correct: =  " + (a - d) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e - b >= 0 && a - e < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e - b) output is correct: =  " + (a - e) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e - b >= 0 && a - f < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e - b) output is correct: =  " + (a - f) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-e-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e - c >= 0 && a - b < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e - c) output is correct: =  " + (a - b) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e - c >= 0 && a - c < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e - c) output is correct: =  " + (a - c) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e - c >= 0 && a - d < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e - c) output is correct: =  " + (a - d) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e - c >= 0 && a - e < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e - c) output is correct: =  " + (a - e) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e - c >= 0 && a - f < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e - c) output is correct: =  " + (a - f) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-e-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e - d >= 0 && a - b < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e - d) output is correct: =  " + (a - b) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e - d >= 0 && a - c < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e - d) output is correct: =  " + (a - c) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e - d >= 0 && a - d < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e - d) output is correct: =  " + (a - d) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e - d >= 0 && a - e < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e - d) output is correct: =  " + (a - e) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e - d >= 0 && a - f < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e - d) output is correct: =  " + (a - f) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-e-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e - f >= 0 && a - b < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e - f) output is correct: =  " + (a - b) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e - f >= 0 && a - c < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e - f) output is correct: =  " + (a - c) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e - f >= 0 && a - d < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e - f) output is correct: =  " + (a - d) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e - f >= 0 && a - e < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e - f) output is correct: =  " + (a - e) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e - f >= 0 && a - f < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e - f) output is correct: =  " + (a - f) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-f-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && f - b >= 0 && a - b < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , f - b) output is correct: =  " + (a - b) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && f - b >= 0 && a - c < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , f - b) output is correct: =  " + (a - c) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && f - b >= 0 && a - d < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , f - b) output is correct: =  " + (a - d) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && f - b >= 0 && a - e < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , f - b) output is correct: =  " + (a - e) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && f - b >= 0 && a - f < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , f - b) output is correct: =  " + (a - f) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-f-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && f - c >= 0 && a - b < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , f - c) output is correct: =  " + (a - b) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && f - c >= 0 && a - c < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , f - c) output is correct: =  " + (a - c) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && f - c >= 0 && a - d < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , f - c) output is correct: =  " + (a - d) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && f - c >= 0 && a - e < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , f - c) output is correct: =  " + (a - e) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && f - c >= 0 && a - f < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , f - c) output is correct: =  " + (a - f) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-f-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && f - d >= 0 && a - b < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , f - d) output is correct: =  " + (a - b) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && f - d >= 0 && a - c < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , f - d) output is correct: =  " + (a - c) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && f - d >= 0 && a - d < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , f - d) output is correct: =  " + (a - d) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && f - d >= 0 && a - e < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , f - d) output is correct: =  " + (a - e) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && f - d >= 0 && a - f < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , f - d) output is correct: =  " + (a - f) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-f-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && f - e >= 0 && a - b < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , f - e) output is correct: =  " + (a - b) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && f - e >= 0 && a - c < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , f - e) output is correct: =  " + (a - c) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && f - e >= 0 && a - d < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , f - e) output is correct: =  " + (a - d) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && f - e >= 0 && a - e < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , f - e) output is correct: =  " + (a - e) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && f - e >= 0 && a - f < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , f - e) output is correct: =  " + (a - f) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+a) column-1

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b + a >= 0 && a + b < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b + a) output is correct: =  " + (a + b) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b + a >= 0 && a + c < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b + a) output is correct: =  " + (a + c) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b + a >= 0 && a + d < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b + a) output is correct: =  " + (a + d) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b + a >= 0 && a + e < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b + a) output is correct: =  " + (a + e) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b + a >= 0 && a + f < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b + a) output is correct: =  " + (a + f) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c + a >= 0 && a + b < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c + a) output is correct: =  " + (a + b) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c + a >= 0 && a + c < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c + a) output is correct: =  " + (a + c) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c + a >= 0 && a + d < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c + a) output is correct: =  " + (a + d) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c + a >= 0 && a + e < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c + a) output is correct: =  " + (a + e) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c + a >= 0 && a + f < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c + a) output is correct: =  " + (a + f) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d + a >= 0 && a + b < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d + a) output is correct: =  " + (a + b) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d + a >= 0 && a + c < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d + a) output is correct: =  " + (a + c) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d + a >= 0 && a + d < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d + a) output is correct: =  " + (a + d) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d + a >= 0 && a + e < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d + a) output is correct: =  " + (a + e) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d + a >= 0 && a + f < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d + a) output is correct: =  " + (a + f) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e + a >= 0 && a + b < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e + a) output is correct: =  " + (a + b) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e + a >= 0 && a + c < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e + a) output is correct: =  " + (a + c) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e + a >= 0 && a + d < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e + a) output is correct: =  " + (a + d) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e + a >= 0 && a + e < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e + a) output is correct: =  " + (a + e) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e + a >= 0 && a + f < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e + a) output is correct: =  " + (a + f) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && f + a >= 0 && a + b < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , f + a) output is correct: =  " + (a + b) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && f + a >= 0 && a + c < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , f + a) output is correct: =  " + (a + c) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && f + a >= 0 && a + d < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , f + a) output is correct: =  " + (a + d) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && f + a >= 0 && a + e < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , f + a) output is correct: =  " + (a + e) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && f + a >= 0 && a + f < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , f + a) output is correct: =  " + (a + f) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+c) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b + d >= 0 && a + b < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b + d) output is correct: =  " + (a + b) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b + d >= 0 && a + c < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b + d) output is correct: =  " + (a + c) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b + d >= 0 && a + d < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b + d) output is correct: =  " + (a + d) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b + d >= 0 && a + e < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b + d) output is correct: =  " + (a + e) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b + d >= 0 && a + f < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b + d) output is correct: =  " + (a + f) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+c) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b + f >= 0 && a + b < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b + f) output is correct: =  " + (a + b) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b + f >= 0 && a + c < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b + f) output is correct: =  " + (a + c) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b + f >= 0 && a + d < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b + f) output is correct: =  " + (a + d) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b + f >= 0 && a + e < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b + f) output is correct: =  " + (a + e) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b + f >= 0 && a + f < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b + f) output is correct: =  " + (a + f) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c+a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c + b >= 0 && a + b < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c + b) output is correct: =  " + (a + b) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c + b >= 0 && a + c < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c + b) output is correct: =  " + (a + c) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c + b >= 0 && a + d < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c + b) output is correct: =  " + (a + d) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c + b >= 0 && a + e < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c + b) output is correct: =  " + (a + e) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c + b >= 0 && a + f < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c + b) output is correct: =  " + (a + f) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c+a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c + e >= 0 && a + b < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c + e) output is correct: =  " + (a + b) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c + e >= 0 && a + c < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c + e) output is correct: =  " + (a + c) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c + e >= 0 && a + d < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c + e) output is correct: =  " + (a + d) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c + e >= 0 && a + e < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c + e) output is correct: =  " + (a + e) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c + e >= 0 && a + f < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c + e) output is correct: =  " + (a + f) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c+a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c + d >= 0 && a + b < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c + d) output is correct: =  " + (a + b) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c + d >= 0 && a + c < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c + d) output is correct: =  " + (a + c) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c + d >= 0 && a + d < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c + d) output is correct: =  " + (a + d) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c + d >= 0 && a + e < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c + d) output is correct: =  " + (a + e) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c + d >= 0 && a + f < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c + d) output is correct: =  " + (a + f) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c + f >= 0 && a + b < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c + f) output is correct: =  " + (a + b) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c + f >= 0 && a + c < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c + f) output is correct: =  " + (a + c) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c + f >= 0 && a + d < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c + f) output is correct: =  " + (a + d) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c + f >= 0 && a + e < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c + f) output is correct: =  " + (a + e) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c + f >= 0 && a + f < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c + f) output is correct: =  " + (a + f) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+d+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d + f >= 0 && a + b < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d + f) output is correct: =  " + (a + b) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d + f >= 0 && a + c < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d + f) output is correct: =  " + (a + c) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d + f >= 0 && a + d < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d + f) output is correct: =  " + (a + d) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d + f >= 0 && a + e < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d + f) output is correct: =  " + (a + e) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d + f >= 0 && a + f < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d + f) output is correct: =  " + (a + f) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e+a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e + b >= 0 && a + b < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e + b) output is correct: =  " + (a + b) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e + b >= 0 && a + c < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e + b) output is correct: =  " + (a + c) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e + b >= 0 && a + d < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e + b) output is correct: =  " + (a + d) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e + b >= 0 && a + e < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e + b) output is correct: =  " + (a + e) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e + b >= 0 && a + f < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e + b) output is correct: =  " + (a + f) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e+a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e + d >= 0 && a + b < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e + d) output is correct: =  " + (a + b) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e + d >= 0 && a + c < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e + d) output is correct: =  " + (a + c) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e + d >= 0 && a + d < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e + d) output is correct: =  " + (a + d) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e + d >= 0 && a + e < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e + d) output is correct: =  " + (a + e) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e + d >= 0 && a + f < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e + d) output is correct: =  " + (a + f) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e + f >= 0 && a + b < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e + f) output is correct: =  " + (a + b) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e + f >= 0 && a + c < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e + f) output is correct: =  " + (a + c) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e + f >= 0 && a + d < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e + f) output is correct: =  " + (a + d) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e + f >= 0 && a + e < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e + f) output is correct: =  " + (a + e) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e + f >= 0 && a + f < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e + f) output is correct: =  " + (a + f) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-a) column-1

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b - a >= 0 && a + b < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b - a) output is correct: =  " + (a + b) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b - a >= 0 && a + c < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b - a) output is correct: =  " + (a + c) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b - a >= 0 && a + d < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b - a) output is correct: =  " + (a + d) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b - a >= 0 && a + e < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b - a) output is correct: =  " + (a + e) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b - a >= 0 && a + f < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b - a) output is correct: =  " + (a + f) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c - a >= 0 && a + b < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c - a) output is correct: =  " + (a + b) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c - a >= 0 && a + c < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c - a) output is correct: =  " + (a + c) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c - a >= 0 && a + d < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c - a) output is correct: =  " + (a + d) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c - a >= 0 && a + e < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c - a) output is correct: =  " + (a + e) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c - a >= 0 && a + f < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c - a) output is correct: =  " + (a + f) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d - a >= 0 && a + b < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d - a) output is correct: =  " + (a + b) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d - a >= 0 && a + c < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d - a) output is correct: =  " + (a + c) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d - a >= 0 && a + d < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d - a) output is correct: =  " + (a + d) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d - a >= 0 && a + e < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d - a) output is correct: =  " + (a + e) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d - a >= 0 && a + f < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d - a) output is correct: =  " + (a + f) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e - a >= 0 && a + b < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e - a) output is correct: =  " + (a + b) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e - a >= 0 && a + c < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e - a) output is correct: =  " + (a + c) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e - a >= 0 && a + d < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e - a) output is correct: =  " + (a + d) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e - a >= 0 && a + e < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e - a) output is correct: =  " + (a + e) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e - a >= 0 && a + f < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e - a) output is correct: =  " + (a + f) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && f - a >= 0 && a + b < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , f - a) output is correct: =  " + (a + b) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && f - a >= 0 && a + c < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , f - a) output is correct: =  " + (a + c) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && f - a >= 0 && a + d < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , f - a) output is correct: =  " + (a + d) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && f - a >= 0 && a + e < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , f - a) output is correct: =  " + (a + e) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && f - a >= 0 && a + f < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , f - a) output is correct: =  " + (a + f) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  //   Section-A (+a-b) column-1

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && a - b >= 0 && a + b < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , a - b) output is correct: =  " + (a + b) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && a - b >= 0 && a + c < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , a - b) output is correct: =  " + (a + c) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && a - b >= 0 && a + d < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , a - b) output is correct: =  " + (a + d) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && a - b >= 0 && a + e < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , a - b) output is correct: =  " + (a + e) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && a - b >= 0 && a + f < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , a - b) output is correct: =  " + (a + f) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+a-b) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && a - c >= 0 && a + b < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , a - c) output is correct: =  " + (a + b) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && a - c >= 0 && a + c < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , a - c) output is correct: =  " + (a + c) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && a - c >= 0 && a + d < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , a - c) output is correct: =  " + (a + d) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && a - c >= 0 && a + e < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , a - c) output is correct: =  " + (a + e) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && a - c >= 0 && a + f < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , a - c) output is correct: =  " + (a + f) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+a-b) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && a - d >= 0 && a + b < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , a - d) output is correct: =  " + (a + b) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && a - d >= 0 && a + c < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , a - d) output is correct: =  " + (a + c) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && a - d >= 0 && a + d < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , a - d) output is correct: =  " + (a + d) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && a - d >= 0 && a + e < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , a - d) output is correct: =  " + (a + e) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && a - d >= 0 && a + f < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , a - d) output is correct: =  " + (a + f) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+a-b) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && a - e >= 0 && a + b < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , a - e) output is correct: =  " + (a + b) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && a - e >= 0 && a + c < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , a - e) output is correct: =  " + (a + c) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && a - e >= 0 && a + d < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , a - e) output is correct: =  " + (a + d) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && a - e >= 0 && a + e < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , a - e) output is correct: =  " + (a + e) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && a - e >= 0 && a + f < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , a - e) output is correct: =  " + (a + f) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+a-b) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && a - f >= 0 && a + b < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , a - f) output is correct: =  " + (a + b) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && a - f >= 0 && a + c < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , a - f) output is correct: =  " + (a + c) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && a - f >= 0 && a + d < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , a - f) output is correct: =  " + (a + d) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && a - f >= 0 && a + e < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , a - f) output is correct: =  " + (a + e) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && a - f >= 0 && a + f < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , a - f) output is correct: =  " + (a + f) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  //  Section-A (+b-c) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b - c >= 0 && a + b < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b - c) output is correct: =  " + (a + b) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b - c >= 0 && a + c < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b - c) output is correct: =  " + (a + c) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b - c >= 0 && a + d < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b - c) output is correct: =  " + (a + d) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b - c >= 0 && a + e < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b - c) output is correct: =  " + (a + e) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b - c >= 0 && a + f < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b - c) output is correct: =  " + (a + f) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-c) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b - d >= 0 && a + b < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b - d) output is correct: =  " + (a + b) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b - d >= 0 && a + c < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b - d) output is correct: =  " + (a + c) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b - d >= 0 && a + d < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b - d) output is correct: =  " + (a + d) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b - d >= 0 && a + e < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b - d) output is correct: =  " + (a + e) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b - d >= 0 && a + f < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b - d) output is correct: =  " + (a + f) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-c) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b - e >= 0 && a + b < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b - e) output is correct: =  " + (a + b) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b - e >= 0 && a + c < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b - e) output is correct: =  " + (a + c) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b - e >= 0 && a + d < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b - e) output is correct: =  " + (a + d) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b - e >= 0 && a + e < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b - e) output is correct: =  " + (a + e) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b - e >= 0 && a + f < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b - e) output is correct: =  " + (a + f) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-c) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b - f >= 0 && a + b < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b - f) output is correct: =  " + (a + b) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b - f >= 0 && a + c < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b - f) output is correct: =  " + (a + c) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b - f >= 0 && a + d < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b - f) output is correct: =  " + (a + d) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b - f >= 0 && a + e < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b - f) output is correct: =  " + (a + e) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b - f >= 0 && a + f < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b - f) output is correct: =  " + (a + f) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  //  Section-A (+c-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c - b >= 0 && a + b < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c - b) output is correct: =  " + (a + b) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c - b >= 0 && a + c < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c - b) output is correct: =  " + (a + c) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c - b >= 0 && a + d < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c - b) output is correct: =  " + (a + d) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c - b >= 0 && a + e < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c - b) output is correct: =  " + (a + e) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c - b >= 0 && a + f < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c - b) output is correct: =  " + (a + f) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c - e >= 0 && a + b < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c - e) output is correct: =  " + (a + b) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c - e >= 0 && a + c < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c - e) output is correct: =  " + (a + c) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c - e >= 0 && a + d < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c - e) output is correct: =  " + (a + d) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c - e >= 0 && a + e < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c - e) output is correct: =  " + (a + e) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c - e >= 0 && a + f < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c - e) output is correct: =  " + (a + f) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c - d >= 0 && a + b < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c - d) output is correct: =  " + (a + b) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c - d >= 0 && a + c < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c - d) output is correct: =  " + (a + c) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c - d >= 0 && a + d < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c - d) output is correct: =  " + (a + d) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c - d >= 0 && a + e < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c - d) output is correct: =  " + (a + e) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c - d >= 0 && a + f < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c - d) output is correct: =  " + (a + f) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c - f >= 0 && a + b < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c - f) output is correct: =  " + (a + b) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c - f >= 0 && a + c < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c - f) output is correct: =  " + (a + c) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c - f >= 0 && a + d < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c - f) output is correct: =  " + (a + d) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c - f >= 0 && a + e < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c - f) output is correct: =  " + (a + e) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c - f >= 0 && a + f < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c - f) output is correct: =  " + (a + f) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+d-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d - b >= 0 && a + b < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d - b) output is correct: =  " + (a + b) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d - b >= 0 && a + c < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d - b) output is correct: =  " + (a + c) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d - b >= 0 && a + d < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d - b) output is correct: =  " + (a + d) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d - b >= 0 && a + e < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d - b) output is correct: =  " + (a + e) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d - b >= 0 && a + f < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d - b) output is correct: =  " + (a + f) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+d-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d - c >= 0 && a + b < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d - c) output is correct: =  " + (a + b) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d - c >= 0 && a + c < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d - c) output is correct: =  " + (a + c) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d - c >= 0 && a + d < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d - c) output is correct: =  " + (a + d) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d - c >= 0 && a + e < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d - c) output is correct: =  " + (a + e) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d - c >= 0 && a + f < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d - c) output is correct: =  " + (a + f) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+d-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d - e >= 0 && a + b < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d - e) output is correct: =  " + (a + b) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d - e >= 0 && a + c < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d - e) output is correct: =  " + (a + c) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d - e >= 0 && a + d < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d - e) output is correct: =  " + (a + d) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d - e >= 0 && a + e < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d - e) output is correct: =  " + (a + e) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d - e >= 0 && a + f < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d - e) output is correct: =  " + (a + f) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+d-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d - f >= 0 && a + b < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d - f) output is correct: =  " + (a + b) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d - f >= 0 && a + c < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d - f) output is correct: =  " + (a + c) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d - f >= 0 && a + d < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d - f) output is correct: =  " + (a + d) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d - f >= 0 && a + e < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d - f) output is correct: =  " + (a + e) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d - f >= 0 && a + f < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d - f) output is correct: =  " + (a + f) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e - b >= 0 && a + b < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e - b) output is correct: =  " + (a + b) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e - b >= 0 && a + c < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e - b) output is correct: =  " + (a + c) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e - b >= 0 && a + d < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e - b) output is correct: =  " + (a + d) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e - b >= 0 && a + e < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e - b) output is correct: =  " + (a + e) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e - b >= 0 && a + f < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e - b) output is correct: =  " + (a + f) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e - c >= 0 && a + b < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e - c) output is correct: =  " + (a + b) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e - c >= 0 && a + c < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e - c) output is correct: =  " + (a + c) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e - c >= 0 && a + d < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e - c) output is correct: =  " + (a + d) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e - c >= 0 && a + e < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e - c) output is correct: =  " + (a + e) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e - c >= 0 && a + f < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e - c) output is correct: =  " + (a + f) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e - d >= 0 && a + b < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e - d) output is correct: =  " + (a + b) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e - d >= 0 && a + c < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e - d) output is correct: =  " + (a + c) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e - d >= 0 && a + d < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e - d) output is correct: =  " + (a + d) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e - d >= 0 && a + e < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e - d) output is correct: =  " + (a + e) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e - d >= 0 && a + f < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e - d) output is correct: =  " + (a + f) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e - f >= 0 && a + b < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e - f) output is correct: =  " + (a + b) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e - f >= 0 && a + c < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e - f) output is correct: =  " + (a + c) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e - f >= 0 && a + d < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e - f) output is correct: =  " + (a + d) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e - f >= 0 && a + e < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e - f) output is correct: =  " + (a + e) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e - f >= 0 && a + f < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e - f) output is correct: =  " + (a + f) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+f-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && f - b >= 0 && a + b < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , f - b) output is correct: =  " + (a + b) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && f - b >= 0 && a + c < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , f - b) output is correct: =  " + (a + c) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && f - b >= 0 && a + d < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , f - b) output is correct: =  " + (a + d) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && f - b >= 0 && a + e < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , f - b) output is correct: =  " + (a + e) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && f - b >= 0 && a + f < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , f - b) output is correct: =  " + (a + f) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+f-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && f - c >= 0 && a + b < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , f - c) output is correct: =  " + (a + b) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && f - c >= 0 && a + c < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , f - c) output is correct: =  " + (a + c) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && f - c >= 0 && a + d < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , f - c) output is correct: =  " + (a + d) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && f - c >= 0 && a + e < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , f - c) output is correct: =  " + (a + e) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && f - c >= 0 && a + f < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , f - c) output is correct: =  " + (a + f) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+f-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && f - d >= 0 && a + b < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , f - d) output is correct: =  " + (a + b) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && f - d >= 0 && a + c < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , f - d) output is correct: =  " + (a + c) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && f - d >= 0 && a + d < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , f - d) output is correct: =  " + (a + d) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && f - d >= 0 && a + e < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , f - d) output is correct: =  " + (a + e) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && f - d >= 0 && a + f < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , f - d) output is correct: =  " + (a + f) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+f-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && f - e >= 0 && a + b < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , f - e) output is correct: =  " + (a + b) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && f - e >= 0 && a + c < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , f - e) output is correct: =  " + (a + c) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && f - e >= 0 && a + d < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , f - e) output is correct: =  " + (a + d) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && f - e >= 0 && a + e < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , f - e) output is correct: =  " + (a + e) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && f - e >= 0 && a + f < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , f - e) output is correct: =  " + (a + f) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+a) column-1

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && b + a >= 0 && a - b < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , b + a) output is correct: =  " + (a - b) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && b + a >= 0 && a - c < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , b + a) output is correct: =  " + (a - c) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && b + a >= 0 && a - d < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , b + a) output is correct: =  " + (a - d) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && b + a >= 0 && a - e < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , b + a) output is correct: =  " + (a - e) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && b + a >= 0 && a - f < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , b + a) output is correct: =  " + (a - f) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c + a >= 0 && a - b < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c + a) output is correct: =  " + (a - b) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c + a >= 0 && a - c < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c + a) output is correct: =  " + (a - c) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c + a >= 0 && a - d < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c + a) output is correct: =  " + (a - d) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c + a >= 0 && a - e < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c + a) output is correct: =  " + (a - e) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c + a >= 0 && a - f < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c + a) output is correct: =  " + (a - f) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && d + a >= 0 && a - b < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , d + a) output is correct: =  " + (a - b) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && d + a >= 0 && a - c < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , d + a) output is correct: =  " + (a - c) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && d + a >= 0 && a - d < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , d + a) output is correct: =  " + (a - d) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && d + a >= 0 && a - e < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , d + a) output is correct: =  " + (a - e) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && d + a >= 0 && a - f < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , d + a) output is correct: =  " + (a - f) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e + a >= 0 && a - b < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e + a) output is correct: =  " + (a - b) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e + a >= 0 && a - c < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e + a) output is correct: =  " + (a - c) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e + a >= 0 && a - d < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e + a) output is correct: =  " + (a - d) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e + a >= 0 && a - e < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e + a) output is correct: =  " + (a - e) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e + a >= 0 && a - f < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e + a) output is correct: =  " + (a - f) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && f + a >= 0 && a - b < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , f + a) output is correct: =  " + (a - b) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && f + a >= 0 && a - c < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , f + a) output is correct: =  " + (a - c) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && f + a >= 0 && a - d < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , f + a) output is correct: =  " + (a - d) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && f + a >= 0 && a - e < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , f + a) output is correct: =  " + (a - e) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && f + a >= 0 && a - f < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , f + a) output is correct: =  " + (a - f) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+c) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && b + d >= 0 && a - b < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , b + d) output is correct: =  " + (a - b) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && b + d >= 0 && a - c < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , b + d) output is correct: =  " + (a - c) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && b + d >= 0 && a - d < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , b + d) output is correct: =  " + (a - d) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && b + d >= 0 && a - e < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , b + d) output is correct: =  " + (a - e) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && b + d >= 0 && a - f < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , b + d) output is correct: =  " + (a - f) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+c) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && b + f >= 0 && a - b < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , b + f) output is correct: =  " + (a - b) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && b + f >= 0 && a - c < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , b + f) output is correct: =  " + (a - c) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && b + f >= 0 && a - d < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , b + f) output is correct: =  " + (a - d) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && b + f >= 0 && a - e < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , b + f) output is correct: =  " + (a - e) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && b + f >= 0 && a - f < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , b + f) output is correct: =  " + (a - f) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-c+a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c + b >= 0 && a - b < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c + b) output is correct: =  " + (a - b) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c + b >= 0 && a - c < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c + b) output is correct: =  " + (a - c) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c + b >= 0 && a - d < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c + b) output is correct: =  " + (a - d) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c + b >= 0 && a - e < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c + b) output is correct: =  " + (a - e) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c + b >= 0 && a - f < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c + b) output is correct: =  " + (a - f) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-c+a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c + e >= 0 && a - b < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c + e) output is correct: =  " + (a - b) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c + e >= 0 && a - c < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c + e) output is correct: =  " + (a - c) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c + e >= 0 && a - d < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c + e) output is correct: =  " + (a - d) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c + e >= 0 && a - e < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c + e) output is correct: =  " + (a - e) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c + e >= 0 && a - f < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c + e) output is correct: =  " + (a - f) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-c+a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c + d >= 0 && a - b < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c + d) output is correct: =  " + (a - b) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c + d >= 0 && a - c < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c + d) output is correct: =  " + (a - c) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c + d >= 0 && a - d < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c + d) output is correct: =  " + (a - d) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c + d >= 0 && a - e < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c + d) output is correct: =  " + (a - e) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c + d >= 0 && a - f < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c + d) output is correct: =  " + (a - f) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-c+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c + f >= 0 && a - b < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c + f) output is correct: =  " + (a - b) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c + f >= 0 && a - c < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c + f) output is correct: =  " + (a - c) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c + f >= 0 && a - d < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c + f) output is correct: =  " + (a - d) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c + f >= 0 && a - e < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c + f) output is correct: =  " + (a - e) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c + f >= 0 && a - f < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c + f) output is correct: =  " + (a - f) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-d+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && d + f >= 0 && a - b < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , d + f) output is correct: =  " + (a - b) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && d + f >= 0 && a - c < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , d + f) output is correct: =  " + (a - c) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && d + f >= 0 && a - d < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , d + f) output is correct: =  " + (a - d) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && d + f >= 0 && a - e < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , d + f) output is correct: =  " + (a - e) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && d + f >= 0 && a - f < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , d + f) output is correct: =  " + (a - f) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-e+a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e + b >= 0 && a - b < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e + b) output is correct: =  " + (a - b) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e + b >= 0 && a - c < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e + b) output is correct: =  " + (a - c) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e + b >= 0 && a - d < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e + b) output is correct: =  " + (a - d) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e + b >= 0 && a - e < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e + b) output is correct: =  " + (a - e) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e + b >= 0 && a - f < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e + b) output is correct: =  " + (a - f) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-e+a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e + d >= 0 && a - b < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e + d) output is correct: =  " + (a - b) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e + d >= 0 && a - c < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e + d) output is correct: =  " + (a - c) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e + d >= 0 && a - d < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e + d) output is correct: =  " + (a - d) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e + d >= 0 && a - e < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e + d) output is correct: =  " + (a - e) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e + d >= 0 && a - f < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e + d) output is correct: =  " + (a - f) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-e+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e + f >= 0 && a - b < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e + f) output is correct: =  " + (a - b) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e + f >= 0 && a - c < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e + f) output is correct: =  " + (a - c) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e + f >= 0 && a - d < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e + f) output is correct: =  " + (a - d) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e + f >= 0 && a - e < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e + f) output is correct: =  " + (a - e) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e + f >= 0 && a - f < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e + f) output is correct: =  " + (a - f) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-b-a) column-1

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && b - a >= 0 && c - a < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , b - a) output is correct: =  " + (c - a) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && b - a >= 0 && c - b < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , b - a) output is correct: =  " + (c - b) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && b - a >= 0 && c - d < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , b - a) output is correct: =  " + (c - d) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && b - a >= 0 && c - e < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , b - a) output is correct: =  " + (c - e) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && b - a >= 0 && c - f < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , b - a) output is correct: =  " + (c - f) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-b-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && c - a >= 0 && c - a < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , c - a) output is correct: =  " + (c - a) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && c - a >= 0 && c - b < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , c - a) output is correct: =  " + (c - b) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && c - a >= 0 && c - d < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , c - a) output is correct: =  " + (c - d) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && c - a >= 0 && c - e < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , c - a) output is correct: =  " + (c - e) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && c - a >= 0 && c - f < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , c - a) output is correct: =  " + (c - f) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-b-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && d - a >= 0 && c - a < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , d - a) output is correct: =  " + (c - a) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && d - a >= 0 && c - b < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , d - a) output is correct: =  " + (c - b) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && d - a >= 0 && c - d < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , d - a) output is correct: =  " + (c - d) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && d - a >= 0 && c - e < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , d - a) output is correct: =  " + (c - e) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && d - a >= 0 && c - f < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , d - a) output is correct: =  " + (c - f) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-b-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && e - a >= 0 && c - a < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , e - a) output is correct: =  " + (c - a) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && e - a >= 0 && c - b < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , e - a) output is correct: =  " + (c - b) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && e - a >= 0 && c - d < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , e - a) output is correct: =  " + (c - d) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && e - a >= 0 && c - e < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , e - a) output is correct: =  " + (c - e) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && e - a >= 0 && c - f < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , e - a) output is correct: =  " + (c - f) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-b-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && f - a >= 0 && c - a < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , f - a) output is correct: =  " + (c - a) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && f - a >= 0 && c - b < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , f - a) output is correct: =  " + (c - b) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && f - a >= 0 && c - d < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , f - a) output is correct: =  " + (c - d) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && f - a >= 0 && c - e < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , f - a) output is correct: =  " + (c - e) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && f - a >= 0 && c - f < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , f - a) output is correct: =  " + (c - f) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  //   Section-C (-a-b) column-1

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && a - b >= 0 && c - a < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , a - b) output is correct: =  " + (c - a) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && a - b >= 0 && c - b < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , a - b) output is correct: =  " + (c - b) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && a - b >= 0 && c - d < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , a - b) output is correct: =  " + (c - d) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && a - b >= 0 && c - e < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , a - b) output is correct: =  " + (c - e) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && a - b >= 0 && c - f < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , a - b) output is correct: =  " + (c - f) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-a-b) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && a - c >= 0 && c - a < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , a - c) output is correct: =  " + (c - a) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && a - c >= 0 && c - b < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , a - c) output is correct: =  " + (c - b) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && a - c >= 0 && c - d < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , a - c) output is correct: =  " + (c - d) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && a - c >= 0 && c - e < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , a - c) output is correct: =  " + (c - e) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && a - c >= 0 && c - f < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , a - c) output is correct: =  " + (c - f) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-a-b) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && a - d >= 0 && c - a < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , a - d) output is correct: =  " + (c - a) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && a - d >= 0 && c - b < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , a - d) output is correct: =  " + (c - b) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && a - d >= 0 && c - d < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , a - d) output is correct: =  " + (c - d) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && a - d >= 0 && c - e < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , a - d) output is correct: =  " + (c - e) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && a - d >= 0 && c - f < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , a - d) output is correct: =  " + (c - f) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-a-b) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && a - e >= 0 && c - a < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , a - e) output is correct: =  " + (c - a) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && a - e >= 0 && c - b < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , a - e) output is correct: =  " + (c - b) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";


  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && a - e >= 0 && c - d < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , a - e) output is correct: =  " + (c - d) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && a - e >= 0 && c - e < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , a - e) output is correct: =  " + (c - e) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && a - e >= 0 && c - f < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , a - e) output is correct: =  " + (c - f) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-a-b) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && a - f >= 0 && c - a < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , a - f) output is correct: =  " + (c - a) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && a - f >= 0 && c - b < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , a - f) output is correct: =  " + (c - b) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && a - f >= 0 && c - d < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , a - f) output is correct: =  " + (c - d) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && a - f >= 0 && c - e < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , a - f) output is correct: =  " + (c - e) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && a - f >= 0 && c - f < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , a - f) output is correct: =  " + (c - f) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  //  Section-C (-b-c) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && b - c >= 0 && c - a < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , b - c) output is correct: =  " + (c - a) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && b - c >= 0 && c - b < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , b - c) output is correct: =  " + (c - b) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && b - c >= 0 && c - d < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , b - c) output is correct: =  " + (c - d) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && b - c >= 0 && c - e < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , b - c) output is correct: =  " + (c - e) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && b - c >= 0 && c - f < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , b - c) output is correct: =  " + (c - f) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-b-c) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && b - d >= 0 && c - a < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , b - d) output is correct: =  " + (c - a) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && b - d >= 0 && c - b < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , b - d) output is correct: =  " + (c - b) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && b - d >= 0 && c - d < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , b - d) output is correct: =  " + (c - d) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && b - d >= 0 && c - e < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , b - d) output is correct: =  " + (c - e) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && b - d >= 0 && c - f < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , b - d) output is correct: =  " + (c - f) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-b-c) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && b - e >= 0 && c - a < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , b - e) output is correct: =  " + (c - a) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && b - e >= 0 && c - b < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , b - e) output is correct: =  " + (c - b) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && b - e >= 0 && c - d < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , b - e) output is correct: =  " + (c - d) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && b - e >= 0 && c - e < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , b - e) output is correct: =  " + (c - e) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && b - e >= 0 && c - f < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , b - e) output is correct: =  " + (c - f) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-b-c) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && b - f >= 0 && a - c < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , b - f) output is correct: =  " + (c - a) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && b - f >= 0 && c - b < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , b - f) output is correct: =  " + (c - b) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && b - f >= 0 && c - d < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , b - f) output is correct: =  " + (c - d) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && b - f >= 0 && c - e < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , b - f) output is correct: =  " + (c - e) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && b - f >= 0 && c - f < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , b - f) output is correct: =  " + (c - f) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  //  Section-C (-c-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && c - b >= 0 && c - a < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , c - b) output is correct: =  " + (c - a) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && c - b >= 0 && c - b < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , c - b) output is correct: =  " + (c - b) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && c - b >= 0 && c - d < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , c - b) output is correct: =  " + (c - d) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && c - b >= 0 && c - e < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , c - b) output is correct: =  " + (c - e) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && c - b >= 0 && c - f < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , c - b) output is correct: =  " + (c - f) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-c-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && c - d >= 0 && c - a < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , c - d) output is correct: =  " + (c - a) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";


  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && c - d >= 0 && c - b < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , c - d) output is correct: =  " + (c - b) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && c - d >= 0 && c - d < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , c - d) output is correct: =  " + (c - d) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && c - d >= 0 && c - e < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , c - d) output is correct: =  " + (c - e) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && c - d >= 0 && c - f < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , c - d) output is correct: =  " + (c - f) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-c-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && c - e >= 0 && c - a < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , c - e) output is correct: =  " + (c - a) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && c - e >= 0 && c - b < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , c - e) output is correct: =  " + (c - b) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && c - e >= 0 && c - d < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , c - e) output is correct: =  " + (c - d) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && c - e >= 0 && c - e < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , c - e) output is correct: =  " + (c - e) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && c - e >= 0 && c - f < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , c - e) output is correct: =  " + (c - f) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-c-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && c - f >= 0 && c - a < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , c - f) output is correct: =  " + (c - a) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && c - f >= 0 && c - b < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , c - f) output is correct: =  " + (c - b) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && c - f >= 0 && c - d < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , c - f) output is correct: =  " + (c - d) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && c - f >= 0 && c - e < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , c - f) output is correct: =  " + (c - e) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && c - f >= 0 && c - f < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , c - f) output is correct: =  " + (c - f) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-d-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && d - b >= 0 && c - a < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , d - b) output is correct: =  " + (c - a) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && d - b >= 0 && c - b < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , d - b) output is correct: =  " + (c - b) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && d - b >= 0 && c - d < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , d - b) output is correct: =  " + (c - d) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && d - b >= 0 && c - e < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , d - b) output is correct: =  " + (c - e) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && d - b >= 0 && c - f < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , d - b) output is correct: =  " + (c - f) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-d-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && d - c >= 0 && c - a < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , d - c) output is correct: =  " + (c - a) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && d - c >= 0 && c - b < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , d - c) output is correct: =  " + (c - b) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && d - c >= 0 && c - d < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , d - c) output is correct: =  " + (c - d) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && d - c >= 0 && c - e < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , d - c) output is correct: =  " + (c - e) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && d - c >= 0 && c - f < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , d - c) output is correct: =  " + (c - f) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-d-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && d - e >= 0 && c - a < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , d - e) output is correct: =  " + (c - a) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && d - e >= 0 && c - b < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , d - e) output is correct: =  " + (c - b) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && d - e >= 0 && c - d < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , d - e) output is correct: =  " + (c - d) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && d - e >= 0 && c - e < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , d - e) output is correct: =  " + (c - e) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && d - e >= 0 && c - f < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , d - e) output is correct: =  " + (c - f) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-d-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && d - f >= 0 && c - a < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , d - f) output is correct: =  " + (c - a) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && d - f >= 0 && c - b < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , d - f) output is correct: =  " + (c - b) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && d - f >= 0 && c - d < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , d - f) output is correct: =  " + (c - d) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && d - f >= 0 && c - e < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , d - f) output is correct: =  " + (c - e) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && d - f >= 0 && c - f < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , d - f) output is correct: =  " + (c - f) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-e-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && e - b >= 0 && c - a < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , e - b) output is correct: =  " + (c - a) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && e - b >= 0 && c - b < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , e - b) output is correct: =  " + (c - b) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && e - b >= 0 && c - d < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , e - b) output is correct: =  " + (c - d) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && e - b >= 0 && c - e < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , e - b) output is correct: =  " + (c - e) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && e - b >= 0 && c - f < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , e - b) output is correct: =  " + (c - f) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-e-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && e - c >= 0 && c - a < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , e - c) output is correct: =  " + (c - a) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && e - c >= 0 && c - b < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , e - c) output is correct: =  " + (c - b) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && e - c >= 0 && c - d < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , e - c) output is correct: =  " + (c - d) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && e - c >= 0 && c - e < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , e - c) output is correct: =  " + (c - e) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && e - c >= 0 && c - f < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , e - c) output is correct: =  " + (c - f) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-e-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && e - d >= 0 && c - a < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , e - d) output is correct: =  " + (c - a) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && e - d >= 0 && c - b < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , e - d) output is correct: =  " + (c - b) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && e - d >= 0 && ac- d < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , e - d) output is correct: =  " + (c - d) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && e - d >= 0 && c - e < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , e - d) output is correct: =  " + (c - e) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && e - d >= 0 && c - f < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , e - d) output is correct: =  " + (c - f) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-e-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && e - f >= 0 && c - a < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , e - f) output is correct: =  " + (c - a) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && e - f >= 0 && c - b < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , e - f) output is correct: =  " + (c - b) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && e - f >= 0 && c - d < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , e - f) output is correct: =  " + (c - d) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && e - f >= 0 && c - e < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , e - f) output is correct: =  " + (c - e) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && e - f >= 0 && c - f < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , e - f) output is correct: =  " + (c - f) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-f-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && f - b >= 0 && c - a < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , f - b) output is correct: =  " + (c - a) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && f - b >= 0 && c - b < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , f - b) output is correct: =  " + (c - b) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && f - b >= 0 && c - d < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , f - b) output is correct: =  " + (c - d) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && f - b >= 0 && c - e < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , f - b) output is correct: =  " + (c - e) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && f - b >= 0 && c - f < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , f - b) output is correct: =  " + (c - f) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-f-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && f - c >= 0 && c - a < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , f - c) output is correct: =  " + (c - a) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && f - c >= 0 && c - b < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , f - c) output is correct: =  " + (c - b) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && f - c >= 0 && c - d < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , f - c) output is correct: =  " + (c - d) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && f - c >= 0 && c - e < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , f - c) output is correct: =  " + (c - e) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && f - c >= 0 && c - f < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , f - c) output is correct: =  " + (c - f) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-f-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && f - d >= 0 && c - a < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , f - d) output is correct: =  " + (c - a) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && f - d >= 0 && c - b < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , f - d) output is correct: =  " + (c - b) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && f - d >= 0 && c - d < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , f - d) output is correct: =  " + (c - d) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && f - d >= 0 && c - e < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , f - d) output is correct: =  " + (c - e) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && f - d >= 0 && c - f < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , f - d) output is correct: =  " + (c - f) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (-f-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - a >= 0 && f - e >= 0 && c - a < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - a , f - e) output is correct: =  " + (c - a) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - b >= 0 && f - e >= 0 && c - b < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - b , f - e) output is correct: =  " + (c - b) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - d >= 0 && f - e >= 0 && c - d < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - d , f - e) output is correct: =  " + (c - d) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - e >= 0 && f - e >= 0 && c - e < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - e , f - e) output is correct: =  " + (c - e) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (c - f >= 0 && f - e >= 0 && c - f < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (c - f , f - e) output is correct: =  " + (c - f) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-C (+b+a) column-1

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b + a >= 0 && a + b < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b + a) output is correct: =  " + (a + b) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b + a >= 0 && a + c < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b + a) output is correct: =  " + (a + c) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b + a >= 0 && a + d < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b + a) output is correct: =  " + (a + d) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b + a >= 0 && a + e < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b + a) output is correct: =  " + (a + e) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b + a >= 0 && a + f < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b + a) output is correct: =  " + (a + f) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c + a >= 0 && a + b < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c + a) output is correct: =  " + (a + b) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c + a >= 0 && a + c < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c + a) output is correct: =  " + (a + c) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c + a >= 0 && a + d < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c + a) output is correct: =  " + (a + d) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c + a >= 0 && a + e < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c + a) output is correct: =  " + (a + e) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c + a >= 0 && a + f < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c + a) output is correct: =  " + (a + f) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d + a >= 0 && a + b < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d + a) output is correct: =  " + (a + b) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d + a >= 0 && a + c < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d + a) output is correct: =  " + (a + c) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d + a >= 0 && a + d < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d + a) output is correct: =  " + (a + d) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d + a >= 0 && a + e < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d + a) output is correct: =  " + (a + e) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d + a >= 0 && a + f < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d + a) output is correct: =  " + (a + f) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e + a >= 0 && a + b < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e + a) output is correct: =  " + (a + b) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e + a >= 0 && a + c < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e + a) output is correct: =  " + (a + c) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e + a >= 0 && a + d < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e + a) output is correct: =  " + (a + d) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e + a >= 0 && a + e < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e + a) output is correct: =  " + (a + e) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e + a >= 0 && a + f < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e + a) output is correct: =  " + (a + f) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && f + a >= 0 && a + b < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , f + a) output is correct: =  " + (a + b) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && f + a >= 0 && a + c < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , f + a) output is correct: =  " + (a + c) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && f + a >= 0 && a + d < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , f + a) output is correct: =  " + (a + d) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && f + a >= 0 && a + e < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , f + a) output is correct: =  " + (a + e) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && f + a >= 0 && a + f < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , f + a) output is correct: =  " + (a + f) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+c) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b + d >= 0 && a + b < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b + d) output is correct: =  " + (a + b) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b + d >= 0 && a + c < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b + d) output is correct: =  " + (a + c) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b + d >= 0 && a + d < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b + d) output is correct: =  " + (a + d) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b + d >= 0 && a + e < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b + d) output is correct: =  " + (a + e) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b + d >= 0 && a + f < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b + d) output is correct: =  " + (a + f) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b+c) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b + f >= 0 && a + b < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b + f) output is correct: =  " + (a + b) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b + f >= 0 && a + c < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b + f) output is correct: =  " + (a + c) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b + f >= 0 && a + d < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b + f) output is correct: =  " + (a + d) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b + f >= 0 && a + e < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b + f) output is correct: =  " + (a + e) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b + f >= 0 && a + f < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b + f) output is correct: =  " + (a + f) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c+a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c + b >= 0 && a + b < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c + b) output is correct: =  " + (a + b) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c + b >= 0 && a + c < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c + b) output is correct: =  " + (a + c) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c + b >= 0 && a + d < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c + b) output is correct: =  " + (a + d) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c + b >= 0 && a + e < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c + b) output is correct: =  " + (a + e) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c + b >= 0 && a + f < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c + b) output is correct: =  " + (a + f) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c+a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c + e >= 0 && a + b < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c + e) output is correct: =  " + (a + b) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c + e >= 0 && a + c < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c + e) output is correct: =  " + (a + c) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c + e >= 0 && a + d < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c + e) output is correct: =  " + (a + d) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c + e >= 0 && a + e < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c + e) output is correct: =  " + (a + e) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c + e >= 0 && a + f < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c + e) output is correct: =  " + (a + f) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c+a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c + d >= 0 && a + b < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c + d) output is correct: =  " + (a + b) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c + d >= 0 && a + c < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c + d) output is correct: =  " + (a + c) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c + d >= 0 && a + d < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c + d) output is correct: =  " + (a + d) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c + d >= 0 && a + e < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c + d) output is correct: =  " + (a + e) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c + d >= 0 && a + f < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c + d) output is correct: =  " + (a + f) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c + f >= 0 && a + b < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c + f) output is correct: =  " + (a + b) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c + f >= 0 && a + c < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c + f) output is correct: =  " + (a + c) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c + f >= 0 && a + d < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c + f) output is correct: =  " + (a + d) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c + f >= 0 && a + e < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c + f) output is correct: =  " + (a + e) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c + f >= 0 && a + f < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c + f) output is correct: =  " + (a + f) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+d+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d + f >= 0 && a + b < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d + f) output is correct: =  " + (a + b) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d + f >= 0 && a + c < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d + f) output is correct: =  " + (a + c) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d + f >= 0 && a + d < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d + f) output is correct: =  " + (a + d) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d + f >= 0 && a + e < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d + f) output is correct: =  " + (a + e) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d + f >= 0 && a + f < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d + f) output is correct: =  " + (a + f) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e+a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e + b >= 0 && a + b < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e + b) output is correct: =  " + (a + b) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e + b >= 0 && a + c < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e + b) output is correct: =  " + (a + c) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e + b >= 0 && a + d < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e + b) output is correct: =  " + (a + d) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e + b >= 0 && a + e < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e + b) output is correct: =  " + (a + e) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e + b >= 0 && a + f < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e + b) output is correct: =  " + (a + f) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e+a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e + d >= 0 && a + b < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e + d) output is correct: =  " + (a + b) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e + d >= 0 && a + c < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e + d) output is correct: =  " + (a + c) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e + d >= 0 && a + d < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e + d) output is correct: =  " + (a + d) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e + d >= 0 && a + e < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e + d) output is correct: =  " + (a + e) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e + d >= 0 && a + f < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e + d) output is correct: =  " + (a + f) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e + f >= 0 && a + b < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e + f) output is correct: =  " + (a + b) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e + f >= 0 && a + c < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e + f) output is correct: =  " + (a + c) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e + f >= 0 && a + d < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e + f) output is correct: =  " + (a + d) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e + f >= 0 && a + e < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e + f) output is correct: =  " + (a + e) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e + f >= 0 && a + f < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e + f) output is correct: =  " + (a + f) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-a) column-1

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b - a >= 0 && a + b < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b - a) output is correct: =  " + (a + b) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b - a >= 0 && a + c < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b - a) output is correct: =  " + (a + c) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b - a >= 0 && a + d < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b - a) output is correct: =  " + (a + d) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b - a >= 0 && a + e < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b - a) output is correct: =  " + (a + e) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b - a >= 0 && a + f < 10 && b - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b - a) output is correct: =  " + (a + f) + (b - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c - a >= 0 && a + b < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c - a) output is correct: =  " + (a + b) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c - a >= 0 && a + c < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c - a) output is correct: =  " + (a + c) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c - a >= 0 && a + d < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c - a) output is correct: =  " + (a + d) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c - a >= 0 && a + e < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c - a) output is correct: =  " + (a + e) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c - a >= 0 && a + f < 10 && c - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c - a) output is correct: =  " + (a + f) + (c - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d - a >= 0 && a + b < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d - a) output is correct: =  " + (a + b) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d - a >= 0 && a + c < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d - a) output is correct: =  " + (a + c) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d - a >= 0 && a + d < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d - a) output is correct: =  " + (a + d) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d - a >= 0 && a + e < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d - a) output is correct: =  " + (a + e) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d - a >= 0 && a + f < 10 && d - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d - a) output is correct: =  " + (a + f) + (d - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e - a >= 0 && a + b < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e - a) output is correct: =  " + (a + b) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e - a >= 0 && a + c < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e - a) output is correct: =  " + (a + c) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e - a >= 0 && a + d < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e - a) output is correct: =  " + (a + d) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e - a >= 0 && a + e < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e - a) output is correct: =  " + (a + e) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e - a >= 0 && a + f < 10 && e - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e - a) output is correct: =  " + (a + f) + (e - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && f - a >= 0 && a + b < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , f - a) output is correct: =  " + (a + b) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && f - a >= 0 && a + c < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , f - a) output is correct: =  " + (a + c) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && f - a >= 0 && a + d < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , f - a) output is correct: =  " + (a + d) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && f - a >= 0 && a + e < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , f - a) output is correct: =  " + (a + e) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && f - a >= 0 && a + f < 10 && f - a < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , f - a) output is correct: =  " + (a + f) + (f - a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  //   Section-A (+a-b) column-1

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && a - b >= 0 && a + b < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , a - b) output is correct: =  " + (a + b) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && a - b >= 0 && a + c < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , a - b) output is correct: =  " + (a + c) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && a - b >= 0 && a + d < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , a - b) output is correct: =  " + (a + d) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && a - b >= 0 && a + e < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , a - b) output is correct: =  " + (a + e) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && a - b >= 0 && a + f < 10 && a - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , a - b) output is correct: =  " + (a + f) + (a - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+a-b) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && a - c >= 0 && a + b < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , a - c) output is correct: =  " + (a + b) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && a - c >= 0 && a + c < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , a - c) output is correct: =  " + (a + c) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && a - c >= 0 && a + d < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , a - c) output is correct: =  " + (a + d) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && a - c >= 0 && a + e < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , a - c) output is correct: =  " + (a + e) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && a - c >= 0 && a + f < 10 && a - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , a - c) output is correct: =  " + (a + f) + (a - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+a-b) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && a - d >= 0 && a + b < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , a - d) output is correct: =  " + (a + b) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && a - d >= 0 && a + c < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , a - d) output is correct: =  " + (a + c) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && a - d >= 0 && a + d < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , a - d) output is correct: =  " + (a + d) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && a - d >= 0 && a + e < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , a - d) output is correct: =  " + (a + e) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && a - d >= 0 && a + f < 10 && a - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , a - d) output is correct: =  " + (a + f) + (a - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+a-b) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && a - e >= 0 && a + b < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , a - e) output is correct: =  " + (a + b) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && a - e >= 0 && a + c < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , a - e) output is correct: =  " + (a + c) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && a - e >= 0 && a + d < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , a - e) output is correct: =  " + (a + d) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && a - e >= 0 && a + e < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , a - e) output is correct: =  " + (a + e) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && a - e >= 0 && a + f < 10 && a - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , a - e) output is correct: =  " + (a + f) + (a - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+a-b) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && a - f >= 0 && a + b < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , a - f) output is correct: =  " + (a + b) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && a - f >= 0 && a + c < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , a - f) output is correct: =  " + (a + c) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && a - f >= 0 && a + d < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , a - f) output is correct: =  " + (a + d) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && a - f >= 0 && a + e < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , a - f) output is correct: =  " + (a + e) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && a - f >= 0 && a + f < 10 && a - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , a - f) output is correct: =  " + (a + f) + (a - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  //  Section-A (+b-c) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b - c >= 0 && a + b < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b - c) output is correct: =  " + (a + b) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b - c >= 0 && a + c < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b - c) output is correct: =  " + (a + c) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b - c >= 0 && a + d < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b - c) output is correct: =  " + (a + d) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b - c >= 0 && a + e < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b - c) output is correct: =  " + (a + e) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b - c >= 0 && a + f < 10 && b - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b - c) output is correct: =  " + (a + f) + (b - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-c) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b - d >= 0 && a + b < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b - d) output is correct: =  " + (a + b) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b - d >= 0 && a + c < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b - d) output is correct: =  " + (a + c) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b - d >= 0 && a + d < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b - d) output is correct: =  " + (a + d) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b - d >= 0 && a + e < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b - d) output is correct: =  " + (a + e) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b - d >= 0 && a + f < 10 && b - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b - d) output is correct: =  " + (a + f) + (b - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-c) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b - e >= 0 && a + b < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b - e) output is correct: =  " + (a + b) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b - e >= 0 && a + c < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b - e) output is correct: =  " + (a + c) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b - e >= 0 && a + d < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b - e) output is correct: =  " + (a + d) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b - e >= 0 && a + e < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b - e) output is correct: =  " + (a + e) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b - e >= 0 && a + f < 10 && b - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b - e) output is correct: =  " + (a + f) + (b - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+b-c) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && b - f >= 0 && a + b < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , b - f) output is correct: =  " + (a + b) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && b - f >= 0 && a + c < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , b - f) output is correct: =  " + (a + c) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && b - f >= 0 && a + d < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , b - f) output is correct: =  " + (a + d) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && b - f >= 0 && a + e < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , b - f) output is correct: =  " + (a + e) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && b - f >= 0 && a + f < 10 && b - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , b - f) output is correct: =  " + (a + f) + (b - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  //  Section-A (+c-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c - b >= 0 && a + b < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c - b) output is correct: =  " + (a + b) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c - b >= 0 && a + c < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c - b) output is correct: =  " + (a + c) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c - b >= 0 && a + d < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c - b) output is correct: =  " + (a + d) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c - b >= 0 && a + e < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c - b) output is correct: =  " + (a + e) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c - b >= 0 && a + f < 10 && c - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c - b) output is correct: =  " + (a + f) + (c - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c - e >= 0 && a + b < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c - e) output is correct: =  " + (a + b) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c - e >= 0 && a + c < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c - e) output is correct: =  " + (a + c) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c - e >= 0 && a + d < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c - e) output is correct: =  " + (a + d) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c - e >= 0 && a + e < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c - e) output is correct: =  " + (a + e) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c - e >= 0 && a + f < 10 && c - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c - e) output is correct: =  " + (a + f) + (c - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c - d >= 0 && a + b < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c - d) output is correct: =  " + (a + b) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c - d >= 0 && a + c < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c - d) output is correct: =  " + (a + c) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c - d >= 0 && a + d < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c - d) output is correct: =  " + (a + d) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c - d >= 0 && a + e < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c - d) output is correct: =  " + (a + e) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c - d >= 0 && a + f < 10 && c - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c - d) output is correct: =  " + (a + f) + (c - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+c-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && c - f >= 0 && a + b < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , c - f) output is correct: =  " + (a + b) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && c - f >= 0 && a + c < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , c - f) output is correct: =  " + (a + c) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && c - f >= 0 && a + d < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , c - f) output is correct: =  " + (a + d) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && c - f >= 0 && a + e < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , c - f) output is correct: =  " + (a + e) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && c - f >= 0 && a + f < 10 && c - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , c - f) output is correct: =  " + (a + f) + (c - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+d-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d - b >= 0 && a + b < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d - b) output is correct: =  " + (a + b) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d - b >= 0 && a + c < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d - b) output is correct: =  " + (a + c) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d - b >= 0 && a + d < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d - b) output is correct: =  " + (a + d) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d - b >= 0 && a + e < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d - b) output is correct: =  " + (a + e) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d - b >= 0 && a + f < 10 && d - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d - b) output is correct: =  " + (a + f) + (d - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+d-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d - c >= 0 && a + b < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d - c) output is correct: =  " + (a + b) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d - c >= 0 && a + c < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d - c) output is correct: =  " + (a + c) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d - c >= 0 && a + d < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d - c) output is correct: =  " + (a + d) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d - c >= 0 && a + e < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d - c) output is correct: =  " + (a + e) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d - c >= 0 && a + f < 10 && d - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d - c) output is correct: =  " + (a + f) + (d - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+d-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d - e >= 0 && a + b < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d - e) output is correct: =  " + (a + b) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d - e >= 0 && a + c < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d - e) output is correct: =  " + (a + c) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d - e >= 0 && a + d < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d - e) output is correct: =  " + (a + d) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d - e >= 0 && a + e < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d - e) output is correct: =  " + (a + e) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d - e >= 0 && a + f < 10 && d - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d - e) output is correct: =  " + (a + f) + (d - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+d-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && d - f >= 0 && a + b < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , d - f) output is correct: =  " + (a + b) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && d - f >= 0 && a + c < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , d - f) output is correct: =  " + (a + c) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && d - f >= 0 && a + d < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , d - f) output is correct: =  " + (a + d) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && d - f >= 0 && a + e < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , d - f) output is correct: =  " + (a + e) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && d - f >= 0 && a + f < 10 && d - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , d - f) output is correct: =  " + (a + f) + (d - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e - b >= 0 && a + b < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e - b) output is correct: =  " + (a + b) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e - b >= 0 && a + c < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e - b) output is correct: =  " + (a + c) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e - b >= 0 && a + d < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e - b) output is correct: =  " + (a + d) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e - b >= 0 && a + e < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e - b) output is correct: =  " + (a + e) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e - b >= 0 && a + f < 10 && e - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e - b) output is correct: =  " + (a + f) + (e - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e - c >= 0 && a + b < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e - c) output is correct: =  " + (a + b) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e - c >= 0 && a + c < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e - c) output is correct: =  " + (a + c) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e - c >= 0 && a + d < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e - c) output is correct: =  " + (a + d) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e - c >= 0 && a + e < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e - c) output is correct: =  " + (a + e) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e - c >= 0 && a + f < 10 && e - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e - c) output is correct: =  " + (a + f) + (e - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e - d >= 0 && a + b < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e - d) output is correct: =  " + (a + b) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e - d >= 0 && a + c < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e - d) output is correct: =  " + (a + c) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e - d >= 0 && a + d < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e - d) output is correct: =  " + (a + d) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e - d >= 0 && a + e < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e - d) output is correct: =  " + (a + e) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e - d >= 0 && a + f < 10 && e - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e - d) output is correct: =  " + (a + f) + (e - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+e-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && e - f >= 0 && a + b < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , e - f) output is correct: =  " + (a + b) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && e - f >= 0 && a + c < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , e - f) output is correct: =  " + (a + c) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && e - f >= 0 && a + d < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , e - f) output is correct: =  " + (a + d) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && e - f >= 0 && a + e < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , e - f) output is correct: =  " + (a + e) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && e - f >= 0 && a + f < 10 && e - f < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , e - f) output is correct: =  " + (a + f) + (e - f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+f-a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && f - b >= 0 && a + b < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , f - b) output is correct: =  " + (a + b) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && f - b >= 0 && a + c < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , f - b) output is correct: =  " + (a + c) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && f - b >= 0 && a + d < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , f - b) output is correct: =  " + (a + d) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && f - b >= 0 && a + e < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , f - b) output is correct: =  " + (a + e) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && f - b >= 0 && a + f < 10 && f - b < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , f - b) output is correct: =  " + (a + f) + (f - b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+f-a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && f - c >= 0 && a + b < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , f - c) output is correct: =  " + (a + b) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && f - c >= 0 && a + c < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , f - c) output is correct: =  " + (a + c) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && f - c >= 0 && a + d < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , f - c) output is correct: =  " + (a + d) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && f - c >= 0 && a + e < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , f - c) output is correct: =  " + (a + e) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && f - c >= 0 && a + f < 10 && f - c < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , f - c) output is correct: =  " + (a + f) + (f - c);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+f-a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && f - d >= 0 && a + b < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , f - d) output is correct: =  " + (a + b) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && f - d >= 0 && a + c < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , f - d) output is correct: =  " + (a + c) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && f - d >= 0 && a + d < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , f - d) output is correct: =  " + (a + d) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && f - d >= 0 && a + e < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , f - d) output is correct: =  " + (a + e) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && f - d >= 0 && a + f < 10 && f - d < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , f - d) output is correct: =  " + (a + f) + (f - d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (+f-a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + b >= 0 && f - e >= 0 && a + b < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + b , f - e) output is correct: =  " + (a + b) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + c >= 0 && f - e >= 0 && a + c < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + c , f - e) output is correct: =  " + (a + c) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + d >= 0 && f - e >= 0 && a + d < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + d , f - e) output is correct: =  " + (a + d) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + e >= 0 && f - e >= 0 && a + e < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + e , f - e) output is correct: =  " + (a + e) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a + f >= 0 && f - e >= 0 && a + f < 10 && f - e < 10) {
      outputContent.innerHTML +=
        "Formula (a + f , f - e) output is correct: =  " + (a + f) + (f - e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+a) column-1

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && b + a >= 0 && a - b < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , b + a) output is correct: =  " + (a - b) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && b + a >= 0 && a - c < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , b + a) output is correct: =  " + (a - c) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && b + a >= 0 && a - d < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , b + a) output is correct: =  " + (a - d) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && b + a >= 0 && a - e < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , b + a) output is correct: =  " + (a - e) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && b + a >= 0 && a - f < 10 && b + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , b + a) output is correct: =  " + (a - f) + (b + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c + a >= 0 && a - b < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c + a) output is correct: =  " + (a - b) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c + a >= 0 && a - c < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c + a) output is correct: =  " + (a - c) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c + a >= 0 && a - d < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c + a) output is correct: =  " + (a - d) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c + a >= 0 && a - e < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c + a) output is correct: =  " + (a - e) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c + a >= 0 && a - f < 10 && c + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c + a) output is correct: =  " + (a - f) + (c + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && d + a >= 0 && a - b < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , d + a) output is correct: =  " + (a - b) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && d + a >= 0 && a - c < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , d + a) output is correct: =  " + (a - c) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && d + a >= 0 && a - d < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , d + a) output is correct: =  " + (a - d) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && d + a >= 0 && a - e < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , d + a) output is correct: =  " + (a - e) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && d + a >= 0 && a - f < 10 && d + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , d + a) output is correct: =  " + (a - f) + (d + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e + a >= 0 && a - b < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e + a) output is correct: =  " + (a - b) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e + a >= 0 && a - c < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e + a) output is correct: =  " + (a - c) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e + a >= 0 && a - d < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e + a) output is correct: =  " + (a - d) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e + a >= 0 && a - e < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e + a) output is correct: =  " + (a - e) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e + a >= 0 && a - f < 10 && e + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e + a) output is correct: =  " + (a - f) + (e + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && f + a >= 0 && a - b < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , f + a) output is correct: =  " + (a - b) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && f + a >= 0 && a - c < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , f + a) output is correct: =  " + (a - c) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && f + a >= 0 && a - d < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , f + a) output is correct: =  " + (a - d) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && f + a >= 0 && a - e < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , f + a) output is correct: =  " + (a - e) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && f + a >= 0 && a - f < 10 && f + a < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , f + a) output is correct: =  " + (a - f) + (f + a);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+c) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && b + d >= 0 && a - b < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , b + d) output is correct: =  " + (a - b) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && b + d >= 0 && a - c < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , b + d) output is correct: =  " + (a - c) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && b + d >= 0 && a - d < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , b + d) output is correct: =  " + (a - d) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && b + d >= 0 && a - e < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , b + d) output is correct: =  " + (a - e) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && b + d >= 0 && a - f < 10 && b + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , b + d) output is correct: =  " + (a - f) + (b + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-b+c) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && b + f >= 0 && a - b < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , b + f) output is correct: =  " + (a - b) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && b + f >= 0 && a - c < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , b + f) output is correct: =  " + (a - c) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && b + f >= 0 && a - d < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , b + f) output is correct: =  " + (a - d) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && b + f >= 0 && a - e < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , b + f) output is correct: =  " + (a - e) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && b + f >= 0 && a - f < 10 && b + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , b + f) output is correct: =  " + (a - f) + (b + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-c+a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c + b >= 0 && a - b < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c + b) output is correct: =  " + (a - b) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c + b >= 0 && a - c < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c + b) output is correct: =  " + (a - c) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c + b >= 0 && a - d < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c + b) output is correct: =  " + (a - d) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c + b >= 0 && a - e < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c + b) output is correct: =  " + (a - e) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c + b >= 0 && a - f < 10 && c + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c + b) output is correct: =  " + (a - f) + (c + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-c+a) column-3

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c + e >= 0 && a - b < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c + e) output is correct: =  " + (a - b) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c + e >= 0 && a - c < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c + e) output is correct: =  " + (a - c) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c + e >= 0 && a - d < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c + e) output is correct: =  " + (a - d) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c + e >= 0 && a - e < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c + e) output is correct: =  " + (a - e) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c + e >= 0 && a - f < 10 && c + e < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c + e) output is correct: =  " + (a - f) + (c + e);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-c+a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c + d >= 0 && a - b < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c + d) output is correct: =  " + (a - b) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c + d >= 0 && a - c < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c + d) output is correct: =  " + (a - c) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c + d >= 0 && a - d < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c + d) output is correct: =  " + (a - d) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c + d >= 0 && a - e < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c + d) output is correct: =  " + (a - e) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c + d >= 0 && a - f < 10 && c + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c + d) output is correct: =  " + (a - f) + (c + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-c+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && c + f >= 0 && a - b < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , c + f) output is correct: =  " + (a - b) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && c + f >= 0 && a - c < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , c + f) output is correct: =  " + (a - c) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && c + f >= 0 && a - d < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , c + f) output is correct: =  " + (a - d) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && c + f >= 0 && a - e < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , c + f) output is correct: =  " + (a - e) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && c + f >= 0 && a - f < 10 && c + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , c + f) output is correct: =  " + (a - f) + (c + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-d+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && d + f >= 0 && a - b < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , d + f) output is correct: =  " + (a - b) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && d + f >= 0 && a - c < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , d + f) output is correct: =  " + (a - c) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && d + f >= 0 && a - d < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , d + f) output is correct: =  " + (a - d) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && d + f >= 0 && a - e < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , d + f) output is correct: =  " + (a - e) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && d + f >= 0 && a - f < 10 && d + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , d + f) output is correct: =  " + (a - f) + (d + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-e+a) column-2

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e + b >= 0 && a - b < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e + b) output is correct: =  " + (a - b) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e + b >= 0 && a - c < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e + b) output is correct: =  " + (a - c) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e + b >= 0 && a - d < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e + b) output is correct: =  " + (a - d) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e + b >= 0 && a - e < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e + b) output is correct: =  " + (a - e) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e + b >= 0 && a - f < 10 && e + b < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e + b) output is correct: =  " + (a - f) + (e + b);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-e+a) column-4

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e + d >= 0 && a - b < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e + d) output is correct: =  " + (a - b) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e + d >= 0 && a - c < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e + d) output is correct: =  " + (a - c) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e + d >= 0 && a - d < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e + d) output is correct: =  " + (a - d) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e + d >= 0 && a - e < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e + d) output is correct: =  " + (a - e) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e + d >= 0 && a - f < 10 && e + d < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e + d) output is correct: =  " + (a - f) + (e + d);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  // Section-A (-e+a) column-5

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - b >= 0 && e + f >= 0 && a - b < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - b , e + f) output is correct: =  " + (a - b) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - c >= 0 && e + f >= 0 && a - c < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - c , e + f) output is correct: =  " + (a - c) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - d >= 0 && e + f >= 0 && a - d < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - d , e + f) output is correct: =  " + (a - d) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - e >= 0 && e + f >= 0 && a - e < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - e , e + f) output is correct: =  " + (a - e) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";

  if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
    if (a - f >= 0 && e + f >= 0 && a - f < 10 && e + f < 10) {
      outputContent.innerHTML +=
        "Formula (a - f , e + f) output is correct: =  " + (a - f) + (e + f);
    }
  }
  outputContent.innerHTML += "<br>";
  outputContent.innerHTML += "<br>";


  //   This is the end of funtion.
}
