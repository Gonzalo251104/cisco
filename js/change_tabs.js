// change_tabs.js
// Control de pestañas y galería interactiva de productos de DS3 Comunicaciones

// Función para intercambiar la imagen principal al hacer clic en las miniaturas
function toExchangeImage(thumbnail) {
    const mainImg = document.getElementById('img_main');
    if (mainImg && thumbnail) {
        mainImg.src = thumbnail.src;
        mainImg.alt = thumbnail.alt;
    }
}

// Función para abrir la visualización de imagen en pantalla completa (modal)
function viewImage(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    if (modal && modalImg) {
        modalImg.src = src;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Deshabilita scroll de fondo
    }
}

// Función para cerrar el modal de imagen
function closeModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restablece scroll de fondo
    }
}

// Inicialización de comportamientos de pestañas y cierre de modal
document.addEventListener('DOMContentLoaded', function() {
    const productTab = document.getElementById('product-tab');
    const imagesTab = document.getElementById('images-tab');
    const infoSection = document.getElementById('information-section');
    const imagesSection = document.getElementById('images-section');

    if (productTab && imagesTab && infoSection && imagesSection) {
        productTab.addEventListener('click', function() {
            // Activar pestaña Producto
            productTab.classList.remove('bg-gray-100', 'text-gray-700');
            productTab.classList.add('bg-blue-600', 'text-white');
            
            // Desactivar pestaña Imágenes
            imagesTab.classList.remove('bg-blue-600', 'text-white');
            imagesTab.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
            
            // Mostrar sección de información, ocultar galería
            infoSection.classList.remove('hidden');
            imagesSection.classList.add('hidden');
        });

        imagesTab.addEventListener('click', function() {
            // Activar pestaña Imágenes
            imagesTab.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
            imagesTab.classList.add('bg-blue-600', 'text-white');
            
            // Desactivar pestaña Producto
            productTab.classList.remove('bg-blue-600', 'text-white');
            productTab.classList.add('bg-gray-100', 'text-gray-700');
            
            // Mostrar galería de imágenes, ocultar información
            imagesSection.classList.remove('hidden');
            infoSection.classList.add('hidden');
        });
    }

    // Cerrar modal al hacer clic en el fondo oscuro
    const imageModal = document.getElementById('image-modal');
    if (imageModal) {
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                closeModal();
            }
        });
    }

    // Cerrar modal presionando la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
