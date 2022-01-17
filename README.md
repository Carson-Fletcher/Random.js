# Random.js
This is a js library which aims to make generating random numbers, letters, boolean values, etc easier.

## Getting started
Add a script tag to either the head or body of an HTML document to add the object into the global namespace. Once you have that all of the methods are accessible.
<script type="text/javascript" charset="UTF-8" src="https://randomjs.carsonfletcher.repl.co/random.min.js"></script>
### Example method calls:
1. random.randInt(0, 10);
2. random.randBool();
3. random.shuffleArr([1,2,3,4,5]);
### Methods:
#### randInt(a: int, b: int) -> int
    * Returns a integer value from the specified min and max values.
    * It has two parameters min, and max. If called with no arguments<br>
    it will return either 0 or 1; if called with 1 argument then it will<br>
    return a number between 0 and the value specified argument
        * If called with an argument which is anything but a<br>
        number or no argument then it will throw a TypeError   
#### randFloat(a: int | float, b: int | float, c: int) -> int | float
    * Returns a float value from the specified min and max values with<br>
    the amount of decimal places as specified
    * It has 3 parameters min, max, and fixed. If called with no arguments<br>
    it will return either 0 or 1 with two decimal places; if called with 1<br>
    argument then it will return a number between 0 and the specified<br>
    argument with two decimal places; if called with two arguments then<br>
    it will return a number from between the two specified values with<br>
    two decimals places.
        * If called with either an argument which is not a number<br>
        or no argument then it will throw a TypeError
#### randBool() -> bool
    * Randomly returns either true or false
#### randLet() -> string
    * Randomly returns a letter from a to z
#### randChoice(a: str | arr) -> str | float | int | bool
    * Returns the value of a random index from the string or array passed<br>
    as an argument
    * It has one parameter arr. If called with no arguments or with a value<br>
    which is not a string or array it will throw a TypeError.
#### shuffleArr(a: arr) -> arr
    * Returns an array with the same value as the array it is passed with a<br>
    different order. It has one parameter arr. If passed either a value which<br>
    is not an array or with no argument it will throw a TypeError
#### shuffleStr(a: str) -> str
    * Returns an string with the same value as the string it is passed with a<br>
    different order. It has one parameter arr. If passed either a value which<br>
    is not an string or with no argument it will throw a TypeError
