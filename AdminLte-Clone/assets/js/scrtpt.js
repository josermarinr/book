let ctx = document.getElementById('myChart').getContext('2d');

let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janv', 'feb', 'mar', 'avr', 'may', 'jul'],
        datasets: [{
            label: 'migration of DB',
            data: [12, 19, 3, 5, 10, 3],
            backgroundColor: [
                'rgba(238, 120, 108, 0.2)',
            ],
            borderColor: [
                'rgba(238, 120, 108, 1)',
            ],
            borderWidth: 1
        }, {
            label: 'testing & CI',
            data: [12, 17, 5, 8, 2, 10],
            backgroundColor: [
                'rgba(16, 19, 62, 0.3)',

            ],
            borderColor: [
                'rgba(16, 19, 62, 1)',
            ],
            borderWidth: 1
        },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }

        },
        animation: {
            duration: 1500,
            easing: 'linear',
        }
    }
});

chart.config.options.scales.xAxes[0].gridLines.display = false
chart.config.options.scales.yAxes[0].gridLines.display = false

chart.canvas.parentNode.style.height = '300px';
chart.canvas.parentNode.style.width = '600px';

/*
function od delete row
*/


// Create a "close" button and append it to each list item
let myTable = document.getElementById('TableTodo');

let close = document.getElementsByClassName("botonClose");
let i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let tr = this.parentElement;
    tr.parentElement.style.display = "none";
  }
}
