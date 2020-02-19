
function verificaNomeNumero(){
  var letra = "^[ a-zA-Z ]*$";
  var numero = "^[0-9]*$";
  nome = document.getElementById('insertNome').value
  if (nome == ""){
    alert("digite o nome");
  }
  if (nome.match(letra) == null){
    alert("Nome deve conter apenas letras");
  }
  telefone = document.getElementById('insertNumero').value
  if(telefone == ""){
    alert("digite o telefone");
  }
 if(telefone.match(numero) == null){
    alert("telefone deve conter apenas numeros");
  }
  valores();

}

function valores(){
  dataChegada = new Date(document.getElementById('insertChegada').value)
  dataSaida = new Date(document.getElementById('insertSaida').value)
  var  chegada = dataChegada.getTime();
  var saida = dataSaida.getTime();
  chegada = chegada / (1000 * 3600 * 24);
  saida = saida / (1000 * 3600 * 24);
  var data = 0;
  data = saida - chegada;

  quarto =  document.getElementById('insertQuarto').value
  var valor = 0;
  if(quarto == 1){
    valor = 139;
  }
  if(quarto == 2){
    valor = 220;
  }
  if(quarto == 3){
    valor = 340;
  }

  numCrianca = document.getElementById('isertCrianca').value
  var totalDia = 0;
  var totalGeral = 0;
  if(quarto == 1 && numCrianca > 3){
    alert("maximo de 4 hospedes ");

  }
  if(quarto == 2 && numCrianca > 2){
    alert("maximo de 4 hospedes ");

  }
  if(quarto == 3 && numCrianca > 1){
    alert("maximo de 4 hospedes ");

  }
  else{
    numCrianca = numCrianca * 30;
    totalDia = valor + numCrianca;
    totalGeral = totalDia * data;
    alert("Quantidade de dias:" + data);
    alert("Valor tota: " + totalGeral);

  }

}
