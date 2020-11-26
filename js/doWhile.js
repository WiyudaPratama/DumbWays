var repeat = confirm("Ulangin dengan klik ok");
var counter = 0;

do {
  counter++;
  repeat = confirm("Ulangi dengan kli ok")
} while (repeat)

document.write("Anda sudah mengkonfirmasi sebanya" + counter + " kali");