

async function loadpk(){
    alert("Hecho por Daniel Olivares\nC.I 27.511.125\nJavascript N-1113P");
    for (let index = 0; index < 890; index++) {
       
       await GetPokemon(index+1);
    }
}
function GetPokemon(id){

    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    .then((Response)=>{
        Response.json()
        .then((pokemon=>{
            var reshtml="";
            reshtml+='<tr><td>'+pokemon.id+'</td>';
            reshtml+='<td><img src="'+pokemon.sprites.versions["generation-vii"].icons.front_default+'" class="pokeico">'+pokemon.name+'</td>';
            reshtml+='<td style="text-align: center;">'
            pokemon.types.forEach(element => {
                    reshtml+='<span class="'+element.type.name+'" style="font-size:15px;">'+element.type.name+'</span> ';
            });
            reshtml+='</td>'
            reshtml+='<td><a href="/viewall.html?id='+pokemon.id+'" class="btn btn-primary">Ver mas</a></td>';
            reshtml+='</tr>';
            document.getElementById("tbody").innerHTML+=reshtml;
        }))
    })
    .catch((error)=>{
        console.log(error);
    });

}