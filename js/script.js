const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropdownBtn = dropdown.parentNode; // Obtém o elemento pai (link)
  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o link de navegar para outra página
    dropdown.classList.toggle('show');
  });
});

function irParaOutraPagina() {
  window.location.href = 'index.html';
}

function irParaOutraPaginaAb() {
  window.location.href = 'aboutUs.html';
}

function enviarContato(){
  alert("A Katarzis Corp. agradece o seu contato!")
}

function irParaOutraPaginaNOT() {
  window.location.href = 'index.html#noticias';
}
function irParaOutraPaginaOBJ() {
  window.location.href = 'index.html#objetivos';
}
function irParaOutraPaginaMission() {
  window.location.href = 'aboutUs.html#mission';
}

function validar() {
  var name = document.contato.name.value;
  var email = document.contato.email.value;
  var message = document.contato.message.value;

  if(name == " " || email == " " || message == " "){
    alert("Todos os campos devem estar preenchidos");
  }else{
    alert("A Katarzis Corp. agradece o seu contato");
  }
}