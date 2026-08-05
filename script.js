function toggleSidebar(hide) {
  document.body.classList.toggle('sidebar-hidden', hide);
  localStorage.setItem('sidebarHidden', hide);
}
 
function toggleCard(card) {
  card.classList.toggle('expanded');
}
 
function isMobile() {
  return window.innerWidth <= 768;
}
 
window.addEventListener('DOMContentLoaded', function () {
  var stored = localStorage.getItem('sidebarHidden');
 
  if (stored === 'true') {
    document.body.classList.add('sidebar-hidden');
  } else if (stored === null && isMobile()) {
    // Primera visita en móvil: sidebar cerrado por defecto
    document.body.classList.add('sidebar-hidden');
  }
 
  // Backdrop: clic fuera del sidebar en móvil lo cierra
  var backdrop = document.querySelector('.sidebar-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', function () {
      toggleSidebar(true);
    });
  }
 
  // Al navegar a otra página desde móvil, cerrar sidebar antes de salir
  document.querySelectorAll('.sidebar nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (isMobile()) {
        localStorage.setItem('sidebarHidden', 'true');
      }
    });
  });
});
