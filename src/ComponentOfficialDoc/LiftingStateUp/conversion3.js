/**
 * 10.11 evening
 * https://reactjs.org/docs/lifting-state-up.html
 * https://codepen.io/gaearon/pen/WZpxpz?editors=0010
 *
 * Writing Conversion Functions
 * Lifting State Up
 */
const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}

const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

module.exports = {
    toCelsius: toCelsius,
    toFahrenheit: toFahrenheit,
    tryConvert: tryConvert
}
