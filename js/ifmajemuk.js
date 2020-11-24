// if majemuk
var nilai = prompt("Inputkan nilai anda: ")
var grade = "";

if(nilai >= 90) {
  grade = "A"
} else if(nilai >= 80) {
  grade = "B"
} else if(nilai >= 70) {
  grade = "C"
} else if(nilai >= 60) {
  grade = "D"
} else {
  grade = "E"
}

document.write(`Grade anda adalah : ${grade}`)