 google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Site', ''],
            ['Landing page',     11],
            ['Сайт-витрина',      3],
            ['Opencart',  2],
            ['Wordpress blog/shop', 2],
            ['Сайт-визитка',    7]
        ]);

        var options = {
          title: 'Мы мы работали с такими сайтами',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }