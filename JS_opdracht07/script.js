function wallPaint (side, color) {
    console.log("The " + side + " wall is painted " + color)
}

// wallPaint("green")
// wallPaint("blue")
// wallPaint() // undefined

wallPaint("east", "red")

// The order of args is important. 