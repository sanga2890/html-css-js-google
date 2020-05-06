// cliccando sull'icona dell' app drawer dovrà apparire il dropdown menu;
// ricliccando nuovamente sempre sulla stessa icona il dropdown menu dovra prendere il display none e tornare ad essere nascosto;
// e così via;
    $('#header-right>ul>li>a>i').click(function(){
    $('.dropdown').toggleClass('visible');
})

// il dropdown menu dovrà sconparire anche quando clicco su un punto esterno e non necessariamente sull'icona dell'app drawer;
// intercetto il click su tutto il documento, quindi su tutta la pagina ma escludendo l'icona app drawer ed il drawer stesso, altrimenti il risultato sarebbe un conflitto con la funzione precedente;
// quindi creo una condizione in cui se il target, ovvero il punto dove ho cliccato, non è né l'icona né il contenitore del dropdown stesso, allora tolgo la classe visible dal dropdown;
// altrimenti non faccio nulla;
$(document).click(function(event){
    var target = $(event.target);
    if (!target.hasClass('fa-th') && !target.hasClass('dropdown') && !target.hasClass('dropdown-container')) {
        $('.dropdown').removeClass('visible')
    }
})
