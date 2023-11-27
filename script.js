// Función para comprobar si el usuario está en un dispositivo móvil
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  // Función para mostrar u ocultar elementos según el dispositivo
  function toggleElements() {
    const qrCode = document.querySelector('.qr-code');
    const downloadLink = document.querySelector('.download');
  
    if (isMobileDevice()) {
      qrCode.style.display = 'none'; // Oculta el código QR en dispositivos móviles
      downloadLink.style.display = 'block'; // Muestra el enlace de descarga
    } else {
      qrCode.style.display = 'block'; // Muestra el código QR en otros dispositivos
      downloadLink.style.display = 'none'; // Oculta el enlace de descarga
    }
  }
  
  // Ejecuta la función al cargar la página para mostrar u ocultar los elementos adecuados
  window.onload = toggleElements;
  