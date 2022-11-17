function fetchPokemon(){
    console.log("fetching...");

    // var response = fetch("https://pokeapi.co/api/v2/pokemon/shuckle");
    // console.log(response);

    var name = document.querySelector("#pokeInput").value;

    fetch("https://pokeapi.co/api/v2/pokemon/"+name)
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(res => {
            console.log("we have our response");
            console.log(res.sprites.front_default);
            var pokeImg = document.querySelector("#pokeImg");
            pokeImg.src = res.sprites.front_default;
        })
        .catch(err => {
            alert("Try that again, it didn't work the first time");
            console.log(err);
        })

}