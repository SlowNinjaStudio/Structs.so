/*
 * decimalToHex
 */
 
// Bless you Peter Mortensen of Stackoverflow https://stackoverflow.com/users/63550/peter-mortensen
export function decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}
