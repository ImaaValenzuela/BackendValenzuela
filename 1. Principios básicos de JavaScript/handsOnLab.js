let miLista = [];

function mostrarLista(){
    if (miLista.length > 0){
        miLista.forEach(num => console.log(num))
    }
    else{console.log("Lista vacía");}
}

mostrarLista();

console.log( "--------Agrego elemenos a la lista----------");

miLista.push(1,2,3);
mostrarLista();
