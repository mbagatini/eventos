<!DOCTYPE html>

<?php include_once('pages/header.php'); ?>

<!-- Title Page-->
<title>Dashboard</title>

<body>
<div class="page-wrapper">
    <!-- HEADER DESKTOP-->
    <header class="header-desktop">
        <div class="section__content section__content--p35">
            <div class="header3-wrap">
                <div class="header__logo">
                    <a href="#">
                    </a>
                    <h1 class="title-1">Eventos</h1>
                </div>

                <div class="header-button">
                    <div class="header-wrap">
                        <div class="account-wrap">
                            <div class="account-item clearfix js-item-menu">
                                <div class="image">
                                    <img src="images/icon/avatar-01.jpg" alt="John Doe"/>
                                </div>
                                <div class="content">
                                    <a class="js-acc-btn" href="#">john doe</a>
                                </div>
                                <div class="account-dropdown js-dropdown">
                                    <div class="info clearfix">
                                        <div class="image">
                                            <a href="#">
                                                <img src="images/icon/avatar-01.jpg" alt="John Doe"/>
                                            </a>
                                        </div>
                                        <div class="content">
                                            <h5 class="name">
                                                <a href="#">john doe</a>
                                            </h5>
                                            <span class="email">johndoe@example.com</span>
                                        </div>
                                    </div>
                                    <div class="account-dropdown__body">
                                        <div class="account-dropdown__item">
                                            <a href="#">
                                                <i class="zmdi zmdi-account"></i>Account</a>
                                        </div>
                                    </div>
                                    <div class="account-dropdown__footer">
                                        <a href="#">
                                            <i class="zmdi zmdi-power"></i>Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- MENU SIDEBAR-->
    <aside class="menu-sidebar d-none d-lg-block">
        <div class="logo">
            <a href="#">
                <img src="images/icon/logo.png" alt="Cool Admin"/>
            </a>
        </div>
        <div class="menu-sidebar__content js-scrollbar1">
            <nav class="navbar-sidebar">
                <ul class="list-unstyled navbar__list">
                    <li>
                        <a href="chart.html">
                            <i class="fas fa-user"></i>Minhas inscrições</a>
                    </li>
                    <li>
                        <a href="table.html">
                            <i class="fas fa-calendar-alt"></i>Eventos</a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
    <!-- END MENU SIDEBAR-->

    <!-- PAGE CONTENT-->
    <div class="page-container">
        <div class="main-content">
            <div class="section__content section__content--p30">
                <div class="container-fluid">
                    <div class="page-content--bgf7">
                        <!-- DATA TABLE-->
                        <section class="p-t-20">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3 class="title-5 m-b-35">Minhas inscrições</h3>
                                        <div class="table-data__tool">
                                        </div>

                                        <div class="table-responsive table-responsive-data2">
                                            <table class="table table-data2">
                                                <thead>
                                                <tr>
                                                    <th>código</th>
                                                    <th>evento</th>
                                                    <th>data da inscrição</th>
                                                    <th>valor</th>
                                                    <th>status</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody id="eventos">
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>

<?php include_once('pages/footer.php'); ?>

<script src="js/util.js"></script>

<script>
    $(document).ready(function () {
        popularEventos();
    });
</script>

</html>
<!-- end document-->
