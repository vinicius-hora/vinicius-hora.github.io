
function calcular(e){
  mostrar = document.getElementById('calc-saida');
  if(e.path[0].value == '='){
        mostrar.textContent = eval(mostrar.textContent);
    } else if (e.path[0].value == 'c'){
        mostrar.textContent = '0';
    } else {
        if (mostrar.textContent == '0'){
            mostrar.textContent = '';
        }
        mostrar.textContent += e.path[0].value;
    }
}

bts = document.getElementsByTagName('input')
for(i=0; i<bts.length; i++){
   bts[i].addEventListener('click', calcular, false);
}
