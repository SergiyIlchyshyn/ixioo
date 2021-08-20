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
var options = {
    chart: {
        height: 220,
        type: "radialBar",
        dropShadow: {
            enabled: true,
            enabledSeries: undefined,
            top: 5,
            left: 2,
            blur: 10,
            opacity: 0.25
        }
        },
        plotOptions: {
        radialBar: {
            hollow: {
            margin: 0,
            size: "80%",
            background: "#fff",
            position: "front"
            },
            track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5
            }
            },
    
            dataLabels: {
            showOn: "always",
            name: {
                offsetY: -20,
                show: true,
                color: "#888",
                fontSize: "13px"
            },
            value: {
                formatter: function(val) {
                return 2280;
                },
                color: "#111",
                fontSize: "30px",
                show: true
            }
            }
        }
    },

    series: [74],
    stroke: {
    lineCap: "round"
    },
    labels: ["Goal"]
};

var chart = new ApexCharts(document.querySelector("#chart-accuracy"), options);

chart.render();