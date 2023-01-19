const { ColorMangle } = require("colormangle");

function converter(colorString) {
    return new ColorMangle(colorString).hex();
}

console.log(converter('blue'))