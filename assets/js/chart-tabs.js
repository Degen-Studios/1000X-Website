document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.chart-tab');
    const frames = document.querySelectorAll('.chart-frame');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetChart = tab.dataset.chart;

            tabs.forEach(t => t.classList.remove('active'));
            frames.forEach(f => f.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(targetChart).classList.add('active');
        });
    });
});
