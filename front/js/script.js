window.onload = function (){

// AFFICHER CONTACTS/MESSAGES MOBILE
$('.lienMessages').click(function(){
    $('.contactMob').hide();
    $('.messagerieMob').show();
})

$('.lienContacts').click(function(){
        $('.contactMob').show();
        $('.messagerieMob').hide();
})

//COULEUR LIENS MOBILE
$(function(){
    $('.liens > .nav-item').on('click', function(){
        $('.liens > .nav-item').removeClass('lien');
        $(this).addClass('lien');
    })
})

//CONTACTS CLIQUE
$(function() {
    $( '.list-group > .media' ).on( 'click', function() {
          $('.list-group > .media').removeClass('activeProfil');
          $(this).addClass('activeProfil');
    });
});



//FOOTER MOBILE
$('.bas').click(function(){
    $('.cache').toggle();
})

} //FERMETURE WINDOW ONLOAD

