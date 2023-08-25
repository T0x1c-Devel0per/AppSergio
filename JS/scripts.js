//Inicializamos las variables de los providers 
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Inicializamos la variables de conexión de firebase
const firebaseConfig = {
    apiKey: "AIzaSyBXaMkTbDyh-SuK_u-l8IxP0z8bjtKqbNA",
    authDomain: "app-sergio-102d9.firebaseapp.com",
    projectId: "app-sergio-102d9",
    storageBucket: "app-sergio-102d9.appspot.com",
    messagingSenderId: "142274840611",
    appId: "1:142274840611:web:d931e126f8223d034a4996",
    measurementId: "G-YVZRYTEPBS"
}

//Inicializamos firebase
firebase.initializeApp(firebaseConfig);

//Referencia a firestore
var db = firebase.firestore();

//Obtener el id del formulario
var form = document.getElementById("mainForm")

//Función para enviar los datos a Firebase
function guardar() {

    // Obtenemos los valores de los campos del formulario
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
    var fechaRegistro = form.querySelector('#FechaRegistro').value;
    var fechaEntrega = form.querySelector('#FechaEntrega').value;
    var caracteristicas = form.querySelector('#Caracteristicas').value;
    var detalleServicio = form.querySelector('#DetalleServicio').value;
    var observaciones = form.querySelector('#Observaciones').value;

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Alerta',
        text: "¿Esta seguro de guardar este usuario?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Guardar!',
        cancelButtonText: 'No, Cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Guardado!',
                'Usuario Guardado.',
                'success'
            )
            db.collection("clientes").add({
                Nombre: nombre,
                Total: total,
                Abono: abono,
                Saldo: saldo,
                Cedula: cedula,
                Telefono: telefono,
                Direccion: direccion,
                Articulo: articulo,
                Marca: marca,
                Modelo: modelo,
                FechaRegistro: fechaRegistro,
                FechaEntrega: fechaEntrega,
                Caracteristicas: caracteristicas,
                DetalleServicio: detalleServicio,
                Observaciones: observaciones
            }).then(function () {
                form.reset(); //limpiamos el formulario
            }).catch(function (error) {
                console.error("Error al agregar datos:", error);
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'La solicitud se ha cancelado',
                'error'
            )
        }
    })
}

//Mostrar Datos en el form2
var form2 = document.getElementById('form2-tbody')
db.collection("clientes").onSnapshot((querySnapshot) => {
    //Limpiar la tabla
    form2.innerHTML = '';
    querySnapshot.forEach((doc) => {
        form2.innerHTML += `
            <tr>
            <td><button type="button" class="btn btn-danger"  onclick = "deleteData ('${doc.id}')">Eliminar</button></td>
            <td><button type="button" class="btn btn-warning" onclick = "editData('${doc.id}', '${doc.data().Nombre}', '${doc.data().Total}', '${doc.data().Abono}', '${doc.data().Saldo}', '${doc.data().Cedula}', '${doc.data().Telefono}', '${doc.data().Direccion}', '${doc.data().Articulo}', '${doc.data().Marca}', '${doc.data().Modelo}', '${doc.data().FechaRegistro}', '${doc.data().FechaEntrega}', '${doc.data().Caracteristicas}', '${doc.data().DetalleServicio}', '${doc.data().Observaciones}')" >Editar</button></td>
            <td>${doc.data().Nombre}</td>
            <td>${doc.data().Total}</td>
            <td>${doc.data().Abono}</td>
            <td>${doc.data().Saldo}</td>
            <td>${doc.data().Cedula}</td>
            <td>${doc.data().Telefono}</td>
            <td>${doc.data().Direccion}</td>
            <td>${doc.data().Articulo}</td>
            <td>${doc.data().Marca}</td>
            <td>${doc.data().Modelo}</td>
            <td>${doc.data().FechaRegistro}</td>
            <td>${doc.data().FechaEntrega}</td>            
            <td>${doc.data().Caracteristicas}</td>
            <td>${doc.data().DetalleServicio}</td>
            <td>${doc.data().Observaciones}</td>
            </tr>
        `
    });
});

//Borrar Datos
function deleteData(id) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Alerta',
        text: "¿Esta seguro de eliminar este usuario?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar!',
        cancelButtonText: 'No, Cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Eliminado!',
                'Usuario Eliminado.',
                'success'
            )
            db.collection("clientes").doc(id).delete().then(function () {
                console.log("Datos Eliminados")
            }).catch(function (error) {
                console.log("Error", error);
            })
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'La solicitud se ha cancelado',
                'error'
            )
        }
    })
}

//Actualizar datos
function editData(id, nnombre, ttotal, aabono, ssaldo, ccedula, ttelefono, ddireccion, aarticulo, mmarca, mmodelo, ffechaRegistro, ffechaEntrega, ccaracteristicas, ddetalleServicio, oobservaciones) {

    document.getElementById('Nombre').value = nnombre;
    document.getElementById('Total').value = ttotal;
    document.getElementById('Abono').value = aabono;
    document.getElementById('Saldo').value = ssaldo;
    document.getElementById('Cedula').value = ccedula;
    document.getElementById('Telefono').value = ttelefono;
    document.getElementById('Direccion').value = ddireccion;
    document.getElementById('Articulo').value = aarticulo;
    document.getElementById('Marca').value = mmarca;
    document.getElementById('Modelo').value = mmodelo;
    document.getElementById('FechaRegistro').value = ffechaRegistro;
    document.getElementById('FechaEntrega').value = ffechaEntrega;
    document.getElementById('Caracteristicas').value = ccaracteristicas;
    document.getElementById('DetalleServicio').value = ddetalleServicio;
    document.getElementById('Observaciones').value = oobservaciones;

    var btnEdit = document.getElementById('btn-save');
    btnEdit.innerHTML = 'Editar';

    btnEdit.onclick = function () {

        var clientesRef = db.collection("clientes").doc(id);
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
        var fechaRegistro = form.querySelector('#FechaRegistro').value;
        var fechaEntrega = form.querySelector('#FechaEntrega').value;
        var caracteristicas = form.querySelector('#Caracteristicas').value;
        var detalleServicio = form.querySelector('#DetalleServicio').value;
        var observaciones = form.querySelector('#Observaciones').value;

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Alerta',
            text: "¿Esta seguro de editar este usuario?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, Editar!',
            cancelButtonText: 'No, Cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Editado!',
                    'Usuario Editado.',
                    'success'
                )
                return clientesRef.update({
                    Nombre: nombre,
                    Total: total,
                    Abono: abono,
                    Saldo: saldo,
                    Cedula: cedula,
                    Telefono: telefono,
                    Direccion: direccion,
                    Articulo: articulo,
                    Marca: marca,
                    Modelo: modelo,
                    FechaRegistro: fechaRegistro,
                    FechaEntrega: fechaEntrega,
                    Caracteristicas: caracteristicas,
                    DetalleServicio: detalleServicio,
                    Observaciones: observaciones
                }).then(() => {
                    console.log("Document successfully updated!");
                    btnEdit.innerHTML = 'Guardar';
                    document.getElementById('Nombre').value = "";
                    document.getElementById('Total').value = "";
                    document.getElementById('Abono').value = "";
                    document.getElementById('Saldo').value = "";
                    document.getElementById('Cedula').value = "";
                    document.getElementById('Telefono').value = "";
                    document.getElementById('Direccion').value = "";
                    document.getElementById('Articulo').value = "";
                    document.getElementById('Marca').value = "";
                    document.getElementById('Modelo').value = "";
                    document.getElementById('FechaRegistro').value = "";
                    document.getElementById('FechaEntrega').value = "";
                    document.getElementById('Caracteristicas').value = "";
                    document.getElementById('DetalleServicio').value = "";
                    document.getElementById('Observaciones').value = "";
                }).catch((error) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'La solicitud se ha cancelado',
                    'error'
                )
            }
        })
    }
}

//Establecer Fecha Registro con la fecha actual
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia al input de fecha y hora
    var fechaRegistroInput = document.getElementById("FechaRegistro");
    fechaRegistroInput.disabled = true;
    // Obtener la fecha y hora actual en el formato deseado (YYYY-MM-DDTHH:mm)
    var fechaHoraActual = new Date().toISOString().slice(0, 10);
    // Asignar la fecha y hora al valor del input
    fechaRegistroInput.value = fechaHoraActual;
});

//Animación de carga
document.addEventListener('DOMContentLoaded', function () {
    const loadingOverlay = document.querySelector('.loading-overlay');
    // Mostrar la animación de carga
    loadingOverlay.style.display = 'flex';
    // Ocultar la animación después de 1 segundos
    setTimeout(function () {
        loadingOverlay.style.display = 'none';
    }, 1000);
});

//Funcionalidad para listar los usuarios por saldo pendiente y mostrar todos
document.addEventListener("DOMContentLoaded", function () {
    var btnFiltrarSaldo = document.getElementById('btnFiltrarSaldo');
    var dataTableBody = document.getElementById('data-table-body');
    // Obtener el elemento tbody de la tabla por su ID
    var dataTableBody = document.getElementById('form2-tbody');

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

    //Función para mostrar todos los datos
    // Función para mostrar todas las filas nuevamente
    function mostrarTodasLasFilas() {
        var rows = dataTableBody.getElementsByTagName('tr');
        for (var i = 0; i < rows.length; i++) {
            rows[i].style.display = ''; // Mostrar la fila
        }
    }

    // Asignar el evento click al botón de mostrar todos
    var btnMostrarTodos = document.getElementById('btnMostrarTodos');
    btnMostrarTodos.addEventListener('click', mostrarTodasLasFilas);

    //Formato a los inputs total Abono y saldo junto con la resta
    $(document).ready(function () {
        var moneyInputs = $('.money-input');
        var moneyInputs2 = $('.money-input1');
        var totalInputs = $('.total-input');
        moneyInputs.on('blur', function () {
            recalculateTotal();
        });
        moneyInputs2.on('blur', function () {
            recalculateTotal();
        });
        function recalculateTotal() {
            var value1 = getValueFromInput(moneyInputs);
            var value2 = getValueFromInput(moneyInputs2);
            var total = value1 - value2;
            moneyInputs.val(formatAsCurrency(value1));
            moneyInputs2.val(formatAsCurrency(value2));
            totalInputs.val(formatAsCurrency(total));
        }
        totalInputs.on('blur', function () {
            var value = getValueFromInput(totalInputs);
            totalInputs.val(formatAsCurrency(value));
        });
        function getValueFromInput(inputElement) {
            var sanitizedValue = inputElement.val().replace(/[^0-9.]/g, '');
            return parseFloat(sanitizedValue) || 0;
        }
        function formatAsCurrency(value) {
            var formattedValue = value.toLocaleString('en-US');
            formattedValue = formattedValue.replace(/\.00$/, '');
            return '$ ' + formattedValue;
        }
    });
    //Dar Formato a la celda de Cedula
    $(document).ready(function () {
        var moneyInputs = $('.cc-input');
        moneyInputs.on('blur', function () {
            var sanitizedValue = $(this).val().replace(/[^0-9.]/g, '');
            var numericValue = parseFloat(sanitizedValue);
            // Manejar caso de no registros (NaN)
            if (isNaN(numericValue)) {
                $(this).val('0');
            } else {
                var formattedValue = numericValue.toLocaleString('en-US'); // Cambiar el separador de miles a punto
                $(this).val(formattedValue);
            }
        });
    });
    
});




