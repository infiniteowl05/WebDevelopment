function myFunc(totalInterest){
  var ctx = document.getElementById("myChart").getContext('2d');
  var chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Interest", "Principal"],
      datasets: [{
        backgroundColor: [
          "black",
          "#007BFF"
        ],
        data: [parseInt(totalInterest), parseInt(document.getElementById("loanAmount").value)]
      }]
    },
    options: {
      legend: {
        display: false
      },
    }
  });

  var myLegendContainer = document.getElementById("legend");
  // generate HTML legend
  myLegendContainer.innerHTML = chart.generateLegend();
  // bind onClick event to all LI-tags of the legend
  var legendItems = myLegendContainer.getElementsByTagName('li');
  for (var i = 0; i < legendItems.length; i += 1) {
    legendItems[i].addEventListener("click", legendClickCallback, false);
  }
}

function legendClickCallback(event) {
  event = event || window.event;

  var target = event.target || event.srcElement;
  while (target.nodeName !== 'LI') {
    target = target.parentElement;
  }
  var parent = target.parentElement;
  var chartId = parseInt(parent.classList[0].split("-")[0], 10);
  var chart = Chart.instances[chartId];
  var index = Array.prototype.slice.call(parent.children).indexOf(target);
  var meta = chart.getDatasetMeta(0);
  console.log(index);
	var item = meta.data[index];

  if (item.hidden === null || item.hidden === false) {
    item.hidden = true;
    target.classList.add('hidden');
  } else {
    target.classList.remove('hidden');
    item.hidden = null;
  }
  chart.update();
}
