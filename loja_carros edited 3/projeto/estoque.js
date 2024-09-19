function listaCarros(marca){
    var todasMarcas = document.querySelectorAll('.carros')
    todasMarcas.forEach(function(elemento){
        elemento.classList.add('carros'); 
    });

    var carrosSelecionados = document.getElementById(marca +'carros'); 
   if (carrosSelecionados)
   {
    carrosSelecionados.classList.remove('carros'); 
   }
}

document.querySelectorAll('.sidebar_menu ul li input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        var nomeMarca = this.id;
        mostrarCarros(nomeMarca);
    });
});
