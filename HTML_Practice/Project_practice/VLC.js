console.log("I am VLC")

const speedUp = document.querySelector("#Speed-up")
const speedDowp = document.querySelector("#Speed-down")
const volumeUp = document.querySelector("#volume-Up")
const speedDown = document.querySelector("#volume-Down")

const alert_fn = function() {
    alert("I am clicked");
}
speedUp.addEventListener("click", alert_fn)


////////////////

document.getElementById('open-btn').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        window.open(url, '_blank');
    }
});
