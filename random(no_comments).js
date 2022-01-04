/**
 * @version 1.1
 */
export const random = {
    randInt(min, max) {
        if (typeof min != 'undefined' && typeof min != 'number') {
            throw new TypeError(`Expected integer. Received ${typeof min}: ${min}`);
        } else if (typeof max != 'undefined' && typeof max != 'number') {
            throw new TypeError(`Expected integer. Received ${typeof max}: ${max}`);
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
    randBool(minPass) {
        if (typeof minPass != 'number' && typeof minPass != 'undefined') {
            throw new TypeError(`Expected integer. Received ${typeof minPass}: ${minPass}`);
        }
    
        minPass = typeof minPass == 'undefined' ? 0.5 : parseFloat(minPass.toFixed(4));
        
        return parseFloat(Math.random().toFixed(4)) > minPass ? true : false;
    },
    randIndexOfArray: function(arr) {
        if ((!Array.isArray(arr) && typeof arr != 'string') || arguments.length != 1) {
            throw new TypeError(`Expected array or string. Received ${typeof arr}: ${arr}`);
        }

        return Math.floor(Math.random() * ((arr.length - 1) + 1));
    },
    randLetter(toCaps) {
        if (typeof toCaps != 'boolean' && typeof toCaps != 'undefined') {
            throw new TypeError(`Expected boolean. Received ${typeof toCaps}: ${toCaps}`)
        }

        const letters = "abcdefghijklmnopqrstuvwxyz";        

        return (toCaps) ? letters[Math.floor(Math.random() * ((letters.length - 1) + 1))].toUpperCase() : letters[Math.floor(Math.random() * ((letters.length - 1) + 1))];
    },
};
