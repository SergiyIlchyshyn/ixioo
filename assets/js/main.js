/* Link active */
const linkSidebar = document.querySelectorAll('.app-main__sidebar .nav-link');

function activeLink() {
    if (linkSidebar) {
        linkSidebar.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    }
}
linkSidebar.forEach(l => l.addEventListener('click', activeLink));


/* Chart.js */
const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};