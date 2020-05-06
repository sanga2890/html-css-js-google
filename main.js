// cliccando sull'icona dell' app drawer dovrà apparire il dropdown menu;
// ricliccando nuovamente sempre sulla stessa icona il dropdown menu dovra prendere il display none e tornare ad essere nascosto;
// e così via;
    $('#header-right>ul>li>a>i').click(function(){
    $('.dropdown').toggleClass('visible');
})

// il dropdown menu dovrà sconparire anche quando clicco su un punto esterno e non necessariamente sull'icona dell'app drawer;
$(document).click(function(event){
    var target = $(event.target);
    if (!target.hasClass('fa-th') && !target.hasClass('dropdown') && !target.hasClass('dropdown-container')) {
        $('.dropdown').removeClass('visible')


    }



})
