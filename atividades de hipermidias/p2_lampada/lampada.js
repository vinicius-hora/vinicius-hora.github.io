function lampada(){
  on = document.getElementById('insertLampada');
  if (on.src.match("lampada_on.gif")) {
		on.src = "lampada_off.gif";
	} else {
		on.src = "lampada_on.gif";
	}
  on.addEventListener("click", adicionarItem);
}
