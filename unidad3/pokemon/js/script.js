window.onload = () => {
    var arreglo = [];
    var cont = 0;
    
    var url = 'https://pokeapi.co/api/v2/';
    fetch(url + 'pokemon?limit=151').then(response => response.json())
        .then(data => {
            console.log(data);
            let lista = document.querySelector('#lista');
            data.results.forEach(element => {
                fetch(element.url).then(res=>res.json()).then(dataPokemon=>{

                    lista.innerHTML = lista.innerHTML + `<div class="col-3 p-5">
                                                    <div class="card" style="width: 18rem;">
                                                    <img src="${dataPokemon.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${element.name}</h5>
                                                        <p class="card-text"></p>
                                                        <a data-id="${cont}" href="#" class="btnVrt btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Elegir</a>
                                                        </div>
                                                    </div>
                                                </div>`
                                                
                                                let a = document.querySelectorAll(".btnVrt");
                                                a.forEach(e=>e.addEventListener('click',mostrar))
                                                arreglo.push(dataPokemon);
                                                cont++;
                })
            });           
        })
        let mostrar =(evt)=>{
            let index = evt.target.dataset.id;

            let name = document.querySelector("#exampleModalLabel");
            let tipo = document.querySelector("#tipo");
            let habilidades = document.querySelector("#habilidades");

            name.innerHTML = arreglo[index].name;
            tipo.innerHTML = arreglo[index].types[0].type.name;

            var h = "Habilidades: ";
            arreglo[index].abilities.forEach(el=>h+=el.ability.name+", ");
            habilidades.innerHTML = h;
        }
}