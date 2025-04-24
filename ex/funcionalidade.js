function lerIdade(){
    var idade = parseInt(document.getElementById("entrada").value);
    votacao(idade);
}

function votacao(idade){
    var resposta = document.getElementById("resposta");
    resposta.innerHTML = `<div class="tile"> idade informada: ${idade} </div>`;
    if (idade <18){
        resposta.innerHTML += 'A pessoa não pode votar!';
        resposta.innerHTML += '<img src="https://media.istockphoto.com/id/147428462/pt/vetorial/n%C3%A3o-permitido-de-%C3%ADcones.jpg?s=1024x1024&w=is&k=20&c=KTTzHGm0WN-nlldYB6VcIYdMun1TyzzcJBIWiE-FNg4=">'
    }
    else {
        resposta.innerHTML += 'A pessoa pode votar!';
        resposta.innerHTML += '<img src="https://png.pngtree.com/png-clipart/20210116/ourmid/pngtree-d-emoji-social-media-icon-giving-ok-and-yes-answers-while-png-image_2756635.jpg">'
    }


}