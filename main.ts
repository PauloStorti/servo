input.onButtonPressed(Button.A, function () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
})
