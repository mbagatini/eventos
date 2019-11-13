function popularEventos() {
    $.ajax({
        url: 'http://localhost/api_eventos/api/inscricao/read_user.php?usuario=4',
        type: 'GET',
        dataType: 'JSON',
        contentType: "application/json; charset=utf-8",
        error: function () {
            alert("Não foi possível carregar os eventos");
        },
        success: function (data) {
            $(data).each(function (index) {

                var situacao = "";
                switch (data[index].status) {
                    case 'C':
                        situacao = '<span class="status--denied">Cancelado</span>';
                        break;
                    case 'P':
                        situacao = '<span class="status--process">Inscrito</span>';
                        break;
                    case 'E':
                        situacao = 'Encerrado';
                        break;
                }

                $('tbody#eventos').append(
                    '<tr class="spacer"></tr>' +
                    '<tr><td>'
                    + data[index].evento
                    +'</td><td class="desc">'
                    + data[index].nome_evento
                    + '</td><td>'
                    + data[index].data_inscricao
                    + '</td><td>R$ '
                    + data[index].valor
                    + '</td><td>'
                    + situacao
                    + '</td>' +
                    '<td>' +
                    '    <div class="table-data-feature">' +
                    '        <button class="item" data-toggle="tooltip" data-placement="top"' +
                    '                title="Gerar certificado">' +
                    '            <i class="zmdi zmdi-file"></i>' +
                    '        </button>' +
                    '        <button class="item" data-toggle="tooltip" data-placement="top"' +
                    '                title="Cancelar inscrição">' +
                    '            <i class="zmdi zmdi-calendar-remove"></i>' +
                    '        </button>' +
                    '    </div>' +
                    '</td></tr>')
            });
        }

    });
}