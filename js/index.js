// length => menghitung jumlah karakter
var text = "qwerty";
document.getElementById('name').innerHTML = text.length;

// indexOf => Melihat kalimat di mulai dari index keberapa berdasarkan parameter
var text = "My addres Medan";
document.getElementById('name').innerHTML = text.indexOf('Medan');

// substr => karakter apa saja yang terdapat dari parameter dimulai dari index ke ? sampai panjang length
var text = "My status Mahasiswa";
document.getElementById('name').innerHTML = text.substr(3, 10);

// replace => menimpah kalimat tertentu menjadi yg lain
var text = "My addres Medan";
document.getElementById('name').innerHTML = text.replace("Medan", "Siantar");

// toUpperCase => menjadikan semua karakter menjadi huruf bersar
var text = "My addres Medan";
document.getElementById('name').innerHTML = text.toUpperCase();

// toLowerCase => menjadikan semua karakter menjadi huruf kecil
var text = "My addres Medan";
document.getElementById('name').innerHTML = text.toLowerCase();

// charAt => karakter apa yang sesuai dengan parameter yg ada
var text = "My addres Medan";
document.getElementById('name').innerHTML = text.charAt(10);

// split => memisah dan menjadikan array berdasarkan karakter tertentu
var text = "a,b,c,d";
var split = text.split(',');
document.getElementById('name').innerHTML = split[2];

// call string like array 
var text = "a,b,c,d";
document.getElementById('name').innerHTML = text[2];