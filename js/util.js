function popularInscricoes() {
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

                $('tbody#inscricoes').append(
                    '<tr class="spacer"></tr>' +
                    '<tr><td>'
                    + data[index].evento
                    + '</td><td class="desc">'
                    + data[index].nome_evento
                    + '</td><td>'
                    + data[index].data_inscricao
                    + '</td><td>'
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
                    '                id="cancelar" title="Cancelar inscrição" onclick="cancelarInscricao()">' +
                    '            <i class="zmdi zmdi-calendar-remove"></i>' +
                    '        </button>' +
                    '    </div>' +
                    '</td></tr>')
            });
        }

    });
}

function popularEventos() {
    $.ajax({
        url: 'http://localhost/api_eventos/api/evento/read.php',
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
                    case 'F':
                        situacao = '<span class="status--denied">Finalizado</span>';
                        break;
                    case 'C':
                        situacao = '<span class="status--denied">Cancelado</span>';
                        break;
                    case 'A':
                        situacao = '<span class="status--process">Disponível</span>';
                        break;
                    case 'E':
                        situacao = 'Ocorrendo';
                        break;
                }

                $('tbody#eventos').append(
                    '<tr class="spacer"></tr>' +
                    '<tr><td>'
                    + data[index].id
                    + '</td><td class="desc">'
                    + data[index].nome
                    + '</td><td>'
                    + data[index].data
                    + '</td><td>'
                    + data[index].valor_inscricao
                    + '</td><td>'
                    + situacao
                    + '</td>' +
                    '<td>' +
                    '    <div class="table-data-feature">' +
                    '        <button class="item" data-placement="top" data-toggle="modal" data-target="#staticModal" ' +
                    '                id="detalhes" onclick="detalhesIncricao()"' +
                    '                title="Inscrever-se">' +
                    '            <i class="zmdi zmdi-check"></i>' +
                    '        </button>' +
                    '    </div>' +
                    '</td></tr>')
            });
        }

    });
}

function detalhesIncricao() {

    $('#eventos').on('click', '#detalhes', function () {
        var linha = $(this).closest('tr');

        $('.modal-body').html(
            '<p>Por favor, confira os dados do evento e confirme a inscrição.</p>' +
            '<br>' +
            '<div class="row form-group">' +
            '   <div class="col col-md-3">' +
            '       <label class="form-control-label">Código</label>' +
            '   </div>' +
            '   <div class="col-12 col-md-9">' +
            '       <input type="text" id="codigo" name="disabled-input" value="' + linha.find('td:eq(0)').text() + '" disabled="" class="form-control">' +
            '   </div>' +
            '</div>' +
            '<div class="row form-group">' +
            '   <div class="col col-md-3">' +
            '       <label class="form-control-label">Nome</label>' +
            '   </div>' +
            '   <div class="col-12 col-md-9">' +
            '       <input type="text" name="disabled-input" value="' + linha.find('td:eq(1)').text() + '" disabled="" class="form-control">' +
            '   </div>' +
            '</div>' +
            '<div class="row form-group">' +
            '   <div class="col col-md-3">' +
            '       <label class="form-control-label">Data</label>' +
            '   </div>' +
            '   <div class="col-12 col-md-9">' +
            '       <input type="text" name="disabled-input" value="' + linha.find('td:eq(2)').text() + '" disabled="" class="form-control">' +
            '   </div>' +
            '</div>' +
            '<div class="row form-group">' +
            '   <div class="col col-md-3">' +
            '       <label class="form-control-label">Valor da inscrição</label>' +
            '   </div>' +
            '   <div class="col-12 col-md-9">' +
            '       <input type="text" id="valor" name="disabled-input" value="' + linha.find('td:eq(3)').text() + '" disabled="" class="form-control">' +
            '   </div>' +
            '</div>'
        );
    })

}

function inserirInscricao() {

    var ins = {
        usuario: "4",
        evento: $("#codigo").val(),
        valor: $("#valor").val(),
        status: "E",
        data_inscricao: getDateFormatted()
    };

    $.ajax({
        url: 'http://localhost/api_eventos/api/inscricao/create.php',
        type: 'POST',
        dataType: 'JSON',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(ins),
        error: function () {
            alert("Não foi possível confirmar sua inscrição");
        },
        success: function () {
            alert("Inscrição efetuada com sucesso");
            $('#staticModal').modal('toggle');
        }
    });
}

function cancelarInscricao() {

    $('#inscricoes').on('click', '#cancelar', function () {
        var linha = $(this).closest('tr');

        var ins = {
            usuario: "4",
            evento: linha.find('td:eq(0)').text(),
            valor: linha.find('td:eq(3)').text(),
            status: "E",
            data_inscricao: linha.find('td:eq(2)').text()
        };

        $.ajax({
            url: 'http://localhost/api_eventos/api/inscricao/update.php',
            type: 'PUT',
            dataType: 'JSON',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(ins),
            error: function () {
                alert("Não foi possível cancelar sua inscrição");
            },
            success: function () {
                alert("Inscrição calcelada com sucesso");
            }
        });
    });
}