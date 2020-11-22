var number = 12.498;

// toString
document.getElementById('name').innerHTML = typeof number.toString();

// toFixed => membulatkan keatas
document.getElementById('name').innerHTML = number.toFixed();

// toFixed dengan parameter => mengambil berapa angka dibelakang "," dan membulatkan keatas
document.getElementById('name').innerHTML = number.toFixed(2);

// GLOBAL method
var strNumber = "12.991";
document.getElementById('name').innerHTML = typeof Number(strNumber);

document.getElementById('name').innerHTML = parseInt(strNumber);