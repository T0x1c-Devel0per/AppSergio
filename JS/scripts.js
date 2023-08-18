
document.addEventListener('DOMContentLoaded', function () {
    const loadingOverlay = document.querySelector('.loading-overlay');

    // Mostrar la animación de carga
    loadingOverlay.style.display = 'flex';

    // Ocultar la animación después de 2 segundos
    setTimeout(function () {
        loadingOverlay.style.display = 'none';
    }, 1000);
});

$(document).ready(function () {
    var moneyInputs = $('.money-input');

    moneyInputs.on('blur', function () {
        var sanitizedValue = $(this).val().replace(/[^0-9.]/g, '');
        var numericValue = parseFloat(sanitizedValue);

        // Manejar caso de no registros (NaN)
        if (isNaN(numericValue)) {
            $(this).val('$ 0');
        } else {
            var formattedValue = numericValue.toLocaleString('en-US');
            // Quitar los dos últimos ceros
            formattedValue = formattedValue.replace(/\.00$/, '');
            $(this).val('$ ' + formattedValue);
        }
    });
});
function formatNumberWithThousandsSeparator(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

$(document).ready(function () {
    var moneyInputs = $('.cc-input');

    moneyInputs.on('blur', function () {
        var sanitizedValue = $(this).val().replace(/[^0-9.]/g, '');
        var numericValue = parseFloat(sanitizedValue);

        // Manejar caso de no registros (NaN)
        if (isNaN(numericValue)) {
            $(this).val('0');
        } else {
            var formattedValue = formatNumberWithThousandsSeparator(numericValue);
            $(this).val(formattedValue);
        }
    });
});

$(document).ready(function () {
    $(".dropdown-item").on("click", function () {
        var selectedOption = $(this).data("option");
        
        // Ocultar todos los divs
        $("#divListar").hide();
        $("#divModificar").hide();

        // Mostrar el div correspondiente a la opción seleccionada
        if (selectedOption === "listar") {
            $("#divListar").show();
        } else if (selectedOption === "modificar") {
            $("#divModificar").show();
        }
    });
});
