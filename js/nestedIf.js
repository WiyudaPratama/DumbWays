var username = prompt("username : ")
var password = prompt("password :")

if(username == "wiyuda") {
  if(password == "123") {
    document.write("<h2>Anda berhasil login</h2>")
  } else {
    document.write("Password anda tidak sesuai")
  }
} else {
  document.write("Siapa anda?")
}