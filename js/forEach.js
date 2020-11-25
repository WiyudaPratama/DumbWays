var cars = ["BMW", "Lamborgini", "Alfard"];

// in
// for(i in cars) {
//   document.write(i+ "  " +cars[i] + " " );
// }

// forEach
cars.forEach(function (car) {
  document.write("<p>" + car + "</p>")
})