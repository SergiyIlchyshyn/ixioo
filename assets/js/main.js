/* Link active */
const linkSidebar = document.querySelectorAll('.app-main__sidebar .nav-link');

function activeLink() {
    if (linkSidebar) {
        linkSidebar.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    }
}
linkSidebar.forEach(l => l.addEventListener('click', activeLink));
