document.getElementById("sidebar_toggler").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("show");
  });




  document.getElementById("search_btn").addEventListener("click", function () {
    document.getElementById("search_box").classList.add("show");
  });
  
  document.getElementById("search_close").addEventListener("click", function () {
    document.getElementById("search_box").classList.remove("show");
  });








  
  





  for (var i=0; i<=100; i++) {
    if (i === 0) {
           document.write(i +  " is even");
    }
    else if (i % 2 === 0) {
      document.write(i + " is even");   
    }
    else {
      document.write(i + " is odd");
    }
  }
  





  document.getElementById("colorFlipper").addEventListener("click", function () {
    let hexCode = "#";

    hexCode += (Math.random()*100).toString(16).substring(3, 9);

    document.body.style.background = hexCode;
});

setInterval(function () {
  let hexCode = '#';

  hexCode += (Math.random()*100).toString(16).substring(3,9);

  document.body.style.background = hexCode;
  
},500)








let marks = 50;

switch (true) {
  case marks >= 80 && marks <= 100:
    grade = "A+"; document.write('A+')
    break;
  case marks >= 70 && marks <= 79:
    grade = "A"; document.write('A')
    break;
  case marks >= 60 && marks <= 69:
    grade = "A-";  document.write('A-')
    break;
  case marks >= 50 && marks <= 59:
    grade = "B";  document.write('B')
    break;
  case marks >= 40 && marks <= 49:
    grade = "C";  document.write('C')
    break;
  case marks >= 33 && marks <= 39:
    grade = "D";  document.write('D')
    break;


  default:
    grade = "F";  document.write('f')
}
