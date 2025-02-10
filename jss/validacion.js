window.onload = function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario hasta que se valide

        // Obtiene los valores de los campos del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("num").value.trim();
        const pedidos = document.getElementById("pedidos").value.trim();

        // Variable para almacenar los mensajes de error
        let errorMessage = false;

        // Limpiar mensajes de error anteriores
        document.getElementById("error-nombre").classList.add('hidden');
        document.getElementById("error-apellido").classList.add('hidden');
        document.getElementById("error-email").classList.add('hidden');
        document.getElementById("error-numero").classList.add('hidden');
        document.getElementById("error-pedidos").classList.add('hidden');

        // Validación del campo nombre
        if (nombre === "") {
            errorMessage = true;
            document.getElementById("error-nombre").innerText = "El Nombre es obligatorio.";
            document.getElementById("error-nombre").classList.remove('hidden');
        } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
            errorMessage = true;
            document.getElementById("error-nombre").innerText = "El Nombre no debe contener números ni caracteres especiales.";
            document.getElementById("error-nombre").classList.remove('hidden');
        }

        // Validación del campo apellido
        if (!errorMessage && (apellido === "" || !/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido))) {
            errorMessage = true;
            document.getElementById("error-apellido").innerText = apellido === "" ? "El Apellido es obligatorio." : "El Apellido no debe contener números ni caracteres especiales.";
            document.getElementById("error-apellido").classList.remove('hidden');
        }

        // Validación del campo correo electrónico
        if (!errorMessage && (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
            errorMessage = true;
            document.getElementById("error-email").innerText = email === "" ? "El campo E-Mail es obligatorio." : "Por favor, introduce un correo electrónico válido.";
            document.getElementById("error-email").classList.remove('hidden');
        }

        // Validación del campo teléfono
        if (!errorMessage && (telefono === "" || !/^\d+$/.test(telefono))) {
            errorMessage = true;
            document.getElementById("error-numero").innerText = telefono === "" ? "El Número de Teléfono es obligatorio." : "El Número de Teléfono debe contener solo números.";
            document.getElementById("error-numero").classList.remove('hidden');
        }

        // Validación del campo de pedidos o problemas
        if (!errorMessage && pedidos === "") {
            errorMessage = true;
            document.getElementById("error-pedidos").innerText = "El campo de pedidos o problemas debe ser completado.";
            document.getElementById("error-pedidos").classList.remove('hidden');
        }

        // Aca se utiliza la libreria SweetAlert
        // Si hay un mensaje de error, mostrarlo en una alerta de SweetAlert2
        if (errorMessage) {
            Swal.fire({
                title: 'Error en el formulario',
                text: 'Por favor corrige los errores antes de enviar.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        } else {
            // Si todo es válido, mostrar un mensaje de éxito
            Swal.fire({
                title: 'Formulario Enviado',
                text: 'Tu consulta se ha enviado correctamente!',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                // Restablecer el formulario después de que el usuario cierre la alerta
                form.reset();
            });
        }
    });
};