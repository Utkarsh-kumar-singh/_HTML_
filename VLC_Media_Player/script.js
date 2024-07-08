const speedUp = document.querySelector("#speedUp")
const SpeedDown = document.querySelector("#SpeedDown")
const VolumeUp = document.querySelector("#VolumeUp")
const VolumeDown = document.querySelector("#VolumeDown")
const OpenBtn = document.querySelector("#OpenVideo")
const videoInput = document.querySelector("#video-input")
const videoPlayer = document.querySelector("#main")

const speedUpHandler = function(){
    alert("Clicked")
}

speedUp.addEventListener("click", speedUpHandler)

const hanleInput = () =>{
    videoInput.click();
}

const acceptInputHandler = (obj)=>{
    const selectedFiles = obj.target.files[0];
    // console.log("Files", selectedFiles);
    const link  = URL.createObjectURL(selectedFiles);
    const videoElement = document.createElement("video")
    videoElement.src = link;
    videoElement.setAttribute("class","video")
    videoElement.controls = "true"
    videoPlayer.appendChild(videoElement);
    videoElement.play();

}

OpenBtn.addEventListener("click", hanleInput)
videoInput.addEventListener("change", acceptInputHandler)