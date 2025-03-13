let sensorValue = 0
basic.forever(function () {
    sensorValue = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(sensorValue)
    if (sensorValue >= 600 && sensorValue <= 699) {
        music.play(music.stringPlayable("C D C D E D C D ", 150), music.PlaybackMode.UntilDone)
    } else if (sensorValue >= 500 && sensorValue <= 599) {
        music.play(music.stringPlayable("C5 B C5 B A B C5 B ", 150), music.PlaybackMode.UntilDone)
    } else if (sensorValue >= 400 && sensorValue <= 499) {
        music.play(music.stringPlayable("F G A G F G A B ", 195), music.PlaybackMode.UntilDone)
    }
    basic.pause(200)
})
