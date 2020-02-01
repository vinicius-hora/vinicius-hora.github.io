var palindrome = prompt('digite a palavra');
var x = 0;
 var cont = 0;
for ( var i = palindrome.length - 1; i >= 0 ; i--  ) {

  if (palindrome[i] != palindrome[x]) {
    cont++;
  }
  x++;
}
(cont >0 ? window.alert("nao é palindrome") : window.alert("é palindromo"));


var fatorial = prompt('o número');
var x = 1;
var resultado;
for (var i = fatorial; i > 0; i--) {
  x =  x*i;
}
alert("fatorial: " + x);
