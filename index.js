// index.js
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['17/11/2025', '18/11/2025', '19/11/2025', '20/11/2025'],
            datasets: [
                { label: 'TDS', data: [254,300,324], backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1, yAxisID: 'yTDS' }, 
                { label: 'pH', data: [7.5,7.2,7.8], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1, yAxisID: 'yPH' },
                { label: 'Temperature', data: [25.6, 25.8, 25.1], backgroundColor: 'rgba(43, 175, 38, 0.2)', borderColor: 'rgba(43, 175, 38, 1)', borderWidth: 1, yAxisID: 'yTemp' }
            ]
        },
        options: {
            scales: {
                yTDS: { type: 'linear', position: 'left', beginAtZero: true, title: { display: true, text: 'TDS Value' },  },
                yPH: { type: 'linear', position: 'right', beginAtZero: false, grid: { drawOnChartArea: false }, title: { display: true, text: 'pH Value' }, min: 0, max: 14 },
                yTemp: { type: 'linear', position: 'right', beginAtZero: false, grid: { drawOnChartArea: false }, title: { display: true, text: 'Temperature' }, min: 20, max: 30 }
            }
        }
    });
});
