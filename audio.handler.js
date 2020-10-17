let analyser = null
let bufferLength = null
let dataArray = null

var sound = new Howl({
    src: ['oxiliary.mp3'],
    volume: 0.09,
});

sound.play();

analyser = Howler.ctx.createAnalyser()
Howler.masterGain.connect(analyser)
analyser.connect(Howler.ctx.destination)
analyser.fftSize = 2048
analyser.minDecibels = -90
analyser.maxDecibels = -10
analyser.smoothingTimeConstant = 0.85
bufferLength = analyser.frequencyBinCount
dataArray = new Uint8Array(bufferLength)