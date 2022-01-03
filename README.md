# Random.js
This is a js library which aims to make generating random numbers, letters, boolean values, etc easier.

## Getting started
1. Make sure that the script tag that you are going to import the object into has the type="module" within it
2. Now in your script file go to the top of the file and type import { random } from './placeHolderFilePath';

### Methods:
* randInt() 
    * Returns a number value from the specified min and max values.
    * It has two parameters min, and max. If called with no arguments<br>
    it will return either 0 or 1; if called with 1 argument then it will<br>
    return a number between 0 and the value specified argument
        * If called with an argument which is anything but a<br>
        number or no argument then it will throw a TypeError
        
        
* randBool()
    * Randomly returns either true or false
    * It has one parameter minPass. If called with no arguments<br>
    it will return true or false completly randomly(no<br>
    bias/weighting). To bias the result call the method with<br>
    a float bewteen 0 and 1. The higher the float the less<br>
    likely it is to return true.
        * If called with an argument which is not a number<br>
        it will throw a TypeError
        
        
* randIndexOfArray()
    * Returns a random index of an array/string that is passed as<br>
    an argument.
    * It has one parameter. You cannot call this method without an<br>
    argument; you must call it with either a string or an array<br>
        * If called with something that it not either a string or<br>
        an array then it will throw a TypeError
