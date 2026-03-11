
// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    let carritoCount = 0;
    const contadorBadge = document.getElementById('contador-carrito');
    const botonesAgregar = document.querySelectorAll('.btn-agregar');

    // Función para actualizar el badge del carrito
    const actualizarCarrito = () => {
        carritoCount++;
        contadorBadge.innerText = carritoCount;
        
        // Efecto visual simple
        contadorBadge.classList.add('bg-success');
        setTimeout(() => {
            contadorBadge.classList.remove('bg-success');
        }, 500);
    };

    // Agregar evento a cada botón
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            actualizarCarrito();
            
            // Feedback al usuario
            const nombreProducto = boton.parentElement.parentElement.querySelector('.card-title').innerText;
            console.log(`Producto añadido: ${nombreProducto}`);
            alert(`¡Genial! Añadiste ${nombreProducto} al carrito.`);
        });
    });

    // Simular ver carrito
    document.getElementById('btn-carrito').addEventListener('click', () => {
        alert(`Tienes ${carritoCount} productos listos para la compra.`);
    });
});