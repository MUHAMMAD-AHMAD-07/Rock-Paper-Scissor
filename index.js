const startBtn = document.querySelector('.startButton');
startBtn.addEventListener("click", goToNextPage);

const bgMusic = document.getElementById("bgMusic");
bgMusic.play();
const audio = document.getElementById('bgMusic');

function goToNextPage() {
    window.location.href = "./gamePage.html";
}