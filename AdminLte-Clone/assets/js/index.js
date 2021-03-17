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
        }, {
            label: 'testing & CI',
            data: [12, 17, 5, 8, 2, 10],
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
            easing: 'linear',
        }
    }
});
chart.config.options.scales.xAxes[0].gridLines.display = false
chart.config.options.scales.yAxes[0].gridLines.display = false

chart.config.options.showLines = false

chart.canvas.parentNode.style.height = '300px';
chart.canvas.parentNode.style.width = '600px';

/*
function od delete row
*/


// Create a "close" button and append it to each list item
let myTable = document.getElementById('TableTodo');
console.log(myTable)
let close = document.getElementsByClassName("example-popover");
let i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let tr = this.parentElement;
    tr.parentElement.style.display = "none";
  }
}


/*

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("buttonDelete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
*/
// }