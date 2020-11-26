var repeat = confirm("Ulangin dengan klik ok");
var counter = 0;

while (repeat) {
  counter++;
  repeat = confirm("Ulangi dengan klik ok");
}

document.write("Anda sudah mengkonfirmasi sebanya" + counter + " kali");