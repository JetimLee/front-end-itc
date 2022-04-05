"use strict";
exports.__esModule = true;
exports.decodedValue = void 0;
function decodedValue() {
    var resistors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        resistors[_i] = arguments[_i];
    }
    var resistorValues = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9
    };
    var value1 = resistors[0];
    var value2 = resistors[1];
    if (resistorValues.hasOwnProperty(value1)) {
        console.log(value1);
    }
}
exports.decodedValue = decodedValue;
decodedValue.apply(void 0, ["green", "red"]);
