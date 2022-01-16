/* random.js version 1.2 https://github.com/Carson-Fletcher/Random.js/README */
const random = {
    randInt(min, max) {
        if (arguments.length == 1) {
            max = min;
            min = 0;
        }

        if (arguments.length == 0) {
            max = 1;
            min = 0;
        }

        if (!Number.isInteger(min)) {
            throw TypeError(`Expected integer. Received ${typeof min}: ${min}`);
        }

        if (!Number.isInteger(max)) {
            throw TypeError(`Expected integer. Received ${typeof max}: ${max}`);
        }

        if (max < min) {
            [max, min] = [min, max];
        }
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randFloat(min, max, fixed) {
        if (arguments.length == 2) fixed = 2;
        if (arguments.length == 1) {
            max = min;
            min = 0;
            fixed = 2;
        }

        if (arguments.length == 0) {
            max = 1;
            min = 0;
            fixed = 2;
        }

        if (isNaN(min)) {
            throw TypeError(`Expected integer or float. Received ${typeof min}: ${min}`);
        }

        if (isNaN(max)) {
            throw TypeError(`Expected integer or float. Received ${typeof max}: ${max}`);
        }

        if (!Number.isInteger(fixed) || fixed < 0) {
            throw TypeError(`Expected positive integer. Received ${typeof fixed}: ${fixed}`);
        }

        if (max < min) {
            [max, min] = [min, max];
        }

        return parseFloat((Math.random() * (max - min) + min).toFixed(fixed));
    },
    randBool() {
        return Math.random() + 0.5 >> 0 == 1;
    },
    randLet() {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        return letters[Math.floor(Math.random() * ((letters.length - 1) + 1))]
    },
    randChoice(arr) {
        if ((!arguments.length && arr === undefined) || (!Array.isArray(arr) && typeof arr !== 'string')) {
            throw new TypeError(`Expected array or string. Received ${typeof arr}: ${arr}`);
        }

        return arr[Math.floor(Math.random() * ((arr.length - 1) + 1))];
    },
    shuffleArr(arr) {
        if ((!arguments.length && !arr.length) || (!Array.isArray(arr))) {
            throw new TypeError(`Expected array. Received ${typeof arr}: ${arr}`);
        }

        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        return arr;
    },
    shuffleStr(str) {
        if ((!arguments.length && !arr.length) || (typeof str !== 'string')) {
            throw new TypeError(`Expected string. Received ${typeof str}: ${str}`);
        }

        str = str.split("");
        let n = str.length;

        for(let i = n - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [str[i], str[j]] = [str[j], str[i]]
        }
        
        return str.join("");
    }
};
