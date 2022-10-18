function validEmail(email){
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
}

var btn = document.getElementById("btn");
btn.addEventListener('click', function(e) {
    e.preventDefault()
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;

    if(!name || name.lenght < 5){
        alert('Você esqueceu de preencher seu nome.')
        return null;
     }
 
     if(!validEmail(email)){
         alert('Email invalido')
         return null;
      }
 
      if(!telefone){
         alert('Você esqueceu de preencher seu telefone.')
         return null;
      }
 
      if(!mensagem){
         alert('Você esqueceu de preencher a mensagem.')
         return null;
      }

    var body = `nome: ${name} </br> E-mail: ${email} <br/> Telefone: ${telefone} <br/> Menssagem: ${mensagem}`;



        Email.send({
            Host : "smtp.elasticemail.com",
        Username : "contato@energisol-to.com.br",
        Password : "7279F8C33B38B79EA665D492F1A497828629",
        To : 'contato@energisol-to.com.br',
        From : email,
        Subject : "Entre em contato",
        Body : body,
    }).then(
        message => alert(message)
        );
    });
