function cadastrarUsuario() {

    var usuario = {
        nome: $("input[name=nome]").val(),
        cpf: $("input[name=cpf]").val(),
        email: $("input[name=email]").val(),
        senha: md5($("input[name=senha]").val()),
        endereco: $("input[name=endereco]").val()
    };

    $.ajax({
        url: 'http://localhost/api_eventos/api/usuario/create.php',
        type: 'POST',
        dataType: 'JSON',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(usuario),
        error: function (request, status, erro) {
            console.log(request);
            console.log(status);
            console.log(erro);
            alert("Não foi possível confirmar seu cadastro");
        },
        success: function () {
            alert('Usuário cadastrado com sucesso');
            window.location.href = 'login.php';
        }
    });
}