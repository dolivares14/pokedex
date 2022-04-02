function loaddata(){
    const url = new URLSearchParams(window.location.search)
    const id = url.get("id");
    
    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    .then((Response)=>{
        Response.json()
        .then((pokemon)=>{
            var inner='<img class="artwork" src="'+pokemon.sprites.other["official-artwork"].front_default+'"></img>';
            document.getElementById("art").innerHTML=inner;


            inner='<li>Nombre: '+pokemon.name+'</li>';
            inner+='<li>Número: '+pokemon.id+'</li>';
            inner+='<li>Peso: '+pokemon.weight+'</li>';
            inner+='<li>Altura: '+pokemon.height+'</li>';
            inner+='<li>Experiencia base: '+pokemon.base_experience+'</li>';
            document.getElementById("infogeneral").innerHTML=inner;
            
            
            inner=""
            for (const key in pokemon.types) {
                inner+='<h6 class="'+pokemon.types[key].type.name+' type">'+pokemon.types[key].type.name+'</h6>'
            }
            document.getElementById("types").innerHTML=inner;

            inner=""
            pokemon.stats.forEach(stat => {
                inner+='<li>'+stat.stat.name+' - '+stat.base_stat+'/100</li>'
            });
            document.getElementById("stats").innerHTML=inner;



            inner='<img class="battlesprite" src="'+pokemon.sprites.front_default+'">'
            document.getElementById("frontmd").innerHTML=inner;

            inner='<img class="battlesprite" src="'+pokemon.sprites.front_shiny+'">'
            document.getElementById("frontms").innerHTML=inner;

            inner='<img class="battlesprite" src="'+pokemon.sprites.back_default+'">'
            document.getElementById("backmd").innerHTML=inner;

            inner='<img class="battlesprite" src="'+pokemon.sprites.back_shiny+'">'
            document.getElementById("backms").innerHTML=inner;

            if(pokemon.sprites.front_female!=null)
                inner='<img class="battlesprite" src="'+pokemon.sprites.front_female+'">'
            else
                inner='<img class="battlesprite" src="'+pokemon.sprites.front_default+'">'
            document.getElementById("frontfd").innerHTML=inner;

            if(pokemon.sprites.front_shiny_female!=null)
                inner='<img class="battlesprite" src="'+pokemon.sprites.front_shiny_female+'">'
            else
                inner='<img class="battlesprite" src="'+pokemon.sprites.front_shiny+'">'
            document.getElementById("frontfs").innerHTML=inner;

            if(pokemon.sprites.back_female!=null)
                inner='<img class="battlesprite" src="'+pokemon.sprites.back_female+'">'
            else
                inner='<img class="battlesprite" src="'+pokemon.sprites.back_default+'">'
            document.getElementById("backfd").innerHTML=inner;

            if(pokemon.sprites.back_shiny_female!=null)
                inner='<img class="battlesprite" src="'+pokemon.sprites.back_shiny_female+'">'
            else
                inner='<img class="battlesprite" src="'+pokemon.sprites.back_shiny+'">'
            document.getElementById("backfs").innerHTML=inner;
        })
    }).catch((error)=>{
        console.log(error);
    })

    fetch("https://pokeapi.co/api/v2/pokemon-species/"+id)
    .then((Response)=>{
        Response.json()
        .then((pokemon)=>{
            i=0;
             var desc=""
             while(desc==""||i>=pokemon.flavor_text_entries.length){
                if(pokemon.flavor_text_entries[i].language.name=="es"){
                    desc=pokemon.flavor_text_entries[i].flavor_text;
                }
                else i++;
             }
             document.getElementById("description").innerHTML=desc;
        })
    }).catch((error)=>{
        console.log(error);
    })
}