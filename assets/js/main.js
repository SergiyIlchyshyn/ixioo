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
var options1 = {
	chart: {
		renderTo: 'container',
        height: 150,
        width:100,
        type: 'radialBar',
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
        offsetY: 0,
		toolbar: {
			show: false
		},
	},
	plotOptions: {
        radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
            margin: 0,
            size: '65%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            
            },
            track: {
            background: '#F5F5FF',
            strokeWidth: '90%',
            margin: 0, // margin is in pixels
            
            },
            dataLabels: {
            showOn: 'always',
            name: {
                offsetY: -30,
                show: false,
                color: '#003366',
                fontSize: '17px'
            },
            value: {
                formatter: function(val) {
                return parseInt(val);
                },
                color: '#003366',
                fontSize: '28px',
                lineHight: '1',
                show: true,
                offsetY: 12,
                offsetX:0,
                
            }
            }
        }
        },
        fill: {
            colors:['#0a84ff']
        },
        series: [90],
        stroke: {
            lineCap: 'round'
        },
}
var options2 = {
	chart: {
		renderTo: 'container',
        height: 150,
        width:100,
        type: 'radialBar',
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
        offsetY: 0,
		toolbar: {
			show: false
		},
	},
	plotOptions: {
        radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
            margin: 0,
            size: '65%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            
            },
            track: {
            background: '#F5F5FF',
            strokeWidth: '75%',
            margin: 0, // margin is in pixels
            
            },
            dataLabels: {
            showOn: 'always',
            name: {
                offsetY: -30,
                show: false,
                color: '#003366',
                fontSize: '17px'
            },
            value: {
                formatter: function(val) {
                return parseInt(val);
                },
                color: '#003366',
                fontSize: '28px',
                lineHight: '1',
                show: true,
                offsetY: 12,
                offsetX:0,
                
            }
            }
        }
        },
        fill: {
        colors:['#f92e22']
        },
        series: [75],
        stroke: {
        lineCap: 'round'
	},
}

var chart1 = new ApexCharts(document.querySelector("#chart-accuracy"), options1);
var chart2 = new ApexCharts(document.querySelector("#chart-loss"), options2);

chart1.render();
chart2.render();