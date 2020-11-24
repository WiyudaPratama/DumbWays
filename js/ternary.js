var pertanyaan = prompt("Apakah benar kamu tinggal di medan? : ")
var jawaban = (pertanyaan.toUpperCase() == "IYA") ? "Benar" : "Salah";

document.write(`Jawabannya adalah ${jawaban}`)