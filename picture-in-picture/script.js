const video = document.getElementById('video');
const start = document.getElementById('start');
const stopButton = document.getElementById('stop');
const takeout = document.getElementById('takeout')

var displayMediaOptions = {
    video: {
      cursor: "never"
    },
    audio: false
  };

async function onLoad(){
    try{
     video.srcObject = await navigator.mediaDevices.getDisplayMedia();
     video.onloadedmetadata = () => {
         video.play();
     }
    } catch(error){
        console.error("Error: " + error)
    }
}

takeout.addEventListener('click', ()=>{
    video.requestPictureInPicture();
})

start.addEventListener('click',onLoad);

stopButton.addEventListener('click', stopPip)

video.addEventListener('enterpictureinpicture',(event)=>{
    console.log(event)
    stopButton.textContent = 'exit pip mode'
}
)

function stopCapture(evt) {
    let tracks = video.srcObject.getTracks();
  
    tracks.forEach(track => track.stop());
    video.srcObject = null;
}

function stopPip(){
    if(document.pictureInPictureElement) {
        document.exitPictureInPicture().catch(error=>{})
    }
}

video.addEventListener('enterpictureinpicture', (event)=> {
    const pipWindow = event.pictureInPictureWindow;
    updateVideoSize(pipWindow.width, pipWindow.height);
    pipWindow.addEventListener('resize', onPipWindowResize)
}
)

video.addEventListener('leavepictureinpicture', (event)=>{
    const pipWindow = event.pictureInpictureWindow;
    pipWindow.removeEventListener('resize', onPipWindowResize)
})

function onPipWindowResize (event){
    const {width, height} = event.target;
    updateVideoSize(width, height);
}

function updateVideoSize(width, height){
    video.width = width;
    video.height = height;
}