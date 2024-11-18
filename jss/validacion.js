document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("num").value.trim();
        const pedidos = document.getElementById("pedidos").value.trim();

        let errorMessage = "";

        if (nombre === "") {
            errorMessage = "El Nombre es obligatorio.";
        } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
            errorMessage = "El Nombre no debe contener números ni caracteres especiales.";
        }

        if (errorMessage === "" && (apellido === "" || !/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido))) {
            errorMessage = apellido === "" ? "El Apellido es obligatorio." : "El Apellido no debe contener números ni caracteres especiales.";
        }

        if (errorMessage === "" && (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
            errorMessage = email === "" ? "El campo E-Mail es obligatorio." : "Por favor, introduce un correo electrónico válido.";
        }

        if (errorMessage === "" && (telefono === "" || !/^\d+$/.test(telefono))) {
            errorMessage = telefono === "" ? "El Número de Teléfono es obligatorio." : "El Número de Teléfono debe contener solo números.";
        }

        if (errorMessage === "" && pedidos === "") {
            errorMessage = "El campo de pedidos o problemas debe ser completado.";
        }

        
        if (errorMessage !== "") {
            Swal.fire({
                title: 'Error en el formulario',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                title: 'Formulario Enviado',
                text: 'Tu consulta se ha enviado correctamente!',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                form.reset();
            });
        }
    });
});