const video = document.getElementById('video');

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    faceapi.nets.faceExpressionNet.loadFromUri("/models")

]).then(startVideo)

function startVideo() {
    var constraints = {
        audio: false,
        video: {
            // facingMode: 'user'
        }
   }

   navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
       video.srcObject = stream;
   });
}

let expression = "";

video.addEventListener('playing', () => {
    const canvas = faceapi.createCanvasFromMedia(video)

    document.body.prepend(canvas);
    canvas.setAttribute('id', 'canvas')
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize);

    setInterval( async () => {
        const detections = await faceapi.detectAllFaces(
            video, 
            new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceExpressions()
        if (detections[0]) {
            expression = Object.keys(detections[0].expressions).reduce((a, b) => detections[0].expressions[a] > detections[0].expressions[b] ? a : b);
            document.getElementById("emotion").innerHTML = expression;
        }
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
    }, 100);

})


document.getElementById('lock-emotion').addEventListener("click", function() {
    if (document.getElementById('emotion').innerHTML.substring(0,4) === 'PEND') { 
        console.log("pending");
    } else {
        video.pause()
        document.getElementById('reset-emotion').style.display = 'block';
        document.getElementById('lock-emotion').style.display = 'none';
        document.getElementById('percentage').style.display = 'block';
    }
})

document.getElementById('reset-emotion').addEventListener("click", function() {
    video.play()
    document.getElementById('reset-emotion').style.display = 'none';
    document.getElementById('lock-emotion').style.display = 'block';
    document.getElementById('percentage').style.display = 'none';
})



document.getElementById('share-socials-twitter').addEventListener("click", function() {
    document.getElementById('share-social-button').innerHTML = '2. Share experience to socials. <i class="fal fa-check-square exit-checkbox"></i>'
    let url = `https://twitter.com/intent/tweet?text=I%20have%20been%20selected%20by%20STARSET%20to%20beta%20test%20the%20BMI%20at%20experience.starsetonline.com.%20It%20made%20me%20feel%20` + expression + `!`
    window.open(url, '_blank').focus();
})

document.getElementById('share-socials-facebook').addEventListener("click", function() {
    document.getElementById('share-social-button').innerHTML = '2. Share experience to socials. <i class="fal fa-check-square exit-checkbox"></i>'
    let url = `https://www.facebook.com/share.php?u=experience.starsetonline.com&quote=I%20have%20been%20selected%20by%20STARSET%20to%20beta%20test%20the%20BMI%20at%20experience.starsetonline.com.%20It%20made%20me%20feel%20` + expression + `!`
    window.open(url, '_blank').focus();
})

document.getElementById('submission-link').addEventListener("click", function() {
    window.location.href = "/submission"
})
