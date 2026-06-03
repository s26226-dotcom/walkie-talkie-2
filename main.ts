// When button A is pressed
input.onButtonPressed(Button.A, function () {
    radio.sendString("HELLO")
})
// When both buttons are pressed
input.onButtonPressed(Button.AB, function () {
    radio.sendString("HELP")
})
// When a message is received
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
// When button B is pressed
input.onButtonPressed(Button.B, function () {
    radio.sendString("COME")
})
radio.setGroup(1)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.clearScreen()
