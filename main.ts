radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        xPosition += 1
    } else if (receivedNumber == 1) {
        xPosition += -1
    } else if (receivedNumber == 2) {
        yPosition += 1
    } else {
        yPosition += -1
    }
})
radio.setGroup(1)
let xPosition = -5
let yPosition = 0
basic.forever(function () {
    led.plot(xPosition, yPosition)
})
