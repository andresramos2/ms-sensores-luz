basic.forever(function () {
    if (input.soundLevel() > 60) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 183)
        motor.servo(motor.Servos.S8, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
        motor.servo(motor.Servos.S8, 106)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
