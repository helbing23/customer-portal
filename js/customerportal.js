// Title: Custom Customer Portal CSS
// Company Name: Symbio Energy
// Author: Malav Vasita

// ======================
// Date: 21st Nov 2019
// ====================== 

$( document ).ready( function(){
    $( '.list-group-item-action' ).click( 'on', function(){
        $( '.list-group-item-action' ).removeClass( 'active-nav' );
        $( this ).addClass( 'active-nav' );
    } );
} );