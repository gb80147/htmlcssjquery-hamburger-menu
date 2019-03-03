/*Crea un hamburger menu*/


/*METODO CON EVENTI INSERITI SINGOLARMENTE ALL'ELEMENTO

Modello: $(".selector").action( function() {code} );
*/

$(".btn-menu").mouseenter( function() {               //inseriamo l'evento ".mouseenter"(quando il mouse va sul menu button)

  $("#containerMenu").show()                         //mostra l'ID "#containerMenu" che nel CSS è display none
});
$(".btn-menu").mouseleave( function() {              //altro evento(.mouseleave) che ha luogo sullo stesso elemento di prima (menu button)

  $("#containerMenu").hide()                         //nasconde l'ID "#containerMenu"
});

/*inserisco l'evento .hover anche per l'ID "#containerMenu" in modo che,
una volta che sposto il mouse dal menu button al menu a tendina,
quest'ultimo rimane sempre visibile*/
$("#containerMenu").mouseenter( function() {

  $(this).show()                                     //quando vogliamo scatenare l'azione sul medesimo elemento selezionato, possimao usare anche "$(this)"
});
$("#containerMenu").mouseleave( function() {

  $(this).hide()
});


/*METODO CON L'EVENTO ".HOVER"

Modello: $(.selector).event( function() {code} );
*/

// $(".btn-menu").hover(                                 //seleziono il button menu con la sua classe e inserico l'evento
//   function() {
//
//   $("#containerMenu").toggle();                       //quando si verifica l'evento parte l'azione ".toggle" (unisce show e hide)
// });
//
// /*inserisco l'evento .hover anche per l'ID "#containerMenu" in modo che,
// una volta che sposto il mouse dal menu button al menu a tendina,
// quest'ultimo rimane sempre visibile*/
// $("#containerMenu").hover(                            //seleziono il "#containerMenu" e inserico l'evento
//   function() {
//
//   $(this).toggle();                                   //quando si verifica l'evento parte l'azione ".toggle" (unisce show e hide)
// });
