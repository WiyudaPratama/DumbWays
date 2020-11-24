var undian = prompt("Anda memenangkan undian vaganza, silahkan pilih hadiah anda 1 - 3: ")
var hadiah = ""

switch(undian) {
  case "1":
    hadiah = "Laptop ROG";
    break;
  case "2":
    hadiah = "MacbookAir";
    break;
  case "3":
    hadiah = "ROG Phone3";
    break;
  default:
    document.write("<h4>Jangan asal pilih</h4>")
}

if(hadiah === "") {
  document.write("Maaf anda gagal menang undian")
} else {
  document.write("Selamat anda mendapatkan " + hadiah + ", silahkan konfirmasi ke admin")
}