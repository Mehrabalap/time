input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    timeanddate.advanceBy(1, timeanddate.TimeUnit.Seconds)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (steps))
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    mag = input.magneticForce(Dimension.Strength)
    if (mag > 200) {
        music.playMelody("- - F G F D C - ", 400)
    } else {
        music.playMelody("C C5 C E E E - F ", 400)
    }
    led.plotBarGraph(
    mag,
    0
    )
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr) + " date" + timeanddate.dateToDayOfWeek(1, 20, 2020))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (tikm == 0) {
        begintime = 0
        elapsed = 0
        begintime = input.runningTime()
        tikm = 1
    } else {
        elapsed = elapsed - input.runningTime()
        basic.showString("" + (elapsed / 1000))
        basic.clearScreen()
        tikm = 0
    }
})
input.onGesture(Gesture.ThreeG, function () {
    steps += 1
})
let elapsed = 0
let begintime = 0
let tikm = 0
let mag = 0
let steps = 0
timeanddate.set24HourTime(11, 42, 0)
timeanddate.setDate(4, 14, 2022)
steps = 0
