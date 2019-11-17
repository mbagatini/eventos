<!DOCTYPE html>

<?php include_once('header.php'); ?>

<!-- Title Page-->
<title>Login</title>

<body>
<div class="page-wrapper">
    <div class="page-content--bge5">
        <div class="container">
            <div class="login-wrap">
                <div class="login-content">
                    <div class="login-logo">
                        <img src="images/icon/logo.png" alt="">
                        <h2 class="title-1">Eventos</h2>
                    </div>
                    <div class="login-form">
                        <form action="" method="post">
                            <div class="form-group">
                                <label>E-mail</label>
                                <input class="au-input au-input--full" type="email" name="email" placeholder="E-mail">
                            </div>
                            <div class="form-group">
                                <label>Senha</label>
                                <input class="au-input au-input--full" type="password" name="password"
                                       placeholder="Senha">
                            </div>
                            <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<?php include_once('footer.html'); ?>

</body>

</html>
<!-- end document-->