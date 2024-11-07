document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        
        event.preventDefault();
        
        
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("num").value.trim();
        const pedidos = document.getElementById("pedidos").value.trim();

        
        let errors = [];

        
        if (nombre === "") {
            errors.push("ElNombre es obligatorio.");
        }

        
        if (apellido === "") {
            errors.push("El  Apellido es obligatorio.");
        }

        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            errors.push("El campo E-Mail es obligatorio.");
        } else if (!emailPattern.test(email)) {
            errors.push("Por favor, introduce un correo electrónico válido.");
        }

        
        if (telefono === "") {
            errors.push("El Número de Teléfono es obligatorio.");
        } else if (!/^\d+$/.test(telefono)) {
            errors.push("El Número de Teléfono debe contener solo números.");
        }

        
        if (pedidos === "") {
            errors.push("El campo de pedidos o problemas debe ser completado.");
        }

        
        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            form.submit();
        }
    });
});