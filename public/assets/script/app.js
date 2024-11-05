var urlImage = 'https://i.ibb.co';
var localHost = 'http://localhost:3000';

fetch(`${localHost}/filmes`)
    .then(res => res.json())
    .then(data => {
        if (Array.isArray(data)) {  // Verifique se `data` é uma lista
            let card = '';
            for (let i = 0; i < data.length; i++) {
                let filme = data[i];
                card += `<div class="card">
                    <div class="image-box">
                        <img src="${urlImage}/${filme.imgcod}">
                    </div>
                    <div class="card-content">
                        <h1 class="card-heading ${filme.genero}">${filme.nome}</h1>
                        <h4 class = "${filme.genero}">${filme.genero}</h4>
                        <p class="card-text ano">${filme.ano}</p>
                        <p class="card-text">${filme.descricao}</p>
                    </div>
                </div>`;
            }
            console.log("HTML dos cards gerado:", card);
            document.getElementById('cards-container').innerHTML = card;
        } else {
            console.error("Os dados recebidos não têm o formato esperado.");
        }
    })


            // `<div class="card col-md-4" style="width: 18rem;">
            //             <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="...">
            //             <div class="card-body">
            //                 <h5 class="card-title">${filme.title}</h5>
            //                 <p class="card-text">${filme.overview}</p>
            //                 <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank" class="btn btn-primary">Mais detalhes</a>
            //             </div>
            //             </div>`

