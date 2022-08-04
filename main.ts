let Randon = 0
input.onGesture(Gesture.Shake, function () {
    Randon = randint(1, 6)
    if (Randon == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            # # # # #
            # . # . #
            `)
    } else if (Randon == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (Randon == 3) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . # # # #
            . . . # #
            . . . # #
            `)
    } else if (Randon == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            `)
    }
})
