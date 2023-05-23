basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() > 5) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 183)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
