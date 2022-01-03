/**
 * @version 1
 */
export const random = {
    /**
     * This method is used to simplifie the generation of random integers
     * between a given min, and max(inclusive eg. number generated with
     * random.randInt(1-3) would generate 1, 2 & 3 not just 1 & 2). 
     * 
     * @param {number} min Minimum number for generation
     * @param {number} max Maximum number for generation 
     * @returns {number} Returns the random number
     * @throws {TypeError} If the args are not valid ie not a number it will throw them.
     */
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

    /**
     * This method will return a random boolean based on a minimum passing value. This
     * minPass value allows you to call this and have the output favour either true or
     * false. (eg: random.randBool(0.125) has a higher change of returning true then value)
     * 
     * @param {number} minPass Minimum value to return true. Higher value means less likely to return true.
     * @returns {boolean} Returns either true or false.
     * @throws {TypeError} If the value of the argument this method is called with is not either a number or undefined it will throw it.
     */
    randBool: function(minPass) {
        if (typeof minPass != 'number' && typeof minPass != 'undefined') {
            throw new TypeError(`Expected integer; received ${typeof minPass}: ${minPass}`);
        }

        minPass = (typeof minPass == 'undefined') ? 0.5000 : minPass.toPrecision(5);

        let returnVal = (Math.random().toPrecision(5) > minPass) ? true : false;
        return returnVal;
    },

    /**
     * This method will random pick an index from the array called as an
     * argument.
     * 
     * @param {Array} arr 
     * @returns {number} Returns a random number between 0 and the max index.
     * @throws {TypeError} If the argument is not an array then it throws it.
     */
    randIndexOfArray: function(arr) {
        if ((!Array.isArray(arr) && typeof arr != 'string') || arguments.length != 1) {
            throw new TypeError(`Expected array or string; received ${typeof arr}: ${arr}`);
        }

        return Math.floor(Math.random() * ((arr.length - 1) + 1));
    },

    /**
     * This method will return a random letter from a-z with random
     * capitilization if specified.
     * 
     * @param {boolean} toCaps Determines if the method randomly capitilize the letter.
     * @returns {string} Returns random letter from a-z either capitilized or not.
     * @throws {TypeError} If the argument is not a boolean it throws it.
     */
    randLetter: function(toCaps) {
        if (typeof toCaps != 'boolean' && typeof toCaps != 'undefined') {
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