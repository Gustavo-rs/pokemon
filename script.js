var formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e){
    // refresh bloqueado
    e.preventDefault();

    let urlForm = 'https://pokeapi.co/api/v2/pokemon/';

    let nome = document.getElementById('name');

    urlForm = urlForm + nome.value;

    urlForm = urlForm.toLocaleLowerCase();

    let resposta = document.getElementById('content');

    let imagem = document.getElementById('imgPokemon');

    let html = '';

    fetch(urlForm).then(response => response.json()).then(function(data){
        console.log(data);
        html = "Nome: " + uppCase(data.name) + "<br>";
        html = html + 'Type: ' + uppCase(data.types[0].type.name);
        resposta.innerHTML = html;

        imagem.innerHTML = "<img src='" + data.sprites.front_default +"'><img src='"+ data.sprites.back_default +"'>";

        console.log(html);
        
    }).catch(function(err) {
        resposta.innerHTML = 'Pokémon não encontrado';
    })

    
});

function uppCase(value){
    return value[0].toUpperCase() + value.substr(1);
}