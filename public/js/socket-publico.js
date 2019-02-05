var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblescritorio1 = $('#lblEscritorio1');
var lblescritorio2 = $('#lblEscritorio2');
var lblescritorio3 = $('#lblEscritorio3');
var lblescritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorios = [lblescritorio1, lblescritorio2, lblescritorio3, lblescritorio4];

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

// escuchar
socket.on('disconnect', function() {

    alert('Perdimos conexión con el servidor');

});

socket.on('estadoActual', function(data) {

    console.log(data);
    actualizaHTML(data.ultimos4);

});

function actualizaHTML(ultimos4) {

    for (var i = 0; i <= ultimos4.length - 1; i++) {
        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
    }

}