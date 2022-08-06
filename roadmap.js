var statusBox  = document.querySelectorAll('.status_box');
var statusBtn   = document.querySelectorAll('.status_btn');
var plannedBox = document.querySelector('.planned_box');
var progressBox = document.querySelector('.progress_box');
var liveBox = document.querySelector('.live_box');



statusBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains("planned")) {
            plannedBox.classList.toggle('active');
            progressBox.classList.remove('active');
            liveBox.classList.remove('active');
        };
        if(btn.classList.contains("progress")) {
            progressBox.classList.toggle('active');
            plannedBox.classList.remove('active');
            liveBox.classList.remove('active');
        };
        if(btn.classList.contains("live")) {
            liveBox.classList.toggle('active');
            progressBox.classList.remove('active');
            plannedBox.classList.remove('active');
        };
    })
})
