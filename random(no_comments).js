/**
 * @version 1
 */
export const random = {
    randInt: function(min, max) {
        if (typeof min != 'undefined' && typeof min != 'number') {
            throw new TypeError(`Expected integer; received ${typeof min}: ${min}`);
        } else if (typeof max != 'undefined' && typeof max != 'number') {
            throw new TypeError(`Expected integer; received ${typeof max}: ${max}`);
        }
        if (arguments.length == 1) {
            max = min;
            min = 0;
        } else if (arguments.length == 0) {
            max = 1;
            min = 0;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;        
    },
    randBool: function(minPass) {
        if (typeof minPass != 'number' && typeof minPass != 'undefined') {
            throw new TypeError(`Expected integer; received ${typeof minPass}: ${minPass}`);
        }
        minPass = (typeof minPass == 'undefined') ? 0.5000 : minPass.toPrecision(5);
        let returnVal = (Math.random().toPrecision(5) >= minPass) ? true : false;
        return returnVal;
    },
    randIndexOfArray: function(arr) {
        if (!Array.isArray(arr) || arguments.length != 1) {
            throw new TypeError(`Expected array or string; received ${typeof arr}: ${arr}`);
        }
        return Math.floor(Math.random() * ((arr.length - 1) + 1));
    },
    randLetter: function(toCaps) {
        if ((!Array.isArray(arr) && typeof arr != 'string') || arguments.length != 1) {
            throw new TypeError(`Expected boolean; received ${typeof toCaps}: ${toCaps}`)
        }
        const letters = "abcdefghijklmnopqrstuvwxyz";
        let returnVal = letters[this.randIndexOfArray(letters)];
        if (toCaps == true) {
            returnVal = (this.randBool()) ? letters[this.randIndexOfArray(letters)].toUpperCase() : letters[this.randIndexOfArray(letters)];
        }
        return returnVal;
    },
};