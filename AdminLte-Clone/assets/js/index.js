let ctx = document.getElementById('myChart').getContext('2d');

let chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Janv', 'feb', 'mar', 'avr', 'may', 'jul'],
    datasets: [{
      label: 'migration of DB',
      data: [12, 19, 3, 5, 10, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    },{
      label: 'testing & CI',
      data:  [12, 17, 5, 8, 2, 10],
      backgroundColor: [ 
        'rgba(255, 159, 64, 0.3)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
       
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
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
      easing:'linear',
  }
  }
});
chart.config.options.scales.xAxes[0].gridLines.display = false
chart.config.options.scales.yAxes[0].gridLines.display = false

chart.config.options.showLines=false

console.log(chart.config.options.scales)
chart.canvas.parentNode.style.height = '300px';
chart.canvas.parentNode.style.width = '600px';

// options.scales[scaleId].gridLines.display= false