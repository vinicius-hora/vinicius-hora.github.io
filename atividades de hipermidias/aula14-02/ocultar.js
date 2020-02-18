
enla1 = document.getElementById('enlace_1');
enla2 = document.getElementById('enlace_2');
enla3 = document.getElementById('enlace_3');

function conteudo(enla){
  if (enla.target.textContent == 'Ocultar Conteúdo'){
    content = document.getElementById('conteudo_' + enla.target.id.substring(7));
    content.style.display = 'none';
    enla.target.textContent = 'Mostrar Conteúdo';
  }
  else{
    content = document.getElementById('conteudo_' + enla.target.id.substring(7));
    content.style.display = 'block';
    enla.target.textContent = 'Ocultar Conteúdo';
  }
}

enla1.addEventListener('click',conteudo,false);
enla2.addEventListener('click',conteudo,false);
enla3.addEventListener('click',conteudo,false);
