function toggleSidebar(hide) {
  document.body.classList.toggle('sidebar-hidden', hide);
  localStorage.setItem('sidebarHidden', hide);
}

function toggleCard(card) {
  card.classList.toggle('expanded');
}

window.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('sidebarHidden') === 'true') {
    document.body.classList.add('sidebar-hidden');
  }
});
