//Inicializamos las variables de los providers 
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
}
//Inicializamos firebase
firebase.initializeApp(firebaseConfig);

//Referencia a firestore
var db = firebase.firestore();

//Obtenemos el id del formulario
var form = document.getElementById("mainForm")

//Obtenemos el id del form para guardarlo en una variable
var form2 = document.getElementById('form2-tbody')

//Obtenemos el campo de entrada de búsqueda
const searchInput = document.getElementById('searchInput');

var originalData = [];


//////////////////////////////////////////////FUNCIONALIDAD PARA ENVIAR DATOS A FIREBASE//////////////////////////////////////////////
function guardar() {
    event.preventDefault();
    // Obtenemos los valores de los campos del formulario
    var nombre = form.querySelector('#Nombre').value;
    var fechaRegistro = form.querySelector('#FechaRegistro').value;
    var fechaEntrega = form.querySelector('#FechaEntrega').value;
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
                FechaRegistro: fechaRegistro,
                FechaEntrega: fechaEntrega,
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
                Caracteristicas: caracteristicas,
                DetalleServicio: detalleServicio,
                Observaciones: observaciones
            }).then(function () {
                var fechaRegistroInput = document.getElementById("FechaRegistro");
                var fechaHoraActual = new Date().toISOString().slice(0, 10);
                // Restablece algunos campos (si lo deseas)
                form.querySelector('#Nombre').value = '';
                form.querySelector('#Total').value = '';
                form.querySelector('#Abono').value = '';
                form.querySelector('#Saldo').value = '';
                form.querySelector('#Cedula').value = '';
                form.querySelector('#Telefono').value = '';
                form.querySelector('#Direccion').value = '';
                form.querySelector('#Articulo').value = '';
                form.querySelector('#Marca').value = '';
                form.querySelector('#Modelo').value = '';
                form.querySelector('#Caracteristicas').value = '';
                form.querySelector('#DetalleServicio').value = '';
                form.querySelector('#Observaciones').value = '';
                fechaRegistroInput.value = fechaHoraActual;
            }).catch(function (error) {
                console.error("Error al agregar datos:", error);
            });
        } else if (
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

////////////////////////////////////////////// FUNCIONALIDAD PARA EDITAR LOS DATOS //////////////////////////////////////////////
function editData(id) {

    var btnSave = document.getElementById('btn-save');
    var btnEdit = document.getElementById('btn-edit');
    // Obtenemos una referencia al documento en Firestore que deseas editar
    var clienteRef = db.collection("clientes").doc(id);
    btnSave.style.display = "none";
    btnEdit.style.display = "initial";

    Swal.fire({
        title: 'Alerta',
        text: "¿Desea editar este usuario?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No, Cancelar!',
        confirmButtonText: 'Si, Editar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Realizamos una consulta para obtener los datos existentes
            clienteRef.get()
                .then(function (doc) {
                    if (doc.exists) {
                        var data = doc.data();
                        // Rellenamos el formulario de edición con los datos existentes
                        document.getElementById('FechaRegistro').value = data.FechaRegistro;
                        document.getElementById('FechaEntrega').value = data.FechaEntrega;
                        document.getElementById('Nombre').value = data.Nombre;
                        document.getElementById('Total').value = data.Total;
                        document.getElementById('Abono').value = data.Abono;
                        document.getElementById('Saldo').value = data.Saldo;
                        document.getElementById('Cedula').value = data.Cedula;
                        document.getElementById('Telefono').value = data.Telefono;
                        document.getElementById('Direccion').value = data.Direccion;
                        document.getElementById('Articulo').value = data.Articulo;
                        document.getElementById('Marca').value = data.Marca;
                        document.getElementById('Modelo').value = data.Modelo;
                        document.getElementById('Caracteristicas').value = data.Caracteristicas;
                        document.getElementById('DetalleServicio').value = data.DetalleServicio;
                        document.getElementById('Observaciones').value = data.Observaciones;
                        btnEdit.onclick = function () {
                            // Obtenemos los valores actualizados de los campos
                            var fechaRegistro = document.getElementById('FechaRegistro').value;
                            var fechaEntrega = document.getElementById('FechaEntrega').value;
                            var nombre = document.getElementById('Nombre').value;
                            var total = document.getElementById('Total').value;
                            var abono = document.getElementById('Abono').value;
                            var saldo = document.getElementById('Saldo').value;
                            var cedula = document.getElementById('Cedula').value;
                            var telefono = document.getElementById('Telefono').value;
                            var direccion = document.getElementById('Direccion').value;
                            var articulo = document.getElementById('Articulo').value;
                            var marca = document.getElementById('Marca').value;
                            var modelo = document.getElementById('Modelo').value;
                            var caracteristicas = document.getElementById('Caracteristicas').value;
                            var detalleServicio = document.getElementById('DetalleServicio').value;
                            var observaciones = document.getElementById('Observaciones').value;
                            // Actualizar los datos en Firestore
                            clienteRef.update({
                                FechaRegistro: fechaRegistro,
                                FechaEntrega: fechaEntrega,
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
                                Caracteristicas: caracteristicas,
                                DetalleServicio: detalleServicio,
                                Observaciones: observaciones
                            }).then(() => {
                                var fechaRegistroInput = document.getElementById("FechaRegistro");
                                var fechaHoraActual = new Date().toISOString().slice(0, 10);
                                // Restablecemos algunos campos
                                form.querySelector('#Nombre').value = '';
                                form.querySelector('#Total').value = '';
                                form.querySelector('#Abono').value = '';
                                form.querySelector('#Saldo').value = '';
                                form.querySelector('#Cedula').value = '';
                                form.querySelector('#Telefono').value = '';
                                form.querySelector('#Direccion').value = '';
                                form.querySelector('#Articulo').value = '';
                                form.querySelector('#Marca').value = '';
                                form.querySelector('#Modelo').value = '';
                                form.querySelector('#Caracteristicas').value = '';
                                form.querySelector('#DetalleServicio').value = '';
                                form.querySelector('#Observaciones').value = '';
                                fechaRegistroInput.value = fechaHoraActual;
                            }).catch((error) => {
                                console.error("Error al actualizar el documento: ", error);
                            });
                            btnSave.style.display = "initial";
                            btnEdit.style.display = "none";
                        };
                    } else {
                        // Si el documento no existe, muestra un mensaje de error
                        console.log("El documento no existe");
                    }
                })
                .catch(function (error) {
                    console.log("Error al obtener el documento:", error);
                });
            searchInput.value = '';
        }
    })





}

// Obtener los datos de Firestore y almacenar una copia en originalData
db.collection("clientes").onSnapshot((querySnapshot) => {
    originalData = [];
    querySnapshot.forEach((doc) => {
        originalData.push({
            id: doc.id,
            FechaRegistro: doc.data().FechaRegistro,
            FechaEntrega: doc.data().FechaEntrega,
            Nombre: doc.data().Nombre,
            Total: doc.data().Total,
            Abono: doc.data().Abono,
            Saldo: doc.data().Saldo,
            Cedula: doc.data().Cedula,
            Telefono: doc.data().Telefono,
            Direccion: doc.data().Direccion,
            Articulo: doc.data().Articulo,
            Marca: doc.data().Marca,
            Modelo: doc.data().Modelo,
            Caracteristicas: doc.data().Caracteristicas,
            DetalleServicio: doc.data().DetalleServicio,
            Observaciones: doc.data().Observaciones
        });
    });

    // Ordenar los datos originales por fecha de registro
    originalData.sort((a, b) => {
        const fechaA = new Date(a.FechaRegistro);
        const fechaB = new Date(b.FechaRegistro);
        return fechaB - fechaA;
    });

    // Llenar la tabla con los datos originales ordenados
    form2.innerHTML = '';
    originalData.forEach((registro) => {
        form2.innerHTML += `
        <tr>
        <td><button type="button" class="btn btn-danger" onclick="deleteData('${registro.id}')">Eliminar</button></td>
        <td><button type="button" class="btn btn-warning" onclick="editData('${registro.id}', '${registro.Nombre}', '${registro.Total}', '${registro.Abono}', '${registro.Saldo}', '${registro.Cedula}', '${registro.Telefono}', '${registro.Direccion}', '${registro.Articulo}', '${registro.Marca}', '${registro.Modelo}', '${registro.FechaRegistro}', '${registro.FechaEntrega}', '${registro.Caracteristicas}', '${registro.DetalleServicio}', '${registro.Observaciones}')">Editar</button></td>
        <td>${registro.FechaRegistro}</td>
        <td>${registro.FechaEntrega}</td> 
        <td>${registro.Nombre}</td>
        <td>${registro.Total}</td>
        <td>${registro.Abono}</td>
        <td>${registro.Saldo}</td>
        <td>${registro.Cedula}</td>
        <td>${registro.Telefono}</td>
        <td>${registro.Direccion}</td>
        <td>${registro.Articulo}</td>
        <td>${registro.Marca}</td>
        <td>${registro.Modelo}</td>           
        <td>${registro.Caracteristicas}</td>
        <td>${registro.DetalleServicio}</td>
        <td>${registro.Observaciones}</td>
    </tr>
        `;
    });
});

//////////////////////////////////////////////FUNCIONES PARA REALIZAR LA BÚSQUEDA//////////////////////////////////////////////
//Remover acentos para la búsqueda de Clientes
function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

//Creamos un evento de escucha para comprobar si han habido cambios en el input
searchInput.addEventListener('input', performSearch);

// Función para realizar la búsqueda
function performSearch() {
    // Obtén el término de búsqueda
    const searchTerm = removeAccents(searchInput.value.trim().toLowerCase());
    // Filtrar los datos originales y actualizar la tabla con los resultados
    const filteredData = originalData.filter(registro => {
        const nombreCliente = removeAccents(registro.Nombre.toLowerCase());
        return nombreCliente.includes(searchTerm);
    });
    // Limpia la tabla
    form2.innerHTML = '';
    // Rellena la tabla con los resultados de la búsqueda en el mismo orden
    filteredData.forEach((registro) => {
        form2.innerHTML += `
        <tr>
        <td><button type="button" class="btn btn-danger" onclick="deleteData('${registro.id}')">Eliminar</button></td>
        <td><button type="button" class="btn btn-warning" onclick="editData('${registro.id}')">Editar</button></td>
        <td>${registro.FechaRegistro}</td>
        <td>${registro.FechaEntrega}</td>
        <td>${registro.Nombre}</td>
        <td>${registro.Total}</td>
        <td>${registro.Abono}</td>
        <td>${registro.Saldo}</td>
        <td>${registro.Cedula}</td>
        <td>${registro.Telefono}</td>
        <td>${registro.Direccion}</td>
        <td>${registro.Articulo}</td>
        <td>${registro.Marca}</td>
        <td>${registro.Modelo}</td>
        <td>${registro.Caracteristicas}</td>
        <td>${registro.DetalleServicio}</td>
        <td>${registro.Observaciones}</td>
    </tr>
        `;
    });
}


//////////////////////////////////////////////Función para borrar datos//////////////////////////////////////////////
function deleteData(id) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: 'Alerta',
        text: "¿Está seguro de eliminar este usuario?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, Eliminar',
        cancelButtonText: 'No, Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Eliminado',
                'Usuario Eliminado',
                'success'
            );
            db.collection("clientes").doc(id).delete().then(function () {
                console.log("Datos Eliminados");
            }).catch(function (error) {
                console.log("Error", error);
            });
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'La solicitud se ha cancelado',
                'error'
            );
        }
    });
    searchInput.value = '';
}


//////////////////////////////////////////////Establecer Fecha Registro con la fecha actual//////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia al input de fecha y hora
    var fechaRegistroInput = document.getElementById("FechaRegistro");

    // Obtener la fecha y hora actual en el formato deseado (YYYY-MM-DDTHH:mm)
    var fechaHoraActual = new Date().toISOString().slice(0, 10);
    // Asignar la fecha y hora al valor del input
    fechaRegistroInput.value = fechaHoraActual;
});

//////////////////////////////////////////////Animación de carga//////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const loadingOverlay = document.querySelector('.loading-overlay');
    // Mostrar la animación de carga
    loadingOverlay.style.display = 'flex';
    // Ocultar la animación después de 1 segundos
    setTimeout(function () {
        loadingOverlay.style.display = 'none';
    }, 1000);
});

//////////////////////////////////////////////Funcionalidad para listar los usuarios por saldo pendiente y mostrar todos//////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    var btnFiltrarSaldo = document.getElementById('btnFiltrarSaldo');
    var dataTableBody = document.getElementById('data-table-body');
    // Obtener el elemento tbody de la tabla por su ID
    var dataTableBody = document.getElementById('form2-tbody');
    // Función para filtrar usuarios con saldo pendiente
    function filtrarSaldoPendiente() {
        var rows = dataTableBody.getElementsByTagName('tr');
        for (var i = 0; i < rows.length; i++) {
            var saldoCell = rows[i].cells[7]; // Índice de la celda de saldo en la fila
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


