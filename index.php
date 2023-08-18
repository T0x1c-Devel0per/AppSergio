<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-firestore.js"></script>
    <!-- Agrega el bundle de Bootstrap para utilizar componentes JS -->
    <script src="./JS/scripts.js"></script>
    <script src="./JS/popper.min.js"></script>
    <script src="https://kit.fontawesome.com/070233a5c9.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossorigin="anonymous">
    <link href="./CSS/style.css" type="text/css" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@100&family=Ysabeau+SC:wght@100&display=swap" rel="stylesheet">
    <title>Inicio</title>
</head>

<body>

    <div class="loading-overlay">
        <div class="loading-spinner"></div>
    </div>
    <div class="navbar-cont full-container">
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <h1>Registro</h1>
            </div>
        </nav>
        <div class="div-navbar full-container d-flex justify-content-center">
            <div class="collapse" id="navbarToggleExternalContent">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarScroll">
                            <ul class="navbar-nav me-auto my-2 my-lg-0" style="--bs-scroll-height: 100px;">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.php">
                                        <i class="bi bi-house"> Inicio </i>
                                    </a>
                                </li>
                                <br />
                                <li class="nav-item">
                                    <a class="nav-link" href="./view/registroClientes.php">
                                        <i class="bi bi-person-plus"> Registro-Clientes </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>


    <div class="form-container container">
        <h1>Servicio Técnico Sergio Rivera</h1>
        <form action="procesar.php" method="POST" autocomplete="off">
            <div class="row">
                <div class="container">
                    <div class="row">


                        <div class="col-sm-6">
                            <div class="container d-flex justify-content-flex-start">
                                <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Registre aquí la información del usuario">
                                    <p>Info Usuario <i class="bi bi-exclamation-circle"></i></p>
                                </span>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Nombre Completo</label>
                                <input type="text" class="form-control" id="Nombre" aria-describedby="emailHelp" placeholder="Ingrese Nombre" autocomplete="off">

                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">N° Documento</label>
                                        <input type="text" class="form-control cc-input" id="Cedula" aria-describedby="emailHelp" placeholder="Ingrese Documento" autocomplete="off">

                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Teléfono</label>
                                        <input type="number" class="form-control" id="Telefono" aria-describedby="emailHelp" placeholder="Ingrese Teléfono" autocomplete="off">

                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Dirección</label>
                                        <input type="text" class="form-control" id="Direccion" aria-describedby="emailHelp" placeholder="Ingrese Dirección" autocomplete="off">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="container d-flex justify-content-flex-start">
                                <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Registre aquí la información del Producto">
                                    <p>Info Registro <i class="bi bi-exclamation-circle"></i></p>
                                </span>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Articulo</label>
                                        <input type="text" class="form-control" id="Articulo" aria-describedby="emailHelp" placeholder="Ingrese Articulo">

                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Marca</label>
                                        <input type="text" class="form-control" id="Marca" aria-describedby="emailHelp" placeholder="Ingrese Marca">

                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Modelo</label>
                                        <input type="text" class="form-control" id="Modelo" aria-describedby="emailHelp" placeholder="Ingrese Modelo">

                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Total</label>
                                        <input type="text" class="form-control money-input" id="Total" aria-describedby="emailHelp" placeholder="Ingrese Total">

                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Abono</label>
                                        <input type="text" class="form-control money-input" id="Abono" aria-describedby="emailHelp" placeholder="Ingrese Abono">

                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Saldo</label>
                                        <input type="text" class="form-control money-input" id="Saldo" aria-describedby="emailHelp" placeholder="Ingrese Saldo">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="container d-flex justify-content-flex-start">
                    <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Registre aquí la fecha de la factura y la fecha de entrega">
                        <p>Fecha Registro <i class="bi bi-exclamation-circle"></i></p>
                    </span>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Fecha De Entrega</label>
                        <input type="date" class="form-control" id="FechaRegistro" aria-describedby="emailHelp">
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Fecha De Retiro</label>
                        <input type="date" class="form-control" id="FechaEntrega" aria-describedby="emailHelp">
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="container d-flex justify-content-flex-start">
                    <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Registre aquí una descripción General del servicio">
                        <p>Descripción General <i class="bi bi-exclamation-circle"></i></p>
                    </span>
                </div>
                <div class="col-sm-4 mt-3">
                    <div class="input-group w-100">
                        <span class="input-group-text input-area w-100 center-text">Características</span>
                        <textarea id="Caracteristicas" class="form-control w-100" aria-label="With textarea" placeholder="Características"></textarea>
                    </div>
                </div>
                <div class="col-sm-4 mt-3">
                    <div class="input-group w-100">
                        <span class="input-group-text input-area w-100 center-text">Detalles Del Servicio</span>
                        <textarea id="DetalleServicio" class="form-control w-100" aria-label="With textarea" placeholder="Detalles Del Servicio"></textarea>
                    </div>
                </div>
                <div class="col-sm-4 mt-3">
                    <div class="input-group w-100">
                        <span class="input-group-text input-area w-100 center-text">Observaciones</span>
                        <textarea id="Observaciones" class="form-control w-100" aria-label="With textarea" placeholder="Observaciones"></textarea>
                    </div>
                </div>
            </div>

            <div class="container mt-5">
                <button type="" class="btn btn-success btn-block">Guardar Datos</button>
            </div>
        </form>
    </div>

    <div class="form-container container">

        <div class="container">
            <h1>Panel de Control</h1>
        </div>
        <div class="row">
            <div class="col-sm">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Seleccione Opción
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#divListar" data-option="listar">Listar Usuarios</a></li>
                        <li><a class="dropdown-item" href="#divModificar" data-option="modificar">Modificar Usuarios</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="divListar" class="container mt-5" style="display: none;">
            <div class="row">
                <div class="col">
                    <button type="button" id="btnFiltrarSaldo" class="btn btn-danger">Saldo Pendiente</button>
                </div>
                <div class="col">
                    <button type="button" id="btnOrdenarFechas" class="btn btn-warning">Ordenar Por Fecha</button>
                </div>
            </div>
            <div class="container table-container">
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Fecha Registro</th>
                            <th>Fecha Entrega</th>
                            <th>Nombre</th>
                            <th>Total</th>
                            <th>Abono</th>
                            <th>Saldo</th>
                            <th>Cédula</th>
                            <th>Teléfono</th>
                            <th>Direccion</th>
                            <th>Articulo</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Caracteristicas</th>
                            <th>DetalleServicio</th>
                            <th>Observaciones</th>
                            <!-- ... otros encabezados de columnas -->
                        </tr>
                    </thead>
                    <tbody id="data-table-body">
                        <!-- Aquí se llenarán los datos -->
                    </tbody>
                </table>
            </div>
        </div>

        <div id="divModificar" style="display: none;">
            <p>Contenido para Modificar Usuarios</p>
        </div>
    </div>





    <script>
        var dataTableBody = document.getElementById('data-table-body');
        var btnOrdenarFechas = document.getElementById('btnFiltrarSaldo');
        var btnOrdenarFechas = document.getElementById('btnOrdenarFechas');

        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
        const firebaseConfig = {
            apiKey: "AIzaSyBXaMkTbDyh-SuK_u-l8IxP0z8bjtKqbNA",
            authDomain: "app-sergio-102d9.firebaseapp.com",
            projectId: "app-sergio-102d9",
            storageBucket: "app-sergio-102d9.appspot.com",
            messagingSenderId: "142274840611",
            appId: "1:142274840611:web:d931e126f8223d034a4996",
            measurementId: "G-YVZRYTEPBS"
        };
        // Inicializar Firebase
        firebase.initializeApp(firebaseConfig);

        // Referencia a Firestore
        var db = firebase.firestore();

        // Obtener el formulario
        var form = document.querySelector('form');

        // Manejar el envío del formulario
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío por defecto del formulario

            // Obtener los valores de los campos del formulario
            var fechaRegistro = form.querySelector('#FechaRegistro').value;
            var fechaEntrega = form.querySelector('#FechaEntrega').value;
            var nombre = form.querySelector('#Nombre').value;
            var total = form.querySelector('#Total').value;
            var abono = form.querySelector('#Abono').value;
            var saldo = form.querySelector('#Saldo').value;
            var cedula = form.querySelector('#Cedula').value;
            var telefono = form.querySelector('#Telefono').value;
            var direccion = form.querySelector('#Direccion').value;
            var articulo = form.querySelector('#Articulo').value;
            var marca = form.querySelector('#Marca').value;
            var modelo = form.querySelector('#Modelo').value;
            var caracteristicas = form.querySelector('#Caracteristicas').value;
            var detalleServicio = form.querySelector('#DetalleServicio').value;
            var observaciones = form.querySelector('#Observaciones').value;
            // ... obtener los demás valores

            // Crear un objeto con los datos del formulario
            var data = {
                FechaRegistro: fechaRegistro,
                FechaEntrega: fechaEntrega,
                Nombre: nombre,
                Cedula: cedula,
                Telefono: telefono,
                Direccion: direccion,
                Articulo: articulo,
                Marca: marca,
                Modelo: modelo,
                Total: total,
                Abono: abono,
                Saldo: saldo,
                Caracteristicas: caracteristicas,
                DetalleServicio: detalleServicio,
                Observaciones: observaciones
                // ... otros campos
            };

            // Agregar los datos a Firestore
            db.collection('registros').add(data)
                .then(function(docRef) {
                    console.log('Documento agregado con ID: ', docRef.id);
                    // Limpiar el formulario después de guardar los datos
                    form.reset();
                })
                .catch(function(error) {
                    console.error('Error al agregar documento: ', error);
                });
        });


        // Obtener los datos de la colección "registros"
        db.collection('registros').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var data = doc.data();

                // Crear una nueva fila en la tabla
                var newRow = dataTableBody.insertRow();

                // Llenar las celdas con los datos correspondientes
                newRow.insertCell().textContent = data.FechaRegistro;
                newRow.insertCell().textContent = data.FechaEntrega;
                newRow.insertCell().textContent = data.Nombre;
                newRow.insertCell().textContent = data.Total;
                newRow.insertCell().textContent = data.Abono;
                newRow.insertCell().textContent = data.Saldo;
                newRow.insertCell().textContent = data.Cedula;
                newRow.insertCell().textContent = data.Telefono;
                newRow.insertCell().textContent = data.Direccion;
                newRow.insertCell().textContent = data.Articulo;
                newRow.insertCell().textContent = data.Marca;
                newRow.insertCell().textContent = data.Modelo;
                newRow.insertCell().textContent = data.Caracteristicas;
                newRow.insertCell().textContent = data.DetalleServicio;
                newRow.insertCell().textContent = data.Observaciones;
                // ... llenar otras celdas según corresponda
            });
        });

        // Función para filtrar usuarios con saldo pendiente
        function filtrarSaldoPendiente() {
            var rows = dataTableBody.getElementsByTagName('tr');
            for (var i = 0; i < rows.length; i++) {
                var saldoCell = rows[i].cells[5]; // Índice de la celda de saldo en la fila
                // Eliminar el símbolo "$" y convertir el saldo a un número
                var saldoNumerico = parseFloat(saldoCell.textContent.replace('$', ''));
                // Verificar si el saldo en la celda es igual a cero
                if (saldoNumerico === 0) {
                    rows[i].style.display = 'none'; // Ocultar la fila si el saldo es cero
                } else {
                    rows[i].style.display = ''; // Mostrar la fila si el saldo es diferente de cero
                }
            }
        }
        // Asignar el evento click al botón de filtrar saldo
        btnFiltrarSaldo.addEventListener('click', filtrarSaldoPendiente);


        // Función para ordenar fechas de más reciente a más antigua
        function ordenarFechas() {
            var rows = Array.from(dataTableBody.getElementsByTagName('tr'));
            rows.sort(function(rowA, rowB) {
                var fechaA = new Date(rowA.cells[0].textContent); // Índice de la celda de fecha registro en la fila
                var fechaB = new Date(rowB.cells[0].textContent);
                return fechaB - fechaA; // Ordenar de más reciente a más antigua
            });
            // Vaciar la tabla y volver a llenar con las filas ordenadas
            dataTableBody.innerHTML = '';
            rows.forEach(function(row) {
                dataTableBody.appendChild(row);
            });
            var rows = dataTableBody.getElementsByTagName('tr');

            for (var i = 0; i < rows.length; i++) {
                rows[i].style.display = ''; // Mostrar todas las filas
            }
        }
        // Asignar el evento click al botón de ordenar fechas
        btnOrdenarFechas.addEventListener('click', ordenarFechas);
    </script>


</body>

</html>